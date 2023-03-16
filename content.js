const onlineKhabar = ['okam-each-ad','okam-ad-position-wrap','ok_rb_addWrap','ok_roadblock','nh_widget_wrap','single-inbetween-stories'];
const setoPati = ['main-bigyaapan','full-bigyaapan','bigyaapan-item','mobile-bigyaapan-only','desktop-bigyaapan-only'];

const allClassName = [...onlineKhabar, ...setoPati];
const hide = document.querySelectorAll(allClassName.map(className => '.' + className).join(', '));

for (let i = 0; i < hide.length; i++) {
    hide[i].remove();
    hide[i].style.display = 'none';
}