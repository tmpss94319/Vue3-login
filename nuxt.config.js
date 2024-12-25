// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	css: ["~/assets/styles/tailwind.css"],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: ["@nuxt/image"],
	// image: {
	// 	domains: ['example.com'],
	// // 如果要使用外部圖片來源要設置這段
	// },
};
