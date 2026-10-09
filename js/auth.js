/**
 * राजस्थान ग्राम पंचायत अजनावर - Enterprise Auth & Security Manager
 * Zero-Trust Supabase Authentication Engine (Super Admin Control)
 */

(function (window) {
  'use strict';

  let sbClient = null;

  function getClient() {
    if (!sbClient) {
      if (typeof supabase !== 'undefined' && typeof PANCHAYAT_CONFIG !== 'undefined' && PANCHAYAT_CONFIG.supabaseUrl) {
        sbClient = supabase.createClient(PANCHAYAT_CONFIG.supabaseUrl, PANCHAYAT_CONFIG.supabaseKey, {
          auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: false
          }
        });
      }
    }
    return sbClient;
  }

  const SecureAuth = {
    isReady: function () {
      return getClient() !== null;
    },

    getCurrentSession: async function () {
      const client = getClient();
      if (!client) return null;
      try {
        const { data: { session }, error } = await client.auth.getSession();
        if (error || !session) return null;
        let role = session.user.user_metadata?.role;
        if (!role && session.user.email === 'kuldeepbheel15@gmail.com') {
          role = 'super';
        }
        return {
          user: session.user,
          role: role || 'viewer',
          name: session.user.user_metadata?.display_name || 'Super Admin'
        };
      } catch (e) {
        return null;
      }
    },

    login: async function (email, password) {
      const client = getClient();
      if (!client) {
        return { success: false, message: "डेटाबेस कनेक्शन उपलब्ध नहीं है।" };
      }

      if (typeof email !== 'string' || typeof password !== 'string') {
        return { success: false, message: "अमान्य इनपुट।" };
      }

      const trimmedEmail = email.trim();
      const trimmedPass = password.trim();

      if (!trimmedEmail || !trimmedPass) {
        return { success: false, message: "ईमेल और पासवर्ड दर्ज करना अनिवार्य है।" };
      }

      if (email !== trimmedEmail || password !== trimmedPass) {
        return { success: false, message: "सुरक्षा अलर्ट: ईमेल या पासवर्ड में स्पेस (खाली जगह) अस्वीकृत है।" };
      }

      try {
        const { data, error } = await client.auth.signInWithPassword({
          email: trimmedEmail,
          password: trimmedPass
        });

        if (error) {
          return { success: false, message: "अमान्य क्रेडेंशियल्स! ईमेल अथवा पासवर्ड गलत है।" };
        }

        let role = data.user.user_metadata?.role;
        if (!role && data.user.email === 'kuldeepbheel15@gmail.com') {
          role = 'super';
        }

        if (!role || (role !== 'super' && role !== 'sarpanch' && role !== 'vdo')) {
          await client.auth.signOut();
          return { success: false, message: "अनाधिकृत खाता! इस ईमेल के पास प्रशासनिक अधिकार नहीं हैं।" };
        }

        return {
          success: true,
          user: data.user,
          role: role,
          name: data.user.user_metadata?.display_name || "Super Admin"
        };
      } catch (err) {
        return { success: false, message: "सर्वर प्रमाणीकरण त्रुटि। कृपया पुनः प्रयास करें।" };
      }
    },

    changePassword: async function (newPassword) {
      const client = getClient();
      if (!client) return { success: false, message: "कनेक्शन उपलब्ध नहीं है।" };

      if (!newPassword || newPassword !== newPassword.trim()) {
        return { success: false, message: "पासवर्ड में खाली स्पेस मान्य नहीं है।" };
      }

      if (newPassword.length < 8) {
        return { success: false, message: "पासवर्ड कम से कम 8 अक्षरों का होना चाहिए।" };
      }

      try {
        const { error } = await client.auth.updateUser({
          password: newPassword
        });

        if (error) {
          return { success: false, message: error.message };
        }

        return { success: true, message: "पासवर्ड क्लाउड पर सुरक्षित अपडेट हो गया! अब केवल यही पासवर्ड मान्य रहेगा।" };
      } catch (e) {
        return { success: false, message: "पासवर्ड बदलने में असमर्थ।" };
      }
    },

    logout: async function () {
      const client = getClient();
      if (client) {
        try {
          await client.auth.signOut();
        } catch (e) {}
      }
    }
  };

  window.SecureAuth = SecureAuth;
})(window);
