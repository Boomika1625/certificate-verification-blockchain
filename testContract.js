const { Web3 } = require("web3");
const contractData = require("./build/contracts/CertificateVerification.json");

// Connect to Ganache
const web3 = new Web3("http://127.0.0.1:7545");

async function test() {
  // Get accounts
  const accounts = await web3.eth.getAccounts();
  console.log("Using account:", accounts[0]);

  // Get deployed network
  const networkIds = Object.keys(contractData.networks);
  if (networkIds.length === 0) {
    throw new Error("Contract not deployed on any network");
  }

  const deployedAddress = contractData.networks[networkIds[0]].address;
  console.log("Contract deployed at:", deployedAddress);

  // Create contract instance
  const contract = new web3.eth.Contract(
    contractData.abi,
    deployedAddress
  );

  // ✅ Certificate data (you can expand this to 50)
  const certificates = [
  ["hash001", "Boomika Subramani", "B.Tech IT", "Hindusthan College"],
  ["hash002", "Arun Kumar", "B.Sc Computer Science", "Anna University"],
  ["hash003", "Priya Devi", "MCA", "PSG College of Technology"],
  ["hash004", "Ramesh Kumar", "B.Tech CSE", "SRM University"],
  ["hash005", "Kavya Sri", "B.Sc IT", "Loyola College"],
  ["hash006", "Vignesh S", "B.Tech AI & DS", "Kumaraguru College"],
  ["hash007", "Anitha R", "M.Sc Computer Science", "Bharathiar University"],
  ["hash008", "Suresh M", "BCA", "Periyar University"],
  ["hash009", "Divya Lakshmi", "B.Tech ECE", "VIT University"],
  ["hash010", "Karthik R", "B.Tech IT", "Hindusthan College"],

  ["hash011", "Meena Priya", "B.Sc Data Science", "PSGR Krishnammal College"],
  ["hash012", "Naveen Kumar", "B.Tech Mechanical", "Coimbatore Institute of Technology"],
  ["hash013", "Swetha S", "M.Tech CSE", "Amrita University"],
  ["hash014", "Ajith Kumar", "B.Sc Mathematics", "Madras University"],
  ["hash015", "Priyanka R", "B.Tech IT", "Hindusthan College"],

  ["hash016", "Sanjay P", "BCA", "Sri Ramakrishna College"],
  ["hash017", "Lavanya M", "B.Tech Biomedical", "Anna University"],
  ["hash018", "Gokul Raj", "B.Sc Physics", "Government Arts College"],
  ["hash019", "Harini S", "MBA", "IIM Trichy"],
  ["hash020", "Mohan V", "B.Tech Civil", "NIT Trichy"],

  ["hash021", "Aishwarya K", "B.Sc Chemistry", "Women's Christian College"],
  ["hash022", "Balaji T", "Diploma Mechanical", "Government Polytechnic"],
  ["hash023", "Nithya R", "B.Tech IT", "Hindusthan College"],
  ["hash024", "Prakash S", "B.Sc Statistics", "Presidency College"],
  ["hash025", "Keerthana M", "M.Sc AI", "VIT University"],

  ["hash026", "Rahul Dev", "B.Tech CSE", "SRM University"],
  ["hash027", "Deepika S", "B.Com CA", "PSG College"],
  ["hash028", "Sathish K", "B.Sc Electronics", "Bharathiar University"],
  ["hash029", "Monisha R", "B.Tech AI & ML", "KGiSL Institute of Technology"],
  ["hash030", "Vasanth Kumar", "BCA", "Hindusthan College"],

  ["hash031", "Pooja S", "B.Sc IT", "Avinashilingam University"],
  ["hash032", "Surya Prakash", "B.Tech EEE", "Anna University"],
  ["hash033", "Janani M", "MCA", "Coimbatore Institute of Technology"],
  ["hash034", "Rohit Sharma", "B.Sc Computer Science", "Loyola College"],
  ["hash035", "Sandhya R", "MBA HR", "PSG Institute of Management"],

  ["hash036", "Kishore N", "B.Tech Mechatronics", "Kumaraguru College"],
  ["hash037", "Anand S", "B.Sc Data Analytics", "Amrita University"],
  ["hash038", "Sneha P", "B.Tech IT", "Hindusthan College"],
  ["hash039", "Yogesh K", "Diploma ECE", "Government Polytechnic"],
  ["hash040", "Bhavani R", "B.Sc Microbiology", "Bharathidasan University"],

  ["hash041", "Naren S", "B.Tech CSE", "NIT Trichy"],
  ["hash042", "Revathi M", "M.Sc Computer Science", "Madurai Kamaraj University"],
  ["hash043", "Akash R", "BCA", "Hindusthan College"],
  ["hash044", "Shalini P", "B.Tech AI & DS", "VIT University"],
  ["hash045", "Manoj Kumar", "B.Sc Physics", "St. Joseph’s College"],

  ["hash046", "Preethi S", "MBA Finance", "IIM Bangalore"],
  ["hash047", "Dinesh R", "B.Tech IT", "Hindusthan College"],
  ["hash048", "Varsha M", "B.Sc Mathematics", "Ethiraj College"],
  ["hash049", "Sriram K", "M.Tech AI", "IIT Madras"],
  ["hash050", "Anjali Devi", "B.Tech CSE", "Anna University"]
];


  // 🔹 Issue certificates
  for (const cert of certificates) {
    await contract.methods
      .issueCertificate(cert[0], cert[1], cert[2], cert[3])
      .send({
        from: accounts[0],
        gas: 3000000
      });

    console.log(`Certificate issued for ${cert[0]}`);
  }

  // 🔍 Verify one certificate
  const verifyHash = "hash002";
  const result = await contract.methods.verifyCertificate(verifyHash).call();

  console.log("\nVerification Result:");
  console.log("Valid       :", result[0]);
  console.log("Name        :", result[1]);
  console.log("Course      :", result[2]);
  console.log("Institution :", result[3]);
}

// Run script
test().catch(console.error);
