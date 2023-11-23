const toggleBtn = document.getElementById('toggleDarkBtn');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

//Checking system dark mode
if (
        localStorage.getItem('color-theme') === 'dark' ||
        (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
       //Toggle Dark Mode
       //Show light icon
       lightIcon.classList.remove('hidden');
    } else {
       //Toggle Light Mode
       //Show dark icon
       darkIcon.classList.remove('hidden');
    }


const toggleDarkLightMode = () => {
    //Toggle button icon
    lightIcon.classList.toggle('hidden');
    darkIcon.classList.toggle('hidden');

    //If is set in localstorage
    if(localStorage.getItem('color-theme') !== null){
        if(localStorage.getItem('color-theme') === 'light'){
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    } else {
        //If not in localstorage
        if(document.documentElement.classList.contains('dark')){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }


    }
}

toggleBtn.addEventListener('click',toggleDarkLightMode);


