const movies = [
  {
    title: 'Moto Razr 5G',
    image: '/images/moto-razr.jpg',
    description:
      'Amidst the raging battle between Apple, Samsung, and Google, one key player, a hero, returned: Motorola, with its signature and classic phone, the Razr. The Razr was the iPhone before the iPhone, so we have to give its modern iteration some love.',
    brand: 'Motorola',
    genre: ['musical', 'comedy'],
    price: 1149.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 0,
    cinemas: [
      {
        name: 'viva cinemas',
        capacity: 300,
        viewinTime: ['morning', 'afternoon', 'night'],
        location: [
          {
            state: 'oyo',
          },
        ],
      },
      {
        name: 'Apocalyso cinemas',
        capacity: 1000,
        viewinTime: ['morning', 'afternoon', 'night'],
      },
      {
        name: 'Film House cinemas',
        capacity: 500,
        viewinTime: ['morning', 'afternoon', 'night'],
      },
    ],
  },
  {
    name: 'Konnect-i Slim Backpack with Jacquard by Google',
    image: '/images/samsonite-backpack.jpg',
    description:
      'More than a backPack. The tech is a chip, smaller than a thumb drive, plugged into the backpack to turn thread into touch-sensitive material. You can skip songs, turn volume up, answer calls, and more with taps. Best part is, when you remove that plug-and-play chip, the material can be washed. Plus, you only have to charge the chip. No need to plug in your whole backpack to an outlet.',
    brand: 'Samsonite',
    category: 'Bags',
    price: 199.99,
    countInStock: 21,
    rating: 4.5,
    numReviews: 0,
  },
  {
    name: 'Liteboxer Fitness Bundle',
    image: '/images/liteboxer.jpg',
    description:
      'Remember that game at the arcade, where you stomped on the glowing buttons to “crush the spider”? Well, Liteboxer is that, but for exercise, which is good because I need working out to be fun. Buttons light up on the face that it encourages you to beat the shit out of.',
    brand: 'Liteboxer',
    category: 'Fitness',
    price: 1495.0,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },

  {
    name: 'Yeti USB Mic',
    image: '/images/yeti-blue.jpg',
    description:
      "You are still talking through the built-in mic on your wired Apple headphones. It's rough and rowdy. So get a damn mic. You’ll sound clearer, you won't break up, and your whole video conference crew will thank you for it. There are a ton of microphones on the market, but the Yeti hits that sweet spot between being affordable and still packing quality.",
    brand: 'Blue',
    category: 'Microphone',
    price: 129.99,
    countInStock: 13,
    rating: 4.7,
    numReviews: 1,
  },
  {
    name: 'FR FRD Ultimate Dura-Ace Di2',
    image: '/images/ace-bike.jpg',
    description:
      'There’s really only two ways to improve performance on a bicycle: increase power and cut weight. The power part comes down to what your legs can do through training, diet, and genetics. But for cutting weight? It’s hard to find a better bike than the Felt FR. Made from the same carbon fiber used in Formula One cars and high-performance aircraft, the bike is incredibly light (it’s just a whiff over 15 pounds) and supremely responsive (the stiff frame has it cornering like a Porsche 911).',
    brand: 'Felt',
    category: 'Bicycles',
    price: 2199.0,
    countInStock: 6,
    rating: 4.7,
    numReviews: 5,
  },
  {
    name: 'KEEP Cannabis Storage',
    image: '/images/keep.png',
    description:
      "We're leaping from the future back to the present, where cannabis is getting prettied-up to ease its path to legalization and social acceptance. The new KEEP storage container for cannabis is discreet on the outside—its display has a clock and weather info—but it opens to reveal multiple storage spaces for different kinds of cannabis products and a rolling tray.",
    brand: 'Keep',
    category: 'Storage',
    price: 249.0,
    countInStock: 6,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Pixel Buds',
    image: '/images/pixel-buds.jpg',
    description:
      'Since the invention of AirPods, everyone’s been trying to get into the true wireless game. Well, last year Google had our favorite smart phone, and this year it came out swinging with its own take on wireless buds.',
    brand: 'Google',
    category: 'Earbuds',
    price: 207.99,
    countInStock: 17,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Hypervolt Plus Cordless Vibration Massager',
    image: '/images/hypervolt.jpg',
    description:
      'With no end to the lockdown in sight, there’s a really good chance we won’t be able to safely get a real massage from a real human being until sometime in the year 3000. But that’s okay, because we live in a world where there’s the Hyperice Hypervolt Percussion Massager. Looking a little like a power tool designed under the supervision of Steve Jobs, the Hypervolt uses a 60-watt motor to propel the massager head at up to three different speeds.',
    brand: 'Hyperice',
    category: 'Health',
    price: 348.99,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Fillup',
    image: '/images/fillup.jpg',
    description:
      "Throughout my adult life, one lesson from my mom has proven to be totally true: Hydration is important. Most of my issues are solved by water. I mean, that's not entirely factual, but if I ever feel like crap, I know it's probably because I'm dehydrated. Fillup is a water tower that keeps a day's worth of water cold and as close as you need it, acting as a constant reminder to drink your damn water.",
    brand: 'Fluid Stance',
    category: 'health',
    price: 139.0,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'iphone SE',
    image: '/images/iphone-se.jpg',
    description:
      'Smart phone companies love to pretend that a $700 is “affordable” for a device upgrade. It really is not. But by bringing back the iPhone SE for a palatable $400, Apple gave us hope that the heavy-hitters in the smart phone arena might be embracing price accessibility.',
    brand: 'apple',
    category: 'Mobile Phones',
    price: 399.0,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Moon UltraLight',
    image: '/images/moon-light.jpg',
    description:
      'Short of buying a video camera but more more rewarding than relying on a smartphone’s guts alone is the Moon UltraLight, an unassuming device that clips onto a phone and emits better light for photography and videography. With touch controls, you can adjust the hue and brightness, and it’ll do wonders to your photos and videos.',
    brand: 'Moon',
    category: 'Ligthning',
    price: 79.0,
    countInStock: 12,
    rating: 5,
    numReviews: 9,
  },

  {
    name: 'Larq Movement Water Bottle',
    image: '/images/Larq-movement.jpg',
    description:
      'Short of buying a video camera but more more rewarding than relying on a smartphone’s guts alone is the Moon UltraLight, an unassuming device that clips onto a phone and emits better light for photography and videography. With touch controls, you can adjust the hue and brightness, and it’ll do wonders to your photos and videos.',
    brand: 'Larq',
    category: 'Health',
    price: 53.99,
    countInStock: 2,
    rating: 4.8,
    numReviews: 120,
  },
  {
    name: 'Theragun Mini',
    image: '/images/theragun-mini.jpg',
    description:
      'Theragun percussion massagers aren’t cure-alls, but damn do they help. This year, Therabody launched a mini Theragun that is a wonderful backpack or gym bag size, and still will have your muscles feeling refreshed and loose. The Mini serves as your intro to percussive massage guns, and a necessary addition to those of us who have been wrecking our bodies learning home-friendly',
    brand: 'Theragun',
    category: 'Fitness',
    price: 199.0,
    countInStock: 5,
    rating: 4.8,
    numReviews: 1,
  },
  {
    name: 'Positive Vibration XL',
    image: '/images/house-of-marley.jpg',
    description:
      'If you want a pair of Bluetooth headphones, the options are extensive. It’s like buying a new car. However, take a moment to consider this pair from House of Marley. They’re quite gorgeous in design, with padded cushions, hi-def drivers for impressive audio, and a 24-hour battery life.',
    brand: 'House Marley',
    category: 'Headphones',
    price: 88.99,
    countInStock: 5,
    rating: 4.4,
    numReviews: 1,
  },
  {
    name: 'Era Pro',
    image: '/images/pax-era-pro.jpg',
    description:
      'Pax Labs made the Pax Era Pro—a characteristically sleek Pax weed vape that’s smarter than a well-trained German Shepherd—to alleviate some of that anxiety. It takes a reading on the pod you’re inhaling to give you a safety rundown of its chemical compounds, from THC to terpenes. It’ll also remember your ideal dosage settings, making your cannabis intake much more manageable.',
    brand: 'pax',
    category: 'Health',
    price: 70.0,
    countInStock: 3,
    rating: 3.4,
    numReviews: 18,
  },
  {
    name: 'The Kettle',
    image: '/images/balmuda-kettle.jpg',
    description:
      'Please, for the love of god, stop microwaving your water. Get an electric kettle. It is faster and better. The Japanese toaster company Balmuda has a kettle that not only works great, but looks amazing on your countertop. It has a set power base and a simple LED indicator, and it is remarkably lightweight.',
    brand: 'Balmuda',
    category: 'Electronics',
    price: 179.99,
    countInStock: 5,
    rating: 4.9,
    numReviews: 0,
  },
  {
    name: 'Arc Soundbar',
    image: '/images/sonos-arc.jpg',
    description:
      "The design, in traditional Sonos fashion, is so well done that the Arc actually adds a purposeful design aesthetic to your TV setup. That's not even getting started on the sound itself. The quality of this thing is amazing, as if you turned your living room into an IMAX theater with Dolby audio, and sometimes even better. It also works as a smart speaker for Spotify and the new Sonos radio stations (the Brittany Howard channel is to die for), and it’ll calibrate based on your room for optimal acoustics.",
    brand: 'Sonos',
    category: 'Speakers',
    price: 799.0,
    countInStock: 5,
    rating: 4.4,
    numReviews: 0,
  },
  {
    name: 'Osmo Pocket',
    image: '/images/dji.jpg',
    description:
      'This thing is a fully functional, stabilized 4K camera. You read that right. The Osmo Pocket fits, yes, right into your pocket and packs a wallop more powerful than some film crews. With the 4K-capable capture and its head mounted on a stabilizing gimbal, you get clean, completely un-shaky shots. You can also set objects for the camera to focus on, or attach your phone for a larger preview screen. Watching these thing’s head whip around is like watching a droid right out of Star Wars.',
    brand: 'dji',
    category: 'Camera',
    price: 239.99,
    countInStock: 12,
    rating: 4.4,
    numReviews: 1,
  },

  {
    name: 'CleanPod UVC Sterilizer',
    image: '/images/monos.jpg',
    description:
      "This is a little handheld sterilizer. You can direct its UV light to kill germs on nearly anything. That's it. But from groceries to luggage to whatever the hell else needs some quick sanitizing and may not be soap- or GermX-friendly, this wand is an invaluable tool to have in your hand",
    brand: 'Monos',
    category: 'Electronics',
    price: 90.0,
    countInStock: 6,
    rating: 4.0,
    numReviews: 1,
  },
  {
    name: 'Alpha 7C Mirrorless Digital Camera',
    image: '/images/sony-camera.jpg',
    description:
      "This is a little handheld sterilizer. You can direct its UV light to kill germs on nearly anything. That's it. But from groceries to luggage to whatever the hell else needs some quick sanitizing and may not be soap- or GermX-friendly, this wand is an invaluable tool to have in your hand",
    brand: 'Sony',
    category: 'Camera',
    price: 2098.0,
    countInStock: 32,
    rating: 4.9,
    numReviews: 1,
  },
]

export default movies
