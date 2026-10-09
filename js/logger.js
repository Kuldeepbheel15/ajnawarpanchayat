const AuditLogger = {
  getSupabaseClient() {
    if (typeof supabase !== 'undefined' && typeof PANCHAYAT_CONFIG !== 'undefined' && PANCHAYAT_CONFIG.supabaseUrl) {
      try {
        return supabase.createClient(PANCHAYAT_CONFIG.supabaseUrl, PANCHAYAT_CONFIG.supabaseKey);
      } catch (err) {}
    }
    return null;
  },

  getDeviceInfo() {
    const ua = navigator.userAgent || "";
    let deviceType = "Desktop / PC";
    if (/Android/i.test(ua)) deviceType = "Android Mobile";
    else if (/iPhone|iPad/i.test(ua)) deviceType = "iOS Device";

    return {
      device: deviceType,
      screenResolution: `${window.innerWidth}x${window.innerHeight}`,
      timeString: new Date().toLocaleString("hi-IN", { hour12: true })
    };
  },

  async log(role, action, details) {
    const devInfo = this.getDeviceInfo();
    const logEntry = {
      role: role || "Admin",
      action: action || "ACTION",
      details: details || "No details provided",
      device_info: devInfo.device,
      screen_resolution: devInfo.screenResolution
    };

    let allLogs = [];
    try {
      allLogs = JSON.parse(localStorage.getItem("ajnawar_audit_logs")) || [];
    } catch (e) {
      allLogs = [];
    }

    allLogs.unshift({
      ...logEntry,
      device: devInfo.device,
      screen: devInfo.screenResolution,
      timestamp: devInfo.timeString
    });

    if (allLogs.length > 50) allLogs = allLogs.slice(0, 50);
    
    try {
      localStorage.setItem("ajnawar_audit_logs", JSON.stringify(allLogs));
    } catch (e) {}

    try {
      const client = this.getSupabaseClient();
      if (client) {
        await client.from('audit_logs').insert([logEntry]);
      }
    } catch (e) {}
  },

  getLogs() {
    try {
      return JSON.parse(localStorage.getItem("ajnawar_audit_logs")) || [];
    } catch (e) {
      return [];
    }
  },

  clearLogs() {
    try {
      localStorage.removeItem("ajnawar_audit_logs");
    } catch (e) {}
  }
};
