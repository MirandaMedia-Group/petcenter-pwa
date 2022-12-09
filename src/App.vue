<template>
	<div
		id="overall-wrapper"
		class="container">
		<aside id="sidebar">
			<div class="user-menu">
				<div class="box user-menu__head">
					<div class="user-menu__avatar">
						<img
							src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
							alt="Avatar" />
					</div>
					<div class="user-menu__info">
						<div class="user-menu__name">Tomáš Bajtler</div>
						<button class="user-menu__logout">Odhlásit</button>
					</div>
				</div>
				<div class="box user-menu__body">
					<nav>
						<ul class="menu__level1">
							<li
								v-for="(item, index) in menuData"
								:key="index"
								class="expanded">
								<span @click="toggleMenu">{{ index }}</span>
								<ul class="menu__level2">
									<li
										v-for="(item, index) in item"
										:key="index">
										<RouterLink :to="item.link">{{ item.name }}</RouterLink>
									</li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div class="box support-box">
				<h4>Zákaznická podpora</h4>
				<span>Zákaznická linka Po - Pa 9:00 - 17:00</span>
				<div class="phone-box contact-box">
					<div class="contact-box__icon">
						<svg
							width="24"
							height="25"
							viewBox="0 0 24 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M22.5541 17.9267L19.3151 14.6877C19.0581 14.4229 18.7373 14.2285 18.3835 14.1233C18.0298 14.0181 17.6549 14.0056 17.2949 14.0869C16.9349 14.1682 16.6019 14.3407 16.3277 14.5877C16.0535 14.8347 15.8474 15.1481 15.7291 15.4977C15.5452 15.9982 15.1857 16.4148 14.7176 16.6701C14.2494 16.9254 13.7045 17.002 13.1841 16.8857C10.8711 16.3077 7.74813 13.2997 7.17013 10.8717C7.03011 10.3503 7.09629 9.79493 7.35494 9.32102C7.6136 8.8471 8.04484 8.49101 8.55913 8.32669C8.90815 8.20776 9.2208 8.00123 9.46714 7.72687C9.71348 7.45251 9.88526 7.1195 9.96605 6.75973C10.0468 6.39996 10.0339 6.02548 9.92852 5.67214C9.82313 5.31879 9.62879 4.99842 9.36413 4.74169L6.13013 1.50269C5.70403 1.11183 5.14684 0.894989 4.56863 0.894989C3.99042 0.894989 3.43323 1.11183 3.00713 1.50269L0.807128 3.70269C-1.39287 6.01569 1.03813 12.1457 6.47413 17.5827C11.9101 23.0197 18.0401 25.5637 20.3541 23.2497L22.5541 21.0497C22.945 20.6236 23.1618 20.0664 23.1618 19.4882C23.1618 18.91 22.945 18.3528 22.5541 17.9267Z"
								fill="#EB7717" />
						</svg>
					</div>
					<div class="phone-box__info">
						<a
							href="tel:00420228884900"
							class="contact-box__target"
							>+420 228 884 900</a
						>
						<span class="opening-hours">Po - Pa 8:00 - 16:00</span>
					</div>
				</div>
				<div class="mail-box contact-box">
					<div class="contact-box__icon">
						<svg
							width="21"
							height="18"
							viewBox="0 0 21 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M20.25 0.75H0.75C0.335156 0.75 0 1.08516 0 1.5V16.5C0 16.9148 0.335156 17.25 0.75 17.25H20.25C20.6648 17.25 21 16.9148 21 16.5V1.5C21 1.08516 20.6648 0.75 20.25 0.75ZM18.3563 3.30234L10.9617 9.05625C10.7789 9.19922 10.5234 9.19922 10.3406 9.05625L2.94375 3.30234C2.91587 3.28082 2.89541 3.25112 2.88526 3.21739C2.87511 3.18367 2.87576 3.14761 2.88713 3.11427C2.8985 3.08094 2.92002 3.052 2.94867 3.0315C2.97731 3.01101 3.01165 2.99999 3.04688 3H18.2531C18.2883 2.99999 18.3227 3.01101 18.3513 3.0315C18.38 3.052 18.4015 3.08094 18.4129 3.11427C18.4242 3.14761 18.4249 3.18367 18.4147 3.21739C18.4046 3.25112 18.3841 3.28082 18.3563 3.30234Z"
								fill="#EB7717" />
						</svg>
					</div>
					<div class="contact-box__info">
						<a
							href="mailto:info@petcenter.cz"
							class="contact-box__target"
							>info@petcenter.cz</a
						>
					</div>
				</div>
				<nav class="secondary-navigation">
					<ul>
						<li>
							<RouterLink to="/sledovani-objednavky">Sledování objednávky</RouterLink>
						</li>
						<li>
							<RouterLink to="/faq">FAQ</RouterLink>
						</li>
						<li>
							<RouterLink to="/doprava-a-platba">Doprava a platba</RouterLink>
						</li>
					</ul>
				</nav>
			</div>
		</aside>
		<main id="content">
			<RouterView />
		</main>
	</div>
</template>

<script setup>
	import { ref } from 'vue'
	import { RouterLink, RouterView } from 'vue-router'
	import MainHeader from './components/MainHeader.vue'

	const menuData = ref({
		'Můj účet': [
			{
				name: 'Můj účet - nastavení',
				link: '/',
			},
			{
				name: 'Mé hodnocení a recenze',
				link: '/hodnoceni-recenze',
			},
			{
				name: 'Moje zvířátka',
				link: '/moje-zviratka',
			},
			{
				name: 'Moje prodejna',
				link: '/moje-prodejna',
			},
			{
				name: 'Odběr novinek (newsletter, sms, notifikace)',
				link: '/odber-novinek',
			},
			{
				name: 'FAQ (Často kladené dotazy)',
				link: '/faq',
			},
		],
		'Moje nákupy': [
			{
				name: 'Moje objednávky',
				link: '/objednavky',
			},
			{
				name: 'Automatické ojednávky',
				link: '/automaticke-objednavky',
			},
			{
				name: 'Reklamace',
				link: '/reklamace',
			},
			{
				name: 'Oblíbené zboží',
				link: '/oblibene',
			},
			{
				name: 'Aktuální akční leták',
				link: '/akcni-letak',
			},
		],
		'Věrnostní program': [
			{
				name: 'Zákaznická karta',
				link: '/zakaznicka-karta',
			},
			{
				name: 'Kupóny',
				link: '/kupony',
			},
		],
	})

	const toggleMenu = (e) => {
		e.target.parentElement.classList.toggle('expanded')
	}
</script>

<style lang="scss">
	html {
		font-size: 16px;
	}
	body {
		font-family: 'Calibri', sans-serif;
		color: $color-font;
		font-size: clamp(14px, 1rem, 18px);
	}
	a {
		display: inline-block;
		transition: all 0.15s ease-in-out;
	}
	button {
		display: inline-block;
		background-color: transparent;
		box-shadow: none;
		border: none;
		padding: 0;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-weight: 700;
	}
	nav {
		ul {
			list-style: none;
			padding: 0;
			margin: 0;
		}
	}
	.container {
		@include container(1440px);
	}
	#overall-wrapper {
		display: flex;
		gap: 20px;
	}
	#sidebar {
		flex: 0 0 360px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	#content {
		flex: 1 1 auto;
	}
	.box {
		padding: 30px;
		border-radius: 6px;
		overflow: hidden;
	}

	.user-menu__head {
		display: flex;
		align-items: center;
		gap: 10px;
		background-color: $color-bg-dark;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	.user-menu__avatar {
		flex: 0 1 50px;
		img {
			width: 100%;
		}
	}
	.user-menu__name {
		font-size: rem(22);
		font-weight: 700;
	}
	.user-menu__logout {
		color: $color-font-light;
	}

	.user-menu__body {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		border: 1px solid $color-bg-dark;
		padding-top: 20px;
		padding-bottom: 20px;
		a {
			text-decoration: none;
			color: $color-font;
			&.router-link-active,
			&:hover,
			&:focus {
				color: $color-primary;
				font-weight: 700;
			}
		}
		.menu__level1 {
			& > li {
				&:not(.expanded) {
					& > span::after {
						transform: rotate(45deg);
						top: -3px;
					}
					.menu__level2 {
						display: none;
					}
				}
				& > span {
					font-size: rem(22);
					font-weight: 700;
					text-transform: uppercase;
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: em(10) 0;
					gap: 10px;
					cursor: pointer;
					transition: all 0.15s ease-in-out;
					&::after {
						content: '';
						display: block;
						width: 12px;
						height: 12px;
						border: 2px solid $color-font;
						border-style: none solid solid none;
						transform: rotate(-135deg);
						transition: all 0.15s ease-in-out;
						position: relative;
						top: 0px;
					}
					&:hover,
					&:focus {
						color: $color-primary;
						&::after {
							border-color: $color-primary;
						}
					}
				}
				&:not(:last-of-type) {
					border-bottom: 1px solid $color-bg-dark;
					padding-bottom: 20px;
					margin-bottom: 20px;
				}
			}
		}
		.menu__level2 {
			& > li {
				& > a {
					padding: em(5) 0;
				}
			}
		}
	}

	.support-box {
		background-color: #f8f6f2;
		h4 {
			font-size: rem(22);
			margin-bottom: em(10, 22);
		}
	}

	.contact-box {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 20px;
		background-color: $color-white;
	}
	.contact-box__target {
		display: block;
		text-decoration: none;
		font-weight: 700;
		color: $color-font;
		font-size: rem(18);
		line-height: em(22, 18);
		&:hover,
		&:focus {
			color: $color-primary;
		}
	}
	.phone-box {
		margin-top: 30px;
		margin-bottom: 10px;
	}
	.mail-box {
		margin-bottom: 30px;
	}
	.opening-hours {
		line-height: em(25, 16);
		color: rgba($color-font, 0.8);
	}

	.secondary-navigation {
		a {
			text-decoration: none;
			color: $color-font;
			padding: em(5) 0;
			&:hover,
			&:focus {
				color: $color-primary;
			}
		}
	}
</style>
