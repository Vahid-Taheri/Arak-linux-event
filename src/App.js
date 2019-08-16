import React from 'react';
import Header from './Components/Header';
import Cover from './Components/Cover';
import ColoredBlock from './Components/ColoredBlock';
import Timeline from './Components/Timeline';
import Guests from './Components/Guests';
import Holders from './Components/Holders';
import HoldingPlace from './Components/HoldingPlace';
import Spancers from './Components/Sponcers'
let timeline = {
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
}
let guests = {
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
}
let holders = {
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
}
let sponcers = {
  Title: "اسپانسرها",
  Items: [
    {
      Name: "دانشگاه تهران",
      LatinName: "Tehran University"
    },
    {
      Name: "دانشگاه شریف",
      LatinName: "Sharif University"
    },{
      Name: "دانشگاه تهران",
      LatinName: "Tehran University"
    },
    {
      Name: "دانشگاه شریف",
      LatinName: "Sharif University"
    },{
      Name: "دانشگاه تهران",
      LatinName: "Tehran University"
    },
    {
      Name: "دانشگاه شریف",
      LatinName: "Sharif University"
    }
  ]
}
function App() {
  return (
    <div className="page">
      <Header />
      <Cover />
      <ColoredBlock color="#40BE65" />
      <Timeline data={timeline} />
      <Guests data={guests} />
      <Holders data={holders} />
      <HoldingPlace /*data={holdingPlace}*/ />
      <Spancers data={sponcers} />
    </div>
  );
}

export default App;
