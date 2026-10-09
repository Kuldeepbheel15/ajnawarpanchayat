const UNIVERSAL_AVATAR = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23e2e8f0'/%3E%3Ccircle cx='50' cy='38' r='18' fill='%23003366'/%3E%3Cpath d='M20,82 C20,64 34,60 50,60 C66,60 80,64 80,82 Z' fill='%23003366'/%3E%3C/svg%3E";

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const CURRENT_APP_VERSION = "v2026_GP_AJNAWAR_ENTERPRISE_FINAL_STABLE";

const defaultData = {
  version: CURRENT_APP_VERSION,
  notice: "आगामी साधारण ग्राम सभा की आवश्यक सूचना: समस्त ग्रामवासी एवं जनप्रतिनिधि 25 तारीख को पंचायत सचिवालय में सादर आमंत्रित हैं।",
  panchayatNews: [
    {
      id: "DOC-2026-01",
      date: "05/10/2026",
      title: "Press Note Regarding PMAY-G (Pradhan Mantri Awas Yojana) Final Verification List - 2026",
      dispatch: "क्र.सं./ग्रा.पं.अ./आवास/2026/412",
      body: "सर्वसाधारण को सूचित किया जाता है कि ग्राम पंचायत अजनावर के अंतर्गत प्रधानमंत्री आवास योजना (ग्रामीण) वित्तीय वर्ष 2026-27 के पात्र लाभार्थियों की प्राथमिक सत्यापन सूची जारी कर दी गई है। पात्र लाभार्थी सूची का मिलान ग्राम पंचायत सूचना पट्ट अथवा ई-मित्र केंद्र पर कर सकते हैं।"
    },
    {
      id: "DOC-2026-02",
      date: "05/10/2026",
      title: "Office Order: Special Gram Sabha Meeting & Action Plan Approval - 2026-27",
      dispatch: "क्र.सं./ग्रा.पं.अ./प्रशासन/2026/415",
      body: "पंचायती राज अधिनियम के तहत ग्राम पंचायत अजनावर में साधारण ग्राम सभा का आयोजन आगामी 25 तारीख को प्रातः 10:30 बजे पंचायत भवन में किया जाएगा।"
    },
    {
      id: "DOC-2026-03",
      date: "02/10/2026",
      title: "Press Note Regarding Residential Patta Distribution Camp (Abhiyan 2026)",
      dispatch: "क्र.सं./ग्रा.पं.अ./पट्टा/2026/389",
      body: "ग्राम पंचायत अजनावर की सीमा में आने वाले आबादी क्षेत्र के पुराने मकानों एवं भूखंडों के वैध नियमन हेतु आवासीय पट्टा वितरण शिविर का आयोजन किया जा रहा है।"
    },
    {
      id: "DOC-2026-04",
      date: "30/09/2026",
      title: "Notice Regarding Rabi Crop 2026 Fertilizer & Quality Seeds Availability (DAP / Urea)",
      dispatch: "क्र.सं./ग्रा.पं.अ./कृषि/2026/365",
      body: "क्षेत्र के समस्त कृषक बंधुओं को सूचित किया जाता है कि रबी फसल बुवाई हेतु ग्राम सेवा सहकारी समिति पर प्रमाणित बीज व मानक डीएपी/यूरिया खाद उपलब्ध है।"
    },
    {
      id: "DOC-2026-05",
      date: "28/09/2026",
      title: "Sanction Order for CC Road and Covered Drainage Construction in Ward No. 3 & 7",
      dispatch: "क्र.सं./ग्रा.पं.अ./विकास/2026/340",
      body: "राज्य वित्त आयोग (SFC) एवं 15वें वित्त आयोग निधि अंतर्गत वार्ड संख्या 3 और 7 में सीसी सड़क व नाली निर्माण कार्य स्वीकृत किया गया है।"
    }
  ],
  officers: [
    { role: "सरपंच (अध्यक्ष)", name: "श्री अशोक दुदानी", phone: "9829180986", file: "images/officers/sarpanch.jpg" },
    { role: "उपसरपंच", name: "श्री रामप्रसाद नागर", phone: "9414000000", file: "images/officers/upsarpanch.jpg" },
    { role: "ग्राम विकास अधिकारी (VDO)", name: "श्री ललित कुमार", phone: "+91 9602499279", file: "images/officers/vdo.jpg" },
    { role: "हल्का पटवारी (राजस्व)", name: "श्री रविशंकर मीणा", phone: "9414000111", file: "images/officers/patwari.jpg" }
  ],
  institutions: [
    { title: "राजकीय उच्च माध्यमिक विद्यालय अजनावर", head: "प्रधानाचार्य / संस्था प्रधान", phone: "9414001122", file: "images/institutions/school.jpg" },
    { title: "उप स्वास्थ्य केंद्र अजनावर", head: "ANM / CHO", phone: "9414002233", file: "images/institutions/CHO1.jpg" },
    { title: "राजकीय पशु चिकित्सा उपकेंद्र", head: "पशुधन सहायक / कंपाउंडर", phone: "9414003344", file: "images/institutions/animal.jpg" },
    { title: "उचित मूल्य की दुकान (राशन डीलर)", head: "श्री बजरंग लाल (राशन डीलर)", phone: "9414004455", file: "images/institutions/ration.jpg" },
    { title: "आंगनबाड़ी केंद्र अजनावर", head: "कार्यकर्ता व सहायिका", phone: "9414005566", file: "images/institutions/aanganbadi.jpg" },
    { title: "ई-मित्र नागरिक सेवा केंद्र", head: "ई-मित्र संचालक", phone: "9829500011", file: "images/institutions/Emitra.jpg" },
    { title: "आयुर्वेदिक औषधालय / अस्पताल", head: "वैद्य / प्रभारी", phone: "181", file: "images/institutions/ayurvedic.jpg" },
    { title: "श्री कृष्ण गौशाला अजनावर", head: "गौशाला प्रबंधक", phone: "9414400022", file: "images/institutions/gaushala.jpg" },
    { title: "सामुदायिक स्वच्छता परिसर", head: "ग्राम पंचायत देखरेख", phone: "181", file: "images/institutions/publictoilet.jpg" }
  ],
  works: [
    { name: "वार्ड 3 में सीसी सड़क निर्माण कार्य", budget: "₹ 8,50,000", agency: "SFC योजना", prog: "75%", status: "प्रगति पर", file: "images/works/ccroad.jpg" },
    { name: "वार्ड 7 में कवर्ड पक्की नाली निर्माण", budget: "₹ 3,40,000", agency: "15वां वित्त आयोग", prog: "90%", status: "प्रगति पर", file: "images/works/drainage.jpg" },
    { name: "मुक्तिधाम चारदीवारी व टीनशेड निर्माण कार्य", budget: "₹ 5,20,000", agency: "MGNREGA", prog: "100%", status: "पूर्ण", file: "images/works/ccroad.jpg" },
    { name: "सार्वजनिक चौपाल पर सौर ऊर्जा लाइट स्थापना", budget: "₹ 3,00,000", agency: "राज्य वित्त", prog: "35%", status: "प्रगति पर", file: "images/works/ccroad.jpg" }
  ],
  schemes: [
    { title: "PMAY-G (ग्रामीण आवास योजना)", desc: "पात्र परिवारों को पक्के आवास निर्माण हेतु ₹1,20,000 की वित्तीय सहायता व नरेगा मजदूरी।" },
    { title: "मनरेगा (MGNREGA रोजगार)", desc: "ग्रामीण परिवारों को 100 दिवस का निश्चित गारंटीकृत अकुशल रोजगार।" },
    { title: "जल जीवन मिशन (हर घर जल)", desc: "पंचायत के प्रत्येक परिवार तक नल से शुद्ध व सुरक्षित पेयजल कनेक्शन।" },
    { title: "सामाजिक सुरक्षा पेंशन योजना", desc: "वृद्धावस्था, विधवा एवं दिव्यांगजनों को प्रतिमाह प्रत्यक्ष आर्थिक संबल राशि।" }
  ],
  wardPanchs: [
    { ward: 1, name: "श्रीमती गीता बाई", phone: "9829000001", file: UNIVERSAL_AVATAR },
    { ward: 2, name: "श्री मुकेश मीणा", phone: "9829000002", file: UNIVERSAL_AVATAR },
    { ward: 3, name: "श्री देवकिशन नागर", phone: "9829000003", file: UNIVERSAL_AVATAR },
    { ward: 4, name: "श्रीमती संजू बाई", phone: "9829000004", file: UNIVERSAL_AVATAR },
    { ward: 5, name: "श्री कालूलाल भील", phone: "9829000005", file: UNIVERSAL_AVATAR },
    { ward: 6, name: "श्रीमती प्रेमलता शर्मा", phone: "9829000006", file: UNIVERSAL_AVATAR },
    { ward: 7, name: "श्री मदनलाल गुर्जर", phone: "9829000007", file: UNIVERSAL_AVATAR },
    { ward: 8, name: "श्री हेमराज लोधा", phone: "9829000008", file: UNIVERSAL_AVATAR },
    { ward: 9, name: "श्रीमती संतोष बाई", phone: "9829000009", file: UNIVERSAL_AVATAR },
    { ward: 10, name: "श्री जगदीश प्रसाद", phone: "9829000010", file: UNIVERSAL_AVATAR },
    { ward: 11, name: "श्री रमेश चन्द", phone: "9829000011", file: UNIVERSAL_AVATAR }
  ],
  gallery: [
    { img: "images/works/field.jpg", title: "कृषि क्षेत्र एवं ग्रामीण विकास कार्य" },
    { img: "images/works/village.jpg", title: "ग्राम पंचायत अजनावर सुंदर दृश्य" },
    { img: "images/works/ccroad.jpg", title: "सीसी सड़क निर्माण एवं विकास कार्य" },
    { img: "images/works/drainage.jpg", title: "पक्की कवर्ड नाली निर्माण कार्य" },
    { img: "images/brand/panchayat.jpg", title: "पंचायत सचिवालय भवन परिसर" }
  ],
  complaints: [
    { id: "AJN-1501", date: "28/09/2026", name: "कुलदीप नागर", phone: "9829100000", ward: "वार्ड 4", type: "सड़क एवं नाली निर्माण/मरम्मत", msg: "वार्ड 4 में मुख्य रास्ते की नाली अवरुद्ध है।", status: "Pending" }
  ]
};

let portalData = null;
try {
  const local = JSON.parse(localStorage.getItem('ajnawar_portal_data'));
  if (local && local.version === CURRENT_APP_VERSION) {
    portalData = local;
  }
} catch (e) {}

if (!portalData) {
  portalData = JSON.parse(JSON.stringify(defaultData));
  localStorage.setItem('ajnawar_portal_data', JSON.stringify(portalData));
}

let activeAdminRole = null;
let activeAdminUser = null;
let rpscScrollTimer = null;
let rpscPos = 0;
let isRpscHovered = false;

function showToast(msg) {
  const t = document.getElementById('customToast');
  if (!t) return;
  t.innerText = msg;
  t.style.display = 'block';
  setTimeout(() => { t.style.display = 'none'; }, 2600);
}

function toggleMenuDrawer() {
  const md = document.getElementById('menuDrawer');
  if (md) md.classList.toggle('open');
}

window.addEventListener('scroll', () => {
  const btn = document.getElementById('backToTopBtn');
  if (btn) {
    if (window.pageYOffset > 250) btn.classList.add('visible');
    else btn.classList.remove('visible');
  }
}, { passive: true });

function openPehchanLogin() {
  const em = document.getElementById('loginEmail');
  const pw = document.getElementById('loginPassword');
  if (em) em.value = '';
  if (pw) pw.value = '';
  const lm = document.getElementById('loginModal');
  if (lm) lm.style.display = 'flex';
}

function closeLoginModal() {
  const lm = document.getElementById('loginModal');
  if (lm) lm.style.display = 'none';
}

function handleForgotPassword() {
  showToast("पासवर्ड सहायता हेतु पोर्टल सुपर एडमिनिस्ट्रेटर से संपर्क करें।");
}

async function performLogin() {
  const emEl = document.getElementById('loginEmail');
  const pwEl = document.getElementById('loginPassword');

  const email = emEl ? emEl.value : '';
  const password = pwEl ? pwEl.value : '';

  if (!email || !password) {
    showToast("कृपया अधिकृत ईमेल और पासवर्ड दर्ज करें!");
    return;
  }

  showToast("प्रमाणीकरण जारी है...");

  const res = await SecureAuth.login(email, password);

  if (!res.success) {
    showToast(res.message);
    return;
  }

  activeAdminRole = res.role;
  activeAdminUser = res.user;

  closeLoginModal();
  const fd = document.getElementById('fullscreenDashboard');
  if (fd) fd.style.display = 'block';
  window.history.pushState({ inDashboard: true }, "Dashboard", "#dashboard");

  resetAdminTabsToDefault();
  configureRoleDashboardUI();
  loadAdminData();

  if (typeof AuditLogger !== 'undefined') {
    AuditLogger.log(res.role, "SECURE_AUTH_LOGIN", `Logged in: ${email}`);
  }

  showToast(`स्वागत है! ${res.name} के रूप में सुरक्षित लॉगिन हुआ।`);
}

function configureRoleDashboardUI() {
  const btnOff = document.getElementById('btnTabOfficers');
  const btnPch = document.getElementById('btnTabPanchs');
  const btnBkp = document.getElementById('btnTabBackup');
  const btnInst = document.getElementById('btnTabInstitutions');
  const btnSch = document.getElementById('btnTabSchemes');
  const btnGal = document.getElementById('btnTabGallery');
  const btnLogs = document.getElementById('btnTabAuditLogs');
  const btnNews = document.getElementById('btnTabNewsAdmin');

  const secDev = document.getElementById('secDevSettings');
  const secSar = document.getElementById('secSarpanchSettings');
  const secVdo = document.getElementById('secVdoSettings');

  const isSuper = activeAdminRole === 'super';
  const isSarpanch = activeAdminRole === 'sarpanch';

  if (btnOff) btnOff.style.display = isSuper ? 'inline-block' : 'none';
  if (btnPch) btnPch.style.display = isSuper ? 'inline-block' : 'none';
  if (btnBkp) btnBkp.style.display = isSuper ? 'inline-block' : 'none';
  if (btnInst) btnInst.style.display = isSuper ? 'inline-block' : 'none';
  if (btnSch) btnSch.style.display = isSuper ? 'inline-block' : 'none';
  if (btnGal) btnGal.style.display = isSuper ? 'inline-block' : 'none';
  if (btnLogs) btnLogs.style.display = isSuper ? 'inline-block' : 'none';
  if (btnNews) btnNews.style.display = 'inline-block';

  if (secDev) secDev.style.display = isSuper ? 'block' : 'none';
  if (secSar) secSar.style.display = isSuper ? 'block' : 'none';
  if (secVdo) secVdo.style.display = isSuper ? 'block' : 'none';

  const title = document.getElementById('dashHeaderTitle');
  if (title) {
    title.innerText = isSuper ? "Developer" : (isSarpanch ? "Sarpanch" : "VDO");
  }
}

async function closeDashboardAndReturn() {
  const fd = document.getElementById('fullscreenDashboard');
  if (fd) fd.style.display = 'none';
  activeAdminRole = null;
  activeAdminUser = null;
  await SecureAuth.logout();
  resetAdminTabsToDefault();
  if (window.location.hash === '#dashboard') window.history.back();
  showToast("सुरक्षित रूप से लॉगआउट किया गया।");
}

window.addEventListener('popstate', () => {
  if (document.getElementById('fullscreenDashboard')?.style.display === 'block') {
    document.getElementById('fullscreenDashboard').style.display = 'none';
    activeAdminRole = null;
    SecureAuth.logout();
  }
  if (document.getElementById('allNewsViewModal')?.style.display === 'block') {
    document.getElementById('allNewsViewModal').style.display = 'none';
  }
  if (document.getElementById('docPreviewModal')?.style.display === 'flex') {
    document.getElementById('docPreviewModal').style.display = 'none';
  }
  if (document.getElementById('loginModal')?.style.display === 'flex') {
    document.getElementById('loginModal').style.display = 'none';
  }
});

function resetAdminTabsToDefault() {
  document.querySelectorAll('.admin-tab-sec').forEach(s => s.style.display = 'none');
  document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
  const defSec = document.getElementById('adTabNotice');
  const defBtn = document.getElementById('tabBtnNotice');
  if (defSec) defSec.style.display = 'block';
  if (defBtn) defBtn.classList.add('active');
}

function switchAdminTab(secId, btn) {
  document.querySelectorAll('.admin-tab-sec').forEach(s => s.style.display = 'none');
  document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
  const target = document.getElementById(secId);
  if (target) target.style.display = 'block';
  if (btn) btn.classList.add('active');
  if (secId === 'adTabAuditLogs') renderAuditLogsDeck();
}

function renderNewsTicker() {
  const content = document.getElementById('rpscNewsContent');
  if (!content) return;
  const list = portalData.panchayatNews || defaultData.panchayatNews;

  content.innerHTML = list.map((item, idx) => `
    <div onclick="openDocPreview(${idx})" class="rpsc-news-item">
      <span class="rpsc-badge-date">${escapeHtml(item.date)}</span>
      <span>${escapeHtml(item.title)}</span>
    </div>
  `).join('');

  initRpscSmoothTicker();
}

function initRpscSmoothTicker() {
  const box = document.getElementById('rpscNewsScrollBox');
  const content = document.getElementById('rpscNewsContent');
  if (!box || !content) return;

  box.onmouseenter = () => { isRpscHovered = true; };
  box.onmouseleave = () => { isRpscHovered = false; };
  box.ontouchstart = () => { isRpscHovered = true; };
  box.ontouchend = () => { isRpscHovered = false; };

  if (rpscScrollTimer) clearInterval(rpscScrollTimer);

  const boxHeight = box.clientHeight || 220;
  rpscPos = -boxHeight;
  content.style.position = 'relative';
  content.style.top = (-rpscPos) + 'px';

  let isPausing = false;

  rpscScrollTimer = setInterval(() => {
    if (!isRpscHovered && !isPausing) {
      rpscPos += 1;
      const totalContentHeight = content.scrollHeight;

      if (rpscPos >= totalContentHeight) {
        isPausing = true;
        setTimeout(() => {
          rpscPos = -boxHeight;
          content.style.top = (-rpscPos) + 'px';
          isPausing = false;
        }, 2000);
      } else {
        content.style.top = (-rpscPos) + 'px';
      }
    }
  }, 40);
}

function openAllNewsPage() {
  const modal = document.getElementById('allNewsViewModal');
  const listContainer = document.getElementById('allNewsListContainer');
  const list = portalData.panchayatNews || defaultData.panchayatNews;
  if (!modal || !listContainer) return;

  listContainer.innerHTML = list.map((item, idx) => `
    <div class="viewall-row-card" onclick="openDocPreview(${idx})">
      <span class="badge-flash-new">New!</span>
      <span class="rpsc-badge-date">${escapeHtml(item.date)}</span>
      <span class="viewall-item-title-txt">${escapeHtml(item.title)}</span>
    </div>
  `).join('');

  modal.style.display = 'block';
  window.history.pushState({ inAllNews: true }, "News and Events", "#all-news");
}

function closeAllNewsPage() {
  const modal = document.getElementById('allNewsViewModal');
  if (modal) modal.style.display = 'none';
  if (window.location.hash === '#all-news') window.history.back();
}

let currentViewingDoc = null;
function openDocPreview(idx) {
  const list = portalData.panchayatNews || defaultData.panchayatNews;
  const item = list[idx % list.length];
  if (!item) return;

  currentViewingDoc = item;
  const disp = document.getElementById('docDispatchNo');
  if (disp) disp.innerText = item.dispatch;
  const dispTop = document.getElementById('docDispatchTop');
  if (dispTop) dispTop.innerText = `क्रमांक: ${item.dispatch}`;
  const dtTop = document.getElementById('docDateTop');
  if (dtTop) dtTop.innerText = `दिनांक: ${item.date}`;
  const sub = document.getElementById('docSubjectText');
  if (sub) sub.innerText = `विषय: ${item.title}`;
  const body = document.getElementById('docBodyText');
  if (body) {
    body.innerHTML = `
      <p style="margin-bottom:8px;">महोदय,</p>
      <p style="text-indent: 20px; line-height:1.6;">${escapeHtml(item.body)}</p>
      <p style="margin-top:10px; font-weight:600;">यह आदेश सक्षम प्राधिकारी के अनुमोदन उपरांत प्रसारित किया गया है।</p>
    `;
  }

  const previewModal = document.getElementById('docPreviewModal');
  if (previewModal) previewModal.style.display = 'flex';
  window.history.pushState({ inDocView: true }, "Document View", "#doc-view");
}

function closeDocPreview() {
  const previewModal = document.getElementById('docPreviewModal');
  if (previewModal) previewModal.style.display = 'none';
  currentViewingDoc = null;
  if (window.location.hash === '#doc-view') window.history.back();
}

function printCurrentDoc() {
  if (!currentViewingDoc) return;
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="hi">
    <head>
      <title>${escapeHtml(currentViewingDoc.title)}</title>
      <style>
        body { font-family: sans-serif; padding: 25px; color: #0f172a; line-height: 1.5; }
        .box { border: 2px solid #003366; padding: 20px; border-radius: 6px; max-width: 650px; margin: 0 auto; }
        .header { text-align: center; border-bottom: 2px solid #003366; padding-bottom: 10px; margin-bottom: 12px; }
        .meta { display: flex; justify-content: space-between; font-weight: bold; font-size: 0.82rem; margin-bottom: 12px; }
        .subject { background: #f1f5f9; border-left: 3px solid #003366; padding: 8px 10px; font-weight: bold; margin-bottom: 14px; }
        .content { font-size: 0.88rem; text-align: justify; line-height: 1.7; }
        .seal-wrap { display: flex; justify-content: flex-end; align-items: center; margin-top: 25px; padding-top: 10px; border-top: 1px dashed #cbd5e1; }
        .seal-img { width: 80px; height: 80px; object-fit: contain; }
      </style>
    </head>
    <body>
      <div class="box">
        <div class="header">
          <h2>कार्यालय ग्राम पंचायत अजनावर</h2>
          <p>छीपाबड़ौद, बारां (राजस्थान) - 325221</p>
        </div>
        <div class="meta">
          <span>क्रमांक: ${escapeHtml(currentViewingDoc.dispatch)}</span>
          <span>दिनांक: ${escapeHtml(currentViewingDoc.date)}</span>
        </div>
        <div class="subject">विषय: ${escapeHtml(currentViewingDoc.title)}</div>
        <div class="content"><p>${escapeHtml(currentViewingDoc.body)}</p></div>
        <div class="seal-wrap">
          <img src="images/brand/approved.png" class="seal-img" alt="Official Seal">
        </div>
      </div>
      <script>
        window.onload = function() {
          setTimeout(function() { window.print(); }, 250);
        };
      <\/script>
    </body>
    </html>
  `);
  printWindow.document.close();
}

function updateTickerDisplay() {
  const tickerEl = document.getElementById('noticeTickerText');
  if (!tickerEl) return;
  tickerEl.innerText = portalData.notice ? portalData.notice.trim() : "📢 ग्राम पंचायत अजनावर के आधिकारिक डिजिटल पोर्टल पर आपका स्वागत है।";
}

function saveNotice() {
  const val = document.getElementById('admNoticeText')?.value || '';
  portalData.notice = val;
  savePortalData();
  updateTickerDisplay();
  if (typeof AuditLogger !== 'undefined') AuditLogger.log(activeAdminRole || "Admin", "NOTICE_UPDATE", "Notice updated");
  showToast("सूचना अपडेट कर दी गई!");
}

function clearNotice() {
  const n = document.getElementById('admNoticeText');
  if (n) n.value = "";
  portalData.notice = "";
  savePortalData();
  updateTickerDisplay();
  if (typeof AuditLogger !== 'undefined') AuditLogger.log(activeAdminRole || "Admin", "NOTICE_CLEAR", "Notice cleared");
  showToast("सूचना हटा दी गई!");
}

function renderAdminNewsCards() {
  const container = document.getElementById('admNewsCardList');
  if (!container) return;

  container.innerHTML = (portalData.panchayatNews || []).map((item, idx) => `
    <div class="admin-data-card">
      <div style="font-weight:700; color:var(--primary); font-size:0.86rem; margin-bottom:4px;">${escapeHtml(item.title)}</div>
      <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:8px;">
        <strong>दिनांक:</strong> ${escapeHtml(item.date)} | <strong>क्रमांक:</strong> ${escapeHtml(item.dispatch)}
      </div>
      <div class="admin-card-actions-center">
        <button onclick="startEditNews(${idx})" class="admin-action-btn btn-act-edit"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
        <button onclick="deleteNewsItem(${idx})" class="admin-action-btn btn-act-del"><i class="fa-solid fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join('');
}

function startEditNews(idx) {
  const n = portalData.panchayatNews[idx];
  document.getElementById('admNewsTitle').value = n.title;
  document.getElementById('admNewsDate').value = n.date;
  document.getElementById('admNewsDispatch').value = n.dispatch;
  document.getElementById('admNewsBody').value = n.body;
  document.getElementById('editNewsIndex').value = idx;

  document.getElementById('newsFormHeading').innerText = "सरकारी आदेश / सूचना संपादित करें";
  document.getElementById('btnSaveNewsAction').innerHTML = `<i class="fa-solid fa-check"></i> अपडेट करें`;
  document.getElementById('btnCancelNewsEdit').style.display = 'inline-block';
  document.getElementById('admNewsTitle').focus();
}

function cancelNewsEdit() {
  document.getElementById('admNewsTitle').value = '';
  document.getElementById('admNewsDate').value = '';
  document.getElementById('admNewsDispatch').value = '';
  document.getElementById('admNewsBody').value = '';
  document.getElementById('editNewsIndex').value = '-1';

  document.getElementById('newsFormHeading').innerText = "नया सरकारी आदेश / सूचना जोड़ें";
  document.getElementById('btnSaveNewsAction').innerHTML = `<i class="fa-solid fa-plus"></i> प्रकाशित करें`;
  document.getElementById('btnCancelNewsEdit').style.display = 'none';
}

function saveOrUpdateNewsItem() {
  const title = document.getElementById('admNewsTitle')?.value.trim();
  const date = document.getElementById('admNewsDate')?.value.trim();
  const dispatch = document.getElementById('admNewsDispatch')?.value.trim();
  const body = document.getElementById('admNewsBody')?.value.trim();
  const idx = parseInt(document.getElementById('editNewsIndex')?.value || '-1');

  if (!title || !body) {
    showToast("कृपया आदेश का शीर्षक और विवरण दर्ज करें!");
    return;
  }

  const currentDate = date || new Date().toLocaleDateString('en-GB');
  const currentDispatch = dispatch || `क्र.सं./ग्रा.पं.अ./2026/${Math.floor(100 + Math.random() * 900)}`;

  if (idx >= 0) {
    portalData.panchayatNews[idx] = {
      id: portalData.panchayatNews[idx].id,
      date: currentDate,
      title: title,
      dispatch: currentDispatch,
      body: body
    };
    showToast("सरकारी आदेश अपडेट हो गया!");
  } else {
    portalData.panchayatNews.unshift({
      id: `DOC-2026-${Math.floor(10 + Math.random() * 90)}`,
      date: currentDate,
      title: title,
      dispatch: currentDispatch,
      body: body
    });
    showToast("नया आदेश प्रकाशित हुआ!");
  }

  savePortalData();
  cancelNewsEdit();
  renderAdminNewsCards();
  renderPortal();
}

function deleteNewsItem(idx) {
  portalData.panchayatNews.splice(idx, 1);
  savePortalData();
  renderAdminNewsCards();
  renderPortal();
  showToast("आदेश हटा दिया गया!");
}

function renderPortal() {
  updateTickerDisplay();
  renderNewsTicker();

  const coreCont = document.getElementById('coreLeadershipContainer');
  if (coreCont) {
    coreCont.innerHTML = (portalData.officers || []).map(o => `
      <div class="leader-box">
        <img src="${escapeHtml(o.file)}" onerror="this.onerror=null; this.src='${UNIVERSAL_AVATAR}';" class="leader-avatar" alt="${escapeHtml(o.name)}" loading="lazy">
        <h4>${escapeHtml(o.name)}</h4>
        <div class="post-title">${escapeHtml(o.role)}</div>
        <a href="tel:${escapeHtml(o.phone)}" class="btn-call"><i class="fa-solid fa-phone"></i> कॉल</a>
      </div>
    `).join('');
  }

  const wardCont = document.getElementById('wardPanchContainer');
  if (wardCont) {
    const sortedPanchs = (portalData.wardPanchs || []).slice(0, 11).sort((a,b)=>a.ward-b.ward);
    wardCont.innerHTML = sortedPanchs.map(p => `
      <div class="panch-list-row">
        <div class="panch-list-left">
          <span class="panch-ward-badge">वार्ड ${p.ward}</span>
          <img src="${escapeHtml(p.file || UNIVERSAL_AVATAR)}" 
               onerror="this.onerror=null; this.src='${UNIVERSAL_AVATAR}';" 
               class="panch-avatar-sm" 
               alt="" 
               loading="lazy">
          <div class="panch-detail-wrap">
            <div class="panch-name-txt">${escapeHtml(p.name)}</div>
            <div class="panch-phone-txt"><i class="fa-solid fa-phone" style="font-size:0.65rem;"></i> ${escapeHtml(p.phone)}</div>
          </div>
        </div>
        <a href="tel:${escapeHtml(p.phone)}" class="panch-call-btn-link"><i class="fa-solid fa-phone"></i> कॉल</a>
      </div>
    `).join('');
  }

  const worksBody = document.getElementById('worksTableBody');
  if (worksBody) {
    worksBody.innerHTML = (portalData.works || []).map(w => `
      <tr>
        <td><strong>${escapeHtml(w.name)}</strong></td>
        <td style="color:var(--primary); font-weight:700;">${escapeHtml(w.budget)}</td>
        <td>${escapeHtml(w.agency)}</td>
        <td><span style="font-size:0.7rem; font-weight:700; padding:2px 6px; border-radius:4px; background:${w.status === 'पूर्ण' ? '#dcfce7':'#fef3c7'}; color:${w.status === 'पूर्ण' ? '#16a34a':'#b45309'};">${escapeHtml(w.status)}</span></td>
      </tr>
    `).join('');
  }

  const instCont = document.getElementById('institutionsContainer');
  if (instCont) {
    instCont.innerHTML = (portalData.institutions || []).map(inst => `
      <div class="inst-item">
        <div class="inst-item-left">
          <img src="${escapeHtml(inst.file)}" onerror="this.onerror=null; this.src='images/institutions/school.jpg';" class="inst-thumb" alt="${escapeHtml(inst.title)}" loading="lazy">
          <div class="inst-info">
            <h5>${escapeHtml(inst.title)}</h5>
            <p>${escapeHtml(inst.head)}</p>
          </div>
        </div>
        <a href="tel:${escapeHtml(inst.phone)}" class="inst-call" title="कॉल करें"><i class="fa-solid fa-phone"></i></a>
      </div>
    `).join('');
  }

  const schemesCont = document.getElementById('schemesDisplayContainer');
  if (schemesCont) {
    schemesCont.innerHTML = (portalData.schemes || []).map(sc => `
      <div class="scheme-item">
        <div class="scheme-pill-badge"><i class="fa-solid fa-award"></i> ${escapeHtml(sc.title)}</div>
        <p>${escapeHtml(sc.desc)}</p>
      </div>
    `).join('');
  }

  const galCont = document.getElementById('galleryContainer');
  if (galCont) {
    galCont.innerHTML = (portalData.gallery || []).map(g => `
      <div class="gallery-item">
        <img src="${escapeHtml(g.img)}" onerror="this.onerror=null; this.src='images/brand/panchayat.jpg';" alt="${escapeHtml(g.title)}" loading="lazy">
        <div class="gallery-info">${escapeHtml(g.title)}</div>
      </div>
    `).join('');
  }
}

function trackComplaint() {
  const tok = document.getElementById('trackTokenInput')?.value.trim().toUpperCase() || '';
  const r = document.getElementById('trackResultBox');
  if (!tok || !r) return;
  const c = (portalData.complaints || []).find(item => item.id.toUpperCase() === tok);
  r.style.display = 'block';
  if (c) {
    let stBadge = c.status === 'Approved' ? '<span style="color:#16a34a; font-weight:bold;">Approved</span>' : (c.status === 'In Progress' ? '<span style="color:#d97706; font-weight:bold;">In Progress</span>' : '<span style="color:#0284c7; font-weight:bold;">Pending</span>');
    r.innerHTML = `
      <div style="font-size:0.8rem;"><strong>टोकन:</strong> ${escapeHtml(c.id)} | <strong>स्थिति:</strong> ${stBadge}</div>
      <div style="font-size:0.78rem; margin-top:3px; color:#475569;">${escapeHtml(c.msg || 'विवरण उपलब्ध')}</div>
    `;
  } else {
    r.innerHTML = `<span style="color:#dc2626; font-size:0.78rem; font-weight:bold;">रिकॉर्ड नहीं मिला।</span>`;
  }
}

let currentNewTicketId = "";
let lastSubmittedGrievance = null;

async function submitGrievance(e) {
  e.preventDefault();
  const name = document.getElementById('gName')?.value.trim() || '';
  const phone = document.getElementById('gPhone')?.value.trim() || '';
  const ward = document.getElementById('gWard')?.value || '';
  const type = document.getElementById('gType')?.value || '';
  const msg = document.getElementById('gMsg')?.value.trim() || '';

  const id = 'AJN-' + Math.floor(1000 + Math.random() * 9000);
  const date = new Date().toLocaleDateString('hi-IN');

  currentNewTicketId = id;
  lastSubmittedGrievance = { id, date, name, phone, ward, type, msg, status: "Pending" };
  
  portalData.complaints.unshift(lastSubmittedGrievance);
  savePortalData();

  try {
    if (typeof supabase !== 'undefined' && typeof PANCHAYAT_CONFIG !== 'undefined') {
      const client = supabase.createClient(PANCHAYAT_CONFIG.supabaseUrl, PANCHAYAT_CONFIG.supabaseKey);
      await client.from('citizen_complaints').insert([{
        id: id,
        applicant_name: name,
        phone: phone,
        ward: ward,
        issue_type: type,
        message: msg,
        status: "Pending"
      }]);
    }
  } catch (err) {
    console.warn("Cloud save error:", err);
  }

  const tokDisp = document.getElementById('popupTokenDisplay');
  if (tokDisp) tokDisp.innerText = id;
  const fb = document.getElementById('copyFeedback');
  if (fb) fb.style.display = 'none';
  const sm = document.getElementById('successModal');
  if (sm) sm.style.display = 'flex';
  e.target.reset();
}

function copyTokenToClipboard() {
  if (currentNewTicketId) {
    navigator.clipboard.writeText(currentNewTicketId);
    const fb = document.getElementById('copyFeedback');
    if (fb) fb.style.display = 'block';
  }
}

function printAcknowledgment() {
  if (!lastSubmittedGrievance) return;
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="hi">
    <head>
      <meta charset="UTF-8">
      <title>शिकायत पावती रसीद - ${escapeHtml(lastSubmittedGrievance.id)}</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, sans-serif; padding: 25px; line-height: 1.5; color: #0f172a; background: #fff; }
        .receipt-box { border: 2.5px solid #003366; border-radius: 12px; padding: 28px; max-width: 580px; margin: 0 auto; position: relative; }
        .header-bar { display: flex; align-items: center; justify-content: center; gap: 16px; border-bottom: 2px solid #003366; padding-bottom: 12px; margin-bottom: 16px; }
        .logo-img { width: 62px; height: 62px; border-radius: 50%; border: 2px solid #003366; object-fit: cover; }
        .header-text h2 { margin: 0; color: #003366; font-size: 1.45rem; font-weight: 800; }
        .token-banner { background: #eff6ff; border: 1.5px dashed #3b82f6; border-radius: 8px; padding: 10px; text-align: center; margin-bottom: 16px; }
        .token-banner strong { font-size: 1.45rem; color: #ea580c; }
        .info-table { width: 100%; border-collapse: collapse; font-size: 0.88rem; margin-bottom: 14px; }
        .info-table td { padding: 7px 10px; border-bottom: 1px solid #e2e8f0; }
        .info-table td.label { font-weight: 700; color: #334155; width: 38%; }
        .desc-box { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px 12px; font-size: 0.85rem; margin: 12px 0; }
        .bottom-seal-section { display: flex; justify-content: flex-end; align-items: center; margin-top: 18px; padding-top: 12px; border-top: 1.5px dashed #cbd5e1; }
        .official-seal-img { width: 110px; height: 110px; object-fit: contain; }
      </style>
    </head>
    <body>
      <div class="receipt-box">
        <div class="header-bar">
          <img src="images/brand/panchayatlogo.jpg" class="logo-img" alt="लोगो" onerror="this.style.display='none'">
          <div class="header-text">
            <h2>ग्राम पंचायत अजनावर</h2>
            <p>पंचायत समिति: छीपाबड़ौद | जिला: बारां (राज.) - 325221</p>
          </div>
        </div>
        <div class="token-banner">
          <div>लोक सेवा गारंटी - ऑनलाइन शिकायत पावती</div>
          <strong>टोकन आईडी: ${escapeHtml(lastSubmittedGrievance.id)}</strong>
        </div>
        <table class="info-table">
          <tr><td class="label">दिनांक:</td><td><b>${escapeHtml(lastSubmittedGrievance.date)}</b></td></tr>
          <tr><td class="label">आवेदक:</td><td>${escapeHtml(lastSubmittedGrievance.name)}</td></tr>
          <tr><td class="label">मोबाइल:</td><td>${escapeHtml(lastSubmittedGrievance.phone)}</td></tr>
          <tr><td class="label">वार्ड:</td><td>${escapeHtml(lastSubmittedGrievance.ward)}</td></tr>
          <tr><td class="label">श्रेणी:</td><td>${escapeHtml(lastSubmittedGrievance.type)}</td></tr>
        </table>
        <div class="desc-box"><strong>विवरण:</strong><br>${escapeHtml(lastSubmittedGrievance.msg)}</div>
        <div class="bottom-seal-section">
          <img src="images/brand/approved.png" class="official-seal-img" alt="मुहर">
        </div>
      </div>
      <script>
        window.onload = function() {
          setTimeout(function() { window.print(); }, 250);
        };
      <\/script>
    </body>
    </html>
  `);
  printWindow.document.close();
  closeSuccessPopup();
}

function closeSuccessPopup() {
  const sm = document.getElementById('successModal');
  if (sm) sm.style.display = 'none';
}

function loadAdminData() {
  const nInp = document.getElementById('admNoticeText');
  if (nInp) nInp.value = portalData.notice || '';
  renderAdminNewsCards();
  renderAdminWorksCards();
  renderAdminComplaintsCards(portalData.complaints || []);
  renderAdminOfficersCards();
  renderAdminPanchCards();
  renderAdminSchemesCards();
  renderAdminInstitutionsCards();
  renderAdminGalleryCards();
}

function renderAdminWorksCards() {
  const container = document.getElementById('admWorksCardList');
  if (!container) return;

  container.innerHTML = (portalData.works || []).map((w, idx) => `
    <div class="admin-data-card">
      <div style="font-weight:700; margin-bottom:4px; font-size:0.86rem; color:var(--primary);">${escapeHtml(w.name)}</div>
      <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:8px;">
        <strong>बजट:</strong> ${escapeHtml(w.budget)} | <strong>मद:</strong> ${escapeHtml(w.agency)} | <strong>स्थिति:</strong> <span style="font-weight:700; color:${w.status==='पूर्ण'?'#16a34a':'#d97706'}">${escapeHtml(w.status)}</span>
      </div>
      <div class="admin-card-actions-center">
        <button onclick="startEditWork(${idx})" class="admin-action-btn btn-act-edit"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
        <button onclick="deleteWork(${idx})" class="admin-action-btn btn-act-del"><i class="fa-solid fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join('');
}

function startEditWork(idx) {
  const w = portalData.works[idx];
  document.getElementById('admWorkName').value = w.name;
  document.getElementById('admWorkBudget').value = w.budget;
  document.getElementById('admWorkAgency').value = w.agency;
  document.getElementById('admWorkStatus').value = w.status || 'प्रगति पर';
  document.getElementById('editWorkIndex').value = idx;

  document.getElementById('admWorkFormHeading').innerText = "विकास कार्य संपादित करें";
  document.getElementById('btnSaveWorkAction').innerHTML = `<i class="fa-solid fa-check"></i> अपडेट करें`;
  document.getElementById('btnCancelWorkEdit').style.display = 'inline-block';
  document.getElementById('admWorkName').focus();
}

function cancelWorkEdit() {
  document.getElementById('admWorkName').value = '';
  document.getElementById('admWorkBudget').value = '';
  document.getElementById('admWorkAgency').value = '';
  document.getElementById('admWorkStatus').value = 'प्रगति पर';
  document.getElementById('editWorkIndex').value = '-1';

  document.getElementById('admWorkFormHeading').innerText = "नया विकास कार्य जोड़ें";
  document.getElementById('btnSaveWorkAction').innerHTML = `<i class="fa-solid fa-plus"></i> प्रकाशित करें`;
  document.getElementById('btnCancelWorkEdit').style.display = 'none';
}

function saveOrUpdateWorkItem() {
  const name = document.getElementById('admWorkName')?.value.trim() || '';
  const budget = document.getElementById('admWorkBudget')?.value.trim() || '';
  const agency = document.getElementById('admWorkAgency')?.value.trim() || '';
  const status = document.getElementById('admWorkStatus')?.value || 'प्रगति पर';
  const idx = parseInt(document.getElementById('editWorkIndex')?.value || '-1');

  if (!name || !budget) {
    showToast("कृपया कार्य का नाम और बजट दर्ज करें!");
    return;
  }

  let filePath = "images/works/ccroad.jpg";
  if (name.includes("नाली") || name.includes("ड्रेनेज")) {
    filePath = "images/works/drainage.jpg";
  }

  if (idx >= 0) {
    portalData.works[idx] = { 
      name, budget, agency: agency || "पंचायत मद", 
      prog: status === 'पूर्ण' ? '100%' : '50%', status,
      file: portalData.works[idx].file || filePath
    };
    if (typeof AuditLogger !== 'undefined') AuditLogger.log(activeAdminRole || "Admin", "EDIT_WORK", `Work updated: ${name}`);
    showToast("विकास कार्य अपडेट कर दिया गया!");
  } else {
    portalData.works.unshift({ 
      name, budget, agency: agency || "पंचायत मद", 
      prog: status === 'पूर्ण' ? '100%' : '20%', status,
      file: filePath
    });
    if (typeof AuditLogger !== 'undefined') AuditLogger.log(activeAdminRole || "Admin", "ADD_WORK", `New work added: ${name}`);
    showToast("नया विकास कार्य जुड़ गया!");
  }

  savePortalData();
  cancelWorkEdit();
  renderAdminWorksCards();
  renderPortal();
}

function deleteWork(idx) {
  const wName = portalData.works[idx]?.name;
  portalData.works.splice(idx, 1);
  savePortalData();
  if (typeof AuditLogger !== 'undefined') AuditLogger.log(activeAdminRole || "Admin", "DELETE_WORK", `Work deleted: ${wName}`);
  renderAdminWorksCards();
  renderPortal();
  showToast("Work record deleted!");
}

function renderAdminComplaintsCards(list) {
  const container = document.getElementById('admComplaintsCardList');
  if (!container) return;
  if (!list || list.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:15px; color:#64748b; font-size:0.8rem;">कोई शिकायत उपलब्ध नहीं है।</div>`;
    return;
  }

  container.innerHTML = list.map((c, i) => `
    <div class="admin-data-card">
      <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #f1f5f9; padding-bottom:5px; margin-bottom:6px;">
        <span style="color:var(--primary); font-weight:800; font-size:0.9rem;">${escapeHtml(c.id)} (${escapeHtml(c.ward || 'सामान्य')})</span>
        <span style="font-size:0.75rem; background:#eff6ff; padding:2px 8px; border-radius:4px; font-weight:700;"><i class="fa-solid fa-phone"></i> ${escapeHtml(c.phone)}</span>
      </div>
      <div style="font-size:0.8rem; margin-bottom:4px;"><strong>आवेदक:</strong> ${escapeHtml(c.name)} | <strong>श्रेणी:</strong> ${escapeHtml(c.type)}</div>
      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-left:3px solid var(--primary); padding:6px 8px; border-radius:4px; font-size:0.78rem; margin-bottom:8px;">${escapeHtml(c.msg)}</div>
      <div>
        <label style="font-size:0.72rem; font-weight:700; color:var(--text-muted); display:block; margin-bottom:2px;">स्थिति बदलें:</label>
        <select id="selStatus_${i}" onchange="autoUpdateStatus(${i})" class="form-control" style="font-size:0.75rem; padding:4px; font-weight:700;">
          <option value="Pending" ${c.status === 'Pending' ? 'selected' : ''}>Pending (लंबित)</option>
          <option value="In Progress" ${c.status === 'In Progress' ? 'selected' : ''}>In Progress (प्रगति पर)</option>
          <option value="Approved" ${c.status === 'Approved' ? 'selected' : ''}>Approved (स्वीकृत)</option>
          <option value="Rejected" ${c.status === 'Rejected' ? 'selected' : ''}>Rejected (अस्वीकृत)</option>
        </select>
      </div>
      <div class="admin-card-actions-center">
        <button onclick="deleteComplaint(${i})" class="admin-action-btn btn-act-del"><i class="fa-solid fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join('');
}

function autoUpdateStatus(idx) {
  portalData.complaints[idx].status = document.getElementById(`selStatus_${idx}`).value;
  savePortalData();
  if (typeof AuditLogger !== 'undefined') AuditLogger.log(activeAdminRole || "Admin", "STATUS_CHANGE", `Token ${portalData.complaints[idx].id} set to ${portalData.complaints[idx].status}`);
  showToast("Status updated!");
}

function filterAdminGrievances() {
  const selectedWard = document.getElementById('admWardFilter')?.value;
  if (selectedWard === 'ALL') renderAdminComplaintsCards(portalData.complaints || []);
  else renderAdminComplaintsCards((portalData.complaints || []).filter(c => c.ward === selectedWard));
}

function deleteComplaint(idx) {
  portalData.complaints.splice(idx, 1);
  savePortalData();
  loadAdminData();
  showToast("Complaint record deleted!");
}

function renderAdminOfficersCards() {
  const cont = document.getElementById('admOfficersCardList');
  if (!cont) return;
  cont.innerHTML = (portalData.officers || []).map((o, idx) => `
    <div class="admin-data-card">
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-bottom:6px;">
        <input type="text" id="inpOffRole_${idx}" value="${escapeHtml(o.role)}" class="form-control" style="font-size:0.75rem; padding:4px;">
        <input type="text" id="inpOffName_${idx}" value="${escapeHtml(o.name)}" class="form-control" style="font-size:0.75rem; padding:4px;">
      </div>
      <input type="tel" id="inpOffPhone_${idx}" value="${escapeHtml(o.phone)}" class="form-control" style="font-size:0.75rem; padding:4px;">
      <div class="admin-card-actions-center">
        <button onclick="saveOfficerItem(${idx})" class="admin-action-btn btn-act-save"><i class="fa-solid fa-check"></i> Save</button>
        <button onclick="deleteOfficer(${idx})" class="admin-action-btn btn-act-del"><i class="fa-solid fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join('');
}

function saveOfficerItem(idx) {
  portalData.officers[idx].role = document.getElementById(`inpOffRole_${idx}`).value.trim();
  portalData.officers[idx].name = document.getElementById(`inpOffName_${idx}`).value.trim();
  portalData.officers[idx].phone = document.getElementById(`inpOffPhone_${idx}`).value.trim();
  savePortalData();
  renderPortal();
  showToast("Officer updated!");
}

function addNewOfficer() {
  const role = document.getElementById('newOfficerRole')?.value.trim();
  const name = document.getElementById('newOfficerName')?.value.trim();
  const phone = document.getElementById('newOfficerPhone')?.value.trim();
  if (!role || !name) return showToast("Enter role and name!");
  portalData.officers.push({ role, name, phone, file: "images/officers/sarpanch.jpg" });
  savePortalData();
  document.getElementById('newOfficerRole').value = '';
  document.getElementById('newOfficerName').value = '';
  document.getElementById('newOfficerPhone').value = '';
  renderAdminOfficersCards();
  renderPortal();
}

function deleteOfficer(idx) {
  portalData.officers.splice(idx, 1);
  savePortalData();
  renderAdminOfficersCards();
  renderPortal();
}

function renderAdminPanchCards() {
  const cont = document.getElementById('admPanchCardList');
  if (!cont) return;
  cont.innerHTML = (portalData.wardPanchs || []).slice(0, 11).sort((a,b)=>a.ward-b.ward).map((p, idx) => `
    <div class="admin-data-card">
      <div style="margin-bottom:6px;"><span class="panch-badge">वार्ड ${p.ward}</span></div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px;">
        <input type="text" id="inpPchName_${idx}" value="${escapeHtml(p.name)}" class="form-control" style="font-size:0.75rem; padding:4px;">
        <input type="tel" id="inpPchPhone_${idx}" value="${escapeHtml(p.phone)}" class="form-control" style="font-size:0.75rem; padding:4px;">
      </div>
      <div class="admin-card-actions-center">
        <button onclick="savePanchItem(${idx})" class="admin-action-btn btn-act-save"><i class="fa-solid fa-check"></i> Save</button>
        <button onclick="deletePanchItem(${idx})" class="admin-action-btn btn-act-del"><i class="fa-solid fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join('');
}

function savePanchItem(idx) {
  portalData.wardPanchs[idx].name = document.getElementById(`inpPchName_${idx}`).value.trim();
  portalData.wardPanchs[idx].phone = document.getElementById(`inpPchPhone_${idx}`).value.trim();
  savePortalData();
  renderPortal();
  showToast("Ward panch updated!");
}

function deletePanchItem(idx) {
  portalData.wardPanchs.splice(idx, 1);
  savePortalData();
  renderAdminPanchCards();
  renderPortal();
  showToast("Ward panch deleted!");
}

function addWardPanch() {
  const ward = parseInt(document.getElementById('newPanchWard')?.value || '1');
  const name = document.getElementById('newPanchName')?.value.trim();
  const phone = document.getElementById('newPanchPhone')?.value.trim() || 'उपलब्ध नहीं';
  if (!ward || !name) return showToast("Enter ward and name!");
  portalData.wardPanchs.push({ ward, name, phone, file: UNIVERSAL_AVATAR });
  savePortalData();
  document.getElementById('newPanchWard').value = '';
  document.getElementById('newPanchName').value = '';
  document.getElementById('newPanchPhone').value = '';
  renderAdminPanchCards();
  renderPortal();
}

function renderAdminInstitutionsCards() {
  const cont = document.getElementById('admInstitutionsCardList');
  if (!cont) return;
  cont.innerHTML = (portalData.institutions || []).map((inst, idx) => `
    <div class="admin-data-card">
      <div style="font-weight:700;">${escapeHtml(inst.title)}</div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; margin:4px 0;">
        <input type="text" id="inpInstHead_${idx}" value="${escapeHtml(inst.head)}" class="form-control" style="font-size:0.75rem; padding:4px;">
        <input type="tel" id="inpInstPhone_${idx}" value="${escapeHtml(inst.phone)}" class="form-control" style="font-size:0.75rem; padding:4px;">
      </div>
      <div class="admin-card-actions-center">
        <button onclick="saveInstItem(${idx})" class="admin-action-btn btn-act-save"><i class="fa-solid fa-check"></i> Save</button>
        <button onclick="deleteInstitution(${idx})" class="admin-action-btn btn-act-del"><i class="fa-solid fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join('');
}

function saveInstItem(idx) {
  portalData.institutions[idx].head = document.getElementById(`inpInstHead_${idx}`).value.trim();
  portalData.institutions[idx].phone = document.getElementById(`inpInstPhone_${idx}`).value.trim();
  savePortalData();
  renderPortal();
  showToast("Institution saved!");
}

function addNewInstitution() {
  const title = document.getElementById('newInstTitle')?.value.trim();
  const head = document.getElementById('newInstHead')?.value.trim();
  const phone = document.getElementById('newInstPhone')?.value.trim();
  if (!title || !phone) return showToast("Enter title & phone!");
  portalData.institutions.push({ title, head: head || "प्रभारी", phone, file: "images/institutions/school.jpg" });
  savePortalData();
  document.getElementById('newInstTitle').value = '';
  document.getElementById('newInstHead').value = '';
  document.getElementById('newInstPhone').value = '';
  renderAdminInstitutionsCards();
  renderPortal();
}

function deleteInstitution(idx) {
  portalData.institutions.splice(idx, 1);
  savePortalData();
  renderAdminInstitutionsCards();
  renderPortal();
}

function renderAdminSchemesCards() {
  const cont = document.getElementById('admSchemesCardList');
  if (!cont) return;
  cont.innerHTML = (portalData.schemes || []).map((sc, idx) => `
    <div class="admin-data-card">
      <div style="font-weight:700; color:var(--primary);">${escapeHtml(sc.title)}</div>
      <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:8px;">${escapeHtml(sc.desc)}</p>
      <div class="admin-card-actions-center">
        <button onclick="editScheme(${idx})" class="admin-action-btn btn-act-edit"><i class="fa-solid fa-pen"></i> Edit</button>
        <button onclick="deleteScheme(${idx})" class="admin-action-btn btn-act-del"><i class="fa-solid fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join('');
}

function editScheme(idx) {
  const sc = portalData.schemes[idx];
  document.getElementById('newSchemeTitle').value = sc.title;
  document.getElementById('newSchemeDesc').value = sc.desc;
  document.getElementById('editSchemeIndex').value = idx;
  document.getElementById('schemeFormTitle').innerText = "योजना का विवरण संपादित करें";
  document.getElementById('btnSaveScheme').innerHTML = `<i class="fa-solid fa-check"></i> अपडेट करें`;
}

function saveScheme() {
  const title = document.getElementById('newSchemeTitle')?.value.trim();
  const desc = document.getElementById('newSchemeDesc')?.value.trim();
  const idx = parseInt(document.getElementById('editSchemeIndex')?.value || '-1');
  if (!title || !desc) return showToast("Enter title and desc!");

  if (idx >= 0) portalData.schemes[idx] = { title, desc };
  else portalData.schemes.push({ title, desc });

  document.getElementById('newSchemeTitle').value = '';
  document.getElementById('newSchemeDesc').value = '';
  document.getElementById('editSchemeIndex').value = '-1';
  document.getElementById('btnSaveScheme').innerHTML = `<i class="fa-solid fa-plus"></i> जोड़ें`;
  savePortalData();
  renderAdminSchemesCards();
  renderPortal();
}

function deleteScheme(idx) {
  portalData.schemes.splice(idx, 1);
  savePortalData();
  renderAdminSchemesCards();
  renderPortal();
}

function renderAdminGalleryCards() {
  const cont = document.getElementById('admGalleryCardList');
  if (!cont) return;
  cont.innerHTML = (portalData.gallery || []).map((g, idx) => `
    <div class="admin-data-card">
      <div style="font-weight:700; margin-bottom:8px;">${escapeHtml(g.title)}</div>
      <div class="admin-card-actions-center">
        <button onclick="editGalleryItem(${idx})" class="admin-action-btn btn-act-edit"><i class="fa-solid fa-pen"></i> Edit</button>
        <button onclick="deleteGalleryPhoto(${idx})" class="admin-action-btn btn-act-del"><i class="fa-solid fa-trash"></i> Delete</button>
      </div>
    </div>
  `).join('');
}

function editGalleryItem(idx) {
  const newTitle = prompt("फ़ोटो का नया शीर्षक दर्ज करें:", portalData.gallery[idx].title);
  if (newTitle && newTitle.trim()) {
    portalData.gallery[idx].title = newTitle.trim();
    savePortalData();
    renderAdminGalleryCards();
    renderPortal();
    showToast("गैलरी फ़ोटो शीर्षक अपडेट हुआ!");
  }
}

function saveGalleryPhoto() {
  const title = document.getElementById('newGalTitle')?.value.trim();
  const fileInput = document.getElementById('newGalFile');
  if (!title) return showToast("Enter photo title!");

  if (fileInput?.files && fileInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      portalData.gallery.unshift({ img: e.target.result, title });
      savePortalData();
      document.getElementById('newGalTitle').value = '';
      document.getElementById('newGalFile').value = '';
      renderAdminGalleryCards();
      renderPortal();
    };
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    portalData.gallery.unshift({ img: "images/works/ccroad.jpg", title });
    savePortalData();
    document.getElementById('newGalTitle').value = '';
    renderAdminGalleryCards();
    renderPortal();
  }
}

function deleteGalleryPhoto(idx) {
  portalData.gallery.splice(idx, 1);
  savePortalData();
  renderAdminGalleryCards();
  renderPortal();
}

function renderAuditLogsDeck() {
  const container = document.getElementById('admbAuditLogsList');
  if (!container) return;
  const logs = typeof AuditLogger !== 'undefined' ? AuditLogger.getLogs() : [];

  if (logs.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:15px; color:#64748b; font-size:0.8rem;">No administrative logs available.</div>`;
    return;
  }

  container.innerHTML = logs.map(l => `
    <div class="admin-data-card" style="border-left:3.5px solid var(--primary); padding:9px 12px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:3px;">
        <span style="font-weight:800; font-size:0.82rem; color:var(--primary);">${escapeHtml(l.role)}</span>
        <span style="font-size:0.7rem; color:#64748b;">${escapeHtml(l.timestamp)}</span>
      </div>
      <div style="font-size:0.78rem; font-weight:700; color:#334155;">${escapeHtml(l.action)}: <span style="font-weight:500;">${escapeHtml(l.details)}</span></div>
      <div style="font-size:0.68rem; color:#94a3b8; margin-top:3px;"><i class="fa-solid fa-mobile-screen"></i> Device: ${escapeHtml(l.device)} (${escapeHtml(l.screen)})</div>
    </div>
  `).join('');
}

function clearAllAuditLogs() {
  if (typeof AuditLogger !== 'undefined') AuditLogger.clearLogs();
  renderAuditLogsDeck();
  showToast("Audit logs cleared!");
}

async function saveDevSecurity() {
  const newPass = document.getElementById('cfgDevPin')?.value || '';
  if (!newPass || newPass !== newPass.trim() || newPass.length < 8) {
    showToast("Password must be at least 8 characters long and cannot contain leading or trailing spaces.");
    return;
  }

  showToast("Updating password...");
  const res = await SecureAuth.changePassword(newPass);
  if (res.success) {
    if (typeof AuditLogger !== 'undefined') {
      AuditLogger.log(activeAdminRole || "Super Admin", "SEC_PASS_ROTATED", "Super Admin password updated successfully.");
    }
    document.getElementById('cfgDevPin').value = '';
    showToast("Password updated successfully.");
  } else {
    showToast(res.message || "Failed to update password.");
  }
}

async function saveSarpanchSecurity() {
  const email = document.getElementById('cfgSarpanchEmail')?.value.trim();
  const newPass = document.getElementById('cfgSarpanchPin')?.value || '';

  if (!email || !newPass || newPass !== newPass.trim() || newPass.length < 8) {
    showToast("Please enter a valid Sarpanch email and a password of at least 8 characters.");
    return;
  }

  showToast("Resetting Sarpanch password...");
  try {
    const client = supabase.createClient(PANCHAYAT_CONFIG.supabaseUrl, PANCHAYAT_CONFIG.supabaseKey);
    const { data, error } = await client.rpc('admin_reset_password', {
      target_email: email,
      new_plain_password: newPass
    });

    if (error || !data.success) {
      showToast(data?.message || error?.message || "Password update failed.");
    } else {
      if (typeof AuditLogger !== 'undefined') {
        AuditLogger.log("Super Admin", "ADMIN_RESET_SARPANCH", `Password reset for Sarpanch (${email}).`);
      }
      document.getElementById('cfgSarpanchEmail').value = '';
      document.getElementById('cfgSarpanchPin').value = '';
      showToast("Sarpanch password has been reset successfully.");
    }
  } catch (err) {
    showToast("Server error: Unable to reset password.");
  }
}

async function saveVdoSecurity() {
  const email = document.getElementById('cfgVdoEmail')?.value.trim();
  const newPass = document.getElementById('cfgVdoPin')?.value || '';

  if (!email || !newPass || newPass !== newPass.trim() || newPass.length < 8) {
    showToast("Please enter a valid VDO email and a password of at least 8 characters.");
    return;
  }

  showToast("Resetting VDO password...");
  try {
    const client = supabase.createClient(PANCHAYAT_CONFIG.supabaseUrl, PANCHAYAT_CONFIG.supabaseKey);
    const { data, error } = await client.rpc('admin_reset_password', {
      target_email: email,
      new_plain_password: newPass
    });

    if (error || !data.success) {
      showToast(data?.message || error?.message || "Password update failed.");
    } else {
      if (typeof AuditLogger !== 'undefined') {
        AuditLogger.log("Super Admin", "ADMIN_RESET_VDO", `Password reset for VDO (${email}).`);
      }
      document.getElementById('cfgVdoEmail').value = '';
      document.getElementById('cfgVdoPin').value = '';
      showToast("VDO password has been reset successfully.");
    }
  } catch (err) {
    showToast("Server error: Unable to reset password.");
  }
}

function downloadJsonBackup() {
  const b = new Blob([JSON.stringify(portalData, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(b);
  a.download = `Ajnawar_Panchayat_Backup_${new Date().toISOString().split('T')[0]}.json`;
  a.click();
}

function restoreJsonBackup() {
  const fileInput = document.getElementById('restoreJsonFile');
  if (!fileInput?.files[0]) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      portalData = JSON.parse(e.target.result);
      savePortalData();
      showToast("डेटा सफलतापूर्वक रिस्टोर हो गया!");
      setTimeout(() => location.reload(), 800);
    } catch(err) {
      showToast("अमान्य बैकअप फ़ाइल!");
    }
  };
  reader.readAsText(fileInput.files[0]);
}

function savePortalData() {
  localStorage.setItem('ajnawar_portal_data', JSON.stringify(portalData));
}

window.addEventListener('DOMContentLoaded', () => {
  renderPortal();
});
