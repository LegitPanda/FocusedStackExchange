var showSidebar = true;
var content = document.getElementById('content');
//content.style.paddingLeft='0px';
content.style.width='calc(100% - 48px)';

var sidebarButton = document.createElement("div");
sidebarButton.className='sidebarButton';
sidebarButton.style.minWidth='24px';
sidebarButton.style.backgroundColor='lightgrey';
sidebarButton.style.cursor='pointer';
sidebarButton.addEventListener(
	'click',
	()=> {
		if (showSidebar) {
			leftSidebar.style.width='0px';
		} else {
			leftSidebar.style.width='auto';
		}
		showSidebar = !showSidebar;
	},
	false)

var leftSidebar = document.getElementById('left-sidebar');
leftSidebar.style.display = 'inline-flex';
leftSidebar.append(sidebarButton);