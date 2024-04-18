import * as mainFuncs from "./modules/functions.js";
import { swiperInit } from "./modules/swiperInit.js";
import Modals from "./modules/modals.js";
import Mobmenu from "./modules/mobmenu.js";
import navigation from "./modules/navigation.js";
import iMask from "./modules/iMask.js";
import Tabs from "./modules/tabs.js";

mainFuncs.isWebp();

document.addEventListener("DOMContentLoaded", function () {
	swiperInit();
	Modals();
	Mobmenu();
	navigation();
	iMask();
	Tabs();
});
