module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: [
        './*.html',
    ],
    theme: {
        extend: {
            colors: {
                'ti-nav': '#fcfcfc',
                'ti-primary': '#fafafa',
                'ti-ham': '#cccccc',
                'ti-blue': '#0c9ec7',
                'ti-ham-border': '#ededed',
                'ti-title-blue': '#6da6d0',
                'ti-primary-dark': '#777777',
                'ti-btn': '#09afdf',
                'ti-white': '#ffffff',
                'ti-section-blue': '#52C7E9',
                'ti-btn-dark': '#373838',
                'ti-border': '#f1f1f1',
                'ti-linkedin': '#0976b4',
                'ti-facebook': '#3b5998',
                'ti-black': '#333333',
                'ti-twitter': '#55acee',
                'ti-footer': '#999999',
                'ti-footer-bg': '#f5f5f5',
                'ti-footer-bd': '#eaeaea'
            }
        },

    },
    variants: {
        opacity: ['responsive', 'hover', 'focus', 'group-hover'],
        scale: ['responsive', 'hover', 'focus', 'group-hover'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
        height: ['responsive', 'group-hover'],
    },
    plugins: [
        require('@tailwindcss/custom-forms')
    ]
}