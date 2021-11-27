const mongoose = require('mongoose');
const config = require('./config');
const {nanoid} = require('nanoid');
const User = require('./models/User');
const Albums = require("./models/Album");
const Artist = require("./models/Artist");
const Track = require("./models/Track");

const run = async () => {
    await mongoose.connect(config.db.url);

    const collections = await mongoose.connection.db.listCollections().toArray();

    for (const coll of collections) {
        await mongoose.connection.db.dropCollection(coll.name);
    }

    const [MariahCarey, AliciaKeys, DestinysChild, ChristinaMilian] = await Artist.create({
            name: "Mariah Carey",
            information: "Американская певица, автор песен, музыкальный продюсер, актриса и филантроп.",
            photo: "fixtures/Mariah_Carey.webp",
        }, {
            name: "Alicia Keys",
            information: "Али́ша Одже́лло Кук, профессионально известная как Али́ша Киз, — американская певица, пианистка, автор песен, выступающая в стилях ритм-энд-блюз, соул и неосоул, лауреат пятнадцати наград «Грэмми».",
            photo: "fixtures/Fallin_Alicia_Keys.jpg",
        }, {
            name: "Destiny’s Child",
            information: "Американская женская R'n'B и хип-хоп-группа. Появившись как квартет, она в конечном счёте стала трио в составе Бейонсе, Келли Роуленд и Мишель Уильямс. Группа выпустила четыре студийных альбома. На счету Destiny’s Child четыре сингла, достигших вершины хит-парада Billboard Hot 100.",
            photo: "fixtures/Destiny's_ChildA.jpeg",
        }, {
            name: "ChristinaMilian",
            information: "Американская актриса и певица кубинского происхождения.",
            photo: "fixtures/375x375bb.webp",
        }
    );

    const [admin, test] = await User.create({
            username: 'admin',
            password: 'admin',
            token: nanoid(),
            role: 'admin',
        }, {
            username: 'test',
            password: 'test',
            token: nanoid(),
            role: 'user'
        }
    );

    const [Rainbow, Glitter, SongsinAMinor, TheDiaryofAliciaKeys, DestinysChildAlbum, Survivor, ChristinaMilianAlbum, ItsAboutTime] = await Albums.create({
        name: "Rainbow",
        artist: MariahCarey,
        year: "1999",
        image: 'fixtures/375x375bb Mariah cery ranbow.webp',
    }, {
        name: "Glitter",
        artist: MariahCarey,
        year: "2001",
        image: 'fixtures/375x375bb (Mariah Cary Gliter)webp',
    }, {
        name: "Songs in A Minor",
        artist: AliciaKeys,
        year: "2001",
        image: 'fixtures/AliciaKeys-SongsInAMinor-music-album.jpg',
    }, {
        name: "The Diary of Alicia Keys",
        artist: AliciaKeys,
        year: "2003",
        image: 'fixtures/AliciaKeys-The diary.jpg',
    }, {
        name: "Destiny’s Child",
        artist: DestinysChild,
        year: "1998",
        image: 'fixtures/Destiny\'s_ChildA.jpeg',
    }, {
        name: "Survivor",
        artist: DestinysChild,
        year: "2001",
        image: 'fixtures/Destiny\'s_Child_Survivor.jpeg',
    }, {
        name: "Christina Milian",
        artist: ChristinaMilian,
        year: "2001",
        image: 'fixtures/375x375bb.webp',
    }, {
        name: "It’s About Time",
        artist: ChristinaMilian,
        year: "2004",
        image: 'fixtures/Christinamilian-itsabouttime.jpg',
    },);

    await Track.create({
        name: "Heartbreaker",
        lasting: "4:46",
        trackNumber: 1,
        album: Rainbow,
        artist: MariahCarey,
    }, {
        name: "Crybaby",
        lasting: "5:20",
        trackNumber: 10,
        album: Rainbow,
        artist: MariahCarey,
    }, {
        name: "Lead the Way",
        lasting: "3:53",
        trackNumber: 2,
        album: Glitter,
        artist: MariahCarey,
    }, {
        name: "Didn’t Mean to Turn You On",
        lasting: "4:54",
        trackNumber: 4,
        album: Glitter,
        artist: MariahCarey,
    }, {
        name: "Girlfriend",
        lasting: "3:34",
        trackNumber: 2,
        album: SongsinAMinor,
        artist: AliciaKeys,
    }, {
        name: "A Woman's Worth",
        lasting: "5:03",
        trackNumber: 7,
        album: SongsinAMinor,
        artist: AliciaKeys,
    }, {
        name: "Karma",
        lasting: "4:16",
        trackNumber: 2,
        album: TheDiaryofAliciaKeys,
        artist: AliciaKeys,
    }, {
        name: "Heartburn",
        lasting: "3:28",
        trackNumber: 3,
        album: TheDiaryofAliciaKeys,
        artist: AliciaKeys,
    }, {
        name: "No, No, No Part 1",
        lasting: "4:00",
        trackNumber: 6,
        album: DestinysChildAlbum,
        artist: DestinysChild,
    }, {
        name: "Show Me the Way",
        lasting: "4:20",
        trackNumber: 8,
        album: DestinysChildAlbum,
        artist: DestinysChild,
    }, {
        name: "Survivor",
        lasting: "4:14",
        trackNumber: 2,
        album: Survivor,
        artist: DestinysChild,
    }, {
        name: "Nasty Girl",
        lasting: "4:18",
        trackNumber: 4,
        album: Survivor,
        artist: DestinysChild,
    },{
        name: "You Make Me Laugh",
        lasting: "3:37",
        trackNumber: 6,
        album: ChristinaMilianAlbum,
        artist: ChristinaMilian,
    }, {
        name: "Satisfaction Guaranteed",
        lasting: "3:45",
        trackNumber: 10,
        album: ChristinaMilianAlbum,
        artist: ChristinaMilian,
    }, {
        name: "Dip It Low",
        lasting: "3:38",
        trackNumber: 2,
        album: ItsAboutTime,
        artist: ChristinaMilian,
    }, {
        name: "Miss You Like Crazy",
        lasting: "4:49",
        trackNumber: 11,
        album: ItsAboutTime,
        artist: ChristinaMilian,
    },);

    await mongoose.connection.close();
};

run().catch(console.error);