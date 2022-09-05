import React from "react";
import {
	MantineProvider,
	ColorSchemeProvider,
	ColorScheme,
} from "@mantine/core";
import { useEffect, useState } from "react";
import Shell from "./components/Shell";
import Home from "./components/Home";

export function App(): JSX.Element {
	const [colorScheme, setColorScheme] = useState<ColorScheme>(
		localStorage.scheme ? localStorage.scheme : "light"
	);
	const toggleColorScheme = (value?: ColorScheme) => {
		const newScheme = value || (colorScheme === "dark" ? "light" : "dark");
		localStorage.scheme = newScheme;
		document.body.className = newScheme;
		setColorScheme(newScheme);
	};

	useEffect(() => {
		document.body.className = localStorage.scheme
			? localStorage.scheme
			: "light";
	}, []);

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				theme={{ colorScheme }}
				withGlobalStyles
				withNormalizeCSS
			>
						<Shell>
              <Home />
            </Shell>
			</MantineProvider>
		</ColorSchemeProvider>
	);
}
