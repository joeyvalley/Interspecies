import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";


export default function Library({ setSelectedItem, setSelectedSubMenu, menuData }) {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setSelectedItem("Library");
    const menuItem = menuData.find(menu => menu.item === "Library");
    setSelectedSubMenu(menuItem.subMenu);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className={`page-full ${isVisible ? "fade-in" : ""}`}>
      <div className="left-column">
        <h1>So what's here?</h1>

        <p>Discover how a <Link to="">slight shift in perception</Link> can transform a mountain stream into a musical instrument.</p>

        <p>Learn how <Link to="">artists are playing</Link> with the most powerful forces in nature including desertification, animal migration, and the aurora...</p>

        <p>Read how the language of <Link to="">language of activism</Link> sometimes hinders the change that activists seek.</p>

        <p><Link to="">The Logic of Whale Language</Link> Interspecies is deeply involved in the process of how to test cetacean calls for language potential. We conduct this research only with wild animals, and always from the artist's perspective.So we offer a radical departure from the controlling techniques developed by cognitive scientists whose work focuses exclusively on captive animals.</p>

        <p><Link to="">Playing Music with Orca</Link> Two part excerpt from <Link to="https://www.goodreads.com/book/show/1125631.The_Charged_Border">The Charged Border</Link> by Jim Nollman (Henry Holt & Co, 1999). A clear statement about what it means, and especially what it feels like, to play live music with wild orcas in the middle of the night from a boat, and through an underwater sound system. This is, perhaps, the best explanation you'll find anywhere, of interspecies communication.</p>

        <p><Link to="">Art for the Earth</Link> Compiled from various newsletters. Interspecies own aesthetic calls attention to environmental issues in an elegant yet rather shocking manner. We encourage artists to consider creating new works that include natural processes in their manifestation. We sponsor as many "earth artists" as we can. Here's just three conceptual art projects you need to hear about.</p>

        <p><Link to="">Bear Ethics and Fly Aesthetics</Link> From the Winter 2001 Newsletter, also published in <Link to="https://www.goodreads.com/book/show/355966.The_Beluga_Caf_">The Beluga Cafe</Link> (Sierra Press, 2002). Do certain animals demonstrate a sense of ethics and or aesthetics? Maybe they do but we can no longer recognize it having educated ourselves to perceive them void of sentience. Here's a book excerpt about an expedition to the Canadian Arctic in which the author recognizes the bear as an ethical being, and a moose as an educator.</p>

        <p><Link to="">The Cetacean Nation</Link> Originally published in the Winter 1998 newsletter, this article has been reprinted in many places. The concept of a "cetacean nation" was the most visionary notion floated at a recent whale conference I attended at Hervey Bay, Australia.</p>

        <p><Link to="">When Nature Speaks</Link> A 1997 interview with Jim Nollman by Derrick Jensen published in <Link to="https://www.thesunmagazine.org/articles/27097-when-nature-speaks">The Sun magazine</Link> and republished in the Fall 1998 Newsletter. Nollman is the founder of interspecies.com and was the organization's main philosophical force. Read this interview to learn how to play music with whales and why you might like to do it yourself.</p>

        <p><Link to="">Watching Dolphins Die</Link> The Japanese dolphin drive fisheries have been in existence for 50 years, systematically annihilating all small cetaceans from the country's coastal waters. The first Westerner to make an effort to stop it was Dexter Cate. If you want to understand more about the Japanese fishermen who do this horrific deed, you might start here.</p>

        <p><Link to="">Whales and Wavelets</Link> In our unique work of bridging art, environment, and science, Interspecies has long been a major supporter and proponent of acoustic research to develop new methods for examining whale sounds for their communication potential. This work with wavelets, specifically by Mark Fischer, has recently been contracted out to the US Navy, in a program to protect whales during sonar testing.</p>

        <p><Link to="">Interspecies Music</Link> By guest author David Rothenberg. Discusses how various well known composers have integrated animal sounds directly into their music, and more recent performers have actually played live, with animals seeking a genuine "interspecies music."</p>

        <p><Link to="">The Beluga Spiral</Link> Compiled from several newsletters 1998-2000, Later appeared in Blue Wings, The magazine of Finnair. Riding shotgun in an old Volvo station wagon, heading through uninterrupted forest of birch, spruce, and alder. Noticing a road sign warning us to be on the lookout for moose crossing the highway, I compare the sway of these Finnish hills to northern Maine, only to be interrupted by Rauno...</p>

        <p><Link to="">Beluga Mythology</Link> From the Interspecies Newsletter, 2006. Among other things, read about the monk, Adam of Bremen, who described Laplanders, in the year 1074 AD, communicating with whales via overtone singing. And learn of efforts to protect this same population of whales today.</p>

        <p><Link to="">Yellow Jacket Saints</Link> Spring 1988 newsletter. Later appeared in Jim Nollman's book, Spiritual Ecology (Bantam, out-of-print). ...It's been a dry summer here, a dry year, a dry two years; the kind of weather that persuades the wasps to arrive, build their hives, and multiply. I am cutting a joint into a flat board with a spatula-shaped Japanese saw. The yellow jackets are attracted to the sweet smell of fir sawdust.</p>

        <p><Link to="">For the Seventh Generation</Link> Spring 1990 newsletter. Later appeared in E Magazine. Excerpted many places. Over the past ten years, the Iroquois concept of the seventh generation has transformed into an important symbol of the deep ecology movement.</p>

        <p><Link to="">Makah Whaling</Link> Winter 1999 Newsletter, This is a report that accompanied a powerpoint presentation Jim Nollman did for the Makah Tribal Council in Neah Bay, WA, at the height of the Makah controversy to initiate a new hunt for gray whales. The same report was later presented to a group of activists and US Marine Mammal officials during a meeting of the International Whaling Commission.</p>

        <p><Link to="">Interspecies Protocol</Link> Summer 1991 Newsletter. Appeared in Nollman's book: The Man Who Talks to Whales (Sentient Press) ...There is a story told about the Bushmen. Their oral history recounted existing around a waterhole shared with lions, hyenas, leopards, elephants and Cape buffalo.</p>

        <p><Link to="">Jim Nollman Profile (Seattle PI Daily)</Link> Summer 2000 Newsletter, A story from the Seattle PI daily, about Jim Nollman's speckled career of making music with whales. To quote: "The two-legged mammal lays down a 12-bar blues riff on electric guitar. The mammal with the dorsal fin weighs in with a whistling improvisation. The two-legged mammal changes key. The finned mammal follows, executing a plaintive high-pitched slide with deft timing."</p>

        <p><Link to="">Why Wash Birds?</Link> Winter 1992 newsletter. Later in Orion magazine for a theme issue: Animals of the Heart. A friend of mine washes birds. Whenever an oil spill occurs in the Pacific Northwest, she quickly fixes an overnight pack and drives out to the coast to volunteer her services to clean the oil-soaked wildlife. Oil spills occur with increasing frequency these days, and her descriptions of these self-funded excursions sometimes sound as if she were an angel making an eco-circuit of Hell.</p>

        <p><Link to="">Cougar Justice</Link> Fall 1992 Newsletter; subsequently published by New Age Journal (August 1993)...I had been ill, stole away from camp to spend most of the afternoon sleeping in the boat. Refreshed, I was rowing back to shore in the dinghy when I heard the first scream.</p>

        <p><Link to="">The Sentient Garden</Link> From the Spring 1994 newsletter and later published in <Link to="">Why We Garden</Link> (Henry Holt & Co., 1994) as well as in The Sun (September 1994).</p>

        <p><Link to="">Sex, Dolphins, and Rock & Roll</Link> A report from a Canary island Pilot Whale project, 1994; Appeared in New Age Journal (June 1994) ...As a researcher who has spent the last twenty years communicating with animals through music, I've gotten used to fielding all sorts of queries from people who want to know exactly what it is I do.</p>

        <p><Link to="">Who Communicates?</Link> A cover story in Utne Reader (April 1998), also a chapter in <Link to="https://www.goodreads.com/book/show/1125631.The_Charged_Border">The Charged Border</Link> (Henry Holt & Co, 1999) by Jim Nollman. For hundreds of years now, somewhere in the world, some mother has revealed to her child tucked in bed, the words Little Red Riding Hood exclaimed to the wolf in disguise: "Grandma what big ears you have!" By such mythical tales we teach our children that humans communicate with the animals.</p>

        <p><Link to="">Not Touching Ferns</Link> Fall 1995 Newsletter. A report to help promote whalewatching as a viable economic alternative to coastal whaling. ...Having traveled to Japan many times over the past twenty years to promote living whales, the question everyone in the States always wants me to answer is whether or not the Japanese are showing any signs yet of getting out of whaling. The quick answer is "sort of". A better answer is offered in the following essay. It may surprise you.</p>

        <p><Link to="">What The Raven Said</Link> Winter 1996 newsletter; Later in Nollman's book T<Link to="https://www.goodreads.com/book/show/355966.The_Beluga_Caf_">The Beluga Cafe</Link>. A raven glides in low off the plain, lands ten feet in front, walks right up to me. I sit up tall and stare. The bird pulls its head back but moves not an inch. I decide for no good reason that it's a male. He stands so close I might reach out and touch him, but i decide against it. He cocks his long beaked face this way and that as if trying to figure out the best way a bird whose eyes are arranged on each side of his head might stare directly into the eyes of a primate whose eyes are set on a flat plane.</p>

        <p><Link to="">What's Wrong with Nature Films?</Link> Fall 1998 newsletter. This essay has been excerpted at least twelve times in journals around the world. ...With the environmental agenda so packed with issues of crisis management, who has time to give much attention to a subject as abstruse as the aesthetics of the nature film? But it's important, because, after all, the nature film could be the most vibrant tool at our disposal for educating the general public, ideally reaching them before all those tough environmental issues ever reach the crisis stage.</p>

        <p><Link to="">On Their Own Behalf</Link> An excerpt from Jim Nollman's book, <Link to="https://www.goodreads.com/book/show/1125631.The_Charged_Border">The Charged Border</Link> (Henry Holt & Co, 1999). No matter how luminous the whales and dolphins may appear to us today, it is the dark festering topic of whaling that dominates our historical relationship with cetaceans. Until a mere thirty years ago, human beings were involved in a mass slaughter of whales that left several species at the brink of extinction, a precipice from which several of them have never fully recovered.</p>

        <p><Link to="">ZeroCircles</Link> Fall 1998 newsletter. authored by Daniel Dancer, describing his Interspecies-sponsored Earth Art project manifested in 50 U.S. National Forests. For more info go either to our art projects page, ...Art has always nudged society in one direction or another, sometimes functioning as a catalyst for radical change, other times merely supporting the status quo. Human drives run very deep, and to change them we must create new stories and do meaningful art about our relationship to the land.</p>
      </div>
      <div className="right-column">
        <h1>Interspecies Library</h1>
        <p>This section is a collection of writings, audio recordings, and videos from the Interspecies archives as well as related content from Interspecies <Link to="/contributors">contributors</Link>.</p>
        <p>The majority of the writing is drawn from essays published in the Interspecies <Link to="/newsletter">newsletter</Link> as well as excerpts from the books of Interspecies founder, Jim Nollman.</p>
        <p>Many of these essays were subsequently published in the United States, Europe, and Japan by a range of newspapers and magazines including <span className="paragraph-italics">Orion</span>, <span className="paragraph-italics">Utne Reader</span>, <span className="paragraph-italics">The Sun</span>, <span className="paragraph-italics">Resurgence</span>, <span className="paragraph-italics">OMNI</span>, <span className="paragraph-italics">NewAge</span>, <span className="paragraph-italics">E!</span>, <span className="paragraph-italics">Outside</span>, <span className="paragraph-italics">BePal</span>, <span className="paragraph-italics">Switch</span>, <span className="paragraph-italics">Spuren</span>, and <span className="paragraph-italics">Actuel</span>. They have also appeared in dozens of book-length anthologies and academic texts.</p>
        <p>RECORDINGS PARAGRAPH ASK JIM</p>
        <p>VIDEO PARAGRAPH ASK JIM</p>
      </div>
    </div>
  );
}