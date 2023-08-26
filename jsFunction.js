// IMPORTANT JAVASCRIPT FUNCTION
//push
//unshift
//pop
//forEach
//while

let data = [
    {
      "_id": "64e645859071e5e8661fbc85",
      "index": 0,
      "guid": "a01ddce8-1d36-4ba1-83f8-1e73919cc6ec",
      "isActive": false,
      "balance": "$2,076.99",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "eyeColor": "blue",
      "name": "Downs Hyde",
      "gender": "male",
      "company": "ERSUM",
      "email": "downshyde@ersum.com",
      "phone": "+1 (894) 541-3278",
      "address": "668 Nassau Street, Nescatunga, Texas, 6436",
      "about": "Deserunt nulla ullamco ut cupidatat eu eiusmod amet pariatur. Aliqua commodo nisi sunt est ad ad pariatur tempor sunt aute. Eu nisi id culpa ullamco sunt ex commodo dolor. Consequat sit nostrud commodo ullamco laboris occaecat ipsum.\r\n",
      "registered": "2016-03-06T06:20:12 -06:-30",
      "latitude": 37.835327,
      "longitude": 66.230784,
      "tags": [
        "laborum",
        "esse",
        "duis",
        "ipsum",
        "consequat",
        "nulla",
        "officia"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Harriet Morin"
        },
        {
          "id": 1,
          "name": "Gallegos Underwood"
        },
        {
          "id": 2,
          "name": "Harper Hood"
        }
      ],
      "greeting": "Hello, Downs Hyde! You have 10 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "64e645851302d438de80ed28",
      "index": 1,
      "guid": "040cef55-ac39-4fd8-aeda-a8c8e5a7ac3e",
      "isActive": false,
      "balance": "$3,098.42",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "green",
      "name": "Deidre Mann",
      "gender": "female",
      "company": "SUSTENZA",
      "email": "deidremann@sustenza.com",
      "phone": "+1 (986) 491-2769",
      "address": "378 Stuyvesant Avenue, Bladensburg, New Jersey, 9350",
      "about": "Amet culpa dolore culpa nulla elit anim ut. Ex officia labore proident labore ea tempor nulla tempor ea officia consequat duis esse id. Esse Lorem ea mollit mollit ad officia ipsum et. Proident amet ipsum culpa commodo reprehenderit irure exercitation commodo nulla eu ex. Elit Lorem occaecat aliquip aute.\r\n",
      "registered": "2022-10-21T02:33:40 -06:-30",
      "latitude": -74.120876,
      "longitude": 176.78577,
      "tags": [
        "laboris",
        "minim",
        "officia",
        "ea",
        "eiusmod",
        "dolor",
        "deserunt"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Knox Sutton"
        },
        {
          "id": 1,
          "name": "Mcintosh Berry"
        },
        {
          "id": 2,
          "name": "Margo Le"
        }
      ],
      "greeting": "Hello, Deidre Mann! You have 3 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "64e645850e1fd1f67118a8ba",
      "index": 2,
      "guid": "fc3c063e-4c65-4289-a84f-80133c3ddc27",
      "isActive": false,
      "balance": "$1,582.26",
      "picture": "http://placehold.it/32x32",
      "age": 38,
      "eyeColor": "blue",
      "name": "Fleming Gonzales",
      "gender": "male",
      "company": "FIBRODYNE",
      "email": "fleminggonzales@fibrodyne.com",
      "phone": "+1 (923) 532-2324",
      "address": "504 Linden Street, Hondah, Missouri, 4539",
      "about": "Magna voluptate enim tempor cillum occaecat cupidatat exercitation occaecat officia est laboris voluptate exercitation sunt. Aliqua officia veniam exercitation eiusmod consequat incididunt. Dolore consequat fugiat laborum non excepteur eu. Et mollit qui voluptate aliqua enim pariatur esse. Elit do fugiat incididunt est quis veniam et ullamco ipsum minim esse ex. Aute cupidatat ad anim ea ipsum commodo velit est veniam tempor est laborum ad.\r\n",
      "registered": "2021-05-12T03:25:57 -06:-30",
      "latitude": -31.984666,
      "longitude": -16.794152,
      "tags": [
        "ea",
        "quis",
        "elit",
        "aute",
        "anim",
        "eu",
        "eiusmod"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Freida Contreras"
        },
        {
          "id": 1,
          "name": "Salazar Sampson"
        },
        {
          "id": 2,
          "name": "Constance Sears"
        }
      ],
      "greeting": "Hello, Fleming Gonzales! You have 2 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "64e6458504ff73b13dd354f2",
      "index": 3,
      "guid": "cba4d034-58eb-4d38-8c4e-5e190a02bd5c",
      "isActive": true,
      "balance": "$1,017.12",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "eyeColor": "green",
      "name": "Alexander Austin",
      "gender": "male",
      "company": "ZILCH",
      "email": "alexanderaustin@zilch.com",
      "phone": "+1 (997) 452-2524",
      "address": "716 Irving Avenue, Volta, Utah, 7470",
      "about": "Ea quis exercitation quis reprehenderit excepteur laboris consequat occaecat consectetur. Labore adipisicing enim laborum voluptate officia nostrud tempor reprehenderit aute minim voluptate laboris irure velit. Veniam deserunt pariatur adipisicing nostrud consectetur dolore Lorem culpa reprehenderit enim incididunt eiusmod mollit ipsum. Duis officia in occaecat labore ea ipsum reprehenderit duis ut fugiat. Aliquip incididunt est amet adipisicing occaecat pariatur amet est do reprehenderit ex anim mollit in. Culpa Lorem et aliquip cillum nisi id.\r\n",
      "registered": "2019-08-06T06:29:38 -06:-30",
      "latitude": -17.000087,
      "longitude": -131.795821,
      "tags": [
        "nulla",
        "ex",
        "proident",
        "pariatur",
        "id",
        "adipisicing",
        "fugiat"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Stanton Jensen"
        },
        {
          "id": 1,
          "name": "Britt Castillo"
        },
        {
          "id": 2,
          "name": "Rowena Potter"
        }
      ],
      "greeting": "Hello, Alexander Austin! You have 10 unread messages.",
      "favoriteFruit": "banana"
    },
    {
      "_id": "64e64585e50a22195290db3c",
      "index": 4,
      "guid": "0759518c-5f29-431e-9440-c79fd3b2bb2c",
      "isActive": false,
      "balance": "$2,795.88",
      "picture": "http://placehold.it/32x32",
      "age": 34,
      "eyeColor": "green",
      "name": "Arlene Willis",
      "gender": "female",
      "company": "ZANILLA",
      "email": "arlenewillis@zanilla.com",
      "phone": "+1 (914) 507-3581",
      "address": "343 Miller Place, Sunwest, Washington, 3555",
      "about": "Adipisicing ad sit dolor dolor. Reprehenderit ex laborum quis laboris adipisicing duis. Do cupidatat nulla Lorem excepteur veniam duis ex qui. Exercitation id mollit officia enim ullamco nostrud qui amet amet ex ad laboris. Tempor laboris velit aute occaecat velit et nisi aliquip occaecat minim enim. Et sint enim sunt duis cupidatat aliquip occaecat id. Do amet esse pariatur ad et eiusmod mollit aliqua nulla.\r\n",
      "registered": "2020-03-15T02:47:57 -06:-30",
      "latitude": -89.617152,
      "longitude": -78.63276,
      "tags": [
        "ipsum",
        "nisi",
        "dolore",
        "sint",
        "laborum",
        "exercitation",
        "sunt"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Willie Valentine"
        },
        {
          "id": 1,
          "name": "Rosalind Chaney"
        },
        {
          "id": 2,
          "name": "Margret Dunlap"
        }
      ],
      "greeting": "Hello, Arlene Willis! You have 4 unread messages.",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "64e645857c5b37b8d6402d92",
      "index": 5,
      "guid": "6e58e863-6daf-4163-899e-660bc3592edf",
      "isActive": false,
      "balance": "$3,475.73",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "eyeColor": "blue",
      "name": "Minnie Daniel",
      "gender": "female",
      "company": "LIMAGE",
      "email": "minniedaniel@limage.com",
      "phone": "+1 (868) 512-3325",
      "address": "602 Laurel Avenue, Independence, Nebraska, 5872",
      "about": "Labore fugiat consequat non veniam non. Labore pariatur consectetur commodo non tempor do ad sit elit exercitation excepteur deserunt laboris. Voluptate magna occaecat laborum duis incididunt.\r\n",
      "registered": "2019-03-28T06:31:33 -06:-30",
      "latitude": 56.908941,
      "longitude": -177.441545,
      "tags": [
        "nostrud",
        "irure",
        "amet",
        "nisi",
        "culpa",
        "ad",
        "amet"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Stevens Leach"
        },
        {
          "id": 1,
          "name": "Ramsey Patel"
        },
        {
          "id": 2,
          "name": "Patty Nelson"
        }
      ],
      "greeting": "Hello, Minnie Daniel! You have 3 unread messages.",
      "favoriteFruit": "apple"
    },
    {
      "_id": "64e645852ba7227e34a860f1",
      "index": 6,
      "guid": "d5b36e4a-dc33-41db-9068-b007f465c805",
      "isActive": false,
      "balance": "$3,490.31",
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "eyeColor": "green",
      "name": "Myrna Odom",
      "gender": "female",
      "company": "COMTEST",
      "email": "myrnaodom@comtest.com",
      "phone": "+1 (888) 526-3726",
      "address": "975 Ellery Street, Jackpot, Nevada, 1860",
      "about": "Anim et nisi amet sit dolore labore sunt culpa deserunt et dolor reprehenderit. Adipisicing voluptate ad veniam deserunt ex est dolor amet ad ad. Ipsum aute enim laborum eiusmod est mollit consequat dolore. Ullamco proident velit veniam eu ipsum non reprehenderit est esse cillum qui aliqua. Cupidatat proident non consequat laborum laboris. Amet do occaecat ad deserunt anim. Culpa cillum ea officia magna esse magna ipsum proident nisi culpa.\r\n",
      "registered": "2017-03-12T06:20:02 -06:-30",
      "latitude": -6.710264,
      "longitude": 76.34853,
      "tags": [
        "excepteur",
        "labore",
        "mollit",
        "elit",
        "pariatur",
        "ut",
        "est"
      ],
      "friends": [
        {
          "id": 0,
          "name": "Beverley Banks"
        },
        {
          "id": 1,
          "name": "Cohen Goff"
        },
        {
          "id": 2,
          "name": "Sloan Mcdaniel"
        }
      ],
      "greeting": "Hello, Myrna Odom! You have 4 unread messages.",
      "favoriteFruit": "strawberry"
    }
  ]
  let newArray = []
  //for loop
  for(let i=0; i<data.length; i++){
    newArray.push({
        _id:data[i]._id,
        isActive:data[i].isActive,
        balance:data[i].balance,
        picture:data[i].picture,
        age:data[i].age,
        name:data[i].name,
        gender:data[i].gender,
        company:data[i].company
    })
  }
  console.log(newArray)



//WHILE LOOP
//shift 
//pop
  
// for(let i=0; i<data.length; i++){
// }
// let arr = [0, 1, 2, 3]
// return 0
let newArr = []
while(data.length>0){
  let val = data.pop();
  let alldata = {}
  alldata._id = val._id
  alldata.isActive = val.isActive
  alldata.balance  = val.balance
  alldata.picture = val.picture
  alldata.age = val.age
  alldata.name = val.name
  alldata.gender = val.gender
  alldata.company = val.company
  newArr.push(alldata)
}

console.log(newArr)