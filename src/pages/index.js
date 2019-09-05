import React from "react"
import Header from "../components/Header";
import Cover from "../components/Cover";
import ColoredBlock from "../components/ColoredBlock";
import Timeline from "../components/Timeline";
import Guests from "../components/Guests";
import Holders from "../components/Holders";
import HoldingPlace from "../components/HoldingPlace";
import Sponsers from "../components/Sponsers";

let data = {
    SiteInfo: {
        Title: "همایش لینوکس و برنامه نویسی",
        Desc: "همایش لینوکس و برنامه نویسی",
        RegisterLink: "#"
    },
    timeline: {
        Title: "زمان بندی",
        Items: [
            {
                Time: "8:00",
                Presenter: "شخص شخیص",
                Title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم."
            },
            {
                Time: "10:00",
                Presenter: "شخص شخیص",
                Title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم."
            },
            {
                Time: "11:00",
                Presenter: "شخص شخیص",
                Title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم."
            },
            {
                Time: "12:00",
                Presenter: "شخص شخیص",
                Title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم."
            },
            {
                Time: "14:00",
                Presenter: "شخص شخیص",
                Title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم."
            },
        ]
    },
    alert: {
        Text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        Color: "#40BE65"
    },
    guests: {
        Title: "میهمانان",
        Items: [
            {
                Name: "اسم فامیل",
                LatinName: "guest1",
                Description: "ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
                Social: {
                    Instagram: "#",
                    LinkedIn: "#",
                    Telegram: "#"
                }
            }, {
                Name: "اسم فامیل",
                LatinName: "guest2",
                Description: "ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
                Social: {
                    Instagram: "#",
                    LinkedIn: "#",
                    Telegram: "#"
                }
            }
        ]
    },
    holders: {
        Title: "برگزارکنندگان",
        Items: [
            {
                Name: "معصومه غلامی",
                LatinName: "Masoome Gholami",
                Description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
                Social: {
                    LinkedIn: "https://ir.linkedin.com/in/masoumeh-gholami-07ab8574/"
                }
            },
            {
                Name: "حسام الدین کاوه",
                LatinName: "Hesam Kaveh",
                Description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
                Social: {
                    LinkedIn: "https://ir.linkedin.com/in/hesamkaveh"
                }
            },
            {
                Name: "وحید طاهری",
                LatinName: "Vahid Taheri",
                Description: 
                ["برنامه نویس سمت کاربر",<br/>,
                "شرایط کاری و نرم افزارهایی که باهاش کار میکنه بهش اجازه نمیدن تماما لینوکسی باشه اما لینوکس رو خیلی دوست داره.",<br/>,
                "توزیع محبوبش Arch و میز کارش Gnome!"],
                Social: {
                    LinkedIn: "https://ir.linkedin.com/in/98vahidtaheri/"
                }
            },
            {
                Name: "بهراد باقری",
                LatinName: "Behrad Bagheri",
                Description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
                Social: {
                    LinkedIn: "https://ir.linkedin.com/in/behrad-bagehri-ab880b10b/"
                }
            },
        ]
    },
    sponcers: {
        Title: "اسپانسرها",
        Items: [
            {
                Name: "دانشگاه تهران",
                LatinName: "Tehran University"
            },
            {
                Name: "دانشگاه شریف",
                LatinName: "Sharif University"
            }, {
                Name: "دانشگاه تهران",
                LatinName: "Tehran University"
            },
            {
                Name: "دانشگاه شریف",
                LatinName: "Sharif University"
            }, {
                Name: "دانشگاه تهران",
                LatinName: "Tehran University"
            },
            {
                Name: "دانشگاه شریف",
                LatinName: "Sharif University"
            }
        ]
    }
};

const IndexPage = () => (
    <div className="page">
        <Header data={data.SiteInfo} />
        <Cover data={data.SiteInfo} />
        <ColoredBlock data={data.alert} />
        <Timeline data={data.timeline} />
        <Guests data={data.guests} />
        <Holders data={data.holders} />
        <HoldingPlace /*data={holdingPlace}*/ />
        <Sponsers data={data.sponcers} />
    </div>
);

export default IndexPage
