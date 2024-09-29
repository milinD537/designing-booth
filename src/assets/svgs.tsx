import { SVGAttributes } from "react"

export const VideoEditing = (props: SVGAttributes<SVGElement>) => (
	<svg
		width="24"
		height="23"
		viewBox="0 0 24 23"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M0.5 3.25C0.5 2.38805 0.84241 1.5614 1.4519 0.951903C2.0614 0.34241 2.88805 0 3.75 0H17.25C18.112 0 18.9386 0.34241 19.5481 0.951903C20.1576 1.5614 20.5 2.38805 20.5 3.25V10.964C20.1554 10.6114 19.9362 10.1553 19.876 9.666L19.736 8.536C19.6831 8.11273 19.4775 7.72336 19.1577 7.44105C18.8379 7.15874 18.4261 7.00295 17.9995 7.00295C17.5729 7.00295 17.1611 7.15874 16.8413 7.44105C16.5215 7.72336 16.3159 8.11273 16.263 8.536L16.124 9.666C16.0627 10.1639 15.8366 10.6271 15.4819 10.9819C15.1271 11.3366 14.6639 11.5627 14.166 11.624L13.036 11.764C12.6127 11.8169 12.2234 12.0225 11.9411 12.3423C11.6587 12.6621 11.503 13.0739 11.503 13.5005C11.503 13.9271 11.6587 14.3389 11.9411 14.6587C12.2234 14.9785 12.6127 15.1841 13.036 15.237L13.736 15.323C13.658 15.3797 13.5837 15.443 13.513 15.513L11.025 18H3.75C2.88805 18 2.0614 17.6576 1.4519 17.0481C0.84241 16.4386 0.5 15.612 0.5 14.75V3.25ZM8.982 5.374C8.82967 5.2902 8.65813 5.24756 8.4843 5.25029C8.31046 5.25302 8.14034 5.30103 7.99072 5.38957C7.8411 5.47811 7.71715 5.60413 7.63109 5.75519C7.54504 5.90626 7.49986 6.07715 7.5 6.251V11.751C7.5002 11.9247 7.54564 12.0953 7.63184 12.2461C7.71804 12.3969 7.84202 12.5226 7.99158 12.6109C8.14115 12.6992 8.31113 12.7471 8.4848 12.7497C8.65846 12.7524 8.82982 12.7097 8.982 12.626L13.982 9.876C14.1388 9.78968 14.2695 9.66285 14.3606 9.50877C14.4517 9.35468 14.4997 9.17898 14.4997 9C14.4997 8.82102 14.4517 8.64532 14.3606 8.49123C14.2695 8.33715 14.1388 8.21032 13.982 8.124L8.982 5.374ZM14.5 16.043C14.6603 15.9866 14.835 15.9864 14.9954 16.0422C15.1559 16.0981 15.2926 16.2068 15.3832 16.3505C15.4738 16.4942 15.513 16.6644 15.4942 16.8333C15.4755 17.0022 15.3999 17.1597 15.28 17.28L10.78 21.78C10.7113 21.8537 10.6285 21.9128 10.5365 21.9538C10.4445 21.9948 10.3452 22.0168 10.2445 22.0186C10.1438 22.0204 10.0438 22.0018 9.9504 21.9641C9.85701 21.9264 9.77218 21.8703 9.70096 21.799C9.62974 21.7278 9.5736 21.643 9.53588 21.5496C9.49816 21.4562 9.47963 21.3562 9.48141 21.2555C9.48318 21.1548 9.50523 21.0555 9.54622 20.9635C9.58721 20.8715 9.64631 20.7887 9.72 20.72L14.22 16.22C14.299 16.1409 14.3946 16.0804 14.5 16.043ZM18.883 9.788C18.9715 10.5075 19.298 11.1768 19.8106 11.6894C20.3232 12.202 20.9925 12.5285 21.712 12.617L22.842 12.756C23.0231 12.779 23.1895 12.8673 23.3101 13.0043C23.4308 13.1412 23.4973 13.3175 23.4973 13.5C23.4973 13.6825 23.4308 13.8588 23.3101 13.9957C23.1895 14.1327 23.0231 14.221 22.842 14.244L21.712 14.384C20.9926 14.4724 20.3235 14.7988 19.8109 15.3112C19.2983 15.8236 18.9717 16.4927 18.883 17.212L18.744 18.342C18.721 18.5231 18.6327 18.6895 18.4957 18.8101C18.3588 18.9308 18.1825 18.9973 18 18.9973C17.8175 18.9973 17.6412 18.9308 17.5043 18.8101C17.3673 18.6895 17.279 18.5231 17.256 18.342L17.116 17.212C17.0276 16.4926 16.7012 15.8235 16.1888 15.3109C15.6764 14.7983 15.0073 14.4717 14.288 14.383L13.158 14.244C12.9769 14.221 12.8105 14.1327 12.6899 13.9957C12.5692 13.8588 12.5027 13.6825 12.5027 13.5C12.5027 13.3175 12.5692 13.1412 12.6899 13.0043C12.8105 12.8673 12.9769 12.779 13.158 12.756L14.288 12.616C14.3593 12.6073 14.43 12.5963 14.5 12.583C15.1759 12.4541 15.7935 12.1141 16.2638 11.6118C16.7341 11.1095 17.0328 10.4709 17.117 9.788L17.256 8.658C17.279 8.47695 17.3673 8.31051 17.5043 8.18987C17.6412 8.06923 17.8175 8.00268 18 8.00268C18.1825 8.00268 18.3588 8.06923 18.4957 8.18987C18.6327 8.31051 18.721 8.47695 18.744 8.658L18.883 9.788ZM17.86 12C17.455 12.616 16.9124 13.1295 16.275 13.5C16.9902 13.9157 17.5847 14.5105 18 15.226C18.4155 14.5104 19.0104 13.9155 19.726 13.5C19.0104 13.0845 18.4155 12.4896 18 11.774C17.9553 11.8506 17.9087 11.9259 17.86 12Z"
			fill="black"
		/>
	</svg>
)

export const SocialMediaMarketing = (props: SVGAttributes<SVGElement>) => (
	<svg
		width="21"
		height="20"
		viewBox="0 0 21 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M10.5 5C9.96957 5 9.46086 4.78929 9.08579 4.41421C8.71071 4.03914 8.5 3.53043 8.5 3C8.5 2.46957 8.71071 1.96086 9.08579 1.58579C9.46086 1.21071 9.96957 1 10.5 1C11.0304 1 11.5391 1.21071 11.9142 1.58579C12.2893 1.96086 12.5 2.46957 12.5 3C12.5 3.53043 12.2893 4.03914 11.9142 4.41421C11.5391 4.78929 11.0304 5 10.5 5ZM10.5 5V9M10.5 9C11.2956 9 12.0587 9.31607 12.6213 9.87868C13.1839 10.4413 13.5 11.2044 13.5 12C13.5 12.7956 13.1839 13.5587 12.6213 14.1213C12.0587 14.6839 11.2956 15 10.5 15C9.70435 15 8.94129 14.6839 8.37868 14.1213C7.81607 13.5587 7.5 12.7956 7.5 12C7.5 11.2044 7.81607 10.4413 8.37868 9.87868C8.94129 9.31607 9.70435 9 10.5 9ZM5.2 15.8L8 13.8M15.8 15.8L13 13.8M1.5 17C1.5 17.5304 1.71071 18.0391 2.08579 18.4142C2.46086 18.7893 2.96957 19 3.5 19C4.03043 19 4.53914 18.7893 4.91421 18.4142C5.28929 18.0391 5.5 17.5304 5.5 17C5.5 16.4696 5.28929 15.9609 4.91421 15.5858C4.53914 15.2107 4.03043 15 3.5 15C2.96957 15 2.46086 15.2107 2.08579 15.5858C1.71071 15.9609 1.5 16.4696 1.5 17ZM15.5 17C15.5 17.5304 15.7107 18.0391 16.0858 18.4142C16.4609 18.7893 16.9696 19 17.5 19C18.0304 19 18.5391 18.7893 18.9142 18.4142C19.2893 18.0391 19.5 17.5304 19.5 17C19.5 16.4696 19.2893 15.9609 18.9142 15.5858C18.5391 15.2107 18.0304 15 17.5 15C16.9696 15 16.4609 15.2107 16.0858 15.5858C15.7107 15.9609 15.5 16.4696 15.5 17Z"
			stroke="black"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

export const PhotoVideo = (props: SVGAttributes<SVGElement>) => (
	<svg
		width="21"
		height="18"
		viewBox="0 0 21 18"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M18.5 2H15.33L14.09 0.65C13.9033 0.445876 13.6762 0.282715 13.4232 0.170833C13.1701 0.0589507 12.8967 0.000780555 12.62 0H8.38C7.82 0 7.28 0.24 6.9 0.65L5.67 2H2.5C1.4 2 0.5 2.9 0.5 4V16C0.5 17.1 1.4 18 2.5 18H18.5C19.6 18 20.5 17.1 20.5 16V4C20.5 2.9 19.6 2 18.5 2ZM10.5 15C7.74 15 5.5 12.76 5.5 10C5.5 7.24 7.74 5 10.5 5C13.26 5 15.5 7.24 15.5 10C15.5 12.76 13.26 15 10.5 15ZM10.5 6L9.25 8.75L6.5 10L9.25 11.25L10.5 14L11.75 11.25L14.5 10L11.75 8.75L10.5 6Z"
			fill="black"
		/>
	</svg>
)

export const GraphicDesigning = (props: SVGAttributes<SVGElement>) => (
	<svg
		width="28"
		height="29"
		viewBox="0 0 28 29"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M17.1782 1.66163C16.7953 2.06142 16.5694 2.58591 16.542 3.13883C16.5146 3.69174 16.6876 4.23597 17.0292 4.67163L11.6382 6.45263C11.1821 6.60084 10.7788 6.87808 10.4771 7.2508C10.1754 7.62351 9.98818 8.07571 9.93818 8.55263L9.00818 17.1336C8.98486 17.356 9.01155 17.5808 9.08632 17.7916C9.16109 18.0024 9.28203 18.1937 9.44031 18.3517C9.59858 18.5097 9.79017 18.6303 10.0011 18.7047C10.212 18.7791 10.4368 18.8054 10.6592 18.7816L19.2382 17.8516C19.7151 17.8016 20.1673 17.6144 20.54 17.3127C20.9127 17.011 21.19 16.6077 21.3382 16.1516L23.1082 10.7616C23.5118 11.0914 24.017 11.2716 24.5382 11.2716C25.1344 11.2698 25.7056 11.0321 26.1271 10.6106C26.5487 10.189 26.7863 9.6178 26.7882 9.02163C26.7866 8.42482 26.5489 7.85288 26.1272 7.43063L20.3582 1.66063C19.9363 1.23897 19.3642 1.00211 18.7677 1.00211C18.1712 1.00211 17.5991 1.23897 17.1772 1.66063L17.1782 1.66163ZM20.3882 15.8416C20.2979 16.1145 20.1312 16.3557 19.9078 16.5365C19.6845 16.7173 19.4138 16.8302 19.1282 16.8616L10.7382 17.7616L14.7482 13.7516C14.9577 13.823 15.183 13.8345 15.3987 13.7848C15.6144 13.7352 15.8119 13.6264 15.9692 13.4706C16.0813 13.3631 16.1709 13.2342 16.2326 13.0916C16.2943 12.949 16.3269 12.7955 16.3285 12.6402C16.3301 12.4848 16.3006 12.3307 16.2418 12.1868C16.1831 12.043 16.0962 11.9124 15.9862 11.8026C15.8763 11.6928 15.7455 11.606 15.6016 11.5474C15.4577 11.4888 15.3036 11.4596 15.1482 11.4613C14.9928 11.4631 14.8394 11.4959 14.6968 11.5578C14.5543 11.6196 14.4256 11.7093 14.3182 11.8216C14.1616 11.9758 14.0529 12.1719 14.0052 12.3864C13.9574 12.6009 13.9727 12.8246 14.0492 13.0306L10.0292 17.0506L10.9292 8.66063C10.9584 8.37433 11.0704 8.10275 11.2516 7.87914C11.4327 7.65553 11.6752 7.48959 11.9492 7.40163L17.8092 5.47063L22.3192 9.98063L20.3882 15.8416ZM17.8782 4.13263C17.7043 3.95718 17.5862 3.73414 17.539 3.49166C17.4918 3.24918 17.5174 2.99814 17.6128 2.77024C17.7081 2.54234 17.8688 2.3478 18.0746 2.21118C18.2805 2.07456 18.5221 2.00199 18.7692 2.00263C18.933 2.00297 19.0951 2.03576 19.2461 2.09909C19.3971 2.16242 19.5341 2.25505 19.6492 2.37163L25.4192 8.14263C25.6476 8.38046 25.7751 8.6974 25.7751 9.02713C25.7751 9.35686 25.6476 9.6738 25.4192 9.91163C25.1847 10.143 24.8686 10.2727 24.5392 10.2727C24.2098 10.2727 23.8937 10.143 23.6592 9.91163L17.8782 4.13263Z"
			fill="black"
		/>
		<path
			d="M3.5 13.2881C3.5 19.9151 8.873 25.2881 15.5 25.2881M2.5 13.2881C2.23478 13.2881 1.98043 13.1827 1.79289 12.9952C1.60536 12.8077 1.5 12.5533 1.5 12.2881L1.5 10.2881C1.5 10.0229 1.60536 9.76851 1.79289 9.58098C1.98043 9.39344 2.23478 9.28809 2.5 9.28809L4.5 9.28809C4.76522 9.28809 5.01957 9.39344 5.20711 9.58098C5.39464 9.76851 5.5 10.0229 5.5 10.2881L5.5 12.2881C5.5 12.5533 5.39464 12.8077 5.20711 12.9952C5.01957 13.1827 4.76522 13.2881 4.5 13.2881L2.5 13.2881ZM16.5 27.2881C16.2348 27.2881 15.9804 27.1827 15.7929 26.9952C15.6054 26.8077 15.5 26.5533 15.5 26.2881L15.5 24.2881C15.5 24.0229 15.6054 23.7685 15.7929 23.581C15.9804 23.3934 16.2348 23.2881 16.5 23.2881L18.5 23.2881C18.7652 23.2881 19.0196 23.3934 19.2071 23.581C19.3946 23.7685 19.5 24.0229 19.5 24.2881L19.5 26.2881C19.5 26.5533 19.3946 26.8077 19.2071 26.9952C19.0196 27.1827 18.7652 27.2881 18.5 27.2881L16.5 27.2881Z"
			stroke="black"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

export const ThreeD = (props: SVGAttributes<SVGElement>) => (
	<svg
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M8.99984 0.923001C9.27777 0.762553 9.59023 0.671341 9.91083 0.657069C10.2314 0.642797 10.5508 0.705884 10.8418 0.841001L10.9998 0.923001L14.3298 2.845C14.6099 3.00676 14.8465 3.23401 15.0195 3.50728C15.1924 3.78055 15.2965 4.09168 15.3228 4.414L15.3298 4.577V8.423L18.6598 10.345C18.9399 10.5068 19.1765 10.734 19.3495 11.0073C19.5224 11.2805 19.6265 11.5917 19.6528 11.914L19.6598 12.077V15.923C19.6598 16.2462 19.5815 16.5646 19.4316 16.8509C19.2816 17.1372 19.0645 17.3829 18.7988 17.567L18.6598 17.655L15.3298 19.577C15.0518 19.7376 14.7392 19.8289 14.4184 19.8432C14.0976 19.8575 13.7781 19.7943 13.4868 19.659L13.3298 19.577L9.99984 17.655L6.66984 19.577C6.39179 19.7376 6.07915 19.8289 5.75836 19.8432C5.43757 19.8575 5.11806 19.7943 4.82684 19.659L4.66984 19.577L1.33984 17.655C1.05994 17.4933 0.823387 17.2662 0.650447 16.9932C0.477507 16.7201 0.373332 16.4092 0.346844 16.087L0.339844 15.923V12.077C0.339841 11.7538 0.418168 11.4354 0.568117 11.1491C0.718067 10.8628 0.935172 10.6171 1.20084 10.433L1.33984 10.345L4.66984 8.423V4.577C4.66984 4.2538 4.74817 3.93541 4.89812 3.64909C5.04807 3.36277 5.26517 3.11707 5.53084 2.933L5.66984 2.845L8.99984 0.923001ZM14.3298 10.155L11.1338 12L14.3298 13.845L17.5258 12L14.3298 10.155ZM5.66984 10.155L2.47384 12L5.66984 13.845L8.86584 12L5.66984 10.155ZM9.99984 2.655L6.80384 4.5L9.99984 6.345L13.1958 4.5L9.99984 2.655Z"
			fill="black"
		/>
	</svg>
)

export const DigitalMarketing = (props: SVGAttributes<SVGElement>) => (
	<svg
		width="48"
		height="49"
		viewBox="0 0 48 49"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<mask
			id="mask0_155_89"
			style={{ maskType: "luminance" }}
			maskUnits="userSpaceOnUse"
			x="2"
			y="6"
			width="44"
			height="37"
		>
			<path
				d="M44 11.5C44 10.7044 43.6839 9.94129 43.1213 9.37868C42.5587 8.81607 41.7957 8.5 41 8.5H7C6.20435 8.5 5.44129 8.81607 4.87868 9.37868C4.31607 9.94129 4 10.7044 4 11.5V20.5H44V11.5Z"
				fill="white"
				stroke="white"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.11133 39.53L16.2873 27.23L22.8673 33.53L30.9093 26.5L35.3893 30.868"
				stroke="white"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M44 18.5V37.5C44 38.2956 43.6839 39.0587 43.1213 39.6213C42.5587 40.1839 41.7956 40.5 41 40.5H12"
				stroke="white"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M19.1114 14.5H37.1114M11.1094 14.5H13.1094"
				stroke="black"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4 18.5V27.5"
				stroke="white"
				strokeWidth="4"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</mask>
		<g mask="url(#mask0_155_89)">
			<path d="M0 0.5H48V48.5H0V0.5Z" fill="black" />
		</g>
	</svg>
)
