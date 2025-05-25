import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: {
			search: "Search by Websites",
			explore: "Explore",
			tale: "My Fairy Tale",
			all: "All",
			genreLabel: "Genre",
			genre: {
				avontuur: "Adventure",
				fantasie: "Fantasy",
				horror: "Horror",
				magie: "Magic",
				mythologie: "Mythology",
				dierenverhaal: "Animal Story",
				romantiek: "Romance",
			},

			makingOf: {
				back: "Back to Home",
				projectNotFound: "Project not found",
				posted: "Posted – May 6, 2025",
				description: "Description",
				seeMore: "See what the FairyTale looks like",
				visitSite: "Visit Site",
				process: "Process Image",
			},

			descriptions: {
				"eren-sahbaz-keloglan":
					"Keloğlan, which means 'bald boy', is a central figure in many Turkish folk tales. In one of these stories, Keloglan, a poor but courageous young man, decides to marry a giantess. He leaves his mother and sets off on an adventure, ultimately defeating the giantess with the help of a hedgehog and returning home as a hero.",
				"jordi-de-leeuw-alice-in-wonderland":
					"Alice sees a white rabbit run past and, out of curiosity, decides to follow him across the meadow. Without realizing it, she falls into a deep hole, beginning her journey into a world full of confusion and wonder. In a strange room full of doors, she discovers magical food and drinks that make her grow and shrink. Later, she ends up at a chaotic tea party with the Mad Hatter, where logic seems not to exist. But the cheerful madness soon turns dark, as the threat of the Evil Queen enters her world. Luckily, it was all just a dream!",
				"pema-bhutia-coraline":
					"Coraline moves to a new apartment with her busy parents but feels neglected and bored. As she explores her surroundings, she discovers a mysterious door that leads to an alternate version of her home. In this Other World, everything seems more lively, and she meets her Other Mother, who has button eyes and offers her a seemingly perfect life. However, Coraline soon realizes the Other Mother has sinister intentions and wants to keep her trapped forever. Determined to escape, Coraline searches for a way back to her real world.",
				"sophia-rahmoun-roodkapje":
					"Little Red Riding Hood is a fairy tale about a young girl who wears a red cloak and, on her way to her waiting grandmother, encounters a wolf. Depending on the version, the girl is eaten by the wolf or rescued by a woodsman or hunter.",
				"wout-van-impe-blauwbaard":
					"Bluebeard is a dark fairy tale full of mystery and forbidden secrets. It’s about a wealthy but eccentric nobleman with a blue beard who has been married multiple times, but no one knows what happened to his previous wives. When he marries again, he gives his young bride the keys to his castle, with one strict rule: she must never enter one specific room. The temptation proves too great, and behind that forbidden door she discovers a horrifying secret—the fate of her predecessors. When Bluebeard finds out what she has done, she risks becoming his next victim. But can she escape in time?",
				"sam-hoeterickx-de-wolf-en-de-3-biggetjes":
					"The Wolf and the Three Little Pigs is a classic fairy tale about three little pigs, each building their own house to protect themselves from a dangerous wolf. The first pig builds a house of straw, the second of wood, and the third of sturdy bricks. When the big bad wolf arrives, he tries to eat the pigs. He blows down the straw and wooden houses easily, forcing the first two pigs to flee to their brother’s brick house. But no matter how hard the wolf tries, the brick house stands strong. In the end, the wolf gives up or is cunningly defeated (depending on the version). The story ends with cleverness, preparation, and hard work triumphing over laziness and carelessness.",
				"rayan-arssi-de-kleine-zeemeermin":
					"A young mermaid princess longs for a life beyond the sea. She makes a dangerous Faustian pact with a sea witch, trading her voice for a chance to become human and win the love of a prince she secretly admires from afar.",
				"manal-boulahya-the-tale-of-the-princes-kaguya":
					"The Tale of Princess Kaguya tells the story of a little girl discovered by an old bamboo cutter inside a glowing bamboo stalk. Raised with love, she grows into a beautiful young woman. Believing she is a divine princess, her adoptive father takes her to the capital for a noble life.\nDespite wealth and high-ranking suitors, Kaguya longs for her simple childhood in the countryside. As her mysterious origins are revealed, she must confront her true identity and sorrow to return to where she truly belongs.",
				"younes-ben-ali-aladin-en-de-wonderlamp":
					"Step into the bustling streets of Agrabah, where Aladdin's adventure comes to life in layers of magic and mystery. See the magic lamp glimmer in the distance as golden sand whirls around you, while genies and magic carpets soar through the air. As you scroll, the Cave of Wonders roars open and jewels sparkle with hidden secrets in a world of front-end enchantment. With parallax scrolling and animated wonder, this story is not just told—it is lived.",
				"arno-baeck-hans-en-grietje":
					"Step into the enchanted forest and discover the creative process behind my reinterpretation of the classic fairy tale Hansel and Gretel. In this project, I brought the story to life with a personal twist—by adding a magical atmosphere and subtle surprises that make the experience new, yet nostalgic.\nLayered parallax effects bring the scenes to life as you move, creating a sense of depth and immersion. Carefully chosen sound effects accompany the journey and enhance every moment—from rustling leaves to the eerie silence of the candy-covered woods.\nThis page offers a behind-the-scenes look at how I transformed a timeless story into an interactive visual narrative, combining storytelling, animation, and sound into one seamless experience.",
				"rey-mammadbeyli-hercules":
					"Hercules tells the story of a young god, Hercules, who is kidnapped from Mount Olympus by Hades, god of the underworld, and made mortal. Although he grows up on Earth, Hercules retains his divine strength. As a teenager, he discovers his true origins and sets out to become a true hero to reclaim his place among the gods. Trained by the satyr Philoctetes ('Phil') and accompanied by his flying horse Pegasus, Hercules faces many challenges and monsters sent by Hades, who seeks to overthrow Zeus. Along the way, Hercules falls in love with Megara, a cynical but kind-hearted woman who secretly works for Hades. Ultimately, Hercules proves that true heroism comes from self-sacrifice—not strength—when he risks his life to save Meg. His courage earns him a place on Olympus, but he chooses to stay on Earth with Meg, now that he has found where he truly belongs.",
				"ramon-de-raes-de-wolf-en-de-3-biggetjes":
					"Once upon a time, three little pigs decided to build their own houses. Each chose a different material: straw, wood, and stone. They wanted a safe place to live, far from the dangerous big bad wolf wandering the forest. What they didn’t know was that their choices would soon be put to the test…",
				"laura-ocampo-peter-pan":
					"Join a magical journey through Peter Pan’s enchanting world in this immersive parallax experience. From the Darling nursery to the mysterious Neverland, every scroll brings a new adventure. Meet the energetic Lost Boys, face the threatening pirates of Captain Hook aboard the Jolly Roger, and follow Tinkerbell’s cursor and magical wand through forests and crystal-clear lagoons. Don’t forget to turn on your sound for full enchantment—the Lost Boys and Peter Pan are waiting for you!",
				"matteo-giambarresi-de-raaf-en-de-vos":
					"The Fox and the Crow is an animal fable written by Jean de La Fontaine. In this story, the author lets animals talk and act like humans. A vain crow sits on a branch with a piece of cheese in its beak. A sly fox wants the cheese and flatters the crow by saying how beautiful it is and how wonderfully it must sing. The crow falls for the flattery, opens its beak to sing, and drops the cheese—exactly what the fox wanted.\nThe fable ends with a clear moral: Beware of flatterers.",
				"nordine-el-ouafrasi-belle-en-het-beest": "",
				"joel-lopez-mendez-raponsje": "",
				"nina-breedstraet-de-waternimf-in-de-vijver":
					"The Water Nymph in the Pond is a beautiful fairy tale by the Brothers Grimm. It begins with a poor miller who, one day, sees a magical nymph sparkling beneath the surface of his pond. In exchange for great happiness, she promises him wealth—if he gives her the firstborn of his family. Years later, when his son, now a hunter, tries to wash his hands in the pond, the nymph pulls him into the dark depths. Desperate, his wife does everything to save her husband: she undergoes three impossible trials, where a golden comb, an enchanting flute, and a complicated spinning wheel are the keys. But how does she manage to outsmart the nymph? And what awaits them after their long ordeals? Discover the thrilling end of this story on my website…",
				"luca-lattuca-de-tovenaar-van-oz":
					"The Wizard of Oz tells the story of Dorothy Gale, a young girl who lives on a farm in Kansas and is swept away by a tornado to the magical land of Oz. In Oz, she and her dog Toto meet various characters, including the Scarecrow, the Tin Woodman, and the Cowardly Lion, each with a wish for the Wizard of Oz. Dorothy and her friends must travel the Yellow Brick Road to the Emerald City to meet the Wizard. Along the way, they face challenges and dangers, including the Wicked Witch of the West, who is determined to get Dorothy’s ruby slippers.",
				"fleur-van-de-ville-rapunzel":
					"Rapunzel is a princess with magical golden hair that can heal. As a baby, she is kidnapped by Mother Gothel, who locks her in a tower to stay young. On her eighteenth birthday, Rapunzel wants to see the mysterious lights that appear in the sky each year. When the thief Flynn Rider enters her tower, she seizes the chance to explore the outside world. During their adventure, she learns the truth about her past and finds her real family.",
				"beatrice-bjoko-de-vuurvogel":
					"The Firebird is an enchanting fairy tale about a magical, fiery bird with glowing feathers that shine in the dark. In the story, a young hero searches for this mythical creature, which often symbolizes hope, renewal, or healing. Along the way, he faces difficult choices, braves danger, and learns important lessons about courage, love, and sacrifice. The story has its roots in Russian folklore and is known for its mysterious, poetic tone and rich, wondrous imagery.",
				"siriyakorn-klaklang-duimelijntje":
					"Thumbelina, a tiny girl born from a flower, is kidnapped by a toad who wants to marry her to his ugly son. With the help of fish and a butterfly, she escapes. Then she is taken by a beetle but cast out because she has no antennae.\nShe survives the summer in the forest, but when winter comes, a field mouse finds her and gives her shelter. The mouse wants her to marry a blind, gloomy mole. In the underground tunnels, Thumbelina secretly cares for a sick swallow, who later flies south.\nAmong the flowers, she meets the Flower King, whom she marries and lives happily with. The swallow returns and takes her to a sunny land. There, when Thumbelina is forced to marry the mole, the swallow comes back and takes her to a sunny land.",
				"ernest-marot-na": "",
				"maxim-westerbeek-duimelijntje":
					"Once upon a time, there was a little girl, no bigger than a thumb, born from a flower. Her life started wonderfully, but soon she was snatched away by an ugly toad who wanted her to marry his son. So began a long journey full of danger and sorrow for Thumbelina. She was kidnapped by a beetle, lived lonely in the woods, and had to take shelter from the cold with a field mouse, who wanted her to marry a rich but boring mole. Still, her heart longed for light, freedom, and love. Thanks to a swallow she lovingly cared for in winter, it took her away before the wedding. She finally found happiness in a warm land, where she married a prince of her own size and was named the Flower Queen. And there she lived happily, in sun and flowers, forever.",
				"seppe-ghekiere-de-witte-slang":
					"The White Snake, who has a deep love for the king, lives with him in peace, without him knowing her true nature. However, her secret is discovered by a Buddhist monk, usually Fa Hai, who sees the woman as a threat due to her nature as a spirit. Fa Hai tries to disrupt their relationship by revealing the truth about her identity.",
				"staf-dierickx-aladin-en-de-wonderlamp":
					"A young adventurer is sent by a mysterious sorcerer to find a magic lamp in a hidden cave full of treasures. After discovering the lamp and summoning a genie, his journey truly begins.",
				"igor-lopes-oliveira-jaap-en-de-bonenstaak":
					"Jack lives with his mother and their only cow. One day, he trades the cow for magic beans. His mother is furious and throws the beans out the window. At night, a giant beanstalk grows into the clouds. Jack climbs up and discovers a castle in the sky, where a giant lives with a hen that lays golden eggs and a magical harp. Jack steals the treasures, flees back down, and chops down the beanstalk, causing the giant to fall. From then on, Jack and his mother live in wealth and happiness.",
			},
		},
	},

	nl: {
		translation: {
			search: "Zoek Websites",
			explore: "Ontdek",
			tale: "Mijn Sprookje",
			all: "Alles",
			genreLabel: "Genre",
			genre: {
				avontuur: "Avontuur",
				fantasie: "Fantasie",
				horror: "Horror",
				magie: "Magie",
				mythologie: "Mythologie",
				dierenverhaal: "Dierenverhaal",
				romantiek: "Romantiek",
			},

			makingOf: {
				back: "Terug naar Home",
				projectNotFound: "Project niet gevonden",
				posted: "Geplaatst – 6 mei 2025",
				description: "Beschrijving",
				seeMore: "Bekijk hoe het sprookje eruitziet",
				visitSite: "Bezoek Site",
				process: "Proces Afbeelding",
			},

			descriptions: {
				"eren-sahbaz-keloglan":
					"Keloğlan, wat 'kale jongen' betekent, is een centrale figuur in vele Turkse volksverhalen. In één van deze verhalen besluit Keloglan, een arme maar moedige jongeman, om de man van een reuzin te worden. Hij verlaat zijn moeder en gaat op avontuur, waarbij hij uiteindelijk de reuzin verslaat met behulp van een egel en als held terugkeert naar huis.",
				"jordi-de-leeuw-alice-in-wonderland":
					"Alice ziet een wit konijn voorbij rennen en besluit hem nieuwsgierig te volgen, recht de weide door. Zonder het te beseffen valt ze in een diepe put, en zo begint haar reis naar een wereld vol verwarring en verwondering. In een vreemde kamer vol deuren ontdekt ze magisch eten en drinken dat haar doet groeien en krimpen. Verderop belandt ze aan een chaotisch theefeest bij de Gekke Hoedenmaker, waar logica niet lijkt te bestaan. Maar de vrolijke waanzin slaat snel om, wanneer de dreiging van de Boze Koningin haar wereld binnendringt. Gelukkig was het allemaal maar een droom!",
				"pema-bhutia-coraline":
					"Coraline verhuist naar een nieuw appartement met haar drukke ouders maar voelt zich verwaarloosd en verveeld. Terwijl ze haar omgeving verkent, ontdekt ze een mysterieuze deur die naar een alternatieve versie van haar huis leidt. In deze Andere Wereld lijkt alles levendiger en ontmoet ze haar Andere Moeder, die knoopogen heeft en haar een schijnbaar perfect leven biedt. Coraline beseft echter al snel dat de Andere Moeder sinistere bedoelingen heeft en haar voor altijd gevangen wil houden. Coraline is vastbesloten om te ontsnappen een weg terug te vinden naar haar eigen wereld.",
				"sophia-rahmoun-roodkapje":
					"Roodkapje is een sprookje over een jong meisje dat een rode mantel draagt en onderweg naar haar wachtende grootmoeder een wolf tegenkomt. Afhankelijk van de versie van het verhaal wordt het meisje door de wolf opgegeten of gered door een boswachter of jager.",
				"wout-van-impe-blauwbaard":
					"Blauwbaard is een duister sprookje vol mysterie en verboden geheimen. Het gaat over een rijk, maar zonderlinge edelman met een blauwe baard die al meerdere keren getrouwd is geweest, maar niemand weet wat er met zijn vorige vrouwen is gebeurd. Wanneer hij opnieuw trouwt, geeft hij zijn jonge bruid de sleutels van zijn kasteel, met één strikte regel: één kamertje mag ze nooit betreden. De verleiding blijkt te groot, en achter die verboden deur ontdekt ze een huiveringwekkend geheim… het lot van haar voorgangsters. Wanneer Blauwbaard haar daad ontdekt, dreigt ook zij zijn volgende slachtoffer te worden. Maar kan ze hem nog op tijd ontvluchten?",
				"sam-hoeterickx-de-wolf-en-de-3-biggetjes":
					"De Wolf en de Drie Biggetjes” is een klassiek sprookje dat draait om drie kleine biggen die elk een eigen huisje bouwen om zich te beschermen tegen een gevaarlijke wolf. De eerste big bouwt een huis van stro, de tweede een huis van hout, en de derde een stevig huis van bakstenen. Wanneer de grote boze wolf verschijnt, probeert hij de biggen op te eten. Hij blaast het stro- en houten huis omver zonder moeite, waardoor de eerste twee biggen moeten vluchten naar het stenen huis van hun broer. Maar hoe hard de wolf ook blaast, het stenen huis blijft stevig staan. Uiteindelijk geeft de wolf op of wordt hij op slinkse wijze verslagen (afhankelijk van de versie). \nHet verhaal eindigt met de overwinning van slimheid, voorbereiding en hard werken over luiheid en gemakzucht.",
				"rayan-arssi-de-kleine-zeemeermin":
					"Een jonge zeemeerminprinses verlangt naar een leven aan gene zijde van de zee. Ze sluit een gevaarlijk Faustiaans pact met een zeemeermin. Ze ruilt haar stem voor de kans om mens te worden en de liefde te winnen van een prins die ze in het geheim van een afstandje bewondert.",
				"manal-boulahya-the-tale-of-the-princes-kaguya":
					"Het verhaal van Prinses Kaguya vertelt het verhaal van een klein meisje dat door een oude bamboesnijder in een gloeiende bamboestengel wordt ontdekt. Met liefde opgevoed, groeit ze uit tot een prachtige jonge vrouw. In de overtuiging dat ze een goddelijke prinses is, neemt haar adoptievader haar mee naar de hoofdstad om een nobel leven te leiden.\nOndanks rijkdom en hooggeplaatste aanbidders verlangt Kaguya terug naar haar eenvoudige jeugd op het platteland. Naarmate haar mysterieuze afkomst zich ontvouwt, moet ze haar ware identiteit en het verdriet onder ogen zien om terug te keren naar waar ze echt thuishoort.",
				"younes-ben-ali-aladin-en-de-wonderlamp":
					"Stap de bruisende straten van Agrabah binnen, waar Aladdins avontuur tot leven komt in lagen van magie en mysterie. Zie de wonderlamp in de verte glinsteren terwijl goudkleurig zand om je heen wervelt, terwijl geesten en magische tapijten door de lucht zweven. Terwijl je scrollt, brult de Grot der Wonderen open en fonkelen juwelen met verborgen geheimen over de wereld van front-end betovering. Met parallaxrollen en geanimeerde verwondering wordt dit verhaal niet alleen verteld - het wordt geleefd.",
				"arno-baeck-hans-en-grietje":
					"Stap het betoverde bos in en ontdek het creatieve proces achter mijn herinterpretatie van het klassieke sprookje Hans en Grietje. In dit project bracht ik het verhaal tot leven met een persoonlijke twist – door een magische sfeer en subtiele verrassingen toe te voegen die de ervaring nieuw, maar toch nostalgisch maken. \nDoor gebruik te maken van gelaagde parallax-effecten komen de scènes tot leven terwijl je beweegt, wat een gevoel van diepte en immersie creëert. Zorgvuldig gekozen geluidseffecten begeleiden de reis en versterken elk moment - an ritselende bladeren tot de griezelige stilte van het met snoep bedekte bos. \nDeze pagina biedt een kijkje achter de schermen en laat zien hoe ik een tijdloos verhaal heb getransformeerd tot een interactief visueel verhaal, waarbij ik storytelling, animatie en geluid heb gecombineerd tot één naadloze ervaring.",
				"rey-mammadbeyli-hercules":
					"Hercules vertelt het verhaal van een jonge god, Hercules, die door Hades, de god van de onderwereld, van de berg Olympus wordt ontvoerd en sterfelijk wordt. Hoewel hij op aarde opgroeit, behoudt Hercules zijn goddelijke kracht. Als tiener ontdekt hij zijn ware afkomst en zet hij zich in om een ware held te worden om zijn plaats onder de goden terug te winnen. Getraind door de satyr Philoctetes ('Phil') en vergezeld door zijn vliegende paard Pegasus, komt Hercules vele uitdagingen en monsters tegen die gestuurd zijn door Hades, die Zeus ten val wil brengen. Onderweg wordt Hercules verliefd op Megara, een cynische maar goedhartige vrouw die in het geheim voor Hades werkt. Uiteindelijk bewijst Hercules dat ware heldenmoed voortkomt uit zelfopoffering - niet uit kracht - wanneer hij zijn leven riskeert om Meg te redden. Zijn moed levert hem een ​​plek op Olympus op, maar hij kiest ervoor om bij Meg op aarde te blijven, nu hij gevonden heeft waar hij echt thuishoort.",
				"ramon-de-raes-de-wolf-en-de-3-biggetjes":
					"Er waren eens drie biggetjes die op een dag besloten hun eigen huisjes te bouwen. Elk van hen koos een ander materiaal: stro, hout en steen. Ze wilden een veilig plekje om te wonen, ver weg van de gevaarlijke boze wolf die in het bos rondzwierf. Wat ze niet wisten, was dat hun keuzes hen al snel op de proef zouden stellen…",
				"laura-ocampo-peter-pan":
					"Ga mee op een magische reis door Peter Pans betoverende wereld in deze meeslepende parallaxervaring. Van de kinderkamer van Darling tot het mysterieuze eiland Nooitgedachtland, waar bij elke scroll een avontuur wacht. Ontmoet de energieke Lost Boys, trotseer de dreigende piraten van Kapitein Haak aan boord van de Jolly Roger en volg Tinkerbells cursor en magische toverstaf door de bossen en kristalheldere lagunes. Vergeet niet je geluid aan te zetten voor de volledige betovering – de Lost Boys en Peter Pan wachten op je!",
				"matteo-giambarresi-de-raaf-en-de-vos":
					"De Raaf en de Vos is een dierenfabel geschreven door Jean de La Fontaine. In dit verhaal laat de schrijver dieren praten en handelen als mensen. Een ijdele raaf zit op een tak met een stuk kaas in zijn bek. Een sluwe vos wil de kaas en vleit de raaf door te zeggen hoe prachtig hij is en hoe mooi hij vast kan zingen. De raaf laat zich vangen door de vleierij, opent zijn snavel om te zingen, en laat zo de kaas vallen - precies wat de vos wilde.\nDe fabel eindigt met een duidelijke moraal: Wees op je hoede voor vleiers.",
				"nordine-el-ouafrasi-belle-en-het-beest": "",
				"joel-lopez-mendez-raponsje": "",
				"nina-breedstraet-de-waternimf-in-de-vijver":
					"De waternimf in de vijver is een mooi sprookje van de gebroeders Grimm. Het begint bij een arme molenaar die op een dag een magische nimf ziet glinsteren onder het wateroppervlak van zijn vijver. In ruil voor groot geluk belooft zij hem rijkdom… indien hij de eerstgeborene van zijn gezin aan haar afstaat. Jaren later, wanneer zijn zoon, die een jager is geworden, bij de vijver zijn handen wil wassen, grijpt de nimf hem mee de donkere diepte in. Radeloos zet zijn vrouw alles op alles om haar man te redden: ze doorstaat drie onmogelijke beproevingen waarbij een gouden kam, een betoverende fluit en een ingewikkeld spinnewiel de sleutel blijken. Maar hoe slaagt zij erin de nimf te slim af te zijn? En wat wacht hen na hun lange beproevingen? Ontdek het spannende einde van dit verhaal op mijn website…",
				"luca-lattuca-de-tovenaar-van-oz":
					"De tovenaar van Oz vertelt het verhaal van Dorothy Gale, een jong meisje dat op een boerderij in Kansas woont en door een tornado wordt meegesleurd naar het magische land Oz. In Oz komen zij en haar hond Toto verschillende personages tegen, waaronder de Vogelverschrikker, de Blikken Houthakker en de Laffe Leeuw, die elk een wens van de Tovenaar van Oz willen. Dorothy en haar vrienden moeten over de Gele Bakstenen Weg naar de Smaragden Stad reizen om de Tovenaar van Oz te ontmoeten. Onderweg komen ze uitdagingen en gevaren tegen, waaronder de Boze Heks van het Westen, die vastbesloten is om Dorothy's robijnrode muiltjes te bemachtigen.",
				"fleur-van-de-ville-rapunzel":
					"Rapunzel is een prinses met magisch, goud haar dat kan genezen. Als baby wordt ze ontvoerd door Moeder Gothel, die haar in een toren opsluit om jong te blijven. Op haar achttiende verjaardag wil Rapunzel de mysterieuze lichtjes zien die elk jaar in de lucht verschijnen. Wanneer de dief Flynn Rider haar toren binnenkomt, grijpt ze haar kans om de wereld buiten te ontdekken. Tijdens hun avontuur leert ze de waarheid over haar verleden en vindt ze haar echte familie terug.",
				"beatrice-bjoko-de-vuurvogel":
					"De Vuurvogel is een betoverend sprookje over een magische, vurige vogel met gloeiende veren die in het donker schitteren. In het verhaal gaat een jonge held op zoek naar dit mythische wezen, dat vaak symbool staat voor hoop, vernieuwing of genezing. Onderweg komt hij voor moeilijke keuzes te staan, trotseert hij gevaar en leert hij belangrijke lessen over moed, liefde en opoffering. Het verhaal vindt zijn oorsprong in de Russische folklore en staat bekend om zijn mysterieuze, poëtische toon en rijke, wonderlijke beeldtaal.",
				"siriyakorn-klaklang-duimelijntje":
					"Duimelijntje, een piepklein meisje geboren uit een bloem, wordt ontvoerd door een pad die haar wil uithuwelijken aan haar lelijke zoon. Met hulp van vissen en een vlinder ontsnapt ze. Daarna wordt ze meegenomen door een kever, maar verstoten omdat ze geen voelsprieten heeft. \nZe overleeft de zomer in het bos, maar als de winter komt, vindt een veldmuis haar en biedt haar onderdak. De veldmuis wil haar uithuwelijken aan een blinde, sombere mol. In de ondergrondse gangen verzorgt Duimelijntje in het geheim een zieke zwaluw, die later naar het zuiden vliegt. \nTussen de bloemenontmoet ze de bloemenkoning, met wie ze trouwt en gelukkig leeft zwaluw terug en neemt haar mee naar een zonnig land. Daar Als Duimelijntje gedwongen wordt met de mol te trouwen, keert de zwaluw terug en neemt haar mee naar een zonnig land. Daar ",
				"ernest-marot-na": "",
				"maxim-westerbeek-duimelijntje":
					"Er was eens een klein meisje, niet groter dan een duim, dat uit een bloem werd geboren. Haar leven begon wondermooi, maar al gauw werd zij weggerukt door een lelijke pad die haar met zijn zoon wilde huwen. Zo begon voor Duimelijntje een lange reis vol gevaren en verdriet. Ze werd ontvoerd door een kever, leefde eenzaam in het bos, en moest schuilen voor de kou bij een veldmuis, die haar uithuwelijken wilde aan een rijke, maar saaie mol. Toch bleef haar hart verlangen naar licht, vrijheid en liefde. Dankzij een zwaluw die zij in de winter liefdevol verzorgde, nam die haar vóór het huwelijk mee. Vond zij uiteindelijk haar geluk in een warm land, waar zij trouwde met een prins van haar eigen grootte en naam kreeg als een de bloemenkoningin. En daar leefde zij gelukkig, in zon en bloemen, voor altijd.",
				"seppe-ghekiere-de-witte-slang":
					"De witte slang, die een diepgaande liefde heeft voor de koning, leeft samen met hem in vrede, zonder dat hij weet van haar ware aard. Echter, haar geheim wordt ontdekt door een boeddhistische monnik, meestal Fa Hai, die de vrouw als een gevaar beschouwt vanwege haar natuur als geest. Fa Hai probeert hun relatie te verstoren door de waarheid over haar identiteit te onthullen.",
				"staf-dierickx-aladin-en-de-wonderlamp":
					"Een jonge avonturier die door een mysterieuze tovenaar wordt uitgestuurd om een magische lamp te vinden in een verborgen grot vol rijkdommen. Na het ontdekken van de lamp en het oproepen van een geest, begint zijn reis pas echt.",
				"igor-lopes-oliveira-jaap-en-de-bonenstaak":
					"Jaap woont samen met zijn moeder en hun enige koe. Op een dag ruilt hij de koe voor magische bonen. Zijn moeder is woedend en gooit de bonen uit het raam. 's Nachts groeit er een gigantische bonenstaak tot in de wolken. Jaap klimt omhoog en ontdekt een kasteel in de lucht, waar een reus woont samen met een kip die gouden eieren legt en een magische harp. Jaap steelt de schatten, vlucht terug naar beneden en hakt de bonenstaak om, waardoor de reus valt. Vanaf dan leven Jaap en zijn moeder in rijkdom en geluk.",
			},
		},
	},
};

const lng = "en";

i18n.use(initReactI18next).init({
	resources,
	lng,
	debug: true,
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
