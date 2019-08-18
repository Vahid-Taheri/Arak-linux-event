import React from 'react';
import Header from './Components/Header';
import Cover from './Components/Cover';
import ColoredBlock from './Components/ColoredBlock';
import Timeline from './Components/Timeline';
import Guests from './Components/Guests';
import Holders from './Components/Holders';
import HoldingPlace from './Components/HoldingPlace';
import Spancers from './Components/Sponcers';
let data = {
  SiteInfo: {
    Title: "همایش نرم افزارهای متن باز و جشن رونمایی از اوبونتو 19.10",
    Desc: "همایش نرم افزارهای متن باز و جشن رونمایی از اوبونتو 19.10",
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
        Name: "اسم فامیل",
        LatinName: "guest1",
        Description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        Social: {
          Instagram: "#",
          LinkedIn: "#",
          Telegram: "#"
        }
      }, {
        Name: "اسم فامیل",
        LatinName: "guest2",
        Description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        Social: {
          Instagram: "#",
          LinkedIn: "#",
          Telegram: "#"
        }
      },
      {
        Name: "اسم فامیل",
        LatinName: "guest1",
        Description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        Social: {
          Instagram: "#",
          LinkedIn: "#",
          Telegram: "#"
        }
      }, {
        Name: "اسم فامیل",
        LatinName: "guest2",
        Description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        Social: {
          Instagram: "#",
          LinkedIn: "#",
          Telegram: "#"
        }
      }, {
        Name: "اسم فامیل",
        LatinName: "guest1",
        Description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        Social: {
          Instagram: "#",
          LinkedIn: "#",
          Telegram: "#"
        }
      }, {
        Name: "اسم فامیل",
        LatinName: "guest2",
        Description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        Social: {
          Instagram: "#",
          LinkedIn: "#",
          Telegram: "#"
        }
      }
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
}
function App() {
  return (
    <div className="page">
      <Header data={data.SiteInfo} />
      <Cover data={data.SiteInfo} />
      <ColoredBlock data={data.alert} />
      <Timeline data={data.timeline} />
      <Guests data={data.guests} />
      <Holders data={data.holders} />
      <HoldingPlace /*data={holdingPlace}*/ />
      <Spancers data={data.sponcers} />
    </div>
  );
}

export default App;
