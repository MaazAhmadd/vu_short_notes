import { useEffect, useState } from "react";
import "./App.css";
const Accounting_Banking_Finance = [
  {
    name: "acc311",
    url: "https://acc311-vu.netlify.app",
    available: false,
  },
  {
    name: "acc501",
    url: "https://acc501-vu.netlify.app",
    available: false,
  },
  {
    name: "bnk601",
    url: "https://bnk601-vu.netlify.app",
    available: false,
  },
  {
    name: "bnk603",
    url: "https://bnk603-vu.netlify.app",
    available: false,
  },
  {
    name: "bnk610",
    url: "https://bnk610-vu.netlify.app",
    available: false,
  },
  {
    name: "bnk611",
    url: "https://bnk611-vu.netlify.app",
    available: false,
  },
  {
    name: "bnk612",
    url: "https://bnk612-vu.netlify.app",
    available: false,
  },
  {
    name: "bnk613",
    url: "https://bnk613-vu.netlify.app",
    available: false,
  },
  {
    name: "fin611",
    url: "https://fin611-vu.netlify.app",
    available: false,
  },
  {
    name: "fin621",
    url: "https://fin621-vu.netlify.app",
    available: false,
  },
  {
    name: "fin622",
    url: "https://fin622-vu.netlify.app",
    available: false,
  },
  {
    name: "fin623",
    url: "https://fin623-vu.netlify.app",
    available: false,
  },
  {
    name: "fin625",
    url: "https://fin625-vu.netlify.app",
    available: false,
  },
  {
    name: "fin630",
    url: "https://fin630-vu.netlify.app",
    available: false,
  },
  {
    name: "fin701",
    url: "https://fin701-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt101",
    url: "https://mgt101-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt201",
    url: "https://mgt201-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt401",
    url: "https://mgt401-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt402",
    url: "https://mgt402-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt404",
    url: "https://mgt404-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt411",
    url: "https://mgt411-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt604",
    url: "https://mgt604-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt705",
    url: "https://mgt705-vu.netlify.app",
    available: false,
  },
];
const Bioinformatics = [
  {
    name: "bif401",
    url: "https://bif401-vu.netlify.app",
    available: false,
  },
  {
    name: "bif402",
    url: "https://bif402-vu.netlify.app",
    available: false,
  },
  {
    name: "bif501",
    url: "https://bif501-vu.netlify.app",
    available: false,
  },
  {
    name: "bif601",
    url: "https://bif601-vu.netlify.app",
    available: false,
  },
  {
    name: "bif602",
    url: "https://bif602-vu.netlify.app",
    available: false,
  },
  {
    name: "bif731",
    url: "https://bif731-vu.netlify.app",
    available: false,
  },
  {
    name: "bif732",
    url: "https://bif732-vu.netlify.app",
    available: false,
  },
  {
    name: "bif733",
    url: "https://bif733-vu.netlify.app",
    available: false,
  },
  {
    name: "bio301",
    url: "https://bio301-vu.netlify.app",
    available: false,
  },
  {
    name: "bio401",
    url: "https://bio401-vu.netlify.app",
    available: false,
  },
  {
    name: "cs620",
    url: "https://cs620-vu.netlify.app",
    available: false,
  },
];
const Biotechnology = [
  {
    name: "bio202",
    url: "https://bio202-vu.netlify.app",
    available: false,
  },
  {
    name: "bio204",
    url: "https://bio204-vu.netlify.app",
    available: false,
  },
  {
    name: "bio303",
    url: "https://bio303-vu.netlify.app",
    available: false,
  },
  {
    name: "bio502",
    url: "https://bio502-vu.netlify.app",
    available: false,
  },
  {
    name: "bio734",
    url: "https://bio734-vu.netlify.app",
    available: false,
  },
  {
    name: "bt101",
    url: "https://bt101-vu.netlify.app",
    available: false,
  },
  {
    name: "bt102",
    url: "https://bt102-vu.netlify.app",
    available: false,
  },
  {
    name: "bt301",
    url: "https://bt301-vu.netlify.app",
    available: false,
  },
  {
    name: "bt404",
    url: "https://bt404-vu.netlify.app",
    available: false,
  },
  {
    name: "bt406",
    url: "https://bt406-vu.netlify.app",
    available: false,
  },
  {
    name: "bt501",
    url: "https://bt501-vu.netlify.app",
    available: false,
  },
  {
    name: "bt503",
    url: "https://bt503-vu.netlify.app",
    available: false,
  },
  {
    name: "bt603",
    url: "https://bt603-vu.netlify.app",
    available: false,
  },
  {
    name: "bt605",
    url: "https://bt605-vu.netlify.app",
    available: false,
  },
  {
    name: "bt731",
    url: "https://bt731-vu.netlify.app",
    available: false,
  },
  {
    name: "bt732",
    url: "https://bt732-vu.netlify.app",
    available: false,
  },
  {
    name: "bt734",
    url: "https://bt734-vu.netlify.app",
    available: false,
  },
  {
    name: "bt735",
    url: "https://bt735-vu.netlify.app",
    available: false,
  },
  {
    name: "che301",
    url: "https://che301-vu.netlify.app",
    available: false,
  },
  {
    name: "gen731",
    url: "https://gen731-vu.netlify.app",
    available: false,
  },
  {
    name: "gen732",
    url: "https://gen732-vu.netlify.app",
    available: false,
  },
  {
    name: "zoo731",
    url: "https://zoo731-vu.netlify.app",
    available: false,
  },
];
const Computer_Science_Information_Technology = [
  {
    name: "cs101",
    url: "https://cs101-vu.netlify.app",
    available: false,
  },
  {
    name: "cs201",
    url: "https://cs201-vu.netlify.app",
    available: false,
  },
  {
    name: "cs202",
    url: "https://cs202-vu.netlify.app",
    available: false,
  },
  {
    name: "cs205",
    url: "https://cs205-vu.netlify.app",
    available: false,
  },
  {
    name: "cs206",
    url: "https://cs206-vu.netlify.app",
    available: false,
  },
  {
    name: "cs301",
    url: "https://cs301-vu.netlify.app",
    available: false,
  },
  {
    name: "cs302",
    url: "https://cs302-vu.netlify.app",
    available: false,
  },
  {
    name: "cs304",
    url: "https://cs304-vu.netlify.app",
    available: false,
  },
  {
    name: "cs311",
    url: "https://cs311-vu.netlify.app",
    available: false,
  },
  {
    name: "cs312",
    url: "https://cs312-vu.netlify.app",
    available: false,
  },
  {
    name: "cs315",
    url: "https://cs315-vu.netlify.app",
    available: false,
  },
  {
    name: "cs401",
    url: "https://cs401-vu.netlify.app",
    available: false,
  },
  {
    name: "cs402",
    url: "https://cs402-vu.netlify.app",
    available: false,
  },
  {
    name: "cs403",
    url: "https://cs403-vu.netlify.app",
    available: true,
  },
  {
    name: "cs405",
    url: "https://cs405-vu.netlify.app",
    available: false,
  },
  {
    name: "cs407",
    url: "https://cs407-vu.netlify.app",
    available: false,
  },
  {
    name: "cs408",
    url: "https://cs408-vu.netlify.app",
    available: false,
  },
  {
    name: "cs410",
    url: "https://cs410-vu.netlify.app",
    available: false,
  },
  {
    name: "cs411",
    url: "https://cs411-vu.netlify.app",
    available: false,
  },
  {
    name: "cs432",
    url: "https://cs432-vu.netlify.app",
    available: false,
  },
  {
    name: "cs435",
    url: "https://cs435-vu.netlify.app",
    available: false,
  },
  {
    name: "cs501",
    url: "https://cs501-vu.netlify.app",
    available: false,
  },
  {
    name: "cs502",
    url: "https://cs502-vu.netlify.app",
    available: false,
  },
  {
    name: "cs504",
    url: "https://cs504-vu.netlify.app",
    available: false,
  },
  {
    name: "cs506",
    url: "https://cs506-vu.netlify.app",
    available: false,
  },
  {
    name: "cs507",
    url: "https://cs507-vu.netlify.app",
    available: false,
  },
  {
    name: "cs508",
    url: "https://cs508-vu.netlify.app",
    available: false,
  },
  {
    name: "cs601",
    url: "https://cs601-vu.netlify.app",
    available: false,
  },
  {
    name: "cs602",
    url: "https://cs602-vu.netlify.app",
    available: false,
  },
  {
    name: "cs603",
    url: "https://cs603-vu.netlify.app",
    available: false,
  },
  {
    name: "cs604",
    url: "https://cs604-vu.netlify.app",
    available: false,
  },
  {
    name: "cs605",
    url: "https://cs605-vu.netlify.app",
    available: false,
  },
  {
    name: "cs606",
    url: "https://cs606-vu.netlify.app",
    available: false,
  },
  {
    name: "cs607",
    url: "https://cs607-vu.netlify.app",
    available: false,
  },
  {
    name: "cs609",
    url: "https://cs609-vu.netlify.app",
    available: false,
  },
  {
    name: "cs610",
    url: "https://cs610-vu.netlify.app",
    available: false,
  },
  {
    name: "cs611",
    url: "https://cs611-vu.netlify.app",
    available: false,
  },
  {
    name: "cs614",
    url: "https://cs614-vu.netlify.app",
    available: false,
  },
  {
    name: "cs615",
    url: "https://cs615-vu.netlify.app",
    available: false,
  },
  {
    name: "cs701",
    url: "https://cs701-vu.netlify.app",
    available: false,
  },
  {
    name: "cs702",
    url: "https://cs702-vu.netlify.app",
    available: false,
  },
  {
    name: "cs703",
    url: "https://cs703-vu.netlify.app",
    available: false,
  },
  {
    name: "cs704",
    url: "https://cs704-vu.netlify.app",
    available: false,
  },
  {
    name: "cs706",
    url: "https://cs706-vu.netlify.app",
    available: false,
  },
  {
    name: "cs707",
    url: "https://cs707-vu.netlify.app",
    available: false,
  },
  {
    name: "cs708",
    url: "https://cs708-vu.netlify.app",
    available: false,
  },
  {
    name: "cs709",
    url: "https://cs709-vu.netlify.app",
    available: false,
  },
  {
    name: "cs710",
    url: "https://cs710-vu.netlify.app",
    available: false,
  },
  {
    name: "cs711",
    url: "https://cs711-vu.netlify.app",
    available: false,
  },
  {
    name: "cs712",
    url: "https://cs712-vu.netlify.app",
    available: false,
  },
  {
    name: "cs713",
    url: "https://cs713-vu.netlify.app",
    available: false,
  },
  {
    name: "cs716",
    url: "https://cs716-vu.netlify.app",
    available: false,
  },
  {
    name: "cs718",
    url: "https://cs718-vu.netlify.app",
    available: false,
  },
  {
    name: "cs721",
    url: "https://cs721-vu.netlify.app",
    available: false,
  },
  {
    name: "cs723",
    url: "https://cs723-vu.netlify.app",
    available: false,
  },
  {
    name: "cs724",
    url: "https://cs724-vu.netlify.app",
    available: false,
  },
  {
    name: "cs725",
    url: "https://cs725-vu.netlify.app",
    available: false,
  },
  {
    name: "cs726",
    url: "https://cs726-vu.netlify.app",
    available: false,
  },
  {
    name: "it430",
    url: "https://it430-vu.netlify.app",
    available: false,
  },
];
const Economics = [
  {
    name: "eco401",
    url: "https://eco401-vu.netlify.app",
    available: false,
  },
  {
    name: "eco402",
    url: "https://eco402-vu.netlify.app",
    available: false,
  },
  {
    name: "eco403",
    url: "https://eco403-vu.netlify.app",
    available: false,
  },
  {
    name: "eco404",
    url: "https://eco404-vu.netlify.app",
    available: false,
  },
  {
    name: "eco501",
    url: "https://eco501-vu.netlify.app",
    available: false,
  },
  {
    name: "eco601",
    url: "https://eco601-vu.netlify.app",
    available: false,
  },
  {
    name: "eco603",
    url: "https://eco603-vu.netlify.app",
    available: false,
  },
  {
    name: "eco606",
    url: "https://eco606-vu.netlify.app",
    available: false,
  },
  {
    name: "eco615",
    url: "https://eco615-vu.netlify.app",
    available: false,
  },
];
const English = [
  {
    name: "eng001",
    url: "https://eng001-vu.netlify.app",
    available: false,
  },
  {
    name: "eng101",
    url: "https://eng101-vu.netlify.app",
    available: false,
  },
  {
    name: "eng201",
    url: "https://eng201-vu.netlify.app",
    available: false,
  },
  {
    name: "eng301",
    url: "https://eng301-vu.netlify.app",
    available: false,
  },
  {
    name: "eng501",
    url: "https://eng501-vu.netlify.app",
    available: false,
  },
  {
    name: "eng502",
    url: "https://eng502-vu.netlify.app",
    available: false,
  },
  {
    name: "eng503",
    url: "https://eng503-vu.netlify.app",
    available: false,
  },
  {
    name: "eng504",
    url: "https://eng504-vu.netlify.app",
    available: false,
  },
  {
    name: "eng505",
    url: "https://eng505-vu.netlify.app",
    available: false,
  },
  {
    name: "eng506",
    url: "https://eng506-vu.netlify.app",
    available: false,
  },
  {
    name: "eng507",
    url: "https://eng507-vu.netlify.app",
    available: false,
  },
  {
    name: "eng508",
    url: "https://eng508-vu.netlify.app",
    available: false,
  },
  {
    name: "eng509",
    url: "https://eng509-vu.netlify.app",
    available: false,
  },
  {
    name: "eng510",
    url: "https://eng510-vu.netlify.app",
    available: false,
  },
  {
    name: "eng511",
    url: "https://eng511-vu.netlify.app",
    available: false,
  },
  {
    name: "eng512",
    url: "https://eng512-vu.netlify.app",
    available: false,
  },
  {
    name: "eng513",
    url: "https://eng513-vu.netlify.app",
    available: false,
  },
  {
    name: "eng515",
    url: "https://eng515-vu.netlify.app",
    available: false,
  },
  {
    name: "eng516",
    url: "https://eng516-vu.netlify.app",
    available: false,
  },
  {
    name: "eng518",
    url: "https://eng518-vu.netlify.app",
    available: false,
  },
  {
    name: "eng519",
    url: "https://eng519-vu.netlify.app",
    available: false,
  },
];
const Humanities_Distribution = [
  {
    name: "edu101",
    url: "https://edu101-vu.netlify.app",
    available: false,
  },
  {
    name: "edu201",
    url: "https://edu201-vu.netlify.app",
    available: false,
  },
  {
    name: "edu301",
    url: "https://edu301-vu.netlify.app",
    available: false,
  },
  {
    name: "edu303",
    url: "https://edu303-vu.netlify.app",
    available: false,
  },
  {
    name: "edu304",
    url: "https://edu304-vu.netlify.app",
    available: false,
  },
  {
    name: "edu305",
    url: "https://edu305-vu.netlify.app",
    available: false,
  },
  {
    name: "edu401",
    url: "https://edu401-vu.netlify.app",
    available: false,
  },
  {
    name: "edu402",
    url: "https://edu402-vu.netlify.app",
    available: false,
  },
  {
    name: "edu403",
    url: "https://edu403-vu.netlify.app",
    available: false,
  },
  {
    name: "edu404",
    url: "https://edu404-vu.netlify.app",
    available: false,
  },
  {
    name: "edu405",
    url: "https://edu405-vu.netlify.app",
    available: false,
  },
  {
    name: "edu406",
    url: "https://edu406-vu.netlify.app",
    available: false,
  },
  {
    name: "edu410",
    url: "https://edu410-vu.netlify.app",
    available: false,
  },
  {
    name: "edu411",
    url: "https://edu411-vu.netlify.app",
    available: false,
  },
  {
    name: "edu430",
    url: "https://edu430-vu.netlify.app",
    available: false,
  },
  {
    name: "edu431",
    url: "https://edu431-vu.netlify.app",
    available: false,
  },
  {
    name: "edu501",
    url: "https://edu501-vu.netlify.app",
    available: false,
  },
  {
    name: "edu505",
    url: "https://edu505-vu.netlify.app",
    available: false,
  },
  {
    name: "edu510",
    url: "https://edu510-vu.netlify.app",
    available: false,
  },
  {
    name: "edu512",
    url: "https://edu512-vu.netlify.app",
    available: false,
  },
  {
    name: "edu515",
    url: "https://edu515-vu.netlify.app",
    available: false,
  },
  {
    name: "edu516",
    url: "https://edu516-vu.netlify.app",
    available: false,
  },
  {
    name: "edu601",
    url: "https://edu601-vu.netlify.app",
    available: false,
  },
  {
    name: "edu602",
    url: "https://edu602-vu.netlify.app",
    available: false,
  },
  {
    name: "edu603",
    url: "https://edu603-vu.netlify.app",
    available: false,
  },
  {
    name: "edu604",
    url: "https://edu604-vu.netlify.app",
    available: false,
  },
  {
    name: "edu654",
    url: "https://edu654-vu.netlify.app",
    available: false,
  },
  {
    name: "edu705",
    url: "https://edu705-vu.netlify.app",
    available: false,
  },
  {
    name: "edu712",
    url: "https://edu712-vu.netlify.app",
    available: false,
  },
  {
    name: "eth202",
    url: "https://eth202-vu.netlify.app",
    available: false,
  },
  {
    name: "gsc101",
    url: "https://gsc101-vu.netlify.app",
    available: false,
  },
  {
    name: "gsc201",
    url: "https://gsc201-vu.netlify.app",
    available: false,
  },
  {
    name: "isl201",
    url: "https://isl201-vu.netlify.app",
    available: false,
  },
  {
    name: "pak301",
    url: "https://pak301-vu.netlify.app",
    available: false,
  },
  {
    name: "pak302",
    url: "https://pak302-vu.netlify.app",
    available: false,
  },
  {
    name: "urd101",
    url: "https://urd101-vu.netlify.app",
    available: false,
  },
];
const Law = [
  {
    name: "mgt611",
    url: "https://mgt611-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt612",
    url: "https://mgt612-vu.netlify.app",
    available: false,
  },
  {
    name: "psc401",
    url: "https://psc401-vu.netlify.app",
    available: false,
  },
];
const Management = [
  {
    name: "hrm613",
    url: "https://hrm613-vu.netlify.app",
    available: false,
  },
  {
    name: "hrm617",
    url: "https://hrm617-vu.netlify.app",
    available: false,
  },
  {
    name: "hrm624",
    url: "https://hrm624-vu.netlify.app",
    available: false,
  },
  {
    name: "hrm626",
    url: "https://hrm626-vu.netlify.app",
    available: false,
  },
  {
    name: "hrm627",
    url: "https://hrm627-vu.netlify.app",
    available: false,
  },
  {
    name: "hrm713",
    url: "https://hrm713-vu.netlify.app",
    available: false,
  },
  {
    name: "mgmt611",
    url: "https://mgmt611-vu.netlify.app",
    available: false,
  },
  {
    name: "mgmt614",
    url: "https://mgmt614-vu.netlify.app",
    available: false,
  },
  {
    name: "mgmt615",
    url: "https://mgmt615-vu.netlify.app",
    available: false,
  },
  {
    name: "mgmt617",
    url: "https://mgmt617-vu.netlify.app",
    available: false,
  },
  {
    name: "mgmt622",
    url: "https://mgmt622-vu.netlify.app",
    available: false,
  },
  {
    name: "mgmt623",
    url: "https://mgmt623-vu.netlify.app",
    available: false,
  },
  {
    name: "mgmt625",
    url: "https://mgmt625-vu.netlify.app",
    available: false,
  },
  {
    name: "mgmt627",
    url: "https://mgmt627-vu.netlify.app",
    available: false,
  },
  {
    name: "mgmt628",
    url: "https://mgmt628-vu.netlify.app",
    available: false,
  },
  {
    name: "mgmt629",
    url: "https://mgmt629-vu.netlify.app",
    available: false,
  },
  {
    name: "mgmt630",
    url: "https://mgmt630-vu.netlify.app",
    available: false,
  },
  {
    name: "mgmt631",
    url: "https://mgmt631-vu.netlify.app",
    available: false,
  },
  {
    name: "mgmt715",
    url: "https://mgmt715-vu.netlify.app",
    available: false,
  },
  {
    name: "mgmt727",
    url: "https://mgmt727-vu.netlify.app",
    available: false,
  },
  {
    name: "mgmt731",
    url: "https://mgmt731-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt111",
    url: "https://mgt111-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt211",
    url: "https://mgt211-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt501",
    url: "https://mgt501-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt502",
    url: "https://mgt502-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt503",
    url: "https://mgt503-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt504",
    url: "https://mgt504-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt510",
    url: "https://mgt510-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt513",
    url: "https://mgt513-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt520",
    url: "https://mgt520-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt522",
    url: "https://mgt522-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt601",
    url: "https://mgt601-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt602",
    url: "https://mgt602-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt603",
    url: "https://mgt603-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt610",
    url: "https://mgt610-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt613",
    url: "https://mgt613-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt621",
    url: "https://mgt621-vu.netlify.app",
    available: false,
  },
  {
    name: "mgt703",
    url: "https://mgt703-vu.netlify.app",
    available: false,
  },
  {
    name: "pad603",
    url: "https://pad603-vu.netlify.app",
    available: false,
  },
  {
    name: "psc201",
    url: "https://psc201-vu.netlify.app",
    available: false,
  },
];
const Marketing = [
  {
    name: "mgt301",
    url: "https://mgt301-vu.netlify.app",
    available: false,
  },
  {
    name: "mkt501",
    url: "https://mkt501-vu.netlify.app",
    available: false,
  },
  {
    name: "mkt529",
    url: "https://mkt529-vu.netlify.app",
    available: false,
  },
  {
    name: "mkt530",
    url: "https://mkt530-vu.netlify.app",
    available: false,
  },
  {
    name: "mkt603",
    url: "https://mkt603-vu.netlify.app",
    available: false,
  },
  {
    name: "mkt610",
    url: "https://mkt610-vu.netlify.app",
    available: false,
  },
  {
    name: "mkt611",
    url: "https://mkt611-vu.netlify.app",
    available: false,
  },
  {
    name: "mkt621",
    url: "https://mkt621-vu.netlify.app",
    available: false,
  },
  {
    name: "mkt624",
    url: "https://mkt624-vu.netlify.app",
    available: false,
  },
  {
    name: "mkt625",
    url: "https://mkt625-vu.netlify.app",
    available: false,
  },
  {
    name: "mkt626",
    url: "https://mkt626-vu.netlify.app",
    available: false,
  },
  {
    name: "mkt627",
    url: "https://mkt627-vu.netlify.app",
    available: false,
  },
  {
    name: "mkt630",
    url: "https://mkt630-vu.netlify.app",
    available: false,
  },
];
const Mass_Communication = [
  {
    name: "mcd401",
    url: "https://mcd401-vu.netlify.app",
    available: false,
  },
  {
    name: "mcd402",
    url: "https://mcd402-vu.netlify.app",
    available: false,
  },
  {
    name: "mcd403",
    url: "https://mcd403-vu.netlify.app",
    available: false,
  },
  {
    name: "mcd404",
    url: "https://mcd404-vu.netlify.app",
    available: false,
  },
  {
    name: "mcd501",
    url: "https://mcd501-vu.netlify.app",
    available: false,
  },
  {
    name: "mcd502",
    url: "https://mcd502-vu.netlify.app",
    available: false,
  },
  {
    name: "mcd503",
    url: "https://mcd503-vu.netlify.app",
    available: false,
  },
  {
    name: "mcd504",
    url: "https://mcd504-vu.netlify.app",
    available: false,
  },
  {
    name: "mcm101",
    url: "https://mcm101-vu.netlify.app",
    available: false,
  },
  {
    name: "mcm301",
    url: "https://mcm301-vu.netlify.app",
    available: false,
  },
  {
    name: "mcm304",
    url: "https://mcm304-vu.netlify.app",
    available: false,
  },
  {
    name: "mcm310",
    url: "https://mcm310-vu.netlify.app",
    available: false,
  },
  {
    name: "mcm311",
    url: "https://mcm311-vu.netlify.app",
    available: false,
  },
  {
    name: "mcm401",
    url: "https://mcm401-vu.netlify.app",
    available: false,
  },
  {
    name: "mcm404",
    url: "https://mcm404-vu.netlify.app",
    available: false,
  },
  {
    name: "mcm411",
    url: "https://mcm411-vu.netlify.app",
    available: false,
  },
  {
    name: "mcm501",
    url: "https://mcm501-vu.netlify.app",
    available: false,
  },
  {
    name: "mcm511",
    url: "https://mcm511-vu.netlify.app",
    available: false,
  },
  {
    name: "mcm514",
    url: "https://mcm514-vu.netlify.app",
    available: false,
  },
  {
    name: "mcm515",
    url: "https://mcm515-vu.netlify.app",
    available: false,
  },
  {
    name: "mcm516",
    url: "https://mcm516-vu.netlify.app",
    available: false,
  },
  {
    name: "mcm604",
    url: "https://mcm604-vu.netlify.app",
    available: false,
  },
  {
    name: "mcm610",
    url: "https://mcm610-vu.netlify.app",
    available: false,
  },
];
const Mathematics = [
  {
    name: "mth001",
    url: "https://mth001-vu.netlify.app",
    available: false,
  },
  {
    name: "mth100",
    url: "https://mth100-vu.netlify.app",
    available: false,
  },
  {
    name: "mth101",
    url: "https://mth101-vu.netlify.app",
    available: true,
  },
  {
    name: "mth102",
    url: "https://mth102-vu.netlify.app",
    available: false,
  },
  {
    name: "mth201",
    url: "https://mth201-vu.netlify.app",
    available: false,
  },
  {
    name: "mth202",
    url: "https://mth202-vu.netlify.app",
    available: false,
  },
  {
    name: "mth301",
    url: "https://mth301-vu.netlify.app",
    available: false,
  },
  {
    name: "mth302",
    url: "https://mth302-vu.netlify.app",
    available: false,
  },
  {
    name: "mth303",
    url: "https://mth303-vu.netlify.app",
    available: false,
  },
  {
    name: "mth401",
    url: "https://mth401-vu.netlify.app",
    available: false,
  },
  {
    name: "mth501",
    url: "https://mth501-vu.netlify.app",
    available: false,
  },
  {
    name: "mth601",
    url: "https://mth601-vu.netlify.app",
    available: false,
  },
  {
    name: "mth603",
    url: "https://mth603-vu.netlify.app",
    available: false,
  },
  {
    name: "mth621",
    url: "https://mth621-vu.netlify.app",
    available: false,
  },
  {
    name: "mth622",
    url: "https://mth622-vu.netlify.app",
    available: false,
  },
  {
    name: "mth631",
    url: "https://mth631-vu.netlify.app",
    available: false,
  },
  {
    name: "mth632",
    url: "https://mth632-vu.netlify.app",
    available: false,
  },
  {
    name: "mth633",
    url: "https://mth633-vu.netlify.app",
    available: false,
  },
  {
    name: "mth634",
    url: "https://mth634-vu.netlify.app",
    available: false,
  },
  {
    name: "mth641",
    url: "https://mth641-vu.netlify.app",
    available: false,
  },
  {
    name: "mth701",
    url: "https://mth701-vu.netlify.app",
    available: false,
  },
  {
    name: "mth706",
    url: "https://mth706-vu.netlify.app",
    available: false,
  },
  {
    name: "mth7123",
    url: "https://mth7123-vu.netlify.app",
    available: false,
  },
  {
    name: "mth718",
    url: "https://mth718-vu.netlify.app",
    available: false,
  },
  {
    name: "mth721",
    url: "https://mth721-vu.netlify.app",
    available: false,
  },
  {
    name: "sta100",
    url: "https://sta100-vu.netlify.app",
    available: false,
  },
];
const Molecular_Biology = [
  {
    name: "bio201",
    url: "https://bio201-vu.netlify.app",
    available: false,
  },
  {
    name: "bio203",
    url: "https://bio203-vu.netlify.app",
    available: false,
  },
  {
    name: "bio302",
    url: "https://bio302-vu.netlify.app",
    available: false,
  },
  {
    name: "bio731",
    url: "https://bio731-vu.netlify.app",
    available: false,
  },
  {
    name: "bio732",
    url: "https://bio732-vu.netlify.app",
    available: false,
  },
  {
    name: "bt302",
    url: "https://bt302-vu.netlify.app",
    available: false,
  },
  {
    name: "bt504",
    url: "https://bt504-vu.netlify.app",
    available: false,
  },
  {
    name: "bt733",
    url: "https://bt733-vu.netlify.app",
    available: false,
  },
  {
    name: "zoo505",
    url: "https://zoo505-vu.netlify.app",
    available: false,
  },
];
const Physics = [
  {
    name: "phy101",
    url: "https://phy101-vu.netlify.app",
    available: true,
  },
  {
    name: "phy301",
    url: "https://phy301-vu.netlify.app",
    available: false,
  },
];
const Power_System = [
  {
    name: "sec001",
    url: "https://sec001-vu.netlify.app",
    available: false,
  },
];
const Probability_Statistics = [
  {
    name: "sta301",
    url: "https://sta301-vu.netlify.app",
    available: false,
  },
  {
    name: "sta621",
    url: "https://sta621-vu.netlify.app",
    available: false,
  },
  {
    name: "sta630",
    url: "https://sta630-vu.netlify.app",
    available: false,
  },
  {
    name: "sta631",
    url: "https://sta631-vu.netlify.app",
    available: false,
  },
  {
    name: "sta632",
    url: "https://sta632-vu.netlify.app",
    available: false,
  },
  {
    name: "sta642",
    url: "https://sta642-vu.netlify.app",
    available: false,
  },
  {
    name: "sta643",
    url: "https://sta643-vu.netlify.app",
    available: false,
  },
  {
    name: "sta644",
    url: "https://sta644-vu.netlify.app",
    available: false,
  },
  {
    name: "sta730",
    url: "https://sta730-vu.netlify.app",
    available: false,
  },
];
const Psychology = [
  {
    name: "psy101",
    url: "https://psy101-vu.netlify.app",
    available: false,
  },
  {
    name: "psy401",
    url: "https://psy401-vu.netlify.app",
    available: false,
  },
  {
    name: "psy403",
    url: "https://psy403-vu.netlify.app",
    available: false,
  },
  {
    name: "psy404",
    url: "https://psy404-vu.netlify.app",
    available: false,
  },
  {
    name: "psy405",
    url: "https://psy405-vu.netlify.app",
    available: false,
  },
  {
    name: "psy406",
    url: "https://psy406-vu.netlify.app",
    available: false,
  },
  {
    name: "psy407",
    url: "https://psy407-vu.netlify.app",
    available: false,
  },
  {
    name: "psy408",
    url: "https://psy408-vu.netlify.app",
    available: false,
  },
  {
    name: "psy409",
    url: "https://psy409-vu.netlify.app",
    available: false,
  },
  {
    name: "psy502",
    url: "https://psy502-vu.netlify.app",
    available: false,
  },
  {
    name: "psy504",
    url: "https://psy504-vu.netlify.app",
    available: false,
  },
  {
    name: "psy510",
    url: "https://psy510-vu.netlify.app",
    available: false,
  },
  {
    name: "psy511",
    url: "https://psy511-vu.netlify.app",
    available: false,
  },
  {
    name: "psy512",
    url: "https://psy512-vu.netlify.app",
    available: false,
  },
  {
    name: "psy513",
    url: "https://psy513-vu.netlify.app",
    available: false,
  },
  {
    name: "psy514",
    url: "https://psy514-vu.netlify.app",
    available: false,
  },
  {
    name: "psy610",
    url: "https://psy610-vu.netlify.app",
    available: false,
  },
  {
    name: "psy631",
    url: "https://psy631-vu.netlify.app",
    available: false,
  },
  {
    name: "psy632",
    url: "https://psy632-vu.netlify.app",
    available: false,
  },
];
const Sociology = [
  {
    name: "soc101",
    url: "https://soc101-vu.netlify.app",
    available: false,
  },
  {
    name: "soc301",
    url: "https://soc301-vu.netlify.app",
    available: false,
  },
  {
    name: "soc302",
    url: "https://soc302-vu.netlify.app",
    available: false,
  },
  {
    name: "soc401",
    url: "https://soc401-vu.netlify.app",
    available: false,
  },
  {
    name: "soc402",
    url: "https://soc402-vu.netlify.app",
    available: false,
  },
  {
    name: "soc403",
    url: "https://soc403-vu.netlify.app",
    available: false,
  },
  {
    name: "soc601",
    url: "https://soc601-vu.netlify.app",
    available: false,
  },
  {
    name: "soc603",
    url: "https://soc603-vu.netlify.app",
    available: false,
  },
];
const Zoology = [
  {
    name: "bio733",
    url: "https://bio733-vu.netlify.app",
    available: false,
  },
  {
    name: "zoo301",
    url: "https://zoo301-vu.netlify.app",
    available: false,
  },
  {
    name: "zoo502",
    url: "https://zoo502-vu.netlify.app",
    available: false,
  },
  {
    name: "zoo503",
    url: "https://zoo503-vu.netlify.app",
    available: false,
  },
  {
    name: "zoo504",
    url: "https://zoo504-vu.netlify.app",
    available: false,
  },
];

const courses = [
  ...Accounting_Banking_Finance,
  ...Bioinformatics,
  ...Biotechnology,
  ...Computer_Science_Information_Technology,
  ...Economics,
  ...English,
  ...Humanities_Distribution,
  ...Law,
  ...Management,
  ...Marketing,
  ...Mass_Communication,
  ...Mathematics,
  ...Molecular_Biology,
  ...Physics,
  ...Power_System,
  ...Probability_Statistics,
  ...Psychology,
  ...Sociology,
  ...Zoology,
];
function App() {
  const [coursesToDisplay, setCoursesToDisplay] = useState(courses);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    console.log(
      "all courses: ",
      courses.length,
      courses.map((c) => c.name)
    );
  }, []);
  return (
    <div className="container mx-auto   ">
      <NavBar />
      <MainDescription />
      <div className="prose">
        <h1 className="mt-6 md:mt-10">List Of Available Notes:</h1>
      </div>
      <div className="mt-4 md:mt-8 md:px-24 p-4">
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setCoursesToDisplay(
                courses.filter((d) =>
                  d.name.toLowerCase().includes(e.target.value.toLowerCase())
                )
              );
            }}
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="flex justify-center md:justify-start flex-wrap gap-4 mt-2 md:mt-4 md:px-24 p-4">
        {coursesToDisplay
          // sort by available first
          .sort((a, b) =>
            a.available === b.available ? 0 : a.available ? -1 : 1
          )
          .map((d) => {
            return (
              <button className="btn btn-primary mb-2 " disabled={!d.available}>
                <a target="_blank" href={d.url}>
                  {d.name.toUpperCase()}
                </a>
              </button>
            );
          })}
      </div>
    </div>
  );
}

export default App;

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Virtual University Short Notes</a>
      </div>
      <div className="flex-none">
        <div className="">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img src="correct-vu-notes-logo-removebg-preview.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainDescription = () => {
  return (
    <div className="prose mx-auto p-2 md:max-w-[80ch]">
      <h3>
        This is a Hobby Project, If you like these notes feel free to share it
        with your friends. These are high quality summarized notes you can use
        to cover up your syllabus in no time.
      </h3>
    </div>
  );
};
