export default {
    config: {
        translations: {
            en: {
                "Auth.form.welcome.title": "Welcome to MFA CMS Admin",
                "Auth.form.welcome.subtitle": "Login into MFA account",
            },
        },
        head: {
            favicon: '/favicon.ico',
        }
    },
    bootstrap(app) {
        document.title = 'MFA CMS Admin';
        console.log(app);
    },
};
