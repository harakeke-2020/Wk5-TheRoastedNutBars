exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('dogfacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('dogfacts').insert([
        { dogfact: 'All dogs can be traced back 40 million years ago to a weasel-like animal called the Miacis which dwelled in trees and dens. The Miacis later evolved into the Tomarctus, a direct forbear of the genus Canis, which includes the wolf and jackal as well as the dog.' },
        { dogfact: 'Small quantities of grapes and raisins can cause renal failure in dogs. Chocolate, macadamia nuts, cooked onions, or anything with caffeine can also be harmful.' },
        { dogfact: 'Apple and pear seeds contain arsenic, which may be deadly to dogs.' },
        { dogfact: 'Dogs have sweat glands in between their paws.' },
        { dogfact: 'In 2003, Dr. Roger Mugford invented the “wagometer,” a device that claims to interpret a dog’s exact mood by measuring the wag of its tail.' },
        { dogfact: 'Ancient Egyptians revered their dogs. When a pet dog would die, the owners shaved off their eyebrows, smeared mud in their hair, and mourned aloud for days.' },
        { dogfact: 'Dogs have three eyelids. The third lid, called a nictitating membrane or “haw,” keeps the eye lubricated and protected.' },
        { dogfact: 'The phrase “raining cats and dogs” originated in seventeenth-century England. During heavy rainstorms, many homeless animals would drown and float down the streets, giving the appearance that it had actually rained cats and dogs.' },
        { dogfact: 'During the Middle Ages, Great Danes and Mastiffs were sometimes suited with armor and spiked collars to enter a battle or to defend supply caravans.' },
        { dogfact: 'Pekingese and Japanese Chins were so important in the ancient Far East that they had their own servants and were carried around trade routes as gifts for kings and emperors. Pekingese were even worshipped in the temples of China for centuries.' },
        { dogfact: 'After the fall of Rome, human survival often became more important than breeding and training dogs. Legends of werewolves emerged during this time as abandoned dogs traveling in packs commonly roamed streets and terrified villagers.' },
        { dogfact: 'The most dogs ever owned by one person were 5,000 Mastiffs owned by Kublai Khan.' },
        { dogfact: 'Weird dog laws include allowing police offers in Palding, Ohio, to bite a dog to quiet it. In Ventura County, California, cats and dogs are not allowed to have sex without a permit.' },
        { dogfact: 'Those born under the sign of the dog in Chinese astrology are considered to be loyal and discreet, though slightly temperamental.' },
        { dogfact: 'In Iran, it is against the law to own a dog as a pet. However, if an owner can prove the dog is a guard or hunting dog, this restriction doesn’t apply. Muslim reticence concerning dogs is perhaps due to the fact that rabies has always been endemic in the Middle East.' },
        { dogfact: 'The Mayans and Aztecs symbolized every tenth day with the dog, and those born under this sign were believed to have outstanding leadership skills.' },
        { dogfact: 'The ancient Mbaya Indians of the Gran Chaco in South America believed that humans originally lived underground until dogs dug them up.' },
        { dogfact: 'The first dogs were self-domesticated wolves which, at least 12,000 years ago, became attracted to the first sites of permanent human habitation.' },
        { dogfact: 'Dachshunds were bred to fight badgers in their dens.' },
        { dogfact: 'Corgis were initially bred in Wales to herd cows, their short stature allows them to nip at cows heels without risk of being kicked.' },
        { dogfact: 'Corgi is Welsh (Cymraeg) for "Dwarf Dog".' },
        { dogfact: 'The reason dogs curl up is because of an age-old instinct to keep themselves warm and to protect vital organs while they sleep.' },
        { dogfact: 'Anything smelly your dog rolls in only smells gross to you--to them it is DIVINE.' },
        { dogfact: 'Dogs have wet noses because it helps to absorb scent chemicals.' },
        { dogfact: 'If you leave your dog a piece of clothing that smells like you, the scent will comfort them and it can help curb their separation anxiety.' },
        { dogfact: 'The basenji is the only breed of dog that cannot bark, but they can yodel!' },
        { dogfact: 'When dogs poop, they prefer to do it in alignment with Earths magnetic field.' },
        { dogfact: 'If a male has a dog with him, he is three times more likely to get a prospective partners phone number.' },
        { dogfact: 'Doggy sense of smell is 10,000 times stronger than humans olfactory sense.' },
        { dogfact: 'A dog named Duke is the mayor of Cormorant, Minnesota.' }
      ])
    })
}
