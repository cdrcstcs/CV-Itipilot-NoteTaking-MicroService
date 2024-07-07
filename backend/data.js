import Image from "./models/image.js";
import User from "./models/user.js";
const imageUrls = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
];
const generateImageData = () => {
    const imageData = [];
    for (let i = 0; i < 10; i++) {
        const image = imageUrls[i % imageUrls.length]; // Cycling through sample URLs
        const imageEntry = { image };
        imageData.push(imageEntry);
    }
    return imageData;
};
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const generateRandomPhoneNumber = () => {
    const digits = Math.floor(Math.random() * 9000000000) + 1000000000;
    return digits;
};
const generateUsers = async () => {
    const users = [];
    const countries = ["USA", "Canada", "UK", "Australia", "Germany", "France", "Japan", "Brazil", "India", "South Africa"];
    const userTypes = ["ADMIN", "USER"];
    const imageIds = (await Image.find()).map(({_id})=>{
        return _id;
    })
    for (let i = 0; i < 20; i++) {
        const user= {
        imageId: imageIds[getRandomInt(0, imageIds.length - 1)],
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        password: `password${i + 1}`,
        country: countries[Math.floor(Math.random() * countries.length)],
        phone: generateRandomPhoneNumber(),
        longtitude: getRandomInt(0, 100),
        latitude: getRandomInt(0, 100),
        userType: userTypes[Math.floor(Math.random() * userTypes.length)],
        };
        users.push(user);
    }
    return users;
};
const travelContent = [
    "Exploring the ancient ruins of Machu Picchu, Peru",
    "Relaxing on the pristine beaches of Maldives",
    "Hiking through the lush forests of Amazon rainforest",
    "Visiting the Eiffel Tower in Paris, France",
    "Safari adventure in Serengeti National Park, Tanzania",
    "Cruising along the Norwegian fjords",
    "Exploring the bustling streets of Tokyo, Japan",
    "Scuba diving in the Great Barrier Reef, Australia",
    "Road trip along the California coast, USA",
    "Camping under the stars in the Sahara Desert, Morocco",
    "Skiing in the Swiss Alps",
    "Visiting the Taj Mahal in Agra, India",
    "Backpacking through Southeast Asia",
    "Hot air balloon ride over Cappadocia, Turkey",
    "Exploring the ancient city of Petra, Jordan",
    "Sailing the Greek islands",
    "Cultural immersion in Kyoto, Japan",
    "Adventure trek to Mount Everest Base Camp, Nepal",
    "Exploring the historic city of Rome, Italy",
    "Cruise along the Nile River, Egypt",
    "Visiting the Grand Canyon, USA",
    "Road trip along the Garden Route, South Africa",
    "Hiking the Inca Trail to Machu Picchu, Peru",
    "Relaxing in the hot springs of Iceland",
    "Exploring the temples of Angkor Wat, Cambodia",
    "Backpacking through Europe",
    "Safari in Maasai Mara National Reserve, Kenya",
    "Visiting the Colosseum in Rome, Italy",
    "Island hopping in the Caribbean",
    "Cultural tour of Marrakech, Morocco",
    "Exploring the fjords of New Zealand",
    "Trekking in the Himalayas, Nepal",
    "Road trip through the Scottish Highlands",
    "Discovering the Great Wall of China",
    "Cruise to Antarctica",
    "Exploring the ancient city of Kyoto, Japan",
    "Admiring the architecture of Barcelona, Spain",
    "Hiking the Appalachian Trail, USA",
    "Visiting the Pyramids of Giza, Egypt",
    "Exploring the Amazon River, Brazil",
    "Safari in Kruger National Park, South Africa",
    "Exploring the ruins of Pompeii, Italy",
    "Road trip along the Amalfi Coast, Italy",
    "Hiking in Torres del Paine National Park, Chile",
    "Visiting the Louvre Museum in Paris, France",
    "Cruise along the Mekong River, Vietnam",
    "Exploring the temples of Bagan, Myanmar",
    "Cultural tour of Istanbul, Turkey",
    "Hiking in Yosemite National Park, USA",
    "Visiting the Acropolis in Athens, Greece",
    "Sailing the Croatian coastline",
    "Exploring the islands of Indonesia",
    "Road trip through the Canadian Rockies",
    "Camping in Yosemite National Park, USA",
    "Visiting the Vatican City in Rome, Italy",
    "Cultural immersion in Varanasi, India",
    "Exploring the fjords of Norway",
    "Hiking in Torres del Paine National Park, Chile",
    "Visiting the Louvre Museum in Paris, France",
    "Cruise along the Mekong River, Vietnam",
    "Exploring the temples of Bagan, Myanmar",
    "Cultural tour of Istanbul, Turkey",
    "Hiking in Yosemite National Park, USA",
    "Visiting the Acropolis in Athens, Greece",
    "Sailing the Croatian coastline",
    "Exploring the islands of Indonesia",
    "Road trip through the Canadian Rockies",
    "Camping in Yosemite National Park, USA",
    "Visiting the Vatican City in Rome, Italy",
    "Cultural immersion in Varanasi, India",
    "Exploring the fjords of Norway",
    "Hiking in Torres del Paine National Park, Chile",
    "Visiting the Louvre Museum in Paris, France",
    "Cruise along the Mekong River, Vietnam",
    "Exploring the temples of Bagan, Myanmar",
    "Cultural tour of Istanbul, Turkey",
    "Hiking in Yosemite National Park, USA",
    "Visiting the Acropolis in Athens, Greece",
    "Sailing the Croatian coastline",
    "Exploring the islands of Indonesia",
    "Road trip through the Canadian Rockies",
    "Camping in Yosemite National Park, USA",
    "Visiting the Vatican City in Rome, Italy",
    "Cultural immersion in Varanasi, India",
    "Exploring the fjords of Norway",
    "Hiking in Torres del Paine National Park, Chile",
    "Visiting the Louvre Museum in Paris, France",
    "Cruise along the Mekong River, Vietnam",
    "Exploring the temples of Bagan, Myanmar",
    "Cultural tour of Istanbul, Turkey",
    "Hiking in Yosemite National Park, USA",
    "Visiting the Acropolis in Athens, Greece",
    "Sailing the Croatian coastline",
    "Exploring the islands of Indonesia",
    "Road trip through the Canadian Rockies",
    "Camping in Yosemite National Park, USA",
    "Visiting the Vatican City in Rome, Italy",
    "Cultural immersion in Varanasi, India",
    "Exploring the fjords of Norway",
    "Hiking in Torres del Paine National Park, Chile",
];
  
  
const generateNotes = async () => {
    const notes = [];
    const userIds = (await User.find()).map(({ _id }) => _id); // Replace User with your actual User model
    for (let i = 0; i < 500; i++) {
      const note = {
        title: `Note ${i + 1}`,
        content: travelContent[getRandomInt(0, travelContent.length - 1)],
        user_id: userIds[getRandomInt(0, userIds.length - 1)], // Replace with actual user ID
      };
      notes.push(note);
    }
    return notes; // Assuming you want to insert these generated hotels into the database
};

export {generateImageData, generateUsers, generateNotes};