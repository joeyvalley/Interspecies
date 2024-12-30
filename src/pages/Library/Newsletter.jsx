import { useState, useEffect } from "react";

export default function Newsletter({ setSelectedItem, setSelectedSubMenu, setSelectedSubItem, menuData }) {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setSelectedItem("Library");
    const menuItem = menuData.find(menu => menu.item === "Library");
    setSelectedSubMenu(menuItem.subMenu);
    setSelectedSubItem("Newsletter");
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={`page-full ${isVisible ? "fade-in" : ""}`}>
      <div className="left-column">
        <h1>April 2005</h1>
        <h2>1</h2>
        <p>To start things off on an interspecies note, the chart above was sent us by a musician after listening to a recorded interaction between an orca and a guitarist on our CD, Orcas Greatest Hits. To hear the recording, clickthe music.</p>
        <h2>2<span className="subtitle">Reported by Dan Morast</span></h2>
        <p>Australia's Federal Environment Minister Ian Campbell says he has intelligence from the whaling community that Japan is planning to hunt humpback and fin whales for"scientific" research. Japan last year increased its kill of minke whales to more than 450. Senator Campbell now believes Japan is softening the ground to go ahead and expand its whale kill under the legal loophole which allows the taking of whales for scientific research.</p>

        <p>"Their institute for research on whales and dolphins has come out and said that, based on their own assessment, the improvement - and I'm paraphrasing them here - that the improvement in the minke stocks that have been witnessed in recent years have now started to diminish,"Senator Campbell said.</p>

        <p>"Now, one would have to say that that is an admission from the top cetacean scientists in Japan, that minke stocks are now under threat, and they have said in the same document that they've witnessed an increase, which we have witnessed as well, we didn't need to go killing whales to witness this increase, but they have witnessed an increase in humpback whales and fin whales. This is what naturally occurs if you stop killing them, and therefore they are - I believe - softening the ground to go out and take humpback and fin whales."</p>

        <p>Australia failed for a fifth time last year at the International Whaling Commission (IWC) to secure a southern whale sanctuary. Senator Campbell says he is considering how best to get the sanctuary in place. "It's an issue that's very important to Australia and New Zealand. I've discussed it with the US in recent days," he said. "I'm going to progress that proposal in a way that's got the very best chance of success."</p>

        <p>This depressing .pdf file explicitly graphs the worldwide killing of whales after the so-called whaling moratorium was passed by the International Whaliong Commission. Click on it, to download the file to read.</p>
        <h2>3<span className="subtitle">Reported by musician and activist Kali Fasteau</span></h2>
        <p>Whales sing at a low frequency, at the very bottom of the range of human hearing. To hear the whales, "you have to broaden your listening range,"said Christopher Clark of Cornell University, adding that "their voices are beautifully adapted for long-range transmission. By singing at low frequencies, whales are able to communicate across oceans - it's how they keep track of their pod and alert friends of a good place to eat.</p>

        <p>But Clark and other scientists are concerned that the growing "acoustic smog" in the world's oceans, and particularly the waters near popular migration and feeding routes, is interfering with whales' ability to communicate with songs. "A blue whale, which lives 100 years, that was born in 1940, today has had his acoustic bubble shrunken from 1,000 miles to 100 miles because of noise pollution," said Clark. "The noise pollution is estimated to be at the industrial noise level where OSHA would require us to wear headphones." Noise pollution is doubling every decade in an urbanized marine environment, Clark claims, mostly due to shipping traffic. "If females can no longer hear the singing males through the smog, they lose breeding opportunities and choices," he said. Clark suggested that the shipping industry overhaul their ships and begin using quieter propellers. A more economically feasible fix might be to reroute shipping traffic so that it no longer passed through popular whale habitats, he said. Spaced out Very little is known about whale
          communication.</p>

        <p>"Suddenly you realize that their behavior is defined not by my scale, or any other whale researcher's scale, but by a whale's sense of scale - ocean basin-sized." Whale sonar is also important for navigation. "Whales will aim directly at a seamount that is 300 miles away, then once they reach it, change course and head to a new feature," Clark said. "It is as if they are slaloming from one geographic feature to the next. They must have acoustic memories analogous to our visual memories." Populations declining drastically In separate research presented this weekend, DNA analysis of whales shows their populations grew steadily through history, with drastic declines recently. "Whales have shown remarkable resilience to cataclysmic events - until the last one - which is us," said Steve Palumbi of Stanford University's Hopkins Marine Station.</p>

        <h2>4<span className="subtitle">New this month on the Interspecies Website</span></h2>
        <p>Interspecies.com has just undergone a major overhaul. As you can see here, the design has taken a decidedly underwater tone.</p>
        <p>Foremost among the new additions this month, is site-wide access to the PayPal Internet credit card system. You can purchase our books, CDs, and DVDs, or make a donation, using a major credit card from any of 25 countries. We have added a twist to the usual giving process; giving you something significant in return. From our homepage, click either art gallery. In return for a donation of varying amounts, you can choose a print of one of 30 animal portraits or one of 12 wavelets, as large as 36 by 50 inches. These limited edition prints are signed, numbered, and printed on museum-quality paper with archival inks</p>
        <p>Also take a look and listen at a new page devoted to our Belly of the Whale Project. You can hear music made almost entirely from underwater animal sounds of whales, dolphins, seals, walrus, fish, lobsters, shrimp, sea horses; created by 20 composers from several countries. This project is a collaboration between Interspecies.com and Greenmuseum.org, perhaps the two leading natureart organizations on the Internet.</p>
      </div>
      <div className="right-column">
        <h1>Interspecies Newsletter</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, mollitia ut eaque quasi possimus alias similique atque deserunt quam quos illo commodi totam sint hic, corrupti distinctio. Laboriosam, ipsam doloremque.</p>
        <h2>2005</h2>
        <ul>
          <li>April</li>
          <li>May</li>
          <li>June</li>
          <li>July</li>
          <li>August</li>
          <li>September</li>
          <li>October</li>
          <li>November</li>
          <li>December</li>
        </ul>
        <h2>2006</h2>
        <ul>
          <li>January</li>
          <li>February</li>
          <li>March</li>
          <li>April</li>
          <li>May</li>
          <li>June</li>
          <li>July</li>
          <li>September</li>
          <li>October</li>
          <li>November</li>
          <li>December</li>
        </ul>
        <h2>2007</h2>
        <ul>
          <li>October</li>
          <li>December</li>
        </ul>
        <h2>2008</h2>
        <ul>
          <li>January</li>
          <li>April</li>
          <li>June</li>
          <li>October</li>
          <li>December</li>
        </ul>
        <h2>2009</h2>
        <ul>
          <li>February</li>
          <li>April</li>
          <li>June</li>
        </ul>
      </div>
    </div>
  );
}