import React from "react"
import Header from "../components/Header";
import Cover from "../components/Cover";
import Timeline from "../components/Timeline";
import Guests from "../components/Guests";
import ConferanceRegitster from "../components/ConferanceRegitster";
import Holders from "../components/Holders";
import HoldingPlace from "../components/HoldingPlace";
import Sponsers from "../components/Sponsers";

let data = {
    SiteInfo: {
        Title: "همایش لینوکس و برنامه نویسی",
        Desc: "جشن انتشار اوبونتو نسخه 19.10",
        RegisterLink: "https://evnd.co/csjpg",
        alert: {
            Text: "پنجشنبه - 9 آبان 1398 / دانشکده فنی مهندسی دانشگاه اراک (پردیس سردشت)",
            Color: "#40BE65"
        },
        Social: {
            Mastodon: "https://fosstodon.org/@UbuntuIranParty",
            Twitter: "https://twitter.com/UbuntuIranParty?s=09",
            Instagram: "https://instagram.com/ubuntu_ir",
            Telegram: "https://t.me/ufest1910"

        }
    },
    timeline: {
        Title: "زمان بندی",
        Items: [
            {
                Time: "8:00",
                Publisher: "تیم برگزاری",
                Title: "شروع پذیرش"
            },
            {
                Time: "9:00",
                Publisher: "مجری و میهمانان ویژه",
                Title: "شروع مراسم و سخنرانی های اولیه"
            },
            {
                Time: "10:30",
                Publisher: "تیم برگزاری",
                Title: "پذیرایی و استراحت"
            },
            {
                Time: "11:00",
                Publisher: "ارائه دهندگان منتخب",
                Title: "شروع ارائه ها"
            },
            {
                Time: "12:30",
                Publisher: "تیم برگزاری",
                Title: "ناهار و استراحت"
            },
            {
                Time: "14:00",
                Publisher: "ارائه دهندگان منتخب",
                Title: "ادامه ارائه ها و کارگاه ها"
            },
            {
                Time: "15:30",
                Publisher: "تیم برگزاری",
                Title: "پذیرایی و استراحت"
            },
            {
                Time: "16:00",
                Publisher: "مجری و تیم برگزاری",
                Title: "جشن اوبونتو و اختتامیه همایش"
            },
            {
                Time: "18:00",
                Publisher: "حاضرین در همایش",
                Title: "اتمام همایش و عکس یادگاری"
            }
        ]
    },
    guests: {
        Title: "ارائه دهندگان",
        Items: [
            {
                Name: "لقمان آوند",
                LatinName: "DRAvand",
                Description:
                    "در ۱۴ سال گذشته تمام وقتش به آموزش و تجربه برنامه‌نویسی و تحلیل داده در حوزه‌های مختلف سپری شده و در سون‌لرن بیش از ۱۰ هزار دانشجوی برنامه‌نویسی رو آموزش داده و به شدت علاقمند به  توسعه مهارت‌های ارتباطی و آموزش مهارت‌های نرم به برنامه‌نویس هاست.",
                Social: {
                    Website: "https://7learn.com/",
                    Instagram: "https://www.instagram.com/loghman.avand",
                    LinkedIn: "https://ir.linkedin.com/in/loghman/"
                },
            },
            {
                Name: "سعید بستان دوست",
                LatinName: "ssbostan",
                Description:
                    "کارشناس نرم‌افزار،سیس ادمین گنو/لینوکس از سال ۸۵ و فعال در حوزه برنامه‌نویسی، امنیت و زیرساخت که اینبار در مورد تازه‌های ردهت، امنیت و هاردنینگ لینوکس دانشش رو باهتون به اشتراک میگذاره"
                ,
                Social: {
                    Website: "http://www.bostandoust.ir",
                    Instagram: "https://www.instagram.com/bostandoust.ir",
                },
            },
            {
                Name: "دانیال بهزادی",
                LatinName: "Danial Behzadi",
                Description: "دانیال، یه طرفدار ادبیات گمانه‌زن و مدافع آزادی دانش و نرم‌افزاره که به صورت تخصصی در زمینهٔ سیستم‌عامل‌ها کار می‌کنه و عضوی از تیم توسعهٔ توزیع گنو/لینوکس اوبونتوست. در این جشن، دانیال در مورد اوبونتو صحبت می‌کنه و پیشرفت‌های جدیدش رو بهمون نشون می‌ده.",
                Social: {
                    Website: "https://gnu.rocks",
                    Mastodon: "https://social.librem.one/@danialbehzadi"
                }
            },
            {
                Name: "مریم بهزادی",
                LatinName: "MBehzadi",
                Description:
                    "مریم بهزادی، برنامه‌نویس و هوادار نرم‌افزار آزاد و گنو/لینوکس، ارشد هوش مصنوعی و رباتیک از دانشگاه یزد داره و سه سال هست که به عنوان راهبر شیرازلاگ فعالیت می‌کنه. در حال حاضر مدرس دانشگاه بوده و در زمینه اینترنت اشیاء و تحلیل داده فعالیت می‌کنه. امسال توی جشن انتشار اوبونتو راجع به snap با شما صحبت می‌کنه",
                Social: {
                    Website: "https://hiva-iot.com",
                    Telegram: "https://t.me/mariebehzadi",
                    Twitter: "https://twitter.com/mariebehzadi",
                    LinkedIn: "https://ir.linkedin.com/in/behzadim/"
                },
            },
            {
                Name: "مهدی حمیدی",
                LatinName: "MHamidi",
                Description:
                    "مهدی قراره درباره rsyslog و قابلیت‌های ناشناخته‌ش توضیح بده و اینکه چطور یه log stack امن بسازیم که درش هیچ لاگی از دست نره و نسبت به خطاهای احتمالی شبکه مقاوم باشه.",
                Social: {
                    Twitter: "https://twitter.com/eXtrem0us",
                    Virgool: "https://virgool.io/@eXtrem0us"
                },
            },
            {
                Name: "حسین حیدری",
                LatinName: "Hosein Heydari",
                Description:
                    "حسین یه کاربر قدیمی آرچ لینوکسه که سعی میکنه با توسعه AUR و فعالیت در ویکی فارسی آرچ به رشد این توزیع کمک کنه، از علاقه‌مندی هاش میشه به ریاضیات و ادبیات ژاپنی اشاره کرد، در این جشن تجربیاتش رو در web scraping با پایتون باهاتون به اشتراک میذاره.",
                Social: {
                    Instagram: "https://www.instagram.com/Hossein6heydari",
                    Twitter: "https://twitter.com/Hossein6heydari"
                },
            },
            {
                Name: "امین خزاعی",
                LatinName: "Amin Khozaei",
                Description:
                    "خزاعی، برنامه نویس سیستمی و از کاربران و هواداران نرم‌افزار آزاد و سیستم عامل گنو/لینوکس هست. از ۸۷ داره توی زمینه گنو/لینوکس فعالیت می‌کنه. ارشد نرم‌افزارش رو از دانشگاه شیراز گرفته و چهار ساله که از راهبران شیرازلاگ هست. فعالیتش در حال حاضر بیشتر در زمینه درایور نویسی و ساخت سیستم عامل سفارشی براساس پروژه Yocto و buildroot هست. امسال توی جشن انتشار می‌خواد در مورد گنوم ۳ صحبت کنه و کارگاه داکر هم برگزار کنه.",
                Social: {
                    Website: "http://hiva-iot.com",
                    Twitter: "https://twitter.com/aminkhozaei",
                    Telegram: "https://t.me/aminkhozaei",
                },
            },
            {
                Name: "محمد فدوی",
                LatinName: "MFadavi",
                Description:
                    "برنامه‌نویس و طرفدار تمام‌وقت آزادی نرم‌افزار. در مورد تاریخچهٔ جاوااسکریپت می‌گه و دلایل اهمیتش .",
                Social: {
                    Website: "https://fadavi.net",
                    Telegram: "https://t.me/fadavi"
                },
            },
            {
                Name: "رامین فیاض زاده",
                LatinName: "Ramin Fayyaz zadeh",
                Description: "عاشق یادگیری و آموزش، بیشتر در همین زمینه فعالیت میکنه. علاقه شدیدی به رزبری و خانه‌های هوشمند داره. عضو فعال در تهران‌لاگ و هماهنگ کننده جلسات، هم‌اکنون هم در فرودگاه مهرآباد در تیم پشتیبانی فنی مشغول کاره",
                Social: {
                    LinkedIn: "https://ir.linkedin.com/in/raminـfayyazzadeh"
                }
            },
            {
                Name: "حسام الدین کاوه",
                LatinName: "Hesam Kaveh",
                Description:
                    "مهندسی نرم افزار میخونه اما هیچوقت به دانشجو بودنش افتخار نکرده. عقیده داره دانشگاه بیشتر از دو سه ترم بدرد نمیخوره. اگه پایتون و جاوااسکریپت رو نوعی ورزش حساب کنیم بیشتر وقتشو مشغول ورزشه. اوقات فراغتش هم با دوچرخه میزنه به دل جاده و شهر های مختلفو میگرده.",
                Social: {
                    LinkedIn: "https://ir.linkedin.com/in/hesamkaveh"
                }
            },
            {
                Name: "محمد مسلمی",
                LatinName: "MMoslemi",
                Description : "[Embedded] Computerist! Unixman... Software Liberation Promoter...",
                Social: {
                }
            },
            {
                Name: "علی مولایی",
                LatinName: "Ali Molaei",
                Description: "علی مولایی، برنامه‌نویس و دوستدار نرم‌افزار آزاد، فارغ‌التحصیل کارشناسی دانشگاه اراک و دانشجوی کارشناسی ارشد نرم‌افزار دانشگاه شیراز، آماده برای تبلیغ و ترویج استفاده از نرم‌افزار آزاد در این جشن انتشار اوبونتوست!",
                Social: {
                    Website: "https://molaei.org",
                    Twitter: "https://twitter.com/molaei_ali",
                    LinkedIn: "https://ir.linkedin.com/in/ali-molaei"
                }
            },
            {
                Name: "مهدی مهران فرید",
                LatinName: "MMehranfarid",
                Description:
                    ["موسس خانه لینوکس ایران، مدیرعامل فناوران آنیسا، طراح دوره های حرفه ای مدیریت سیستم های لینوکس، توسعه نرم افزار ، DevOps، IOT و Data Science ",
                        "<br>",
                        "15 سال به صورت حرفه ای و بی وقفه در لقب استاد تمامی لینوکس، این دانش به روز و دست اول رو به بیش از 15 هزار دانشجوی علاقه مند به این حوزه آموزش داده و اساتید بسیاری رو هم تربیت کرده و به اینکه دانش آموخته هاش رو در بهترین رتبه های شغلی شرکت های بزرگی مثل Dell، Amazon و حتی NASA مشغول به کار می بینه، افتخار می کنه.",
                        "<br>",
                        "در این رویداد حضور داره تا برای قرار گرفتن شما در مسیر طلایی ای که برای ورود به بزرگترین شرکت های دنیا پیش رو دارید راهنماییتون کنه."],
                Social: {
                    LinkedIn: "https://ir.linkedin.com/in/mehdi-mehranfarid-07604535/"
                }
            },
            {
                Name: "جادی میرمیرانی",
                LatinName: "Jadi",
                Description: "جادی، برنامه نویس و کاربر قدیمی گنو/لینوکس است. مهندس مخابرات و کسی که از دیدن هر ورژن جدید گنو/لینوکس هیجان زده می‌شه و اخبارش رو دنبال می کنه. امسال هم مثل جشن انتشارهای قبلی، جادی اخبار این دوره اوبونتو و لینوکس رو با شما مرور می کنه",
                Social: {
                    Website: "https://jadi.net",
                    Instagram: "https://www.instagram.com/jadijadinet/",
                    Telegram: "https://telegram.me/jadinet"
                }
            },
        ]
    },
    conferanceRegitster: {
        Title: "اعلام آمادگی ارائه",
        Desc: [
            "چنانچه شما نیز تمایل به برگزاری کارگاه یا ارائه در خصوص موضوعات مرتبط با برنامه‌نویسی و نرم‌افزارهای متن‌باز  دارید میتوانید با ایمیل ",
            <span className="highlight-light ltr">1910@ubuntu.ir</span>,
            " با تیم برگزارکننده در ارتباط باشید؛ و یا در گروه تلگرامی ارائه ها و کارگاه‌ها با آدرس ",
            <a href="https://t.me/joinchat/B1PAqhB8hvRWUvwWki71Jw" target="_blank" className="highlight-light ltr">https://t.me/joinchat/B1PAqhB8hvRWUvwWki71Jw</a>,
            " عضو شوید."
        ]
    },
    holders: {
        Title: "برگزارکنندگان",
        Items: [
            {
                Name: "معصومه غلامی",
                LatinName: "Masoome Gholami",
                Social: {
                    LinkedIn: "https://ir.linkedin.com/in/masoumeh-gholami-07ab8574/"
                }
            },
            {
                Name: "حسام الدین کاوه",
                LatinName: "Hesam Kaveh",
                Social: {
                    LinkedIn: "https://ir.linkedin.com/in/hesamkaveh"
                }
            },
            {
                Name: "رامین فیاض زاده",
                LatinName: "Ramin Fayyaz zadeh",
                Social: {
                    LinkedIn: "https://ir.linkedin.com/in/raminـfayyazzadeh"
                }
            },
            {
                Name: "علی مولایی",
                LatinName: "Ali Molaei",
                Social: {
                    Website: "https://molaei.org",
                    Twitter: "https://twitter.com/molaei_ali",
                    LinkedIn: "https://ir.linkedin.com/in/ali-molaei"
                }
            },
            {
                Name: "سید محمد امین جوادی",
                LatinName: "MAJavadi",
                Social: {
                    Github: "https://github.com/amin3mej",
                    LinkedIn: "https://ir.linkedin.com/in/amin3mej/"
                }
            },
            {
                Name: "وحید طاهری",
                LatinName: "Vahid Taheri",
                Social: {
                    LinkedIn: "https://ir.linkedin.com/in/98vahidtaheri/"
                }
            },
            {
                Name: "بهراد باقری",
                LatinName: "Behrad Bagheri",
                Social: {
                    LinkedIn: "https://ir.linkedin.com/in/behrad-bagehri-ab880b10b/"
                }
            },
            {
                Name: "شرکت داده افزار روپل",
                LatinName: "Roupel",
                Social: {
                    Instagram: "https://www.instagram.com/roupel.datamining"
                }
            },
            {
                Name: "انجمن علمی کامپیوتر دانشگاه اراک",
                LatinName: "anjoman",
                Social: {
                    Website: "http://comp.araku.ac.ir/scisoc"
                }
            },
        ]
    },
    sponcers: {
        Title: "اسپانسرها",
        Items: [
            {
                Name: "پارک علم و فناوری استان مرکزی",
                LatinName: "Park",
                Link: "http://www.astp.ir/"
            },

            {
                Name: "جامعه اوبونتو ایران",
                LatinName: "Ubuntuir",
                Link: "http://ubuntu.ir"
            },
            {
                Name: "حباب آبی(گرافیست و طراح لوگو)",
                LatinName: "hobabeabi",
                Link: "https://www.instagram.com/hobabeabi/"
            },
            {
                Name: "خانه لینوکس ایران - آنیسا",
                LatinName: "Anisa",
                Link: "http://lpir.org/"
            },
            {
                Name: "لینوکسی‌ها - وبسایت فارسی آموزش و اخبار گنو/لینوکس",
                LatinName: "linuxiha",
                Link: "http://linuxihaa.ir/"
            },
            {
                Name: "دنیای فناوری - زومیت",
                LatinName: "Zoomit",
                Link: "https://www.zoomit.ir"
            },
            {
                Name: "استیکر لپتاپ فلربو",
                LatinName: "Flerbo",
                Link: "https://flerbo.ir/"
            },
            {
                Name: "ایران سرور | بزرگترین و محبوبترین ارائه دهنده خدمات میزبانی و دامنه",
                LatinName: "Iranserver",
                Link: "https://www.iranserver.com/"
            },
            {
                Name: "دانشگاه اراک",
                LatinName: "Arak University",
                Link: "http://araku.ac.ir"
            }
        ]
    }
};

const IndexPage = () => (
    <div className="page">
        <Header data={data.SiteInfo} />
        <Cover data={data.SiteInfo} />
        <Timeline data={data.timeline} />
        <Guests data={data.guests} />
        <ConferanceRegitster data={data.conferanceRegitster} />
        <Holders data={data.holders} />
        <HoldingPlace /*data={holdingPlace}*/ />
        <Sponsers data={data.sponcers} />
    </div>
);

export default IndexPage
