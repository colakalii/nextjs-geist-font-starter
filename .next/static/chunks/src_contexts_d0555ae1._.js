(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/contexts/LanguageContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "LanguageProvider": (()=>LanguageProvider),
    "useLanguage": (()=>useLanguage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const translations = {
    tr: {
        // Header
        'app.title': 'Pil Stok Yöneticisi',
        'app.subtitle': 'AA ve AAA pil envanterinizi takip edin',
        // Stock Management
        'stock.title': 'Mevcut Pil Stoğu',
        'stock.description': 'Pil envanterinizi yönetin. Pil atadığınızda stok otomatik olarak azalır.',
        'stock.update': 'Stok Güncelle',
        'stock.lastUpdated': 'Son güncelleme',
        'stock.inStock': 'Stokta',
        'stock.lowStock': 'Az Stok',
        'stock.outOfStock': 'Stok Yok',
        'stock.aaStock': 'AA Stok',
        'stock.aaaStock': 'AAA Stok',
        'stock.totalStock': 'Toplam Stok',
        'stock.batteries': 'pil',
        'stock.battery': 'pil',
        // Stock Update Dialog
        'stock.updateTitle': 'Pil Stoğunu Güncelle',
        'stock.currentQuantity': 'Mevcut Miktar',
        'stock.lastUpdatedDate': 'Son Güncelleme Tarihi',
        'stock.cancel': 'İptal',
        'stock.updateButton': 'Stok Güncelle',
        // Assignment Form
        'assign.title': 'Pil Ata',
        'assign.description': 'Stoğunuzdan insanlara pil atayın. Stok otomatik olarak azalacaktır.',
        'assign.batteryType': 'Pil Tipi',
        'assign.selectType': 'Pil tipi seçin',
        'assign.quantity': 'Miktar',
        'assign.enterQuantity': 'Miktar girin',
        'assign.assignedTo': 'Atanan Kişi',
        'assign.enterName': 'Kişinin adını girin',
        'assign.assignmentDate': 'Atama Tarihi',
        'assign.assignButton': 'Pil Ata',
        'assign.assigning': 'Pil Atanıyor...',
        // Battery List
        'list.title': 'Pil Stok Kayıtları',
        'list.loading': 'Pil kayıtları yükleniyor...',
        'list.noEntries': 'Henüz pil kaydı yok',
        'list.addFirst': 'Yukarıdan ilk pil kaydınızı ekleyin',
        'list.type': 'Tip',
        'list.quantity': 'Miktar',
        'list.assignedTo': 'Atanan Kişi',
        'list.date': 'Tarih',
        'list.actions': 'İşlemler',
        'list.edit': 'Düzenle',
        'list.delete': 'Sil',
        'list.aaBatteries': 'AA Pil',
        'list.aaaBatteries': 'AAA Pil',
        'list.totalBatteries': 'Toplam Pil',
        // Edit Dialog
        'edit.title': 'Pil Kaydını Düzenle',
        'edit.batteryType': 'Pil Tipi',
        'edit.quantity': 'Miktar',
        'edit.assignedTo': 'Atanan Kişi',
        'edit.acquiredDate': 'Alım Tarihi',
        'edit.cancel': 'İptal',
        'edit.save': 'Değişiklikleri Kaydet',
        // Common
        'common.loading': 'Yükleniyor...',
        'common.error': 'Hata',
        'common.success': 'Başarılı',
        'common.confirm': 'Onay',
        'common.deleteConfirm': 'Bu kaydı silmek istediğinizden emin misiniz?',
        // Footer
        'footer.text': 'Meyer Group',
        // Theme
        'theme.light': 'Aydınlık',
        'theme.dark': 'Karanlık',
        'theme.toggle': 'Tema Değiştir',
        // Language
        'language.turkish': 'Türkçe',
        'language.english': 'English',
        'language.toggle': 'Dil Değiştir'
    },
    en: {
        // Header
        'app.title': 'Battery Stock Manager',
        'app.subtitle': 'Track your AA and AAA battery inventory',
        // Stock Management
        'stock.title': 'Current Battery Stock',
        'stock.description': 'Manage your battery inventory. Stock automatically reduces when you assign batteries.',
        'stock.update': 'Update Stock',
        'stock.lastUpdated': 'Last updated',
        'stock.inStock': 'In Stock',
        'stock.lowStock': 'Low Stock',
        'stock.outOfStock': 'Out of Stock',
        'stock.aaStock': 'AA Stock',
        'stock.aaaStock': 'AAA Stock',
        'stock.totalStock': 'Total Stock',
        'stock.batteries': 'batteries',
        'stock.battery': 'battery',
        // Stock Update Dialog
        'stock.updateTitle': 'Update Battery Stock',
        'stock.currentQuantity': 'Current Quantity',
        'stock.lastUpdatedDate': 'Last Updated Date',
        'stock.cancel': 'Cancel',
        'stock.updateButton': 'Update Stock',
        // Assignment Form
        'assign.title': 'Assign Batteries',
        'assign.description': 'Assign batteries from your stock to people. Stock will be automatically reduced.',
        'assign.batteryType': 'Battery Type',
        'assign.selectType': 'Select battery type',
        'assign.quantity': 'Quantity',
        'assign.enterQuantity': 'Enter quantity',
        'assign.assignedTo': 'Assigned To',
        'assign.enterName': 'Enter person\'s name',
        'assign.assignmentDate': 'Assignment Date',
        'assign.assignButton': 'Assign Batteries',
        'assign.assigning': 'Assigning Batteries...',
        // Battery List
        'list.title': 'Battery Stock Entries',
        'list.loading': 'Loading battery entries...',
        'list.noEntries': 'No battery entries yet',
        'list.addFirst': 'Add your first battery entry above',
        'list.type': 'Type',
        'list.quantity': 'Quantity',
        'list.assignedTo': 'Assigned To',
        'list.date': 'Date',
        'list.actions': 'Actions',
        'list.edit': 'Edit',
        'list.delete': 'Delete',
        'list.aaBatteries': 'AA Batteries',
        'list.aaaBatteries': 'AAA Batteries',
        'list.totalBatteries': 'Total Batteries',
        // Edit Dialog
        'edit.title': 'Edit Battery Entry',
        'edit.batteryType': 'Battery Type',
        'edit.quantity': 'Quantity',
        'edit.assignedTo': 'Assigned To',
        'edit.acquiredDate': 'Acquired Date',
        'edit.cancel': 'Cancel',
        'edit.save': 'Save Changes',
        // Common
        'common.loading': 'Loading...',
        'common.error': 'Error',
        'common.success': 'Success',
        'common.confirm': 'Confirm',
        'common.deleteConfirm': 'Are you sure you want to delete this entry?',
        // Footer
        'footer.text': 'Meyer Group',
        // Theme
        'theme.light': 'Light',
        'theme.dark': 'Dark',
        'theme.toggle': 'Toggle Theme',
        // Language
        'language.turkish': 'Türkçe',
        'language.english': 'English',
        'language.toggle': 'Change Language'
    }
};
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LanguageProvider({ children }) {
    _s();
    const [language, setLanguage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('tr');
    const t = (key)=>{
        return translations[language][key] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/LanguageContext.tsx",
        lineNumber: 194,
        columnNumber: 5
    }, this);
}
_s(LanguageProvider, "sdQwLqKPpQmdoviV+biTZAI5BPA=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/contexts/ThemeContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeProvider": (()=>ThemeProvider),
    "useTheme": (()=>useTheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ThemeProvider({ children }) {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('light');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            // Check for saved theme preference or default to 'light'
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                setTheme(savedTheme);
            }
        }
    }["ThemeProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            // Apply theme to document
            const root = document.documentElement;
            if (theme === 'dark') {
                root.classList.add('dark');
            } else {
                root.classList.remove('dark');
            }
            // Save theme preference
            localStorage.setItem('theme', theme);
        }
    }["ThemeProvider.useEffect"], [
        theme
    ]);
    const toggleTheme = ()=>{
        setTheme((prev)=>prev === 'light' ? 'dark' : 'light');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            setTheme,
            toggleTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/ThemeContext.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(ThemeProvider, "l0NnHMBAjTNA2m05PT0LPL3eOKc=");
_c = ThemeProvider;
function useTheme() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
_s1(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_contexts_d0555ae1._.js.map