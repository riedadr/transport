import React from "react";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

export function ThemeSwitch() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";

	return (
		<ActionIcon
			variant="outline"
			color="yellow"
			onClick={() => toggleColorScheme()}
			title="Toggle color scheme"
		>
			{dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
		</ActionIcon>
	);
}
