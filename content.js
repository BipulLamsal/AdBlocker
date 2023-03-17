const onlineKhabar = ['okam-each-ad','okam-ad-position-wrap','ok_rb_addWrap','ok_roadblock','nh_widget_wrap','single-inbetween-stories'];
const setoPati = ['main-bigyaapan','full-bigyaapan','bigyaapan-item','mobile-bigyaapan-only','desktop-bigyaapan-only'];
const nagariknews = ['ads', 'alert-dismissible'];
const ekantipur = ['static-sponsor','sponsor-mobile','ekans-wrapper','daraz-sponser','daraz-sponser','layout_sponser_content']
const annapurna = ['bigyapan','ap__grid-bigyapaan'];

const allClassName = [...onlineKhabar, ...setoPati, ...nagariknews, ...ekantipur, ...annapurna];
const hide = document.querySelectorAll(allClassName.map(className => '.' + className).join(', '));

if (document.getElementById('roadblock-ad'))
{
    document.getElementById('roadblock-ad').style.display = 'none';
}



for (let i = 0; i < hide.length; i++) {
    hide[i].remove();
    hide[i].style.display = 'none';
}