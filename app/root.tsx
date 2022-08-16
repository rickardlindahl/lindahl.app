import React from 'react'
import type { LinksFunction, MetaFunction } from '@remix-run/node'
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useTransition,
} from '@remix-run/react'
import { useEffect } from 'react'
import styles from './tailwind.css'

interface DocumentProps {
	children: React.ReactNode
}

export const links: LinksFunction = () => {
	return [
		{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
		{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;600;700&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap',
		},
		{ rel: 'stylesheet', href: styles },
	]
}

export const meta: MetaFunction = () => ({
	// TODO: Fill out the empty strings as required
	charset: 'utf-8',
	'msapplication-TileColor': '#2b5797',
	'og:site': '',
	'og:url': '',
	'og:title': '',
	'og:description': '',
	'og:image': '',
	'theme-color': '',
	title: '',
	'twitter:card': 'summary_large_image',
	'twitter:site': '',
	'twitter:url': '',
	'twitter:creator': '',
	'twitter:title': '',
	'twitter:description': '',
	'twitter:image': '',
	viewport: 'width=device-width,initial-scale=1',
})

function Document(props: DocumentProps) {
	return (
		<html lang='en' className='h-full'>
			<head>
				<Meta />
				<Links />
			</head>
			<body className='h-full w-full bg-brand-900 font-sans'>
				{props.children}
				<ScrollRestoration />
				<Scripts />
				{process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
			</body>
		</html>
	)
}

export default function App() {
	return (
		<Document>
			<Outlet />
		</Document>
	)
}
