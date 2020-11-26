const stockList = [
  {
    "ticker": "A",
    "exchange": "NYSE",
    "name": "Agilent Technologies Inc."
  },
  {
    "ticker": "AA",
    "exchange": "NYSE",
    "name": "Alcoa Corp."
  },
  {
    "ticker": "AAAU",
    "exchange": "NYSE ARCA",
    "name": "Perth Mint Physical Gold ETF"
  },
  {
    "ticker": "AACG",
    "exchange": "NASDAQ",
    "name": "ATA Creativity Global Sponsored ADR"
  },
  {
    "ticker": "AACQU",
    "exchange": "NASDAQ",
    "name": "Artius Acquisition Inc. Units Cons of 1 Shs A + 1/3 Wt 13.07.25"
  },
  {
    "ticker": "AADR",
    "exchange": "NYSE ARCA",
    "name": "AdvisorShares Dorsey Wright ADR ETF"
  },
  {
    "ticker": "AAL",
    "exchange": "NASDAQ",
    "name": "American Airlines Group Inc."
  },
  {
    "ticker": "AAMC",
    "exchange": "NYSE American",
    "name": "Altisource Asset Management Corp."
  },
  {
    "ticker": "AAME",
    "exchange": "NASDAQ",
    "name": "Atlantic American Corporation"
  },
  {
    "ticker": "AAN",
    "exchange": "NYSE",
    "name": "Aaron's Inc."
  },
  {
    "ticker": "AAOI",
    "exchange": "NASDAQ",
    "name": "Applied Optoelectronics Inc."
  },
  {
    "ticker": "AAON",
    "exchange": "NASDAQ",
    "name": "AAON Inc."
  },
  {
    "ticker": "AAP",
    "exchange": "NYSE",
    "name": "Advance Auto Parts Inc."
  },
  {
    "ticker": "AAPL",
    "exchange": "NASDAQ",
    "name": "Apple Inc."
  },
  {
    "ticker": "AAT",
    "exchange": "NYSE",
    "name": "American Assets Trust Inc."
  },
  {
    "ticker": "AAU",
    "exchange": "NYSE American",
    "name": "Almaden Minerals Ltd."
  },
  {
    "ticker": "AAWW",
    "exchange": "NASDAQ",
    "name": "Atlas Air Worldwide Holdings Inc."
  },
  {
    "ticker": "AAXJ",
    "exchange": "NASDAQ",
    "name": "iShares MSCI All Country Asia ex Japan ETF"
  },
  {
    "ticker": "AAXN",
    "exchange": "NASDAQ",
    "name": "Axon Enterprise Inc"
  },
  {
    "ticker": "AB",
    "exchange": "NYSE",
    "name": "AllianceBernstein Holding L.P."
  },
  {
    "ticker": "ABB",
    "exchange": "NYSE",
    "name": "ABB Ltd. Sponsored ADR"
  },
  {
    "ticker": "ABBV",
    "exchange": "NYSE",
    "name": "AbbVie Inc."
  },
  {
    "ticker": "ABC",
    "exchange": "NYSE",
    "name": "AmerisourceBergen Corporation"
  },
  {
    "ticker": "ABCB",
    "exchange": "NASDAQ",
    "name": "Ameris Bancorp"
  },
  {
    "ticker": "ABEO",
    "exchange": "NASDAQ",
    "name": "Abeona Therapeutics Inc."
  },
  {
    "ticker": "ABEQ",
    "exchange": "NYSE ARCA",
    "name": "Absolute Core Strategy ETF"
  },
  {
    "ticker": "ABEV",
    "exchange": "NYSE",
    "name": "Ambev SA Sponsored ADR"
  },
  {
    "ticker": "ABG",
    "exchange": "NYSE",
    "name": "Asbury Automotive Group Inc."
  },
  {
    "ticker": "ABIO",
    "exchange": "NASDAQ",
    "name": "ARCA biopharma Inc."
  },
  {
    "ticker": "ABM",
    "exchange": "NYSE",
    "name": "ABM Industries Incorporated"
  },
  {
    "ticker": "ABMD",
    "exchange": "NASDAQ",
    "name": "ABIOMED Inc."
  },
  {
    "ticker": "ABR",
    "exchange": "NYSE",
    "name": "Arbor Realty Trust Inc."
  },
  {
    "ticker": "ABR-A",
    "exchange": "NYSE",
    "name": "Arbor Realty Trust Inc 8.25 % Cum Red Pfd Registered Series A"
  },
  {
    "ticker": "ABR-B",
    "exchange": "NYSE",
    "name": "Arbor Realty Trust Inc 7.75 % Cum Red Pfd Registered Series B"
  },
  {
    "ticker": "ABR-C",
    "exchange": "NYSE",
    "name": "Arbor Realty Trust Inc 8.5 % Cum Red Pfd Registered Series C"
  },
  {
    "ticker": "ABT",
    "exchange": "NYSE",
    "name": "Abbott Laboratories"
  },
  {
    "ticker": "ABTX",
    "exchange": "NASDAQ",
    "name": "Allegiance Bancshares Inc."
  },
  {
    "ticker": "ABUS",
    "exchange": "NASDAQ",
    "name": "Arbutus Biopharma Corporation"
  },
  {
    "ticker": "AC",
    "exchange": "NYSE",
    "name": "Associated Capital Group Inc. Class A"
  },
  {
    "ticker": "ACA",
    "exchange": "NYSE",
    "name": "Arcosa Inc"
  },
  {
    "ticker": "ACAD",
    "exchange": "NASDAQ",
    "name": "ACADIA Pharmaceuticals Inc."
  },
  {
    "ticker": "ACAM",
    "exchange": "NASDAQ",
    "name": "Acamar Partners Acquisition Corp. Class A"
  },
  {
    "ticker": "ACAMU",
    "exchange": "NASDAQ",
    "name": "Acamar Partners Acquisition Corp. Units Cons of 1 Sh -A- + 1/3 Wt 30.12.25"
  },
  {
    "ticker": "ACAMW",
    "exchange": "NASDAQ",
    "name": "Acamar Partners Acquisition Corp Warrant -30.12.25 on Acamr Ptrs Acqn"
  },
  {
    "ticker": "ACB",
    "exchange": "NYSE",
    "name": "Aurora Cannabis Inc."
  },
  {
    "ticker": "ACBI",
    "exchange": "NASDAQ",
    "name": "Atlantic Capital Bancshares Inc."
  },
  {
    "ticker": "ACC",
    "exchange": "NYSE",
    "name": "American Campus Communities Inc."
  },
  {
    "ticker": "ACCD",
    "exchange": "NASDAQ",
    "name": "Accolade Inc."
  },
  {
    "ticker": "ACCO",
    "exchange": "NYSE",
    "name": "ACCO Brands Corporation"
  },
  {
    "ticker": "ACEL",
    "exchange": "NYSE",
    "name": "Accel Entertainment Inc. Class A"
  },
  {
    "ticker": "ACER",
    "exchange": "NASDAQ",
    "name": "Acer Therapeutics Inc."
  },
  {
    "ticker": "ACES",
    "exchange": "Cboe BZX",
    "name": "ALPS Clean Energy ETF"
  },
  {
    "ticker": "ACEVU",
    "exchange": "NASDAQ",
    "name": "ACE Convergence Acquisition Corp. Units Cons of 1 Shs A + 1/2 Wt"
  },
  {
    "ticker": "ACGL",
    "exchange": "NASDAQ",
    "name": "Arch Capital Group Ltd."
  },
  {
    "ticker": "ACGLO",
    "exchange": "NASDAQ",
    "name": "Arch Capital Group Ltd. Deposit Shs Repr 1/1000th 5.45 % Non-Cum Pfd Shs Series F"
  },
  {
    "ticker": "ACGLP",
    "exchange": "NASDAQ",
    "name": "Arch Capital Group Ltd Deposit Repr 1/1000th Non-Cum Pfd Series E"
  },
  {
    "ticker": "ACH",
    "exchange": "NYSE",
    "name": "Aluminum Corporation of China Limited Sponsored ADR Class H"
  },
  {
    "ticker": "ACHC",
    "exchange": "NASDAQ",
    "name": "Acadia Healthcare Company Inc."
  },
  {
    "ticker": "ACHV",
    "exchange": "NASDAQ",
    "name": "Achieve Life Sciences Inc."
  },
  {
    "ticker": "ACI",
    "exchange": "NYSE",
    "name": "Albertsons Companies Inc. Class A"
  },
  {
    "ticker": "ACIA",
    "exchange": "NASDAQ",
    "name": "Acacia Communications Inc."
  },
  {
    "ticker": "ACIO",
    "exchange": "Cboe BZX",
    "name": "Aptus Collared Income Opportunity ETF"
  },
  {
    "ticker": "ACIU",
    "exchange": "NASDAQ",
    "name": "AC Immune SA"
  },
  {
    "ticker": "ACIW",
    "exchange": "NASDAQ",
    "name": "ACI Worldwide Inc."
  },
  {
    "ticker": "ACLS",
    "exchange": "NASDAQ",
    "name": "Axcelis Technologies Inc."
  },
  {
    "ticker": "ACM",
    "exchange": "NYSE",
    "name": "AECOM"
  },
  {
    "ticker": "ACMR",
    "exchange": "NASDAQ",
    "name": "ACM Research Inc. Class A"
  },
  {
    "ticker": "ACN",
    "exchange": "NYSE",
    "name": "Accenture Plc Class A"
  },
  {
    "ticker": "ACNB",
    "exchange": "NASDAQ",
    "name": "ACNB Corporation"
  },
  {
    "ticker": "ACND=",
    "exchange": "NYSE",
    "name": "Ascendant Digital Acquisition Corp. Units Cons of 1 Shs A + 1/2 Wt"
  },
  {
    "ticker": "ACOR",
    "exchange": "NASDAQ",
    "name": "Acorda Therapeutics Inc."
  },
  {
    "ticker": "ACP",
    "exchange": "NYSE",
    "name": "Aberdeen Income Credit Strategies Fund of Benef Interest"
  },
  {
    "ticker": "ACRE",
    "exchange": "NYSE",
    "name": "Ares Commercial Real Estate Corporation"
  },
  {
    "ticker": "ACRS",
    "exchange": "NASDAQ",
    "name": "Aclaris Therapeutics Inc."
  },
  {
    "ticker": "ACRX",
    "exchange": "NASDAQ",
    "name": "AcelRx Pharmaceuticals Inc."
  },
  {
    "ticker": "ACSG",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers MSCI ACWI ex USA ESG Leaders Equity ETF"
  },
  {
    "ticker": "ACSI",
    "exchange": "Cboe BZX",
    "name": "American Customer Satisfaction ETF"
  },
  {
    "ticker": "ACST",
    "exchange": "NASDAQ",
    "name": "Acasti Pharma Inc. Class A"
  },
  {
    "ticker": "ACT",
    "exchange": "NASDAQ",
    "name": "AdvisorShares Vice ETF"
  },
  {
    "ticker": "ACTG",
    "exchange": "NASDAQ",
    "name": "Acacia Research Corporation"
  },
  {
    "ticker": "ACU",
    "exchange": "NYSE American",
    "name": "Acme United Corporation"
  },
  {
    "ticker": "ACV",
    "exchange": "NYSE",
    "name": "AllianzGI Diversified Income & Convertible Fund"
  },
  {
    "ticker": "ACWF",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Global Multifactor ETF"
  },
  {
    "ticker": "ACWI",
    "exchange": "NASDAQ",
    "name": "iShares MSCI ACWI ETF"
  },
  {
    "ticker": "ACWV",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI Global Min Vol Factor ETF"
  },
  {
    "ticker": "ACWX",
    "exchange": "NASDAQ",
    "name": "iShares MSCI ACWI ex U.S. ETF"
  },
  {
    "ticker": "ACY",
    "exchange": "NYSE American",
    "name": "AeroCentury Corp."
  },
  {
    "ticker": "ADAP",
    "exchange": "NASDAQ",
    "name": "Adaptimmune Therapeutics PLC Sponsored ADR"
  },
  {
    "ticker": "ADBE",
    "exchange": "NASDAQ",
    "name": "Adobe Inc."
  },
  {
    "ticker": "ADC",
    "exchange": "NYSE",
    "name": "Agree Realty Corporation"
  },
  {
    "ticker": "ADCT",
    "exchange": "NYSE",
    "name": "ADC Therapeutics Ltd"
  },
  {
    "ticker": "ADES",
    "exchange": "NASDAQ",
    "name": "Advanced Emissions Solutions Inc."
  },
  {
    "ticker": "ADFI",
    "exchange": "Cboe BZX",
    "name": "Anfield Dynamic Fixed Income ETF"
  },
  {
    "ticker": "ADI",
    "exchange": "NASDAQ",
    "name": "Analog Devices Inc."
  },
  {
    "ticker": "ADIL",
    "exchange": "NASDAQ",
    "name": "Adial Pharmaceuticals Inc."
  },
  {
    "ticker": "ADILW",
    "exchange": "NASDAQ",
    "name": "Adial Pharmaceuticals Inc Warrant 2018-31.07.23 on Adial Phrmctcals"
  },
  {
    "ticker": "ADM",
    "exchange": "NYSE",
    "name": "Archer-Daniels-Midland Company"
  },
  {
    "ticker": "ADMA",
    "exchange": "NASDAQ",
    "name": "ADMA Biologics Inc."
  },
  {
    "ticker": "ADME",
    "exchange": "Cboe BZX",
    "name": "Aptus Drawdown Managed Equity ETF"
  },
  {
    "ticker": "ADMP",
    "exchange": "NASDAQ",
    "name": "Adamis Pharmaceuticals Corporation"
  },
  {
    "ticker": "ADMS",
    "exchange": "NASDAQ",
    "name": "Adamas Pharmaceuticals Inc."
  },
  {
    "ticker": "ADNT",
    "exchange": "NYSE",
    "name": "Adient plc"
  },
  {
    "ticker": "ADP",
    "exchange": "NASDAQ",
    "name": "Automatic Data Processing Inc."
  },
  {
    "ticker": "ADPT",
    "exchange": "NASDAQ",
    "name": "Adaptive Biotechnologies Corp."
  },
  {
    "ticker": "ADRE",
    "exchange": "NASDAQ",
    "name": "Invesco BLDRS Emerging Markets 50 ADR Index Fund"
  },
  {
    "ticker": "ADRO",
    "exchange": "NASDAQ",
    "name": "Aduro BioTech Inc."
  },
  {
    "ticker": "ADS",
    "exchange": "NYSE",
    "name": "Alliance Data Systems Corporation"
  },
  {
    "ticker": "ADSK",
    "exchange": "NASDAQ",
    "name": "Autodesk Inc."
  },
  {
    "ticker": "ADSW",
    "exchange": "NYSE",
    "name": "Advanced Disposal Services Inc."
  },
  {
    "ticker": "ADT",
    "exchange": "NYSE",
    "name": "ADT Inc."
  },
  {
    "ticker": "ADTN",
    "exchange": "NASDAQ",
    "name": "ADTRAN Inc."
  },
  {
    "ticker": "ADTX",
    "exchange": "NASDAQ",
    "name": "ADiTx Therapeutics Inc."
  },
  {
    "ticker": "ADUS",
    "exchange": "NASDAQ",
    "name": "Addus HomeCare Corporation"
  },
  {
    "ticker": "ADVM",
    "exchange": "NASDAQ",
    "name": "Adverum Biotechnologies Inc"
  },
  {
    "ticker": "ADX",
    "exchange": "NYSE",
    "name": "Adams Diversified Equity Fund Inc Shs"
  },
  {
    "ticker": "ADXN",
    "exchange": "NASDAQ",
    "name": "Addex Therapeutics Ltd Sponsored ADR"
  },
  {
    "ticker": "ADXS",
    "exchange": "NASDAQ",
    "name": "Advaxis Inc."
  },
  {
    "ticker": "AE",
    "exchange": "NYSE American",
    "name": "Adams Resources & Energy Inc."
  },
  {
    "ticker": "AEB",
    "exchange": "NYSE",
    "name": "Aegon NV Floating Rate Perpetual Capital Security 2005 Without fixed maturity"
  },
  {
    "ticker": "AEE",
    "exchange": "NYSE",
    "name": "Ameren Corporation"
  },
  {
    "ticker": "AEF",
    "exchange": "NYSE American",
    "name": "Aberdeen Emerging Markets Equity Income Fund Inc."
  },
  {
    "ticker": "AEFC",
    "exchange": "NYSE",
    "name": "AEGON Funding Company LLC 5.1 % Notes 2019-15.12.49 Gtd Global"
  },
  {
    "ticker": "AEG",
    "exchange": "NYSE",
    "name": "Aegon NV ADR"
  },
  {
    "ticker": "AEGN",
    "exchange": "NASDAQ",
    "name": "Aegion Corporation"
  },
  {
    "ticker": "AEHR",
    "exchange": "NASDAQ",
    "name": "Aehr Test Systems"
  },
  {
    "ticker": "AEIS",
    "exchange": "NASDAQ",
    "name": "Advanced Energy Industries Inc."
  },
  {
    "ticker": "AEL",
    "exchange": "NYSE",
    "name": "American Equity Investment Life Holding Company"
  },
  {
    "ticker": "AEL-A",
    "exchange": "NYSE",
    "name": "American Equity Investment Life Holding Co Depositary Shs Repr 1/1000th Non-Cum Red Perp Pfd Registered Shs Ser A"
  },
  {
    "ticker": "AEL-B",
    "exchange": "NYSE",
    "name": "American Equity Investment Life Holding Co Depositary Shs Repr 1/1000th Non-Cum Red Pfd Registered Shs Series B"
  },
  {
    "ticker": "AEM",
    "exchange": "NYSE",
    "name": "Agnico Eagle Mines Limited"
  },
  {
    "ticker": "AEMD",
    "exchange": "NASDAQ",
    "name": "Aethlon Medical Inc."
  },
  {
    "ticker": "AEO",
    "exchange": "NYSE",
    "name": "American Eagle Outfitters Inc."
  },
  {
    "ticker": "AEP",
    "exchange": "NYSE",
    "name": "American Electric Power Company Inc."
  },
  {
    "ticker": "AEP-B",
    "exchange": "NYSE",
    "name": "American Electric Power Company Inc. Equity Units Cons of USD 50 Nom Nts 15.03.24 + 1 PC 15.03.22"
  },
  {
    "ticker": "AEP-C",
    "exchange": "NYSE",
    "name": "American Electric Power Company Inc. Equity Units Cons of USD 50 Nom Nts 15.08.25 + 1 PC 15.08.23"
  },
  {
    "ticker": "AER",
    "exchange": "NYSE",
    "name": "AerCap Holdings NV"
  },
  {
    "ticker": "AERI",
    "exchange": "NASDAQ",
    "name": "Aerie Pharmaceuticals Inc."
  },
  {
    "ticker": "AES",
    "exchange": "NYSE",
    "name": "AES Corporation"
  },
  {
    "ticker": "AESE",
    "exchange": "NASDAQ",
    "name": "Allied Esports Entertainment Inc."
  },
  {
    "ticker": "AESR",
    "exchange": "Cboe BZX",
    "name": "Anfield U.S. Equity Sector Rotation ETF"
  },
  {
    "ticker": "AEY",
    "exchange": "NASDAQ",
    "name": "ADDvantage Technologies Group Inc."
  },
  {
    "ticker": "AEYE",
    "exchange": "NASDAQ",
    "name": "AudioEye Inc."
  },
  {
    "ticker": "AEZS",
    "exchange": "NASDAQ",
    "name": "Aeterna Zentaris Inc."
  },
  {
    "ticker": "AFB",
    "exchange": "NYSE",
    "name": "AllianceBernstein National Municipal Income FundInc National Municipal Income Fund"
  },
  {
    "ticker": "AFC",
    "exchange": "NYSE",
    "name": "Ares Capital Corporation 6.875 % Notes 2007-15.4.47 Global"
  },
  {
    "ticker": "AFG",
    "exchange": "NYSE",
    "name": "American Financial Group Inc."
  },
  {
    "ticker": "AFGB",
    "exchange": "NYSE",
    "name": "American Financial Group Inc. 5.875 % Debentures 2019-30.03.59 Global"
  },
  {
    "ticker": "AFGC",
    "exchange": "NYSE",
    "name": "American Financial Group Inc. 5.125 % Debentures 2019-15.12.59 Global"
  },
  {
    "ticker": "AFGD",
    "exchange": "NYSE",
    "name": "American Financial Group Inc (New) Debentures 2020-01.06.60 Global"
  },
  {
    "ticker": "AFGH",
    "exchange": "NYSE",
    "name": "American Financial Group Inc (New) 6 % Debentures 2015-15.11.55"
  },
  {
    "ticker": "AFH",
    "exchange": "NASDAQ",
    "name": "Atlas Financial Holdings Inc."
  },
  {
    "ticker": "AFI",
    "exchange": "NYSE",
    "name": "Armstrong Flooring Inc."
  },
  {
    "ticker": "AFIB",
    "exchange": "NASDAQ",
    "name": "Acutus Medical Inc."
  },
  {
    "ticker": "AFIF",
    "exchange": "Cboe BZX",
    "name": "Anfield Universal Fixed Income ETF"
  },
  {
    "ticker": "AFIN",
    "exchange": "NASDAQ",
    "name": "American Finance Trust Inc."
  },
  {
    "ticker": "AFINP",
    "exchange": "NASDAQ",
    "name": "American Finance Trust Inc. 7.5 % Cum Conv Perp Red Pfd Registered Shs Series A"
  },
  {
    "ticker": "AFK",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Africa Index ETF"
  },
  {
    "ticker": "AFL",
    "exchange": "NYSE",
    "name": "Aflac Incorporated"
  },
  {
    "ticker": "AFLG",
    "exchange": "NYSE ARCA",
    "name": "First Trust Active Factor Large Cap ETF"
  },
  {
    "ticker": "AFMC",
    "exchange": "NYSE ARCA",
    "name": "First Trust Active Factor Mid Cap ETF"
  },
  {
    "ticker": "AFMD",
    "exchange": "NASDAQ",
    "name": "Affimed N.V."
  },
  {
    "ticker": "AFSM",
    "exchange": "NYSE ARCA",
    "name": "First Trust Active Factor Small Cap ETF"
  },
  {
    "ticker": "AFT",
    "exchange": "NYSE",
    "name": "Apollo Senior Floating Rate Fund Inc"
  },
  {
    "ticker": "AFTY",
    "exchange": "NYSE ARCA",
    "name": "Pacer CSOP FTSE China A50 ETF"
  },
  {
    "ticker": "AFYA",
    "exchange": "NASDAQ",
    "name": "Afya Limited Class A"
  },
  {
    "ticker": "AG",
    "exchange": "NYSE",
    "name": "First Majestic Silver Corp."
  },
  {
    "ticker": "AGBA",
    "exchange": "NASDAQ",
    "name": "AGBA Acquisition Ltd."
  },
  {
    "ticker": "AGBAR",
    "exchange": "NASDAQ",
    "name": "AGBA Acquisition Ltd Rights For Shares"
  },
  {
    "ticker": "AGBAU",
    "exchange": "NASDAQ",
    "name": "AGBA Acquisition Ltd. Units Cons of 1 Shs + 1/2 Wt + 1/10 Rg"
  },
  {
    "ticker": "AGBAW",
    "exchange": "NASDAQ",
    "name": "AGBA Acquisition Ltd Warrant - on AGBA"
  },
  {
    "ticker": "AGCO",
    "exchange": "NYSE",
    "name": "AGCO Corporation"
  },
  {
    "ticker": "AGD",
    "exchange": "NYSE",
    "name": "Aberdeen Global Dynamic Dividend Fund of Benef Interest"
  },
  {
    "ticker": "AGE",
    "exchange": "NYSE American",
    "name": "AgeX Therapeutics Inc."
  },
  {
    "ticker": "AGEN",
    "exchange": "NASDAQ",
    "name": "Agenus Inc."
  },
  {
    "ticker": "AGFS",
    "exchange": "NASDAQ",
    "name": "AgroFresh Solutions Inc."
  },
  {
    "ticker": "AGG",
    "exchange": "NYSE ARCA",
    "name": "iShares Core U.S. Aggregate Bond ETF"
  },
  {
    "ticker": "AGGP",
    "exchange": "NYSE ARCA",
    "name": "IQ Enhanced Core Plus Bond U.S. ETF"
  },
  {
    "ticker": "AGGY",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Yield Enhanced U.S. Aggregate Bond Fund"
  },
  {
    "ticker": "AGI",
    "exchange": "NYSE",
    "name": "Alamos Gold Inc."
  },
  {
    "ticker": "AGIO",
    "exchange": "NASDAQ",
    "name": "Agios Pharmaceuticals Inc."
  },
  {
    "ticker": "AGLE",
    "exchange": "NASDAQ",
    "name": "Aeglea BioTherapeutics Inc"
  },
  {
    "ticker": "AGM",
    "exchange": "NYSE",
    "name": "Federal Agricultural Mortgage Corporation Class C"
  },
  {
    "ticker": "AGM.A",
    "exchange": "NYSE",
    "name": "Federal Agricultural Mortgage Corporation Class A"
  },
  {
    "ticker": "AGM-A",
    "exchange": "NYSE",
    "name": "Federal Agricultural Mortgage Corporation 5.875 % Non Cum Pfd Registered Series A"
  },
  {
    "ticker": "AGM-C",
    "exchange": "NYSE",
    "name": "Federal Agricultural Mortgage Corp Pfd Shs Series C"
  },
  {
    "ticker": "AGM-D",
    "exchange": "NYSE",
    "name": "Federal Agricultural Mortgage Corporation Pfd Registered Shs Series D"
  },
  {
    "ticker": "AGM-E",
    "exchange": "NYSE",
    "name": "Federal Agricultural Mortgage Corp 5.75 % Non-Cum Red Pfd Registered Shs Series E"
  },
  {
    "ticker": "AGMH",
    "exchange": "NASDAQ",
    "name": "AGM Group Holdings Inc. Class A"
  },
  {
    "ticker": "AGNC",
    "exchange": "NASDAQ",
    "name": "AGNC Investment Corp."
  },
  {
    "ticker": "AGNCM",
    "exchange": "NASDAQ",
    "name": "AGNC Investment Corp. Cum Conv Red Pfd Registered Shs Series D"
  },
  {
    "ticker": "AGNCN",
    "exchange": "NASDAQ",
    "name": "AGNC Investment Corp. Deposit Shs Repr 1/1000th Cum Conv Red Pfd Registered Shs Series C"
  },
  {
    "ticker": "AGNCO",
    "exchange": "NASDAQ",
    "name": "AGNC Investment Corp Depositary Shs Repr 1/1000th Cum Conv Red Pfd Registered Shs Series E"
  },
  {
    "ticker": "AGNCP",
    "exchange": "NASDAQ",
    "name": "AGNC Investment Corp Depositary Shs Repr 1/1000th Cum Conv Red Perp Pfd Registered Shs Ser F"
  },
  {
    "ticker": "AGO",
    "exchange": "NYSE",
    "name": "Assured Guaranty Ltd."
  },
  {
    "ticker": "AGO-B",
    "exchange": "NYSE",
    "name": "Assured Guaranty Municipal Holdings Inc 6 7/8 % Quarterly Interest Bond Secs 2001-15.12.2101 Sr"
  },
  {
    "ticker": "AGO-E",
    "exchange": "NYSE",
    "name": "Assured Guaranty Municipal Holdings Inc 6 1/4 % Notes 2002-1.11.2102 Sr"
  },
  {
    "ticker": "AGO-F",
    "exchange": "NYSE",
    "name": "Assured Guaranty Municipal Holdings Inc 5.6 % Notes 2003-15.7.2103 Sr"
  },
  {
    "ticker": "AGQ",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra Silver"
  },
  {
    "ticker": "AGR",
    "exchange": "NYSE",
    "name": "Avangrid Inc."
  },
  {
    "ticker": "AGRO",
    "exchange": "NYSE",
    "name": "Adecoagro S.A."
  },
  {
    "ticker": "AGRX",
    "exchange": "NASDAQ",
    "name": "Agile Therapeutics Inc."
  },
  {
    "ticker": "AGS",
    "exchange": "NYSE",
    "name": "PlayAGS Inc."
  },
  {
    "ticker": "AGT",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI Argentina & Global Exposure ETF"
  },
  {
    "ticker": "AGTC",
    "exchange": "NASDAQ",
    "name": "Applied Genetic Technologies Corp."
  },
  {
    "ticker": "AGX",
    "exchange": "NYSE",
    "name": "Argan Inc."
  },
  {
    "ticker": "AGYS",
    "exchange": "NASDAQ",
    "name": "Agilysys Inc."
  },
  {
    "ticker": "AGZ",
    "exchange": "NYSE ARCA",
    "name": "iShares Agency Bond ETF"
  },
  {
    "ticker": "AGZD",
    "exchange": "NASDAQ",
    "name": "WisdomTree Interest Rate Hedged U.S. Aggregate Bond Fund"
  },
  {
    "ticker": "AHC",
    "exchange": "NYSE",
    "name": "A.H. Belo Corporation Class A"
  },
  {
    "ticker": "AHCO",
    "exchange": "NASDAQ",
    "name": "AdaptHealth Corp. Class A"
  },
  {
    "ticker": "AHH",
    "exchange": "NYSE",
    "name": "Armada Hoffler Properties Inc."
  },
  {
    "ticker": "AHH-A",
    "exchange": "NYSE",
    "name": "Armada Hoffler Properties Inc 6.75 % Cum Red Perp Pfd Registered Shs Series A"
  },
  {
    "ticker": "AHL-C",
    "exchange": "NYSE",
    "name": "Aspen Insurance Holdings Ltd 5.95 % Non-Cum Perp Pref"
  },
  {
    "ticker": "AHL-D",
    "exchange": "NYSE",
    "name": "Aspen Insurance Holdings Ltd 5.625 % Non-Cum Perp Pfd"
  },
  {
    "ticker": "AHL-E",
    "exchange": "NYSE",
    "name": "Aspen Insurance Holdings Ltd Depositary Shs Repr 1/1000th 5.625 % Non-Cum Red Perp Pfd Registered Sh"
  },
  {
    "ticker": "AHPI",
    "exchange": "NASDAQ",
    "name": "Allied Healthcare Products Inc."
  },
  {
    "ticker": "AHT",
    "exchange": "NYSE",
    "name": "Ashford Hospitality Trust Inc."
  },
  {
    "ticker": "AHT-D",
    "exchange": "NYSE",
    "name": "Ashford Hospitality Trust Inc 8.45 % Cum Pfd Registered Series D"
  },
  {
    "ticker": "AHT-F",
    "exchange": "NYSE",
    "name": "Ashford Hospitality Trust Inc 7.375 % Cum Pfd Registered Series F"
  },
  {
    "ticker": "AHT-G",
    "exchange": "NYSE",
    "name": "Ashford Hospitality Trust Inc. 7.375% Cum Pfd Registered Shs Series G"
  },
  {
    "ticker": "AHT-H",
    "exchange": "NYSE",
    "name": "Ashford Hospitality Trust Inc 7.5 % Cum Conv Red Pfd Registered Shs Series H"
  },
  {
    "ticker": "AHT-I",
    "exchange": "NYSE",
    "name": "Ashford Hospitality Trust Inc 7.5 % Cum Conv Perp Red Pfd Registered Shs Series I"
  },
  {
    "ticker": "AI",
    "exchange": "NYSE",
    "name": "Arlington Asset Investment Corp. Class A"
  },
  {
    "ticker": "AI-B",
    "exchange": "NYSE",
    "name": "Arlington Asset Investment Corp 7 % Cum Red Pfd Registered Series B"
  },
  {
    "ticker": "AI-C",
    "exchange": "NYSE",
    "name": "Arlington Asset Investment Corp. Cum Conv Red Pfd Registered Shs Series C"
  },
  {
    "ticker": "AIA",
    "exchange": "NASDAQ",
    "name": "iShares Asia 50 ETF"
  },
  {
    "ticker": "AIC",
    "exchange": "NYSE",
    "name": "Arlington Asset Investment Corp 6.75 % Notes 2015-15.3.25 Sr"
  },
  {
    "ticker": "AIEQ",
    "exchange": "NYSE ARCA",
    "name": "AI Powered Equity ETF"
  },
  {
    "ticker": "AIF",
    "exchange": "NYSE",
    "name": "Apollo Tactical Income Fund Inc."
  },
  {
    "ticker": "AIG",
    "exchange": "NYSE",
    "name": "American International Group Inc."
  },
  {
    "ticker": "AIG-A",
    "exchange": "NYSE",
    "name": "American International Group Inc Depositary Shs Repr 1/1000th 5.85 % Non-Cum Red Perp Pfd Rg Shs Ser A"
  },
  {
    "ticker": "AIG+",
    "exchange": "NYSE",
    "name": "American International Group Inc. Warrants 2011-19.1.21 on Shs"
  },
  {
    "ticker": "AIH",
    "exchange": "NASDAQ",
    "name": "Aesthetic Medical International Holdings Group Ltd. ADR"
  },
  {
    "ticker": "AIHS",
    "exchange": "NASDAQ",
    "name": "Senmiao Technology Ltd."
  },
  {
    "ticker": "AIIQ",
    "exchange": "NYSE ARCA",
    "name": "AI Powered International Equity ETF"
  },
  {
    "ticker": "AIKI",
    "exchange": "NASDAQ",
    "name": "AIkido Pharma Incorporated"
  },
  {
    "ticker": "AIM",
    "exchange": "NYSE American",
    "name": "AIM ImmunoTech Inc."
  },
  {
    "ticker": "AIMC",
    "exchange": "NASDAQ",
    "name": "Altra Industrial Motion Corp."
  },
  {
    "ticker": "AIMT",
    "exchange": "NASDAQ",
    "name": "Aimmune Therapeutics Inc"
  },
  {
    "ticker": "AIN",
    "exchange": "NYSE",
    "name": "Albany International Corp. Class A"
  },
  {
    "ticker": "AINC",
    "exchange": "NYSE American",
    "name": "Ashford Inc."
  },
  {
    "ticker": "AINV",
    "exchange": "NASDAQ",
    "name": "Apollo Investment Corporation"
  },
  {
    "ticker": "AIO",
    "exchange": "NYSE",
    "name": "AllianzGI Artificial Intelligence & Technology Opportunities Fund"
  },
  {
    "ticker": "AIQ",
    "exchange": "NASDAQ",
    "name": "Global X Artificial Intelligence & Technology ETF"
  },
  {
    "ticker": "AIR",
    "exchange": "NYSE",
    "name": "AAR CORP."
  },
  {
    "ticker": "AIRG",
    "exchange": "NASDAQ",
    "name": "Airgain Inc."
  },
  {
    "ticker": "AIRI",
    "exchange": "NYSE American",
    "name": "Air Industries Group"
  },
  {
    "ticker": "AIRR",
    "exchange": "NASDAQ",
    "name": "First Trust RBA American Industrial Renaissance ETF"
  },
  {
    "ticker": "AIRT",
    "exchange": "NASDAQ",
    "name": "Air T Inc."
  },
  {
    "ticker": "AIRTP",
    "exchange": "NASDAQ",
    "name": "Air T Funding 8% Cum Red Pfd Registered Shs"
  },
  {
    "ticker": "AIRTW",
    "exchange": "NASDAQ",
    "name": "Air T Funding Warrant 2019-07.06.20 Ext to 08.09.20 on Air T Fdg 8% CRP"
  },
  {
    "ticker": "AIT",
    "exchange": "NYSE",
    "name": "Applied Industrial Technologies Inc."
  },
  {
    "ticker": "AIV",
    "exchange": "NYSE",
    "name": "Apartment Investment & Management Co Class A"
  },
  {
    "ticker": "AIW",
    "exchange": "NYSE",
    "name": "Arlington Asset Investment Corp 6.625 % Notes 2013-1.5.23 Sr"
  },
  {
    "ticker": "AIZ",
    "exchange": "NYSE",
    "name": "Assurant Inc."
  },
  {
    "ticker": "AIZP",
    "exchange": "NYSE",
    "name": "Assurant Inc Cum Red Conv Pfd Registered Shs 2018-15.03.21 Series D"
  },
  {
    "ticker": "AJG",
    "exchange": "NYSE",
    "name": "Arthur J. Gallagher & Co."
  },
  {
    "ticker": "AJRD",
    "exchange": "NYSE",
    "name": "Aerojet Rocketdyne Holdings Inc."
  },
  {
    "ticker": "AJX",
    "exchange": "NYSE",
    "name": "Great Ajax Corp."
  },
  {
    "ticker": "AJXA",
    "exchange": "NYSE",
    "name": "Great Ajax Corp. 7.25 % Convertible Notes 2017-30.04.24 Global"
  },
  {
    "ticker": "AKAM",
    "exchange": "NASDAQ",
    "name": "Akamai Technologies Inc."
  },
  {
    "ticker": "AKBA",
    "exchange": "NASDAQ",
    "name": "Akebia Therapeutics Inc."
  },
  {
    "ticker": "AKCA",
    "exchange": "NASDAQ",
    "name": "Akcea Therapeutics Inc."
  },
  {
    "ticker": "AKER",
    "exchange": "NASDAQ",
    "name": "Akers Biosciences Inc."
  },
  {
    "ticker": "AKO.A",
    "exchange": "NYSE",
    "name": "Embotelladora Andina S.A. Sponsored ADR Pfd Class A"
  },
  {
    "ticker": "AKO.B",
    "exchange": "NYSE",
    "name": "Embotelladora Andina S.A. Sponsored ADR Pfd Class B"
  },
  {
    "ticker": "AKR",
    "exchange": "NYSE",
    "name": "Acadia Realty Trust"
  },
  {
    "ticker": "AKRO",
    "exchange": "NASDAQ",
    "name": "Akero Therapeutics Inc."
  },
  {
    "ticker": "AKTS",
    "exchange": "NASDAQ",
    "name": "Akoustis Technologies Inc."
  },
  {
    "ticker": "AKTX",
    "exchange": "NASDAQ",
    "name": "Akari Therapeutics Plc Sponsored ADR"
  },
  {
    "ticker": "AKUS",
    "exchange": "NASDAQ",
    "name": "Akouos Inc."
  },
  {
    "ticker": "AL",
    "exchange": "NYSE",
    "name": "Air LeNYSE American Corporation Class A"
  },
  {
    "ticker": "AL-A",
    "exchange": "NYSE",
    "name": "Air LeNYSE American Corporation Cum Perp Pfd Registered Shs Series A"
  },
  {
    "ticker": "ALAC",
    "exchange": "NASDAQ",
    "name": "Alberton Acquisition Corp. Class A"
  },
  {
    "ticker": "ALACR",
    "exchange": "NASDAQ",
    "name": "Alberton Acquisition Corp Rights For Shares"
  },
  {
    "ticker": "ALACU",
    "exchange": "NASDAQ",
    "name": "Alberton Acquisition Corp. Units"
  },
  {
    "ticker": "ALACW",
    "exchange": "NASDAQ",
    "name": "Alberton Acquisition Corp Warrant -26.04.25 on Alberton Acq"
  },
  {
    "ticker": "ALB",
    "exchange": "NYSE",
    "name": "Albemarle Corporation"
  },
  {
    "ticker": "ALBO",
    "exchange": "NASDAQ",
    "name": "Albireo Pharma Inc."
  },
  {
    "ticker": "ALC",
    "exchange": "NYSE",
    "name": "Alcon Inc."
  },
  {
    "ticker": "ALCO",
    "exchange": "NASDAQ",
    "name": "Alico Inc."
  },
  {
    "ticker": "ALDX",
    "exchange": "NASDAQ",
    "name": "Aldeyra Therapeutics Inc."
  },
  {
    "ticker": "ALE",
    "exchange": "NYSE",
    "name": "ALLETE Inc."
  },
  {
    "ticker": "ALEC",
    "exchange": "NASDAQ",
    "name": "Alector Inc."
  },
  {
    "ticker": "ALEX",
    "exchange": "NYSE",
    "name": "Alexander & Baldwin Inc."
  },
  {
    "ticker": "ALFA",
    "exchange": "Cboe BZX",
    "name": "AlphaClone Alternative Alpha ETF"
  },
  {
    "ticker": "ALG",
    "exchange": "NYSE",
    "name": "Alamo Group Inc."
  },
  {
    "ticker": "ALGN",
    "exchange": "NASDAQ",
    "name": "Align Technology Inc."
  },
  {
    "ticker": "ALGT",
    "exchange": "NASDAQ",
    "name": "Allegiant Travel Company"
  },
  {
    "ticker": "ALIM",
    "exchange": "NASDAQ",
    "name": "Alimera Sciences Inc."
  },
  {
    "ticker": "ALIN-A",
    "exchange": "NYSE",
    "name": "Altera Infrastructure LP 7.25 % Cum Red Pfd Registered Units Series A"
  },
  {
    "ticker": "ALIN-B",
    "exchange": "NYSE",
    "name": "Altera Infrastructure LP 8.5 % Cum Red Pfd Registered Units Series B"
  },
  {
    "ticker": "ALIN-E",
    "exchange": "NYSE",
    "name": "Altera Infrastructure LP Cum Red Perp Pfd Registered Shs Series E"
  },
  {
    "ticker": "ALJJ",
    "exchange": "NASDAQ",
    "name": "ALJ Regional Holdings Inc."
  },
  {
    "ticker": "ALK",
    "exchange": "NYSE",
    "name": "Alaska Air Group Inc."
  },
  {
    "ticker": "ALKS",
    "exchange": "NASDAQ",
    "name": "Alkermes Plc"
  },
  {
    "ticker": "ALL",
    "exchange": "NYSE",
    "name": "Allstate Corporation"
  },
  {
    "ticker": "ALL-B",
    "exchange": "NYSE",
    "name": "Allstate Corp Debentures 2013-15.1.53 Subord"
  },
  {
    "ticker": "ALL-G",
    "exchange": "NYSE",
    "name": "Allstate Corp. Deposit Shs Repr 1/1000th 5 5/8 Non-Cum Perp Red Pfd Shs Series G"
  },
  {
    "ticker": "ALL-H",
    "exchange": "NYSE",
    "name": "Allstate Corporation Depositary Shs Repr 1/1000th 5.1% Non-Cum Red Perp Pfd Series H"
  },
  {
    "ticker": "ALL-I",
    "exchange": "NYSE",
    "name": "Allstate Corp Depositary Shs Repr 1/1000th 4.750% Non-Cum Red Perp Pfd Sh Series I"
  },
  {
    "ticker": "ALLE",
    "exchange": "NYSE",
    "name": "Allegion PLC"
  },
  {
    "ticker": "ALLK",
    "exchange": "NASDAQ",
    "name": "Allakos Inc."
  },
  {
    "ticker": "ALLO",
    "exchange": "NASDAQ",
    "name": "Allogene Therapeutics Inc."
  },
  {
    "ticker": "ALLT",
    "exchange": "NASDAQ",
    "name": "Allot Ltd."
  },
  {
    "ticker": "ALLY",
    "exchange": "NYSE",
    "name": "Ally Financial Inc"
  },
  {
    "ticker": "ALLY-A",
    "exchange": "NYSE",
    "name": "GMAC Capital Trust I Trust Pfd Secs 2011-15.2.40 Gtd Series 2 Fltg Rt"
  },
  {
    "ticker": "ALNA",
    "exchange": "NASDAQ",
    "name": "Allena Pharmaceuticals Inc."
  },
  {
    "ticker": "ALNY",
    "exchange": "NASDAQ",
    "name": "Alnylam Pharmaceuticals Inc"
  },
  {
    "ticker": "ALOT",
    "exchange": "NASDAQ",
    "name": "AstroNova Inc."
  },
  {
    "ticker": "ALP-Q",
    "exchange": "NYSE",
    "name": "Alabama Power Company 5 % Cum Pfd Registered Shs A"
  },
  {
    "ticker": "ALPN",
    "exchange": "NASDAQ",
    "name": "Alpine Immune Sciences Inc."
  },
  {
    "ticker": "ALRM",
    "exchange": "NASDAQ",
    "name": "Alarm.com Holdings Inc."
  },
  {
    "ticker": "ALRN",
    "exchange": "NASDAQ",
    "name": "Aileron Therapeutics Inc."
  },
  {
    "ticker": "ALRS",
    "exchange": "NASDAQ",
    "name": "Alerus Financial Corporation"
  },
  {
    "ticker": "ALSK",
    "exchange": "NASDAQ",
    "name": "Alaska Communications Systems Group Inc."
  },
  {
    "ticker": "ALSN",
    "exchange": "NYSE",
    "name": "Allison Transmission Holdings Inc."
  },
  {
    "ticker": "ALT",
    "exchange": "NASDAQ",
    "name": "Altimmune Inc."
  },
  {
    "ticker": "ALTA",
    "exchange": "NASDAQ",
    "name": "Altabancorp"
  },
  {
    "ticker": "ALTG",
    "exchange": "NYSE",
    "name": "Alta Equipment Group Inc."
  },
  {
    "ticker": "ALTG+",
    "exchange": "NYSE",
    "name": "Alta Equipment Group Inc. Warrant 2020-14.02.25 on Alta Equip Grp"
  },
  {
    "ticker": "ALTL",
    "exchange": "NYSE ARCA",
    "name": "Pacer Lunt Large Cap Alternator ETF"
  },
  {
    "ticker": "ALTM",
    "exchange": "NASDAQ",
    "name": "Altus Midstream Co. Class A"
  },
  {
    "ticker": "ALTR",
    "exchange": "NASDAQ",
    "name": "Altair Engineering Inc. Class A"
  },
  {
    "ticker": "ALTS",
    "exchange": "Cboe BZX",
    "name": "ProShares Morningstar Alternatives Solution ETF"
  },
  {
    "ticker": "ALTY",
    "exchange": "NASDAQ",
    "name": "Global X SuperDividend Alternatives ETF"
  },
  {
    "ticker": "ALUS",
    "exchange": "NYSE",
    "name": "Alussa Energy Acquisition Corp Class A"
  },
  {
    "ticker": "ALUS=",
    "exchange": "NYSE",
    "name": "Alussa Energy Acquisition Corp. Units Cons of 1 Sh + 1 Wt"
  },
  {
    "ticker": "ALUS+",
    "exchange": "NYSE",
    "name": "Alussa Energy Acquisition Corp Warrant -31.10.26 on Alussa"
  },
  {
    "ticker": "ALV",
    "exchange": "NYSE",
    "name": "Autoliv Inc."
  },
  {
    "ticker": "ALVR",
    "exchange": "NASDAQ",
    "name": "AlloVir Inc"
  },
  {
    "ticker": "ALX",
    "exchange": "NYSE",
    "name": "Alexander's Inc."
  },
  {
    "ticker": "ALXN",
    "exchange": "NASDAQ",
    "name": "Alexion Pharmaceuticals Inc."
  },
  {
    "ticker": "ALXO",
    "exchange": "NASDAQ",
    "name": "ALX Oncology Holdings Inc."
  },
  {
    "ticker": "ALYA",
    "exchange": "NASDAQ",
    "name": "Alithya Group inc Class A"
  },
  {
    "ticker": "AM",
    "exchange": "NYSE",
    "name": "Antero Midstream Corp."
  },
  {
    "ticker": "AMAG",
    "exchange": "NASDAQ",
    "name": "AMAG Pharmaceuticals Inc."
  },
  {
    "ticker": "AMAL",
    "exchange": "NASDAQ",
    "name": "Amalgamated Bank"
  },
  {
    "ticker": "AMAT",
    "exchange": "NASDAQ",
    "name": "Applied Materials Inc."
  },
  {
    "ticker": "AMBA",
    "exchange": "NASDAQ",
    "name": "Ambarella Inc."
  },
  {
    "ticker": "AMBC",
    "exchange": "NYSE",
    "name": "Ambac Financial Group Inc."
  },
  {
    "ticker": "AMBC+",
    "exchange": "NYSE",
    "name": "Ambac Financial Group Inc. Warrants 2013-30.4.23 on Shs"
  },
  {
    "ticker": "AMBO",
    "exchange": "NYSE American",
    "name": "Ambow Education Holding Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "AMC",
    "exchange": "NYSE",
    "name": "AMC Entertainment Holdings Inc. Class A"
  },
  {
    "ticker": "AMCA",
    "exchange": "NASDAQ",
    "name": "iShares Russell 1000 Pure U.S. Revenue ETF"
  },
  {
    "ticker": "AMCI",
    "exchange": "NASDAQ",
    "name": "AMCI Acquisition Corp. Class A"
  },
  {
    "ticker": "AMCIU",
    "exchange": "NASDAQ",
    "name": "AMCI Acquisition Corp. Units Cons of 1 Sh -A- + 0.5 Wt"
  },
  {
    "ticker": "AMCIW",
    "exchange": "NASDAQ",
    "name": "AMCI Acquisition Corp Warrant 2019- on AMCI Acqn"
  },
  {
    "ticker": "AMCR",
    "exchange": "NYSE",
    "name": "Amcor PLC"
  },
  {
    "ticker": "AMCX",
    "exchange": "NASDAQ",
    "name": "AMC Networks Inc. Class A"
  },
  {
    "ticker": "AMD",
    "exchange": "NASDAQ",
    "name": "Advanced Micro Devices Inc."
  },
  {
    "ticker": "AME",
    "exchange": "NYSE",
    "name": "AMETEK Inc."
  },
  {
    "ticker": "AMED",
    "exchange": "NASDAQ",
    "name": "Amedisys Inc."
  },
  {
    "ticker": "AMEH",
    "exchange": "NASDAQ",
    "name": "Apollo Medical Holdings Inc."
  },
  {
    "ticker": "AMG",
    "exchange": "NYSE",
    "name": "Affiliated Managers Group Inc."
  },
  {
    "ticker": "AMGN",
    "exchange": "NASDAQ",
    "name": "Amgen Inc."
  },
  {
    "ticker": "AMH",
    "exchange": "NYSE",
    "name": "American Homes 4 Rent Class A"
  },
  {
    "ticker": "AMH-D",
    "exchange": "NYSE",
    "name": "American Homes 4 Rent 6.5 % Cum Red Perp Pfd Registered of Benef Interest Series D"
  },
  {
    "ticker": "AMH-E",
    "exchange": "NYSE",
    "name": "American Homes 4 Rent 6 7/20% Cum Red Perp Pfd Shs of Benef Interest Series E"
  },
  {
    "ticker": "AMH-F",
    "exchange": "NYSE",
    "name": "American Homes 4 Rent 5.875% Cum Red Perp Pfd Registered Shs Series F"
  },
  {
    "ticker": "AMH-G",
    "exchange": "NYSE",
    "name": "American Homes 4 Rent 5.875% Cum Conv Red Pfd Registered Shs of Benef Interest Series G"
  },
  {
    "ticker": "AMH-H",
    "exchange": "NYSE",
    "name": "American Homes 4 Rent 6.25 % Cum Conv Red Perp Pfd Registered Shs of Benef Int Series H"
  },
  {
    "ticker": "AMHC",
    "exchange": "NASDAQ",
    "name": "Amplitude Healthcare Acquisition Corp Class A"
  },
  {
    "ticker": "AMHCU",
    "exchange": "NASDAQ",
    "name": "Amplitude Healthcare Acquisition Corp Units Cons of 1 Sh A + 1/2 Wt 12.01.2026"
  },
  {
    "ticker": "AMHCW",
    "exchange": "NASDAQ",
    "name": "Amplitude Healthcare Acquisition Corp Warrant 2019-01.12.26 on Amplitude Hlthc-A"
  },
  {
    "ticker": "AMJ",
    "exchange": "NYSE ARCA",
    "name": "J.P. Morgan Alerian MLP Index ETN"
  },
  {
    "ticker": "AMK",
    "exchange": "NYSE",
    "name": "AssetMark Financial Holdings Inc."
  },
  {
    "ticker": "AMKR",
    "exchange": "NASDAQ",
    "name": "Amkor Technology Inc."
  },
  {
    "ticker": "AMLP",
    "exchange": "NYSE ARCA",
    "name": "Alerian MLP ETF"
  },
  {
    "ticker": "AMN",
    "exchange": "NYSE",
    "name": "AMN Healthcare Services Inc."
  },
  {
    "ticker": "AMNA",
    "exchange": "NYSE ARCA",
    "name": "ETRACS Alerian Midstream Energy Index ETN"
  },
  {
    "ticker": "AMNB",
    "exchange": "NASDAQ",
    "name": "American National Bankshares Inc."
  },
  {
    "ticker": "AMND",
    "exchange": "NYSE ARCA",
    "name": "ETRACS Alerian Midstream Energy High Dividend Index ETN due July 19 2050"
  },
  {
    "ticker": "AMOM",
    "exchange": "NYSE ARCA",
    "name": "Qraft AI-Enhanced U.S. Large Cap Momentum ETF"
  },
  {
    "ticker": "AMOT",
    "exchange": "NASDAQ",
    "name": "Allied Motion Technologies Inc."
  },
  {
    "ticker": "AMOV",
    "exchange": "NYSE",
    "name": "America Movil SAB de CV Sponsored ADR Class A"
  },
  {
    "ticker": "AMP",
    "exchange": "NYSE",
    "name": "Ameriprise Financial Inc."
  },
  {
    "ticker": "AMPE",
    "exchange": "NYSE American",
    "name": "Ampio Pharmaceuticals Inc."
  },
  {
    "ticker": "AMPH",
    "exchange": "NASDAQ",
    "name": "Amphastar Pharmaceuticals Inc"
  },
  {
    "ticker": "AMPY",
    "exchange": "NYSE",
    "name": "Amplify Energy Corp."
  },
  {
    "ticker": "AMRB",
    "exchange": "NASDAQ",
    "name": "American River Bankshares"
  },
  {
    "ticker": "AMRC",
    "exchange": "NYSE",
    "name": "Ameresco Inc. Class A"
  },
  {
    "ticker": "AMRH",
    "exchange": "NASDAQ",
    "name": "AMERI Holdings Inc."
  },
  {
    "ticker": "AMRHW",
    "exchange": "NASDAQ",
    "name": "Ameri Holdings Inc Warrant 2017-08.11.23 on Ameri Holdings"
  },
  {
    "ticker": "AMRK",
    "exchange": "NASDAQ",
    "name": "A-Mark Precious Metals Inc."
  },
  {
    "ticker": "AMRN",
    "exchange": "NASDAQ",
    "name": "Amarin Corporation Plc Sponsored ADR"
  },
  {
    "ticker": "AMRS",
    "exchange": "NASDAQ",
    "name": "Amyris Inc."
  },
  {
    "ticker": "AMRX",
    "exchange": "NYSE",
    "name": "Amneal Pharmaceuticals Inc. Class A"
  },
  {
    "ticker": "AMS",
    "exchange": "NYSE American",
    "name": "American Shared Hospital Services"
  },
  {
    "ticker": "AMSC",
    "exchange": "NASDAQ",
    "name": "American Superconductor Corporation"
  },
  {
    "ticker": "AMSF",
    "exchange": "NASDAQ",
    "name": "AMERISAFE Inc."
  },
  {
    "ticker": "AMSWA",
    "exchange": "NASDAQ",
    "name": "American Software Inc. Class A"
  },
  {
    "ticker": "AMT",
    "exchange": "NYSE",
    "name": "American Tower Corporation"
  },
  {
    "ticker": "AMTB",
    "exchange": "NASDAQ",
    "name": "Amerant Bancorp Inc. Class A"
  },
  {
    "ticker": "AMTBB",
    "exchange": "NASDAQ",
    "name": "Amerant Bancorp Inc. Class B"
  },
  {
    "ticker": "AMTD",
    "exchange": "NASDAQ",
    "name": "TD Ameritrade Holding Corporation"
  },
  {
    "ticker": "AMTI",
    "exchange": "NASDAQ",
    "name": "Applied Molecular Transport Inc."
  },
  {
    "ticker": "AMTX",
    "exchange": "NASDAQ",
    "name": "Aemetis Inc."
  },
  {
    "ticker": "AMU",
    "exchange": "NYSE ARCA",
    "name": "ETRACS Alerian MLP Index ETN"
  },
  {
    "ticker": "AMUB",
    "exchange": "NYSE ARCA",
    "name": "ETRACS Alerian MLP Index ETN Class B"
  },
  {
    "ticker": "AMWD",
    "exchange": "NASDAQ",
    "name": "American Woodmark Corporation"
  },
  {
    "ticker": "AMX",
    "exchange": "NYSE",
    "name": "America Movil SAB de CV Sponsored ADR Class L"
  },
  {
    "ticker": "AMYT",
    "exchange": "NASDAQ",
    "name": "Amryt Pharma PLC Sponsored ADR"
  },
  {
    "ticker": "AMZA",
    "exchange": "NYSE ARCA",
    "name": "InfraCap MLP ETF"
  },
  {
    "ticker": "AMZN",
    "exchange": "NASDAQ",
    "name": "Amazon.com Inc."
  },
  {
    "ticker": "AN",
    "exchange": "NYSE",
    "name": "AutoNation Inc."
  },
  {
    "ticker": "ANAB",
    "exchange": "NASDAQ",
    "name": "AnaptysBio Inc."
  },
  {
    "ticker": "ANAT",
    "exchange": "NASDAQ",
    "name": "American National Group Inc."
  },
  {
    "ticker": "ANCN",
    "exchange": "NASDAQ",
    "name": "Anchiano Therapeutics Ltd. Sponsored ADR"
  },
  {
    "ticker": "ANDA",
    "exchange": "NASDAQ",
    "name": "Andina Acquisition Corp. III"
  },
  {
    "ticker": "ANDAR",
    "exchange": "NASDAQ",
    "name": "Andina Acquisition Corp. III Rights For Shares"
  },
  {
    "ticker": "ANDAU",
    "exchange": "NASDAQ",
    "name": "Andina Acquisition Corp. III Units Cons of 1 Shs + 1 Rts + 1 Wt"
  },
  {
    "ticker": "ANDAW",
    "exchange": "NASDAQ",
    "name": "Andina Acquisition Corp III Warrant"
  },
  {
    "ticker": "ANDE",
    "exchange": "NASDAQ",
    "name": "Andersons Inc."
  },
  {
    "ticker": "ANET",
    "exchange": "NYSE",
    "name": "Arista Networks Inc."
  },
  {
    "ticker": "ANF",
    "exchange": "NYSE",
    "name": "Abercrombie & Fitch Co. Class A"
  },
  {
    "ticker": "ANGI",
    "exchange": "NASDAQ",
    "name": "ANGI Homeservices Inc Class A"
  },
  {
    "ticker": "ANGL",
    "exchange": "NASDAQ",
    "name": "VanEck Vectors Fallen Angel High Yield Bond ETF"
  },
  {
    "ticker": "ANGO",
    "exchange": "NASDAQ",
    "name": "AngioDynamics Inc."
  },
  {
    "ticker": "ANH",
    "exchange": "NYSE",
    "name": "Anworth Mortgage Asset Corporation"
  },
  {
    "ticker": "ANH-A",
    "exchange": "NYSE",
    "name": "Anworth Mortgage Asset Corp 8.625 % Cum Pfd Registered Series A"
  },
  {
    "ticker": "ANH-B",
    "exchange": "NYSE",
    "name": "Anworth Mortgage Asset Corp 6 1/4 % Cum Conv Pfd Shs Series B"
  },
  {
    "ticker": "ANH-C",
    "exchange": "NYSE",
    "name": "Anworth Mortgage Asset Corp 7 5/8 % Cum Red Pfd Shs Series C"
  },
  {
    "ticker": "ANIK",
    "exchange": "NASDAQ",
    "name": "Anika Therapeutics Inc."
  },
  {
    "ticker": "ANIP",
    "exchange": "NASDAQ",
    "name": "ANI Pharmaceuticals Inc."
  },
  {
    "ticker": "ANIX",
    "exchange": "NASDAQ",
    "name": "Anixa Biosciences Inc."
  },
  {
    "ticker": "ANNX",
    "exchange": "NASDAQ",
    "name": "Annexon Inc."
  },
  {
    "ticker": "ANPC",
    "exchange": "NASDAQ",
    "name": "AnPac Bio-Medical Science Co. Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "ANSS",
    "exchange": "NASDAQ",
    "name": "ANSYS Inc."
  },
  {
    "ticker": "ANTE",
    "exchange": "NASDAQ",
    "name": "AirNet Technology Inc. Sponsored ADR"
  },
  {
    "ticker": "ANTM",
    "exchange": "NYSE",
    "name": "Anthem Inc."
  },
  {
    "ticker": "ANVS",
    "exchange": "NYSE American",
    "name": "Annovis Bio Inc"
  },
  {
    "ticker": "ANY",
    "exchange": "NASDAQ",
    "name": "Sphere 3D Corp."
  },
  {
    "ticker": "AOA",
    "exchange": "NYSE ARCA",
    "name": "iShares Core Aggressive Allocation ETF"
  },
  {
    "ticker": "AOD",
    "exchange": "NYSE",
    "name": "Aberdeen Total Dynamic Dividend Fund of Benef Interest"
  },
  {
    "ticker": "AOK",
    "exchange": "NYSE ARCA",
    "name": "iShares Core Conservative Allocation ETF"
  },
  {
    "ticker": "AOM",
    "exchange": "NYSE ARCA",
    "name": "iShares Core Moderate Allocation ETF"
  },
  {
    "ticker": "AON",
    "exchange": "NYSE",
    "name": "Aon Plc Class A"
  },
  {
    "ticker": "AONE=",
    "exchange": "NYSE",
    "name": "one Units Cons of 1 Shs -A- + 1/4 Wt"
  },
  {
    "ticker": "AOR",
    "exchange": "NYSE ARCA",
    "name": "iShares Core Growth Allocation ETF"
  },
  {
    "ticker": "AOS",
    "exchange": "NYSE",
    "name": "A. O. Smith Corporation"
  },
  {
    "ticker": "AOSL",
    "exchange": "NASDAQ",
    "name": "Alpha and Omega Semiconductor Limited"
  },
  {
    "ticker": "AOUTV",
    "exchange": "NASDAQ",
    "name": "American Outdoor Brands Inc."
  },
  {
    "ticker": "AP",
    "exchange": "NYSE",
    "name": "Ampco-Pittsburgh Corporation"
  },
  {
    "ticker": "APA",
    "exchange": "NASDAQ",
    "name": "Apache Corporation"
  },
  {
    "ticker": "APAM",
    "exchange": "NYSE",
    "name": "Artisan Partners Asset Management Inc. Class A"
  },
  {
    "ticker": "APD",
    "exchange": "NYSE",
    "name": "Air Products and Chemicals Inc."
  },
  {
    "ticker": "APDN",
    "exchange": "NASDAQ",
    "name": "Applied DNA Sciences Inc."
  },
  {
    "ticker": "APEI",
    "exchange": "NASDAQ",
    "name": "American Public Education Inc."
  },
  {
    "ticker": "APEN",
    "exchange": "NASDAQ",
    "name": "Apollo Endosurgery Inc."
  },
  {
    "ticker": "APEX",
    "exchange": "NASDAQ",
    "name": "APEX Global Brands Inc."
  },
  {
    "ticker": "APG",
    "exchange": "NYSE",
    "name": "APi Group Corporation"
  },
  {
    "ticker": "APH",
    "exchange": "NYSE",
    "name": "Amphenol Corporation Class A"
  },
  {
    "ticker": "APHA",
    "exchange": "NASDAQ",
    "name": "Aphria Inc"
  },
  {
    "ticker": "API",
    "exchange": "NASDAQ",
    "name": "Agora Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "APLE",
    "exchange": "NYSE",
    "name": "Apple Hospitality REIT Inc"
  },
  {
    "ticker": "APLS",
    "exchange": "NASDAQ",
    "name": "Apellis Pharmaceuticals Inc."
  },
  {
    "ticker": "APLT",
    "exchange": "NASDAQ",
    "name": "Applied Therapeutics Inc."
  },
  {
    "ticker": "APM",
    "exchange": "NASDAQ",
    "name": "Aptorum Group Limited Class A"
  },
  {
    "ticker": "APO",
    "exchange": "NYSE",
    "name": "Apollo Global Management Inc. Class A"
  },
  {
    "ticker": "APO-A",
    "exchange": "NYSE",
    "name": "Apollo Global Management Inc. 6.375 % Non Cum Red Pfd Registered Shs Series A"
  },
  {
    "ticker": "APO-B",
    "exchange": "NYSE",
    "name": "Apollo Global Management Inc. 6.375 % Non-Cum Red Perp Pfd Registered Shs Series B"
  },
  {
    "ticker": "APOG",
    "exchange": "NASDAQ",
    "name": "Apogee Enterprises Inc."
  },
  {
    "ticker": "APOP",
    "exchange": "NASDAQ",
    "name": "Cellect Biotechnology Ltd Sponsored ADR"
  },
  {
    "ticker": "APOPW",
    "exchange": "NASDAQ",
    "name": "Cellect Biotechnology Ltd Warrant 2016-2021 on ADRs Cellect Biotechnology"
  },
  {
    "ticker": "APPF",
    "exchange": "NASDAQ",
    "name": "AppFolio Inc Class A"
  },
  {
    "ticker": "APPN",
    "exchange": "NASDAQ",
    "name": "Appian Corporation Class A"
  },
  {
    "ticker": "APPS",
    "exchange": "NASDAQ",
    "name": "Digital Turbine Inc."
  },
  {
    "ticker": "APRE",
    "exchange": "NASDAQ",
    "name": "Aprea Therapeutics Inc."
  },
  {
    "ticker": "APRN",
    "exchange": "NYSE",
    "name": "Blue Apron Holdings Inc. Class A"
  },
  {
    "ticker": "APT",
    "exchange": "NYSE American",
    "name": "Alpha Pro Tech Ltd."
  },
  {
    "ticker": "APTO",
    "exchange": "NASDAQ",
    "name": "Aptose Biosciences Inc."
  },
  {
    "ticker": "APTS",
    "exchange": "NYSE",
    "name": "Preferred Apartment Communities Inc."
  },
  {
    "ticker": "APTV",
    "exchange": "NYSE",
    "name": "Aptiv PLC"
  },
  {
    "ticker": "APTV-A",
    "exchange": "NYSE",
    "name": "Aptiv PLC 5.5% Conv Pfd Registered Shs Series A"
  },
  {
    "ticker": "APTX",
    "exchange": "NASDAQ",
    "name": "Aptinyx Inc"
  },
  {
    "ticker": "APVO",
    "exchange": "NASDAQ",
    "name": "Aptevo Therapeutics Inc"
  },
  {
    "ticker": "APWC",
    "exchange": "NASDAQ",
    "name": "Asia Pacific Wire & Cable Corp."
  },
  {
    "ticker": "APXT",
    "exchange": "NASDAQ",
    "name": "Apex Technology Acquisition Corp. Class A"
  },
  {
    "ticker": "APXTU",
    "exchange": "NASDAQ",
    "name": "Apex Technology Acquisition Corp. Units Cons of 1 Sh -A- + 0.5 Wt 11.06.26"
  },
  {
    "ticker": "APXTW",
    "exchange": "NASDAQ",
    "name": "Apex Technology Acquisition Corp. Warrant 2019-11.06.26 on Apex Tech Acqn"
  },
  {
    "ticker": "APYX",
    "exchange": "NASDAQ",
    "name": "Apyx Medical Corporation"
  },
  {
    "ticker": "AQB",
    "exchange": "NASDAQ",
    "name": "AquaBounty Technologies Inc"
  },
  {
    "ticker": "AQMS",
    "exchange": "NASDAQ",
    "name": "Aqua Metals Inc."
  },
  {
    "ticker": "AQN",
    "exchange": "NYSE",
    "name": "Algonquin Power & Utilities Corp."
  },
  {
    "ticker": "AQNA",
    "exchange": "NYSE",
    "name": "Algonquin Power & Utilities Corp. Contingent Convertible Notes 2018-17.10.78 Global Series 2018-A Fixed/Floating Rate"
  },
  {
    "ticker": "AQNB",
    "exchange": "NYSE",
    "name": "Algonquin Power & Utilities Corp Contingent Convertible Notes 2019-01.07.79 Global Ser 2019-A Fixed/Floating Rate"
  },
  {
    "ticker": "AQST",
    "exchange": "NASDAQ",
    "name": "Aquestive Therapeutics Inc."
  },
  {
    "ticker": "AQUA",
    "exchange": "NYSE",
    "name": "Evoqua Water Technologies Corp"
  },
  {
    "ticker": "AR",
    "exchange": "NYSE",
    "name": "Antero Resources Corporation"
  },
  {
    "ticker": "ARA",
    "exchange": "NYSE",
    "name": "American Renal Associates Holdings Inc."
  },
  {
    "ticker": "ARAV",
    "exchange": "NASDAQ",
    "name": "Aravive Inc."
  },
  {
    "ticker": "ARAY",
    "exchange": "NASDAQ",
    "name": "Accuray Incorporated"
  },
  {
    "ticker": "ARB",
    "exchange": "NYSE ARCA",
    "name": "AltShares Merger Arbitrage ETF"
  },
  {
    "ticker": "ARC",
    "exchange": "NYSE",
    "name": "ARC Document Solutions Inc."
  },
  {
    "ticker": "ARCB",
    "exchange": "NASDAQ",
    "name": "ArcBest Corporation"
  },
  {
    "ticker": "ARCC",
    "exchange": "NASDAQ",
    "name": "Ares Capital Corporation"
  },
  {
    "ticker": "ARCE",
    "exchange": "NASDAQ",
    "name": "Arco Platform Ltd. Class A"
  },
  {
    "ticker": "ARCH",
    "exchange": "NYSE",
    "name": "Arch Resources Inc. Class A"
  },
  {
    "ticker": "ARCM",
    "exchange": "Cboe BZX",
    "name": "Arrow Reserve Capital Management ETF"
  },
  {
    "ticker": "ARCO",
    "exchange": "NYSE",
    "name": "Arcos Dorados Holdings Inc. Class A"
  },
  {
    "ticker": "ARCT",
    "exchange": "NASDAQ",
    "name": "Arcturus Therapeutics Holdings Inc."
  },
  {
    "ticker": "ARD",
    "exchange": "NYSE",
    "name": "Ardagh Group S.A. Class A"
  },
  {
    "ticker": "ARDC",
    "exchange": "NYSE",
    "name": "Ares Dynamic Credit Allocation Fund Inc."
  },
  {
    "ticker": "ARDS",
    "exchange": "NASDAQ",
    "name": "Aridis Pharmaceuticals Inc."
  },
  {
    "ticker": "ARDX",
    "exchange": "NASDAQ",
    "name": "Ardelyx Inc."
  },
  {
    "ticker": "ARE",
    "exchange": "NYSE",
    "name": "Alexandria Real Estate Equities Inc."
  },
  {
    "ticker": "AREC",
    "exchange": "NASDAQ",
    "name": "American Resources Corporation"
  },
  {
    "ticker": "ARES",
    "exchange": "NYSE",
    "name": "Ares Management Corporation"
  },
  {
    "ticker": "ARES-A",
    "exchange": "NYSE",
    "name": "Ares Management Corporation 7 % Non-Cum Pfd Registered Shs Series A"
  },
  {
    "ticker": "ARGD",
    "exchange": "NYSE",
    "name": "Argo Group US Inc 6 1/2 % Notes 2012-15.9.42 Sr"
  },
  {
    "ticker": "ARGO",
    "exchange": "NYSE",
    "name": "Argo Group International Holdings Ltd."
  },
  {
    "ticker": "ARGO-A",
    "exchange": "NYSE",
    "name": "Argo Group International Holdings LTD Depositary Shs Repr 1/1000th Non-Cum Red Perp Pfd Rg Shs Series A"
  },
  {
    "ticker": "ARGT",
    "exchange": "NYSE ARCA",
    "name": "Global X MSCI Argentina ETF"
  },
  {
    "ticker": "ARGX",
    "exchange": "NASDAQ",
    "name": "argenx SE ADR"
  },
  {
    "ticker": "ARI",
    "exchange": "NYSE",
    "name": "Apollo Commercial Real Estate Finance Inc."
  },
  {
    "ticker": "ARKF",
    "exchange": "NYSE ARCA",
    "name": "ARK Fintech Innovation ETF"
  },
  {
    "ticker": "ARKG",
    "exchange": "Cboe BZX",
    "name": "ARK Genomic Revolution ETF"
  },
  {
    "ticker": "ARKK",
    "exchange": "NYSE ARCA",
    "name": "ARK Innovation ETF"
  },
  {
    "ticker": "ARKQ",
    "exchange": "Cboe BZX",
    "name": "ARK Autonomous Technology & Robotics ETF"
  },
  {
    "ticker": "ARKR",
    "exchange": "NASDAQ",
    "name": "Ark Restaurants Corp."
  },
  {
    "ticker": "ARKW",
    "exchange": "NYSE ARCA",
    "name": "ARK Next Generation Internet ETF"
  },
  {
    "ticker": "ARL",
    "exchange": "NYSE",
    "name": "American Realty Investors Inc."
  },
  {
    "ticker": "ARLO",
    "exchange": "NYSE",
    "name": "Arlo Technologies Inc."
  },
  {
    "ticker": "ARLP",
    "exchange": "NASDAQ",
    "name": "Alliance Resource Partners L.P."
  },
  {
    "ticker": "ARMK",
    "exchange": "NYSE",
    "name": "Aramark"
  },
  {
    "ticker": "ARMP",
    "exchange": "NYSE American",
    "name": "Armata Pharmaceuticals Inc."
  },
  {
    "ticker": "ARMR",
    "exchange": "NYSE ARCA",
    "name": "Armor US Equity Index ETF"
  },
  {
    "ticker": "ARNA",
    "exchange": "NASDAQ",
    "name": "Arena Pharmaceuticals Inc."
  },
  {
    "ticker": "ARNC",
    "exchange": "NYSE",
    "name": "Arconic Corp."
  },
  {
    "ticker": "AROC",
    "exchange": "NYSE",
    "name": "Archrock Inc."
  },
  {
    "ticker": "AROW",
    "exchange": "NASDAQ",
    "name": "Arrow Financial Corporation"
  },
  {
    "ticker": "ARPO",
    "exchange": "NASDAQ",
    "name": "Aerpio Pharmaceuticals Inc."
  },
  {
    "ticker": "ARQT",
    "exchange": "NASDAQ",
    "name": "Arcutis Biotherapeutics Inc"
  },
  {
    "ticker": "ARR",
    "exchange": "NYSE",
    "name": "ARMOUR Residential REIT Inc."
  },
  {
    "ticker": "ARR-C",
    "exchange": "NYSE",
    "name": "ARMOUR Residential REIT Inc 7.00 % Cum Conv Red Pfd Registered Shs Series C"
  },
  {
    "ticker": "ARTL",
    "exchange": "NASDAQ",
    "name": "Artelo Biosciences Inc"
  },
  {
    "ticker": "ARTLW",
    "exchange": "NASDAQ",
    "name": "Artelo Biosciences Inc Warrant 2019-on Artelo Bioscncs Rg"
  },
  {
    "ticker": "ARTNA",
    "exchange": "NASDAQ",
    "name": "Artesian Resources Corporation Class A"
  },
  {
    "ticker": "ARTW",
    "exchange": "NASDAQ",
    "name": "Art's-Way Manufacturing Co. Inc."
  },
  {
    "ticker": "ARVN",
    "exchange": "NASDAQ",
    "name": "ArviNASDAQ Inc."
  },
  {
    "ticker": "ARW",
    "exchange": "NYSE",
    "name": "Arrow Electronics Inc."
  },
  {
    "ticker": "ARWR",
    "exchange": "NASDAQ",
    "name": "Arrowhead Pharmaceuticals Inc."
  },
  {
    "ticker": "ARYA",
    "exchange": "NASDAQ",
    "name": "ARYA Sciences Acquisition Corp. III Class A"
  },
  {
    "ticker": "ARYB",
    "exchange": "NASDAQ",
    "name": "ARYA Sciences Acquisition Corp. II Class A"
  },
  {
    "ticker": "ARYBU",
    "exchange": "NASDAQ",
    "name": "ARYA Sciences Acquisition Corp. II Units Cons of 1 Sh A + 1/3 Wt"
  },
  {
    "ticker": "ARYBW",
    "exchange": "NASDAQ",
    "name": "ARYA Sciences Acquisition Corp II Warrant -09.06.27 on ARYA Sciences Acquisition"
  },
  {
    "ticker": "ASA",
    "exchange": "NYSE",
    "name": "ASA Gold and Precious Metals Limited"
  },
  {
    "ticker": "ASB",
    "exchange": "NYSE",
    "name": "Associated Banc-Corp"
  },
  {
    "ticker": "ASB-C",
    "exchange": "NYSE",
    "name": "Associated Banc-Corp 6.125 % Non Cum Perp Pfd Series C"
  },
  {
    "ticker": "ASB-D",
    "exchange": "NYSE",
    "name": "Associated Banc-Corp Deposit Shs Repr 1/40th Non-Cum Perp Pfd Shs Series D"
  },
  {
    "ticker": "ASB-E",
    "exchange": "NYSE",
    "name": "Associated Banc-Corp Depositary Shs Repr 1/40th Non-Cum Red Perp Pfd Registered Shs Series E"
  },
  {
    "ticker": "ASB-F",
    "exchange": "NYSE",
    "name": "Associated Banc-Corp Depositary Shs Repr 1/40th 5.625 % Non-Cum Red Perp Pfd Shs F"
  },
  {
    "ticker": "ASC",
    "exchange": "NYSE",
    "name": "Ardmore Shipping Corp."
  },
  {
    "ticker": "NYSE AmericanA",
    "exchange": "NYSE ARCA",
    "name": "Global X FTSE Southeast Asia ETF"
  },
  {
    "ticker": "NYSE AmericanT",
    "exchange": "NASDAQ",
    "name": "FlexShares Real Assets Allocation Index Fund"
  },
  {
    "ticker": "ASFI",
    "exchange": "NASDAQ",
    "name": "Asta Funding Inc."
  },
  {
    "ticker": "ASG",
    "exchange": "NYSE",
    "name": "Liberty All-Star Growth Fund Inc"
  },
  {
    "ticker": "ASGI",
    "exchange": "NYSE",
    "name": "Aberdeen Standard Global Infrastructure Income Fund"
  },
  {
    "ticker": "ASGN",
    "exchange": "NYSE",
    "name": "ASGN Inc"
  },
  {
    "ticker": "ASH",
    "exchange": "NYSE",
    "name": "Ashland Global Holdings Inc."
  },
  {
    "ticker": "ASHR",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers Harvest CSI 300 China A-Shares ETF"
  },
  {
    "ticker": "ASHS",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers Harvest CSI 500 China A-Shares Small Cap ETF"
  },
  {
    "ticker": "ASHX",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers MSCI China A Inclusion Equity ETF"
  },
  {
    "ticker": "ASIX",
    "exchange": "NYSE",
    "name": "AdvanSix Inc."
  },
  {
    "ticker": "ASLN",
    "exchange": "NASDAQ",
    "name": "Aslan Pharmaceuticals Ltd. ADR"
  },
  {
    "ticker": "ASM",
    "exchange": "NYSE American",
    "name": "Avino Silver & Gold Mines Ltd."
  },
  {
    "ticker": "ASMB",
    "exchange": "NASDAQ",
    "name": "Assembly Biosciences Inc."
  },
  {
    "ticker": "ASML",
    "exchange": "NASDAQ",
    "name": "ASML Holding NV ADR"
  },
  {
    "ticker": "ASND",
    "exchange": "NASDAQ",
    "name": "Ascendis Pharma A/S Sponsored ADR"
  },
  {
    "ticker": "ASPN",
    "exchange": "NYSE",
    "name": "Aspen Aerogels Inc"
  },
  {
    "ticker": "ASPS",
    "exchange": "NASDAQ",
    "name": "Altisource Portfolio Solutions S.A."
  },
  {
    "ticker": "ASPU",
    "exchange": "NASDAQ",
    "name": "Aspen Group Inc."
  },
  {
    "ticker": "ASR",
    "exchange": "NYSE",
    "name": "Grupo Aeroportuario del Sureste SA de CV Sponsored ADR Class B"
  },
  {
    "ticker": "ASRT",
    "exchange": "NASDAQ",
    "name": "Assertio Holdings Inc"
  },
  {
    "ticker": "ASRV",
    "exchange": "NASDAQ",
    "name": "AmeriServ Financial Inc."
  },
  {
    "ticker": "ASRVP",
    "exchange": "NASDAQ",
    "name": "Ameriserv Financial Capital Trust I 8.45 % Gtd Beneficial Unsecured Secs 1998-30.6.28 Series A"
  },
  {
    "ticker": "ASTC",
    "exchange": "NASDAQ",
    "name": "Astrotech Corporation"
  },
  {
    "ticker": "ASTE",
    "exchange": "NASDAQ",
    "name": "Astec Industries Inc."
  },
  {
    "ticker": "ASUR",
    "exchange": "NASDAQ",
    "name": "Asure Software Inc."
  },
  {
    "ticker": "ASX",
    "exchange": "NYSE",
    "name": "NYSE American Technology Holding Co. Ltd. Sponsored ADR"
  },
  {
    "ticker": "ASYS",
    "exchange": "NASDAQ",
    "name": "Amtech Systems Inc."
  },
  {
    "ticker": "AT",
    "exchange": "NYSE",
    "name": "Atlantic Power Corporation"
  },
  {
    "ticker": "ATAX",
    "exchange": "NASDAQ",
    "name": "America First Multifamily Investors L.P."
  },
  {
    "ticker": "ATCO",
    "exchange": "NYSE",
    "name": "Atlas Corp."
  },
  {
    "ticker": "ATCO-D",
    "exchange": "NYSE",
    "name": "Atlas Corp. 7.95 % Cum Red Pfd Registered Shs Series D"
  },
  {
    "ticker": "ATCO-E",
    "exchange": "NYSE",
    "name": "Atlas Corp. 8.25 % Cum Red Pfd Registered Shs Series E"
  },
  {
    "ticker": "ATCO-G",
    "exchange": "NYSE",
    "name": "Atlas Corp. 8.2 % Cum Red Perp Pfd Registered Shs Series G"
  },
  {
    "ticker": "ATCO-H",
    "exchange": "NYSE",
    "name": "Atlas Corp. 7.875 % Cum Red Perp Pfd Registered Shs Series H"
  },
  {
    "ticker": "ATCO-I",
    "exchange": "NYSE",
    "name": "Atlas Corp. 8 % Cum Red Perp Pfd Registered Shs Series I"
  },
  {
    "ticker": "ATCX",
    "exchange": "NASDAQ",
    "name": "Atlas Technical Consultants Inc. Class A"
  },
  {
    "ticker": "ATCXW",
    "exchange": "NASDAQ",
    "name": "Atlas Technical Consultants Inc. Warrant 2020-26.11.25 on Atlas Technical Consultants"
  },
  {
    "ticker": "ATEC",
    "exchange": "NASDAQ",
    "name": "Alphatec Holdings Inc."
  },
  {
    "ticker": "ATEN",
    "exchange": "NYSE",
    "name": "A10 Networks Inc."
  },
  {
    "ticker": "ATEX",
    "exchange": "NASDAQ",
    "name": "Anterix Inc."
  },
  {
    "ticker": "ATGE",
    "exchange": "NYSE",
    "name": "Adtalem Global Education Inc."
  },
  {
    "ticker": "ATH",
    "exchange": "NYSE",
    "name": "Athene Holding Ltd. Class A"
  },
  {
    "ticker": "ATH-A",
    "exchange": "NYSE",
    "name": "Athene Holding Ltd Depositary Shs Repr 1/1000th Non-Cum Red Perp Pfd Registered Shs Ser A"
  },
  {
    "ticker": "ATH-B",
    "exchange": "NYSE",
    "name": "Athene Holding Ltd. Depositary Shs Repr 1/1000th Non-Cum Red Perp Pfd Registered Shs Class B"
  },
  {
    "ticker": "ATH-C",
    "exchange": "NYSE",
    "name": "Athene Holding Ltd Depositary Shs Repr 1/1000th Non-Cum Red Perp Pfd Registered Shs C"
  },
  {
    "ticker": "ATHE",
    "exchange": "NASDAQ",
    "name": "Alterity Therapeutics Ltd. Sponsored ADR"
  },
  {
    "ticker": "ATHM",
    "exchange": "NYSE",
    "name": "Autohome Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "ATHX",
    "exchange": "NASDAQ",
    "name": "Athersys Inc."
  },
  {
    "ticker": "ATI",
    "exchange": "NYSE",
    "name": "Allegheny Technologies Incorporated"
  },
  {
    "ticker": "ATIF",
    "exchange": "NASDAQ",
    "name": "ATIF Holdings Ltd."
  },
  {
    "ticker": "ATKR",
    "exchange": "NYSE",
    "name": "Atkore International Group Inc."
  },
  {
    "ticker": "ATLC",
    "exchange": "NASDAQ",
    "name": "Atlanticus Holdings Corp."
  },
  {
    "ticker": "ATLO",
    "exchange": "NASDAQ",
    "name": "Ames National Corporation"
  },
  {
    "ticker": "ATMP",
    "exchange": "Cboe BZX",
    "name": "Barclays ETN+ Select MLP ETN"
  },
  {
    "ticker": "ATNI",
    "exchange": "NASDAQ",
    "name": "ATN International Inc."
  },
  {
    "ticker": "ATNM",
    "exchange": "NYSE American",
    "name": "Actinium Pharmaceuticals Inc."
  },
  {
    "ticker": "ATNX",
    "exchange": "NASDAQ",
    "name": "Athenex Inc."
  },
  {
    "ticker": "ATO",
    "exchange": "NYSE",
    "name": "Atmos Energy Corporation"
  },
  {
    "ticker": "ATOM",
    "exchange": "NASDAQ",
    "name": "Atomera Incorporated"
  },
  {
    "ticker": "ATOS",
    "exchange": "NASDAQ",
    "name": "Atossa Therapeutics Inc."
  },
  {
    "ticker": "ATR",
    "exchange": "NYSE",
    "name": "Aptargroup Inc."
  },
  {
    "ticker": "ATRA",
    "exchange": "NASDAQ",
    "name": "Atara Biotherapeutics Inc"
  },
  {
    "ticker": "ATRC",
    "exchange": "NASDAQ",
    "name": "AtriCure Inc."
  },
  {
    "ticker": "ATRI",
    "exchange": "NASDAQ",
    "name": "Atrion Corporation"
  },
  {
    "ticker": "ATRO",
    "exchange": "NASDAQ",
    "name": "Astronics Corporation"
  },
  {
    "ticker": "ATRS",
    "exchange": "NASDAQ",
    "name": "Antares Pharma Inc."
  },
  {
    "ticker": "ATSG",
    "exchange": "NASDAQ",
    "name": "Air Transport Services Group Inc."
  },
  {
    "ticker": "ATTO",
    "exchange": "NYSE",
    "name": "Atento SA"
  },
  {
    "ticker": "ATUS",
    "exchange": "NYSE",
    "name": "Altice USA Inc. Class A"
  },
  {
    "ticker": "ATV",
    "exchange": "NYSE",
    "name": "Acorn International Inc. Sponsored ADR"
  },
  {
    "ticker": "ATVI",
    "exchange": "NASDAQ",
    "name": "Activision Blizzard Inc."
  },
  {
    "ticker": "ATXI",
    "exchange": "NASDAQ",
    "name": "Avenue Therapeutics Inc."
  },
  {
    "ticker": "AU",
    "exchange": "NYSE",
    "name": "AngloGold Ashanti Limited Sponsored ADR"
  },
  {
    "ticker": "AUB",
    "exchange": "NASDAQ",
    "name": "Atlantic Union Bankshares Corporation"
  },
  {
    "ticker": "AUBAP",
    "exchange": "NASDAQ",
    "name": "Atlantic Union Bankshares Corporation Depositary Shs Repr 1/400th 6.875% Non-Cum Red Perp Pfd Shs Series A"
  },
  {
    "ticker": "AUBN",
    "exchange": "NASDAQ",
    "name": "Auburn National Bancorporation Inc."
  },
  {
    "ticker": "AUDC",
    "exchange": "NASDAQ",
    "name": "AudioCodes Ltd."
  },
  {
    "ticker": "AUG",
    "exchange": "NYSE American",
    "name": "Auryn Resources Inc."
  },
  {
    "ticker": "AUGZ",
    "exchange": "Cboe BZX",
    "name": "TrueShares Structured Outcome (August) ETF"
  },
  {
    "ticker": "AUMN",
    "exchange": "NYSE American",
    "name": "Golden Minerals Company"
  },
  {
    "ticker": "AUPH",
    "exchange": "NASDAQ",
    "name": "Aurinia Pharmaceuticals Inc."
  },
  {
    "ticker": "AUSF",
    "exchange": "NYSE ARCA",
    "name": "Global X Adaptive U.S. Factor ETF"
  },
  {
    "ticker": "AUTL",
    "exchange": "NASDAQ",
    "name": "Autolus Therapeutics Plc Sponsored ADR"
  },
  {
    "ticker": "AUTO",
    "exchange": "NASDAQ",
    "name": "AutoWeb Inc"
  },
  {
    "ticker": "AUY",
    "exchange": "NYSE",
    "name": "Yamana Gold Inc."
  },
  {
    "ticker": "AVA",
    "exchange": "NYSE",
    "name": "Avista Corporation"
  },
  {
    "ticker": "AVAL",
    "exchange": "NYSE",
    "name": "Grupo Aval Acciones y Valores SA Sponsored ADR Pfd"
  },
  {
    "ticker": "AVAV",
    "exchange": "NASDAQ",
    "name": "AeroVironment Inc."
  },
  {
    "ticker": "AVB",
    "exchange": "NYSE",
    "name": "AvalonBay Communities Inc."
  },
  {
    "ticker": "AVCO",
    "exchange": "NASDAQ",
    "name": "Avalon GloboCare Corp."
  },
  {
    "ticker": "AVCT",
    "exchange": "NASDAQ",
    "name": "American Virtual Cloud Technologies Inc"
  },
  {
    "ticker": "AVCTW",
    "exchange": "NASDAQ",
    "name": "American Virtual Cloud Technologies Inc. Warrant 2020-07.04.25 on Am Vrtl Cld Tech"
  },
  {
    "ticker": "AVD",
    "exchange": "NYSE",
    "name": "American Vanguard Corporation"
  },
  {
    "ticker": "AVDE",
    "exchange": "NYSE ARCA",
    "name": "Avantis International Equity ETF"
  },
  {
    "ticker": "AVDL",
    "exchange": "NASDAQ",
    "name": "Avadel Pharmaceuticals Plc Sponsored ADR"
  },
  {
    "ticker": "AVDV",
    "exchange": "NYSE ARCA",
    "name": "Avantis International Small Cap Value ETF"
  },
  {
    "ticker": "AVEM",
    "exchange": "NYSE ARCA",
    "name": "Avantis Emerging Markets Equity ETF"
  },
  {
    "ticker": "AVEO",
    "exchange": "NASDAQ",
    "name": "AVEO Pharmaceuticals Inc."
  },
  {
    "ticker": "AVGO",
    "exchange": "NASDAQ",
    "name": "Broadcom Inc."
  },
  {
    "ticker": "AVGOP",
    "exchange": "NASDAQ",
    "name": "Broadcom Inc 8.00 % Cum Conv Pfd Registered Shs 2019-30.09.22 Series A"
  },
  {
    "ticker": "AVGR",
    "exchange": "NASDAQ",
    "name": "Avinger Inc."
  },
  {
    "ticker": "AVID",
    "exchange": "NASDAQ",
    "name": "Avid Technology Inc."
  },
  {
    "ticker": "AVK",
    "exchange": "NYSE",
    "name": "Advent Convertible and Income Fund"
  },
  {
    "ticker": "AVLR",
    "exchange": "NYSE",
    "name": "Avalara Inc"
  },
  {
    "ticker": "AVNS",
    "exchange": "NYSE",
    "name": "Avanos Medical Inc."
  },
  {
    "ticker": "AVNT",
    "exchange": "NYSE",
    "name": "Avient Corporation"
  },
  {
    "ticker": "AVNW",
    "exchange": "NASDAQ",
    "name": "Aviat Networks Inc."
  },
  {
    "ticker": "AVRO",
    "exchange": "NASDAQ",
    "name": "AVROBIO Inc"
  },
  {
    "ticker": "AVT",
    "exchange": "NASDAQ",
    "name": "Avnet Inc."
  },
  {
    "ticker": "AVTR",
    "exchange": "NYSE",
    "name": "Avantor Inc."
  },
  {
    "ticker": "AVTR-A",
    "exchange": "NYSE",
    "name": "Avantor Inc. Cum Conv Pfd Registered Shs Series A"
  },
  {
    "ticker": "AVUS",
    "exchange": "NYSE ARCA",
    "name": "Avantis U.S. Equity ETF"
  },
  {
    "ticker": "AVUV",
    "exchange": "NYSE ARCA",
    "name": "Avantis U.S. Small Cap Value ETF"
  },
  {
    "ticker": "AVXL",
    "exchange": "NASDAQ",
    "name": "Anavex Life Sciences Corp."
  },
  {
    "ticker": "AVY",
    "exchange": "NYSE",
    "name": "Avery Dennison Corporation"
  },
  {
    "ticker": "AVYA",
    "exchange": "NYSE",
    "name": "Avaya Holdings Corp."
  },
  {
    "ticker": "AWAY",
    "exchange": "NYSE ARCA",
    "name": "ETFMG Travel Tech ETF"
  },
  {
    "ticker": "AWF",
    "exchange": "NYSE",
    "name": "AllianceBernstein Global High Income Fund Inc"
  },
  {
    "ticker": "AWH",
    "exchange": "NASDAQ",
    "name": "Aspira Women's Health Inc."
  },
  {
    "ticker": "AWI",
    "exchange": "NYSE",
    "name": "Armstrong World Industries Inc."
  },
  {
    "ticker": "AWK",
    "exchange": "NYSE",
    "name": "American Water Works Company Inc."
  },
  {
    "ticker": "AWP",
    "exchange": "NYSE",
    "name": "Aberdeen Global Premier Properties Fund of Benef Interest"
  },
  {
    "ticker": "AWR",
    "exchange": "NYSE",
    "name": "American States Water Company"
  },
  {
    "ticker": "AWRE",
    "exchange": "NASDAQ",
    "name": "Aware Inc."
  },
  {
    "ticker": "AWTM",
    "exchange": "NYSE ARCA",
    "name": "Aware Ultra-Short Duration Enhanced Income ETF"
  },
  {
    "ticker": "AWX",
    "exchange": "NYSE American",
    "name": "Avalon Holdings Corporation Class A"
  },
  {
    "ticker": "AX",
    "exchange": "NYSE",
    "name": "Axos Financial Inc."
  },
  {
    "ticker": "AXAS",
    "exchange": "NASDAQ",
    "name": "Abraxas Petroleum Corporation"
  },
  {
    "ticker": "AXDX",
    "exchange": "NASDAQ",
    "name": "Accelerate Diagnostics Inc."
  },
  {
    "ticker": "AXGN",
    "exchange": "NASDAQ",
    "name": "Axogen Inc."
  },
  {
    "ticker": "AXGT",
    "exchange": "NASDAQ",
    "name": "Axovant Gene Therapies Ltd."
  },
  {
    "ticker": "AXL",
    "exchange": "NYSE",
    "name": "American Axle & Manufacturing Holdings Inc."
  },
  {
    "ticker": "AXLA",
    "exchange": "NASDAQ",
    "name": "Axcella Health Inc."
  },
  {
    "ticker": "AXNX",
    "exchange": "NASDAQ",
    "name": "Axonics Modulation Technologies Inc."
  },
  {
    "ticker": "AXO",
    "exchange": "NYSE",
    "name": "Axos Financial Inc. 6.25 % Notes 2016-28.02.26"
  },
  {
    "ticker": "AXP",
    "exchange": "NYSE",
    "name": "American Express Company"
  },
  {
    "ticker": "AXR",
    "exchange": "NYSE",
    "name": "AMREP Corporation"
  },
  {
    "ticker": "AXS",
    "exchange": "NYSE",
    "name": "Axis Capital Holdings Limited"
  },
  {
    "ticker": "AXS-E",
    "exchange": "NYSE",
    "name": "Axis Capital Holdings Ltd Deposit Shs Repr 1/100th 5.50 % Non-Cum Pfd Shs Series E"
  },
  {
    "ticker": "AXSM",
    "exchange": "NASDAQ",
    "name": "Axsome Therapeutics Inc."
  },
  {
    "ticker": "AXTA",
    "exchange": "NYSE",
    "name": "Axalta Coating Systems Ltd."
  },
  {
    "ticker": "AXTI",
    "exchange": "NASDAQ",
    "name": "AXT Inc."
  },
  {
    "ticker": "AXU",
    "exchange": "NYSE American",
    "name": "Alexco Resource Corp."
  },
  {
    "ticker": "AY",
    "exchange": "NASDAQ",
    "name": "Atlantica Sustainable Infrastructure plc"
  },
  {
    "ticker": "AYI",
    "exchange": "NYSE",
    "name": "Acuity Brands Inc."
  },
  {
    "ticker": "AYLA",
    "exchange": "NASDAQ",
    "name": "Ayala Pharmaceuticals Inc"
  },
  {
    "ticker": "AYRO",
    "exchange": "NASDAQ",
    "name": "AYRO Inc."
  },
  {
    "ticker": "AYTU",
    "exchange": "NASDAQ",
    "name": "Aytu BioScience Inc"
  },
  {
    "ticker": "AYX",
    "exchange": "NYSE",
    "name": "Alteryx Inc. Class A"
  },
  {
    "ticker": "AZAA",
    "exchange": "NYSE ARCA",
    "name": "AllianzIM US Large Cap Buffer10 Apr ETF"
  },
  {
    "ticker": "AZAL",
    "exchange": "NYSE ARCA",
    "name": "AllianzIM U.S. Large Cap Buffer10 Jul ETF"
  },
  {
    "ticker": "AZBA",
    "exchange": "NYSE ARCA",
    "name": "AllianzIM US Large Cap Buffer20 Apr ETF"
  },
  {
    "ticker": "AZBL",
    "exchange": "NYSE ARCA",
    "name": "AllianzIM U.S. Large Cap Buffer20 Jul ETF"
  },
  {
    "ticker": "AZEK",
    "exchange": "NYSE",
    "name": "AZEK Company Inc Class A"
  },
  {
    "ticker": "AZN",
    "exchange": "NYSE",
    "name": "Astrazeneca PLC Sponsored ADR"
  },
  {
    "ticker": "AZO",
    "exchange": "NYSE",
    "name": "AutoZone Inc."
  },
  {
    "ticker": "AZPN",
    "exchange": "NASDAQ",
    "name": "Aspen Technology Inc."
  },
  {
    "ticker": "AZRE",
    "exchange": "NYSE",
    "name": "Azure Power Global Ltd."
  },
  {
    "ticker": "AZRX",
    "exchange": "NASDAQ",
    "name": "AzurRx BioPharma Inc."
  },
  {
    "ticker": "AZUL",
    "exchange": "NYSE",
    "name": "Azul S.A. Sponsored ADR Pfd"
  },
  {
    "ticker": "AZZ",
    "exchange": "NYSE",
    "name": "AZZ Inc."
  },
  {
    "ticker": "B",
    "exchange": "NYSE",
    "name": "Barnes Group Inc."
  },
  {
    "ticker": "BA",
    "exchange": "NYSE",
    "name": "Boeing Company"
  },
  {
    "ticker": "BAB",
    "exchange": "NYSE ARCA",
    "name": "Invesco Taxable Municipal Bond ETF"
  },
  {
    "ticker": "BABA",
    "exchange": "NYSE",
    "name": "Alibaba Group Holding Ltd. Sponsored ADR"
  },
  {
    "ticker": "BAC",
    "exchange": "NYSE",
    "name": "Bank of America Corp"
  },
  {
    "ticker": "BAC-A",
    "exchange": "NYSE",
    "name": "Bank of America Corp Deposit Shs Repr 1/1.000th Non-Cum Pfd Shs Series -EE-"
  },
  {
    "ticker": "BAC-B",
    "exchange": "NYSE",
    "name": "Bank of America Corp Deposit Shs Repr 1/1000th Non-Cum Red Perp Pfd Shs Series GG"
  },
  {
    "ticker": "BAC-C",
    "exchange": "NYSE",
    "name": "Bank of America Corp Deposit Shs Repr 1/1000th Non-Cum Pfd Shs Series -CC-"
  },
  {
    "ticker": "BAC-E",
    "exchange": "NYSE",
    "name": "Bank of America Corp Deposit Shs Repr 1/1000th Perp Pfd Shs Series E"
  },
  {
    "ticker": "BAC-K",
    "exchange": "NYSE",
    "name": "Bank of America Corp Depositary Shs Repr 1/1000th Non-Cum Perp Red Pfd Registered Shs Ser -HH-"
  },
  {
    "ticker": "BAC-L",
    "exchange": "NYSE",
    "name": "Bank of America Corp 7.25 % Non Cum Perp Conv Pfd Registered Shs Series L"
  },
  {
    "ticker": "BAC-M",
    "exchange": "NYSE",
    "name": "Bank of America Corp Depositary Shs Repr 1/1000th Perp Non-Cum Pfd Registered Shs Series -KK-"
  },
  {
    "ticker": "BAC-N",
    "exchange": "NYSE",
    "name": "Bank of America Corp Depositary Shs Repr 1/1000th Perp Non-Cum Red Pfd Rg Shs Series -LL-"
  },
  {
    "ticker": "BAF",
    "exchange": "NYSE",
    "name": "BlackRock Municipal Income Investment Quality Trust"
  },
  {
    "ticker": "BAH",
    "exchange": "NYSE",
    "name": "Booz Allen Hamilton Holding Corporation Class A"
  },
  {
    "ticker": "BAK",
    "exchange": "NYSE",
    "name": "Braskem S.A. Sponsored ADR Pfd Class A"
  },
  {
    "ticker": "BAL",
    "exchange": "NYSE ARCA",
    "name": "iPath Series B Bloomberg Cotton Subindex Total Return ETN"
  },
  {
    "ticker": "BAM",
    "exchange": "NYSE",
    "name": "Brookfield Asset Management Inc. Class A"
  },
  {
    "ticker": "BANC",
    "exchange": "NYSE",
    "name": "Banc of California Incorporated"
  },
  {
    "ticker": "BANC-D",
    "exchange": "NYSE",
    "name": "Banc of California Incorporated Deposit Repr 1/40th 7.375 % Non Cum Perp Pfd Series D"
  },
  {
    "ticker": "BANC-E",
    "exchange": "NYSE",
    "name": "Banc of California Inc Deposit Shs Repr 1/40th Non-Cum Pfd Shs Series E"
  },
  {
    "ticker": "BAND",
    "exchange": "NASDAQ",
    "name": "Bandwidth Inc. Class A"
  },
  {
    "ticker": "BANF",
    "exchange": "NASDAQ",
    "name": "BancFirst Corporation"
  },
  {
    "ticker": "BANFP",
    "exchange": "NASDAQ",
    "name": "BFC Capital Trust II Trust Pfd Secs"
  },
  {
    "ticker": "BANR",
    "exchange": "NASDAQ",
    "name": "Banner Corporation"
  },
  {
    "ticker": "BANX",
    "exchange": "NASDAQ",
    "name": "StoneCastle Financial Corp."
  },
  {
    "ticker": "BAP",
    "exchange": "NYSE",
    "name": "Credicorp Ltd."
  },
  {
    "ticker": "BAPR",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Buffer ETF - April"
  },
  {
    "ticker": "BAR",
    "exchange": "NYSE ARCA",
    "name": "GraniteShares Gold Shares"
  },
  {
    "ticker": "BASI",
    "exchange": "NASDAQ",
    "name": "Bioanalytical Systems Inc."
  },
  {
    "ticker": "BATL",
    "exchange": "NYSE American",
    "name": "Battalion Oil Corporation"
  },
  {
    "ticker": "BATRA",
    "exchange": "NASDAQ",
    "name": "Liberty Media Corp. Series A Liberty Braves"
  },
  {
    "ticker": "BATRK",
    "exchange": "NASDAQ",
    "name": "Liberty Media Corp. Series C Liberty Braves"
  },
  {
    "ticker": "BATT",
    "exchange": "NYSE ARCA",
    "name": "Amplify Advanced Battery Metals & Materials ETF"
  },
  {
    "ticker": "BAUG",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Buffer ETF - August"
  },
  {
    "ticker": "BAX",
    "exchange": "NYSE",
    "name": "Baxter International Inc."
  },
  {
    "ticker": "BB",
    "exchange": "NYSE",
    "name": "BlackBerry Limited"
  },
  {
    "ticker": "BBAR",
    "exchange": "NYSE",
    "name": "Banco BBVA Argentina SA Sponsored ADR"
  },
  {
    "ticker": "BBAX",
    "exchange": "Cboe BZX",
    "name": "JPMorgan BetaBuilders Developed Asia ex-Japan ETF"
  },
  {
    "ticker": "BBBY",
    "exchange": "NASDAQ",
    "name": "Bed Bath & Beyond Inc."
  },
  {
    "ticker": "BBC",
    "exchange": "NYSE ARCA",
    "name": "Virtus LifeSci Biotech Clinical Trials ETF"
  },
  {
    "ticker": "BBCA",
    "exchange": "Cboe BZX",
    "name": "JPMorgan BetaBuilders Canada ETF"
  },
  {
    "ticker": "BBCP",
    "exchange": "NASDAQ",
    "name": "Concrete Pumping Holdings Inc. Class A"
  },
  {
    "ticker": "BBD",
    "exchange": "NYSE",
    "name": "Banco Bradesco S.A. Sponsored ADR Pfd"
  },
  {
    "ticker": "BBDC",
    "exchange": "NYSE",
    "name": "Barings BDC Inc."
  },
  {
    "ticker": "BBDO",
    "exchange": "NYSE",
    "name": "Banco Bradesco S.A. Sponsored ADR"
  },
  {
    "ticker": "BBEU",
    "exchange": "Cboe BZX",
    "name": "JPMorgan BetaBuilders Europe ETF"
  },
  {
    "ticker": "BBF",
    "exchange": "NYSE",
    "name": "BlackRock Municipal Income Investment Trust"
  },
  {
    "ticker": "BBGI",
    "exchange": "NASDAQ",
    "name": "Beasley Broadcast Group Inc. Class A"
  },
  {
    "ticker": "BBH",
    "exchange": "NASDAQ",
    "name": "VanEck Vectors Biotech ETF"
  },
  {
    "ticker": "BBI",
    "exchange": "NASDAQ",
    "name": "Brickell Biotech Inc."
  },
  {
    "ticker": "BBIN",
    "exchange": "Cboe BZX",
    "name": "JPMorgan BetaBuilders International Equity ETF"
  },
  {
    "ticker": "BBIO",
    "exchange": "NASDAQ",
    "name": "BridgeBio Pharma Inc."
  },
  {
    "ticker": "BBJP",
    "exchange": "Cboe BZX",
    "name": "JPMorgan BetaBuilders Japan ETF"
  },
  {
    "ticker": "BBK",
    "exchange": "NYSE",
    "name": "BlackRock Municipal Bond Trust"
  },
  {
    "ticker": "BBL",
    "exchange": "NYSE",
    "name": "BHP Group Plc Sponsored ADR"
  },
  {
    "ticker": "BBMC",
    "exchange": "NYSE ARCA",
    "name": "JPMorgan BetaBuilders U.S. Mid Cap Equity ETF"
  },
  {
    "ticker": "BBN",
    "exchange": "NYSE",
    "name": "BlackRock Taxable Municipal Bond Trust"
  },
  {
    "ticker": "BBP",
    "exchange": "NYSE ARCA",
    "name": "Virtus LifeSci Biotech Products ETF"
  },
  {
    "ticker": "BBQ",
    "exchange": "NASDAQ",
    "name": "BBQ Holdings Inc."
  },
  {
    "ticker": "BBRE",
    "exchange": "Cboe BZX",
    "name": "JPMorgan BetaBuilders MSCI U.S. REIT ETF"
  },
  {
    "ticker": "BBSA",
    "exchange": "Cboe BZX",
    "name": "JPMorgan Betabuilders 1-5 Year U.S. Aggregate Bond ETF"
  },
  {
    "ticker": "BBSI",
    "exchange": "NASDAQ",
    "name": "Barrett Business Services Inc."
  },
  {
    "ticker": "BBU",
    "exchange": "NYSE",
    "name": "Brookfield Business Partners LP"
  },
  {
    "ticker": "BBUS",
    "exchange": "Cboe BZX",
    "name": "JP Morgan Betabuilders U.S. Equity ETF"
  },
  {
    "ticker": "BBVA",
    "exchange": "NYSE",
    "name": "Banco Bilbao Vizcaya Argentaria S.A. Sponsored ADR"
  },
  {
    "ticker": "BBW",
    "exchange": "NYSE",
    "name": "BuildABear Workshop Inc."
  },
  {
    "ticker": "BBX",
    "exchange": "NYSE",
    "name": "BBX Capital Corporation Class A"
  },
  {
    "ticker": "BBY",
    "exchange": "NYSE",
    "name": "Best Buy Co. Inc."
  },
  {
    "ticker": "BC",
    "exchange": "NYSE",
    "name": "Brunswick Corporation"
  },
  {
    "ticker": "BC-A",
    "exchange": "NYSE",
    "name": "Brunswick Corporation 6.5 % Notes 2018-15.10.48 Global"
  },
  {
    "ticker": "BC-B",
    "exchange": "NYSE",
    "name": "Brunswick Corporation 6.625 % Notes 2018-15.01.49 Global"
  },
  {
    "ticker": "BC-C",
    "exchange": "NYSE",
    "name": "Brunswick Corporation 6.375 % Notes 2019-15.04.49 Global"
  },
  {
    "ticker": "BCBP",
    "exchange": "NASDAQ",
    "name": "BCB Bancorp Inc."
  },
  {
    "ticker": "BCC",
    "exchange": "NYSE",
    "name": "Boise Cascade Co."
  },
  {
    "ticker": "BCD",
    "exchange": "NYSE ARCA",
    "name": "Aberdeen Standard Bloomberg All Commodity Longer Dated Strategy K-1 Free ETF"
  },
  {
    "ticker": "BCDA",
    "exchange": "NASDAQ",
    "name": "BioCardia Inc."
  },
  {
    "ticker": "BCDAW",
    "exchange": "NASDAQ",
    "name": "BioCardia Inc Warrant 2019-30.07.22 On BioCardia Rg"
  },
  {
    "ticker": "BCE",
    "exchange": "NYSE",
    "name": "BCE Inc."
  },
  {
    "ticker": "BCEI",
    "exchange": "NYSE",
    "name": "Bonanza Creek Energy Inc"
  },
  {
    "ticker": "BCEL",
    "exchange": "NASDAQ",
    "name": "Atreca Inc. Class A"
  },
  {
    "ticker": "BCH",
    "exchange": "NYSE",
    "name": "Banco de Chile Sponsored ADR"
  },
  {
    "ticker": "BCI",
    "exchange": "NYSE ARCA",
    "name": "Aberdeen Standard Bloomberg All Commodity Strategy K-1 Free ETF"
  },
  {
    "ticker": "BCLI",
    "exchange": "NASDAQ",
    "name": "Brainstorm Cell Therapeutics Inc."
  },
  {
    "ticker": "BCM",
    "exchange": "NYSE ARCA",
    "name": "iPath Pure Beta Broad Commodity ETN"
  },
  {
    "ticker": "BCML",
    "exchange": "NASDAQ",
    "name": "BayCom Corp."
  },
  {
    "ticker": "BCO",
    "exchange": "NYSE",
    "name": "Brink's Company"
  },
  {
    "ticker": "BCOM",
    "exchange": "NASDAQ",
    "name": "B Communications Ltd."
  },
  {
    "ticker": "BCOR",
    "exchange": "NASDAQ",
    "name": "Blucora Inc."
  },
  {
    "ticker": "BCOV",
    "exchange": "NASDAQ",
    "name": "Brightcove Inc."
  },
  {
    "ticker": "BCOW",
    "exchange": "NASDAQ",
    "name": "1895 Bancorp of Wisconsin Inc."
  },
  {
    "ticker": "BCPC",
    "exchange": "NASDAQ",
    "name": "Balchem Corporation"
  },
  {
    "ticker": "BCRX",
    "exchange": "NASDAQ",
    "name": "BioCryst Pharmaceuticals Inc."
  },
  {
    "ticker": "BCS",
    "exchange": "NYSE",
    "name": "Barclays PLC Sponsored ADR"
  },
  {
    "ticker": "BCSF",
    "exchange": "NYSE",
    "name": "Bain Capital Specialty Finance Inc."
  },
  {
    "ticker": "BCTF",
    "exchange": "NASDAQ",
    "name": "Bancorp 34 Inc."
  },
  {
    "ticker": "BCV",
    "exchange": "NYSE American",
    "name": "Bancroft Fund Ltd"
  },
  {
    "ticker": "BCV-A",
    "exchange": "NYSE American",
    "name": "Bancroft Fund Ltd Cum Pfd Shs Series A"
  },
  {
    "ticker": "BCX",
    "exchange": "NYSE",
    "name": "BlackRock Resources & Commodities Strategy Trust"
  },
  {
    "ticker": "BCYC",
    "exchange": "NASDAQ",
    "name": "Bicycle Therapeutics Plc Sponsored ADR"
  },
  {
    "ticker": "BDC",
    "exchange": "NYSE",
    "name": "Belden Inc."
  },
  {
    "ticker": "BDCS",
    "exchange": "NYSE ARCA",
    "name": "ETRACS Wells Fargo Business Development Co. Index"
  },
  {
    "ticker": "BDCX",
    "exchange": "NYSE ARCA",
    "name": "ETRACS Quarterly Pay 1.5x Leveraged Wells Fargo BDC Index ETN"
  },
  {
    "ticker": "BDCY",
    "exchange": "NYSE ARCA",
    "name": "ETRACS 2xMonthly Leveraged Wells Fargo Diversified Business Development Company Index ETN"
  },
  {
    "ticker": "BDCZ",
    "exchange": "NYSE ARCA",
    "name": "ETRACS Linked to Wells Fargo Business Development Co Index ETN Series B"
  },
  {
    "ticker": "BDEC",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Buffer ETF - December"
  },
  {
    "ticker": "BDGE",
    "exchange": "NASDAQ",
    "name": "Bridge Bancorp Inc."
  },
  {
    "ticker": "BDJ",
    "exchange": "NYSE",
    "name": "BlackRock Enhanced Equity Dividend Trust"
  },
  {
    "ticker": "BDL",
    "exchange": "NYSE American",
    "name": "Flanigan's Enterprises Inc."
  },
  {
    "ticker": "BDN",
    "exchange": "NYSE",
    "name": "Brandywine Realty Trust"
  },
  {
    "ticker": "BDR",
    "exchange": "NYSE American",
    "name": "Blonder Tongue Laboratories Inc."
  },
  {
    "ticker": "BDRY",
    "exchange": "NYSE ARCA",
    "name": "Breakwave Dry Bulk Shipping ETF"
  },
  {
    "ticker": "BDSI",
    "exchange": "NASDAQ",
    "name": "BioDelivery Sciences International Inc."
  },
  {
    "ticker": "BDTX",
    "exchange": "NASDAQ",
    "name": "Black Diamond Therapeutics Inc."
  },
  {
    "ticker": "BDX",
    "exchange": "NYSE",
    "name": "Becton Dickinson and Company"
  },
  {
    "ticker": "BDXB",
    "exchange": "NYSE",
    "name": "Becton Dickinson and Company Depositary Shs Repr 1/20th Cum Conv Pfd Rg Shs 2020-01.06.23 Ser B"
  },
  {
    "ticker": "BE",
    "exchange": "NYSE",
    "name": "Bloom Energy Corporation Class A"
  },
  {
    "ticker": "BEAM",
    "exchange": "NASDAQ",
    "name": "Beam Therapeutics Inc."
  },
  {
    "ticker": "BEAT",
    "exchange": "NASDAQ",
    "name": "BioTelemetry Inc."
  },
  {
    "ticker": "BECN",
    "exchange": "NASDAQ",
    "name": "Beacon Roofing Supply Inc."
  },
  {
    "ticker": "BEDU",
    "exchange": "NYSE",
    "name": "Bright Scholar Education Holdings Limited Sponsored ADR Class A"
  },
  {
    "ticker": "BEKE",
    "exchange": "NYSE",
    "name": "KE Holdings Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "BELFA",
    "exchange": "NASDAQ",
    "name": "Bel Fuse Inc. Class A"
  },
  {
    "ticker": "BELFB",
    "exchange": "NASDAQ",
    "name": "Bel Fuse Inc. Class B"
  },
  {
    "ticker": "BEN",
    "exchange": "NYSE",
    "name": "Franklin Resources Inc."
  },
  {
    "ticker": "BEP",
    "exchange": "NYSE",
    "name": "Brookfield Renewable Partners LP"
  },
  {
    "ticker": "BEP-A",
    "exchange": "NYSE",
    "name": "Brookfield Renewable Partners LP 5.25 % Cum Conv Red Perp Pfd Partnership Units A -Series 17-"
  },
  {
    "ticker": "BEPC",
    "exchange": "NYSE",
    "name": "Brookfield Renewable Corporation Class A"
  },
  {
    "ticker": "BERY",
    "exchange": "NYSE",
    "name": "Berry Global Group Inc"
  },
  {
    "ticker": "BEST",
    "exchange": "NYSE",
    "name": "BEST Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "BETZ",
    "exchange": "NYSE ARCA",
    "name": "Roundhill Sports Betting & iGaming ETF"
  },
  {
    "ticker": "BF.A",
    "exchange": "NYSE",
    "name": "Brown-Forman Corporation Class A"
  },
  {
    "ticker": "BF.B",
    "exchange": "NYSE",
    "name": "Brown-Forman Corporation Class B"
  },
  {
    "ticker": "BFAM",
    "exchange": "NYSE",
    "name": "Bright Horizons Family Solutions Inc."
  },
  {
    "ticker": "BFC",
    "exchange": "NASDAQ",
    "name": "Bank First Corp"
  },
  {
    "ticker": "BFEB",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Buffer ETF - February"
  },
  {
    "ticker": "BFIN",
    "exchange": "NASDAQ",
    "name": "BankFinancial Corporation"
  },
  {
    "ticker": "BFIT",
    "exchange": "NASDAQ",
    "name": "Global X Health & Wellness Thematic ETF"
  },
  {
    "ticker": "BFK",
    "exchange": "NYSE",
    "name": "Blackrock Municipal Income Trust"
  },
  {
    "ticker": "BFO",
    "exchange": "NYSE",
    "name": "Blackrock Florida Municipal 2020 Term Trust"
  },
  {
    "ticker": "BFOR",
    "exchange": "NYSE ARCA",
    "name": "ALPS Barron's 400 ETF"
  },
  {
    "ticker": "BFRA",
    "exchange": "NASDAQ",
    "name": "Biofrontera AG Sponsored ADR"
  },
  {
    "ticker": "BFS",
    "exchange": "NYSE",
    "name": "Saul Centers Inc."
  },
  {
    "ticker": "BFS-D",
    "exchange": "NYSE",
    "name": "Saul Centers Inc Deposit Shs Repr 1/100th 6.125 % Cum Conv Red Perp Pfd Registered Shs"
  },
  {
    "ticker": "BFS-E",
    "exchange": "NYSE",
    "name": "Saul Centers Inc Depositary Shs Repr 1/100th Conv Cum Red Pfd Registered Shs Series E"
  },
  {
    "ticker": "BFST",
    "exchange": "NASDAQ",
    "name": "Business First Bancshares Inc."
  },
  {
    "ticker": "BFT=",
    "exchange": "NYSE",
    "name": "Foley Trasimene Acquisition Corp. II Units Cons of 1 Sh -A- + 1/3 Wt 11.08.25"
  },
  {
    "ticker": "BFY",
    "exchange": "NYSE",
    "name": "Blackrock New York Municipal Income Trust II"
  },
  {
    "ticker": "BFYT",
    "exchange": "NASDAQ",
    "name": "Benefytt Technologies Inc. Class A"
  },
  {
    "ticker": "BFZ",
    "exchange": "NYSE",
    "name": "Blackrock California Municipal Income Trust"
  },
  {
    "ticker": "BG",
    "exchange": "NYSE",
    "name": "Bunge Limited"
  },
  {
    "ticker": "BGB",
    "exchange": "NYSE",
    "name": "Blackstone / GSO Strategic Credit Fund"
  },
  {
    "ticker": "BGCP",
    "exchange": "NASDAQ",
    "name": "BGC Partners Inc. Class A"
  },
  {
    "ticker": "BGFV",
    "exchange": "NASDAQ",
    "name": "Big 5 Sporting Goods Corporation"
  },
  {
    "ticker": "BGH",
    "exchange": "NYSE",
    "name": "Barings Global Short Duration High Yield Fund of Benef Interest"
  },
  {
    "ticker": "BGI",
    "exchange": "NYSE American",
    "name": "Birks Group Inc."
  },
  {
    "ticker": "BGIO",
    "exchange": "NYSE",
    "name": "Blackrock 2022 Global Income Opportunity Trust"
  },
  {
    "ticker": "BGNE",
    "exchange": "NASDAQ",
    "name": "BeiGene Ltd. Sponsored ADR"
  },
  {
    "ticker": "BGR",
    "exchange": "NYSE",
    "name": "BlackRock Energy and Resources Trust"
  },
  {
    "ticker": "BGRN",
    "exchange": "NASDAQ",
    "name": "iShares Global Green Bond ETF"
  },
  {
    "ticker": "BGS",
    "exchange": "NYSE",
    "name": "B&G Foods Inc."
  },
  {
    "ticker": "BGSF",
    "exchange": "NYSE",
    "name": "BG Staffing Inc."
  },
  {
    "ticker": "BGT",
    "exchange": "NYSE",
    "name": "BlackRock Floating Rate Income Trust of Benef Interest"
  },
  {
    "ticker": "BGX",
    "exchange": "NYSE",
    "name": "Blackstone / GSO Long Short Credit Income Fund"
  },
  {
    "ticker": "BGY",
    "exchange": "NYSE",
    "name": "BlackRock Enhanced International Dividend Trust of Benef Interest"
  },
  {
    "ticker": "BH",
    "exchange": "NYSE",
    "name": "Biglari Holdings Inc. Class B"
  },
  {
    "ticker": "BH.A",
    "exchange": "NYSE",
    "name": "Biglari Holdings Inc. Class A"
  },
  {
    "ticker": "BHAT",
    "exchange": "NASDAQ",
    "name": "Blue Hat Interactive Entertainment Technology"
  },
  {
    "ticker": "BHB",
    "exchange": "NYSE American",
    "name": "Bar Harbor Bankshares Inc."
  },
  {
    "ticker": "BHC",
    "exchange": "NYSE",
    "name": "Bausch Health Companies Inc."
  },
  {
    "ticker": "BHE",
    "exchange": "NYSE",
    "name": "Benchmark Electronics Inc."
  },
  {
    "ticker": "BHF",
    "exchange": "NASDAQ",
    "name": "Brighthouse Financial Inc."
  },
  {
    "ticker": "BHFAL",
    "exchange": "NASDAQ",
    "name": "Brighthouse Financial Inc 6.25 % Debentures 2018-15.09.58 Global"
  },
  {
    "ticker": "BHFAO",
    "exchange": "NASDAQ",
    "name": "Brighthouse Financial Inc Depositary Shs Repr 1/1000th Non-Cum Red Perp Pfd Reg Sh Series B"
  },
  {
    "ticker": "BHFAP",
    "exchange": "NASDAQ",
    "name": "Brighthouse Financial Inc. Depositary Shs Repr 1/1000th 6.6% Non-Cum Red Perp Pfd Reg Sh Series A"
  },
  {
    "ticker": "BHK",
    "exchange": "NYSE",
    "name": "Blackrock Core Bond Trust"
  },
  {
    "ticker": "BHLB",
    "exchange": "NYSE",
    "name": "Berkshire Hills Bancorp Inc."
  },
  {
    "ticker": "BHP",
    "exchange": "NYSE",
    "name": "BHP Group Ltd Sponsored ADR"
  },
  {
    "ticker": "BHR",
    "exchange": "NYSE",
    "name": "Braemar Hotels & Resorts Inc."
  },
  {
    "ticker": "BHR-B",
    "exchange": "NYSE",
    "name": "Braemar Hotels & Resorts Inc. 5.5 % Cum Conv Pfd Registered Shs Series -B-"
  },
  {
    "ticker": "BHR-D",
    "exchange": "NYSE",
    "name": "Braemar Hotels & Resorts Inc 8.25 % Cum Conv Red Perp Pfd Registered Shs Series D"
  },
  {
    "ticker": "BHTG",
    "exchange": "NASDAQ",
    "name": "BioHiTech Global Inc."
  },
  {
    "ticker": "BHV",
    "exchange": "NYSE",
    "name": "BlackRock Virginia Municipal Bond Trust"
  },
  {
    "ticker": "BHVN",
    "exchange": "NYSE",
    "name": "Biohaven Pharmaceutical Holding Company Ltd."
  },
  {
    "ticker": "BIB",
    "exchange": "NASDAQ",
    "name": "ProShares Ultra NASDAQdaq Biotechnology"
  },
  {
    "ticker": "BIBL",
    "exchange": "NYSE ARCA",
    "name": "Inspire 100 ETF"
  },
  {
    "ticker": "BICK",
    "exchange": "NASDAQ",
    "name": "First Trust BICK Index Fund"
  },
  {
    "ticker": "BIDU",
    "exchange": "NASDAQ",
    "name": "Baidu Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "BIF",
    "exchange": "NYSE",
    "name": "Boulder Growth & Income Fund Inc"
  },
  {
    "ticker": "BIG",
    "exchange": "NYSE",
    "name": "Big Lots Inc."
  },
  {
    "ticker": "BIGC",
    "exchange": "NASDAQ",
    "name": "BigCommerce Holdings Inc"
  },
  {
    "ticker": "BIIB",
    "exchange": "NASDAQ",
    "name": "Biogen Inc."
  },
  {
    "ticker": "BIL",
    "exchange": "NYSE ARCA",
    "name": "SPDR Bloomberg Barclays 1-3 Month T-Bill ETF"
  },
  {
    "ticker": "BILI",
    "exchange": "NASDAQ",
    "name": "Bilibili Inc. Sponsored ADR Class Z"
  },
  {
    "ticker": "BILL",
    "exchange": "NYSE",
    "name": "Bill.com Holdings Inc."
  },
  {
    "ticker": "BIMI",
    "exchange": "NASDAQ",
    "name": "BOQI International Medical Inc."
  },
  {
    "ticker": "BIO",
    "exchange": "NYSE",
    "name": "Bio-Rad Laboratories Inc. Class A"
  },
  {
    "ticker": "BIO.B",
    "exchange": "NYSE",
    "name": "Bio-Rad Laboratories Inc. Class B"
  },
  {
    "ticker": "BIOC",
    "exchange": "NASDAQ",
    "name": "Biocept Inc."
  },
  {
    "ticker": "BIOL",
    "exchange": "NASDAQ",
    "name": "BIOLNYSE American Inc."
  },
  {
    "ticker": "BIOX",
    "exchange": "NYSE American",
    "name": "Bioceres Crop Solutions Corp."
  },
  {
    "ticker": "BIOX+",
    "exchange": "NYSE American",
    "name": "Bioceres Crop Solutions Corp. Warrant -01.07.25"
  },
  {
    "ticker": "BIP",
    "exchange": "NYSE",
    "name": "Brookfield Infrastructure Partners L.P."
  },
  {
    "ticker": "BIPC",
    "exchange": "NYSE",
    "name": "Brookfield Infrastructure Corporation Class A"
  },
  {
    "ticker": "BIS",
    "exchange": "NASDAQ",
    "name": "ProShares UltraShort NASDAQdaq Biotechnology"
  },
  {
    "ticker": "BIT",
    "exchange": "NYSE",
    "name": "BlackRock Multi-Sector Income Trust"
  },
  {
    "ticker": "BITA",
    "exchange": "NYSE",
    "name": "Bitauto Holdings Ltd. Sponsored ADR"
  },
  {
    "ticker": "BIV",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Intermediate-Term Bond ETF"
  },
  {
    "ticker": "BIZD",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors BDC Income ETF"
  },
  {
    "ticker": "BJ",
    "exchange": "NYSE",
    "name": "BJ's Wholesale Club Holdings Inc."
  },
  {
    "ticker": "BJAN",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Buffer ETF - January"
  },
  {
    "ticker": "BJK",
    "exchange": "NASDAQ",
    "name": "VanEck Vectors Gaming ETF"
  },
  {
    "ticker": "BJRI",
    "exchange": "NASDAQ",
    "name": "BJ's Restaurants Inc."
  },
  {
    "ticker": "BJUL",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Buffer ETF - July"
  },
  {
    "ticker": "BJUN",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Buffer ETF - June"
  },
  {
    "ticker": "BK",
    "exchange": "NYSE",
    "name": "Bank of New York Mellon Corporation"
  },
  {
    "ticker": "BK-C",
    "exchange": "NYSE",
    "name": "Bank of New York Mellon Corp Deposit Shs Repr 1/4000 5.2 % Non Cum Pfd Shs Series C"
  },
  {
    "ticker": "BKAG",
    "exchange": "NYSE ARCA",
    "name": "BNY Mellon Core Bond ETF"
  },
  {
    "ticker": "BKCC",
    "exchange": "NASDAQ",
    "name": "BlackRock Capital Investment Corporation"
  },
  {
    "ticker": "BKD",
    "exchange": "NYSE",
    "name": "Brookdale Senior Living Inc."
  },
  {
    "ticker": "BKE",
    "exchange": "NYSE",
    "name": "Buckle Inc."
  },
  {
    "ticker": "BKEM",
    "exchange": "NYSE ARCA",
    "name": "BNY Mellon Emerging Markets Equity ETF"
  },
  {
    "ticker": "BKEP",
    "exchange": "NASDAQ",
    "name": "BlueKnight Energy Partners LP LLC"
  },
  {
    "ticker": "BKEPP",
    "exchange": "NASDAQ",
    "name": "BlueKnight Energy Partners LP LLC Pfd Units Series A"
  },
  {
    "ticker": "BKF",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI BRIC ETF"
  },
  {
    "ticker": "BKH",
    "exchange": "NYSE",
    "name": "Black Hills Corporation"
  },
  {
    "ticker": "BKHY",
    "exchange": "NYSE ARCA",
    "name": "BNY Mellon High Yield Beta ETF"
  },
  {
    "ticker": "BKI",
    "exchange": "NYSE",
    "name": "Black Knight Inc."
  },
  {
    "ticker": "BKIE",
    "exchange": "NYSE ARCA",
    "name": "BNY Mellon International Equity ETF"
  },
  {
    "ticker": "BKK",
    "exchange": "NYSE",
    "name": "Blackrock Municipal 2020 Term Trust"
  },
  {
    "ticker": "BKLC",
    "exchange": "NYSE ARCA",
    "name": "BNY Mellon US Large Cap Core Equity ETF"
  },
  {
    "ticker": "BKLN",
    "exchange": "NYSE ARCA",
    "name": "Invesco Senior Loan ETF"
  },
  {
    "ticker": "BKMC",
    "exchange": "NYSE ARCA",
    "name": "BNY Mellon US Mid Cap Core Equity ETF"
  },
  {
    "ticker": "BKN",
    "exchange": "NYSE",
    "name": "Blackrock Investment Quality Municipal Trust Inc"
  },
  {
    "ticker": "BKNG",
    "exchange": "NASDAQ",
    "name": "Booking Holdings Inc."
  },
  {
    "ticker": "BKR",
    "exchange": "NYSE",
    "name": "Baker Hughes Company Class A"
  },
  {
    "ticker": "BKSB",
    "exchange": "NYSE ARCA",
    "name": "BNY Mellon Short Duration Corporate Bond ETF"
  },
  {
    "ticker": "BKSC",
    "exchange": "NASDAQ",
    "name": "Bank of South Carolina Corporation"
  },
  {
    "ticker": "BKSE",
    "exchange": "NYSE ARCA",
    "name": "BNY Mellon US Small Cap Core Equity ETF"
  },
  {
    "ticker": "BKT",
    "exchange": "NYSE",
    "name": "Blackrock Income Trust Inc"
  },
  {
    "ticker": "BKTI",
    "exchange": "NYSE American",
    "name": "BK Technologies Corp."
  },
  {
    "ticker": "BKU",
    "exchange": "NYSE",
    "name": "BankUnited Inc."
  },
  {
    "ticker": "BKYI",
    "exchange": "NASDAQ",
    "name": "BIO-key International Inc."
  },
  {
    "ticker": "BL",
    "exchange": "NASDAQ",
    "name": "BlackLine Inc."
  },
  {
    "ticker": "BLBD",
    "exchange": "NASDAQ",
    "name": "Blue Bird Corporation"
  },
  {
    "ticker": "BLCM",
    "exchange": "NASDAQ",
    "name": "Bellicum Pharmaceuticals Inc"
  },
  {
    "ticker": "BLCN",
    "exchange": "NASDAQ",
    "name": "Reality Shares NASDAQdaq NextGen Economy ETF"
  },
  {
    "ticker": "BLCT",
    "exchange": "NASDAQ",
    "name": "BlueCity Holdings Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "BLD",
    "exchange": "NYSE",
    "name": "TopBuild Corp."
  },
  {
    "ticker": "BLDP",
    "exchange": "NASDAQ",
    "name": "Ballard Power Systems Inc."
  },
  {
    "ticker": "BLDR",
    "exchange": "NASDAQ",
    "name": "Builders FirstSource Inc."
  },
  {
    "ticker": "BLE",
    "exchange": "NYSE",
    "name": "Blackrock Municipal Income Trust II"
  },
  {
    "ticker": "BLES",
    "exchange": "NYSE ARCA",
    "name": "Inspire Global Hope ETF"
  },
  {
    "ticker": "BLFS",
    "exchange": "NASDAQ",
    "name": "BioLife Solutions Inc."
  },
  {
    "ticker": "BLHY",
    "exchange": "NYSE ARCA",
    "name": "Virtus Newfleet Dynamic Credit ETF"
  },
  {
    "ticker": "BLI",
    "exchange": "NASDAQ",
    "name": "Berkeley Lights Inc"
  },
  {
    "ticker": "BLIN",
    "exchange": "NASDAQ",
    "name": "Bridgeline Digital Inc."
  },
  {
    "ticker": "BLK",
    "exchange": "NYSE",
    "name": "BlackRock Inc."
  },
  {
    "ticker": "BLKB",
    "exchange": "NASDAQ",
    "name": "Blackbaud Inc."
  },
  {
    "ticker": "BLL",
    "exchange": "NYSE",
    "name": "Ball Corporation"
  },
  {
    "ticker": "BLMN",
    "exchange": "NASDAQ",
    "name": "Bloomin' Brands Inc."
  },
  {
    "ticker": "BLNK",
    "exchange": "NASDAQ",
    "name": "Blink Charging Co"
  },
  {
    "ticker": "BLNKW",
    "exchange": "NASDAQ",
    "name": "Blink Charging Co Warrant 2018-2023 on Blink Charging"
  },
  {
    "ticker": "BLOK",
    "exchange": "NYSE ARCA",
    "name": "Amplify Transformational Data Sharing ETF"
  },
  {
    "ticker": "BLPH",
    "exchange": "NASDAQ",
    "name": "Bellerophon Therapeutics Inc."
  },
  {
    "ticker": "BLRX",
    "exchange": "NASDAQ",
    "name": "Bioline RX Ltd Sponsored ADR"
  },
  {
    "ticker": "BLU",
    "exchange": "NASDAQ",
    "name": "BELLUS Health Inc."
  },
  {
    "ticker": "BLUE",
    "exchange": "NASDAQ",
    "name": "bluebird bio Inc."
  },
  {
    "ticker": "BLV",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Long-Term Bond ETF"
  },
  {
    "ticker": "BLW",
    "exchange": "NYSE",
    "name": "Blackrock Limited Duration Income Trust"
  },
  {
    "ticker": "BLX",
    "exchange": "NYSE",
    "name": "Banco Latinoamericano de Comercio Exterior S.A. Class E"
  },
  {
    "ticker": "BMA",
    "exchange": "NYSE",
    "name": "Banco Macro SA Sponsored ADR Class B"
  },
  {
    "ticker": "BMAR",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Buffer ETF - March"
  },
  {
    "ticker": "BMAY",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Buffer ETF - May"
  },
  {
    "ticker": "BMCH",
    "exchange": "NASDAQ",
    "name": "BMC Stock Holdings Inc."
  },
  {
    "ticker": "BME",
    "exchange": "NYSE",
    "name": "Blackrock Health Sciences Trust"
  },
  {
    "ticker": "BMEZ",
    "exchange": "NYSE",
    "name": "Blackrock Health Sciences Trust II"
  },
  {
    "ticker": "BMI",
    "exchange": "NYSE",
    "name": "Badger Meter Inc."
  },
  {
    "ticker": "BML-G",
    "exchange": "NYSE",
    "name": "Bank of America Corp Deposit shs Repr 1/1200th Fltg Rate Non-Cum Pfd Shs Series 1"
  },
  {
    "ticker": "BML-H",
    "exchange": "NYSE",
    "name": "Bank of America Corp Deposit Shs Repr 1/1200th Fltg Rate Non Cum Pfd Shs Series 2"
  },
  {
    "ticker": "BML-J",
    "exchange": "NYSE",
    "name": "Bank of America Corp Deposit Shs Repr 1/1200th Fltg Rate Non Cum Pfd Shs Series 4"
  },
  {
    "ticker": "BML-L",
    "exchange": "NYSE",
    "name": "Bank of America Corp Deposit Shs Repr 1/1200th Pfd Shs Series 5"
  },
  {
    "ticker": "BMLP",
    "exchange": "NASDAQ",
    "name": "Dorsey Wright MLP Index ETN"
  },
  {
    "ticker": "BMO",
    "exchange": "NYSE",
    "name": "Bank of Montreal"
  },
  {
    "ticker": "BMRA",
    "exchange": "NASDAQ",
    "name": "Biomerica Inc."
  },
  {
    "ticker": "BMRC",
    "exchange": "NASDAQ",
    "name": "Bank of Marin Bancorp"
  },
  {
    "ticker": "BMRG",
    "exchange": "NYSE",
    "name": "B. Riley Principal Merger Corp II Class A"
  },
  {
    "ticker": "BMRG=",
    "exchange": "NYSE",
    "name": "B. Riley Principal Merger Corp II Units Cons of 1 Sh A + 1/2 Wt"
  },
  {
    "ticker": "BMRG+",
    "exchange": "NYSE",
    "name": "B. Riley Principal Merger Corp II Warrant 2020-06.05.26 on B. Riley Princ-A"
  },
  {
    "ticker": "BMRN",
    "exchange": "NASDAQ",
    "name": "BioMarin Pharmaceutical Inc."
  },
  {
    "ticker": "BMTC",
    "exchange": "NASDAQ",
    "name": "Bryn Mawr Bank Corporation"
  },
  {
    "ticker": "BMY",
    "exchange": "NYSE",
    "name": "Bristol-Myers Squibb Company"
  },
  {
    "ticker": "BMY^",
    "exchange": "NYSE",
    "name": "Bristol-Myers Squibb Company Contingent Value Rights 2019-31.12.2020"
  },
  {
    "ticker": "BND",
    "exchange": "NASDAQ",
    "name": "Vanguard Total Bond Market ETF"
  },
  {
    "ticker": "BNDC",
    "exchange": "NYSE ARCA",
    "name": "FlexShares Core Select Bond Fund"
  },
  {
    "ticker": "BNDW",
    "exchange": "NASDAQ",
    "name": "Vanguard Total World Bond ETF"
  },
  {
    "ticker": "BNDX",
    "exchange": "NASDAQ",
    "name": "Vanguard Total International Bond ETF"
  },
  {
    "ticker": "BNED",
    "exchange": "NYSE",
    "name": "Barnes & Noble Education Inc."
  },
  {
    "ticker": "BNFT",
    "exchange": "NASDAQ",
    "name": "Benefitfocus Inc."
  },
  {
    "ticker": "BNGO",
    "exchange": "NASDAQ",
    "name": "BioNano Genomics Inc."
  },
  {
    "ticker": "BNGOW",
    "exchange": "NASDAQ",
    "name": "Bionano Genomics Inc Warrant 2018-20.08.23 on Bionano Genom"
  },
  {
    "ticker": "BNKD",
    "exchange": "NYSE ARCA",
    "name": "MicroSectors U.S. Big Banks Index -3X Inverse Leveraged ETNs"
  },
  {
    "ticker": "BNKO",
    "exchange": "NYSE ARCA",
    "name": "MicroSectors U.S. Big Banks Index 2X Leveraged ETNs"
  },
  {
    "ticker": "BNKU",
    "exchange": "NYSE ARCA",
    "name": "MicroSectors U.S. Big Banks Index 3X Leveraged ETNs"
  },
  {
    "ticker": "BNKZ",
    "exchange": "NYSE ARCA",
    "name": "MicroSectors U.S. Big Banks Index -2X Inverse Leveraged ETNs"
  },
  {
    "ticker": "BNO",
    "exchange": "NYSE ARCA",
    "name": "United States Brent Oil Fund LP"
  },
  {
    "ticker": "BNOV",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Buffer ETF - November"
  },
  {
    "ticker": "BNR",
    "exchange": "NASDAQ",
    "name": "Burning Rock Biotech Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "BNS",
    "exchange": "NYSE",
    "name": "Bank of Nova Scotia"
  },
  {
    "ticker": "BNSO",
    "exchange": "NASDAQ",
    "name": "Bonso Electronics International Inc."
  },
  {
    "ticker": "BNTC",
    "exchange": "NASDAQ",
    "name": "Benitec Biopharma Inc"
  },
  {
    "ticker": "BNTX",
    "exchange": "NASDAQ",
    "name": "BioNTech SE Sponsored ADR"
  },
  {
    "ticker": "BNY",
    "exchange": "NYSE",
    "name": "Blackrock New York Municipal Income Trust"
  },
  {
    "ticker": "BOCH",
    "exchange": "NASDAQ",
    "name": "Bank of Commerce Holdings"
  },
  {
    "ticker": "BOCT",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Buffer ETF - October"
  },
  {
    "ticker": "BOE",
    "exchange": "NYSE",
    "name": "BlackRock Enhanced Global Dividend Trust of Benef Interest"
  },
  {
    "ticker": "BOH",
    "exchange": "NYSE",
    "name": "Bank of Hawaii Corporation"
  },
  {
    "ticker": "BOIL",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra Bloomberg Natural Gas"
  },
  {
    "ticker": "BOKF",
    "exchange": "NASDAQ",
    "name": "BOK Financial Corporation"
  },
  {
    "ticker": "BOKFL",
    "exchange": "NASDAQ",
    "name": "BOK Financial Corp 5.375 % Notes 2016-30.06.56"
  },
  {
    "ticker": "BOMN",
    "exchange": "NASDAQ",
    "name": "Boston Omaha Corp. Class A"
  },
  {
    "ticker": "BOND",
    "exchange": "NYSE ARCA",
    "name": "PIMCO Active Bond ETF"
  },
  {
    "ticker": "BOOM",
    "exchange": "NASDAQ",
    "name": "DMC Global Inc."
  },
  {
    "ticker": "BOOT",
    "exchange": "NYSE",
    "name": "Boot Barn Holdings Inc."
  },
  {
    "ticker": "BORR",
    "exchange": "NYSE",
    "name": "Borr Drilling Limited"
  },
  {
    "ticker": "BOSC",
    "exchange": "NASDAQ",
    "name": "BOS Better Online Solutions Ltd"
  },
  {
    "ticker": "BOSS",
    "exchange": "Cboe BZX",
    "name": "Global X Founder-Run Companies ETF"
  },
  {
    "ticker": "BOTJ",
    "exchange": "NASDAQ",
    "name": "Bank of the James Financial Group Inc."
  },
  {
    "ticker": "BOTZ",
    "exchange": "NASDAQ",
    "name": "Global X Robotics & Artificial Intelligence ETF"
  },
  {
    "ticker": "BOUT",
    "exchange": "NYSE ARCA",
    "name": "Innovator IBD Breakout Opportunities ETF"
  },
  {
    "ticker": "BOWXU",
    "exchange": "NASDAQ",
    "name": "BowX Acquisition Corp. Units Cons of 1 Sh + 1/3 Wt"
  },
  {
    "ticker": "BOX",
    "exchange": "NYSE",
    "name": "Box Inc. Class A"
  },
  {
    "ticker": "BOXL",
    "exchange": "NASDAQ",
    "name": "Boxlight Corp Class A"
  },
  {
    "ticker": "BP",
    "exchange": "NYSE",
    "name": "BP p.l.c. Sponsored ADR"
  },
  {
    "ticker": "BPFH",
    "exchange": "NASDAQ",
    "name": "Boston Private Financial Holdings Inc."
  },
  {
    "ticker": "BPMC",
    "exchange": "NASDAQ",
    "name": "Blueprint Medicines Corp."
  },
  {
    "ticker": "BPMP",
    "exchange": "NYSE",
    "name": "BP Midstream Partners LP"
  },
  {
    "ticker": "BPOP",
    "exchange": "NASDAQ",
    "name": "Popular Inc."
  },
  {
    "ticker": "BPOPM",
    "exchange": "NASDAQ",
    "name": "Popular Capital Trust II 6 1/8 % Cumulative Monthly Income Pfd Secs 2004-2034"
  },
  {
    "ticker": "BPOPN",
    "exchange": "NASDAQ",
    "name": "Popular Capital Trust I 6.7 % Trust Pfd Secs Registered 2003-1.11.33"
  },
  {
    "ticker": "BPRN",
    "exchange": "NASDAQ",
    "name": "Bank of Princeton"
  },
  {
    "ticker": "BPT",
    "exchange": "NYSE",
    "name": "BP Prudhoe Bay Royalty Trust"
  },
  {
    "ticker": "BPTH",
    "exchange": "NASDAQ",
    "name": "Bio-Path Holdings Inc."
  },
  {
    "ticker": "BPY",
    "exchange": "NASDAQ",
    "name": "Brookfield Property Partners LP"
  },
  {
    "ticker": "BPYPN",
    "exchange": "NASDAQ",
    "name": "Brookfield Property Partners LP 5.75 % Cum Red Perp Pref Units Series 3"
  },
  {
    "ticker": "BPYPO",
    "exchange": "NASDAQ",
    "name": "Brookfield Property Partners LP 6.375 % Cum Red Perp Pfd Units A Series 2"
  },
  {
    "ticker": "BPYPP",
    "exchange": "NASDAQ",
    "name": "Brookfield Property Partners LP 6.5% Cum Red Perp Pfd Partnership Units A Series 1"
  },
  {
    "ticker": "BPYU",
    "exchange": "NASDAQ",
    "name": "Brookfield Property REIT Inc Class A"
  },
  {
    "ticker": "BPYUP",
    "exchange": "NASDAQ",
    "name": "Brookfield Property REIT Inc 6.375% Cum Perp Red Pfd Registered Series A"
  },
  {
    "ticker": "BQH",
    "exchange": "NYSE",
    "name": "BlackRock New York Municipal Bond Trust"
  },
  {
    "ticker": "BR",
    "exchange": "NYSE",
    "name": "Broadridge Financial Solutions Inc."
  },
  {
    "ticker": "BRBR",
    "exchange": "NYSE",
    "name": "BellRing Brands Inc. Class A"
  },
  {
    "ticker": "BRBS",
    "exchange": "NYSE American",
    "name": "Blue Ridge Bankshares Inc."
  },
  {
    "ticker": "BRC",
    "exchange": "NYSE",
    "name": "Brady Corporation Class A"
  },
  {
    "ticker": "BREW",
    "exchange": "NASDAQ",
    "name": "Craft Brew Alliance"
  },
  {
    "ticker": "BRF",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Brazil Small-Cap ETF"
  },
  {
    "ticker": "BRFS",
    "exchange": "NYSE",
    "name": "BRF SA Sponsored ADR"
  },
  {
    "ticker": "BRG",
    "exchange": "NYSE American",
    "name": "Bluerock Residential Growth REIT Inc Class A"
  },
  {
    "ticker": "BRG-A",
    "exchange": "NYSE American",
    "name": "Bluerock Residential Growth REIT Inc 8.25 % Cum Red Pfd Registered Series A"
  },
  {
    "ticker": "BRG-C",
    "exchange": "NYSE American",
    "name": "Bluerock Residential Growth REIT Inc 7.625 % Cum Red Pfd Registered Series C"
  },
  {
    "ticker": "BRG-D",
    "exchange": "NYSE American",
    "name": "Bluerock Residential Growth REIT Inc. 7.125 % Cum Pfd Registered Series D"
  },
  {
    "ticker": "BRID",
    "exchange": "NASDAQ",
    "name": "Bridgford Foods Corporation"
  },
  {
    "ticker": "BRK.A",
    "exchange": "NYSE",
    "name": "Berkshire Hathaway Inc. Class A"
  },
  {
    "ticker": "BRK.B",
    "exchange": "NYSE",
    "name": "Berkshire Hathaway Inc. Class B"
  },
  {
    "ticker": "BRKL",
    "exchange": "NASDAQ",
    "name": "Brookline Bancorp Inc."
  },
  {
    "ticker": "BRKR",
    "exchange": "NASDAQ",
    "name": "Bruker Corporation"
  },
  {
    "ticker": "BRKS",
    "exchange": "NASDAQ",
    "name": "Brooks Automation Inc."
  },
  {
    "ticker": "BRLI",
    "exchange": "NASDAQ",
    "name": "Brilliant Acquisition Corporation"
  },
  {
    "ticker": "BRLIR",
    "exchange": "NASDAQ",
    "name": "Brilliant Acquisition Corporation Rights For Shares"
  },
  {
    "ticker": "BRLIU",
    "exchange": "NASDAQ",
    "name": "Brilliant Acquisition Corp. Units Cons of 1 Shs + 1 RT + 1 Wt"
  },
  {
    "ticker": "BRLIW",
    "exchange": "NASDAQ",
    "name": "Brilliant Acquisition Corporation Warrant - on Brilliant Acqn"
  },
  {
    "ticker": "BRMK",
    "exchange": "NYSE",
    "name": "Broadmark Realty Capital Inc"
  },
  {
    "ticker": "BRMK+",
    "exchange": "NYSE American",
    "name": "Broadmark Realty Capital Inc. Warrant 2019-15.11.24 on Brdmrk Rlty Cap"
  },
  {
    "ticker": "BRN",
    "exchange": "NYSE American",
    "name": "Barnwell Industries Inc."
  },
  {
    "ticker": "BRO",
    "exchange": "NYSE",
    "name": "Brown & Brown Inc."
  },
  {
    "ticker": "BROG",
    "exchange": "NASDAQ",
    "name": "Brooge Energy Ltd."
  },
  {
    "ticker": "BROGW",
    "exchange": "NASDAQ",
    "name": "Brooge Energy Ltd Warrant -20.12.24"
  },
  {
    "ticker": "BRP",
    "exchange": "NASDAQ",
    "name": "BRP Group Inc Class A"
  },
  {
    "ticker": "BRPA",
    "exchange": "NASDAQ",
    "name": "Big Rock Partners Acquisition Corp"
  },
  {
    "ticker": "BRPAR",
    "exchange": "NASDAQ",
    "name": "Big Rock Partners Acquisition Corp Rights 2017"
  },
  {
    "ticker": "BRPAU",
    "exchange": "NASDAQ",
    "name": "Big Rock Partners Acquisition Corp. Units Cons of 1 Sh + 0.5 Wt 22 + 1 Rt"
  },
  {
    "ticker": "BRPAW",
    "exchange": "NASDAQ",
    "name": "Big Rock Partners Acquisition Corp Warrant 2018-2022"
  },
  {
    "ticker": "BRQS",
    "exchange": "NASDAQ",
    "name": "Borqs Technologies Inc."
  },
  {
    "ticker": "BRT",
    "exchange": "NYSE",
    "name": "BRT Apartments Corp"
  },
  {
    "ticker": "BRX",
    "exchange": "NYSE",
    "name": "Brixmor Property Group Inc."
  },
  {
    "ticker": "BRY",
    "exchange": "NASDAQ",
    "name": "Berry Corporation"
  },
  {
    "ticker": "BRZU",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily MSCI Brazil Bull 2X Shares"
  },
  {
    "ticker": "BSA",
    "exchange": "NYSE",
    "name": "BrightSphere Investment Group Inc. 5.125 % Notes 2019-01.08.31"
  },
  {
    "ticker": "BSAC",
    "exchange": "NYSE",
    "name": "Banco Santander-Chile Sponsored ADR"
  },
  {
    "ticker": "BSAE",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2021 USD Emerging Markets Debt ETF"
  },
  {
    "ticker": "BSBE",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2022 USD Emerging Markets Debt ETF"
  },
  {
    "ticker": "BSBK",
    "exchange": "NASDAQ",
    "name": "Bogota Financial Corp."
  },
  {
    "ticker": "BSBR",
    "exchange": "NYSE",
    "name": "Banco Santander (Brasil) S.A. Sponsored ADR"
  },
  {
    "ticker": "BSCE",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2023 USD Emerging Markets Debt ETF"
  },
  {
    "ticker": "BSCK",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2020 Corporate Bond ETF"
  },
  {
    "ticker": "BSCL",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2021 Corporate Bond ETF"
  },
  {
    "ticker": "BSCM",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2022 Corporate Bond ETF"
  },
  {
    "ticker": "BSCN",
    "exchange": "NASDAQ",
    "name": "Invesco Bulletshares 2023 Corporate Bond ETF"
  },
  {
    "ticker": "BSCO",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2024 Corporate Bond ETF"
  },
  {
    "ticker": "BSCP",
    "exchange": "NASDAQ",
    "name": "Invesco Bulletshares 2025 Corporate Bond ETF"
  },
  {
    "ticker": "BSCQ",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2026 Corporate Bond ETF"
  },
  {
    "ticker": "BSCR",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2027 Corporate Bond ETF"
  },
  {
    "ticker": "BSCS",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2028 Corporate Bond ETF"
  },
  {
    "ticker": "BSCT",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2029 Corporate Bond ETF"
  },
  {
    "ticker": "BSD",
    "exchange": "NYSE",
    "name": "Blackrock Strategic Municipal Trust"
  },
  {
    "ticker": "BSDE",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2024 USD Emerging Markets Debt ETF"
  },
  {
    "ticker": "BSE",
    "exchange": "NYSE",
    "name": "BlackRock New York Municipal Income Quality Trust"
  },
  {
    "ticker": "BSEP",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Buffer ETF - September"
  },
  {
    "ticker": "BSET",
    "exchange": "NASDAQ",
    "name": "Bassett Furniture Industries Inc."
  },
  {
    "ticker": "BSGM",
    "exchange": "NASDAQ",
    "name": "BioSig Technologies Inc."
  },
  {
    "ticker": "BSIG",
    "exchange": "NYSE",
    "name": "BrightSphere Investment Group Inc."
  },
  {
    "ticker": "BSJK",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2020 High Yield Corporate Bond ETF"
  },
  {
    "ticker": "BSJL",
    "exchange": "NASDAQ",
    "name": "Invesco Bulletshares 2021 High Yield Corporate Bond ETF"
  },
  {
    "ticker": "BSJM",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2022 High Yield Corporate Bond ETF"
  },
  {
    "ticker": "BSJN",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2023 High Yield Corporate Bond ETF"
  },
  {
    "ticker": "BSJO",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2024 High Yield Corporate Bond ETF"
  },
  {
    "ticker": "BSJP",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2025 High Yield Corporate Bond ETF"
  },
  {
    "ticker": "BSJQ",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2026 High Yield Corp Bond ETF"
  },
  {
    "ticker": "BSJR",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2027 High Yield Corporate Bond ETF"
  },
  {
    "ticker": "BSL",
    "exchange": "NYSE",
    "name": "Blackstone/GSO Senior Floating Rate Term Fund"
  },
  {
    "ticker": "BSM",
    "exchange": "NYSE",
    "name": "Black Stone Minerals LP"
  },
  {
    "ticker": "BSML",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2021 Municipal Bond ETF"
  },
  {
    "ticker": "BSMM",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2022 Municipal Bond ETF"
  },
  {
    "ticker": "BSMN",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2023 Municipal Bond ETF"
  },
  {
    "ticker": "BSMO",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2024 Municipal Bond ETF"
  },
  {
    "ticker": "BSMP",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2025 Municipal Bond ETF"
  },
  {
    "ticker": "BSMQ",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2026 Municipal Bond ETF"
  },
  {
    "ticker": "BSMR",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2027 Municipal Bond ETF"
  },
  {
    "ticker": "BSMS",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2028 Municipal Bond ETF"
  },
  {
    "ticker": "BSMT",
    "exchange": "NASDAQ",
    "name": "Invesco BulletShares 2029 Municipal Bond ETF"
  },
  {
    "ticker": "BSMX",
    "exchange": "NYSE",
    "name": "Banco Santander (Mexico) SA Institucion de Banca Multiple Grupo Financiero Santander Sponsored ADR Class B"
  },
  {
    "ticker": "BSQR",
    "exchange": "NASDAQ",
    "name": "BSQUARE Corporation"
  },
  {
    "ticker": "BSRR",
    "exchange": "NASDAQ",
    "name": "Sierra Bancorp"
  },
  {
    "ticker": "BST",
    "exchange": "NYSE",
    "name": "BlackRock Science & Technology Trust"
  },
  {
    "ticker": "BSTC",
    "exchange": "NASDAQ",
    "name": "BioSpecifics Technologies Corp."
  },
  {
    "ticker": "BSTZ",
    "exchange": "NYSE",
    "name": "BlackRock Science and Technology Trust II"
  },
  {
    "ticker": "BSV",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Short-Term Bond ETF"
  },
  {
    "ticker": "BSVN",
    "exchange": "NASDAQ",
    "name": "Bank7 Corp."
  },
  {
    "ticker": "BSX",
    "exchange": "NYSE",
    "name": "Boston Scientific Corporation"
  },
  {
    "ticker": "BSX-A",
    "exchange": "NYSE",
    "name": "Boston Scientific Corporation Cum Conv Pfd Registered Shs 2020-01.06.23 Series A"
  },
  {
    "ticker": "BTA",
    "exchange": "NYSE",
    "name": "Blackrock Long-Term Municipal Advantage Trust"
  },
  {
    "ticker": "BTAI",
    "exchange": "NASDAQ",
    "name": "BioXcel Therapeutics Inc."
  },
  {
    "ticker": "BTAL",
    "exchange": "NYSE ARCA",
    "name": "AGFiQ US Market Neutral Anti-Beta Fund"
  },
  {
    "ticker": "BTAQU",
    "exchange": "NASDAQ",
    "name": "Burgundy Technology Acquisition Corp. Units Cons of 1 Shs -A- + 1/2 Wt"
  },
  {
    "ticker": "BTBT",
    "exchange": "NASDAQ",
    "name": "Golden Bull Ltd."
  },
  {
    "ticker": "BTE",
    "exchange": "NYSE",
    "name": "Baytex Energy Corp."
  },
  {
    "ticker": "BTEC",
    "exchange": "NASDAQ",
    "name": "Principal Healthcare Innovators Index ETF"
  },
  {
    "ticker": "BTG",
    "exchange": "NYSE American",
    "name": "B2Gold Corp."
  },
  {
    "ticker": "BTI",
    "exchange": "NYSE",
    "name": "British American Tobacco PLC Sponsored ADR"
  },
  {
    "ticker": "BTN",
    "exchange": "NYSE American",
    "name": "Ballantyne Strong Inc."
  },
  {
    "ticker": "BTO",
    "exchange": "NYSE",
    "name": "John Hancock Financial Opportunities Fund"
  },
  {
    "ticker": "BTT",
    "exchange": "NYSE",
    "name": "BlackRock Municipal 2030 Target Term Trust of Beneficial Interest"
  },
  {
    "ticker": "BTU",
    "exchange": "NYSE",
    "name": "Peabody Energy Corporation"
  },
  {
    "ticker": "BTYS",
    "exchange": "Cboe BZX",
    "name": "iPath Series B US Treasury 10-year Bear ETN"
  },
  {
    "ticker": "BTZ",
    "exchange": "NYSE",
    "name": "BlackRock Credit Allocation Income Trust"
  },
  {
    "ticker": "BUD",
    "exchange": "NYSE",
    "name": "Anheuser-Busch InBev SA/NV Sponsored ADR"
  },
  {
    "ticker": "BUFF",
    "exchange": "Cboe BZX",
    "name": "Innovator Laddered Fund of S&P 500 Power Buffer ETFs"
  },
  {
    "ticker": "BUFR",
    "exchange": "Cboe BZX",
    "name": "FT Cboe Vest Fund of Buffer ETFs"
  },
  {
    "ticker": "BUG",
    "exchange": "NASDAQ",
    "name": "Global X Cybersecurity ETF"
  },
  {
    "ticker": "BUI",
    "exchange": "NYSE",
    "name": "BlackRock Utilities. Infrastructure & Power Opportunities Trust of Benef Interest"
  },
  {
    "ticker": "BUL",
    "exchange": "NYSE ARCA",
    "name": "Pacer US Cash Cows Growth ETF"
  },
  {
    "ticker": "BURL",
    "exchange": "NYSE",
    "name": "Burlington Stores Inc."
  },
  {
    "ticker": "BUSE",
    "exchange": "NASDAQ",
    "name": "First Busey Corporation"
  },
  {
    "ticker": "BUY",
    "exchange": "NYSE ARCA",
    "name": "USCF SummerHaven SHPEI Index Fund"
  },
  {
    "ticker": "BUYZ",
    "exchange": "Cboe BZX",
    "name": "Franklin Disruptive Commerce ETF"
  },
  {
    "ticker": "BV",
    "exchange": "NYSE",
    "name": "BrightView Holdings Inc."
  },
  {
    "ticker": "BVN",
    "exchange": "NYSE",
    "name": "Compania de MiNASDAQ Buenaventura SAA Sponsored ADR"
  },
  {
    "ticker": "BVXV",
    "exchange": "NASDAQ",
    "name": "BiondVax Pharmaceuticals Ltd. Sponsored ADR"
  },
  {
    "ticker": "BW",
    "exchange": "NYSE",
    "name": "Babcock & Wilcox Enterprises Inc"
  },
  {
    "ticker": "BWA",
    "exchange": "NYSE",
    "name": "BorgWarner Inc."
  },
  {
    "ticker": "BWAY",
    "exchange": "NASDAQ",
    "name": "Brainsway Ltd Sponsored ADR"
  },
  {
    "ticker": "BWB",
    "exchange": "NASDAQ",
    "name": "Bridgewater Bancshares Inc."
  },
  {
    "ticker": "BWEN",
    "exchange": "NASDAQ",
    "name": "Broadwind Inc."
  },
  {
    "ticker": "BWFG",
    "exchange": "NASDAQ",
    "name": "Bankwell Financial Group Inc."
  },
  {
    "ticker": "BWG",
    "exchange": "NYSE",
    "name": "BrandywineGLOBAL Global Income Opportunities Fund Inc"
  },
  {
    "ticker": "BWL.A",
    "exchange": "NYSE American",
    "name": "Bowl America Incorporated Class A"
  },
  {
    "ticker": "BWMX",
    "exchange": "NASDAQ",
    "name": "Betterware de Mexico SAPI de CV"
  },
  {
    "ticker": "BWX",
    "exchange": "NYSE ARCA",
    "name": "SPDR Bloomberg Barclays International Treasury Bond ETF"
  },
  {
    "ticker": "BWXT",
    "exchange": "NYSE",
    "name": "BWX Technologies Inc."
  },
  {
    "ticker": "BWZ",
    "exchange": "NYSE ARCA",
    "name": "SPDR Bloomberg Barclays Short Term International Treasury Bond ETF"
  },
  {
    "ticker": "BX",
    "exchange": "NYSE",
    "name": "Blackstone Group Inc. Class A"
  },
  {
    "ticker": "BXC",
    "exchange": "NYSE",
    "name": "BlueLinx Holdings Inc."
  },
  {
    "ticker": "BXG",
    "exchange": "NYSE",
    "name": "Bluegreen Vacations Corporation"
  },
  {
    "ticker": "BXMT",
    "exchange": "NYSE",
    "name": "Blackstone Mortgage Trust Inc. Class A"
  },
  {
    "ticker": "BXMX",
    "exchange": "NYSE",
    "name": "Nuveen S&P 500 Buy-Write Income Fund of Benef Interest"
  },
  {
    "ticker": "BXP",
    "exchange": "NYSE",
    "name": "Boston Properties Inc."
  },
  {
    "ticker": "BXP-B",
    "exchange": "NYSE",
    "name": "Boston Properties Inc. Deposit Shs Repr 1/100th 5 1/4 % Cum Red Pfd Shs Series B"
  },
  {
    "ticker": "BXRX",
    "exchange": "NASDAQ",
    "name": "Baudax Bio Inc"
  },
  {
    "ticker": "BXS",
    "exchange": "NYSE",
    "name": "BancorpSouth Bank"
  },
  {
    "ticker": "BXS-A",
    "exchange": "NYSE",
    "name": "Bancorpsouth Inc Non-Cum Red Pfd Registered Shs Series A"
  },
  {
    "ticker": "BY",
    "exchange": "NYSE",
    "name": "Byline Bancorp Inc."
  },
  {
    "ticker": "BYD",
    "exchange": "NYSE",
    "name": "Boyd Gaming Corporation"
  },
  {
    "ticker": "BYFC",
    "exchange": "NASDAQ",
    "name": "Broadway Financial Corporation"
  },
  {
    "ticker": "BYLD",
    "exchange": "NYSE ARCA",
    "name": "iShares Yield Optimized Bond ETF"
  },
  {
    "ticker": "BYM",
    "exchange": "NYSE",
    "name": "BlackRock Municipal Income Quality Trust"
  },
  {
    "ticker": "BYND",
    "exchange": "NASDAQ",
    "name": "Beyond Meat Inc."
  },
  {
    "ticker": "BYSI",
    "exchange": "NASDAQ",
    "name": "BeyondSpring Inc."
  },
  {
    "ticker": "BZH",
    "exchange": "NYSE",
    "name": "Beazer Homes USA Inc."
  },
  {
    "ticker": "BZM",
    "exchange": "NYSE",
    "name": "BlackRock Maryland Municipal Bond Trust"
  },
  {
    "ticker": "BZQ",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort MSCI Brazil Capped"
  },
  {
    "ticker": "BZUN",
    "exchange": "NASDAQ",
    "name": "Baozun Inc Sponsored ADR Class A"
  },
  {
    "ticker": "C",
    "exchange": "NYSE",
    "name": "Citigroup Inc."
  },
  {
    "ticker": "C-J",
    "exchange": "NYSE",
    "name": "Citigroup Inc. Deposit Shs Repr 1/100th 7 1/8 Non-Cum Perp Pfd Shs Series J"
  },
  {
    "ticker": "C-K",
    "exchange": "NYSE",
    "name": "Citigroup Inc. Deposit Shs Repr 1/1000th Non-Cum Perp Pfd Shs Series K"
  },
  {
    "ticker": "C-N",
    "exchange": "NYSE",
    "name": "Citigroup Capital XIII Tr Pfd Secs 2010-30.10.40 Global Fltg Rt"
  },
  {
    "ticker": "C-S",
    "exchange": "NYSE",
    "name": "Citigroup Inc Deposit Shs Repr 1/1000th 6.3 % Non-Cum Pfd Shs Series S"
  },
  {
    "ticker": "CAAP",
    "exchange": "NYSE",
    "name": "Corporacion America Airports S.A."
  },
  {
    "ticker": "CAAS",
    "exchange": "NASDAQ",
    "name": "China Automotive Systems Inc."
  },
  {
    "ticker": "CABA",
    "exchange": "NASDAQ",
    "name": "Cabaletta Bio Inc."
  },
  {
    "ticker": "CABO",
    "exchange": "NYSE",
    "name": "Cable One Inc."
  },
  {
    "ticker": "CAC",
    "exchange": "NASDAQ",
    "name": "Camden National Corporation"
  },
  {
    "ticker": "CACC",
    "exchange": "NASDAQ",
    "name": "Credit Acceptance Corporation"
  },
  {
    "ticker": "CACG",
    "exchange": "NASDAQ",
    "name": "ClearBridge All Cap Growth ETF"
  },
  {
    "ticker": "CACI",
    "exchange": "NYSE",
    "name": "CACI International Inc Class A"
  },
  {
    "ticker": "CADE",
    "exchange": "NYSE",
    "name": "Cadence Bancorporation Class A"
  },
  {
    "ticker": "CAE",
    "exchange": "NYSE",
    "name": "CAE Inc."
  },
  {
    "ticker": "CAF",
    "exchange": "NYSE",
    "name": "Morgan Stanley China A Share Fund Inc"
  },
  {
    "ticker": "CAG",
    "exchange": "NYSE",
    "name": "Conagra Brands Inc."
  },
  {
    "ticker": "CAH",
    "exchange": "NYSE",
    "name": "Cardinal Health Inc."
  },
  {
    "ticker": "CAI",
    "exchange": "NYSE",
    "name": "CAI International Inc."
  },
  {
    "ticker": "CAI-A",
    "exchange": "NYSE",
    "name": "CAI International Inc. Cum Conv Red Perp Pfd Registered Series A"
  },
  {
    "ticker": "CAI-B",
    "exchange": "NYSE",
    "name": "CAI International Inc Cum Conv Red Perp Pfd Registered Shs Series B"
  },
  {
    "ticker": "CAJ",
    "exchange": "NYSE",
    "name": "Canon Inc. Sponsored ADR"
  },
  {
    "ticker": "CAKE",
    "exchange": "NASDAQ",
    "name": "Cheesecake Factory Incorporated"
  },
  {
    "ticker": "CAL",
    "exchange": "NYSE",
    "name": "Caleres Inc."
  },
  {
    "ticker": "CALA",
    "exchange": "NASDAQ",
    "name": "Calithera Biosciences Inc."
  },
  {
    "ticker": "CALB",
    "exchange": "NASDAQ",
    "name": "California BanCorp"
  },
  {
    "ticker": "CALF",
    "exchange": "Cboe BZX",
    "name": "Pacer US Small Cap Cash Cows 100 ETF"
  },
  {
    "ticker": "CALM",
    "exchange": "NASDAQ",
    "name": "Cal-Maine Foods Inc."
  },
  {
    "ticker": "CALT",
    "exchange": "NASDAQ",
    "name": "Calliditas Therapeutics AB Sponsored ADR"
  },
  {
    "ticker": "CALX",
    "exchange": "NYSE",
    "name": "Calix Inc."
  },
  {
    "ticker": "CAMP",
    "exchange": "NASDAQ",
    "name": "CalAmp Corp."
  },
  {
    "ticker": "CAMT",
    "exchange": "NASDAQ",
    "name": "Camtek Ltd"
  },
  {
    "ticker": "CAN",
    "exchange": "NASDAQ",
    "name": "Canaan Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "CANE",
    "exchange": "NYSE ARCA",
    "name": "Teucrium Sugar Fund"
  },
  {
    "ticker": "CANF",
    "exchange": "NYSE American",
    "name": "Can-Fite BioPharma Ltd. Sponsored ADR"
  },
  {
    "ticker": "CANG",
    "exchange": "NYSE",
    "name": "Cango Inc. (Cayman island) Sponsored ADR"
  },
  {
    "ticker": "CAPE",
    "exchange": "NYSE ARCA",
    "name": "iPath Shiller CAPE ETN"
  },
  {
    "ticker": "CAPL",
    "exchange": "NYSE",
    "name": "CrossAmerica Partners LP"
  },
  {
    "ticker": "CAPR",
    "exchange": "NASDAQ",
    "name": "Capricor Therapeutics Inc."
  },
  {
    "ticker": "CAR",
    "exchange": "NASDAQ",
    "name": "Avis Budget Group Inc."
  },
  {
    "ticker": "CARA",
    "exchange": "NASDAQ",
    "name": "Cara Therapeutics Inc"
  },
  {
    "ticker": "CARE",
    "exchange": "NASDAQ",
    "name": "Carter Bank & Trust"
  },
  {
    "ticker": "CARG",
    "exchange": "NASDAQ",
    "name": "CarGurus Inc. Class A"
  },
  {
    "ticker": "CARR",
    "exchange": "NYSE",
    "name": "Carrier Global Corp."
  },
  {
    "ticker": "CARS",
    "exchange": "NYSE",
    "name": "Cars.com Inc."
  },
  {
    "ticker": "CARV",
    "exchange": "NASDAQ",
    "name": "Carver Bancorp Inc."
  },
  {
    "ticker": "CARZ",
    "exchange": "NASDAQ",
    "name": "First Trust NASDAQDAQ Global Auto Index Fund"
  },
  {
    "ticker": "CASA",
    "exchange": "NASDAQ",
    "name": "Casa Systems Inc."
  },
  {
    "ticker": "CASH",
    "exchange": "NASDAQ",
    "name": "Meta Financial Group Inc."
  },
  {
    "ticker": "CASI",
    "exchange": "NASDAQ",
    "name": "CASI Pharmaceuticals Inc"
  },
  {
    "ticker": "CASS",
    "exchange": "NASDAQ",
    "name": "Cass Information Systems Inc."
  },
  {
    "ticker": "CASY",
    "exchange": "NASDAQ",
    "name": "CNYSE Americany's General Stores Inc."
  },
  {
    "ticker": "CAT",
    "exchange": "NYSE",
    "name": "Caterpillar Inc."
  },
  {
    "ticker": "CATB",
    "exchange": "NASDAQ",
    "name": "Catabasis Pharmaceuticals Inc"
  },
  {
    "ticker": "CATC",
    "exchange": "NASDAQ",
    "name": "Cambridge Bancorp"
  },
  {
    "ticker": "CATH",
    "exchange": "NASDAQ",
    "name": "Global X S&P 500 Catholic Values Custom ETF"
  },
  {
    "ticker": "CATM",
    "exchange": "NASDAQ",
    "name": "Cardtronics plc Class A"
  },
  {
    "ticker": "CATO",
    "exchange": "NYSE",
    "name": "Cato Corporation Class A"
  },
  {
    "ticker": "CATY",
    "exchange": "NASDAQ",
    "name": "Cathay General Bancorp"
  },
  {
    "ticker": "CB",
    "exchange": "NYSE",
    "name": "Chubb Limited"
  },
  {
    "ticker": "CBAN",
    "exchange": "NASDAQ",
    "name": "Colony Bankcorp Inc."
  },
  {
    "ticker": "CBAT",
    "exchange": "NASDAQ",
    "name": "CBAK Energy Technology Inc."
  },
  {
    "ticker": "CBAY",
    "exchange": "NASDAQ",
    "name": "CymaBay Therapeutics Inc."
  },
  {
    "ticker": "CBB",
    "exchange": "NYSE",
    "name": "Cincinnati Bell Inc."
  },
  {
    "ticker": "CBB-B",
    "exchange": "NYSE",
    "name": "Cincinnati Bell Inc Deposit.Shs Repr.1/20th 6 3/4 % Cum.Conv.Pfd Shs"
  },
  {
    "ticker": "CBD",
    "exchange": "NYSE",
    "name": "Companhia Brasileira de Distribuicao Sponsored ADR"
  },
  {
    "ticker": "CBFV",
    "exchange": "NASDAQ",
    "name": "CB Financial Services Inc."
  },
  {
    "ticker": "CBH",
    "exchange": "NYSE",
    "name": "AllianzGI Convertible & Income 2024 Target Term Fund"
  },
  {
    "ticker": "CBIO",
    "exchange": "NASDAQ",
    "name": "Catalyst Biosciences Inc."
  },
  {
    "ticker": "CBL",
    "exchange": "NYSE",
    "name": "CBL & Associates Properties Inc."
  },
  {
    "ticker": "CBL-D",
    "exchange": "NYSE",
    "name": "CBL & Associates Properties Inc Deposit Shs Repr 1/10th 7 3/8 % Cum Red Pfd Shs Series D"
  },
  {
    "ticker": "CBL-E",
    "exchange": "NYSE",
    "name": "CBL & Associates Properties Inc Deposit Shs Repr 1/10th 6 5/8 % Cum Red Pfd Shs Series E"
  },
  {
    "ticker": "CBLI",
    "exchange": "NASDAQ",
    "name": "Cleveland BioLabs Inc."
  },
  {
    "ticker": "CBMB",
    "exchange": "NASDAQ",
    "name": "CBM Bancorp Inc."
  },
  {
    "ticker": "CBMG",
    "exchange": "NASDAQ",
    "name": "Cellular Biomedicine Group Inc."
  },
  {
    "ticker": "CBNK",
    "exchange": "NASDAQ",
    "name": "Capital Bancorp Inc."
  },
  {
    "ticker": "CBOE",
    "exchange": "Cboe BZX",
    "name": "Cboe Global Markets Inc"
  },
  {
    "ticker": "CBON",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors ChinaAMC China Bond ETF"
  },
  {
    "ticker": "CBPO",
    "exchange": "NASDAQ",
    "name": "China Biologic Products Holdings Inc."
  },
  {
    "ticker": "CBRE",
    "exchange": "NYSE",
    "name": "CBRE Group Inc. Class A"
  },
  {
    "ticker": "CBRL",
    "exchange": "NASDAQ",
    "name": "Cracker Barrel Old Country Store Inc."
  },
  {
    "ticker": "CBSH",
    "exchange": "NASDAQ",
    "name": "Commerce Bancshares Inc."
  },
  {
    "ticker": "CBSHP",
    "exchange": "NASDAQ",
    "name": "Commerce Bancshares Inc Deposit Shs Repr 1/1000th 6 % Non-Cum Perp Pfd Shs Series B"
  },
  {
    "ticker": "CBT",
    "exchange": "NYSE",
    "name": "Cabot Corporation"
  },
  {
    "ticker": "CBTX",
    "exchange": "NASDAQ",
    "name": "CBTX Inc."
  },
  {
    "ticker": "CBU",
    "exchange": "NYSE",
    "name": "Community Bank System Inc."
  },
  {
    "ticker": "CBZ",
    "exchange": "NYSE",
    "name": "CBIZ Inc."
  },
  {
    "ticker": "CC",
    "exchange": "NYSE",
    "name": "Chemours Co."
  },
  {
    "ticker": "CCAC",
    "exchange": "NYSE",
    "name": "CITIC Capital Acquisition Corp."
  },
  {
    "ticker": "CCAC=",
    "exchange": "NYSE",
    "name": "CITIC Capital Acquisition Corp. Units Cons of 1 Sh + 1/3 Wt"
  },
  {
    "ticker": "CCAC+",
    "exchange": "NYSE",
    "name": "CITIC Capital Acquisition Corp Warrant -on CITIC"
  },
  {
    "ticker": "CCAP",
    "exchange": "NASDAQ",
    "name": "Crescent Capital BDC Inc."
  },
  {
    "ticker": "CCB",
    "exchange": "NASDAQ",
    "name": "Coastal Financial Corporation"
  },
  {
    "ticker": "CCBG",
    "exchange": "NASDAQ",
    "name": "Capital City Bank Group Inc."
  },
  {
    "ticker": "CCC",
    "exchange": "NYSE",
    "name": "Clarivate PLC"
  },
  {
    "ticker": "CCCL",
    "exchange": "NASDAQ",
    "name": "China Ceramics Company Ltd."
  },
  {
    "ticker": "CCD",
    "exchange": "NASDAQ",
    "name": "Calamos Dynamic Convertible & Income Fund"
  },
  {
    "ticker": "CCEP",
    "exchange": "NYSE",
    "name": "Coca-Cola European Partners Plc"
  },
  {
    "ticker": "CCF",
    "exchange": "NYSE American",
    "name": "ChNYSE American Corporation"
  },
  {
    "ticker": "CCH",
    "exchange": "NYSE",
    "name": "Collier Creek Holdings Class A"
  },
  {
    "ticker": "CCH=",
    "exchange": "NYSE",
    "name": "Collier Creek Holdings Units Cons of 1 Shs + 1/3 Wt"
  },
  {
    "ticker": "CCH+",
    "exchange": "NYSE",
    "name": "Collier Creek Holdings Warrant -2023 on Collier Creek"
  },
  {
    "ticker": "CCI",
    "exchange": "NYSE",
    "name": "Crown Castle International Corp"
  },
  {
    "ticker": "CCIV=",
    "exchange": "NYSE",
    "name": "Churchill Capital Corp. IV Units Cons of 1 Sh A + 1/5 Wt"
  },
  {
    "ticker": "CCJ",
    "exchange": "NYSE",
    "name": "Cameco Corporation"
  },
  {
    "ticker": "CCK",
    "exchange": "NYSE",
    "name": "Crown Holdings Inc."
  },
  {
    "ticker": "CCL",
    "exchange": "NYSE",
    "name": "Carnival Corporation"
  },
  {
    "ticker": "CCLP",
    "exchange": "NASDAQ",
    "name": "CSI Compressco LP"
  },
  {
    "ticker": "CCM",
    "exchange": "NYSE",
    "name": "Concord Medical Services Holding Ltd. ADR"
  },
  {
    "ticker": "CCMP",
    "exchange": "NASDAQ",
    "name": "Cabot Microelectronics Corporation"
  },
  {
    "ticker": "CCNC",
    "exchange": "NASDAQ",
    "name": "Code Chain New Continent Ltd."
  },
  {
    "ticker": "CCNE",
    "exchange": "NASDAQ",
    "name": "CNB Financial Corporation"
  },
  {
    "ticker": "CCO",
    "exchange": "NYSE",
    "name": "Clear Channel Outdoor Holdings Inc"
  },
  {
    "ticker": "CCOI",
    "exchange": "NASDAQ",
    "name": "Cogent Communications Holdings Inc"
  },
  {
    "ticker": "CCOR",
    "exchange": "NYSE ARCA",
    "name": "Core Alternative ETF"
  },
  {
    "ticker": "CCR",
    "exchange": "NYSE",
    "name": "CONSOL Coal Resources LP"
  },
  {
    "ticker": "CCRC",
    "exchange": "NASDAQ",
    "name": "China Customer Relations Centers Inc."
  },
  {
    "ticker": "CCRN",
    "exchange": "NASDAQ",
    "name": "Cross Country Healthcare Inc."
  },
  {
    "ticker": "CCS",
    "exchange": "NYSE",
    "name": "Century Communities Inc."
  },
  {
    "ticker": "CCU",
    "exchange": "NYSE",
    "name": "Compania Cervecerias Unidas S.A. Sponsored ADR"
  },
  {
    "ticker": "CCX",
    "exchange": "NYSE",
    "name": "Churchill Capital Corp II Class A"
  },
  {
    "ticker": "CCX=",
    "exchange": "NYSE",
    "name": "Churchill Capital Corp II Units Cons of 1 Sh A + 1/3 Wt"
  },
  {
    "ticker": "CCX+",
    "exchange": "NYSE",
    "name": "Churchill Capital Corp II Warrant 2019-02.07.24 on Churchill Cap Rg A"
  },
  {
    "ticker": "CCXI",
    "exchange": "NASDAQ",
    "name": "Chemocentryx Inc."
  },
  {
    "ticker": "CCXX",
    "exchange": "NYSE",
    "name": "Churchill Capital Corp III Class A"
  },
  {
    "ticker": "CCXX=",
    "exchange": "NYSE",
    "name": "Churchill Capital Corp III Units Cons of 1 Sh + 1/4 Wt 01.03.2027"
  },
  {
    "ticker": "CCXX+",
    "exchange": "NYSE",
    "name": "Churchill Capital Corp III Warrant 2020-01.03.27 on Churchill Cap A"
  },
  {
    "ticker": "CCZ",
    "exchange": "NYSE",
    "name": "Comcast Corp 2 % Zero Premium Option Note Exchangeable Secs 1999-15.10.29 BNYSE Americand on 2% Exchangeable Subord Debs 29 Sprint"
  },
  {
    "ticker": "CDAY",
    "exchange": "NYSE",
    "name": "Ceridian HCM Holding Inc."
  },
  {
    "ticker": "CDC",
    "exchange": "NASDAQ",
    "name": "VictoryShares US EQ Income Enhanced Volatility Wtd ETF"
  },
  {
    "ticker": "CDE",
    "exchange": "NYSE",
    "name": "Coeur Mining Inc."
  },
  {
    "ticker": "CDEV",
    "exchange": "NASDAQ",
    "name": "Centennial Resource Development Inc. Class A"
  },
  {
    "ticker": "CDK",
    "exchange": "NASDAQ",
    "name": "CDK Global Inc"
  },
  {
    "ticker": "CDL",
    "exchange": "NASDAQ",
    "name": "VictoryShares US Large Cap High Dividend Volatility Wtd ETF"
  },
  {
    "ticker": "CDLX",
    "exchange": "NASDAQ",
    "name": "Cardlytics Inc."
  },
  {
    "ticker": "CDMO",
    "exchange": "NASDAQ",
    "name": "Avid Bioservices Inc."
  },
  {
    "ticker": "CDMOP",
    "exchange": "NASDAQ",
    "name": "Avid Bioservices Inc. 10.5 % Cum Conv Red Perp Pfd Registered Series E"
  },
  {
    "ticker": "CDNA",
    "exchange": "NASDAQ",
    "name": "CareDx Inc."
  },
  {
    "ticker": "CDNS",
    "exchange": "NASDAQ",
    "name": "Cadence Design Systems Inc."
  },
  {
    "ticker": "CDOR",
    "exchange": "NYSE American",
    "name": "Condor Hospitality Trust Inc."
  },
  {
    "ticker": "CDR",
    "exchange": "NYSE",
    "name": "Cedar Realty Trust Inc"
  },
  {
    "ticker": "CDR-B",
    "exchange": "NYSE",
    "name": "Cedar Realty Trust Inc 7.25 % Cum Red Pfd Registered Series B"
  },
  {
    "ticker": "CDR-C",
    "exchange": "NYSE",
    "name": "Cedar Realty Trust Inc 6.5 % Cum Conv Red Pfd Registered Shs Series C"
  },
  {
    "ticker": "CDTX",
    "exchange": "NASDAQ",
    "name": "Cidara Therapeutics Inc."
  },
  {
    "ticker": "CDW",
    "exchange": "NASDAQ",
    "name": "CDW Corp."
  },
  {
    "ticker": "CDXC",
    "exchange": "NASDAQ",
    "name": "ChromaDex Corporation"
  },
  {
    "ticker": "CDXS",
    "exchange": "NASDAQ",
    "name": "Codexis Inc."
  },
  {
    "ticker": "CDZI",
    "exchange": "NASDAQ",
    "name": "Cadiz Inc."
  },
  {
    "ticker": "CE",
    "exchange": "NYSE",
    "name": "Celanese Corporation"
  },
  {
    "ticker": "CEA",
    "exchange": "NYSE",
    "name": "China Eastern Airlines Corporation Limited Sponsored ADR Class H"
  },
  {
    "ticker": "CECE",
    "exchange": "NASDAQ",
    "name": "CECO Environmental Corp."
  },
  {
    "ticker": "CEE",
    "exchange": "NYSE",
    "name": "Central and Eastern Europe Fund Inc"
  },
  {
    "ticker": "CEF",
    "exchange": "NYSE ARCA",
    "name": "Sprott Physical Gold and Silver Trust Units"
  },
  {
    "ticker": "CEFA",
    "exchange": "NASDAQ",
    "name": "Global X S&P Catholic Values Developed ex-US ETF"
  },
  {
    "ticker": "CEFD",
    "exchange": "NYSE ARCA",
    "name": "ETRACS Monthly Pay 1.5X Leveraged Closed-End Fund Index ETN"
  },
  {
    "ticker": "CEFS",
    "exchange": "Cboe BZX",
    "name": "Saba Closed-End Funds ETF"
  },
  {
    "ticker": "CEI",
    "exchange": "NYSE American",
    "name": "Camber Energy Inc."
  },
  {
    "ticker": "CEIX",
    "exchange": "NYSE",
    "name": "CONSOL Energy Inc"
  },
  {
    "ticker": "CEL",
    "exchange": "NYSE",
    "name": "Cellcom Israel Ltd."
  },
  {
    "ticker": "CELC",
    "exchange": "NASDAQ",
    "name": "Celcuity Inc."
  },
  {
    "ticker": "CELG^",
    "exchange": "NYSE",
    "name": "Bristol-Myers Squibb Company Contingent Value Rights 2019-31.12.2030"
  },
  {
    "ticker": "CELH",
    "exchange": "NASDAQ",
    "name": "Celsius Holdings Inc."
  },
  {
    "ticker": "CELP",
    "exchange": "NYSE",
    "name": "Cypress Environmental Partners LP"
  },
  {
    "ticker": "CEM",
    "exchange": "NYSE",
    "name": "ClearBridge MLP and Midstream Fund Inc"
  },
  {
    "ticker": "CEMB",
    "exchange": "Cboe BZX",
    "name": "iShares J.P. Morgan EM Corporate Bond ETF"
  },
  {
    "ticker": "CEMI",
    "exchange": "NASDAQ",
    "name": "Chembio Diagnostics Inc."
  },
  {
    "ticker": "CEN",
    "exchange": "NYSE",
    "name": "Center Coast Brookfield MLP & Energy Infrastructure Fund of Benef Interest"
  },
  {
    "ticker": "CENT",
    "exchange": "NASDAQ",
    "name": "Central Garden & Pet Company"
  },
  {
    "ticker": "CENTA",
    "exchange": "NASDAQ",
    "name": "Central Garden & Pet Company Class A"
  },
  {
    "ticker": "CENX",
    "exchange": "NASDAQ",
    "name": "Century Aluminum Company"
  },
  {
    "ticker": "CEO",
    "exchange": "NYSE",
    "name": "CNOOC Limited Sponsored ADR"
  },
  {
    "ticker": "CEPU",
    "exchange": "NYSE",
    "name": "Central Puerto S.A. Sponsored ADR"
  },
  {
    "ticker": "CEQP",
    "exchange": "NYSE",
    "name": "Crestwood Equity Partners LP"
  },
  {
    "ticker": "CEQP-",
    "exchange": "NYSE",
    "name": "Crestwood Equity Partners LP 9.25 % Preferred Partnership Units 144A"
  },
  {
    "ticker": "CERC",
    "exchange": "NASDAQ",
    "name": "Cerecor Inc"
  },
  {
    "ticker": "CERN",
    "exchange": "NASDAQ",
    "name": "Cerner Corporation"
  },
  {
    "ticker": "CERS",
    "exchange": "NASDAQ",
    "name": "Cerus Corporation"
  },
  {
    "ticker": "CET",
    "exchange": "NYSE American",
    "name": "Central Securities Corp"
  },
  {
    "ticker": "CETV",
    "exchange": "NASDAQ",
    "name": "Central European Media Enterprises Ltd. Class A"
  },
  {
    "ticker": "CETX",
    "exchange": "NASDAQ",
    "name": "Cemtrex Inc."
  },
  {
    "ticker": "CETXP",
    "exchange": "NASDAQ",
    "name": "Cemtrex Inc 10 % Pfd Registered Series 1"
  },
  {
    "ticker": "CETXW",
    "exchange": "NASDAQ",
    "name": "Cemtrex Inc Warrant 2016-02.12.22 on Cemtrex"
  },
  {
    "ticker": "CEV",
    "exchange": "NYSE American",
    "name": "Eaton Vance California Municipal Income Trust"
  },
  {
    "ticker": "CEVA",
    "exchange": "NASDAQ",
    "name": "CEVA Inc."
  },
  {
    "ticker": "CEW",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Emerging Currency Strategy Fund"
  },
  {
    "ticker": "CEY",
    "exchange": "NASDAQ",
    "name": "VictoryShares Emerging Market High Dividend Volatility Wtd ETF"
  },
  {
    "ticker": "CEZ",
    "exchange": "NASDAQ",
    "name": "VictoryShares Emerging Market Volatility Wtd ETF"
  },
  {
    "ticker": "CF",
    "exchange": "NYSE",
    "name": "CF Industries Holdings Inc."
  },
  {
    "ticker": "CFA",
    "exchange": "NASDAQ",
    "name": "VictoryShares US 500 Volatility Wtd ETF"
  },
  {
    "ticker": "CFB",
    "exchange": "NASDAQ",
    "name": "CrossFirst Bankshares Inc."
  },
  {
    "ticker": "CFBI",
    "exchange": "NASDAQ",
    "name": "Community First Bancshares Inc. (Georgia)"
  },
  {
    "ticker": "CFBK",
    "exchange": "NASDAQ",
    "name": "CF Bankshares Inc"
  },
  {
    "ticker": "CFCV",
    "exchange": "Cboe BZX",
    "name": "ClearBridge Focus Value ETF"
  },
  {
    "ticker": "CFFA",
    "exchange": "NASDAQ",
    "name": "CF Finance Acquisition Corp. Class A"
  },
  {
    "ticker": "CFFAU",
    "exchange": "NASDAQ",
    "name": "CF Finance Acquisition Corp. Units Cons of 1 Sh -A- + 1 Wt"
  },
  {
    "ticker": "CFFAW",
    "exchange": "NASDAQ",
    "name": "CF Finance Acquisition Corp Warrant On CF Fin Acqn"
  },
  {
    "ticker": "CFFI",
    "exchange": "NASDAQ",
    "name": "C&F Financial Corporation"
  },
  {
    "ticker": "CFFN",
    "exchange": "NASDAQ",
    "name": "Capitol Federal Financial Inc."
  },
  {
    "ticker": "CFG",
    "exchange": "NYSE",
    "name": "Citizens Financial Group Inc."
  },
  {
    "ticker": "CFG-D",
    "exchange": "NYSE",
    "name": "Citizens Financial Group Inc Depositary Shs Repr 1/40th Non-Cum Perp Red Pfd Registered Shs Series D"
  },
  {
    "ticker": "CFG-E",
    "exchange": "NYSE",
    "name": "Citizens Financial Group Inc. Depositary Shs Repr 1/40th Non-Cum Perp Red Pfd Registered Shs Class E"
  },
  {
    "ticker": "CFMS",
    "exchange": "NASDAQ",
    "name": "Conformis Inc"
  },
  {
    "ticker": "CFO",
    "exchange": "NASDAQ",
    "name": "VictoryShares US 500 Enhanced Volatility Wtd ETF"
  },
  {
    "ticker": "CFR",
    "exchange": "NYSE",
    "name": "Cullen/Frost Bankers Inc."
  },
  {
    "ticker": "CFRX",
    "exchange": "NASDAQ",
    "name": "ContraFect Corp."
  },
  {
    "ticker": "CFX",
    "exchange": "NYSE",
    "name": "Colfax Corporation"
  },
  {
    "ticker": "CFXA",
    "exchange": "NYSE",
    "name": "Colfax Corp Tangible Equity Units Cons of Nom Nts 15.01.22 + 1 PC 15.01.22"
  },
  {
    "ticker": "CG",
    "exchange": "NASDAQ",
    "name": "Carlyle Group Inc"
  },
  {
    "ticker": "CGA",
    "exchange": "NYSE",
    "name": "China Green Agriculture Inc."
  },
  {
    "ticker": "CGBD",
    "exchange": "NASDAQ",
    "name": "TCG BDC Inc."
  },
  {
    "ticker": "CGC",
    "exchange": "NYSE",
    "name": "Canopy Growth Corporation"
  },
  {
    "ticker": "CGEN",
    "exchange": "NASDAQ",
    "name": "Compugen Ltd."
  },
  {
    "ticker": "CGIX",
    "exchange": "NASDAQ",
    "name": "Cancer Genetics Inc."
  },
  {
    "ticker": "CGNX",
    "exchange": "NASDAQ",
    "name": "Cognex Corporation"
  },
  {
    "ticker": "CGO",
    "exchange": "NASDAQ",
    "name": "Calamos Global Total Return Fund"
  },
  {
    "ticker": "CGRO",
    "exchange": "NASDAQ",
    "name": "Collective Growth Corporation Class A"
  },
  {
    "ticker": "CGROU",
    "exchange": "NASDAQ",
    "name": "Collective Growth Corporation Units Cons of 1 Sh A + 1/2 Wt"
  },
  {
    "ticker": "CGROW",
    "exchange": "NASDAQ",
    "name": "Collective Growth Corporation Warrant 2020-19.06.25 on Collective Growth"
  },
  {
    "ticker": "CGW",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P Global Water Index ETF"
  },
  {
    "ticker": "CHA",
    "exchange": "NYSE",
    "name": "China Telecom Corp. Ltd. Sponsored ADR Class H"
  },
  {
    "ticker": "CHAD",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily CSI 300 China A Share Bear 1X Shares"
  },
  {
    "ticker": "CHAQ",
    "exchange": "NYSE American",
    "name": "Chardan Healthcare Acquisition 2 Corp"
  },
  {
    "ticker": "CHAQ=",
    "exchange": "NYSE American",
    "name": "Chardan Healthcare Acquisition 2 Corp Units Cons of 1 Sh + 1 Wt 03.25"
  },
  {
    "ticker": "CHAQ+",
    "exchange": "NYSE American",
    "name": "Chardan Healthcare Acquisition 2 Corp Warrant 2020-05.03.25 on Char Hlth Acqn"
  },
  {
    "ticker": "CHAU",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily CSI 300 China A Share Bull 2X Shares"
  },
  {
    "ticker": "CHCI",
    "exchange": "NASDAQ",
    "name": "Comstock Holding Companies Inc. Class A"
  },
  {
    "ticker": "CHCO",
    "exchange": "NASDAQ",
    "name": "City Holding Company"
  },
  {
    "ticker": "CHCT",
    "exchange": "NYSE",
    "name": "Community Healthcare Trust Inc."
  },
  {
    "ticker": "CHD",
    "exchange": "NYSE",
    "name": "Church & Dwight Co. Inc."
  },
  {
    "ticker": "CHDN",
    "exchange": "NASDAQ",
    "name": "Churchill Downs Incorporated"
  },
  {
    "ticker": "CHE",
    "exchange": "NYSE",
    "name": "Chemed Corporation"
  },
  {
    "ticker": "CHEF",
    "exchange": "NASDAQ",
    "name": "Chefs' Warehouse Inc."
  },
  {
    "ticker": "CHEK",
    "exchange": "NASDAQ",
    "name": "Check-Cap Ltd."
  },
  {
    "ticker": "CHEKZ",
    "exchange": "NASDAQ",
    "name": "CHECK-CAP LTD Warrant 2018- on Check-Cap Series 3"
  },
  {
    "ticker": "CHEP",
    "exchange": "NYSE ARCA",
    "name": "AGFiQ U.S. Market Neutral Value Fund"
  },
  {
    "ticker": "CHFS",
    "exchange": "NASDAQ",
    "name": "CHF Solutions Inc"
  },
  {
    "ticker": "CHGG",
    "exchange": "NYSE",
    "name": "Chegg Inc."
  },
  {
    "ticker": "CHGX",
    "exchange": "NYSE ARCA",
    "name": "Change Finance U.S. Large Cap Fossil Fuel Free ETF"
  },
  {
    "ticker": "CHH",
    "exchange": "NYSE",
    "name": "Choice Hotels International Inc."
  },
  {
    "ticker": "CHI",
    "exchange": "NASDAQ",
    "name": "Calamos Convertible Opportunities And Income Fund"
  },
  {
    "ticker": "CHIC",
    "exchange": "NYSE ARCA",
    "name": "Global X MSCI China Communication Services ETF"
  },
  {
    "ticker": "CHIE",
    "exchange": "NYSE ARCA",
    "name": "Global X MSCI China Energy ETF"
  },
  {
    "ticker": "CHIH",
    "exchange": "NYSE ARCA",
    "name": "Global X MSCI China Health Care ETF"
  },
  {
    "ticker": "CHII",
    "exchange": "NYSE ARCA",
    "name": "Global X MSCI China Industrials ETF"
  },
  {
    "ticker": "CHIK",
    "exchange": "NYSE ARCA",
    "name": "Global X MSCI China Information Technology ETF"
  },
  {
    "ticker": "CHIL",
    "exchange": "NYSE ARCA",
    "name": "Global X MSCI China Large-Cap 50 ETF"
  },
  {
    "ticker": "CHIM",
    "exchange": "NYSE ARCA",
    "name": "Global X MSCI China Materials ETF"
  },
  {
    "ticker": "CHIQ",
    "exchange": "NYSE ARCA",
    "name": "Global X MSCI China Consumer Discretionary ETF"
  },
  {
    "ticker": "CHIR",
    "exchange": "NYSE ARCA",
    "name": "Global X MSCI China Real Estate ETF"
  },
  {
    "ticker": "CHIS",
    "exchange": "NYSE ARCA",
    "name": "Global X MSCI China Consumer Staples ETF"
  },
  {
    "ticker": "CHIU",
    "exchange": "NYSE ARCA",
    "name": "Global X MSCI China Utilities ETF"
  },
  {
    "ticker": "CHIX",
    "exchange": "NYSE ARCA",
    "name": "Global X MSCI China Financials ETF"
  },
  {
    "ticker": "CHKP",
    "exchange": "NASDAQ",
    "name": "Check Point Software Technologies Ltd."
  },
  {
    "ticker": "CHL",
    "exchange": "NYSE",
    "name": "China Mobile Limited Sponsored ADR"
  },
  {
    "ticker": "CHMA",
    "exchange": "NASDAQ",
    "name": "Chiasma Inc"
  },
  {
    "ticker": "CHMG",
    "exchange": "NASDAQ",
    "name": "Chemung Financial Corporation"
  },
  {
    "ticker": "CHMI",
    "exchange": "NYSE",
    "name": "Cherry Hill Mortgage Investment Corp."
  },
  {
    "ticker": "CHMI-A",
    "exchange": "NYSE",
    "name": "Cherry Hill Mortgage Investment Corp 8.20 % Cum Red Pfd Registered Series A"
  },
  {
    "ticker": "CHMI-B",
    "exchange": "NYSE",
    "name": "Cherry Hill Mortgage Investment Corp. Cum Conv Red Pfd Registered Shs Series B"
  },
  {
    "ticker": "CHN",
    "exchange": "NYSE",
    "name": "China Fund Inc"
  },
  {
    "ticker": "CHNA",
    "exchange": "NASDAQ",
    "name": "Loncar China BioPharma ETF"
  },
  {
    "ticker": "CHNG",
    "exchange": "NASDAQ",
    "name": "Change Healthcare Inc."
  },
  {
    "ticker": "CHNGU",
    "exchange": "NASDAQ",
    "name": "Change Healthcare Inc Tangible Equity Units Cons of USD 8.2378 Nom Nts 30.06.22 + 1 PC 30.06.22"
  },
  {
    "ticker": "CHNR",
    "exchange": "NASDAQ",
    "name": "China Natural Resources Inc."
  },
  {
    "ticker": "CHPM",
    "exchange": "NASDAQ",
    "name": "CHP Merger Corp Class A"
  },
  {
    "ticker": "CHPMU",
    "exchange": "NASDAQ",
    "name": "CHP Merger Corp Units Cons of 1 Sh-A + 1/2 Wt"
  },
  {
    "ticker": "CHPMW",
    "exchange": "NASDAQ",
    "name": "CHP Merger Corp Warrant 2019-22.11.24 on CHP Merger"
  },
  {
    "ticker": "CHRA",
    "exchange": "NYSE",
    "name": "Charah Solutions Inc."
  },
  {
    "ticker": "CHRS",
    "exchange": "NASDAQ",
    "name": "Coherus BioSciences Inc."
  },
  {
    "ticker": "CHRW",
    "exchange": "NASDAQ",
    "name": "C.H. Robinson Worldwide Inc."
  },
  {
    "ticker": "CHS",
    "exchange": "NYSE",
    "name": "Chico's FAS Inc."
  },
  {
    "ticker": "CHSCL",
    "exchange": "NASDAQ",
    "name": "CHS Inc 7 1/2 % Cum Red Pfd B Series 4"
  },
  {
    "ticker": "CHSCM",
    "exchange": "NASDAQ",
    "name": "CHS Inc Reset Rate Cum Red Pfd B Series 3"
  },
  {
    "ticker": "CHSCN",
    "exchange": "NASDAQ",
    "name": "CHS Inc Cum Red Pfd B Series 2"
  },
  {
    "ticker": "CHSCO",
    "exchange": "NASDAQ",
    "name": "CHS Inc 7 7/8 % Cum Red Pfd B Series 1"
  },
  {
    "ticker": "CHSCP",
    "exchange": "NASDAQ",
    "name": "CHS Inc 8 % Cum Red Pfd Registered"
  },
  {
    "ticker": "CHT",
    "exchange": "NYSE",
    "name": "Chunghwa Telecom Co. Ltd Sponsored ADR"
  },
  {
    "ticker": "CHTR",
    "exchange": "NASDAQ",
    "name": "Charter Communications Inc. Class A"
  },
  {
    "ticker": "CHU",
    "exchange": "NYSE",
    "name": "China Unicom (Hong Kong) Limited Sponsored ADR"
  },
  {
    "ticker": "CHUY",
    "exchange": "NASDAQ",
    "name": "Chuy's Holdings Inc."
  },
  {
    "ticker": "CHW",
    "exchange": "NASDAQ",
    "name": "Calamos Global Dynamic Income Fund"
  },
  {
    "ticker": "CHWY",
    "exchange": "NYSE",
    "name": "Chewy Inc. Class A"
  },
  {
    "ticker": "CHX",
    "exchange": "NYSE",
    "name": "ChampionX Corporation"
  },
  {
    "ticker": "CHY",
    "exchange": "NASDAQ",
    "name": "Calamos Convertible And High Income Fund"
  },
  {
    "ticker": "CI",
    "exchange": "NYSE",
    "name": "Cigna Corporation"
  },
  {
    "ticker": "CIA",
    "exchange": "NYSE",
    "name": "Citizens Inc. Class A"
  },
  {
    "ticker": "CIB",
    "exchange": "NYSE",
    "name": "Bancolombia S.A. Sponsored ADR Pfd"
  },
  {
    "ticker": "CIBR",
    "exchange": "NASDAQ",
    "name": "First Trust NASDAQDAQ Cybersecurity ETF"
  },
  {
    "ticker": "CID",
    "exchange": "NASDAQ",
    "name": "VictoryShares International High Div Volatility Wtd ETF"
  },
  {
    "ticker": "CIDM",
    "exchange": "NASDAQ",
    "name": "Cinedigm Corp"
  },
  {
    "ticker": "CIEN",
    "exchange": "NYSE",
    "name": "Ciena Corporation"
  },
  {
    "ticker": "CIF",
    "exchange": "NYSE",
    "name": "MFS Intermediate High Income Fund"
  },
  {
    "ticker": "CIG",
    "exchange": "NYSE",
    "name": "Companhia Energetica de MiNASDAQ Gerais SA Sponsored ADR Pfd"
  },
  {
    "ticker": "CIG.C",
    "exchange": "NYSE",
    "name": "Companhia Energetica de MiNASDAQ Gerais SA Sponsored ADR"
  },
  {
    "ticker": "CIGI",
    "exchange": "NASDAQ",
    "name": "Colliers International Group Inc."
  },
  {
    "ticker": "CIH",
    "exchange": "NASDAQ",
    "name": "China Index Holdings Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "CII",
    "exchange": "NYSE",
    "name": "BlackRock Enhanced Capital and Income Fund Inc"
  },
  {
    "ticker": "CIIC",
    "exchange": "NASDAQ",
    "name": "CIIG Merger Corp Class A"
  },
  {
    "ticker": "CIICU",
    "exchange": "NASDAQ",
    "name": "CIIG Merger Corp Units Cons of 1 Sh A + 1/2 Wt 31.12.26"
  },
  {
    "ticker": "CIICW",
    "exchange": "NASDAQ",
    "name": "CIIG Merger Corp Warrant 2019-31.12.26 On CIIG Merger A"
  },
  {
    "ticker": "CIK",
    "exchange": "NYSE American",
    "name": "Credit Suisse Asset Management Income Fund Inc"
  },
  {
    "ticker": "CIL",
    "exchange": "NASDAQ",
    "name": "VictoryShares International Volatility Wtd ETF"
  },
  {
    "ticker": "CIM",
    "exchange": "NYSE",
    "name": "Chimera Investment Corporation"
  },
  {
    "ticker": "CIM-A",
    "exchange": "NYSE",
    "name": "Chimera Investment Corp 8 % Cum Red Pfd Registered Series A"
  },
  {
    "ticker": "CIM-B",
    "exchange": "NYSE",
    "name": "Chimera Investment Corp Cum Red Pfd Registered Shs Series B"
  },
  {
    "ticker": "CIM-C",
    "exchange": "NYSE",
    "name": "Chimera Investment Corp Cum Conv Red Pfd Registered Shs Series C"
  },
  {
    "ticker": "CIM-D",
    "exchange": "NYSE",
    "name": "Chimera Investment Corp 8 % Cum Conv Red Pfd Registered Shs Series D"
  },
  {
    "ticker": "CINF",
    "exchange": "NASDAQ",
    "name": "Cincinnati Financial Corporation"
  },
  {
    "ticker": "CINR",
    "exchange": "NYSE",
    "name": "Ciner Resources LP"
  },
  {
    "ticker": "CIO",
    "exchange": "NYSE",
    "name": "City Office REIT Inc."
  },
  {
    "ticker": "CIO-A",
    "exchange": "NYSE",
    "name": "City Office REIT Inc 6.625 % Cum Red Pfd Registered Series A"
  },
  {
    "ticker": "CIR",
    "exchange": "NYSE",
    "name": "CIRCOR International Inc."
  },
  {
    "ticker": "CIT",
    "exchange": "NYSE",
    "name": "CIT Group Inc."
  },
  {
    "ticker": "CIT-B",
    "exchange": "NYSE",
    "name": "CIT Group Inc. 5.625 % Non-Cum Red Perp Registered Pfd Shs Series B"
  },
  {
    "ticker": "CIVB",
    "exchange": "NASDAQ",
    "name": "Civista Bancshares Inc."
  },
  {
    "ticker": "CIX",
    "exchange": "NYSE American",
    "name": "CompX International Inc. Class A"
  },
  {
    "ticker": "CIZ",
    "exchange": "NASDAQ",
    "name": "VictoryShares Developed Enhanced Volatility Wtd ETF"
  },
  {
    "ticker": "CIZN",
    "exchange": "NASDAQ",
    "name": "Citizens Holding Company"
  },
  {
    "ticker": "CJJD",
    "exchange": "NASDAQ",
    "name": "China Jo-Jo Drugstores Inc."
  },
  {
    "ticker": "CKH",
    "exchange": "NYSE",
    "name": "SEACOR Holdings Inc."
  },
  {
    "ticker": "CKPT",
    "exchange": "NASDAQ",
    "name": "Checkpoint Therapeutics Inc."
  },
  {
    "ticker": "CKX",
    "exchange": "NYSE American",
    "name": "CKX Lands Inc."
  },
  {
    "ticker": "CL",
    "exchange": "NYSE",
    "name": "Colgate-Palmolive Company"
  },
  {
    "ticker": "CLA=",
    "exchange": "NYSE",
    "name": "Colonnade Acquisition Corp. Units Cons of 1 Shs -A- + 1/2 Wt"
  },
  {
    "ticker": "CLAR",
    "exchange": "NASDAQ",
    "name": "Clarus Corporation"
  },
  {
    "ticker": "CLB",
    "exchange": "NYSE",
    "name": "Core Laboratories NV"
  },
  {
    "ticker": "CLBK",
    "exchange": "NASDAQ",
    "name": "Columbia Financial Inc."
  },
  {
    "ticker": "CLBS",
    "exchange": "NASDAQ",
    "name": "Caladrius Biosciences Inc."
  },
  {
    "ticker": "CLCT",
    "exchange": "NASDAQ",
    "name": "Collectors Universe Inc."
  },
  {
    "ticker": "CLDB",
    "exchange": "NASDAQ",
    "name": "Cortland Bancorp"
  },
  {
    "ticker": "CLDR",
    "exchange": "NYSE",
    "name": "Cloudera Inc."
  },
  {
    "ticker": "CLDT",
    "exchange": "NYSE",
    "name": "Chatham Lodging Trust"
  },
  {
    "ticker": "CLDX",
    "exchange": "NASDAQ",
    "name": "Celldex Therapeutics Inc."
  },
  {
    "ticker": "CLEU",
    "exchange": "NASDAQ",
    "name": "China Liberal Education Holdings Ltd"
  },
  {
    "ticker": "CLF",
    "exchange": "NYSE",
    "name": "Cleveland-Cliffs Inc"
  },
  {
    "ticker": "CLFD",
    "exchange": "NASDAQ",
    "name": "Clearfield Inc."
  },
  {
    "ticker": "CLGN",
    "exchange": "NASDAQ",
    "name": "CollPlant Biotechnologies Ltd Sponsored ADR"
  },
  {
    "ticker": "CLGX",
    "exchange": "NYSE",
    "name": "CoreLogic Inc."
  },
  {
    "ticker": "CLH",
    "exchange": "NYSE",
    "name": "Clean Harbors Inc."
  },
  {
    "ticker": "CLI",
    "exchange": "NYSE",
    "name": "Mack-Cali Realty Corporation"
  },
  {
    "ticker": "CLIR",
    "exchange": "NASDAQ",
    "name": "ClearSign Technologies Corporation"
  },
  {
    "ticker": "CLIX",
    "exchange": "NYSE ARCA",
    "name": "ProShares Long Online/Short Stores ETF"
  },
  {
    "ticker": "CLLS",
    "exchange": "NASDAQ",
    "name": "Cellectis SA Sponsored ADR"
  },
  {
    "ticker": "CLM",
    "exchange": "NYSE American",
    "name": "Cornerstone Strategic Value Fund Inc"
  },
  {
    "ticker": "CLMT",
    "exchange": "NASDAQ",
    "name": "Calumet Specialty Products Partners L.P."
  },
  {
    "ticker": "CLNC",
    "exchange": "NYSE",
    "name": "Colony Credit Real Estate Inc. Class A"
  },
  {
    "ticker": "CLNE",
    "exchange": "NASDAQ",
    "name": "Clean Energy Fuels Corp."
  },
  {
    "ticker": "CLNY",
    "exchange": "NYSE",
    "name": "Colony Capital Inc. Class A"
  },
  {
    "ticker": "CLNY-G",
    "exchange": "NYSE",
    "name": "Colony Capital Inc 7.5 % Cum Red Perp Registered Pfd Shs Series G"
  },
  {
    "ticker": "CLNY-H",
    "exchange": "NYSE",
    "name": "Colony Capital Inc 7.125 % Cum Red Perp Registered Pfd Shs Series H"
  },
  {
    "ticker": "CLNY-I",
    "exchange": "NYSE",
    "name": "Colony Capital Inc 7.15 % Cum Conv Red Perp Pfd Registered Shs Series I"
  },
  {
    "ticker": "CLNY-J",
    "exchange": "NYSE",
    "name": "Colony Capital Inc 7.125 % Cum Conv Red Perp Pfd Registered Shs Series J"
  },
  {
    "ticker": "CLOU",
    "exchange": "NASDAQ",
    "name": "Global X Cloud Computing ETF"
  },
  {
    "ticker": "CLPR",
    "exchange": "NYSE",
    "name": "Clipper Realty Inc."
  },
  {
    "ticker": "CLPS",
    "exchange": "NASDAQ",
    "name": "CLPS Inc."
  },
  {
    "ticker": "CLPT",
    "exchange": "NASDAQ",
    "name": "ClearPoint Neuro Inc."
  },
  {
    "ticker": "CLR",
    "exchange": "NYSE",
    "name": "Continental Resources Inc."
  },
  {
    "ticker": "CLRB",
    "exchange": "NASDAQ",
    "name": "Cellectar BioSciences Inc."
  },
  {
    "ticker": "CLRBZ",
    "exchange": "NASDAQ",
    "name": "Cellectar Biosciences Inc Warrants 2016-8.4.21 on Shs"
  },
  {
    "ticker": "CLRG",
    "exchange": "NASDAQ",
    "name": "IQ Chaikin U.S. Large Cap ETF"
  },
  {
    "ticker": "CLRO",
    "exchange": "NASDAQ",
    "name": "ClearOne Inc."
  },
  {
    "ticker": "CLS",
    "exchange": "NYSE",
    "name": "Celestica Inc."
  },
  {
    "ticker": "CLSD",
    "exchange": "NASDAQ",
    "name": "Clearside Biomedical Inc."
  },
  {
    "ticker": "CLSK",
    "exchange": "NASDAQ",
    "name": "Cleanspark Inc."
  },
  {
    "ticker": "CLSN",
    "exchange": "NASDAQ",
    "name": "Celsion Corporation"
  },
  {
    "ticker": "CLTL",
    "exchange": "NYSE ARCA",
    "name": "Invesco Treasury Collateral ETf"
  },
  {
    "ticker": "CLUB",
    "exchange": "NASDAQ",
    "name": "Town Sports International Holdings Inc."
  },
  {
    "ticker": "CLVS",
    "exchange": "NASDAQ",
    "name": "Clovis Oncology Inc."
  },
  {
    "ticker": "CLW",
    "exchange": "NYSE",
    "name": "Clearwater Paper Corporation"
  },
  {
    "ticker": "CLWT",
    "exchange": "NASDAQ",
    "name": "Euro Tech Holdings Co. Ltd."
  },
  {
    "ticker": "CLX",
    "exchange": "NYSE",
    "name": "Clorox Company"
  },
  {
    "ticker": "CLXT",
    "exchange": "NASDAQ",
    "name": "Calyxt Inc."
  },
  {
    "ticker": "CM",
    "exchange": "NYSE",
    "name": "Canadian Imperial Bank of Commerce"
  },
  {
    "ticker": "CMA",
    "exchange": "NYSE",
    "name": "Comerica Incorporated"
  },
  {
    "ticker": "CMBM",
    "exchange": "NASDAQ",
    "name": "Cambium Networks Corporation"
  },
  {
    "ticker": "CMBS",
    "exchange": "NYSE ARCA",
    "name": "iShares CMBS ETF"
  },
  {
    "ticker": "CMC",
    "exchange": "NYSE",
    "name": "Commercial Metals Company"
  },
  {
    "ticker": "CMCL",
    "exchange": "NYSE American",
    "name": "Caledonia Mining Corporation PLC"
  },
  {
    "ticker": "CMCM",
    "exchange": "NYSE",
    "name": "Cheetah Mobile Inc. ADR Class A"
  },
  {
    "ticker": "CMCO",
    "exchange": "NASDAQ",
    "name": "Columbus McKinnon Corporation"
  },
  {
    "ticker": "CMCSA",
    "exchange": "NASDAQ",
    "name": "Comcast Corporation Class A"
  },
  {
    "ticker": "CMCT",
    "exchange": "NASDAQ",
    "name": "CIM Commercial Trust Corporation"
  },
  {
    "ticker": "CMCTP",
    "exchange": "NASDAQ",
    "name": "CIM Commercial Trust Corp 5.5 % Cum Red Perp Pfd Registered Series L"
  },
  {
    "ticker": "CMD",
    "exchange": "NYSE",
    "name": "Cantel Medical Corp."
  },
  {
    "ticker": "CMDY",
    "exchange": "NYSE ARCA",
    "name": "iShares Bloomberg Roll Select Commodity Strategy ETF"
  },
  {
    "ticker": "CME",
    "exchange": "NASDAQ",
    "name": "CME Group Inc. Class A"
  },
  {
    "ticker": "CMF",
    "exchange": "NYSE ARCA",
    "name": "iShares California Muni Bond ETF"
  },
  {
    "ticker": "CMFNL",
    "exchange": "NASDAQ",
    "name": "Investcorp Credit Management BDC Inc 6.125 % Notes 2018-01.07.23"
  },
  {
    "ticker": "CMG",
    "exchange": "NYSE",
    "name": "Chipotle Mexican Grill Inc."
  },
  {
    "ticker": "CMI",
    "exchange": "NYSE",
    "name": "Cummins Inc."
  },
  {
    "ticker": "CMLS",
    "exchange": "NASDAQ",
    "name": "Cumulus Media Inc. Class A"
  },
  {
    "ticker": "CMO",
    "exchange": "NYSE",
    "name": "Capstead Mortgage Corporation"
  },
  {
    "ticker": "CMO-E",
    "exchange": "NYSE",
    "name": "Capstead Mortgage Corp 7 1/2 % Cum Red Pfd Shs Series E"
  },
  {
    "ticker": "CMP",
    "exchange": "NYSE",
    "name": "Compass Minerals International Inc."
  },
  {
    "ticker": "CMPI",
    "exchange": "NASDAQ",
    "name": "Checkmate Pharmaceuticals Inc."
  },
  {
    "ticker": "CMPR",
    "exchange": "NASDAQ",
    "name": "Cimpress Plc"
  },
  {
    "ticker": "CMRE",
    "exchange": "NYSE",
    "name": "Costamare Inc."
  },
  {
    "ticker": "CMRE-B",
    "exchange": "NYSE",
    "name": "Costamare Inc Cum Red Perp Pfd Shs Series B"
  },
  {
    "ticker": "CMRE-C",
    "exchange": "NYSE",
    "name": "Costamare Inc 8 1/2 % Cum Red Perp Pfd Shs Series C"
  },
  {
    "ticker": "CMRE-D",
    "exchange": "NYSE",
    "name": "Costamare Inc 8 3/4 % Cum Red Perp Pfd Shs Series D"
  },
  {
    "ticker": "CMRE-E",
    "exchange": "NYSE",
    "name": "Costamare Inc 8.875 % Cum Red Perp Pfd Registered Shs Series E"
  },
  {
    "ticker": "CMRX",
    "exchange": "NASDAQ",
    "name": "Chimerix Inc."
  },
  {
    "ticker": "CMS",
    "exchange": "NYSE",
    "name": "CMS Energy Corporation"
  },
  {
    "ticker": "CMS-B",
    "exchange": "NYSE",
    "name": "Consumers Energy Company 4 1/2 UDS Cum.Pfd Shs"
  },
  {
    "ticker": "CMSA",
    "exchange": "NYSE",
    "name": "CMS Energy Corp 5.625 % Notes 2018-15.03.78 Global"
  },
  {
    "ticker": "CMSC",
    "exchange": "NYSE",
    "name": "CMS Energy Corp 5.875 % Notes 2018-15.10.78 Global"
  },
  {
    "ticker": "CMSD",
    "exchange": "NYSE",
    "name": "CMS Energy Corp 5.875 % Notes 2019-01.03.79 Global"
  },
  {
    "ticker": "CMT",
    "exchange": "NYSE American",
    "name": "Core Molding Technologies Inc."
  },
  {
    "ticker": "CMTL",
    "exchange": "NASDAQ",
    "name": "Comtech Telecommunications Corp."
  },
  {
    "ticker": "CMU",
    "exchange": "NYSE",
    "name": "MFS High Yield Municipal Trust"
  },
  {
    "ticker": "CN",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers MSCI All China Equity ETF"
  },
  {
    "ticker": "CNA",
    "exchange": "NYSE",
    "name": "CNA Financial Corporation"
  },
  {
    "ticker": "CNBKA",
    "exchange": "NASDAQ",
    "name": "Century Bancorp Inc. Class A"
  },
  {
    "ticker": "CNBS",
    "exchange": "NYSE ARCA",
    "name": "Amplify Seymour Cannabis ETF"
  },
  {
    "ticker": "CNC",
    "exchange": "NYSE",
    "name": "Centene Corporation"
  },
  {
    "ticker": "CNCE",
    "exchange": "NASDAQ",
    "name": "Concert Pharmaceuticals Inc."
  },
  {
    "ticker": "CNCR",
    "exchange": "NASDAQ",
    "name": "Loncar Cancer Immunotherapy ETF"
  },
  {
    "ticker": "CNDT",
    "exchange": "NASDAQ",
    "name": "Conduent Inc."
  },
  {
    "ticker": "CNET",
    "exchange": "NASDAQ",
    "name": "ChinaNet Online Holdings Inc."
  },
  {
    "ticker": "CNF",
    "exchange": "NYSE",
    "name": "CNFinance Holdings Ltd. Sponsored ADR"
  },
  {
    "ticker": "CNFR",
    "exchange": "NASDAQ",
    "name": "Conifer Holdings Inc"
  },
  {
    "ticker": "CNFRL",
    "exchange": "NASDAQ",
    "name": "Conifer Holdings Inc 6.75 % Notes 2018-30.09.23"
  },
  {
    "ticker": "CNHI",
    "exchange": "NYSE",
    "name": "CNH Industrial NV"
  },
  {
    "ticker": "CNI",
    "exchange": "NYSE",
    "name": "Canadian National Railway Company"
  },
  {
    "ticker": "CNK",
    "exchange": "NYSE",
    "name": "Cinemark Holdings Inc."
  },
  {
    "ticker": "CNMD",
    "exchange": "NYSE",
    "name": "CONMED Corporation"
  },
  {
    "ticker": "CNNB",
    "exchange": "NASDAQ",
    "name": "Cincinnati Bancorp Inc."
  },
  {
    "ticker": "CNNE",
    "exchange": "NYSE",
    "name": "Cannae Holdings Inc."
  },
  {
    "ticker": "CNO",
    "exchange": "NYSE",
    "name": "CNO Financial Group Inc."
  },
  {
    "ticker": "CNOB",
    "exchange": "NASDAQ",
    "name": "ConnectOne Bancorp Inc."
  },
  {
    "ticker": "CNP",
    "exchange": "NYSE",
    "name": "CenterPoint Energy Inc."
  },
  {
    "ticker": "CNP-B",
    "exchange": "NYSE",
    "name": "CenterPoint Energy Inc. Depositary Shs Repr 1/20th 7 % Cum Conv Red Pfd Shs Series B"
  },
  {
    "ticker": "CNQ",
    "exchange": "NYSE",
    "name": "Canadian Natural Resources Limited"
  },
  {
    "ticker": "CNR",
    "exchange": "NYSE",
    "name": "Cornerstone Building Brands Inc"
  },
  {
    "ticker": "CNRG",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Kensho Clean Power ETF"
  },
  {
    "ticker": "CNS",
    "exchange": "NYSE",
    "name": "Cohen & Steers Inc."
  },
  {
    "ticker": "CNSL",
    "exchange": "NASDAQ",
    "name": "Consolidated Communications Holdings Inc."
  },
  {
    "ticker": "CNSP",
    "exchange": "NASDAQ",
    "name": "CNS Pharmaceuticals Inc."
  },
  {
    "ticker": "CNST",
    "exchange": "NASDAQ",
    "name": "Constellation Pharmaceuticals Inc."
  },
  {
    "ticker": "CNTG",
    "exchange": "NASDAQ",
    "name": "Centogene NV"
  },
  {
    "ticker": "CNTY",
    "exchange": "NASDAQ",
    "name": "Century Casinos Inc."
  },
  {
    "ticker": "CNX",
    "exchange": "NYSE",
    "name": "CNX Resources Corporation"
  },
  {
    "ticker": "CNXM",
    "exchange": "NYSE",
    "name": "CNX Midstream Partners LP"
  },
  {
    "ticker": "CNXN",
    "exchange": "NASDAQ",
    "name": "PC Connection Inc."
  },
  {
    "ticker": "CNXT",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors ChinaAMC SME-ChiNext ETF"
  },
  {
    "ticker": "CNYA",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI China A ETF"
  },
  {
    "ticker": "CO",
    "exchange": "NYSE",
    "name": "Global Cord Blood Corporation"
  },
  {
    "ticker": "COCP",
    "exchange": "NASDAQ",
    "name": "Cocrystal Pharma Inc"
  },
  {
    "ticker": "CODA",
    "exchange": "NASDAQ",
    "name": "Coda Octopus Group Inc."
  },
  {
    "ticker": "CODI",
    "exchange": "NYSE",
    "name": "Compass Diversified Holdings"
  },
  {
    "ticker": "CODI-A",
    "exchange": "NYSE",
    "name": "Compass Diversified Holdings 7.25% Non-Cum Red Pfd Registered Series A"
  },
  {
    "ticker": "CODI-B",
    "exchange": "NYSE",
    "name": "Compass Diversified Holdings Cum Red Perp Pfd Registered Shs Series B"
  },
  {
    "ticker": "CODI-C",
    "exchange": "NYSE",
    "name": "Compass Diversified Holdings 7.875% Cum Red Perp Pfd Registered Shs Series C"
  },
  {
    "ticker": "CODX",
    "exchange": "NASDAQ",
    "name": "Co-Diagnostics Inc."
  },
  {
    "ticker": "COE",
    "exchange": "NYSE",
    "name": "China Online Education Group Sponsored ADR"
  },
  {
    "ticker": "COF",
    "exchange": "NYSE",
    "name": "Capital One Financial Corporation"
  },
  {
    "ticker": "COF-F",
    "exchange": "NYSE",
    "name": "Capital One Financial Corporation Depositary Shs Repr 1/40th 6.20 % Non-Cum Perp Pfd Shs Series F"
  },
  {
    "ticker": "COF-G",
    "exchange": "NYSE",
    "name": "Capital One Financial Corporation Depositary Shs Repr 1/40th 5.20 % Non-Cum Perp Pfd Shs Series G"
  },
  {
    "ticker": "COF-H",
    "exchange": "NYSE",
    "name": "Capital One Financial Corporation Depositary Shs Repr 1/40th 6% Non-Cum Pfd Shs Series H"
  },
  {
    "ticker": "COF-I",
    "exchange": "NYSE",
    "name": "Capital One Financial Corporation Depositary Shs Repr 1/40th 5% Non-Cum Red Perp Pfd Registered Shs Ser I"
  },
  {
    "ticker": "COF-J",
    "exchange": "NYSE",
    "name": "Capital One Financial Corporation Depositary Shs Repr 1/40th 4.8% Non-Cum Red Perp Pfd RegisteredShs Ser J"
  },
  {
    "ticker": "COFS",
    "exchange": "NASDAQ",
    "name": "ChoiceOne Financial Services Inc."
  },
  {
    "ticker": "COG",
    "exchange": "NYSE",
    "name": "Cabot Oil & Gas Corporation"
  },
  {
    "ticker": "COHN",
    "exchange": "NYSE American",
    "name": "Cohen & Company Inc"
  },
  {
    "ticker": "COHR",
    "exchange": "NASDAQ",
    "name": "Coherent Inc."
  },
  {
    "ticker": "COHU",
    "exchange": "NASDAQ",
    "name": "Cohu Inc."
  },
  {
    "ticker": "COKE",
    "exchange": "NASDAQ",
    "name": "Coca-Cola Consolidated Inc."
  },
  {
    "ticker": "COLB",
    "exchange": "NASDAQ",
    "name": "Columbia Banking System Inc."
  },
  {
    "ticker": "COLD",
    "exchange": "NYSE",
    "name": "Americold Realty Trust"
  },
  {
    "ticker": "COLL",
    "exchange": "NASDAQ",
    "name": "Collegium Pharmaceutical Inc."
  },
  {
    "ticker": "COLM",
    "exchange": "NASDAQ",
    "name": "Columbia Sportswear Company"
  },
  {
    "ticker": "COM",
    "exchange": "NYSE ARCA",
    "name": "Direxion Auspice Broad Commodity Strategy ETF"
  },
  {
    "ticker": "COMB",
    "exchange": "NYSE ARCA",
    "name": "GraniteShares Bloomberg Commodity Broad Strategy No K-1 ETF"
  },
  {
    "ticker": "COMM",
    "exchange": "NASDAQ",
    "name": "CommScope Holding Co. Inc."
  },
  {
    "ticker": "COMT",
    "exchange": "NASDAQ",
    "name": "iShares Commodities Select Strategy ETF"
  },
  {
    "ticker": "CONE",
    "exchange": "NASDAQ",
    "name": "CyrusOne Inc."
  },
  {
    "ticker": "CONN",
    "exchange": "NASDAQ",
    "name": "Conn's Inc."
  },
  {
    "ticker": "COO",
    "exchange": "NYSE",
    "name": "Cooper Companies Inc."
  },
  {
    "ticker": "COOP",
    "exchange": "NASDAQ",
    "name": "Mr. Cooper Group Inc."
  },
  {
    "ticker": "COP",
    "exchange": "NYSE",
    "name": "ConocoPhillips"
  },
  {
    "ticker": "COPX",
    "exchange": "NYSE ARCA",
    "name": "Global X Copper Miners ETF"
  },
  {
    "ticker": "COR",
    "exchange": "NYSE",
    "name": "CoreSite Realty Corporation"
  },
  {
    "ticker": "CORE",
    "exchange": "NASDAQ",
    "name": "Core-Mark Holding Company Inc."
  },
  {
    "ticker": "CORN",
    "exchange": "NYSE ARCA",
    "name": "Teucrium Corn Fund"
  },
  {
    "ticker": "CORP",
    "exchange": "NYSE ARCA",
    "name": "PIMCO Investment Grade Corporate Bond Index ETF"
  },
  {
    "ticker": "CORR",
    "exchange": "NYSE",
    "name": "CorEnergy Infrastructure Trust Inc."
  },
  {
    "ticker": "CORR-A",
    "exchange": "NYSE",
    "name": "CorEnergy Infrastructure Trust Inc Deposit Shs Repr 1/100th 7 3/8 % Cum Red Perp Pfd Series A"
  },
  {
    "ticker": "CORT",
    "exchange": "NASDAQ",
    "name": "Corcept Therapeutics Incorporated."
  },
  {
    "ticker": "COST",
    "exchange": "NASDAQ",
    "name": "Costco Wholesale Corporation"
  },
  {
    "ticker": "COTY",
    "exchange": "NYSE",
    "name": "Coty Inc. Class A"
  },
  {
    "ticker": "COUP",
    "exchange": "NASDAQ",
    "name": "Coupa Software Inc."
  },
  {
    "ticker": "COW",
    "exchange": "NYSE ARCA",
    "name": "iPath Series B Bloomberg Livestock Subindex Total Return ETN"
  },
  {
    "ticker": "COWN",
    "exchange": "NASDAQ",
    "name": "Cowen Inc Class A"
  },
  {
    "ticker": "COWNL",
    "exchange": "NASDAQ",
    "name": "Cowen Inc 7.75 % Notes 2018-15.06.33"
  },
  {
    "ticker": "COWNZ",
    "exchange": "NASDAQ",
    "name": "Cowen Inc 7.35 % Notes 2017-15.12.27"
  },
  {
    "ticker": "COWZ",
    "exchange": "Cboe BZX",
    "name": "Pacer US Cash Cows 100 ETF"
  },
  {
    "ticker": "CP",
    "exchange": "NYSE",
    "name": "Canadian Pacific Railway Limited"
  },
  {
    "ticker": "CPA",
    "exchange": "NYSE",
    "name": "Copa Holdings S.A. Class A"
  },
  {
    "ticker": "CPAA",
    "exchange": "NASDAQ",
    "name": "Conyers Park II Acquisition Corp. Class A"
  },
  {
    "ticker": "CPAAU",
    "exchange": "NASDAQ",
    "name": "Conyers Park II Acquisition Corp Units Cons of 1 Sh A + 1/4 Wt"
  },
  {
    "ticker": "CPAAW",
    "exchange": "NASDAQ",
    "name": "Conyers Park II Acquisition Corp Warrant 2019-26 on Con Pr II Acqn-A"
  },
  {
    "ticker": "CPAC",
    "exchange": "NYSE",
    "name": "Cementos Pacasmayo SAA Sponsored ADR"
  },
  {
    "ticker": "CPAH",
    "exchange": "NASDAQ",
    "name": "CounterPath Corporation"
  },
  {
    "ticker": "CPB",
    "exchange": "NYSE",
    "name": "Campbell Soup Company"
  },
  {
    "ticker": "CPE",
    "exchange": "NYSE",
    "name": "Callon Petroleum Company"
  },
  {
    "ticker": "CPER",
    "exchange": "NYSE ARCA",
    "name": "United States Copper Index Fund"
  },
  {
    "ticker": "CPF",
    "exchange": "NYSE",
    "name": "Central Pacific Financial Corp."
  },
  {
    "ticker": "CPG",
    "exchange": "NYSE",
    "name": "Crescent Point Energy Corp."
  },
  {
    "ticker": "CPHC",
    "exchange": "NASDAQ",
    "name": "Canterbury Park Holding Corp"
  },
  {
    "ticker": "CPHI",
    "exchange": "NYSE American",
    "name": "China Pharma Holdings Inc."
  },
  {
    "ticker": "CPI",
    "exchange": "NYSE ARCA",
    "name": "IQ Real Return ETF"
  },
  {
    "ticker": "CPIX",
    "exchange": "NASDAQ",
    "name": "Cumberland Pharmaceuticals Inc."
  },
  {
    "ticker": "CPK",
    "exchange": "NYSE",
    "name": "Chesapeake Utilities Corporation"
  },
  {
    "ticker": "CPLG",
    "exchange": "NYSE",
    "name": "CorePoint Lodging Inc."
  },
  {
    "ticker": "CPLP",
    "exchange": "NASDAQ",
    "name": "Capital Product Partners LP"
  },
  {
    "ticker": "CPRI",
    "exchange": "NYSE",
    "name": "Capri Holdings Limited"
  },
  {
    "ticker": "CPRT",
    "exchange": "NASDAQ",
    "name": "Copart Inc."
  },
  {
    "ticker": "CPRX",
    "exchange": "NASDAQ",
    "name": "Catalyst Pharmaceuticals Inc."
  },
  {
    "ticker": "CPS",
    "exchange": "NYSE",
    "name": "Cooper-Standard Holdings Inc."
  },
  {
    "ticker": "CPSH",
    "exchange": "NASDAQ",
    "name": "CPS Technologies Corporation"
  },
  {
    "ticker": "CPSI",
    "exchange": "NASDAQ",
    "name": "Computer Programs and Systems Inc."
  },
  {
    "ticker": "CPSR=",
    "exchange": "NYSE",
    "name": "Capstar Special Purpose Acquisition Corp Units Cons of 1 Sh A + 1/2 Wt 09.07.27"
  },
  {
    "ticker": "CPSS",
    "exchange": "NASDAQ",
    "name": "Consumer Portfolio Services Inc."
  },
  {
    "ticker": "CPST",
    "exchange": "NASDAQ",
    "name": "Capstone Turbine Corporation"
  },
  {
    "ticker": "CPT",
    "exchange": "NYSE",
    "name": "Camden Property Trust"
  },
  {
    "ticker": "CPTA",
    "exchange": "NASDAQ",
    "name": "Capitala Finance Corp."
  },
  {
    "ticker": "CPTAG",
    "exchange": "NASDAQ",
    "name": "Capitala Finance Corp 5.75 % Convertible Notes 2017-31.05.22"
  },
  {
    "ticker": "CPTAL",
    "exchange": "NASDAQ",
    "name": "Capitala Finance Corp 6 % Notes 2017-31.05.22"
  },
  {
    "ticker": "CPZ",
    "exchange": "NASDAQ",
    "name": "Calamos Long/Short Equity & Dynamic Income Trust"
  },
  {
    "ticker": "CQP",
    "exchange": "NYSE American",
    "name": "Cheniere Energy Partners L.P."
  },
  {
    "ticker": "CQQQ",
    "exchange": "NYSE ARCA",
    "name": "Invesco China Technology ETF"
  },
  {
    "ticker": "CR",
    "exchange": "NYSE",
    "name": "Crane Co."
  },
  {
    "ticker": "CRAI",
    "exchange": "NASDAQ",
    "name": "CRA International Inc."
  },
  {
    "ticker": "CRAK",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Oil Refiners ETF"
  },
  {
    "ticker": "CRBN",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI ACWI Low Carbon Target ETF"
  },
  {
    "ticker": "CRBP",
    "exchange": "NASDAQ",
    "name": "Corbus Pharmaceuticals Holdings Inc"
  },
  {
    "ticker": "CRD.A",
    "exchange": "NYSE",
    "name": "Crawford & Company Class A"
  },
  {
    "ticker": "CRD.B",
    "exchange": "NYSE",
    "name": "Crawford & Company Class B"
  },
  {
    "ticker": "CRDF",
    "exchange": "NASDAQ",
    "name": "Cardiff Oncology Inc."
  },
  {
    "ticker": "CREE",
    "exchange": "NASDAQ",
    "name": "Cree Inc."
  },
  {
    "ticker": "CREG",
    "exchange": "NASDAQ",
    "name": "China Recycling Energy Corporation"
  },
  {
    "ticker": "CRESY",
    "exchange": "NASDAQ",
    "name": "Cresud SA Sponsored ADR"
  },
  {
    "ticker": "CREX",
    "exchange": "NASDAQ",
    "name": "Creative Realities Inc."
  },
  {
    "ticker": "CREXW",
    "exchange": "NASDAQ",
    "name": "Creative Realities Inc Warrant 2018-09.11.22 on Creative Realiti"
  },
  {
    "ticker": "CRF",
    "exchange": "NYSE American",
    "name": "Cornerstone Total Return Fund Inc"
  },
  {
    "ticker": "CRH",
    "exchange": "NYSE",
    "name": "CRH Plc Sponsored ADR"
  },
  {
    "ticker": "CRHM",
    "exchange": "NYSE American",
    "name": "CRH Medical Corporation"
  },
  {
    "ticker": "CRI",
    "exchange": "NYSE",
    "name": "Carter's Inc."
  },
  {
    "ticker": "CRIS",
    "exchange": "NASDAQ",
    "name": "Curis Inc."
  },
  {
    "ticker": "CRK",
    "exchange": "NYSE",
    "name": "Comstock Resources Inc."
  },
  {
    "ticker": "CRL",
    "exchange": "NYSE",
    "name": "Charles River Laboratories International Inc."
  },
  {
    "ticker": "CRM",
    "exchange": "NYSE",
    "name": "salesforce.com inc."
  },
  {
    "ticker": "CRMD",
    "exchange": "NYSE American",
    "name": "CorMedix Inc."
  },
  {
    "ticker": "CRMT",
    "exchange": "NASDAQ",
    "name": "America's Car-Mart Inc."
  },
  {
    "ticker": "CRNC",
    "exchange": "NASDAQ",
    "name": "Cerence Inc"
  },
  {
    "ticker": "CRNT",
    "exchange": "NASDAQ",
    "name": "Ceragon Networks Ltd"
  },
  {
    "ticker": "CRNX",
    "exchange": "NASDAQ",
    "name": "Crinetics Pharmaceuticals Inc"
  },
  {
    "ticker": "CROC",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort Australian Dollar"
  },
  {
    "ticker": "CRON",
    "exchange": "NASDAQ",
    "name": "Cronos Group Inc"
  },
  {
    "ticker": "CROX",
    "exchange": "NASDAQ",
    "name": "Crocs Inc."
  },
  {
    "ticker": "CRS",
    "exchange": "NYSE",
    "name": "Carpenter Technology Corporation"
  },
  {
    "ticker": "CRSA",
    "exchange": "NASDAQ",
    "name": "Crescent Acquisition Corp Class A"
  },
  {
    "ticker": "CRSAU",
    "exchange": "NASDAQ",
    "name": "Crescent Acquisition Corp Units Cons of 1 Sh + 0.5 Wt Class A"
  },
  {
    "ticker": "CRSAW",
    "exchange": "NASDAQ",
    "name": "Crescent Funding Inc Warrant 2019-07.03.24 on Crescent Acqn-A"
  },
  {
    "ticker": "CRSP",
    "exchange": "NASDAQ",
    "name": "CRISPR Therapeutics AG"
  },
  {
    "ticker": "CRT",
    "exchange": "NYSE",
    "name": "Cross Timbers Royalty Trust"
  },
  {
    "ticker": "CRTO",
    "exchange": "NASDAQ",
    "name": "Criteo SA Sponsored ADR"
  },
  {
    "ticker": "CRTX",
    "exchange": "NASDAQ",
    "name": "Cortexyme Inc."
  },
  {
    "ticker": "CRUS",
    "exchange": "NASDAQ",
    "name": "Cirrus Logic Inc."
  },
  {
    "ticker": "CRVL",
    "exchange": "NASDAQ",
    "name": "CorVel Corporation"
  },
  {
    "ticker": "CRVS",
    "exchange": "NASDAQ",
    "name": "Corvus Pharmaceuticals Inc."
  },
  {
    "ticker": "CRWD",
    "exchange": "NASDAQ",
    "name": "CrowdStrike Holdings Inc. Class A"
  },
  {
    "ticker": "CRWS",
    "exchange": "NASDAQ",
    "name": "Crown Crafts Inc."
  },
  {
    "ticker": "CRY",
    "exchange": "NYSE",
    "name": "CryoLife Inc."
  },
  {
    "ticker": "CS",
    "exchange": "NYSE",
    "name": "Credit Suisse Group AG Sponsored ADR"
  },
  {
    "ticker": "CSA",
    "exchange": "NASDAQ",
    "name": "VictoryShares US Small Cap Volatility Wtd ETF"
  },
  {
    "ticker": "CSB",
    "exchange": "NASDAQ",
    "name": "VictoryShares US Small Cap High Dividend Volatility Wtd ETF"
  },
  {
    "ticker": "CSBR",
    "exchange": "NASDAQ",
    "name": "Champions Oncology Inc."
  },
  {
    "ticker": "CSCO",
    "exchange": "NASDAQ",
    "name": "Cisco Systems Inc."
  },
  {
    "ticker": "CSD",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P Spin-Off ETF"
  },
  {
    "ticker": "CSF",
    "exchange": "NASDAQ",
    "name": "VictoryShares US Discovery Enhanced Volatility Wtd ETF"
  },
  {
    "ticker": "CSGP",
    "exchange": "NASDAQ",
    "name": "CoStar Group Inc."
  },
  {
    "ticker": "CSGS",
    "exchange": "NASDAQ",
    "name": "CSG Systems International Inc."
  },
  {
    "ticker": "CSII",
    "exchange": "NASDAQ",
    "name": "Cardiovascular Systems Inc."
  },
  {
    "ticker": "CSIQ",
    "exchange": "NASDAQ",
    "name": "Canadian Solar Inc."
  },
  {
    "ticker": "CSL",
    "exchange": "NYSE",
    "name": "Carlisle Companies Incorporated"
  },
  {
    "ticker": "CSLT",
    "exchange": "NYSE",
    "name": "Castlight Health Inc. Class B"
  },
  {
    "ticker": "CSM",
    "exchange": "Cboe BZX",
    "name": "ProShares Large Cap Core Plus"
  },
  {
    "ticker": "CSML",
    "exchange": "NASDAQ",
    "name": "IQ Chaikin U.S. Small Cap ETF"
  },
  {
    "ticker": "CSOD",
    "exchange": "NASDAQ",
    "name": "Cornerstone Ondemand Inc."
  },
  {
    "ticker": "CSPI",
    "exchange": "NASDAQ",
    "name": "CSP Inc."
  },
  {
    "ticker": "CSPR",
    "exchange": "NYSE",
    "name": "Casper Sleep Inc"
  },
  {
    "ticker": "CSQ",
    "exchange": "NASDAQ",
    "name": "Calamos Strategic Total Return Fund"
  },
  {
    "ticker": "CSSE",
    "exchange": "NASDAQ",
    "name": "Chicken Soup for the Soul Entertainment Inc. Class A"
  },
  {
    "ticker": "CSSEN",
    "exchange": "NASDAQ",
    "name": "Chicken Soup for the Soul Entertainment Inc.9.5 % Notes 2020-31.07.25 Global"
  },
  {
    "ticker": "CSSEP",
    "exchange": "NASDAQ",
    "name": "Chicken Soup for the Soul Entertainment Inc. Cum Red Perp Pfd Series A"
  },
  {
    "ticker": "CSTE",
    "exchange": "NASDAQ",
    "name": "Caesarstone Ltd."
  },
  {
    "ticker": "CSTL",
    "exchange": "NASDAQ",
    "name": "Castle Biosciences Inc."
  },
  {
    "ticker": "CSTM",
    "exchange": "NYSE",
    "name": "Constellium SE Class A"
  },
  {
    "ticker": "CSTR",
    "exchange": "NASDAQ",
    "name": "CapStar Financial Holdings Inc."
  },
  {
    "ticker": "CSU",
    "exchange": "NYSE",
    "name": "Capital Senior Living Corporation"
  },
  {
    "ticker": "CSV",
    "exchange": "NYSE",
    "name": "Carriage Services Inc."
  },
  {
    "ticker": "CSWC",
    "exchange": "NASDAQ",
    "name": "Capital Southwest Corporation"
  },
  {
    "ticker": "CSWCL",
    "exchange": "NASDAQ",
    "name": "Capital Southwest Corporation 5.95 % Notes 2017-15.12.22"
  },
  {
    "ticker": "CSWI",
    "exchange": "NASDAQ",
    "name": "CSW Industrials Inc."
  },
  {
    "ticker": "CSX",
    "exchange": "NASDAQ",
    "name": "CSX Corporation"
  },
  {
    "ticker": "CTA-A",
    "exchange": "NYSE",
    "name": "E.I. Du Pont De Nemours & Co 3 1/2 USD Cum.Pref.Shs"
  },
  {
    "ticker": "CTA-B",
    "exchange": "NYSE",
    "name": "E.I. Du Pont De Nemours & Co 4 1/2 USD Cum.Pfd Shs"
  },
  {
    "ticker": "CTAA",
    "exchange": "NYSE",
    "name": "Qwest Corp 7 % Notes 2016-1.2.56"
  },
  {
    "ticker": "CTAS",
    "exchange": "NASDAQ",
    "name": "Cintas Corporation"
  },
  {
    "ticker": "CTB",
    "exchange": "NYSE",
    "name": "Cooper Tire & Rubber Company"
  },
  {
    "ticker": "CTBB",
    "exchange": "NYSE",
    "name": "Qwest Corp 6 1/2 % Notes 2016-01.09.56"
  },
  {
    "ticker": "CTBI",
    "exchange": "NASDAQ",
    "name": "Community Trust Bancorp Inc."
  },
  {
    "ticker": "CTDD",
    "exchange": "NYSE",
    "name": "Qwest Corp 6.75 % Notes 2017-15.06.57 Global"
  },
  {
    "ticker": "CTEK",
    "exchange": "NYSE American",
    "name": "CynergisTek Inc."
  },
  {
    "ticker": "CTG",
    "exchange": "NASDAQ",
    "name": "Computer Task Group Incorporated"
  },
  {
    "ticker": "CTHR",
    "exchange": "NASDAQ",
    "name": "Charles & Colvard Ltd."
  },
  {
    "ticker": "CTIB",
    "exchange": "NASDAQ",
    "name": "Yunhong CTI Limited"
  },
  {
    "ticker": "CTIC",
    "exchange": "NASDAQ",
    "name": "CTI BioPharma Corp."
  },
  {
    "ticker": "CTK",
    "exchange": "NYSE",
    "name": "CooTek (Cayman) Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "CTL",
    "exchange": "NYSE",
    "name": "CenturyLink Inc."
  },
  {
    "ticker": "CTLT",
    "exchange": "NYSE",
    "name": "Catalent Inc"
  },
  {
    "ticker": "CTMX",
    "exchange": "NASDAQ",
    "name": "CytomX Therapeutics Inc."
  },
  {
    "ticker": "CTO",
    "exchange": "NYSE American",
    "name": "CTO Realty Growth Inc."
  },
  {
    "ticker": "CTR",
    "exchange": "NYSE",
    "name": "ClearBridge MLP and Midstream Total Return Fund Inc"
  },
  {
    "ticker": "CTRA",
    "exchange": "NYSE",
    "name": "Contura Energy Inc."
  },
  {
    "ticker": "CTRE",
    "exchange": "NASDAQ",
    "name": "CareTrust REIT Inc"
  },
  {
    "ticker": "CTRM",
    "exchange": "NASDAQ",
    "name": "Castor Maritime Inc."
  },
  {
    "ticker": "CTRN",
    "exchange": "NASDAQ",
    "name": "Citi Trends Inc."
  },
  {
    "ticker": "CTS",
    "exchange": "NYSE",
    "name": "CTS Corporation"
  },
  {
    "ticker": "CTSH",
    "exchange": "NASDAQ",
    "name": "Cognizant Technology Solutions Corporation Class A"
  },
  {
    "ticker": "CTSO",
    "exchange": "NASDAQ",
    "name": "CytoSorbents Corporation"
  },
  {
    "ticker": "CTT",
    "exchange": "NYSE",
    "name": "CatchMark Timber Trust Inc. Class A"
  },
  {
    "ticker": "CTVA",
    "exchange": "NYSE",
    "name": "Corteva Inc"
  },
  {
    "ticker": "CTXR",
    "exchange": "NASDAQ",
    "name": "Citius Pharmaceuticals Inc"
  },
  {
    "ticker": "CTXRW",
    "exchange": "NASDAQ",
    "name": "Citius Pharmaceuticals Inc Warrant 2017- on Citius Pharmac"
  },
  {
    "ticker": "CTXS",
    "exchange": "NASDAQ",
    "name": "Citrix Systems Inc."
  },
  {
    "ticker": "CTY",
    "exchange": "NYSE",
    "name": "Qwest Corp 6 1/8 % Notes 2013-1.6.53 Sr"
  },
  {
    "ticker": "CTZ",
    "exchange": "NYSE",
    "name": "Qwest Corp 6 5/8 % Notes 2015-15.9.55"
  },
  {
    "ticker": "CUB",
    "exchange": "NYSE",
    "name": "Cubic Corporation"
  },
  {
    "ticker": "CUBA",
    "exchange": "NASDAQ",
    "name": "Herzfeld Caribbean Basin Fund Inc"
  },
  {
    "ticker": "CUBB",
    "exchange": "NYSE",
    "name": "Customers Bancorp Inc. 5.375 % Notes 2019-30.12.34"
  },
  {
    "ticker": "CUBE",
    "exchange": "NYSE",
    "name": "CubeSmart"
  },
  {
    "ticker": "CUBI",
    "exchange": "NYSE",
    "name": "Customers Bancorp Inc."
  },
  {
    "ticker": "CUBI-C",
    "exchange": "NYSE",
    "name": "Customers Bancorp Inc. Non Cum Perp Pfd Series C"
  },
  {
    "ticker": "CUBI-D",
    "exchange": "NYSE",
    "name": "Customers Bancorp Inc Non-Cum Perp Pfd Shs Series D"
  },
  {
    "ticker": "CUBI-E",
    "exchange": "NYSE",
    "name": "Customers Bancorp Inc Non-Cum Perp Pfd Shs Series E"
  },
  {
    "ticker": "CUBI-F",
    "exchange": "NYSE",
    "name": "Customers Bancorp Inc. Non-Cum Perp Pfd Shs Series F"
  },
  {
    "ticker": "CUE",
    "exchange": "NASDAQ",
    "name": "Cue Biopharma Inc."
  },
  {
    "ticker": "CUK",
    "exchange": "NYSE",
    "name": "Carnival plc Sponsored ADR"
  },
  {
    "ticker": "CULP",
    "exchange": "NYSE",
    "name": "Culp Inc."
  },
  {
    "ticker": "CURE",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Healthcare Bull 3x Shares"
  },
  {
    "ticker": "CURO",
    "exchange": "NYSE",
    "name": "CURO Group Holdings Corp."
  },
  {
    "ticker": "CUT",
    "exchange": "NYSE ARCA",
    "name": "Invesco MSCI Global Timber ETF"
  },
  {
    "ticker": "CUTR",
    "exchange": "NASDAQ",
    "name": "Cutera Inc."
  },
  {
    "ticker": "CUZ",
    "exchange": "NYSE",
    "name": "Cousins Properties Incorporated"
  },
  {
    "ticker": "CVA",
    "exchange": "NYSE",
    "name": "Covanta Holding Corporation"
  },
  {
    "ticker": "CVAC",
    "exchange": "NASDAQ",
    "name": "CureVac N.V."
  },
  {
    "ticker": "CVBF",
    "exchange": "NASDAQ",
    "name": "CVB Financial Corp."
  },
  {
    "ticker": "CVCO",
    "exchange": "NASDAQ",
    "name": "Cavco Industries Inc."
  },
  {
    "ticker": "CVCY",
    "exchange": "NASDAQ",
    "name": "Central Valley Community Bancorp"
  },
  {
    "ticker": "CVE",
    "exchange": "NYSE",
    "name": "Cenovus Energy Inc."
  },
  {
    "ticker": "CVEO",
    "exchange": "NYSE",
    "name": "Civeo Corp"
  },
  {
    "ticker": "CVET",
    "exchange": "NASDAQ",
    "name": "Covetrus Inc."
  },
  {
    "ticker": "CVGI",
    "exchange": "NASDAQ",
    "name": "Commercial Vehicle Group Inc."
  },
  {
    "ticker": "CVGW",
    "exchange": "NASDAQ",
    "name": "Calavo Growers Inc."
  },
  {
    "ticker": "CVI",
    "exchange": "NYSE",
    "name": "CVR Energy Inc."
  },
  {
    "ticker": "CVLG",
    "exchange": "NASDAQ",
    "name": "Covenant Logistics Group Inc. Class A"
  },
  {
    "ticker": "CVLT",
    "exchange": "NASDAQ",
    "name": "CommVault Systems Inc."
  },
  {
    "ticker": "CVLY",
    "exchange": "NASDAQ",
    "name": "Codorus Valley Bancorp Inc."
  },
  {
    "ticker": "CVM",
    "exchange": "NYSE American",
    "name": "CEL-SCI Corporation"
  },
  {
    "ticker": "CVNA",
    "exchange": "NYSE",
    "name": "Carvana Co. Class A"
  },
  {
    "ticker": "CVR",
    "exchange": "NYSE American",
    "name": "Chicago Rivet & Machine Co."
  },
  {
    "ticker": "CVS",
    "exchange": "NYSE",
    "name": "CVS Health Corporation"
  },
  {
    "ticker": "CVU",
    "exchange": "NYSE American",
    "name": "CPI Aerostructures Inc."
  },
  {
    "ticker": "CVV",
    "exchange": "NASDAQ",
    "name": "CVD Equipment Corporation"
  },
  {
    "ticker": "CVX",
    "exchange": "NYSE",
    "name": "Chevron Corporation"
  },
  {
    "ticker": "CVY",
    "exchange": "NYSE ARCA",
    "name": "Invesco Zacks Multi-Asset Income ETF"
  },
  {
    "ticker": "CW",
    "exchange": "NYSE",
    "name": "Curtiss-Wright Corporation"
  },
  {
    "ticker": "CWB",
    "exchange": "NYSE ARCA",
    "name": "SPDR Bloomberg Barclays Convertible Securities ETF"
  },
  {
    "ticker": "CWBC",
    "exchange": "NASDAQ",
    "name": "Community West Bancshares"
  },
  {
    "ticker": "CWBR",
    "exchange": "NASDAQ",
    "name": "CohBar Inc"
  },
  {
    "ticker": "CWCO",
    "exchange": "NASDAQ",
    "name": "Consolidated Water Co. Ltd."
  },
  {
    "ticker": "CWEB",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily CSI China Internet Index Bull 2x Shares"
  },
  {
    "ticker": "CWEN",
    "exchange": "NYSE",
    "name": "Clearway Energy Inc. Class C"
  },
  {
    "ticker": "CWEN.A",
    "exchange": "NYSE",
    "name": "Clearway Energy Inc. Class A"
  },
  {
    "ticker": "CWH",
    "exchange": "NYSE",
    "name": "Camping World Holdings Inc. Class A"
  },
  {
    "ticker": "CWI",
    "exchange": "NYSE ARCA",
    "name": "SPDR MSCI ACWI ex-US ETF"
  },
  {
    "ticker": "CWK",
    "exchange": "NYSE",
    "name": "Cushman & Wakefield Plc"
  },
  {
    "ticker": "CWS",
    "exchange": "NYSE ARCA",
    "name": "AdvisorShares Focused Equity ETF"
  },
  {
    "ticker": "CWST",
    "exchange": "NASDAQ",
    "name": "CNYSE Americanlla Waste Systems Inc. Class A"
  },
  {
    "ticker": "CWT",
    "exchange": "NYSE",
    "name": "California Water Service Group"
  },
  {
    "ticker": "CX",
    "exchange": "NYSE",
    "name": "Cemex SAB de CV Sponsored ADR"
  },
  {
    "ticker": "CXDC",
    "exchange": "NASDAQ",
    "name": "China XD Plastics Co. Ltd."
  },
  {
    "ticker": "CXDO",
    "exchange": "NASDAQ",
    "name": "Crexendo Inc."
  },
  {
    "ticker": "CXE",
    "exchange": "NYSE",
    "name": "MFS High Income Municipal Trust Shares"
  },
  {
    "ticker": "CXH",
    "exchange": "NYSE",
    "name": "MFS Investment Grade Municipal Trust"
  },
  {
    "ticker": "CXO",
    "exchange": "NYSE",
    "name": "Concho Resources Inc."
  },
  {
    "ticker": "CXP",
    "exchange": "NYSE",
    "name": "Columbia Property Trust Inc."
  },
  {
    "ticker": "CXSE",
    "exchange": "NASDAQ",
    "name": "WisdomTree China ex-State-Owned Enterprises Fund"
  },
  {
    "ticker": "CXW",
    "exchange": "NYSE",
    "name": "CoreCivic Inc."
  },
  {
    "ticker": "CYAD",
    "exchange": "NASDAQ",
    "name": "Celyad Oncology SA Sponsored ADR"
  },
  {
    "ticker": "CYAN",
    "exchange": "NASDAQ",
    "name": "Cyanotech Corporation"
  },
  {
    "ticker": "CYB",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Chinese Yuan Strategy Fund"
  },
  {
    "ticker": "CYBE",
    "exchange": "NASDAQ",
    "name": "CyberOptics Corporation"
  },
  {
    "ticker": "CYBR",
    "exchange": "NASDAQ",
    "name": "CyberArk Software Ltd."
  },
  {
    "ticker": "CYCC",
    "exchange": "NASDAQ",
    "name": "Cyclacel Pharmaceuticals Inc."
  },
  {
    "ticker": "CYCCP",
    "exchange": "NASDAQ",
    "name": "Cyclacel Pharmaceuticals Inc 6 % Conv Pfd"
  },
  {
    "ticker": "CYCN",
    "exchange": "NASDAQ",
    "name": "Cyclerion TherapeuticsInc."
  },
  {
    "ticker": "CYD",
    "exchange": "NYSE",
    "name": "China Yuchai International Limited"
  },
  {
    "ticker": "CYH",
    "exchange": "NYSE",
    "name": "Community Health Systems Inc."
  },
  {
    "ticker": "CYRN",
    "exchange": "NASDAQ",
    "name": "CYREN Ltd."
  },
  {
    "ticker": "CYRX",
    "exchange": "NASDAQ",
    "name": "CryoPort Inc."
  },
  {
    "ticker": "CYTK",
    "exchange": "NASDAQ",
    "name": "Cytokinetics Incorporated"
  },
  {
    "ticker": "CZA",
    "exchange": "NYSE ARCA",
    "name": "Invesco Zacks Mid-Cap ETF"
  },
  {
    "ticker": "CZNC",
    "exchange": "NASDAQ",
    "name": "Citizens & Northern Corporation"
  },
  {
    "ticker": "CZR",
    "exchange": "NASDAQ",
    "name": "Caesars Entertainment Inc"
  },
  {
    "ticker": "CZWI",
    "exchange": "NASDAQ",
    "name": "Citizens Community Bancorp Inc."
  },
  {
    "ticker": "CZZ",
    "exchange": "NYSE",
    "name": "Cosan Limited Class A"
  },
  {
    "ticker": "D",
    "exchange": "NYSE",
    "name": "Dominion Energy Inc"
  },
  {
    "ticker": "DAC",
    "exchange": "NYSE",
    "name": "Danaos Corporation"
  },
  {
    "ticker": "DADA",
    "exchange": "NASDAQ",
    "name": "Dada Nexus Ltd. Sponsored ADR"
  },
  {
    "ticker": "DAIO",
    "exchange": "NASDAQ",
    "name": "Data I/O Corporation"
  },
  {
    "ticker": "DAKT",
    "exchange": "NASDAQ",
    "name": "Daktronics Inc."
  },
  {
    "ticker": "DAL",
    "exchange": "NYSE",
    "name": "Delta Air Lines Inc."
  },
  {
    "ticker": "DALI",
    "exchange": "NASDAQ",
    "name": "First Trust Dorsey Wright DALI 1 ETF"
  },
  {
    "ticker": "DALT",
    "exchange": "Cboe BZX",
    "name": "Anfield Capital Diversified Alternatives ETF"
  },
  {
    "ticker": "DAN",
    "exchange": "NYSE",
    "name": "Dana Incorporated"
  },
  {
    "ticker": "DAO",
    "exchange": "NYSE",
    "name": "Youdao Inc ADR Class A"
  },
  {
    "ticker": "DAR",
    "exchange": "NYSE",
    "name": "Darling Ingredients Inc."
  },
  {
    "ticker": "DARE",
    "exchange": "NASDAQ",
    "name": "Dare Bioscience Inc."
  },
  {
    "ticker": "DAUD",
    "exchange": "NYSE ARCA",
    "name": "VelocityShares Daily 4x Long USD vs AUD ETN"
  },
  {
    "ticker": "DAUG",
    "exchange": "Cboe BZX",
    "name": "First Trust Exchange-Traded Fund VIII Deep Buffer August Fund"
  },
  {
    "ticker": "DAVA",
    "exchange": "NYSE",
    "name": "Endava Plc Sponsored ADR Class A"
  },
  {
    "ticker": "DAX",
    "exchange": "NASDAQ",
    "name": "Global X DAX Germany ETF"
  },
  {
    "ticker": "DB",
    "exchange": "NYSE",
    "name": "Deutsche Bank AG"
  },
  {
    "ticker": "DBA",
    "exchange": "NYSE ARCA",
    "name": "Invesco DB Agriculture Fund"
  },
  {
    "ticker": "DBAW",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers MSCI All World ex US Hedged Equity ETF"
  },
  {
    "ticker": "DBB",
    "exchange": "NYSE ARCA",
    "name": "Invesco DB BNYSE American Metals Fund"
  },
  {
    "ticker": "DBC",
    "exchange": "NYSE ARCA",
    "name": "Invesco DB Commodity Index Tracking Fund"
  },
  {
    "ticker": "DBD",
    "exchange": "NYSE",
    "name": "Diebold Nixdorf Incorporated"
  },
  {
    "ticker": "DBE",
    "exchange": "NYSE ARCA",
    "name": "Invesco DB Energy Fund"
  },
  {
    "ticker": "DBEF",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers MSCI EAFE Hedged Equity ETF"
  },
  {
    "ticker": "DBEH",
    "exchange": "NYSE ARCA",
    "name": "iM DBi Hedge Strategy ETF"
  },
  {
    "ticker": "DBEM",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers MSCI Emerging Markets Hedged Equity ETF"
  },
  {
    "ticker": "DBEU",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers MSCI Europe Hedged Equity ETF"
  },
  {
    "ticker": "DBEZ",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers MSCI Eurozone Hedged Equity ETF"
  },
  {
    "ticker": "DBGR",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers MSCI Germany Hedged Equity ETF"
  },
  {
    "ticker": "DBI",
    "exchange": "NYSE",
    "name": "Designer Brands Inc. Class A"
  },
  {
    "ticker": "DBJP",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers MSCI Japan Hedged Equity ETF"
  },
  {
    "ticker": "DBL",
    "exchange": "NYSE",
    "name": "Doubleline Opportunistic Credit Fund"
  },
  {
    "ticker": "DBLV",
    "exchange": "NYSE ARCA",
    "name": "AdvisorShares DoubleLine Value Equity ETF"
  },
  {
    "ticker": "DBMF",
    "exchange": "NYSE ARCA",
    "name": "iM DBi Managed Futures Strategy ETF"
  },
  {
    "ticker": "DBO",
    "exchange": "NYSE ARCA",
    "name": "Invesco DB Oil Fund"
  },
  {
    "ticker": "DBP",
    "exchange": "NYSE ARCA",
    "name": "Invesco DB Precious Metals Fund"
  },
  {
    "ticker": "DBS",
    "exchange": "NYSE ARCA",
    "name": "Invesco DB Silver Fund"
  },
  {
    "ticker": "DBV",
    "exchange": "NYSE ARCA",
    "name": "Invesco DB G10 Currency Harvest Fund"
  },
  {
    "ticker": "DBVT",
    "exchange": "NASDAQ",
    "name": "DBV Technologies SA Sponsored ADR"
  },
  {
    "ticker": "DBX",
    "exchange": "NASDAQ",
    "name": "Dropbox Inc. Class A"
  },
  {
    "ticker": "DCF",
    "exchange": "NYSE",
    "name": "BNY Mellon Alcentra Global Credit Income 2024 Target Term Fund Inc."
  },
  {
    "ticker": "DCHF",
    "exchange": "NYSE ARCA",
    "name": "VelocityShares Daily 4x Long USD vs CHF ETN"
  },
  {
    "ticker": "DCI",
    "exchange": "NYSE",
    "name": "Donaldson Company Inc."
  },
  {
    "ticker": "DCO",
    "exchange": "NYSE",
    "name": "Ducommun Incorporated"
  },
  {
    "ticker": "DCOM",
    "exchange": "NASDAQ",
    "name": "Dime Community Bancshares Inc."
  },
  {
    "ticker": "DCOMP",
    "exchange": "NASDAQ",
    "name": "Dime Community Bancshares Inc. 5.50 % Non-Cum Red Perp Pfd Shs Series A"
  },
  {
    "ticker": "DCP",
    "exchange": "NYSE",
    "name": "DCP Midstream LP"
  },
  {
    "ticker": "DCP-B",
    "exchange": "NYSE",
    "name": "DCP Midstream LP Conv Red Perp Cum Pfd Units Series B"
  },
  {
    "ticker": "DCP-C",
    "exchange": "NYSE",
    "name": "DCP Midstream LP Cum Red Perp Pfd Registered Shs Series C"
  },
  {
    "ticker": "DCPH",
    "exchange": "NASDAQ",
    "name": "Deciphera Pharmaceuticals Inc."
  },
  {
    "ticker": "DCT",
    "exchange": "NASDAQ",
    "name": "Duck Creek Technologies Inc."
  },
  {
    "ticker": "DCTH",
    "exchange": "NASDAQ",
    "name": "Delcath Systems Inc."
  },
  {
    "ticker": "DCUE",
    "exchange": "NYSE",
    "name": "Dominion Energy Inc Corporate Units Cons of 1/10 CCRP Pfd Rg-A + 1 PC Series A"
  },
  {
    "ticker": "DD",
    "exchange": "NYSE",
    "name": "DuPont de Nemours Inc."
  },
  {
    "ticker": "DDD",
    "exchange": "NYSE",
    "name": "3D Systems Corporation"
  },
  {
    "ticker": "DDF",
    "exchange": "NYSE",
    "name": "Delaware Investments Dividend and Income Fund Inc"
  },
  {
    "ticker": "DDG",
    "exchange": "NYSE ARCA",
    "name": "ProShares Short Oil & Gas"
  },
  {
    "ticker": "DDIV",
    "exchange": "NASDAQ",
    "name": "First Trust Dorsey Wright Momentum & Dividend ETF"
  },
  {
    "ticker": "DDLS",
    "exchange": "Cboe BZX",
    "name": "WisdomTree Dynamic Currency Hedged International SmallCap Equity Fund"
  },
  {
    "ticker": "DDM",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra Dow30"
  },
  {
    "ticker": "DDOG",
    "exchange": "NASDAQ",
    "name": "Datadog Inc Class A"
  },
  {
    "ticker": "DDS",
    "exchange": "NYSE",
    "name": "Dillard's Inc. Class A"
  },
  {
    "ticker": "DDT",
    "exchange": "NYSE",
    "name": "Dillards Capital Trust I 7 1/2 % Cap Secs 1998-1.8.38 BNYSE Americand on 7.5% Subord Debs 38 Dillards"
  },
  {
    "ticker": "DDWM",
    "exchange": "Cboe BZX",
    "name": "WisdomTree Dynamic Currency Hedged International Equity Fund"
  },
  {
    "ticker": "DE",
    "exchange": "NYSE",
    "name": "Deere & Company"
  },
  {
    "ticker": "DEA",
    "exchange": "NYSE",
    "name": "Easterly Government Properties Inc."
  },
  {
    "ticker": "DECK",
    "exchange": "NYSE",
    "name": "Deckers Outdoor Corporation"
  },
  {
    "ticker": "DEED",
    "exchange": "NYSE ARCA",
    "name": "First Trust TCW Securitized Plus ETF"
  },
  {
    "ticker": "DEEF",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers FTSE Developed ex US Comprehensive Factor ETF"
  },
  {
    "ticker": "DEEP",
    "exchange": "NYSE ARCA",
    "name": "Roundhill Acquirers Deep Value ETF"
  },
  {
    "ticker": "DEF",
    "exchange": "NYSE ARCA",
    "name": "Invesco Defensive Equity ETF"
  },
  {
    "ticker": "DEFA",
    "exchange": "Cboe BZX",
    "name": "iShares Adaptive Currency Hedged MSCI EAFE ETF"
  },
  {
    "ticker": "DEH=",
    "exchange": "NYSE",
    "name": "D8 Holdings Corp. Units Cons of 1 Sh A + 1/2 Wt"
  },
  {
    "ticker": "DEI",
    "exchange": "NYSE",
    "name": "Douglas Emmett Inc"
  },
  {
    "ticker": "DELL",
    "exchange": "NYSE",
    "name": "Dell Technologies Inc Class C"
  },
  {
    "ticker": "DEM",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Emerging Markets High Dividend Fund"
  },
  {
    "ticker": "DENN",
    "exchange": "NASDAQ",
    "name": "Denny's Corporation"
  },
  {
    "ticker": "DEO",
    "exchange": "NYSE",
    "name": "Diageo plc Sponsored ADR"
  },
  {
    "ticker": "DES",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree U.S. SmallCap Dividend Fund"
  },
  {
    "ticker": "DESP",
    "exchange": "NYSE",
    "name": "Despegar.com Corp."
  },
  {
    "ticker": "DEUR",
    "exchange": "NYSE ARCA",
    "name": "VelocityShares Daily 4x Long USD vs EUR ETN"
  },
  {
    "ticker": "DEUS",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers Russell 1000 Comprehensive Factor ETF"
  },
  {
    "ticker": "DEW",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Global High Dividend Fund"
  },
  {
    "ticker": "DEX",
    "exchange": "NYSE",
    "name": "Delaware Enhanced Global Dividend & Income Fund"
  },
  {
    "ticker": "DFE",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Europe SmallCap Dividend Fund"
  },
  {
    "ticker": "DFEB",
    "exchange": "Cboe BZX",
    "name": "FT Cboe Vest U.S. Equity Deep Buffer ETF - February"
  },
  {
    "ticker": "DFEN",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Aerospace & Defense Bull 3X Shares"
  },
  {
    "ticker": "DFFN",
    "exchange": "NASDAQ",
    "name": "Diffusion Pharmaceuticals Inc."
  },
  {
    "ticker": "DFHTU",
    "exchange": "NASDAQ",
    "name": "Deerfield Healthcare Technology Acquisitions Corp. Units Cons of 1 Sh A + 1/4 Wt 25"
  },
  {
    "ticker": "DFIN",
    "exchange": "NYSE",
    "name": "Donnelley Financial Solutions Inc."
  },
  {
    "ticker": "DFJ",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Japan SmallCap Dividend Fund"
  },
  {
    "ticker": "DFND",
    "exchange": "Cboe BZX",
    "name": "Reality Shares DIVCON Dividend Defender ETF"
  },
  {
    "ticker": "DFNL",
    "exchange": "NASDAQ",
    "name": "Davis Select Financial ETF"
  },
  {
    "ticker": "DFNS",
    "exchange": "NYSE",
    "name": "LGL Systems Acquisition Corp. Class A"
  },
  {
    "ticker": "DFNS=",
    "exchange": "NYSE",
    "name": "LGL Systems Acquisition Corp. Units Cons of 1 Sh A + 0.5 Wt 07.09.24"
  },
  {
    "ticker": "DFNS+",
    "exchange": "NYSE",
    "name": "LGL Systems Acquisition Corp Warrant 2019-07.09.24 on LGL System Acquisition"
  },
  {
    "ticker": "DFP",
    "exchange": "NYSE",
    "name": "Flaherty & Crumrine Dynamic Preferred & Income Fund Inc."
  },
  {
    "ticker": "DFPH",
    "exchange": "NASDAQ",
    "name": "DFP Healthcare Acquisitions Corp. Class A"
  },
  {
    "ticker": "DFPHU",
    "exchange": "NASDAQ",
    "name": "DFP Healthcare Acquisitions Corp Units Cons of 1 Sh A + 1/4 Wt"
  },
  {
    "ticker": "DFPHW",
    "exchange": "NASDAQ",
    "name": "DFP Healthcare Acquisitions Corp Warrant 2020- On DFP Hlthc Acqn A"
  },
  {
    "ticker": "DFS",
    "exchange": "NYSE",
    "name": "Discover Financial Services"
  },
  {
    "ticker": "DFVL",
    "exchange": "Cboe BZX",
    "name": "iPath US Treasury 5-Year Bull ETN"
  },
  {
    "ticker": "DFVS",
    "exchange": "Cboe BZX",
    "name": "iPath US Treasury 5-Year Bear ETN"
  },
  {
    "ticker": "DG",
    "exchange": "NYSE",
    "name": "Dollar General Corporation"
  },
  {
    "ticker": "DGBP",
    "exchange": "NYSE ARCA",
    "name": "VelocityShares Daily 4x Long USD vs GBP ETN"
  },
  {
    "ticker": "DGICA",
    "exchange": "NASDAQ",
    "name": "Donegal Group Inc. Class A"
  },
  {
    "ticker": "DGICB",
    "exchange": "NASDAQ",
    "name": "Donegal Group Inc. Class B"
  },
  {
    "ticker": "DGII",
    "exchange": "NASDAQ",
    "name": "Digi International Inc."
  },
  {
    "ticker": "DGL",
    "exchange": "NYSE ARCA",
    "name": "Invesco DB Gold Fund"
  },
  {
    "ticker": "DGLY",
    "exchange": "NASDAQ",
    "name": "Digital Ally Inc."
  },
  {
    "ticker": "DGNR=",
    "exchange": "NYSE",
    "name": "Dragoneer Growth Opportunities Corp. Units Cons of 1 Shs -A- + 1/5 Wt"
  },
  {
    "ticker": "DGP",
    "exchange": "NYSE ARCA",
    "name": "DB Gold Double Long Exchange Traded Notes"
  },
  {
    "ticker": "DGRE",
    "exchange": "NASDAQ",
    "name": "WisdomTree Emerging Markets Quality Dividend Growth Fund"
  },
  {
    "ticker": "DGRO",
    "exchange": "NYSE ARCA",
    "name": "iShares Core Dividend Growth ETF"
  },
  {
    "ticker": "DGRS",
    "exchange": "NASDAQ",
    "name": "WisdomTree US Smallcap Quality Dividend Growth Fund"
  },
  {
    "ticker": "DGRW",
    "exchange": "NASDAQ",
    "name": "WisdomTree US Quality Dividend Growth Fund"
  },
  {
    "ticker": "DGS",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Emerging Markets SmallCap Dividend Fund"
  },
  {
    "ticker": "DGT",
    "exchange": "NYSE ARCA",
    "name": "SPDR Global Dow ETF"
  },
  {
    "ticker": "DGX",
    "exchange": "NYSE",
    "name": "Quest Diagnostics Incorporated"
  },
  {
    "ticker": "DGZ",
    "exchange": "NYSE ARCA",
    "name": "DB Gold Short Exchange Traded Notes"
  },
  {
    "ticker": "DHC",
    "exchange": "NASDAQ",
    "name": "Diversified Healthcare Trust"
  },
  {
    "ticker": "DHCNI",
    "exchange": "NASDAQ",
    "name": "Diversified Healthcare Trust 5.625 % Notes -01.08.42 Senoir"
  },
  {
    "ticker": "DHCNL",
    "exchange": "NASDAQ",
    "name": "Diversified Healthcare Trust 6.25 % Notes -01.08.46 Senior"
  },
  {
    "ticker": "DHF",
    "exchange": "NYSE",
    "name": "BNY Mellon High Yield Strategies Fund of Benef Interest"
  },
  {
    "ticker": "DHI",
    "exchange": "NYSE",
    "name": "D.R. Horton Inc."
  },
  {
    "ticker": "DHIL",
    "exchange": "NASDAQ",
    "name": "Diamond Hill Investment Group Inc."
  },
  {
    "ticker": "DHR",
    "exchange": "NYSE",
    "name": "Danaher Corporation"
  },
  {
    "ticker": "DHR-A",
    "exchange": "NYSE",
    "name": "Danaher Corporation Cum Conv Red Pfd Registered Shs Series A"
  },
  {
    "ticker": "DHR-B",
    "exchange": "NYSE",
    "name": "Danaher Corporation 5 % Cum Conv Pfd Registered Shs 2020-15.05.23 Class B"
  },
  {
    "ticker": "DHS",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree U.S. High Dividend Fund"
  },
  {
    "ticker": "DHT",
    "exchange": "NYSE",
    "name": "DHT Holdings Inc."
  },
  {
    "ticker": "DHX",
    "exchange": "NYSE",
    "name": "DHI Group Inc."
  },
  {
    "ticker": "DHY",
    "exchange": "NYSE American",
    "name": "Credit Suisse High Yield Bond Fund"
  },
  {
    "ticker": "DIA",
    "exchange": "NYSE ARCA",
    "name": "SPDR Dow Jones Industrial Average ETF Trust"
  },
  {
    "ticker": "DIAL",
    "exchange": "NYSE ARCA",
    "name": "Columbia Diversified Fixed Income Allocation ETF"
  },
  {
    "ticker": "DIAX",
    "exchange": "NYSE",
    "name": "Nuveen Dow 30 Dynamic Overwrite Fund"
  },
  {
    "ticker": "DIG",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra Oil & Gas"
  },
  {
    "ticker": "DIM",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree International MidCap Dividend Fund"
  },
  {
    "ticker": "DIN",
    "exchange": "NYSE",
    "name": "Dine Brands Global Inc."
  },
  {
    "ticker": "DINT",
    "exchange": "NASDAQ",
    "name": "Davis Select International ETF"
  },
  {
    "ticker": "DIOD",
    "exchange": "NASDAQ",
    "name": "Diodes Incorporated"
  },
  {
    "ticker": "DIS",
    "exchange": "NYSE",
    "name": "Walt Disney Company"
  },
  {
    "ticker": "DISCA",
    "exchange": "NASDAQ",
    "name": "Discovery Inc. Class A"
  },
  {
    "ticker": "DISCB",
    "exchange": "NASDAQ",
    "name": "Discovery Inc. Class B"
  },
  {
    "ticker": "DISCK",
    "exchange": "NASDAQ",
    "name": "Discovery Inc. Class C"
  },
  {
    "ticker": "DISH",
    "exchange": "NASDAQ",
    "name": "DISH Network Corporation Class A"
  },
  {
    "ticker": "DIT",
    "exchange": "NYSE American",
    "name": "AMCON Distributing Company"
  },
  {
    "ticker": "DIV",
    "exchange": "NYSE ARCA",
    "name": "Global X SuperDividend US ETF"
  },
  {
    "ticker": "DIVA",
    "exchange": "NYSE ARCA",
    "name": "AGFIQ Hedged Dividend Income Fund"
  },
  {
    "ticker": "DIVB",
    "exchange": "Cboe BZX",
    "name": "iShares U.S. Dividend & Buyback ETF"
  },
  {
    "ticker": "DIVC",
    "exchange": "NYSE ARCA",
    "name": "C-Tracks ETN Miller/Howard Strategic Dividend Reinvestor"
  },
  {
    "ticker": "DIVO",
    "exchange": "NYSE ARCA",
    "name": "Amplify CWP Enhanced Dividend Income ETF"
  },
  {
    "ticker": "DIVY",
    "exchange": "NYSE ARCA",
    "name": "Reality Shares DIVS ETF"
  },
  {
    "ticker": "DJCB",
    "exchange": "NYSE ARCA",
    "name": "ETRACS Bloomberg Commodity Index Total Return ETN Series B"
  },
  {
    "ticker": "DJCI",
    "exchange": "NYSE ARCA",
    "name": "ETRACS Bloomberg Commodity Index Total Return ETN"
  },
  {
    "ticker": "DJCO",
    "exchange": "NASDAQ",
    "name": "Daily Journal Corporation"
  },
  {
    "ticker": "DJD",
    "exchange": "NYSE ARCA",
    "name": "Invesco Dow Jones Industrial Average Dividend ETF"
  },
  {
    "ticker": "DJP",
    "exchange": "NYSE ARCA",
    "name": "iPath Bloomberg Commodity Index Total Return ETN"
  },
  {
    "ticker": "DJPY",
    "exchange": "NYSE ARCA",
    "name": "VelocityShares Daily 4x Long USD vs JPY ETN"
  },
  {
    "ticker": "DJUL",
    "exchange": "Cboe BZX",
    "name": "FT Cboe Vest U.S. Equity Deep Buffer ETF - July"
  },
  {
    "ticker": "DJUN",
    "exchange": "Cboe BZX",
    "name": "FT Cboe Vest U.S. Equity Deep Buffer ETF - June"
  },
  {
    "ticker": "DK",
    "exchange": "NYSE",
    "name": "Delek US Holdings Inc"
  },
  {
    "ticker": "DKL",
    "exchange": "NYSE",
    "name": "Delek Logistics Partners LP"
  },
  {
    "ticker": "DKNG",
    "exchange": "NASDAQ",
    "name": "DraftKings Inc Class A"
  },
  {
    "ticker": "DKS",
    "exchange": "NYSE",
    "name": "Dick's Sporting Goods Inc."
  },
  {
    "ticker": "DL",
    "exchange": "NYSE",
    "name": "China Distance Education Holdings Ltd. Sponsored ADR"
  },
  {
    "ticker": "DLA",
    "exchange": "NYSE American",
    "name": "Delta Apparel Inc."
  },
  {
    "ticker": "DLB",
    "exchange": "NYSE",
    "name": "Dolby Laboratories Inc. Class A"
  },
  {
    "ticker": "DLHC",
    "exchange": "NASDAQ",
    "name": "DLH Holdings Corp."
  },
  {
    "ticker": "DLN",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree U.S. LargeCap Dividend Fund"
  },
  {
    "ticker": "DLNG",
    "exchange": "NYSE",
    "name": "Dynagas LNG Partners LP"
  },
  {
    "ticker": "DLNG-A",
    "exchange": "NYSE",
    "name": "Dynagas LNG Partners LP 9 % Cum Red Pfd Units Series A"
  },
  {
    "ticker": "DLNG-B",
    "exchange": "NYSE",
    "name": "Dynagas LNG Partners LP Cum Red Perp Pfd Units Series B"
  },
  {
    "ticker": "DLPH",
    "exchange": "NYSE",
    "name": "Delphi Technologies Plc"
  },
  {
    "ticker": "DLPN",
    "exchange": "NASDAQ",
    "name": "Dolphin Entertainment Inc"
  },
  {
    "ticker": "DLPNW",
    "exchange": "NASDAQ",
    "name": "Dolphin Entertainment Inc Warrant 2017-2022 on Shs"
  },
  {
    "ticker": "DLR",
    "exchange": "NYSE",
    "name": "Digital Realty Trust Inc."
  },
  {
    "ticker": "DLR-C",
    "exchange": "NYSE",
    "name": "Digital Realty Trust Inc 6.625 % Cum Red Perp Pfd Registered Shs Series C"
  },
  {
    "ticker": "DLR-G",
    "exchange": "NYSE",
    "name": "Digital Realty Trust Inc. 5.875 % Cum Red Pfd Series G"
  },
  {
    "ticker": "DLR-I",
    "exchange": "NYSE",
    "name": "Digital Realty Trust Inc. 6.35 % Cum Red Pfd Series I"
  },
  {
    "ticker": "DLR-J",
    "exchange": "NYSE",
    "name": "Digital Realty Trust Inc 5.25 % Cum Conv Red Pfd Registered Shs Series J"
  },
  {
    "ticker": "DLR-K",
    "exchange": "NYSE",
    "name": "Digital Realty Trust Inc 5.85 % Cum Conv Red Perp Pfd Registered Shs Series K"
  },
  {
    "ticker": "DLR-L",
    "exchange": "NYSE",
    "name": "Digital Realty Trust Inc. Cum Conv Red Pfd Registered Shs Series L"
  },
  {
    "ticker": "DLS",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree International SmallCap Dividend Fund"
  },
  {
    "ticker": "DLTH",
    "exchange": "NASDAQ",
    "name": "Duluth Holdings Inc. Class B"
  },
  {
    "ticker": "DLTR",
    "exchange": "NASDAQ",
    "name": "Dollar Tree Inc."
  },
  {
    "ticker": "DLX",
    "exchange": "NYSE",
    "name": "Deluxe Corporation"
  },
  {
    "ticker": "DLY",
    "exchange": "NYSE",
    "name": "DoubleLine Yield Opportunities Fund"
  },
  {
    "ticker": "DMAC",
    "exchange": "NASDAQ",
    "name": "DiaMedica Therapeutics Inc."
  },
  {
    "ticker": "DMAY",
    "exchange": "Cboe BZX",
    "name": "FT Cboe Vest U.S. Equity Deep Buffer ETF - May"
  },
  {
    "ticker": "DMB",
    "exchange": "NYSE",
    "name": "BNY Mellon Municipal Bond Infrastructure Fund Inc."
  },
  {
    "ticker": "DMDV",
    "exchange": "NYSE ARCA",
    "name": "AAM S&P Developed Markets High Dividend Value ETF"
  },
  {
    "ticker": "DMF",
    "exchange": "NYSE American",
    "name": "BNY Mellon Municipal Income Inc."
  },
  {
    "ticker": "DMLP",
    "exchange": "NASDAQ",
    "name": "Dorchester Minerals L.P."
  },
  {
    "ticker": "DMO",
    "exchange": "NYSE",
    "name": "Western Asset Mortgage Opportunity Fund Inc"
  },
  {
    "ticker": "DMRC",
    "exchange": "NASDAQ",
    "name": "Digimarc Corporation"
  },
  {
    "ticker": "DMRE",
    "exchange": "NYSE ARCA",
    "name": "DeltaShares S&P EM 100 & Managed Risk ETF"
  },
  {
    "ticker": "DMRI",
    "exchange": "NYSE ARCA",
    "name": "DeltaShares S&P International Managed Risk ETF"
  },
  {
    "ticker": "DMRL",
    "exchange": "NYSE ARCA",
    "name": "DeltaShares S&P 500 Managed Risk ETF"
  },
  {
    "ticker": "DMRM",
    "exchange": "NYSE ARCA",
    "name": "DeltaShares S&P 400 Managed Risk ETF"
  },
  {
    "ticker": "DMRS",
    "exchange": "NYSE ARCA",
    "name": "DeltaShares S&P 600 Managed Risk ETF"
  },
  {
    "ticker": "DMS",
    "exchange": "NYSE",
    "name": "Digital Media Solutions Inc. Class A"
  },
  {
    "ticker": "DMS+",
    "exchange": "NYSE",
    "name": "Digital Media Solutions Inc. Warrant 2020-15.07.25 on Digital Media Solutions"
  },
  {
    "ticker": "DMTK",
    "exchange": "NASDAQ",
    "name": "DermTech Inc."
  },
  {
    "ticker": "DMXF",
    "exchange": "NASDAQ",
    "name": "iShares ESG Advanced MSCI EAFE ETF"
  },
  {
    "ticker": "DMYD=",
    "exchange": "NYSE",
    "name": "dMY Technology Group Inc. II Units Cons of 1 Sh A + 1/3 Wts 29.07.27"
  },
  {
    "ticker": "DMYT",
    "exchange": "NYSE",
    "name": "dMY Technology Group Inc Class A"
  },
  {
    "ticker": "DMYT=",
    "exchange": "NYSE",
    "name": "dMY Technology Group Inc. Units Cons of 1 Sh + 0.5 Wt 21.02.27"
  },
  {
    "ticker": "DMYT+",
    "exchange": "NYSE",
    "name": "dMY Technology Group Inc Warrant 2020-21.02.27 on dMY Tech Group"
  },
  {
    "ticker": "DNB",
    "exchange": "NYSE",
    "name": "Dun & Bradstreet Holdings Inc"
  },
  {
    "ticker": "DNI",
    "exchange": "NYSE",
    "name": "Dividend and Income Fund"
  },
  {
    "ticker": "DNK",
    "exchange": "NYSE",
    "name": "Phoenix Tree Holdings Ltd ADR Class A"
  },
  {
    "ticker": "DNKN",
    "exchange": "NASDAQ",
    "name": "Dunkin' Brands Group Inc."
  },
  {
    "ticker": "DNL",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Global ex-US Quality Dividend Growth Fund"
  },
  {
    "ticker": "DNLI",
    "exchange": "NASDAQ",
    "name": "Denali Therapeutics Inc."
  },
  {
    "ticker": "DNN",
    "exchange": "NYSE American",
    "name": "Denison Mines Corp."
  },
  {
    "ticker": "DNOV",
    "exchange": "Cboe BZX",
    "name": "FT Cboe Vest U.S. Equity Deep Buffer ETF - November"
  },
  {
    "ticker": "DNOW",
    "exchange": "NYSE",
    "name": "NOW Inc."
  },
  {
    "ticker": "DNP",
    "exchange": "NYSE",
    "name": "DNP Select Income Fund Inc"
  },
  {
    "ticker": "DOC",
    "exchange": "NYSE",
    "name": "Physicians Realty Trust"
  },
  {
    "ticker": "DOCU",
    "exchange": "NASDAQ",
    "name": "DocuSign Inc."
  },
  {
    "ticker": "DOG",
    "exchange": "NYSE ARCA",
    "name": "ProShares Short Dow30"
  },
  {
    "ticker": "DOGZ",
    "exchange": "NASDAQ",
    "name": "Dogness (International) Corporation Class A"
  },
  {
    "ticker": "DOL",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree International LargeCap Dividend Fund"
  },
  {
    "ticker": "DOMO",
    "exchange": "NASDAQ",
    "name": "Domo Inc. Class B"
  },
  {
    "ticker": "DON",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree U.S. MidCap Dividend Fund"
  },
  {
    "ticker": "DOO",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree International Dividend ex-Financials Fund"
  },
  {
    "ticker": "DOOO",
    "exchange": "NASDAQ",
    "name": "BRP Inc."
  },
  {
    "ticker": "DOOR",
    "exchange": "NYSE",
    "name": "Masonite International Corp."
  },
  {
    "ticker": "DORM",
    "exchange": "NASDAQ",
    "name": "Dorman Products Inc."
  },
  {
    "ticker": "DOV",
    "exchange": "NYSE",
    "name": "Dover Corporation"
  },
  {
    "ticker": "DOW",
    "exchange": "NYSE",
    "name": "Dow Inc."
  },
  {
    "ticker": "DOX",
    "exchange": "NASDAQ",
    "name": "Amdocs Limited"
  },
  {
    "ticker": "DOYU",
    "exchange": "NASDAQ",
    "name": "DouYu International Holdings Ltd. Sponsored ADR"
  },
  {
    "ticker": "DPG",
    "exchange": "NYSE",
    "name": "Duff & Phelps Utility and Infrastructure Fund Inc"
  },
  {
    "ticker": "DPHC",
    "exchange": "NASDAQ",
    "name": "DiamondPeak Holdings Corp. Class A"
  },
  {
    "ticker": "DPHCU",
    "exchange": "NASDAQ",
    "name": "DiamondPeak Holdings Corp. Units Cons of 1 Sh + 1/3 Wt -144A- Accred Inv"
  },
  {
    "ticker": "DPHCW",
    "exchange": "NASDAQ",
    "name": "DiamondPeak Holdings Corp Warrant 2020-04.03.25 on DiamondPeak -144A- Accred Inv"
  },
  {
    "ticker": "DPST",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Regional Banks Bull 3X Shares"
  },
  {
    "ticker": "DPW",
    "exchange": "NYSE American",
    "name": "DPW Holdings Inc"
  },
  {
    "ticker": "DPZ",
    "exchange": "NYSE",
    "name": "Domino's Pizza Inc."
  },
  {
    "ticker": "DQ",
    "exchange": "NYSE",
    "name": "Daqo New Energy Corp. Sponsored ADR"
  },
  {
    "ticker": "DRAD",
    "exchange": "NASDAQ",
    "name": "Digirad Corporation"
  },
  {
    "ticker": "DRADP",
    "exchange": "NASDAQ",
    "name": "Digirad Corporation 10 % Cum Red Perp Pfd Registered Shs Series A"
  },
  {
    "ticker": "DRD",
    "exchange": "NYSE",
    "name": "DRDGOLD Limited Sponsored ADR"
  },
  {
    "ticker": "DRE",
    "exchange": "NYSE",
    "name": "Duke Realty Corporation"
  },
  {
    "ticker": "DRH",
    "exchange": "NYSE",
    "name": "DiamondRock Hospitality Company"
  },
  {
    "ticker": "DRI",
    "exchange": "NYSE",
    "name": "Darden Restaurants Inc."
  },
  {
    "ticker": "DRIO",
    "exchange": "NASDAQ",
    "name": "DarioHealth Corp."
  },
  {
    "ticker": "DRIOW",
    "exchange": "NASDAQ",
    "name": "DarioHealth Corp. Warrant 2016-08.03.2021 on Shs DarioHealth"
  },
  {
    "ticker": "DRIP",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily S&P Oil & Gas Exp. & Prod. Bear 2X Shares"
  },
  {
    "ticker": "DRIV",
    "exchange": "NASDAQ",
    "name": "Global X Autonomous & Electric Vehicles ETF"
  },
  {
    "ticker": "DRN",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Real Estate Bull 3x Shares"
  },
  {
    "ticker": "DRNA",
    "exchange": "NASDAQ",
    "name": "Dicerna Pharmaceuticals Inc."
  },
  {
    "ticker": "DRQ",
    "exchange": "NYSE",
    "name": "Dril-Quip Inc."
  },
  {
    "ticker": "DRRX",
    "exchange": "NASDAQ",
    "name": "DURECT Corporation"
  },
  {
    "ticker": "DRSK",
    "exchange": "Cboe BZX",
    "name": "Aptus Defined Risk ETF"
  },
  {
    "ticker": "DRTT",
    "exchange": "NASDAQ",
    "name": "DIRTT Environmental Solutions Ltd."
  },
  {
    "ticker": "DRUA",
    "exchange": "NYSE",
    "name": "Dominion Energy Inc 5.25 % Notes 2016-30.07.76 Series A"
  },
  {
    "ticker": "DRV",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Real Estate Bear 3X Shares"
  },
  {
    "ticker": "DRW",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Global ex-US Real Estate Fund"
  },
  {
    "ticker": "DS",
    "exchange": "NYSE",
    "name": "Drive Shack Inc."
  },
  {
    "ticker": "DS-B",
    "exchange": "NYSE",
    "name": "Drive Shack Inc. 9.75 % Cum Red Pfd Registered Shs Series B"
  },
  {
    "ticker": "DS-C",
    "exchange": "NYSE",
    "name": "Drive Shack Inc. 8.05 % Cum Red Pfd Registered Shs Series C"
  },
  {
    "ticker": "DS-D",
    "exchange": "NYSE",
    "name": "Drive Shack Inc. 8.375 Cum Red Pfd Registered Shs Series D"
  },
  {
    "ticker": "DSE",
    "exchange": "NYSE",
    "name": "Duff & Phelps Select MLP and Midstream Energy Fund Inc"
  },
  {
    "ticker": "DSGX",
    "exchange": "NASDAQ",
    "name": "Descartes Systems Group Inc."
  },
  {
    "ticker": "DSI",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI KLD 400 Social ETF"
  },
  {
    "ticker": "DSKE",
    "exchange": "NASDAQ",
    "name": "DNYSE Americanke Inc."
  },
  {
    "ticker": "DSKEW",
    "exchange": "NASDAQ",
    "name": "DNYSE Americanke Inc. Warrant 2017-31.03.2022"
  },
  {
    "ticker": "DSL",
    "exchange": "NYSE",
    "name": "DoubleLine Income Solutions Fund"
  },
  {
    "ticker": "DSM",
    "exchange": "NYSE",
    "name": "BNY Mellon Strategic Municipal Bond Fund Inc."
  },
  {
    "ticker": "DSPG",
    "exchange": "NASDAQ",
    "name": "DSP Group Inc."
  },
  {
    "ticker": "DSS",
    "exchange": "NYSE American",
    "name": "Document Security Systems Inc."
  },
  {
    "ticker": "DSSI",
    "exchange": "NYSE",
    "name": "Diamond S Shipping Inc."
  },
  {
    "ticker": "DSTL",
    "exchange": "NYSE ARCA",
    "name": "Distillate US Fundamental Stability & Value ETF"
  },
  {
    "ticker": "DSU",
    "exchange": "NYSE",
    "name": "Blackrock Debt Strategies Fund Inc"
  },
  {
    "ticker": "DSWL",
    "exchange": "NASDAQ",
    "name": "Deswell Industries Inc."
  },
  {
    "ticker": "DSX",
    "exchange": "NYSE",
    "name": "Diana Shipping Inc."
  },
  {
    "ticker": "DSX-B",
    "exchange": "NYSE",
    "name": "Diana Shipping Inc 8 7/8 % Cum Red Perp Pfd Series B"
  },
  {
    "ticker": "DT",
    "exchange": "NYSE",
    "name": "Dynatrace Inc."
  },
  {
    "ticker": "DTD",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree U.S. Total Dividend Fund"
  },
  {
    "ticker": "DTE",
    "exchange": "NYSE",
    "name": "DTE Energy Company"
  },
  {
    "ticker": "DTEA",
    "exchange": "NASDAQ",
    "name": "DAVIDsTEA Inc."
  },
  {
    "ticker": "DTEC",
    "exchange": "Cboe BZX",
    "name": "ALPS Disruptive Technologies ETF"
  },
  {
    "ticker": "DTF",
    "exchange": "NYSE",
    "name": "DTF Tax-Free Income Inc"
  },
  {
    "ticker": "DTH",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree International High Dividend Fund"
  },
  {
    "ticker": "DTIL",
    "exchange": "NASDAQ",
    "name": "Precision BioSciences Inc."
  },
  {
    "ticker": "DTJ",
    "exchange": "NYSE",
    "name": "DTE Energy Company 5 3/8 % Debentures 2016-01.06.76 Series 2016 B"
  },
  {
    "ticker": "DTLA-",
    "exchange": "NYSE",
    "name": "Brookfield DTLA Fund Office Trust Investor Inc 7 5/8 % Cum Red Pfd Series A"
  },
  {
    "ticker": "DTN",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree U.S. Dividend ex-Financials Fund"
  },
  {
    "ticker": "DTP",
    "exchange": "NYSE",
    "name": "DTE Energy Co Corporate Units Cons of 1 PC + 1/20 Notes"
  },
  {
    "ticker": "DTQ",
    "exchange": "NYSE",
    "name": "DTE Energy Company Debentures 2012-1.12.62 Jr Subord Series 2012 C"
  },
  {
    "ticker": "DTSS",
    "exchange": "NASDAQ",
    "name": "DatNYSE Americana Inc."
  },
  {
    "ticker": "DTW",
    "exchange": "NYSE",
    "name": "DTE Energy Company 5.25 % Debentures 2017-01.12.77 Global"
  },
  {
    "ticker": "DTY",
    "exchange": "NYSE",
    "name": "DTE Energy Company 6 % Debentures 2016-15.12.76 Series F"
  },
  {
    "ticker": "DUAL",
    "exchange": "NYSE ARCA",
    "name": "North Shore Dual Share Class ETF"
  },
  {
    "ticker": "DUC",
    "exchange": "NYSE",
    "name": "Duff&Phelps Utilities & Corporate Bond Trust"
  },
  {
    "ticker": "DUG",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort Oil & Gas"
  },
  {
    "ticker": "DUK",
    "exchange": "NYSE",
    "name": "Duke Energy Corporation"
  },
  {
    "ticker": "DUK-A",
    "exchange": "NYSE",
    "name": "Duke Energy Corp Depositary Shs Repr 1/1000th Cum Red Perp Pfd Registered Sh Series A"
  },
  {
    "ticker": "DUKB",
    "exchange": "NYSE",
    "name": "Duke Energy Corp 5.625 % Debentures 2018-15.09.78 Global"
  },
  {
    "ticker": "DUKH",
    "exchange": "NYSE",
    "name": "Duke Energy Corp 5 1/8 % Debs 2013-15.1.73 Jr Subord"
  },
  {
    "ticker": "DUO",
    "exchange": "NASDAQ",
    "name": "Fangdd Network Group Ltd Sponsored ADR Class A"
  },
  {
    "ticker": "DUOT",
    "exchange": "NASDAQ",
    "name": "Duos Technologies Group Inc"
  },
  {
    "ticker": "DURA",
    "exchange": "Cboe BZX",
    "name": "VanEck Vectors Morningstar Durable Dividend ETF"
  },
  {
    "ticker": "DUSA",
    "exchange": "NASDAQ",
    "name": "Davis Select U.S. Equity ETF"
  },
  {
    "ticker": "DUSL",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Industrials Bull 3X Shares"
  },
  {
    "ticker": "DUST",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Gold Miners Index Bear 2x Shares"
  },
  {
    "ticker": "DVA",
    "exchange": "NYSE",
    "name": "DaVita Inc."
  },
  {
    "ticker": "DVAX",
    "exchange": "NASDAQ",
    "name": "Dynavax Technologies Corporation"
  },
  {
    "ticker": "DVD",
    "exchange": "NYSE",
    "name": "Dover Motorsports Inc."
  },
  {
    "ticker": "DVLU",
    "exchange": "NASDAQ",
    "name": "First Trust Dorsey Wright Momentum & Value ETF"
  },
  {
    "ticker": "DVN",
    "exchange": "NYSE",
    "name": "Devon Energy Corporation"
  },
  {
    "ticker": "DVOL",
    "exchange": "NASDAQ",
    "name": "First Trust Dorsey Wright Momentum & Low Volatility ETF"
  },
  {
    "ticker": "DVY",
    "exchange": "NASDAQ",
    "name": "iShares Select Dividend ETF"
  },
  {
    "ticker": "DVYA",
    "exchange": "NYSE ARCA",
    "name": "iShares Asia/Pacific Dividend ETF"
  },
  {
    "ticker": "DVYE",
    "exchange": "NYSE ARCA",
    "name": "iShares Emerging Markets Dividend ETF"
  },
  {
    "ticker": "DWAS",
    "exchange": "NASDAQ",
    "name": "Invesco DWA SmallCap Momentum ETF"
  },
  {
    "ticker": "DWAT",
    "exchange": "NASDAQ",
    "name": "Arrow DWA Tactical ETF"
  },
  {
    "ticker": "DWAW",
    "exchange": "NASDAQ",
    "name": "AdvisorShares Dorsey Wright FSM All Cap World ETF"
  },
  {
    "ticker": "DWCR",
    "exchange": "NASDAQ",
    "name": "Arrow DWA Country Rotation ETF"
  },
  {
    "ticker": "DWEQ",
    "exchange": "NASDAQ",
    "name": "AdvisorShares Dorsey Wright Alpha Equal Weight ETF"
  },
  {
    "ticker": "DWFI",
    "exchange": "NASDAQ",
    "name": "SPDR Dorsey Wright Fixed Income Allocation ETF"
  },
  {
    "ticker": "DWLD",
    "exchange": "NASDAQ",
    "name": "Davis Select Worldwide ETF"
  },
  {
    "ticker": "DWM",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree International Equity Fund"
  },
  {
    "ticker": "DWMC",
    "exchange": "NASDAQ",
    "name": "AdvisorShares Dorsey Wright Micro-Cap ETF"
  },
  {
    "ticker": "DWMF",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree International Multifactor Fund"
  },
  {
    "ticker": "DWPP",
    "exchange": "NASDAQ",
    "name": "First Trust Dorsey Wright People's Portfolio ETF"
  },
  {
    "ticker": "DWSH",
    "exchange": "NASDAQ",
    "name": "AdvisorShares Dorsey Wright Short ETF"
  },
  {
    "ticker": "DWSN",
    "exchange": "NASDAQ",
    "name": "Dawson Geophysical Company"
  },
  {
    "ticker": "DWUS",
    "exchange": "NASDAQ",
    "name": "AdvisorShares Dorsey Wright FSM US Core ETF"
  },
  {
    "ticker": "DWX",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P International Dividend ETF"
  },
  {
    "ticker": "DX",
    "exchange": "NYSE",
    "name": "Dynex Capital Inc."
  },
  {
    "ticker": "DX-B",
    "exchange": "NYSE",
    "name": "Dynex Capital Inc 7 5/8 % Cum Red Pfd Shs Series B"
  },
  {
    "ticker": "DX-C",
    "exchange": "NYSE",
    "name": "Dynex Capital Inc. Cum Conv Red Perp Pref Registered Shs Series C"
  },
  {
    "ticker": "DXC",
    "exchange": "NYSE",
    "name": "DXC Technology Co."
  },
  {
    "ticker": "DXCM",
    "exchange": "NASDAQ",
    "name": "DexCom Inc."
  },
  {
    "ticker": "DXD",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort Dow30"
  },
  {
    "ticker": "DXF",
    "exchange": "NYSE American",
    "name": "Dunxin Financial Holdings Ltd. Sponsored ADR"
  },
  {
    "ticker": "DXGE",
    "exchange": "NASDAQ",
    "name": "WisdomTree Germany Hedged Equity Fund"
  },
  {
    "ticker": "DXJ",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Japan Hedged Equity Fund"
  },
  {
    "ticker": "DXJS",
    "exchange": "NASDAQ",
    "name": "WisdomTree Japan Hedged SmallCap Equity Fund"
  },
  {
    "ticker": "DXLG",
    "exchange": "NASDAQ",
    "name": "Destination XL Group Inc."
  },
  {
    "ticker": "DXPE",
    "exchange": "NASDAQ",
    "name": "DXP Enterprises Inc."
  },
  {
    "ticker": "DXR",
    "exchange": "NYSE American",
    "name": "Daxor Corporation"
  },
  {
    "ticker": "DXYN",
    "exchange": "NASDAQ",
    "name": "Dixie Group Inc."
  },
  {
    "ticker": "DY",
    "exchange": "NYSE",
    "name": "Dycom Industries Inc."
  },
  {
    "ticker": "DYAI",
    "exchange": "NASDAQ",
    "name": "Dyadic International Inc."
  },
  {
    "ticker": "DYFN",
    "exchange": "NYSE",
    "name": "Angel Oak Dynamic Financial Strategies Income Term Trust"
  },
  {
    "ticker": "DYHG",
    "exchange": "NYSE ARCA",
    "name": "Direxion Dynamic Hedge ETF"
  },
  {
    "ticker": "DYNF",
    "exchange": "NYSE ARCA",
    "name": "BlackRock U.S. Equity Factor Rotation ETF"
  },
  {
    "ticker": "DYNT",
    "exchange": "NASDAQ",
    "name": "Dynatronics Corporation"
  },
  {
    "ticker": "DZK",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily MSCI Developed Markets Bull 3x Shares"
  },
  {
    "ticker": "DZSI",
    "exchange": "NASDAQ",
    "name": "DASAN Zhone Solutions Inc."
  },
  {
    "ticker": "DZZ",
    "exchange": "NYSE ARCA",
    "name": "DB Gold Double Short Exchange Traded Notes"
  },
  {
    "ticker": "E",
    "exchange": "NYSE",
    "name": "Eni S.p.A. Sponsored ADR"
  },
  {
    "ticker": "EA",
    "exchange": "NASDAQ",
    "name": "Electronic Arts Inc."
  },
  {
    "ticker": "EAB",
    "exchange": "NYSE",
    "name": "Entergy Arkansas LLC 4.9 % Bonds 2012-01.12.52 1st Mtg"
  },
  {
    "ticker": "EAD",
    "exchange": "NYSE American",
    "name": "Wells Fargo Income Opportunities Fund"
  },
  {
    "ticker": "EAE",
    "exchange": "NYSE",
    "name": "Entergy Arkansas LLC 4.75 % Bonds 2013-01.06.63 1st Mortgage"
  },
  {
    "ticker": "EAF",
    "exchange": "NYSE",
    "name": "GrafTech International Ltd."
  },
  {
    "ticker": "EAGG",
    "exchange": "NYSE ARCA",
    "name": "iShares ESG Aware US Aggregate Bond ETF"
  },
  {
    "ticker": "EAI",
    "exchange": "NYSE",
    "name": "Entergy Arkansas LLC 4.875 % Bonds 2016-01.09.66 1st Mtg"
  },
  {
    "ticker": "EAOA",
    "exchange": "Cboe BZX",
    "name": "iShares ESG Aware Aggressive Allocation ETF"
  },
  {
    "ticker": "EAOK",
    "exchange": "Cboe BZX",
    "name": "iShares ESG Aware Conservative Allocation ETF"
  },
  {
    "ticker": "EAOM",
    "exchange": "Cboe BZX",
    "name": "iShares ESG Aware Moderate Allocation ETF"
  },
  {
    "ticker": "EAOR",
    "exchange": "Cboe BZX",
    "name": "iShares ESG Aware Growth Allocation ETF"
  },
  {
    "ticker": "EARN",
    "exchange": "NYSE",
    "name": "Ellington Residential Mortgage REIT"
  },
  {
    "ticker": "EARS",
    "exchange": "NASDAQ",
    "name": "Auris Medical Holding Ltd."
  },
  {
    "ticker": "EASG",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers MSCI EAFE ESG Leaders Equity ETF"
  },
  {
    "ticker": "EAST",
    "exchange": "NASDAQ",
    "name": "Eastside Distilling Inc"
  },
  {
    "ticker": "EAT",
    "exchange": "NYSE",
    "name": "Brinker International Inc."
  },
  {
    "ticker": "EB",
    "exchange": "NYSE",
    "name": "Eventbrite Inc. Class A"
  },
  {
    "ticker": "EBAY",
    "exchange": "NASDAQ",
    "name": "eBay Inc."
  },
  {
    "ticker": "EBAYL",
    "exchange": "NASDAQ",
    "name": "eBay Inc 6 % Notes 2016-1.2.56"
  },
  {
    "ticker": "EBF",
    "exchange": "NYSE",
    "name": "Ennis Inc."
  },
  {
    "ticker": "EBIX",
    "exchange": "NASDAQ",
    "name": "Ebix Inc."
  },
  {
    "ticker": "EBIZ",
    "exchange": "NASDAQ",
    "name": "Global X E-Commerce ETF"
  },
  {
    "ticker": "EBMT",
    "exchange": "NASDAQ",
    "name": "Eagle Bancorp Montana Inc."
  },
  {
    "ticker": "EBND",
    "exchange": "NYSE ARCA",
    "name": "SPDR Bloomberg Barclays Emerging Markets Local Bond ETF"
  },
  {
    "ticker": "EBON",
    "exchange": "NASDAQ",
    "name": "Ebang International Holdings Inc. Class A"
  },
  {
    "ticker": "EBR",
    "exchange": "NYSE",
    "name": "Centrais Eletricas Brasileiras SA-Eletrobras Sponsored ADR"
  },
  {
    "ticker": "EBR.B",
    "exchange": "NYSE",
    "name": "Centrais Eletricas Brasileiras SA-Eletrobras Sponsored ADR Pfd Class B"
  },
  {
    "ticker": "EBS",
    "exchange": "NYSE",
    "name": "Emergent BioSolutions Inc."
  },
  {
    "ticker": "EBSB",
    "exchange": "NASDAQ",
    "name": "Meridian Bancorp Inc"
  },
  {
    "ticker": "EBTC",
    "exchange": "NASDAQ",
    "name": "Enterprise Bancorp Inc."
  },
  {
    "ticker": "EC",
    "exchange": "NYSE",
    "name": "Ecopetrol SA Sponsored ADR"
  },
  {
    "ticker": "ECC",
    "exchange": "NYSE",
    "name": "Eagle Point Credit Co. Inc."
  },
  {
    "ticker": "ECCB",
    "exchange": "NYSE",
    "name": "Eagle Point Credit Company Inc 7.75 % Pfd Registered Shs 2016-30.10.26 Series B"
  },
  {
    "ticker": "ECCX",
    "exchange": "NYSE",
    "name": "Eagle Point Credit Company Inc 6.6875 % Notes 2018-30.04.28"
  },
  {
    "ticker": "ECCY",
    "exchange": "NYSE",
    "name": "Eagle Point Credit Company Inc 6.75 % Notes 2017-30.09.27"
  },
  {
    "ticker": "ECF",
    "exchange": "NYSE American",
    "name": "Ellsworth Growth and Income Fund Ltd"
  },
  {
    "ticker": "ECF-A",
    "exchange": "NYSE American",
    "name": "Ellsworth Growth and Income Fund Ltd 5.25 % Cum Red Perp Pfd Registered Shs Series A"
  },
  {
    "ticker": "ECH",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI Chile ETF"
  },
  {
    "ticker": "ECHO",
    "exchange": "NASDAQ",
    "name": "Echo Global Logistics Inc"
  },
  {
    "ticker": "ECL",
    "exchange": "NYSE",
    "name": "Ecolab Inc."
  },
  {
    "ticker": "ECLN",
    "exchange": "NYSE ARCA",
    "name": "First Trust EIP Carbon Impact ETF"
  },
  {
    "ticker": "ECNS",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI China Small-Cap ETF"
  },
  {
    "ticker": "ECOL",
    "exchange": "NASDAQ",
    "name": "US Ecology Inc."
  },
  {
    "ticker": "ECOLW",
    "exchange": "NASDAQ",
    "name": "US Ecology Inc. Warrant 2019-17.10.23 on US Ecology Pare"
  },
  {
    "ticker": "ECOM",
    "exchange": "NYSE",
    "name": "Channeladvisor Corporation"
  },
  {
    "ticker": "ECON",
    "exchange": "NYSE ARCA",
    "name": "Columbia Emerging Markets Consumer ETF"
  },
  {
    "ticker": "ECOR",
    "exchange": "NASDAQ",
    "name": "electroCore Inc."
  },
  {
    "ticker": "ECOW",
    "exchange": "NASDAQ",
    "name": "Pacer Emerging Markets Cash Cows 100 ETF"
  },
  {
    "ticker": "ECOZ",
    "exchange": "NYSE ARCA",
    "name": "TrueShares ESG Active Opportunities ETF"
  },
  {
    "ticker": "ECPG",
    "exchange": "NASDAQ",
    "name": "Encore Capital Group Inc."
  },
  {
    "ticker": "ED",
    "exchange": "NYSE",
    "name": "Consolidated Edison Inc."
  },
  {
    "ticker": "EDAP",
    "exchange": "NASDAQ",
    "name": "EDAP TMS SA Sponsored ADR"
  },
  {
    "ticker": "EDC",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily MSCI Emerging Markets Bull 3x Shares"
  },
  {
    "ticker": "EDD",
    "exchange": "NYSE",
    "name": "Morgan Stanley Emerging Markets Domestic Debt Fund Inc"
  },
  {
    "ticker": "EDEN",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI Denmark ETF"
  },
  {
    "ticker": "EDF",
    "exchange": "NYSE",
    "name": "Stone Harbor Emerging Markets Income Fund"
  },
  {
    "ticker": "EDI",
    "exchange": "NYSE",
    "name": "Stone Harbor Emerging Markets Total Income Fund"
  },
  {
    "ticker": "EDIT",
    "exchange": "NASDAQ",
    "name": "Editas Medicine Inc."
  },
  {
    "ticker": "EDIV",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Emerging Markets Dividend ETF"
  },
  {
    "ticker": "EDN",
    "exchange": "NYSE",
    "name": "Edenor SA Sponsored ADR Class B"
  },
  {
    "ticker": "EDNT",
    "exchange": "NASDAQ",
    "name": "Edison Nation Inc."
  },
  {
    "ticker": "EDOC",
    "exchange": "NASDAQ",
    "name": "Global X Telemedicine & Digital Health ETF"
  },
  {
    "ticker": "EDOG",
    "exchange": "NYSE ARCA",
    "name": "ALPS Emerging Sector Dividend Dogs ETF"
  },
  {
    "ticker": "EDOW",
    "exchange": "NYSE ARCA",
    "name": "First Trust Dow 30 Equal Weight ETF"
  },
  {
    "ticker": "EDRY",
    "exchange": "NASDAQ",
    "name": "Eurodry Ltd."
  },
  {
    "ticker": "EDSA",
    "exchange": "NASDAQ",
    "name": "Edesa Biotech Inc."
  },
  {
    "ticker": "EDTK",
    "exchange": "NASDAQ",
    "name": "Skillful Craftsman Education Technology Ltd."
  },
  {
    "ticker": "EDU",
    "exchange": "NYSE",
    "name": "New Oriental Education & Technology Group Inc. Sponsored ADR"
  },
  {
    "ticker": "EDUC",
    "exchange": "NASDAQ",
    "name": "Educational Development Corporation"
  },
  {
    "ticker": "EDUT",
    "exchange": "NASDAQ",
    "name": "Global X Education ETF"
  },
  {
    "ticker": "EDV",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Extended Duration Treasury ETF"
  },
  {
    "ticker": "EDZ",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily MSCI Emerging Markets Bear 3X Shares"
  },
  {
    "ticker": "EEA",
    "exchange": "NYSE",
    "name": "European Equity Fund Inc"
  },
  {
    "ticker": "EEFT",
    "exchange": "NASDAQ",
    "name": "Euronet Worldwide Inc."
  },
  {
    "ticker": "EEH",
    "exchange": "NYSE ARCA",
    "name": "Elements Spectrum Large Cap US Sector Momentum Index ETN"
  },
  {
    "ticker": "EELV",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P Emerging Markets Low Volatility ETF"
  },
  {
    "ticker": "EEM",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Emerging Markets ETF"
  },
  {
    "ticker": "EEMA",
    "exchange": "NASDAQ",
    "name": "iShares MSCI Emerging Markets Asia ETF"
  },
  {
    "ticker": "EEMD",
    "exchange": "NYSE ARCA",
    "name": "AAM S&P Emerging Markets High Dividend Value ETF"
  },
  {
    "ticker": "EEMO",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P Emerging Markets Momentum ETF"
  },
  {
    "ticker": "EEMS",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Emerging Markets Small Cap ETF"
  },
  {
    "ticker": "EEMV",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI Emerging Markets Min Vol Factor ETF"
  },
  {
    "ticker": "EEMX",
    "exchange": "NYSE ARCA",
    "name": "SPDR MSCI Emerging Markets Fossil Fuel Free ETF"
  },
  {
    "ticker": "EES",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree U.S. SmallCap Fund"
  },
  {
    "ticker": "EET",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra MSCI Emerging Markets"
  },
  {
    "ticker": "EEV",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort MSCI Emerging Markets"
  },
  {
    "ticker": "EEX",
    "exchange": "NYSE",
    "name": "Emerald Holding Inc."
  },
  {
    "ticker": "EFA",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI EAFE ETF"
  },
  {
    "ticker": "EFAD",
    "exchange": "Cboe BZX",
    "name": "ProShares MSCI EAFE Dividend Growers ETF"
  },
  {
    "ticker": "EFAS",
    "exchange": "NASDAQ",
    "name": "Global X MSCI SuperDividend EAFE ETF"
  },
  {
    "ticker": "EFAV",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI EAFE Min Vol Factor ETF"
  },
  {
    "ticker": "EFAX",
    "exchange": "NYSE ARCA",
    "name": "SPDR MSCI EAFE Fossil Fuel Free ETF"
  },
  {
    "ticker": "EFC",
    "exchange": "NYSE",
    "name": "Ellington Financial Inc."
  },
  {
    "ticker": "EFC-A",
    "exchange": "NYSE",
    "name": "Ellington Financial Inc Cum Conv Red Perp Pfd Registered Shs Series A"
  },
  {
    "ticker": "EFF",
    "exchange": "NYSE",
    "name": "Eaton Vance Floating Rate Income Plus Fund"
  },
  {
    "ticker": "EFG",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI EAFE Growth ETF"
  },
  {
    "ticker": "EFIV",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P 500 ESG ETF"
  },
  {
    "ticker": "EFL",
    "exchange": "NYSE",
    "name": "Eaton Vance Floating-Rate 2022 Target Term Trust"
  },
  {
    "ticker": "EFNL",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI Finland ETF"
  },
  {
    "ticker": "EFO",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra MSCI EAFE"
  },
  {
    "ticker": "EFOI",
    "exchange": "NASDAQ",
    "name": "Energy Focus Inc."
  },
  {
    "ticker": "EFR",
    "exchange": "NYSE",
    "name": "Eaton Vance Senior Floating Rate Fund"
  },
  {
    "ticker": "EFSC",
    "exchange": "NASDAQ",
    "name": "Enterprise Financial Services Corp"
  },
  {
    "ticker": "EFT",
    "exchange": "NYSE",
    "name": "Eaton Vance Floating-Rate Income Trust"
  },
  {
    "ticker": "EFU",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort MSCI EAFE"
  },
  {
    "ticker": "EFV",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI EAFE Value ETF"
  },
  {
    "ticker": "EFX",
    "exchange": "NYSE",
    "name": "Equifax Inc."
  },
  {
    "ticker": "EFZ",
    "exchange": "NYSE ARCA",
    "name": "ProShares Short MSCI EAFE"
  },
  {
    "ticker": "EGAN",
    "exchange": "NASDAQ",
    "name": "eGain Corporation"
  },
  {
    "ticker": "EGBN",
    "exchange": "NASDAQ",
    "name": "Eagle Bancorp Inc."
  },
  {
    "ticker": "EGF",
    "exchange": "NYSE",
    "name": "BlackRock Enhanced Government Fund Inc"
  },
  {
    "ticker": "EGHT",
    "exchange": "NYSE",
    "name": "8x8 Inc."
  },
  {
    "ticker": "EGLE",
    "exchange": "NASDAQ",
    "name": "Eagle Bulk Shipping Inc"
  },
  {
    "ticker": "EGO",
    "exchange": "NYSE",
    "name": "Eldorado Gold Corporation"
  },
  {
    "ticker": "EGOV",
    "exchange": "NASDAQ",
    "name": "NIC Inc."
  },
  {
    "ticker": "EGP",
    "exchange": "NYSE",
    "name": "EastGroup Properties Inc."
  },
  {
    "ticker": "EGPT",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Egypt Index ETF"
  },
  {
    "ticker": "EGRX",
    "exchange": "NASDAQ",
    "name": "Eagle Pharmaceuticals Inc."
  },
  {
    "ticker": "EGY",
    "exchange": "NYSE",
    "name": "VAALCO Energy Inc."
  },
  {
    "ticker": "EH",
    "exchange": "NASDAQ",
    "name": "EHang Holdings Ltd. ADR Class A"
  },
  {
    "ticker": "EHC",
    "exchange": "NYSE",
    "name": "Encompass Health Corporation"
  },
  {
    "ticker": "EHI",
    "exchange": "NYSE",
    "name": "Western Asset Global High Income Fund Inc"
  },
  {
    "ticker": "EHT",
    "exchange": "NYSE",
    "name": "Eaton Vance High Income 2021 Target Term Trust"
  },
  {
    "ticker": "EHTH",
    "exchange": "NASDAQ",
    "name": "eHealth Inc."
  },
  {
    "ticker": "EIC",
    "exchange": "NYSE",
    "name": "Eagle Point Income Co. Inc."
  },
  {
    "ticker": "EIDO",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Indonesia ETF"
  },
  {
    "ticker": "EIDX",
    "exchange": "NASDAQ",
    "name": "Eidos Therapeutics Inc"
  },
  {
    "ticker": "EIG",
    "exchange": "NYSE",
    "name": "Employers Holdings Inc."
  },
  {
    "ticker": "EIGI",
    "exchange": "NASDAQ",
    "name": "Endurance International Group Holdings Inc."
  },
  {
    "ticker": "EIGR",
    "exchange": "NASDAQ",
    "name": "Eiger BioPharmaceuticals Inc."
  },
  {
    "ticker": "EIM",
    "exchange": "NYSE American",
    "name": "Eaton Vance Municipal Bond Fund"
  },
  {
    "ticker": "EINC",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Energy Income ETF"
  },
  {
    "ticker": "EIRL",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Ireland ETF"
  },
  {
    "ticker": "EIS",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Israel ETF"
  },
  {
    "ticker": "EIX",
    "exchange": "NYSE",
    "name": "Edison International"
  },
  {
    "ticker": "EJAN",
    "exchange": "NYSE ARCA",
    "name": "Innovator MSCI Emerging Markets Power Buffer ETF - January"
  },
  {
    "ticker": "EJUL",
    "exchange": "NYSE ARCA",
    "name": "Innovator MSCI Emerging Markets Power Buffer ETF - July of Benef Interest"
  },
  {
    "ticker": "EKAR",
    "exchange": "NYSE ARCA",
    "name": "Ideanomics NextGen Vehicles and Technology ETF"
  },
  {
    "ticker": "EKSO",
    "exchange": "NASDAQ",
    "name": "Ekso Bionics Holdings Inc."
  },
  {
    "ticker": "EL",
    "exchange": "NYSE",
    "name": "Estee Lauder Companies Inc. Class A"
  },
  {
    "ticker": "ELA",
    "exchange": "NYSE American",
    "name": "Envela Corporation"
  },
  {
    "ticker": "ELAN",
    "exchange": "NYSE",
    "name": "Elanco Animal Health Inc."
  },
  {
    "ticker": "ELAT",
    "exchange": "NYSE",
    "name": "Elanco Animal Health Inc. Equity Unit Cons of Nts 01.02.23 + 1 PC"
  },
  {
    "ticker": "ELC",
    "exchange": "NYSE",
    "name": "Entergy Louisiana LLC 4.875 % Bonds 2016-01.09.66 Collateral Trust Mtg"
  },
  {
    "ticker": "ELD",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Emerging Markets Local Debt Fund"
  },
  {
    "ticker": "ELF",
    "exchange": "NYSE",
    "name": "e.l.f. Beauty Inc."
  },
  {
    "ticker": "ELJ",
    "exchange": "NYSE",
    "name": "Entergy Louisiana LLC 5.25 % Bonds 2012-1.7.52 1st Mtg"
  },
  {
    "ticker": "ELLO",
    "exchange": "NYSE American",
    "name": "Ellomay Capital Ltd"
  },
  {
    "ticker": "ELMD",
    "exchange": "NYSE American",
    "name": "Electromed Inc."
  },
  {
    "ticker": "ELOX",
    "exchange": "NASDAQ",
    "name": "Eloxx Pharmaceuticals Inc."
  },
  {
    "ticker": "ELP",
    "exchange": "NYSE",
    "name": "Companhia Paranaense de Energia Sponsored ADR Pfd Class B"
  },
  {
    "ticker": "ELS",
    "exchange": "NYSE",
    "name": "Equity LifeStyle Properties Inc."
  },
  {
    "ticker": "ELSE",
    "exchange": "NASDAQ",
    "name": "Electro-Sensors Inc."
  },
  {
    "ticker": "ELTK",
    "exchange": "NASDAQ",
    "name": "Eltek Ltd"
  },
  {
    "ticker": "ELU",
    "exchange": "NYSE",
    "name": "Entergy Louisiana LLC 4.7 % Bonds 2013-1.6.63 1st Mtg"
  },
  {
    "ticker": "ELVT",
    "exchange": "NYSE",
    "name": "Elevate Credit Inc."
  },
  {
    "ticker": "ELY",
    "exchange": "NYSE",
    "name": "Callaway Golf Company"
  },
  {
    "ticker": "EMAG",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Emerging Markets Aggregate Bond ETF"
  },
  {
    "ticker": "EMAN",
    "exchange": "NYSE American",
    "name": "eMagin Corporation"
  },
  {
    "ticker": "EMB",
    "exchange": "NASDAQ",
    "name": "iShares JP Morgan USD Emerging Markets Bond ETF"
  },
  {
    "ticker": "EMBD",
    "exchange": "NYSE ARCA",
    "name": "Global X Emerging Markets Bond ETF"
  },
  {
    "ticker": "EMBH",
    "exchange": "NYSE ARCA",
    "name": "iShares Interest Rate Hedged Emerging Markets Bond ETF"
  },
  {
    "ticker": "EMCB",
    "exchange": "NASDAQ",
    "name": "WisdomTree Emerging Markets Corporate Bond Fund"
  },
  {
    "ticker": "EMCF",
    "exchange": "NASDAQ",
    "name": "Emclaire Financial Corp."
  },
  {
    "ticker": "EMD",
    "exchange": "NYSE",
    "name": "Western Asset Emerging Markets Debt Fund Inc"
  },
  {
    "ticker": "EMDV",
    "exchange": "Cboe BZX",
    "name": "ProShares MSCI Emerging Markets Dividend Growers ETF"
  },
  {
    "ticker": "EME",
    "exchange": "NYSE",
    "name": "EMCOR Group Inc."
  },
  {
    "ticker": "EMF",
    "exchange": "NYSE",
    "name": "Templeton Emerging Markets Fund"
  },
  {
    "ticker": "EMFM",
    "exchange": "NYSE ARCA",
    "name": "Global X MSCI Next Emerging & Frontier ETF"
  },
  {
    "ticker": "EMGF",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI Emerging Markets Multifactor ETF"
  },
  {
    "ticker": "EMHY",
    "exchange": "Cboe BZX",
    "name": "iShares J.P. Morgan EM High Yield Bond ETF"
  },
  {
    "ticker": "EMIF",
    "exchange": "NASDAQ",
    "name": "iShares Emerging Markets Infrastructure ETF"
  },
  {
    "ticker": "EMKR",
    "exchange": "NASDAQ",
    "name": "EMCORE Corporation"
  },
  {
    "ticker": "EML",
    "exchange": "NASDAQ",
    "name": "Eastern Company"
  },
  {
    "ticker": "EMLC",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors J.P. Morgan EM Local Currency Bond ETF"
  },
  {
    "ticker": "EMLP",
    "exchange": "NYSE ARCA",
    "name": "First Trust North American Energy Infrastructure Fund"
  },
  {
    "ticker": "EMMF",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Emerging Markets Multifactor Fund"
  },
  {
    "ticker": "EMN",
    "exchange": "NYSE",
    "name": "Eastman Chemical Company"
  },
  {
    "ticker": "EMNT",
    "exchange": "NYSE ARCA",
    "name": "PIMCO Enhanced Short Maturity Active ESG Exchange-Traded Fund"
  },
  {
    "ticker": "EMO",
    "exchange": "NYSE",
    "name": "ClearBridge Energy Midstream Opportunity Fund Inc"
  },
  {
    "ticker": "EMP",
    "exchange": "NYSE",
    "name": "Entergy Mississippi LLC 4.9 % Bonds 2016-01.10.66 Secd 1st Mtg"
  },
  {
    "ticker": "EMQQ",
    "exchange": "NYSE ARCA",
    "name": "Emerging Markets Internet & Ecommerce ETF"
  },
  {
    "ticker": "EMR",
    "exchange": "NYSE",
    "name": "Emerson Electric Co."
  },
  {
    "ticker": "EMSG",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers MSCI Emerging Markets ESG Leaders Equity ETF"
  },
  {
    "ticker": "EMSH",
    "exchange": "Cboe BZX",
    "name": "ProShares Short Term USD Emerging Markets Bond ETF"
  },
  {
    "ticker": "EMTL",
    "exchange": "Cboe BZX",
    "name": "SPDR DoubleLine Emerging Markets Fixed Income ETF"
  },
  {
    "ticker": "EMTY",
    "exchange": "NYSE ARCA",
    "name": "ProShares Decline of the Retail Store ETF"
  },
  {
    "ticker": "EMX",
    "exchange": "NYSE American",
    "name": "EMX Royalty Corp"
  },
  {
    "ticker": "EMXC",
    "exchange": "NASDAQ",
    "name": "iShares MSCI Emerging Markets ex China ETF"
  },
  {
    "ticker": "ENB",
    "exchange": "NYSE",
    "name": "Enbridge Inc."
  },
  {
    "ticker": "ENBA",
    "exchange": "NYSE",
    "name": "Enbridge Inc 6.375% Fixed-to-Floating Rate Subordinated Notes Series 2018-B due 2078"
  },
  {
    "ticker": "ENBL",
    "exchange": "NYSE",
    "name": "Enable Midstream Partners LP"
  },
  {
    "ticker": "ENDP",
    "exchange": "NASDAQ",
    "name": "Endo International Plc"
  },
  {
    "ticker": "ENFR",
    "exchange": "NYSE ARCA",
    "name": "Alerian Energy Infrastructure ETF"
  },
  {
    "ticker": "ENG",
    "exchange": "NASDAQ",
    "name": "ENGlobal Corporation"
  },
  {
    "ticker": "ENIA",
    "exchange": "NYSE",
    "name": "Enel Americas S.A. Sponsored ADR"
  },
  {
    "ticker": "ENIC",
    "exchange": "NYSE",
    "name": "Enel Chile SA Sponsored ADR"
  },
  {
    "ticker": "ENJ",
    "exchange": "NYSE",
    "name": "Entergy New Orleans LLC 5 % Bonds 2012-1.12.52 1st Mtg"
  },
  {
    "ticker": "ENLC",
    "exchange": "NYSE",
    "name": "EnLink Midstream LLC"
  },
  {
    "ticker": "ENLV",
    "exchange": "NASDAQ",
    "name": "Enlivex Therapeutics Ltd."
  },
  {
    "ticker": "ENO",
    "exchange": "NYSE",
    "name": "Entergy New Orleans LLC 5.5 % Bonds 2016-1.4.66 1st Mtg"
  },
  {
    "ticker": "ENOB",
    "exchange": "NASDAQ",
    "name": "Enochian Biosciences Inc."
  },
  {
    "ticker": "ENOR",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI Norway ETF"
  },
  {
    "ticker": "ENPH",
    "exchange": "NASDAQ",
    "name": "EnphNYSE American Energy Inc."
  },
  {
    "ticker": "ENR",
    "exchange": "NYSE",
    "name": "Energizer Holdings Inc"
  },
  {
    "ticker": "ENR-A",
    "exchange": "NYSE",
    "name": "Energizer Holdings Inc Cum Conv Red Pfd Registered Shs Class A"
  },
  {
    "ticker": "ENS",
    "exchange": "NYSE",
    "name": "EnerSys"
  },
  {
    "ticker": "ENSG",
    "exchange": "NASDAQ",
    "name": "Ensign Group Inc."
  },
  {
    "ticker": "ENSV",
    "exchange": "NYSE American",
    "name": "Enservco Corporation"
  },
  {
    "ticker": "ENTA",
    "exchange": "NASDAQ",
    "name": "Enanta Pharmaceuticals Inc."
  },
  {
    "ticker": "ENTG",
    "exchange": "NASDAQ",
    "name": "Entegris Inc."
  },
  {
    "ticker": "ENTR",
    "exchange": "NYSE ARCA",
    "name": "ERShares Entrepreneur 30 ETF"
  },
  {
    "ticker": "ENTX",
    "exchange": "NASDAQ",
    "name": "Entera Bio Ltd."
  },
  {
    "ticker": "ENTXW",
    "exchange": "NASDAQ",
    "name": "Entera Bio Ltd. Warrant 2018-27.06.23 on ENTERA"
  },
  {
    "ticker": "ENV",
    "exchange": "NYSE",
    "name": "Envestnet Inc."
  },
  {
    "ticker": "ENVA",
    "exchange": "NYSE",
    "name": "Enova International Inc"
  },
  {
    "ticker": "ENX",
    "exchange": "NYSE American",
    "name": "Eaton Vance New York Municipal Bond Fund"
  },
  {
    "ticker": "ENZ",
    "exchange": "NYSE",
    "name": "Enzo Biochem Inc."
  },
  {
    "ticker": "ENZL",
    "exchange": "NASDAQ",
    "name": "iShares MSCI New Zealand ETF"
  },
  {
    "ticker": "EOD",
    "exchange": "NYSE",
    "name": "Wells Fargo Global Dividend Opportunity Fund of Benef Interest"
  },
  {
    "ticker": "EOG",
    "exchange": "NYSE",
    "name": "EOG Resources Inc."
  },
  {
    "ticker": "EOI",
    "exchange": "NYSE",
    "name": "Eaton Vance Enhanced Equity Income Fund"
  },
  {
    "ticker": "EOLS",
    "exchange": "NASDAQ",
    "name": "Evolus Inc."
  },
  {
    "ticker": "EOS",
    "exchange": "NYSE",
    "name": "Eaton Vance Enhanced Equity Income Fund II"
  },
  {
    "ticker": "EOT",
    "exchange": "NYSE",
    "name": "Eaton Vance National Municipal Opportunities Trust"
  },
  {
    "ticker": "EP-C",
    "exchange": "NYSE",
    "name": "El Paso Energy Capital Trust I 4.75 % Trust Conv Pfd Secs 1998-31.3.28 Series C"
  },
  {
    "ticker": "EPAC",
    "exchange": "NYSE",
    "name": "Enerpac Tool Group Corp Class A"
  },
  {
    "ticker": "EPAM",
    "exchange": "NYSE",
    "name": "EPAM Systems Inc."
  },
  {
    "ticker": "EPAY",
    "exchange": "NASDAQ",
    "name": "Bottomline Technologies (de) Inc."
  },
  {
    "ticker": "EPC",
    "exchange": "NYSE",
    "name": "Edgewell Personal Care Co."
  },
  {
    "ticker": "EPD",
    "exchange": "NYSE",
    "name": "Enterprise Products Partners L.P."
  },
  {
    "ticker": "EPHE",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Philippines ETF"
  },
  {
    "ticker": "EPI",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree India Earnings Fund"
  },
  {
    "ticker": "EPIX",
    "exchange": "NASDAQ",
    "name": "ESSA Pharma Inc"
  },
  {
    "ticker": "EPM",
    "exchange": "NYSE American",
    "name": "Evolution Petroleum Corporation"
  },
  {
    "ticker": "EPOL",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Poland ETF"
  },
  {
    "ticker": "EPP",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Pacific ex-Japan ETF"
  },
  {
    "ticker": "EPR",
    "exchange": "NYSE",
    "name": "EPR Properties"
  },
  {
    "ticker": "EPR-C",
    "exchange": "NYSE",
    "name": "EPR Properties 5 3/4 % Cum Conv Pfd Shs Series C"
  },
  {
    "ticker": "EPR-E",
    "exchange": "NYSE",
    "name": "EPR Properties 9 % Cum Conv Pfd Shs Series E"
  },
  {
    "ticker": "EPR-G",
    "exchange": "NYSE",
    "name": "EPR Properties 5.75 % Cum Conv Perp Red Pfd Registered Shs Series G"
  },
  {
    "ticker": "EPRF",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P High Quality Preferred ETF"
  },
  {
    "ticker": "EPRT",
    "exchange": "NYSE",
    "name": "Essential Properties Realty Trust Inc."
  },
  {
    "ticker": "EPS",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree U.S. LargeCap Fund"
  },
  {
    "ticker": "EPSN",
    "exchange": "NASDAQ",
    "name": "Epsilon Energy Ltd."
  },
  {
    "ticker": "EPU",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Peru ETF"
  },
  {
    "ticker": "EPV",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort FTSE Europe"
  },
  {
    "ticker": "EPZM",
    "exchange": "NASDAQ",
    "name": "Epizyme Inc."
  },
  {
    "ticker": "EQ",
    "exchange": "NASDAQ",
    "name": "Equillium Inc."
  },
  {
    "ticker": "EQAL",
    "exchange": "NYSE ARCA",
    "name": "Invesco Russell 1000 Equal Weight ETF"
  },
  {
    "ticker": "EQBK",
    "exchange": "NASDAQ",
    "name": "Equity Bancshares Inc. Class A"
  },
  {
    "ticker": "EQC",
    "exchange": "NYSE",
    "name": "Equity Commonwealth"
  },
  {
    "ticker": "EQC-D",
    "exchange": "NYSE",
    "name": "Equity Commonwealth 6 1/2 % Cum Conv Pfd Shs Series D"
  },
  {
    "ticker": "EQH",
    "exchange": "NYSE",
    "name": "Equitable Holdings Inc."
  },
  {
    "ticker": "EQH-A",
    "exchange": "NYSE",
    "name": "Equitable Holdings Inc. Depositary Shs Repr 1/1000th 5.25 % Non-Cum Red Perp Pfd Rg ShsSeries A"
  },
  {
    "ticker": "EQIX",
    "exchange": "NASDAQ",
    "name": "Equinix Inc."
  },
  {
    "ticker": "EQL",
    "exchange": "NYSE ARCA",
    "name": "Alps Equal Sector Weight ETF"
  },
  {
    "ticker": "EQNR",
    "exchange": "NYSE",
    "name": "Equinor ASA Sponsored ADR"
  },
  {
    "ticker": "EQR",
    "exchange": "NYSE",
    "name": "Equity Residential"
  },
  {
    "ticker": "EQRR",
    "exchange": "NASDAQ",
    "name": "ProShares Equities for Rising Rates ETF"
  },
  {
    "ticker": "EQS",
    "exchange": "NYSE",
    "name": "Equus Total Return Inc"
  },
  {
    "ticker": "EQT",
    "exchange": "NYSE",
    "name": "EQT Corporation"
  },
  {
    "ticker": "EQWL",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 100 Equal Weight ETF"
  },
  {
    "ticker": "EQX",
    "exchange": "NYSE American",
    "name": "Equinox Gold Corp."
  },
  {
    "ticker": "ERC",
    "exchange": "NYSE American",
    "name": "Wells Fargo Multi-Sector Income Fund"
  },
  {
    "ticker": "ERESU",
    "exchange": "NASDAQ",
    "name": "East Resources Acquisition Co. Units Cons of 1 Sh A + 1/2 Wt 01.07.27"
  },
  {
    "ticker": "ERF",
    "exchange": "NYSE",
    "name": "Enerplus Corporation"
  },
  {
    "ticker": "ERH",
    "exchange": "NYSE American",
    "name": "Wells Fargo Utilities and High Income Fund"
  },
  {
    "ticker": "ERIC",
    "exchange": "NASDAQ",
    "name": "Telefonaktiebolaget LM Ericsson Sponsored ADR Class B"
  },
  {
    "ticker": "ERIE",
    "exchange": "NASDAQ",
    "name": "Erie Indemnity Company Class A"
  },
  {
    "ticker": "ERII",
    "exchange": "NASDAQ",
    "name": "Energy Recovery Inc."
  },
  {
    "ticker": "ERJ",
    "exchange": "NYSE",
    "name": "Embraer S.A. Sponsored ADR"
  },
  {
    "ticker": "ERM",
    "exchange": "NYSE ARCA",
    "name": "EquityCompass Risk Manager ETF"
  },
  {
    "ticker": "EROS",
    "exchange": "NYSE",
    "name": "Eros International PLC Class A"
  },
  {
    "ticker": "ERSX",
    "exchange": "NYSE ARCA",
    "name": "ERShares Non-US Small Cap ETF"
  },
  {
    "ticker": "ERUS",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Russia ETF"
  },
  {
    "ticker": "ERX",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Energy Bull 2x Shares"
  },
  {
    "ticker": "ERY",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Energy Bear 3x"
  },
  {
    "ticker": "ERYP",
    "exchange": "NASDAQ",
    "name": "ERYTech Pharma SA Sponsored ADR"
  },
  {
    "ticker": "ES",
    "exchange": "NYSE",
    "name": "Eversource Energy"
  },
  {
    "ticker": "ESBA",
    "exchange": "NYSE ARCA",
    "name": "Empire State Realty OP LP Series ES"
  },
  {
    "ticker": "ESBK",
    "exchange": "NASDAQ",
    "name": "Elmira Savings Bank"
  },
  {
    "ticker": "ESCA",
    "exchange": "NASDAQ",
    "name": "Escalade Incorporated"
  },
  {
    "ticker": "ESCR",
    "exchange": "Cboe BZX",
    "name": "Xtrackers BB Investment Grade Corporate ESG ETF"
  },
  {
    "ticker": "ESE",
    "exchange": "NYSE",
    "name": "ESCO Technologies Inc."
  },
  {
    "ticker": "ESEA",
    "exchange": "NASDAQ",
    "name": "Euroseas Ltd."
  },
  {
    "ticker": "ESEB",
    "exchange": "Cboe BZX",
    "name": "Xtrackers J.P. Morgan ESG Emerging Markets Sovereign ETF"
  },
  {
    "ticker": "ESG",
    "exchange": "Cboe BZX",
    "name": "FlexShares STOXX US ESG Impact Index Fund"
  },
  {
    "ticker": "ESGA",
    "exchange": "NYSE ARCA",
    "name": "American Century Sustainable Equity ETF"
  },
  {
    "ticker": "ESGD",
    "exchange": "NASDAQ",
    "name": "iShares ESG Aware MSCI EAFE ETF"
  },
  {
    "ticker": "ESGE",
    "exchange": "NASDAQ",
    "name": "iShares ESG Aware MSCI EM ETF"
  },
  {
    "ticker": "ESGG",
    "exchange": "Cboe BZX",
    "name": "FlexShares STOXX Global ESG Impact Index Fund"
  },
  {
    "ticker": "ESGN",
    "exchange": "NYSE ARCA",
    "name": "Columbia Sustainable International Equity Income ETF"
  },
  {
    "ticker": "ESGR",
    "exchange": "NASDAQ",
    "name": "Enstar Group Limited"
  },
  {
    "ticker": "ESGRO",
    "exchange": "NASDAQ",
    "name": "Enstar Group Ltd Depositary Shs Repr 1/1000th 7 % Non-Cum Red Perp Pfd Rg Series E"
  },
  {
    "ticker": "ESGRP",
    "exchange": "NASDAQ",
    "name": "Enstar Group Limited Deposit Shs Repr 1/1000th Non-Cum Red Pfd Registered Shs Series D"
  },
  {
    "ticker": "ESGS",
    "exchange": "NYSE ARCA",
    "name": "Columbia Sustainable U.S. Equity Income ETF"
  },
  {
    "ticker": "ESGU",
    "exchange": "NASDAQ",
    "name": "iShares Trust iShares ESG Aware MSCI USA ETF"
  },
  {
    "ticker": "ESGV",
    "exchange": "Cboe BZX",
    "name": "Vanguard ESG U.S. Stock ETF"
  },
  {
    "ticker": "ESHY",
    "exchange": "Cboe BZX",
    "name": "Xtrackers J.P. Morgan ESG USD High Yield Corporate Bond ETF"
  },
  {
    "ticker": "ESI",
    "exchange": "NYSE",
    "name": "Element Solutions Inc."
  },
  {
    "ticker": "ESLT",
    "exchange": "NASDAQ",
    "name": "Elbit Systems Ltd"
  },
  {
    "ticker": "ESML",
    "exchange": "Cboe BZX",
    "name": "iShares ESG Aware MSCI USA Small-Cap ETF"
  },
  {
    "ticker": "ESNG",
    "exchange": "NYSE ARCA",
    "name": "Direxion MSCI USA ESG - Leaders vs. Laggards ETF"
  },
  {
    "ticker": "ESNT",
    "exchange": "NYSE",
    "name": "Essent Group Ltd."
  },
  {
    "ticker": "ESP",
    "exchange": "NYSE American",
    "name": "Espey Mfg. & Electronics Corp."
  },
  {
    "ticker": "ESPO",
    "exchange": "NASDAQ",
    "name": "VanEck Vectors Video Gaming & eSports ETF"
  },
  {
    "ticker": "ESPR",
    "exchange": "NASDAQ",
    "name": "Esperion Therapeutics Inc."
  },
  {
    "ticker": "ESQ",
    "exchange": "NASDAQ",
    "name": "Esquire Financial Holdings Inc."
  },
  {
    "ticker": "ESRT",
    "exchange": "NYSE",
    "name": "Empire State Realty Trust Inc. Class A"
  },
  {
    "ticker": "ESS",
    "exchange": "NYSE",
    "name": "Essex Property Trust Inc."
  },
  {
    "ticker": "ESSA",
    "exchange": "NASDAQ",
    "name": "ESSA Bancorp Inc."
  },
  {
    "ticker": "ESSC",
    "exchange": "NASDAQ",
    "name": "East Stone Acquisition Corp"
  },
  {
    "ticker": "ESSCR",
    "exchange": "NASDAQ",
    "name": "East Stone Acquisition Corp. Rights For Shares"
  },
  {
    "ticker": "ESSCU",
    "exchange": "NASDAQ",
    "name": "East Stone Acquisition Corp. Units Cons of 1 Shs + 1 Wt + Rts"
  },
  {
    "ticker": "ESSCW",
    "exchange": "NASDAQ",
    "name": "East Stone Acquisition Corp Warrant -on East Stone Acq"
  },
  {
    "ticker": "ESTA",
    "exchange": "NASDAQ",
    "name": "Establishment Labs Holdings Inc."
  },
  {
    "ticker": "ESTC",
    "exchange": "NYSE",
    "name": "Elastic NV"
  },
  {
    "ticker": "ESTE",
    "exchange": "NYSE",
    "name": "Earthstone Energy Inc. Class A"
  },
  {
    "ticker": "ESXB",
    "exchange": "NASDAQ",
    "name": "Community Bankers Trust Corporation"
  },
  {
    "ticker": "ET",
    "exchange": "NYSE",
    "name": "Energy Transfer L.P."
  },
  {
    "ticker": "ETACU",
    "exchange": "NASDAQ",
    "name": "E.Merge Technology Acquisition Corp. Units Cons of 1 Sh -A- + 1/3 Wt 30.07.25"
  },
  {
    "ticker": "ETB",
    "exchange": "NYSE",
    "name": "Eaton Vance Tax-Managed Buy-Write Income Fund"
  },
  {
    "ticker": "ETFC",
    "exchange": "NASDAQ",
    "name": "E*TRADE Financial Corporation"
  },
  {
    "ticker": "ETG",
    "exchange": "NYSE",
    "name": "Eaton Vance Tax-Advantaged Global Dividend Income Fund"
  },
  {
    "ticker": "ETH",
    "exchange": "NYSE",
    "name": "Ethan Allen Interiors Inc."
  },
  {
    "ticker": "ETHO",
    "exchange": "NYSE ARCA",
    "name": "Etho Climate Leadership U.S. ETF"
  },
  {
    "ticker": "ETI-",
    "exchange": "NYSE",
    "name": "Entergy Texas. Inc 5.375 % Cum Red Perp Pfd Registered Shs Series A"
  },
  {
    "ticker": "ETJ",
    "exchange": "NYSE",
    "name": "Eaton Vance Risk-Managed Diversified Equity Income Fund"
  },
  {
    "ticker": "ETM",
    "exchange": "NYSE",
    "name": "Entercom Communications Corp. Class A"
  },
  {
    "ticker": "ETN",
    "exchange": "NYSE",
    "name": "Eaton Corp. Plc"
  },
  {
    "ticker": "ETNB",
    "exchange": "NASDAQ",
    "name": "89bio Inc"
  },
  {
    "ticker": "ETO",
    "exchange": "NYSE",
    "name": "Eaton Vance Tax Advantaged Global Dividend Opportunities Fund"
  },
  {
    "ticker": "ETON",
    "exchange": "NASDAQ",
    "name": "Eton Pharmaceuticals Inc."
  },
  {
    "ticker": "ETP-C",
    "exchange": "NYSE",
    "name": "Energy Transfer Operating LP Cum Red Perp Pfd Units Series C"
  },
  {
    "ticker": "ETP-D",
    "exchange": "NYSE",
    "name": "Energy Transfer Operating LP Cum Red Perp Pfd Units Series D"
  },
  {
    "ticker": "ETP-E",
    "exchange": "NYSE",
    "name": "Energy Transfer Operating LP Cum Red Perp Pfd Units Series E"
  },
  {
    "ticker": "ETR",
    "exchange": "NYSE",
    "name": "Entergy Corporation"
  },
  {
    "ticker": "ETRN",
    "exchange": "NYSE",
    "name": "Equitrans Midstream Corp."
  },
  {
    "ticker": "ETSY",
    "exchange": "NASDAQ",
    "name": "Etsy Inc."
  },
  {
    "ticker": "ETTX",
    "exchange": "NASDAQ",
    "name": "Entasis Therapeutics Holdings Inc."
  },
  {
    "ticker": "ETV",
    "exchange": "NYSE",
    "name": "Eaton Vance Tax-Managed Buy-Write Opportunities Fund"
  },
  {
    "ticker": "ETW",
    "exchange": "NYSE",
    "name": "Eaton Vance Tax-Managed Global Buy-Write Opportunities Fund"
  },
  {
    "ticker": "ETX",
    "exchange": "NYSE",
    "name": "Eaton Vance Municipal Income 2028 Term Trust"
  },
  {
    "ticker": "ETY",
    "exchange": "NYSE",
    "name": "Eaton Vance Tax-Managed Diversified Equity Income Fund"
  },
  {
    "ticker": "EUDG",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Europe Quality Dividend Growth Fund"
  },
  {
    "ticker": "EUDV",
    "exchange": "Cboe BZX",
    "name": "ProShares MSCI Europe Dividend Growers ETF"
  },
  {
    "ticker": "EUFN",
    "exchange": "NASDAQ",
    "name": "iShares MSCI Europe Financials ETF"
  },
  {
    "ticker": "EUFX",
    "exchange": "NYSE ARCA",
    "name": "ProShares Short Euro"
  },
  {
    "ticker": "EUM",
    "exchange": "NYSE ARCA",
    "name": "ProShares Short MSCI Emerging Markets"
  },
  {
    "ticker": "EUO",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort Euro"
  },
  {
    "ticker": "EURL",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily FTSE Europe Bull 3X Shares"
  },
  {
    "ticker": "EURN",
    "exchange": "NYSE",
    "name": "Euronav NV"
  },
  {
    "ticker": "EURZ",
    "exchange": "Cboe BZX",
    "name": "Xtrackers Eurozone Equity ETF"
  },
  {
    "ticker": "EUSA",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI USA Equal Weighted ETF"
  },
  {
    "ticker": "EUSB",
    "exchange": "NYSE ARCA",
    "name": "iShares ESG Advanced Total USD Bond Market ETF"
  },
  {
    "ticker": "EUSC",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Europe Hedged SmallCap Equity Fund"
  },
  {
    "ticker": "EV",
    "exchange": "NYSE",
    "name": "Eaton Vance Corp."
  },
  {
    "ticker": "EVA",
    "exchange": "NYSE",
    "name": "Enviva Partners LP"
  },
  {
    "ticker": "EVBG",
    "exchange": "NASDAQ",
    "name": "Everbridge Inc."
  },
  {
    "ticker": "EVBN",
    "exchange": "NYSE American",
    "name": "Evans Bancorp Inc."
  },
  {
    "ticker": "EVC",
    "exchange": "NYSE",
    "name": "Entravision Communications Corporation Class A"
  },
  {
    "ticker": "EVER",
    "exchange": "NASDAQ",
    "name": "EverQuote Inc. Class A"
  },
  {
    "ticker": "EVF",
    "exchange": "NYSE",
    "name": "Eaton Vance Senior Income Trust"
  },
  {
    "ticker": "EVFM",
    "exchange": "NASDAQ",
    "name": "Evofem Biosciences Inc."
  },
  {
    "ticker": "EVG",
    "exchange": "NYSE",
    "name": "Eaton Vance Short Duration Diversified Income Fund"
  },
  {
    "ticker": "EVGN",
    "exchange": "NASDAQ",
    "name": "Evogene Ltd"
  },
  {
    "ticker": "EVH",
    "exchange": "NYSE",
    "name": "Evolent Health Inc Class A"
  },
  {
    "ticker": "EVI",
    "exchange": "NYSE American",
    "name": "EVI Industries Inc."
  },
  {
    "ticker": "EVK",
    "exchange": "NASDAQ",
    "name": "Ever-Glory International Group Inc."
  },
  {
    "ticker": "EVLO",
    "exchange": "NASDAQ",
    "name": "Evelo Biosciences Inc."
  },
  {
    "ticker": "EVM",
    "exchange": "NYSE American",
    "name": "Eaton Vance California Municipal Bond Fund"
  },
  {
    "ticker": "EVN",
    "exchange": "NYSE",
    "name": "Eaton Vance Municipal Income Trust"
  },
  {
    "ticker": "EVOK",
    "exchange": "NASDAQ",
    "name": "Evoke Pharma Inc."
  },
  {
    "ticker": "EVOL",
    "exchange": "NASDAQ",
    "name": "Evolving Systems Inc."
  },
  {
    "ticker": "EVOP",
    "exchange": "NASDAQ",
    "name": "EVO Payments Inc. Class A"
  },
  {
    "ticker": "EVR",
    "exchange": "NYSE",
    "name": "Evercore Inc Class A"
  },
  {
    "ticker": "EVRG",
    "exchange": "NYSE",
    "name": "Evergy Inc."
  },
  {
    "ticker": "EVRI",
    "exchange": "NYSE",
    "name": "Everi Holdings Inc."
  },
  {
    "ticker": "EVSI",
    "exchange": "NASDAQ",
    "name": "Envision Solar International Inc."
  },
  {
    "ticker": "EVSIW",
    "exchange": "NASDAQ",
    "name": "Envision Solar International Inc Warrant 2019-30.12.2023 on Envision Solar International"
  },
  {
    "ticker": "EVT",
    "exchange": "NYSE",
    "name": "Eaton Vance Tax-Advantaged Dividend Income Fund"
  },
  {
    "ticker": "EVTC",
    "exchange": "NYSE",
    "name": "EVERTEC Inc."
  },
  {
    "ticker": "EVV",
    "exchange": "NYSE American",
    "name": "Eaton Vance Limited Duration Income Fund"
  },
  {
    "ticker": "EVX",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Environmental Services ETF"
  },
  {
    "ticker": "EVY",
    "exchange": "NYSE American",
    "name": "Eaton Vance New York Municipal Income Trust Fund"
  },
  {
    "ticker": "EW",
    "exchange": "NYSE",
    "name": "Edwards Lifesciences Corporation"
  },
  {
    "ticker": "EWA",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Australia ETF"
  },
  {
    "ticker": "EWBC",
    "exchange": "NASDAQ",
    "name": "East West Bancorp Inc."
  },
  {
    "ticker": "EWC",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Canada ETF"
  },
  {
    "ticker": "EWCO",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Equal Weight Communication Services ETF"
  },
  {
    "ticker": "EWD",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Sweden ETF"
  },
  {
    "ticker": "EWG",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Germany ETF"
  },
  {
    "ticker": "EWGS",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI Germany Small Cap ETF"
  },
  {
    "ticker": "EWH",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Hong Kong ETF"
  },
  {
    "ticker": "EWI",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Italy ETF"
  },
  {
    "ticker": "EWJ",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Japan ETF"
  },
  {
    "ticker": "EWJE",
    "exchange": "NASDAQ",
    "name": "iShares MSCI Japan Equal Weighted ETF"
  },
  {
    "ticker": "EWJV",
    "exchange": "NASDAQ",
    "name": "iShares MSCI Japan Value ETF"
  },
  {
    "ticker": "EWK",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Belgium ETF"
  },
  {
    "ticker": "EWL",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Switzerland ETF"
  },
  {
    "ticker": "EWM",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Malaysia ETF"
  },
  {
    "ticker": "EWMC",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P MidCap 400 Equal Weight ETF"
  },
  {
    "ticker": "EWN",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Netherlands ETF"
  },
  {
    "ticker": "EWO",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Austria ETF"
  },
  {
    "ticker": "EWP",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Spain ETF"
  },
  {
    "ticker": "EWQ",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI France ETF"
  },
  {
    "ticker": "EWRE",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Equal Weight Real Estate ETF"
  },
  {
    "ticker": "EWS",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Singapore ETF"
  },
  {
    "ticker": "EWSC",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P Smallcap 600 Equal Weight ETF"
  },
  {
    "ticker": "EWT",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Taiwan ETF"
  },
  {
    "ticker": "EWU",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI United Kingdom ETF"
  },
  {
    "ticker": "EWUS",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI United Kingdom Small Cap ETF"
  },
  {
    "ticker": "EWV",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort MSCI Japan"
  },
  {
    "ticker": "EWW",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Mexico ETF"
  },
  {
    "ticker": "EWX",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Emerging Markets Small Cap ETF"
  },
  {
    "ticker": "EWY",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI South Korea ETF"
  },
  {
    "ticker": "EWZ",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Brazil ETF"
  },
  {
    "ticker": "EWZS",
    "exchange": "NASDAQ",
    "name": "iShares MSCI Brazil Small-Cap ETF"
  },
  {
    "ticker": "EXAS",
    "exchange": "NASDAQ",
    "name": "Exact Sciences Corporation"
  },
  {
    "ticker": "EXC",
    "exchange": "NASDAQ",
    "name": "Exelon Corporation"
  },
  {
    "ticker": "EXD",
    "exchange": "NYSE",
    "name": "Eaton Vance Tax-Managed Buy-Write Strategy Fund of Benef Interest"
  },
  {
    "ticker": "EXEL",
    "exchange": "NASDAQ",
    "name": "Exelixis Inc."
  },
  {
    "ticker": "EXFO",
    "exchange": "NASDAQ",
    "name": "EXFO Inc."
  },
  {
    "ticker": "EXG",
    "exchange": "NYSE",
    "name": "Eaton Vance Tax-Managed Global Diversified Equity Income Fund"
  },
  {
    "ticker": "EXI",
    "exchange": "NYSE ARCA",
    "name": "iShares Global Industrials ETF"
  },
  {
    "ticker": "EXK",
    "exchange": "NYSE",
    "name": "Endeavour Silver Corp."
  },
  {
    "ticker": "EXLS",
    "exchange": "NASDAQ",
    "name": "ExlService Holdings Inc."
  },
  {
    "ticker": "EXP",
    "exchange": "NYSE",
    "name": "Eagle Materials Inc."
  },
  {
    "ticker": "EXPC",
    "exchange": "NASDAQ",
    "name": "Experience Investment Corp Class A"
  },
  {
    "ticker": "EXPCU",
    "exchange": "NASDAQ",
    "name": "Experience Investment Corp Units Cons of 1 Sh A + 1/3 Wt 01.09.26"
  },
  {
    "ticker": "EXPCW",
    "exchange": "NASDAQ",
    "name": "Experience Investment Corp Warrant 2019-01.09.26 on Experienc Invt-A"
  },
  {
    "ticker": "EXPD",
    "exchange": "NASDAQ",
    "name": "Expeditors International of Washington Inc."
  },
  {
    "ticker": "EXPE",
    "exchange": "NASDAQ",
    "name": "Expedia Group Inc."
  },
  {
    "ticker": "EXPI",
    "exchange": "NASDAQ",
    "name": "eXp World Holdings Inc."
  },
  {
    "ticker": "EXPO",
    "exchange": "NASDAQ",
    "name": "Exponent Inc."
  },
  {
    "ticker": "EXPR",
    "exchange": "NYSE",
    "name": "Express Inc."
  },
  {
    "ticker": "EXR",
    "exchange": "NYSE",
    "name": "Extra Space Storage Inc."
  },
  {
    "ticker": "EXTN",
    "exchange": "NYSE",
    "name": "Exterran Corp."
  },
  {
    "ticker": "EXTR",
    "exchange": "NASDAQ",
    "name": "Extreme Networks Inc."
  },
  {
    "ticker": "EYE",
    "exchange": "NASDAQ",
    "name": "National Vision Holdings Inc."
  },
  {
    "ticker": "EYEG",
    "exchange": "NASDAQ",
    "name": "EyeGate Pharmaceuticals Inc."
  },
  {
    "ticker": "EYEN",
    "exchange": "NASDAQ",
    "name": "Eyenovia Inc."
  },
  {
    "ticker": "EYES",
    "exchange": "NASDAQ",
    "name": "Second Sight Medical Products Inc."
  },
  {
    "ticker": "EYESW",
    "exchange": "NASDAQ",
    "name": "Second Sight Medical Products Inc. Warrant 2020-14.03.22 Ext to 14.03.24 on Sec Sght Med Pro"
  },
  {
    "ticker": "EYLD",
    "exchange": "Cboe BZX",
    "name": "Cambria Emerging Shareholder Yield ETF"
  },
  {
    "ticker": "EYPT",
    "exchange": "NASDAQ",
    "name": "EyePoint Pharmaceuticals Inc."
  },
  {
    "ticker": "EZA",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI South Africa ETF"
  },
  {
    "ticker": "EZJ",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra MSCI Japan"
  },
  {
    "ticker": "EZM",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree U.S. MidCap Fund"
  },
  {
    "ticker": "EZPW",
    "exchange": "NASDAQ",
    "name": "EZCORP Inc. Class A"
  },
  {
    "ticker": "EZT",
    "exchange": "NYSE",
    "name": "Entergy Texas Inc. 5 5/8 % Bonds 2014-1.6.64 1st Mtg"
  },
  {
    "ticker": "EZU",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI Eurozone ETF"
  },
  {
    "ticker": "F",
    "exchange": "NYSE",
    "name": "Ford Motor Company"
  },
  {
    "ticker": "F-B",
    "exchange": "NYSE",
    "name": "Ford Motor Company 6.2 % Notes 2019-01.06.59 Global"
  },
  {
    "ticker": "F-C",
    "exchange": "NYSE",
    "name": "Ford Motor Co 6 % Notes 2019-01.12.59 Global"
  },
  {
    "ticker": "FAAR",
    "exchange": "NASDAQ",
    "name": "First Trust Alternative Absolute Return Strategy ETF"
  },
  {
    "ticker": "FAB",
    "exchange": "NASDAQ",
    "name": "First Trust Multi Cap Value AlphaDEX Fund"
  },
  {
    "ticker": "FAD",
    "exchange": "NASDAQ",
    "name": "First Trust Multi Cap Growth AlphaDEX Fund"
  },
  {
    "ticker": "FAF",
    "exchange": "NYSE",
    "name": "First American Financial Corporation"
  },
  {
    "ticker": "FAII=",
    "exchange": "NYSE",
    "name": "Fortress Value Acquisition Corp. II Units Cons of 1 Sh -A- + 1/5 Wt 27"
  },
  {
    "ticker": "FALN",
    "exchange": "NASDAQ",
    "name": "iShares Fallen Angels USD Bond ETF"
  },
  {
    "ticker": "FAM",
    "exchange": "NYSE",
    "name": "First Trust / Aberdeen Global Opportunity Income Fund"
  },
  {
    "ticker": "FAMI",
    "exchange": "NASDAQ",
    "name": "Farmmi Inc."
  },
  {
    "ticker": "FAN",
    "exchange": "NYSE ARCA",
    "name": "First Trust Global Wind Energy ETF"
  },
  {
    "ticker": "FANG",
    "exchange": "NASDAQ",
    "name": "Diamondback Energy Inc."
  },
  {
    "ticker": "FANH",
    "exchange": "NASDAQ",
    "name": "Fanhua Inc. Sponsored ADR"
  },
  {
    "ticker": "FARM",
    "exchange": "NASDAQ",
    "name": "Farmer Bros. Co."
  },
  {
    "ticker": "FARO",
    "exchange": "NASDAQ",
    "name": "FARO Technologies Inc."
  },
  {
    "ticker": "FAS",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Financial Bull 3x Shares"
  },
  {
    "ticker": "FAST",
    "exchange": "NASDAQ",
    "name": "Fastenal Company"
  },
  {
    "ticker": "FAT",
    "exchange": "NASDAQ",
    "name": "FAT Brands Inc."
  },
  {
    "ticker": "FATBP",
    "exchange": "NASDAQ",
    "name": "FAT Brands Inc. 8.25 % Cum Red Perp Pfd Registered Shs Series B"
  },
  {
    "ticker": "FATBW",
    "exchange": "NASDAQ",
    "name": "Fat Brands Inc Warrant 2020- 30.06.25 on Fat Brands"
  },
  {
    "ticker": "FATE",
    "exchange": "NASDAQ",
    "name": "Fate Therapeutics Inc."
  },
  {
    "ticker": "FAUG",
    "exchange": "Cboe BZX",
    "name": "First Trust Exchange-Traded Fund VIII Buffer August Fund"
  },
  {
    "ticker": "FAUS",
    "exchange": "NYSE ARCA",
    "name": "First Trust Australia AlphaDEX Fund"
  },
  {
    "ticker": "FAX",
    "exchange": "NYSE American",
    "name": "Aberdeen Asia-Pacific Income Fund Inc"
  },
  {
    "ticker": "FAZ",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Financial Bear 3X Shares"
  },
  {
    "ticker": "FB",
    "exchange": "NASDAQ",
    "name": "Facebook Inc. Class A"
  },
  {
    "ticker": "FBC",
    "exchange": "NYSE",
    "name": "Flagstar Bancorp Inc."
  },
  {
    "ticker": "FBCG",
    "exchange": "Cboe BZX",
    "name": "Fidelity Blue Chip Growth ETF"
  },
  {
    "ticker": "FBCV",
    "exchange": "Cboe BZX",
    "name": "Fidelity Blue Chip Value ETF"
  },
  {
    "ticker": "FBGX",
    "exchange": "NYSE ARCA",
    "name": "UBS AG FI Enhanced Large Cap Growth ETN"
  },
  {
    "ticker": "FBHS",
    "exchange": "NYSE",
    "name": "Fortune Brands Home & Security Inc."
  },
  {
    "ticker": "FBIO",
    "exchange": "NASDAQ",
    "name": "Fortress Biotech Inc."
  },
  {
    "ticker": "FBIOP",
    "exchange": "NASDAQ",
    "name": "Fortress Biotech Inc.9.375 % Cum Conv Perp Red Pfd Registered Shs Series A"
  },
  {
    "ticker": "FBIZ",
    "exchange": "NASDAQ",
    "name": "First Business Financial Services Inc."
  },
  {
    "ticker": "FBK",
    "exchange": "NYSE",
    "name": "FB Financial Corporation"
  },
  {
    "ticker": "FBM",
    "exchange": "NYSE",
    "name": "Foundation Building Materials Inc."
  },
  {
    "ticker": "FBMS",
    "exchange": "NASDAQ",
    "name": "First Bancshares Inc."
  },
  {
    "ticker": "FBNC",
    "exchange": "NASDAQ",
    "name": "First Bancorp"
  },
  {
    "ticker": "FBND",
    "exchange": "NYSE ARCA",
    "name": "Fidelity Total Bond ETF"
  },
  {
    "ticker": "FBP",
    "exchange": "NYSE",
    "name": "First Bancorp"
  },
  {
    "ticker": "FBRX",
    "exchange": "NASDAQ",
    "name": "Forte Biosciences Inc."
  },
  {
    "ticker": "FBSS",
    "exchange": "NASDAQ",
    "name": "Fauquier Bankshares Inc."
  },
  {
    "ticker": "FBT",
    "exchange": "NYSE ARCA",
    "name": "First Trust NYSEE Arca Biotechnology Index Fund"
  },
  {
    "ticker": "FBZ",
    "exchange": "NASDAQ",
    "name": "First Trust Brazil AlphaDEX Fund"
  },
  {
    "ticker": "FC",
    "exchange": "NYSE",
    "name": "Franklin Covey Co."
  },
  {
    "ticker": "FCA",
    "exchange": "NASDAQ",
    "name": "First Trust China AlphaDEX Fund"
  },
  {
    "ticker": "FCAL",
    "exchange": "NASDAQ",
    "name": "First Trust California Municipal High Income ETF"
  },
  {
    "ticker": "FCAN",
    "exchange": "NASDAQ",
    "name": "First Trust Canada AlphaDEX Fund"
  },
  {
    "ticker": "FCAP",
    "exchange": "NASDAQ",
    "name": "First Capital Inc."
  },
  {
    "ticker": "FCAU",
    "exchange": "NYSE",
    "name": "Fiat Chrysler Automobiles N.V."
  },
  {
    "ticker": "FCBC",
    "exchange": "NASDAQ",
    "name": "First Community Bankshares Inc"
  },
  {
    "ticker": "FCBP",
    "exchange": "NASDAQ",
    "name": "First Choice Bancorp"
  },
  {
    "ticker": "FCCO",
    "exchange": "NASDAQ",
    "name": "First Community Corporation"
  },
  {
    "ticker": "FCCY",
    "exchange": "NASDAQ",
    "name": "1st Constitution Bancorp"
  },
  {
    "ticker": "FCEF",
    "exchange": "NASDAQ",
    "name": "First Trust CEF Income Opportunity ETF"
  },
  {
    "ticker": "FCEL",
    "exchange": "NASDAQ",
    "name": "FuelCell Energy Inc."
  },
  {
    "ticker": "FCF",
    "exchange": "NYSE",
    "name": "First Commonwealth Financial Corporation"
  },
  {
    "ticker": "FCFS",
    "exchange": "NASDAQ",
    "name": "FirstCash Inc."
  },
  {
    "ticker": "FCG",
    "exchange": "NYSE ARCA",
    "name": "First Trust Natural Gas ETF"
  },
  {
    "ticker": "FCN",
    "exchange": "NYSE",
    "name": "FTI Consulting Inc."
  },
  {
    "ticker": "FCNCA",
    "exchange": "NASDAQ",
    "name": "First Citizens BancShares Inc. Class A"
  },
  {
    "ticker": "FCNCP",
    "exchange": "NASDAQ",
    "name": "First Citizens Bancshares Inc Non-Cum Red Perp Pfd Registered Shs Series A"
  },
  {
    "ticker": "FCO",
    "exchange": "NYSE American",
    "name": "Aberdeen Global Income Fund Inc"
  },
  {
    "ticker": "FCOM",
    "exchange": "NYSE ARCA",
    "name": "Fidelity MSCI Communication Services Index ETF"
  },
  {
    "ticker": "FCOR",
    "exchange": "NYSE ARCA",
    "name": "Fidelity Corporate Bond ETF"
  },
  {
    "ticker": "FCPI",
    "exchange": "Cboe BZX",
    "name": "Fidelity Covington Trust"
  },
  {
    "ticker": "FCPT",
    "exchange": "NYSE",
    "name": "Four Corners Property Trust Inc."
  },
  {
    "ticker": "FCRD",
    "exchange": "NASDAQ",
    "name": "First Eagle Alternative Capital BDC Inc."
  },
  {
    "ticker": "FCRW",
    "exchange": "NYSE",
    "name": "First Eagle Alternative Capital BDC Inc. 6.125 % Notes 2020-30.10.23"
  },
  {
    "ticker": "FCRZ",
    "exchange": "NYSE",
    "name": "First Eagle Alternative Capital BDC Inc. 6.75 % Notes 2020-30.12.22"
  },
  {
    "ticker": "FCT",
    "exchange": "NYSE",
    "name": "First Trust Senior Floating Rate Income Fund II"
  },
  {
    "ticker": "FCTR",
    "exchange": "Cboe BZX",
    "name": "First Trust Lunt U.S. Factor Rotation ETF"
  },
  {
    "ticker": "FCVT",
    "exchange": "NASDAQ",
    "name": "First Trust SSI Strategic Convertible Securities ETF"
  },
  {
    "ticker": "FCX",
    "exchange": "NYSE",
    "name": "Freeport-McMoRan Inc."
  },
  {
    "ticker": "FDBC",
    "exchange": "NASDAQ",
    "name": "Fidelity D & D Bancorp Inc."
  },
  {
    "ticker": "FDD",
    "exchange": "NYSE ARCA",
    "name": "First Trust Stoxx European Select Dividend Index Fund"
  },
  {
    "ticker": "FDEM",
    "exchange": "Cboe BZX",
    "name": "Fidelity Targeted Emerging Markets Factor ETF"
  },
  {
    "ticker": "FDEU",
    "exchange": "NYSE",
    "name": "First Trust Dynamic Europe Equity Income Fund"
  },
  {
    "ticker": "FDEV",
    "exchange": "Cboe BZX",
    "name": "Fidelity Targeted International Factor ETF"
  },
  {
    "ticker": "FDG",
    "exchange": "Cboe BZX",
    "name": "American Century Focused Dynamic Growth ETF"
  },
  {
    "ticker": "FDHY",
    "exchange": "NYSE ARCA",
    "name": "Fidelity High Yield Factor ETF"
  },
  {
    "ticker": "FDIS",
    "exchange": "NYSE ARCA",
    "name": "Fidelity MSCI Consumer Discretionary Index ETF"
  },
  {
    "ticker": "FDIV",
    "exchange": "NASDAQ",
    "name": "First Trust Strategic Income ETF"
  },
  {
    "ticker": "FDL",
    "exchange": "NYSE ARCA",
    "name": "First Trust Morningstar Dividend Leaders Index Fund"
  },
  {
    "ticker": "FDLO",
    "exchange": "NYSE ARCA",
    "name": "Fidelity Low Volatility Factor ETF"
  },
  {
    "ticker": "FDM",
    "exchange": "NYSE ARCA",
    "name": "First Trust Dow Jones Select MicroCap Index Fund"
  },
  {
    "ticker": "FDMO",
    "exchange": "NYSE ARCA",
    "name": "Fidelity Momentum Factor ETF"
  },
  {
    "ticker": "FDN",
    "exchange": "NYSE ARCA",
    "name": "First Trust Dow Jones Internet Index Fund"
  },
  {
    "ticker": "FDNI",
    "exchange": "NASDAQ",
    "name": "First Trust Dow Jones International Internet ETF"
  },
  {
    "ticker": "FDP",
    "exchange": "NYSE",
    "name": "Fresh Del Monte Produce Inc."
  },
  {
    "ticker": "FDRR",
    "exchange": "NYSE ARCA",
    "name": "Fidelity Dividend ETF for Rising Rates"
  },
  {
    "ticker": "FDS",
    "exchange": "NYSE",
    "name": "FactSet Research Systems Inc."
  },
  {
    "ticker": "FDT",
    "exchange": "NASDAQ",
    "name": "First Trust Developed Markets ex-US AlphaDEX Fund"
  },
  {
    "ticker": "FDTS",
    "exchange": "NASDAQ",
    "name": "First Trust Developed Markets ex-US Small Cap AlphaDEX Fund"
  },
  {
    "ticker": "FDUS",
    "exchange": "NASDAQ",
    "name": "Fidus Investment Corporation"
  },
  {
    "ticker": "FDUSG",
    "exchange": "NASDAQ",
    "name": "Fidus Investment Corporation 5.375 % Notes 2019-01.11.24"
  },
  {
    "ticker": "FDUSL",
    "exchange": "NASDAQ",
    "name": "Fidus Investment Corporation 5.875 % Notes 2018-01.02.23"
  },
  {
    "ticker": "FDUSZ",
    "exchange": "NASDAQ",
    "name": "Fidus Investment Corporation 6 % Notes 2019-15.02.24 Global"
  },
  {
    "ticker": "FDVV",
    "exchange": "NYSE ARCA",
    "name": "Fidelity High Dividend ETF"
  },
  {
    "ticker": "FDX",
    "exchange": "NYSE",
    "name": "FedEx Corporation"
  },
  {
    "ticker": "FE",
    "exchange": "NYSE",
    "name": "FirstEnergy Corp."
  },
  {
    "ticker": "FEAC",
    "exchange": "NYSE",
    "name": "Flying Eagle Acquisition Corp Class A"
  },
  {
    "ticker": "FEAC=",
    "exchange": "NYSE",
    "name": "Flying Eagle Acquisition Corp. Units Cons of 1 Sh + 1/4 Wt 26.02.2020"
  },
  {
    "ticker": "FEAC+",
    "exchange": "NYSE",
    "name": "Flying Eagle Acquisition Corp Warrants 2020-26.02.27 on Flying Eagle"
  },
  {
    "ticker": "FEDU",
    "exchange": "NYSE",
    "name": "Four Seasons Education (Cayman) Inc ADR"
  },
  {
    "ticker": "FEI",
    "exchange": "NYSE",
    "name": "First Trust MLP & Energy Income Fund"
  },
  {
    "ticker": "FEIM",
    "exchange": "NASDAQ",
    "name": "Frequency Electronics Inc."
  },
  {
    "ticker": "FELE",
    "exchange": "NASDAQ",
    "name": "Franklin Electric Co. Inc."
  },
  {
    "ticker": "FEM",
    "exchange": "NASDAQ",
    "name": "First Trust Emerging Markets AlphaDEX Fund"
  },
  {
    "ticker": "FEMB",
    "exchange": "NASDAQ",
    "name": "First Trust Emerging Markets Local Currency Bond ETF"
  },
  {
    "ticker": "FEMS",
    "exchange": "NASDAQ",
    "name": "First Trust Emerging Markets Small Cap AlphaDEX Fund"
  },
  {
    "ticker": "FEN",
    "exchange": "NYSE American",
    "name": "First Trust Energy Income & Growth Fund Energy Income & Growth Fund"
  },
  {
    "ticker": "FENC",
    "exchange": "NASDAQ",
    "name": "Fennec Pharmaceuticals Inc."
  },
  {
    "ticker": "FENG",
    "exchange": "NYSE",
    "name": "Phoenix New Media Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "FENY",
    "exchange": "NYSE ARCA",
    "name": "Fidelity MSCI Energy Index ETF"
  },
  {
    "ticker": "FEO",
    "exchange": "NYSE",
    "name": "First Trust / Aberdeen Emerging Opportunity Fund"
  },
  {
    "ticker": "FEP",
    "exchange": "NASDAQ",
    "name": "First Trust Europe AlphaDEX Fund"
  },
  {
    "ticker": "FET",
    "exchange": "NYSE",
    "name": "Forum Energy Technologies Inc."
  },
  {
    "ticker": "FEUL",
    "exchange": "NYSE ARCA",
    "name": "Credit Suisse FI Enhanced Europe 50 ETN"
  },
  {
    "ticker": "FEUZ",
    "exchange": "NASDAQ",
    "name": "First Trust Eurozone AlphaDEX ETF"
  },
  {
    "ticker": "FEX",
    "exchange": "NASDAQ",
    "name": "First Trust Large Cap Core AlphaDEX Fund"
  },
  {
    "ticker": "FEYE",
    "exchange": "NASDAQ",
    "name": "FireEye Inc."
  },
  {
    "ticker": "FEZ",
    "exchange": "NYSE ARCA",
    "name": "SPDR EURO STOXX 50 ETF"
  },
  {
    "ticker": "FF",
    "exchange": "NYSE",
    "name": "FutureFuel Corp."
  },
  {
    "ticker": "FFA",
    "exchange": "NYSE",
    "name": "First Trust Enhanced Equity Income Fund"
  },
  {
    "ticker": "FFBC",
    "exchange": "NASDAQ",
    "name": "First Financial Bancorp."
  },
  {
    "ticker": "FFBW",
    "exchange": "NASDAQ",
    "name": "FFBW Inc"
  },
  {
    "ticker": "FFC",
    "exchange": "NYSE",
    "name": "Flaherty & Crumrine Preferred and Income Securities Fund Incorporated"
  },
  {
    "ticker": "FFEB",
    "exchange": "Cboe BZX",
    "name": "FT Cboe Vest U.S. Equity Buffer ETF - February"
  },
  {
    "ticker": "FFEU",
    "exchange": "NYSE ARCA",
    "name": "Barclays ETN+ FI Enhanced Europe 50 Exchange Traded Notes Series C"
  },
  {
    "ticker": "FFG",
    "exchange": "NYSE",
    "name": "FBL Financial Group Inc. Class A"
  },
  {
    "ticker": "FFHG",
    "exchange": "Cboe BZX",
    "name": "Formula Folios Hedged Growth ETF"
  },
  {
    "ticker": "FFHL",
    "exchange": "NASDAQ",
    "name": "Fuwei Films (Holdings) Co. Ltd."
  },
  {
    "ticker": "FFIC",
    "exchange": "NASDAQ",
    "name": "Flushing Financial Corporation"
  },
  {
    "ticker": "FFIN",
    "exchange": "NASDAQ",
    "name": "First Financial Bankshares Inc"
  },
  {
    "ticker": "FFIU",
    "exchange": "NYSE ARCA",
    "name": "UVA Unconstrained Medium-Term Fixed Income ETF"
  },
  {
    "ticker": "FFIV",
    "exchange": "NASDAQ",
    "name": "F5 Networks Inc."
  },
  {
    "ticker": "FFNW",
    "exchange": "NASDAQ",
    "name": "First Financial Northwest Inc."
  },
  {
    "ticker": "FFR",
    "exchange": "NYSE ARCA",
    "name": "First Trust FTSE EPRA/NAREIT Developed Markets Real Estate"
  },
  {
    "ticker": "FFSG",
    "exchange": "Cboe BZX",
    "name": "FormulaFolios Smart Growth ETF"
  },
  {
    "ticker": "FFTG",
    "exchange": "Cboe BZX",
    "name": "FormulaFolios Tactical Growth ETF"
  },
  {
    "ticker": "FFTI",
    "exchange": "Cboe BZX",
    "name": "FormulaFolios Tactical Income ETF"
  },
  {
    "ticker": "FFTY",
    "exchange": "NYSE ARCA",
    "name": "Innovator IBD 50 ETF"
  },
  {
    "ticker": "FFWM",
    "exchange": "NASDAQ",
    "name": "First Foundation Inc."
  },
  {
    "ticker": "FGB",
    "exchange": "NYSE",
    "name": "First Trust Specialty Finance and Financial Opportunities Fund"
  },
  {
    "ticker": "FGBI",
    "exchange": "NASDAQ",
    "name": "First Guaranty Bancshares Inc."
  },
  {
    "ticker": "FGD",
    "exchange": "NYSE ARCA",
    "name": "First Trust Dow Jones Global Select Dividend Index Fund"
  },
  {
    "ticker": "FGEN",
    "exchange": "NASDAQ",
    "name": "FibroGen Inc."
  },
  {
    "ticker": "FGM",
    "exchange": "NASDAQ",
    "name": "First Trust Germany AlphaDEX Fund"
  },
  {
    "ticker": "FHB",
    "exchange": "NASDAQ",
    "name": "First Hawaiian Inc."
  },
  {
    "ticker": "FHI",
    "exchange": "NYSE",
    "name": "Federated Hermes Inc. Class B"
  },
  {
    "ticker": "FHK",
    "exchange": "NASDAQ",
    "name": "First Trust Hong Kong AlphaDEX Fund"
  },
  {
    "ticker": "FHLC",
    "exchange": "NYSE ARCA",
    "name": "Fidelity MSCI Health Care Index ETF"
  },
  {
    "ticker": "FHN",
    "exchange": "NYSE",
    "name": "First Horizon National Corporation"
  },
  {
    "ticker": "FHN-A",
    "exchange": "NYSE",
    "name": "First Horizon National Corp Deposit Shs Repr 1/4000th Non Cum Perp Pfd Shs Series A"
  },
  {
    "ticker": "FHN-B",
    "exchange": "NYSE",
    "name": "First Horizon National Corporation Depositary Shs Repr 1/400th 6.625% Non-Cum Red Perp Pfd Shs Series B"
  },
  {
    "ticker": "FHN-C",
    "exchange": "NYSE",
    "name": "First Horizon National Corporation Depositary Shs Repr 1/400th 6.6 % Non Cum Perp Pfd Registered Shs C"
  },
  {
    "ticker": "FHN-D",
    "exchange": "NYSE",
    "name": "First Horizon National Corporation Depositary Shs Repr 1/400th 6.100 % Non Cum Perp Pfd RegisteredShs D"
  },
  {
    "ticker": "FHN-E",
    "exchange": "NYSE",
    "name": "First Horizon National Corp Depositary Shs Repr 1/4000th 6.5% Non-Cum Red Perp Pfd Rgstrd Shs E"
  },
  {
    "ticker": "FI",
    "exchange": "NYSE",
    "name": "Frank's International NV"
  },
  {
    "ticker": "FIBK",
    "exchange": "NASDAQ",
    "name": "First Interstate BancSystem Inc. Class A"
  },
  {
    "ticker": "FIBR",
    "exchange": "Cboe BZX",
    "name": "iShares U.S. Fixed Income Balanced Risk Factor ETF"
  },
  {
    "ticker": "FICO",
    "exchange": "NYSE",
    "name": "Fair Isaac Corporation"
  },
  {
    "ticker": "FID",
    "exchange": "NASDAQ",
    "name": "First Trust S&P International Dividend Aristocrats ETF"
  },
  {
    "ticker": "FIDI",
    "exchange": "NYSE ARCA",
    "name": "Fidelity International High Dividend ETF"
  },
  {
    "ticker": "FIDU",
    "exchange": "NYSE ARCA",
    "name": "Fidelity MSCI Industrials Index ETF"
  },
  {
    "ticker": "FIEE",
    "exchange": "NYSE ARCA",
    "name": "UBS AG FI Enhanced Europe 50 ETN"
  },
  {
    "ticker": "FIF",
    "exchange": "NYSE",
    "name": "First Trust Energy Infrastructure Fund"
  },
  {
    "ticker": "FIHD",
    "exchange": "NYSE ARCA",
    "name": "UBS AG FI Enhanced Global High Yield ETN"
  },
  {
    "ticker": "FIIIU",
    "exchange": "NASDAQ",
    "name": "Forum Merger III Corporation Units Cons of 1 Sh + 1/3 Wt 24.08.27"
  },
  {
    "ticker": "FILL",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Global Energy Producers ETF"
  },
  {
    "ticker": "FINS",
    "exchange": "NYSE",
    "name": "Angel Oak Financial Strategies Income Term Trust of Benef. Interest"
  },
  {
    "ticker": "FINV",
    "exchange": "NYSE",
    "name": "FinVolution Group Sponsored ADR Class A"
  },
  {
    "ticker": "FINX",
    "exchange": "NASDAQ",
    "name": "Global X FinTech ETF"
  },
  {
    "ticker": "FIS",
    "exchange": "NYSE",
    "name": "Fidelity National Information Services Inc."
  },
  {
    "ticker": "FISI",
    "exchange": "NASDAQ",
    "name": "Financial Institutions Inc."
  },
  {
    "ticker": "FISK",
    "exchange": "NYSE ARCA",
    "name": "Empire State Realty OP LP Series 250"
  },
  {
    "ticker": "FISR",
    "exchange": "NYSE ARCA",
    "name": "SPDR SSGA Fixed Income Sector Rotation ETF"
  },
  {
    "ticker": "FISV",
    "exchange": "NASDAQ",
    "name": "Fiserv Inc."
  },
  {
    "ticker": "FIT",
    "exchange": "NYSE",
    "name": "Fitbit Inc. Class A"
  },
  {
    "ticker": "FITB",
    "exchange": "NASDAQ",
    "name": "Fifth Third Bancorp"
  },
  {
    "ticker": "FITBI",
    "exchange": "NASDAQ",
    "name": "Fifth Third Bancorp Deposit Shs Repr 1/1000th Non-Cum Perp Pfd Shs Series I"
  },
  {
    "ticker": "FITBO",
    "exchange": "NASDAQ",
    "name": "Fifth Third Bancorp Depositary Shs Repr 1/1000th Non-Cum Red Perp Pfd Rg Shs Series K"
  },
  {
    "ticker": "FITBP",
    "exchange": "NASDAQ",
    "name": "Fifth Third Bancorp Depositary Shs B Ser A Repr 1/40 6 % Perp Pfd Registered Shs B Ser A"
  },
  {
    "ticker": "FITE",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Kensho Future Security ETF"
  },
  {
    "ticker": "FIV",
    "exchange": "NYSE",
    "name": "First Trust Senior Floating Rate 2022 Target Term Fund"
  },
  {
    "ticker": "FIVA",
    "exchange": "NYSE ARCA",
    "name": "Fidelity International Value Factor ETF"
  },
  {
    "ticker": "FIVE",
    "exchange": "NASDAQ",
    "name": "Five Below Inc."
  },
  {
    "ticker": "FIVG",
    "exchange": "NYSE ARCA",
    "name": "Defiance Next Gen Connectivity ETF"
  },
  {
    "ticker": "FIVN",
    "exchange": "NASDAQ",
    "name": "Five9 Inc."
  },
  {
    "ticker": "FIW",
    "exchange": "NYSE ARCA",
    "name": "First Trust Water ETF"
  },
  {
    "ticker": "FIX",
    "exchange": "NYSE",
    "name": "Comfort Systems USA Inc."
  },
  {
    "ticker": "FIXD",
    "exchange": "NASDAQ",
    "name": "First Trust TCW Opportunistic Fixed Income ETF"
  },
  {
    "ticker": "FIXX",
    "exchange": "NASDAQ",
    "name": "Homology Medicines Inc."
  },
  {
    "ticker": "FIYY",
    "exchange": "NYSE ARCA",
    "name": "Barclays ETN+ FI Enhanced Global High Yield Exchange Traded Notes Series B"
  },
  {
    "ticker": "FIZZ",
    "exchange": "NASDAQ",
    "name": "National Beverage Corp."
  },
  {
    "ticker": "FJNK",
    "exchange": "NYSE ARCA",
    "name": "Pacific Global Focused High Yield ETF"
  },
  {
    "ticker": "FJP",
    "exchange": "NASDAQ",
    "name": "First Trust Japan AlphaDEX Fund"
  },
  {
    "ticker": "FJUL",
    "exchange": "Cboe BZX",
    "name": "FT Cboe Vest U.S. Equity Buffer ETF - July"
  },
  {
    "ticker": "FJUN",
    "exchange": "Cboe BZX",
    "name": "FT Cboe Vest U.S. Equity Buffer ETF - June"
  },
  {
    "ticker": "FKO",
    "exchange": "NASDAQ",
    "name": "First Trust South Korea AlphaDEX Fund"
  },
  {
    "ticker": "FKU",
    "exchange": "NASDAQ",
    "name": "First Trust United Kingdom AlphaDEX Fund"
  },
  {
    "ticker": "FL",
    "exchange": "NYSE",
    "name": "Foot Locker Inc."
  },
  {
    "ticker": "FLAU",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE Australia ETF"
  },
  {
    "ticker": "FLAX",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE Asia Ex Japan ETF"
  },
  {
    "ticker": "FLBL",
    "exchange": "Cboe BZX",
    "name": "Franklin Liberty Senior Loan ETF"
  },
  {
    "ticker": "FLBR",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE Brazil ETF"
  },
  {
    "ticker": "FLC",
    "exchange": "NYSE",
    "name": "Flaherty & Crumrine Total Return Fund Inc"
  },
  {
    "ticker": "FLCA",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE Canada ETF"
  },
  {
    "ticker": "FLCB",
    "exchange": "NYSE ARCA",
    "name": "Franklin Liberty U.S. Core Bond ETF"
  },
  {
    "ticker": "FLCH",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE China ETF"
  },
  {
    "ticker": "FLCO",
    "exchange": "NYSE ARCA",
    "name": "Franklin Liberty Investment Grade Corporate ETF"
  },
  {
    "ticker": "FLDM",
    "exchange": "NASDAQ",
    "name": "Fluidigm Corporation"
  },
  {
    "ticker": "FLDR",
    "exchange": "Cboe BZX",
    "name": "Fidelity Low Duration Bond Factor ETF"
  },
  {
    "ticker": "FLEE",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE Europe ETF"
  },
  {
    "ticker": "FLEH",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE Europe Hedged ETF"
  },
  {
    "ticker": "FLEU",
    "exchange": "NYSE ARCA",
    "name": "Barclays ETN+ FI Enhanced Europe 50 ETN Series B"
  },
  {
    "ticker": "FLEX",
    "exchange": "NASDAQ",
    "name": "Flex Ltd."
  },
  {
    "ticker": "FLFR",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE France ETF"
  },
  {
    "ticker": "FLGB",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE United Kingdom ETF"
  },
  {
    "ticker": "FLGE",
    "exchange": "NYSE ARCA",
    "name": "Credit Suisse FI Large Cap Growth Enhanced ETN"
  },
  {
    "ticker": "FLGR",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE Germany ETF"
  },
  {
    "ticker": "FLGT",
    "exchange": "NASDAQ",
    "name": "Fulgent Genetics Inc."
  },
  {
    "ticker": "FLGV",
    "exchange": "NYSE ARCA",
    "name": "Franklin Liberty U.S. Treasury Bond ETF"
  },
  {
    "ticker": "FLHK",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE Hong Kong ETF"
  },
  {
    "ticker": "FLHY",
    "exchange": "Cboe BZX",
    "name": "Franklin Liberty High Yield Corporate ETF"
  },
  {
    "ticker": "FLIA",
    "exchange": "Cboe BZX",
    "name": "Franklin Liberty International Aggregate Bond ETF"
  },
  {
    "ticker": "FLIC",
    "exchange": "NASDAQ",
    "name": "First of Long Island Corporation"
  },
  {
    "ticker": "FLIN",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE India ETF"
  },
  {
    "ticker": "FLIR",
    "exchange": "NASDAQ",
    "name": "FLIR Systems Inc."
  },
  {
    "ticker": "FLIY",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE Italy ETF"
  },
  {
    "ticker": "FLJH",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE Japan Hedged ETF"
  },
  {
    "ticker": "FLJP",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE Japan ETF"
  },
  {
    "ticker": "FLKR",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE South Korea ETF"
  },
  {
    "ticker": "FLL",
    "exchange": "NASDAQ",
    "name": "Full House Resorts Inc."
  },
  {
    "ticker": "FLLA",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE Latin America ETF"
  },
  {
    "ticker": "FLLV",
    "exchange": "NYSE ARCA",
    "name": "Franklin Liberty U.S. Low Volatility ETF"
  },
  {
    "ticker": "FLM",
    "exchange": "NYSE ARCA",
    "name": "First Trust Global Engineering and Construction ETF"
  },
  {
    "ticker": "FLMB",
    "exchange": "NYSE ARCA",
    "name": "Franklin Liberty Municipal Bond ETF"
  },
  {
    "ticker": "FLMI",
    "exchange": "NYSE ARCA",
    "name": "Franklin Liberty Intermediate Municipal Opportunities ETF"
  },
  {
    "ticker": "FLMN",
    "exchange": "NASDAQ",
    "name": "Falcon Minerals Corp. Class A"
  },
  {
    "ticker": "FLMNW",
    "exchange": "NASDAQ",
    "name": "Falcon Minerals Corporation Warrant 2018-01.05.22 on Falcon Minerals-A"
  },
  {
    "ticker": "FLMX",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE Mexico ETF"
  },
  {
    "ticker": "FLN",
    "exchange": "NASDAQ",
    "name": "First Trust Latin America AlphaDEX Fund"
  },
  {
    "ticker": "FLNG",
    "exchange": "NYSE",
    "name": "FLEX LNG Ltd"
  },
  {
    "ticker": "FLNT",
    "exchange": "NASDAQ",
    "name": "Fluent Inc."
  },
  {
    "ticker": "FLO",
    "exchange": "NYSE",
    "name": "Flowers Foods Inc."
  },
  {
    "ticker": "FLOT",
    "exchange": "Cboe BZX",
    "name": "iShares Floating Rate Bond ETF"
  },
  {
    "ticker": "FLOW",
    "exchange": "NYSE",
    "name": "SPX Flow Inc."
  },
  {
    "ticker": "FLQD",
    "exchange": "NYSE ARCA",
    "name": "Franklin LibertyQ Global Dividend ETF"
  },
  {
    "ticker": "FLQE",
    "exchange": "NYSE ARCA",
    "name": "Franklin LibertyQ Emerging Markets ETF"
  },
  {
    "ticker": "FLQG",
    "exchange": "NYSE ARCA",
    "name": "Franklin LibertyQ Global Equity ETF"
  },
  {
    "ticker": "FLQH",
    "exchange": "NYSE ARCA",
    "name": "Franklin LibertyQ International Equity Hedged ETF"
  },
  {
    "ticker": "FLQL",
    "exchange": "Cboe BZX",
    "name": "Franklin LibertyQ U.S. Equity ETF"
  },
  {
    "ticker": "FLQM",
    "exchange": "Cboe BZX",
    "name": "Franklin LibertyQ U.S. Mid Cap Equity ETF"
  },
  {
    "ticker": "FLQS",
    "exchange": "Cboe BZX",
    "name": "Franklin LibertyQ U.S. Small Cap Equity ETF"
  },
  {
    "ticker": "FLR",
    "exchange": "NYSE",
    "name": "Fluor Corporation"
  },
  {
    "ticker": "FLRN",
    "exchange": "NYSE ARCA",
    "name": "SPDR Bloomberg Barclays Investment Grade Floating Rate ETF"
  },
  {
    "ticker": "FLRT",
    "exchange": "NYSE ARCA",
    "name": "Pacific Global Senior Loan ETF"
  },
  {
    "ticker": "FLRU",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE Russia ETF"
  },
  {
    "ticker": "FLS",
    "exchange": "NYSE",
    "name": "Flowserve Corporation"
  },
  {
    "ticker": "FLSA",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE Saudi Arabia ETF"
  },
  {
    "ticker": "FLSP",
    "exchange": "NYSE ARCA",
    "name": "Franklin Liberty Systematic Style Premia ETF"
  },
  {
    "ticker": "FLSW",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE Switzerland ETF"
  },
  {
    "ticker": "FLT",
    "exchange": "NYSE",
    "name": "FLEETCOR Technologies Inc."
  },
  {
    "ticker": "FLTB",
    "exchange": "NYSE ARCA",
    "name": "Fidelity Limited Term Bond ETF"
  },
  {
    "ticker": "FLTR",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Investment Grade Floating Rate ETF"
  },
  {
    "ticker": "FLTW",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE Taiwan ETF"
  },
  {
    "ticker": "FLUD",
    "exchange": "NYSE ARCA",
    "name": "Franklin Liberty Ultra Short Bond ETF"
  },
  {
    "ticker": "FLUX",
    "exchange": "NASDAQ",
    "name": "Flux Power Holdings Inc."
  },
  {
    "ticker": "FLV",
    "exchange": "Cboe BZX",
    "name": "American Century Focused Large Cap Value ETF"
  },
  {
    "ticker": "FLWS",
    "exchange": "NASDAQ",
    "name": "1-800-FLOWERS.COM Inc. Class A"
  },
  {
    "ticker": "FLXN",
    "exchange": "NASDAQ",
    "name": "Flexion Therapeutics Inc."
  },
  {
    "ticker": "FLXS",
    "exchange": "NASDAQ",
    "name": "Flexsteel Industries Inc."
  },
  {
    "ticker": "FLY",
    "exchange": "NYSE",
    "name": "Fly Leasing Limited Sponsored ADR"
  },
  {
    "ticker": "FLYT",
    "exchange": "NYSE ARCA",
    "name": "Direxion Flight to Safety Strategy ETF"
  },
  {
    "ticker": "FLZA",
    "exchange": "NYSE ARCA",
    "name": "Franklin FTSE South Africa ETF"
  },
  {
    "ticker": "FM",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Frontier 100 ETF"
  },
  {
    "ticker": "FMAO",
    "exchange": "NASDAQ",
    "name": "Farmers & Merchants Bancorp Inc."
  },
  {
    "ticker": "FMAT",
    "exchange": "NYSE ARCA",
    "name": "Fidelity MSCI Materials Index ETF"
  },
  {
    "ticker": "FMAY",
    "exchange": "Cboe BZX",
    "name": "FT Cboe Vest U.S. Equity Buffer ETF - May"
  },
  {
    "ticker": "FMB",
    "exchange": "NASDAQ",
    "name": "First Trust Managed Municipal ETF"
  },
  {
    "ticker": "FMBH",
    "exchange": "NASDAQ",
    "name": "First Mid Bancshares Inc."
  },
  {
    "ticker": "FMBI",
    "exchange": "NASDAQ",
    "name": "First Midwest Bancorp Inc."
  },
  {
    "ticker": "FMBIO",
    "exchange": "NASDAQ",
    "name": "First Midwest Bancorp Inc Depositary Shs Repr 1/40th 7% Non-Cum Red Perp Pfd Rg Series - C-"
  },
  {
    "ticker": "FMBIP",
    "exchange": "NASDAQ",
    "name": "First Midwest Bancorp Inc Depositary Shs Repr 1/40th 7% Non-Cum Red Perp Pfd Rg Series - A-"
  },
  {
    "ticker": "FMC",
    "exchange": "NYSE",
    "name": "FMC Corporation"
  },
  {
    "ticker": "FMCI",
    "exchange": "NASDAQ",
    "name": "Forum Merger Ii Corp. Class A"
  },
  {
    "ticker": "FMCIU",
    "exchange": "NASDAQ",
    "name": "Forum Merger II Corporation Units Cons of 1 Sh + 1 Wt"
  },
  {
    "ticker": "FMCIW",
    "exchange": "NASDAQ",
    "name": "Forum Merger II Corporation Warrant 2018-on Forum Merge II Rg-A"
  },
  {
    "ticker": "FMF",
    "exchange": "NYSE ARCA",
    "name": "First Trust Managed Futures Strategy Fund"
  },
  {
    "ticker": "FMHI",
    "exchange": "NASDAQ",
    "name": "First Trust Municipal High Income ETF"
  },
  {
    "ticker": "FMIL",
    "exchange": "Cboe BZX",
    "name": "Fidelity New Millennium ETF"
  },
  {
    "ticker": "FMK",
    "exchange": "NASDAQ",
    "name": "First Trust Mega Cap AlphaDEX Fund"
  },
  {
    "ticker": "FMN",
    "exchange": "NYSE",
    "name": "Federated Hermes Premier Municipal Income Fund"
  },
  {
    "ticker": "FMNB",
    "exchange": "NASDAQ",
    "name": "Farmers National Banc Corp."
  },
  {
    "ticker": "FMO",
    "exchange": "NYSE",
    "name": "Fiduciary/Claymore Energy Infrastructure Fund of Benef Interest"
  },
  {
    "ticker": "FMS",
    "exchange": "NYSE",
    "name": "Fresenius Medical Care AG & Co. KGaA Sponsored ADR"
  },
  {
    "ticker": "FMTX",
    "exchange": "NASDAQ",
    "name": "Forma Therapeutics Holdings Inc."
  },
  {
    "ticker": "FMX",
    "exchange": "NYSE",
    "name": "Fomento Economico Mexicano SAB de CV Sponsored ADR Class B"
  },
  {
    "ticker": "FMY",
    "exchange": "NYSE",
    "name": "First Trust Mortgage Income Fund"
  },
  {
    "ticker": "FN",
    "exchange": "NYSE",
    "name": "Fabrinet"
  },
  {
    "ticker": "FNB",
    "exchange": "NYSE",
    "name": "F.N.B. Corporation"
  },
  {
    "ticker": "FNB-E",
    "exchange": "NYSE",
    "name": "FNB Corp Deposit Shs Repr 1/40th Non-Cum Perp Pfd Shs Series E"
  },
  {
    "ticker": "FNCB",
    "exchange": "NASDAQ",
    "name": "FNCB Bancorp Inc."
  },
  {
    "ticker": "FNCL",
    "exchange": "NYSE ARCA",
    "name": "Fidelity MSCI Financials Index ETF"
  },
  {
    "ticker": "FND",
    "exchange": "NYSE",
    "name": "Floor & Decor Holdings Inc. Class A"
  },
  {
    "ticker": "FNDA",
    "exchange": "NYSE ARCA",
    "name": "Schwab Fundamental US Small Co. Index ETF"
  },
  {
    "ticker": "FNDB",
    "exchange": "NYSE ARCA",
    "name": "Schwab Fundamental US Broad Market Index ETF"
  },
  {
    "ticker": "FNDC",
    "exchange": "NYSE ARCA",
    "name": "Schwab Fundamental International Small Co. Index ETF"
  },
  {
    "ticker": "FNDE",
    "exchange": "NYSE ARCA",
    "name": "Schwab Fundamental Emerging Markets Large Co. Index ETF"
  },
  {
    "ticker": "FNDF",
    "exchange": "NYSE ARCA",
    "name": "Schwab Fundamental International Large Co. Index ETF"
  },
  {
    "ticker": "FNDX",
    "exchange": "NYSE ARCA",
    "name": "Schwab Fundamental US Large Co. Index ETF"
  },
  {
    "ticker": "FNF",
    "exchange": "NYSE",
    "name": "Fidelity National Financial Inc. - FNF Group"
  },
  {
    "ticker": "FNGD",
    "exchange": "NYSE ARCA",
    "name": "MicroSectors FANG+ Index -3X Inverse Leveraged ETN"
  },
  {
    "ticker": "FNGO",
    "exchange": "NYSE ARCA",
    "name": "MicroSectors FANG+ Index 2X Leveraged ETNs"
  },
  {
    "ticker": "FNGS",
    "exchange": "NYSE ARCA",
    "name": "MicroSectors FANG+ ETN"
  },
  {
    "ticker": "FNGU",
    "exchange": "NYSE ARCA",
    "name": "MicroSectors FANG+ Index 3X Leveraged ETN"
  },
  {
    "ticker": "FNGZ",
    "exchange": "NYSE ARCA",
    "name": "MicroSectors FANG+ Index -2X Leveraged ETNS"
  },
  {
    "ticker": "FNHC",
    "exchange": "NASDAQ",
    "name": "FedNat Holding Company"
  },
  {
    "ticker": "FNI",
    "exchange": "NYSE ARCA",
    "name": "First Trust Chindia ETF"
  },
  {
    "ticker": "FNK",
    "exchange": "NASDAQ",
    "name": "First Trust Mid Cap Value AlphaDEX Fund"
  },
  {
    "ticker": "FNKO",
    "exchange": "NASDAQ",
    "name": "Funko Inc. Class A"
  },
  {
    "ticker": "FNLC",
    "exchange": "NASDAQ",
    "name": "First Bancorp Inc."
  },
  {
    "ticker": "FNOV",
    "exchange": "Cboe BZX",
    "name": "FT Cboe Vest U.S. Equity Buffer ETF - November"
  },
  {
    "ticker": "FNV",
    "exchange": "NYSE",
    "name": "Franco-Nevada Corporation"
  },
  {
    "ticker": "FNWB",
    "exchange": "NASDAQ",
    "name": "First Northwest Bancorp"
  },
  {
    "ticker": "FNX",
    "exchange": "NASDAQ",
    "name": "First Trust Mid Cap Core AlphaDEX Fund"
  },
  {
    "ticker": "FNY",
    "exchange": "NASDAQ",
    "name": "First Trust Mid Cap Growth AlphaDEX Fund"
  },
  {
    "ticker": "FOCS",
    "exchange": "NASDAQ",
    "name": "Focus Financial Partners Inc. Class A"
  },
  {
    "ticker": "FOE",
    "exchange": "NYSE",
    "name": "Ferro Corporation"
  },
  {
    "ticker": "FOF",
    "exchange": "NYSE",
    "name": "Cohen & Steers Closed-End Opportunity Fund Inc"
  },
  {
    "ticker": "FOLD",
    "exchange": "NASDAQ",
    "name": "Amicus Therapeutics Inc."
  },
  {
    "ticker": "FONR",
    "exchange": "NASDAQ",
    "name": "Fonar Corporation"
  },
  {
    "ticker": "FOR",
    "exchange": "NYSE",
    "name": "Forestar Group Inc."
  },
  {
    "ticker": "FORD",
    "exchange": "NASDAQ",
    "name": "Forward Industries Inc."
  },
  {
    "ticker": "FORK",
    "exchange": "NASDAQ",
    "name": "Fuling Global Inc."
  },
  {
    "ticker": "FORM",
    "exchange": "NASDAQ",
    "name": "FormFactor Inc."
  },
  {
    "ticker": "FORR",
    "exchange": "NASDAQ",
    "name": "Forrester Research Inc."
  },
  {
    "ticker": "FORTY",
    "exchange": "NASDAQ",
    "name": "Formula Systems (1985) Ltd. Sponsored ADR"
  },
  {
    "ticker": "FOSL",
    "exchange": "NASDAQ",
    "name": "Fossil Group Inc."
  },
  {
    "ticker": "FOUR",
    "exchange": "NYSE",
    "name": "Shift4 Payments Inc. Class A"
  },
  {
    "ticker": "FOVL",
    "exchange": "NYSE ARCA",
    "name": "iShares Focused Value Factor ETF"
  },
  {
    "ticker": "FOX",
    "exchange": "NASDAQ",
    "name": "Fox Corporation Class B"
  },
  {
    "ticker": "FOXA",
    "exchange": "NASDAQ",
    "name": "Fox Corporation Class A"
  },
  {
    "ticker": "FOXF",
    "exchange": "NASDAQ",
    "name": "Fox Factory Holding Corp."
  },
  {
    "ticker": "FPA",
    "exchange": "NASDAQ",
    "name": "First Trust Asia Pacific ex-Japan AlphaDEX Fund"
  },
  {
    "ticker": "FPAC",
    "exchange": "NYSE",
    "name": "Far Point Acquisition Corporation Class A"
  },
  {
    "ticker": "FPAC=",
    "exchange": "NYSE",
    "name": "Far Point Acquisition Corporation Units Cons of 1 Sh -A- + 1/3 Wt 01.06.25"
  },
  {
    "ticker": "FPAC+",
    "exchange": "NYSE",
    "name": "Far Point Acquisition Corporation Warrant 2018-01.06.2025 on Far Point Acq -A"
  },
  {
    "ticker": "FPAY",
    "exchange": "NASDAQ",
    "name": "FlexShopper Inc."
  },
  {
    "ticker": "FPE",
    "exchange": "NYSE ARCA",
    "name": "First Trust Preferred Securities & Income ETF"
  },
  {
    "ticker": "FPEI",
    "exchange": "NYSE ARCA",
    "name": "First Trust Institutional Preferred Securities & Income ETF"
  },
  {
    "ticker": "FPF",
    "exchange": "NYSE",
    "name": "First Trust Intermediate Duration Preferred & Income Fund"
  },
  {
    "ticker": "FPH",
    "exchange": "NYSE",
    "name": "Five Point Holdings LLC Class A"
  },
  {
    "ticker": "FPI",
    "exchange": "NYSE",
    "name": "Farmland Partners Inc"
  },
  {
    "ticker": "FPI-B",
    "exchange": "NYSE",
    "name": "Farmland Partners Inc 6.00 % Part Pfd Registered Shs Series B"
  },
  {
    "ticker": "FPL",
    "exchange": "NYSE",
    "name": "First Trust New Opportunities MLP & Energy Fund"
  },
  {
    "ticker": "FPRX",
    "exchange": "NASDAQ",
    "name": "Five Prime Therapeutics Inc."
  },
  {
    "ticker": "FPX",
    "exchange": "NYSE ARCA",
    "name": "First Trust US Equity Opportunities ETF"
  },
  {
    "ticker": "FPXE",
    "exchange": "NASDAQ",
    "name": "First Trust IPOX Europe Equity Opportunities ETF"
  },
  {
    "ticker": "FPXI",
    "exchange": "NASDAQ",
    "name": "First Trust International Equity Opportunities ETF"
  },
  {
    "ticker": "FQAL",
    "exchange": "NYSE ARCA",
    "name": "Fidelity Quality Factor ETF"
  },
  {
    "ticker": "FR",
    "exchange": "NYSE",
    "name": "First Industrial Realty Trust Inc."
  },
  {
    "ticker": "FRA",
    "exchange": "NYSE",
    "name": "Blackrock Floating Rate Income Strategies Fund Inc"
  },
  {
    "ticker": "FRAF",
    "exchange": "NASDAQ",
    "name": "Franklin Financial Services Corporation"
  },
  {
    "ticker": "FRAK",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Unconventional Oil & Gas ETF"
  },
  {
    "ticker": "FRAN",
    "exchange": "NASDAQ",
    "name": "Francesca's Holdings Corporation"
  },
  {
    "ticker": "FRBA",
    "exchange": "NASDAQ",
    "name": "First Bank"
  },
  {
    "ticker": "FRBK",
    "exchange": "NASDAQ",
    "name": "Republic First Bancorp Inc."
  },
  {
    "ticker": "FRC",
    "exchange": "NYSE",
    "name": "First Republic Bank"
  },
  {
    "ticker": "FRC-F",
    "exchange": "NYSE",
    "name": "First Republic Bank Deposit Shs Repr 1/40th 5.70 % Non-Cum Perp Pfd Shs Series F"
  },
  {
    "ticker": "FRC-G",
    "exchange": "NYSE",
    "name": "First Republic Bank Deposit Shs Repr 1/40th 5 1/2 % Non-Cum Perp Pfd Shs Series G"
  },
  {
    "ticker": "FRC-H",
    "exchange": "NYSE",
    "name": "First Republic Bank Deposit Shs Repr 1/40th Non Cum Perp Pfd Shs Series H"
  },
  {
    "ticker": "FRC-I",
    "exchange": "NYSE",
    "name": "First Republic Bank Deposit Shs Repr 1/40th Red Perp Pfd Shs Series I"
  },
  {
    "ticker": "FRC-J",
    "exchange": "NYSE",
    "name": "First Republic Bank Depositary Shs Repr 1/40th Non-Cum Red Perp Pfd Shs Series J"
  },
  {
    "ticker": "FRD",
    "exchange": "NYSE American",
    "name": "Friedman Industries Incorporated"
  },
  {
    "ticker": "FRDM",
    "exchange": "Cboe BZX",
    "name": "Freedom 100 Emerging Markets ETF"
  },
  {
    "ticker": "FREE",
    "exchange": "NASDAQ",
    "name": "Whole Earth Brands Inc Class A"
  },
  {
    "ticker": "FREEW",
    "exchange": "NASDAQ",
    "name": "Whole Earth Brands Inc Warrant 2020- 25.06.25 on Whl Earth Brnd"
  },
  {
    "ticker": "FREL",
    "exchange": "NYSE ARCA",
    "name": "Fidelity MSCI Real Estate Index ETF"
  },
  {
    "ticker": "FREQ",
    "exchange": "NASDAQ",
    "name": "Frequency Therapeutics Inc."
  },
  {
    "ticker": "FRG",
    "exchange": "NASDAQ",
    "name": "Franchise Group Inc. Class A"
  },
  {
    "ticker": "FRGI",
    "exchange": "NASDAQ",
    "name": "Fiesta Restaurant Group Inc."
  },
  {
    "ticker": "FRHC",
    "exchange": "NASDAQ",
    "name": "Freedom Holding Corp."
  },
  {
    "ticker": "FRI",
    "exchange": "NYSE ARCA",
    "name": "First Trust S&P REIT Index Fund"
  },
  {
    "ticker": "FRLG",
    "exchange": "NYSE ARCA",
    "name": "Large Cap Growth Index-Linked ETNs"
  },
  {
    "ticker": "FRLN",
    "exchange": "NASDAQ",
    "name": "Freeline Therapeutics Holdings PLC Sponsored ADR"
  },
  {
    "ticker": "FRME",
    "exchange": "NASDAQ",
    "name": "First Merchants Corporation"
  },
  {
    "ticker": "FRO",
    "exchange": "NYSE",
    "name": "Frontline Ltd."
  },
  {
    "ticker": "FRPH",
    "exchange": "NASDAQ",
    "name": "FRP Holdings Inc"
  },
  {
    "ticker": "FRPT",
    "exchange": "NASDAQ",
    "name": "Freshpet Inc"
  },
  {
    "ticker": "FRSX",
    "exchange": "NASDAQ",
    "name": "Foresight Autonomous Holdings Ltd Sponsored ADR"
  },
  {
    "ticker": "FRT",
    "exchange": "NYSE",
    "name": "Federal Realty Investment Trust"
  },
  {
    "ticker": "FRT-C",
    "exchange": "NYSE",
    "name": "Federal Realty Investment Trust Deposit Shs Repr 1/1000th 5 % Cum Perp Red Pfd Registered Sh Series C"
  },
  {
    "ticker": "FRTA",
    "exchange": "NASDAQ",
    "name": "Forterra Inc."
  },
  {
    "ticker": "FSBW",
    "exchange": "NASDAQ",
    "name": "FS Bancorp Inc."
  },
  {
    "ticker": "FSD",
    "exchange": "NYSE",
    "name": "First Trust High Income Long/Short Fund"
  },
  {
    "ticker": "FSDC",
    "exchange": "NASDAQ",
    "name": "FS Development Corp. Class A"
  },
  {
    "ticker": "FSEA",
    "exchange": "NASDAQ",
    "name": "First Seacoast Bancorp"
  },
  {
    "ticker": "FSFG",
    "exchange": "NASDAQ",
    "name": "First Savings Financial Group Inc."
  },
  {
    "ticker": "FSI",
    "exchange": "NYSE American",
    "name": "Flexible Solutions International Inc"
  },
  {
    "ticker": "FSK",
    "exchange": "NYSE",
    "name": "FS KKR Capital Corp."
  },
  {
    "ticker": "FSKR",
    "exchange": "NYSE",
    "name": "FS KKR Capital Corp. II"
  },
  {
    "ticker": "FSLF",
    "exchange": "NYSE",
    "name": "First Eagle Senior Loan Fund"
  },
  {
    "ticker": "FSLR",
    "exchange": "NASDAQ",
    "name": "First Solar Inc."
  },
  {
    "ticker": "FSLY",
    "exchange": "NYSE",
    "name": "Fastly Inc. Class A"
  },
  {
    "ticker": "FSM",
    "exchange": "NYSE",
    "name": "Fortuna Silver Mines Inc."
  },
  {
    "ticker": "FSMB",
    "exchange": "NYSE ARCA",
    "name": "First Trust Short Duration Managed Municipal ETF"
  },
  {
    "ticker": "FSMD",
    "exchange": "NYSE ARCA",
    "name": "Fidelity Small-Mid Factor ETF"
  },
  {
    "ticker": "FSP",
    "exchange": "NYSE American",
    "name": "Franklin Street Properties Corp."
  },
  {
    "ticker": "FSRV",
    "exchange": "NASDAQ",
    "name": "FinServ Acquisition Corp Class A"
  },
  {
    "ticker": "FSRVU",
    "exchange": "NASDAQ",
    "name": "FinServ Acquisition Corp Units Cons of 1 Sh A + 1/2 Wt26"
  },
  {
    "ticker": "FSRVW",
    "exchange": "NASDAQ",
    "name": "FinServ Acquisition Corp Warrant 2019-31.12.26 on FinServ Acqn A"
  },
  {
    "ticker": "FSS",
    "exchange": "NYSE",
    "name": "Federal Signal Corporation"
  },
  {
    "ticker": "FST=",
    "exchange": "NYSE",
    "name": "FAST Acquisition Corp. Units Cons of 1 Sh -A- + 1/2 Wt"
  },
  {
    "ticker": "FSTA",
    "exchange": "NYSE ARCA",
    "name": "Fidelity MSCI Consumer Staples Index ETF"
  },
  {
    "ticker": "FSTR",
    "exchange": "NASDAQ",
    "name": "L. B. Foster Company"
  },
  {
    "ticker": "FSV",
    "exchange": "NASDAQ",
    "name": "FirstService Corp"
  },
  {
    "ticker": "FSZ",
    "exchange": "NASDAQ",
    "name": "First Trust Switzerland AlphaDEX Fund"
  },
  {
    "ticker": "FT",
    "exchange": "NYSE",
    "name": "Franklin Universal Trust"
  },
  {
    "ticker": "FTA",
    "exchange": "NASDAQ",
    "name": "First Trust Large Cap Value AlphaDEX Fund"
  },
  {
    "ticker": "FTAC",
    "exchange": "NASDAQ",
    "name": "FinTech Acquisition Corp. III Class A"
  },
  {
    "ticker": "FTACU",
    "exchange": "NASDAQ",
    "name": "FinTech Acquisition Corp. III Unit Cons of 1 Sh -A- + 1/2 Wt 01.12.23"
  },
  {
    "ticker": "FTACW",
    "exchange": "NASDAQ",
    "name": "FinTech Acquisition Corp III Warrant 2018-01.12.23 on FinTech Acqn"
  },
  {
    "ticker": "FTAG",
    "exchange": "NASDAQ",
    "name": "First Trust Indxx Global Agriculture ETF"
  },
  {
    "ticker": "FTAI",
    "exchange": "NYSE",
    "name": "Fortress Transportation & Infrastructure Investors LLC"
  },
  {
    "ticker": "FTAI-A",
    "exchange": "NYSE",
    "name": "Fortress Transportation and Infrastructure Investors LLC Cum Red Perp Pfd Registered Shs Series A"
  },
  {
    "ticker": "FTAI-B",
    "exchange": "NYSE",
    "name": "Fortress Transportation and Infrastructure Investors LLC Cum Red Perp Pfd Registered Shs Series B"
  },
  {
    "ticker": "FTC",
    "exchange": "NASDAQ",
    "name": "First Trust Large Cap Growth AlphaDEX Fund"
  },
  {
    "ticker": "FTCH",
    "exchange": "NYSE",
    "name": "Farfetch Limited Class A"
  },
  {
    "ticker": "FTCS",
    "exchange": "NASDAQ",
    "name": "First Trust Capital Strength ETF"
  },
  {
    "ticker": "FTDR",
    "exchange": "NASDAQ",
    "name": "frontdoor Inc."
  },
  {
    "ticker": "FTEC",
    "exchange": "NYSE ARCA",
    "name": "Fidelity MSCI Information Technology Index ETF"
  },
  {
    "ticker": "FTEK",
    "exchange": "NASDAQ",
    "name": "Fuel Tech Inc."
  },
  {
    "ticker": "FTF",
    "exchange": "NYSE American",
    "name": "Franklin Limited Duration Income Trust"
  },
  {
    "ticker": "FTFT",
    "exchange": "NASDAQ",
    "name": "Future FinTech Group Inc."
  },
  {
    "ticker": "FTGC",
    "exchange": "NASDAQ",
    "name": "First Trust Global Tactical Commodity Strategy Fund"
  },
  {
    "ticker": "FTHI",
    "exchange": "NASDAQ",
    "name": "First Trust BuyWrite Income ETF"
  },
  {
    "ticker": "FTHM",
    "exchange": "NASDAQ",
    "name": "Fathom Holdings Inc"
  },
  {
    "ticker": "FTHY",
    "exchange": "NYSE",
    "name": "FT Corp High Yield Opportunitties 2027 Term Fund"
  },
  {
    "ticker": "FTI",
    "exchange": "NYSE",
    "name": "TechnipFMC Plc"
  },
  {
    "ticker": "FTK",
    "exchange": "NYSE",
    "name": "Flotek Industries Inc."
  },
  {
    "ticker": "FTLB",
    "exchange": "NASDAQ",
    "name": "First Trust Hedged BuyWrite Income ETF"
  },
  {
    "ticker": "FTLS",
    "exchange": "NYSE ARCA",
    "name": "First Trust Long/Short Equity ETF"
  },
  {
    "ticker": "FTNT",
    "exchange": "NASDAQ",
    "name": "Fortinet Inc."
  },
  {
    "ticker": "FTRI",
    "exchange": "NASDAQ",
    "name": "First Trust Indxx Global Natural Resources Income ETF"
  },
  {
    "ticker": "FTS",
    "exchange": "NYSE",
    "name": "Fortis Inc."
  },
  {
    "ticker": "FTSD",
    "exchange": "NYSE ARCA",
    "name": "Franklin Liberty Short Duration U.S. Government ETF"
  },
  {
    "ticker": "FTSI",
    "exchange": "NYSE American",
    "name": "FTS International Inc."
  },
  {
    "ticker": "FTSL",
    "exchange": "NASDAQ",
    "name": "First Trust Senior Loan Fund"
  },
  {
    "ticker": "FTSM",
    "exchange": "NASDAQ",
    "name": "First Trust Enhanced Short Maturity ETF"
  },
  {
    "ticker": "FTV",
    "exchange": "NYSE",
    "name": "Fortive Corp."
  },
  {
    "ticker": "FTV-A",
    "exchange": "NYSE",
    "name": "Fortive Corp. Cum Conv Pfd Registered Shs 2018-01.07.21 Series A"
  },
  {
    "ticker": "FTXD",
    "exchange": "NASDAQ",
    "name": "First Trust NASDAQdaq Retail ETF"
  },
  {
    "ticker": "FTXG",
    "exchange": "NASDAQ",
    "name": "First Trust NASDAQdaq Food & Beverage ETF"
  },
  {
    "ticker": "FTXH",
    "exchange": "NASDAQ",
    "name": "First Trust NASDAQdaq Pharmaceuticals ETF"
  },
  {
    "ticker": "FTXL",
    "exchange": "NASDAQ",
    "name": "First Trust NASDAQdaq Semiconductor ETF"
  },
  {
    "ticker": "FTXN",
    "exchange": "NASDAQ",
    "name": "First Trust NASDAQdaq Oil & Gas ETF"
  },
  {
    "ticker": "FTXO",
    "exchange": "NASDAQ",
    "name": "First Trust NASDAQdaq Bank ETF"
  },
  {
    "ticker": "FTXR",
    "exchange": "NASDAQ",
    "name": "First Trust NASDAQdaq Transportation ETF"
  },
  {
    "ticker": "FUD",
    "exchange": "NYSE ARCA",
    "name": "ETRACS CMCI Food Total Return ETN"
  },
  {
    "ticker": "FUE",
    "exchange": "NYSE ARCA",
    "name": "ELEMENTS Linked to the ICE BofAML Commodity Index eXtra Biofuels Total Return"
  },
  {
    "ticker": "FUL",
    "exchange": "NYSE",
    "name": "H.B. Fuller Company"
  },
  {
    "ticker": "FULC",
    "exchange": "NASDAQ",
    "name": "Fulcrum Therapeutics Inc."
  },
  {
    "ticker": "FULT",
    "exchange": "NASDAQ",
    "name": "Fulton Financial Corporation"
  },
  {
    "ticker": "FUMB",
    "exchange": "NYSE ARCA",
    "name": "First Trust Ultra Short Duration Municipal ETF"
  },
  {
    "ticker": "FUN",
    "exchange": "NYSE",
    "name": "Cedar Fair L.P."
  },
  {
    "ticker": "FUNC",
    "exchange": "NASDAQ",
    "name": "First United Corporation"
  },
  {
    "ticker": "FUND",
    "exchange": "NASDAQ",
    "name": "Sprott Focus Trust Inc"
  },
  {
    "ticker": "FUNL",
    "exchange": "Cboe BZX",
    "name": "CornerCap Fundametrics Large-Cap ETF"
  },
  {
    "ticker": "FUSB",
    "exchange": "NASDAQ",
    "name": "First US Bancshares Inc."
  },
  {
    "ticker": "FUSE",
    "exchange": "NYSE",
    "name": "Fusion Acquisition Corp. Class A"
  },
  {
    "ticker": "FUSE=",
    "exchange": "NYSE",
    "name": "Fusion Acquisition Corp Units Cons of 1 Sh A + 1/2 Wt 01.06.27"
  },
  {
    "ticker": "FUSE+",
    "exchange": "NYSE",
    "name": "Fusion Acquisition Corp Warrant 2020- 01.06.27 on Fusion Acqn"
  },
  {
    "ticker": "FUSN",
    "exchange": "NASDAQ",
    "name": "Fusion Pharmaceuticals Inc"
  },
  {
    "ticker": "FUT",
    "exchange": "Cboe BZX",
    "name": "ProShares Managed Futures Strategy ETF"
  },
  {
    "ticker": "FUTU",
    "exchange": "NASDAQ",
    "name": "Futu Holdings Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "FUTY",
    "exchange": "NYSE ARCA",
    "name": "Fidelity MSCI Utilities Index ETF"
  },
  {
    "ticker": "FUV",
    "exchange": "NASDAQ",
    "name": "Arcimoto Inc."
  },
  {
    "ticker": "FV",
    "exchange": "NASDAQ",
    "name": "First Trust Dorsey Wright Focus 5 ETF"
  },
  {
    "ticker": "FVAC",
    "exchange": "NYSE",
    "name": "Fortress Value Acquisition Corp. Class A"
  },
  {
    "ticker": "FVAC=",
    "exchange": "NYSE",
    "name": "Fortress Value Acquisition Corp. Units Cons of 1 Sh -A + 1/3 Wt"
  },
  {
    "ticker": "FVAC+",
    "exchange": "NYSE",
    "name": "Fortress Value Acquisition Corp. Warrants 2020- on Fortress Value"
  },
  {
    "ticker": "FVAL",
    "exchange": "NYSE ARCA",
    "name": "Fidelity Value Factor ETF"
  },
  {
    "ticker": "FVC",
    "exchange": "NASDAQ",
    "name": "First Trust Dorsey Wright Dynamic Focus 5 ETF"
  },
  {
    "ticker": "FVCB",
    "exchange": "NASDAQ",
    "name": "FVCBankcorp Inc."
  },
  {
    "ticker": "FVD",
    "exchange": "NYSE ARCA",
    "name": "First Trust Value Line Dividend Index Fund"
  },
  {
    "ticker": "FVE",
    "exchange": "NASDAQ",
    "name": "Five Star Senior Living Inc"
  },
  {
    "ticker": "FVL",
    "exchange": "NYSE ARCA",
    "name": "First Trust Value Line 100 ETF"
  },
  {
    "ticker": "FVRR",
    "exchange": "NYSE",
    "name": "Fiverr International Ltd."
  },
  {
    "ticker": "FWDB",
    "exchange": "NYSE ARCA",
    "name": "AdvisorShares FolioBeyond Smart Core Bond ETF"
  },
  {
    "ticker": "FWONA",
    "exchange": "NASDAQ",
    "name": "Liberty Media Corporation Series A Liberty Formula One"
  },
  {
    "ticker": "FWONK",
    "exchange": "NASDAQ",
    "name": "Liberty Media Corporation Series C Liberty Formula One"
  },
  {
    "ticker": "FWP",
    "exchange": "NASDAQ",
    "name": "Forward Pharma A/S Sponsored ADR"
  },
  {
    "ticker": "FWRD",
    "exchange": "NASDAQ",
    "name": "Forward Air Corporation"
  },
  {
    "ticker": "FXA",
    "exchange": "NYSE ARCA",
    "name": "Invesco CurrencyShares Australian Dollar Trust"
  },
  {
    "ticker": "FXB",
    "exchange": "NYSE ARCA",
    "name": "Invesco CurrencyShares British Pound Sterling Trust"
  },
  {
    "ticker": "FXC",
    "exchange": "NYSE ARCA",
    "name": "Invesco CurrencyShares Canadian Dollar Trust"
  },
  {
    "ticker": "FXD",
    "exchange": "NYSE ARCA",
    "name": "First Trust Consumer Discretionary AlphaDEX Fund"
  },
  {
    "ticker": "FXE",
    "exchange": "NYSE ARCA",
    "name": "Invesco CurrencyShares Euro Trust"
  },
  {
    "ticker": "FXF",
    "exchange": "NYSE ARCA",
    "name": "Invesco CurrencyShares Swiss Franc Trust"
  },
  {
    "ticker": "FXG",
    "exchange": "NYSE ARCA",
    "name": "First Trust Consumer Staples AlphaDEX Fund"
  },
  {
    "ticker": "FXH",
    "exchange": "NYSE ARCA",
    "name": "First Trust Health Care AlphaDEX Fund"
  },
  {
    "ticker": "FXI",
    "exchange": "NYSE ARCA",
    "name": "iShares China Large-Cap ETF"
  },
  {
    "ticker": "FXL",
    "exchange": "NYSE ARCA",
    "name": "First Trust Technology AlphaDEX Fund"
  },
  {
    "ticker": "FXN",
    "exchange": "NYSE ARCA",
    "name": "First Trust Energy AlphaDEX Fund"
  },
  {
    "ticker": "FXNC",
    "exchange": "NASDAQ",
    "name": "First National Corporation"
  },
  {
    "ticker": "FXO",
    "exchange": "NYSE ARCA",
    "name": "First Trust Financials AlphaDEX Fund"
  },
  {
    "ticker": "FXP",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort FTSE China 50"
  },
  {
    "ticker": "FXR",
    "exchange": "NYSE ARCA",
    "name": "First Trust Industrials/Producer Durables AlphaDEX Fund"
  },
  {
    "ticker": "FXU",
    "exchange": "NYSE ARCA",
    "name": "First Trust Utilities AlphaDEX Fund"
  },
  {
    "ticker": "FXY",
    "exchange": "NYSE ARCA",
    "name": "Invesco Currencyshares Japanese Yen Trust"
  },
  {
    "ticker": "FXZ",
    "exchange": "NYSE ARCA",
    "name": "First Trust Materials AlphaDEX Fund"
  },
  {
    "ticker": "FYC",
    "exchange": "NASDAQ",
    "name": "First Trust Small Cap Growth AlphaDEX Fund"
  },
  {
    "ticker": "FYLD",
    "exchange": "Cboe BZX",
    "name": "Cambria Foreign Shareholder Yield ETF"
  },
  {
    "ticker": "FYT",
    "exchange": "NASDAQ",
    "name": "First Trust Small Cap Value AlphaDEX Fund"
  },
  {
    "ticker": "FYX",
    "exchange": "NASDAQ",
    "name": "First Trust Small Cap Core AlphaDEX Fund"
  },
  {
    "ticker": "G",
    "exchange": "NYSE",
    "name": "Genpact Limited"
  },
  {
    "ticker": "GAA",
    "exchange": "Cboe BZX",
    "name": "Cambria Global Asset Allocation ETF"
  },
  {
    "ticker": "GAB",
    "exchange": "NYSE",
    "name": "Gabelli Equity Trust Inc"
  },
  {
    "ticker": "GAB-G",
    "exchange": "NYSE",
    "name": "Gabelli Equity Trust Inc Cum Pfd Shs Series G"
  },
  {
    "ticker": "GAB-H",
    "exchange": "NYSE",
    "name": "Gabelli Equity Trust Inc Cum Pfd Shs Series H"
  },
  {
    "ticker": "GAB-J",
    "exchange": "NYSE",
    "name": "Gabelli Equity Trust Inc Cum Pfd Shs Series J"
  },
  {
    "ticker": "GAB-K",
    "exchange": "NYSE",
    "name": "Gabelli Equity Trust Inc 5 % Cum Red Perp Pfd Registered Shs Series K"
  },
  {
    "ticker": "GABC",
    "exchange": "NASDAQ",
    "name": "German American Bancorp Inc."
  },
  {
    "ticker": "GAIA",
    "exchange": "NASDAQ",
    "name": "Gaia Inc. Class A"
  },
  {
    "ticker": "GAIN",
    "exchange": "NASDAQ",
    "name": "Gladstone Investment Corporation"
  },
  {
    "ticker": "GAINL",
    "exchange": "NASDAQ",
    "name": "Gladstone Investment Corp 6.375 % Cum Red Term Pfd Registered Shs 2018-31.08.25 Series E"
  },
  {
    "ticker": "GAINM",
    "exchange": "NASDAQ",
    "name": "Gladstone Investment Corp 6 1/4% Cum Term Pfd Shs Series D"
  },
  {
    "ticker": "GAL",
    "exchange": "NYSE ARCA",
    "name": "SPDR SSgA Global Allocation ETF"
  },
  {
    "ticker": "GALT",
    "exchange": "NASDAQ",
    "name": "Galectin Therapeutics Inc."
  },
  {
    "ticker": "GAM",
    "exchange": "NYSE",
    "name": "General American Investors Co Inc"
  },
  {
    "ticker": "GAM-B",
    "exchange": "NYSE",
    "name": "General American Investors Co Inc 5.95 % Cum.Pfd Shs Series B"
  },
  {
    "ticker": "GAMR",
    "exchange": "NYSE ARCA",
    "name": "Wedbush ETFMG Video Game Tech ETF"
  },
  {
    "ticker": "GAN",
    "exchange": "NASDAQ",
    "name": "GAN Limited"
  },
  {
    "ticker": "GARS",
    "exchange": "NASDAQ",
    "name": "Garrison Capital Inc."
  },
  {
    "ticker": "GASS",
    "exchange": "NASDAQ",
    "name": "StealthGas Inc."
  },
  {
    "ticker": "GATX",
    "exchange": "NYSE",
    "name": "GATX Corporation"
  },
  {
    "ticker": "GAU",
    "exchange": "NYSE American",
    "name": "Galiano Gold Inc."
  },
  {
    "ticker": "GAZ",
    "exchange": "NYSE ARCA",
    "name": "iPath Series B Bloomberg Natural Gas Subindex Total Return ETN"
  },
  {
    "ticker": "GBAB",
    "exchange": "NYSE",
    "name": "Guggenheim Taxable Municipal Managed Duration Trust of Benef Interest"
  },
  {
    "ticker": "GBCI",
    "exchange": "NASDAQ",
    "name": "Glacier Bancorp Inc."
  },
  {
    "ticker": "GBDC",
    "exchange": "NASDAQ",
    "name": "Golub Capital BDC Inc."
  },
  {
    "ticker": "GBDV",
    "exchange": "NYSE ARCA",
    "name": "Global Beta Smart Income ETF"
  },
  {
    "ticker": "GBF",
    "exchange": "NYSE ARCA",
    "name": "iShares Government/Credit Bond ETF"
  },
  {
    "ticker": "GBGR",
    "exchange": "NYSE ARCA",
    "name": "Global Beta Momentum-Growth ETF"
  },
  {
    "ticker": "GBIL",
    "exchange": "NYSE ARCA",
    "name": "Goldman Sachs Access Treasury 0-1 Year ETF"
  },
  {
    "ticker": "GBIO",
    "exchange": "NASDAQ",
    "name": "Generation Bio Co."
  },
  {
    "ticker": "GBL",
    "exchange": "NYSE",
    "name": "GAMCO Investors Inc. Class A"
  },
  {
    "ticker": "GBLI",
    "exchange": "NASDAQ",
    "name": "Global Indemnity Ltd. Class A"
  },
  {
    "ticker": "GBLIL",
    "exchange": "NASDAQ",
    "name": "Global Indemnity Ltd Notes -15.04.47"
  },
  {
    "ticker": "GBLO",
    "exchange": "NYSE ARCA",
    "name": "Global Beta Low Beta ETF"
  },
  {
    "ticker": "GBR",
    "exchange": "NYSE American",
    "name": "New Concept Energy Inc."
  },
  {
    "ticker": "GBT",
    "exchange": "NASDAQ",
    "name": "Global Blood Therapeutics Inc"
  },
  {
    "ticker": "GBUG",
    "exchange": "NYSE ARCA",
    "name": "iPath Gold Exchange-Traded Notes"
  },
  {
    "ticker": "GBUY",
    "exchange": "NYSE ARCA",
    "name": "Goldman Sachs New Age Consumer ETF"
  },
  {
    "ticker": "GBX",
    "exchange": "NYSE",
    "name": "Greenbrier Companies Inc."
  },
  {
    "ticker": "GCBC",
    "exchange": "NASDAQ",
    "name": "Greene County Bancorp Inc."
  },
  {
    "ticker": "GCC",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Continuous Commodity Index Fund"
  },
  {
    "ticker": "GCE",
    "exchange": "NYSE ARCA",
    "name": "Claymore CEF Index-Linked GS Connect ETN"
  },
  {
    "ticker": "GCI",
    "exchange": "NYSE",
    "name": "Gannett Co. Inc."
  },
  {
    "ticker": "GCO",
    "exchange": "NYSE",
    "name": "Genesco Inc."
  },
  {
    "ticker": "GCOW",
    "exchange": "Cboe BZX",
    "name": "Pacer Global Cash Cows Dividend ETF"
  },
  {
    "ticker": "GCP",
    "exchange": "NYSE",
    "name": "GCP Applied Technologies Inc."
  },
  {
    "ticker": "GCV",
    "exchange": "NYSE",
    "name": "Gabelli Convertible and Income Securities Fund Inc"
  },
  {
    "ticker": "GD",
    "exchange": "NYSE",
    "name": "General Dynamics Corporation"
  },
  {
    "ticker": "GDAT",
    "exchange": "NYSE ARCA",
    "name": "Goldman Sachs Data-Driven World ETF"
  },
  {
    "ticker": "GDDY",
    "exchange": "NYSE",
    "name": "GoDaddy Inc. Class A"
  },
  {
    "ticker": "GDEN",
    "exchange": "NASDAQ",
    "name": "Golden Entertainment Inc."
  },
  {
    "ticker": "GDL",
    "exchange": "NYSE",
    "name": "GDL Fund"
  },
  {
    "ticker": "GDL-C",
    "exchange": "NYSE",
    "name": "GDL Fund Cum Red Perp Pfd Registered Shs Series C"
  },
  {
    "ticker": "GDMA",
    "exchange": "NYSE ARCA",
    "name": "Gadsden Dynamic Multi-Asset ETF"
  },
  {
    "ticker": "GDNA",
    "exchange": "NYSE ARCA",
    "name": "Goldman Sachs Human Evolution ETF"
  },
  {
    "ticker": "GDO",
    "exchange": "NYSE",
    "name": "Western Asset Global Corp Defined Opportunity Fund Inc"
  },
  {
    "ticker": "GDOT",
    "exchange": "NYSE",
    "name": "Green Dot Corporation Class A"
  },
  {
    "ticker": "GDP",
    "exchange": "NYSE American",
    "name": "Goodrich Petroleum Corporation"
  },
  {
    "ticker": "GDS",
    "exchange": "NASDAQ",
    "name": "GDS Holdings Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "GDV",
    "exchange": "NYSE",
    "name": "Gabelli Dividend & Income Trust"
  },
  {
    "ticker": "GDV-A",
    "exchange": "NYSE",
    "name": "Gabelli Dividend & Income Trust 5 7/8 % Cum Pfd Shs Series A"
  },
  {
    "ticker": "GDV-G",
    "exchange": "NYSE",
    "name": "Gabelli Dividend & Income Trust 5 1/4% Cum Pfd Shs Series G"
  },
  {
    "ticker": "GDV-H",
    "exchange": "NYSE",
    "name": "Gabelli Dividend & Income Trust 5.375 % Cum Red Pfd Registered Shs Series H"
  },
  {
    "ticker": "GDVD",
    "exchange": "Cboe BZX",
    "name": "Principal Active Global Dividend Income ETF"
  },
  {
    "ticker": "GDX",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Gold Miners ETF"
  },
  {
    "ticker": "GDXJ",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Junior Gold Miners ETF"
  },
  {
    "ticker": "GDYN",
    "exchange": "NASDAQ",
    "name": "Grid Dynamics Holdings Inc. Class A"
  },
  {
    "ticker": "GDYNW",
    "exchange": "NASDAQ",
    "name": "Grid Dynamics Holdings Inc. Warrant 2020-05.03.25 on Grid Dyn Hldg-A"
  },
  {
    "ticker": "GE",
    "exchange": "NYSE",
    "name": "General Electric Company"
  },
  {
    "ticker": "GEC",
    "exchange": "NASDAQ",
    "name": "Great Elm Capital Group Inc."
  },
  {
    "ticker": "GECC",
    "exchange": "NASDAQ",
    "name": "Great Elm Capital Corp"
  },
  {
    "ticker": "GECCL",
    "exchange": "NASDAQ",
    "name": "Great Elm Capital Corp 6.5 % Notes 2017-18.09.22"
  },
  {
    "ticker": "GECCM",
    "exchange": "NASDAQ",
    "name": "Great Elm Capital Corp 6.75 % Notes 2018-31.01.25"
  },
  {
    "ticker": "GECCN",
    "exchange": "NASDAQ",
    "name": "Great Elm Capital Corp 6.5 % Notes 2019-30.06.24"
  },
  {
    "ticker": "GEF",
    "exchange": "NYSE",
    "name": "Greif Class A"
  },
  {
    "ticker": "GEF.B",
    "exchange": "NYSE",
    "name": "Greif Class B"
  },
  {
    "ticker": "GEL",
    "exchange": "NYSE",
    "name": "Genesis Energy L.P."
  },
  {
    "ticker": "GEM",
    "exchange": "NYSE ARCA",
    "name": "Goldman Sachs ActiveBeta Emerging Markets Equity ETF"
  },
  {
    "ticker": "GEN",
    "exchange": "NYSE",
    "name": "Genesis Healthcare Inc Class A"
  },
  {
    "ticker": "GENC",
    "exchange": "NASDAQ",
    "name": "Gencor Industries Inc."
  },
  {
    "ticker": "GENE",
    "exchange": "NASDAQ",
    "name": "Genetic Technologies Limited Sponsored ADR"
  },
  {
    "ticker": "GENY",
    "exchange": "NASDAQ",
    "name": "Principal Millennials Index ETF"
  },
  {
    "ticker": "GEO",
    "exchange": "NYSE",
    "name": "GEO Group Inc"
  },
  {
    "ticker": "GEOS",
    "exchange": "NASDAQ",
    "name": "Geospace Technologies Corporation"
  },
  {
    "ticker": "GER",
    "exchange": "NYSE",
    "name": "Goldman Sachs MLP and Energy Renaissance Fund"
  },
  {
    "ticker": "GERM",
    "exchange": "NYSE ARCA",
    "name": "ETFMG Treatments Testing and Advancements ETF"
  },
  {
    "ticker": "GERN",
    "exchange": "NASDAQ",
    "name": "Geron Corporation"
  },
  {
    "ticker": "GES",
    "exchange": "NYSE",
    "name": "Guess? Inc."
  },
  {
    "ticker": "GEVO",
    "exchange": "NASDAQ",
    "name": "Gevo Inc."
  },
  {
    "ticker": "GF",
    "exchange": "NYSE",
    "name": "New Germany Fund Inc"
  },
  {
    "ticker": "GFED",
    "exchange": "NASDAQ",
    "name": "Guaranty Federal Bancshares Inc."
  },
  {
    "ticker": "GFF",
    "exchange": "NYSE",
    "name": "Griffon Corporation"
  },
  {
    "ticker": "GFI",
    "exchange": "NYSE",
    "name": "Gold Fields Limited Sponsored ADR"
  },
  {
    "ticker": "GFIN",
    "exchange": "NYSE ARCA",
    "name": "Goldman Sachs Finance Reimagined ETF"
  },
  {
    "ticker": "GFL",
    "exchange": "NYSE",
    "name": "GFL Environmental Inc"
  },
  {
    "ticker": "GFLU",
    "exchange": "NYSE",
    "name": "GFL Environmental Inc Tangible Equity Units Cons of Note 15.03.25 + 1 PC 15.03.23"
  },
  {
    "ticker": "GFN",
    "exchange": "NASDAQ",
    "name": "General Finance Corporation"
  },
  {
    "ticker": "GFNCP",
    "exchange": "NASDAQ",
    "name": "General Finance Corp 9 % Cum Red Perp Pfd Shs Series C"
  },
  {
    "ticker": "GFNSL",
    "exchange": "NASDAQ",
    "name": "General Finance Corp 8 1/8 % Notes 2014-31.7.21 Sr"
  },
  {
    "ticker": "GFY",
    "exchange": "NYSE",
    "name": "Western Asset Variable Rate Strategic Fund Inc"
  },
  {
    "ticker": "GGAL",
    "exchange": "NASDAQ",
    "name": "Grupo Financiero Galicia SA Sponsored ADR Class B"
  },
  {
    "ticker": "GGB",
    "exchange": "NYSE",
    "name": "Gerdau S.A. Sponsored ADR Pfd"
  },
  {
    "ticker": "GGG",
    "exchange": "NYSE",
    "name": "Graco Inc."
  },
  {
    "ticker": "GGM",
    "exchange": "NYSE",
    "name": "Guggenheim Credit Allocation Fund"
  },
  {
    "ticker": "GGN",
    "exchange": "NYSE American",
    "name": "GAMCO Global Gold. Natural Resources & Income Trust"
  },
  {
    "ticker": "GGN-B",
    "exchange": "NYSE American",
    "name": "GAMCO Global Gold Natural Resources & Income Trust 5 % Cum Pfd Series B"
  },
  {
    "ticker": "GGO",
    "exchange": "NYSE American",
    "name": "Gabelli Go Anywhere Trust Registered"
  },
  {
    "ticker": "GGO-A",
    "exchange": "NYSE American",
    "name": "Gabelli Go Anywhere Trust Cum Pfd Registered Shs Series A"
  },
  {
    "ticker": "GGT",
    "exchange": "NYSE",
    "name": "Gabelli Multimedia Trust Inc"
  },
  {
    "ticker": "GGT-E",
    "exchange": "NYSE",
    "name": "Gabelli Multimedia Trust Inc Cum Perp Red Pfd Registered Shs Series E"
  },
  {
    "ticker": "GGT-G",
    "exchange": "NYSE",
    "name": "Gabelli Multimedia Trust Inc Cum Pfd Registered Shs Series G"
  },
  {
    "ticker": "GGZ",
    "exchange": "NYSE",
    "name": "Gabelli Global Small and Mid Cap Value Trust of Benef Interest"
  },
  {
    "ticker": "GGZ-A",
    "exchange": "NYSE",
    "name": "Gabelli Global Small and Mid Cap Value Trust Cum Pfd Series A"
  },
  {
    "ticker": "GH",
    "exchange": "NASDAQ",
    "name": "Guardant Health Inc."
  },
  {
    "ticker": "GHC",
    "exchange": "NYSE",
    "name": "Graham Holdings Co."
  },
  {
    "ticker": "GHG",
    "exchange": "NYSE",
    "name": "GreenTree Hospitality Group Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "GHIV",
    "exchange": "NASDAQ",
    "name": "Gores Holdings IV Inc Class A"
  },
  {
    "ticker": "GHIVU",
    "exchange": "NASDAQ",
    "name": "Gores Holdings IV Inc. Units Cons of 1 Sh + 1/4 Wt 25"
  },
  {
    "ticker": "GHIVW",
    "exchange": "NASDAQ",
    "name": "Gores Holdings IV Inc Warrant 2019-24.01.25 on Gores Holdings IV"
  },
  {
    "ticker": "GHL",
    "exchange": "NYSE",
    "name": "Greenhill & Co. Inc."
  },
  {
    "ticker": "GHM",
    "exchange": "NYSE",
    "name": "Graham Corporation"
  },
  {
    "ticker": "GHSI",
    "exchange": "NASDAQ",
    "name": "Guardion Health Sciences Inc."
  },
  {
    "ticker": "GHY",
    "exchange": "NYSE",
    "name": "PGIM Global High Yield Fund Inc."
  },
  {
    "ticker": "GHYB",
    "exchange": "NYSE ARCA",
    "name": "Goldman Sachs Access High Yield Corporate Bond ETF"
  },
  {
    "ticker": "GHYG",
    "exchange": "Cboe BZX",
    "name": "iShares US & Intl High Yield Corp Bond ETF"
  },
  {
    "ticker": "GIB",
    "exchange": "NYSE",
    "name": "CGI Inc. Class A"
  },
  {
    "ticker": "GIFI",
    "exchange": "NASDAQ",
    "name": "Gulf Island Fabrication Inc."
  },
  {
    "ticker": "GIGB",
    "exchange": "NYSE ARCA",
    "name": "Goldman Sachs Access Investment Grade Corporate Bond ETF"
  },
  {
    "ticker": "GIGE",
    "exchange": "NASDAQ",
    "name": "SoFi Gig Economy ETF"
  },
  {
    "ticker": "GIGM",
    "exchange": "NASDAQ",
    "name": "Gigamedia Limited"
  },
  {
    "ticker": "GII",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Global Infrastructure ETF"
  },
  {
    "ticker": "GIII",
    "exchange": "NASDAQ",
    "name": "G-III Apparel Group Ltd."
  },
  {
    "ticker": "GIK",
    "exchange": "NYSE",
    "name": "GigCapital3 Inc."
  },
  {
    "ticker": "GIK=",
    "exchange": "NYSE",
    "name": "GigCapital3 Inc. Units Cons of 1 Sh + 3/4 Wt 2025"
  },
  {
    "ticker": "GIK+",
    "exchange": "NYSE",
    "name": "GigCapital3 Inc. Warrant 2020-18.05.25 on GigCapital3"
  },
  {
    "ticker": "GIL",
    "exchange": "NYSE",
    "name": "Gildan Activewear Inc."
  },
  {
    "ticker": "GILD",
    "exchange": "NASDAQ",
    "name": "Gilead Sciences Inc."
  },
  {
    "ticker": "GILT",
    "exchange": "NASDAQ",
    "name": "Gilat Satellite Networks Ltd."
  },
  {
    "ticker": "GIM",
    "exchange": "NYSE",
    "name": "Templeton Global Income Fund"
  },
  {
    "ticker": "GIS",
    "exchange": "NYSE",
    "name": "General Mills Inc."
  },
  {
    "ticker": "GIX",
    "exchange": "NYSE",
    "name": "GigCapital2 Inc."
  },
  {
    "ticker": "GIX^",
    "exchange": "NYSE",
    "name": "GigCapital2 Inc Rights 2019- For Shares"
  },
  {
    "ticker": "GIX=",
    "exchange": "NYSE",
    "name": "GigCapital2 Inc. Units Cons of 1 Sh + 1 Wt"
  },
  {
    "ticker": "GIX+",
    "exchange": "NYSE",
    "name": "GigCapital2 Inc Warrant 2019-28.02.26 on GigCapital2"
  },
  {
    "ticker": "GJH",
    "exchange": "NYSE",
    "name": "STRATS Trust for Allstate Corp Utd Sts Cellular Strats 6.375"
  },
  {
    "ticker": "GJO",
    "exchange": "NYSE",
    "name": "STRATS Trust for Allstate Corp Wal Mart Stores I Strt Ctf 05-4"
  },
  {
    "ticker": "GJP",
    "exchange": "NYSE",
    "name": "STRATS Trust for Allstate Corp For Dominion Res Strt Ctf 05-6"
  },
  {
    "ticker": "GJR",
    "exchange": "NYSE",
    "name": "STRATS Trust for Allstate Corp For Proctr&Gambl Ctf 2006-1"
  },
  {
    "ticker": "GJS",
    "exchange": "NYSE",
    "name": "STRATS Trust for Allstate Corp Goldman Sachs Gro Strats Ctf 33"
  },
  {
    "ticker": "GJT",
    "exchange": "NYSE",
    "name": "STRATS Trust for Allstate Corp Allstate Corp 06-3 Asset Bkd"
  },
  {
    "ticker": "GKOS",
    "exchange": "NYSE",
    "name": "Glaukos Corp"
  },
  {
    "ticker": "GL",
    "exchange": "NYSE",
    "name": "Globe Life Inc."
  },
  {
    "ticker": "GL-C",
    "exchange": "NYSE",
    "name": "Globe Life Inc. 6.125 % Debentures 2019-15.06.56"
  },
  {
    "ticker": "GLAD",
    "exchange": "NASDAQ",
    "name": "Gladstone Capital Corporation"
  },
  {
    "ticker": "GLADD",
    "exchange": "NASDAQ",
    "name": "Gladstone Capital Corp 6.125 % Notes 2018-01.11.23"
  },
  {
    "ticker": "GLADL",
    "exchange": "NASDAQ",
    "name": "Gladstone Capital Corp 5.375 % Notes 2019-01.11.24"
  },
  {
    "ticker": "GLBS",
    "exchange": "NASDAQ",
    "name": "Globus Maritime Limited"
  },
  {
    "ticker": "GLBZ",
    "exchange": "NASDAQ",
    "name": "Glen Burnie Bancorp"
  },
  {
    "ticker": "GLCN",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors China Growth Leaders ETF"
  },
  {
    "ticker": "GLD",
    "exchange": "NYSE ARCA",
    "name": "SPDR Gold Trust"
  },
  {
    "ticker": "GLDD",
    "exchange": "NASDAQ",
    "name": "Great Lakes Dredge & Dock Corporation"
  },
  {
    "ticker": "GLDI",
    "exchange": "NASDAQ",
    "name": "Credit Suisse X-Links Gold Shares Covered Call ETN"
  },
  {
    "ticker": "GLDM",
    "exchange": "NYSE ARCA",
    "name": "SPDR Gold MiniShares Trust"
  },
  {
    "ticker": "GLEO",
    "exchange": "NYSE",
    "name": "Galileo Acquisition Corp."
  },
  {
    "ticker": "GLEO=",
    "exchange": "NYSE",
    "name": "Galileo Acquisition Corp. Units Cons of 1 Sh + 1 Wt"
  },
  {
    "ticker": "GLEO+",
    "exchange": "NYSE",
    "name": "Galileo Acquisition Corp Warrant -31.10.26 on Galileo Acqn"
  },
  {
    "ticker": "GLG",
    "exchange": "NASDAQ",
    "name": "TD Holdings Inc."
  },
  {
    "ticker": "GLIBA",
    "exchange": "NASDAQ",
    "name": "GCI Liberty Inc. Class A"
  },
  {
    "ticker": "GLIBP",
    "exchange": "NASDAQ",
    "name": "GCI Liberty Inc. 5 % Cum Red Pfd Registered Shs 2018-2039 Series A"
  },
  {
    "ticker": "GLIF",
    "exchange": "NYSE ARCA",
    "name": "AGFiQ Global Infrastructure ETF"
  },
  {
    "ticker": "GLIN",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors India Growth Leaders ETF"
  },
  {
    "ticker": "GLL",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort Gold"
  },
  {
    "ticker": "GLMD",
    "exchange": "NASDAQ",
    "name": "Galmed Pharmaceuticals Ltd."
  },
  {
    "ticker": "GLNG",
    "exchange": "NASDAQ",
    "name": "Golar LNG Limited"
  },
  {
    "ticker": "GLO",
    "exchange": "NYSE American",
    "name": "Clough Global Opportunities Fund"
  },
  {
    "ticker": "GLOB",
    "exchange": "NYSE",
    "name": "Globant SA"
  },
  {
    "ticker": "GLOG",
    "exchange": "NYSE",
    "name": "GasLog Ltd."
  },
  {
    "ticker": "GLOG-A",
    "exchange": "NYSE",
    "name": "GasLog Ltd Cum Red Perp Pfd Shs Series A"
  },
  {
    "ticker": "GLOP",
    "exchange": "NYSE",
    "name": "GasLog Partners LP"
  },
  {
    "ticker": "GLOP-A",
    "exchange": "NYSE",
    "name": "GasLog Partners LP Cum Red Perp Pfd Uts Series A"
  },
  {
    "ticker": "GLOP-B",
    "exchange": "NYSE",
    "name": "GasLog Partners LP Cum Red Perp Pfd Registered Units Series B"
  },
  {
    "ticker": "GLOP-C",
    "exchange": "NYSE",
    "name": "GasLog Partners LP Cum Red Perp Pref Units Series C"
  },
  {
    "ticker": "GLP",
    "exchange": "NYSE",
    "name": "Global Partners LP"
  },
  {
    "ticker": "GLP-A",
    "exchange": "NYSE",
    "name": "Global Partners LP Cum Conv Red Perp Pfd Registered Units Series A"
  },
  {
    "ticker": "GLPG",
    "exchange": "NASDAQ",
    "name": "Galapagos NV Sponsored ADR"
  },
  {
    "ticker": "GLPI",
    "exchange": "NASDAQ",
    "name": "Gaming and Leisure Properties Inc."
  },
  {
    "ticker": "GLQ",
    "exchange": "NYSE American",
    "name": "Clough Global Equity Fund"
  },
  {
    "ticker": "GLRE",
    "exchange": "NASDAQ",
    "name": "Greenlight Capital Re Ltd. Class A"
  },
  {
    "ticker": "GLT",
    "exchange": "NYSE",
    "name": "P. H. Glatfelter Company"
  },
  {
    "ticker": "GLTR",
    "exchange": "NYSE ARCA",
    "name": "Aberdeen Standard Physical Precious Metals Basket Shares ETF"
  },
  {
    "ticker": "GLU",
    "exchange": "NYSE American",
    "name": "Gabelli Global Utility & Income Trust"
  },
  {
    "ticker": "GLU-A",
    "exchange": "NYSE American",
    "name": "Gabelli Global Utility & Income Trust Pfd Shs Series A"
  },
  {
    "ticker": "GLU-B",
    "exchange": "NYSE American",
    "name": "Gabelli Global Utility & Income Trust 7 % Cum Conv Red Pfd Registered Shs Series B"
  },
  {
    "ticker": "GLUU",
    "exchange": "NASDAQ",
    "name": "Glu Mobile Inc."
  },
  {
    "ticker": "GLV",
    "exchange": "NYSE American",
    "name": "Clough Global Dividend and Income Fund of Benef Interest"
  },
  {
    "ticker": "GLW",
    "exchange": "NYSE",
    "name": "Corning Inc"
  },
  {
    "ticker": "GLYC",
    "exchange": "NASDAQ",
    "name": "GlycoMimetics Inc."
  },
  {
    "ticker": "GM",
    "exchange": "NYSE",
    "name": "General Motors Company"
  },
  {
    "ticker": "GMAB",
    "exchange": "NASDAQ",
    "name": "Genmab A/S Sponsored ADR"
  },
  {
    "ticker": "GMAN",
    "exchange": "NYSE ARCA",
    "name": "Goldman Sachs Manufacturing Revolution ETF"
  },
  {
    "ticker": "GMBL",
    "exchange": "NASDAQ",
    "name": "Esports Entertainment Group Inc"
  },
  {
    "ticker": "GMBLW",
    "exchange": "NASDAQ",
    "name": "Esports Entertainment Group Inc Warrant 2020-03.04.25 on Esprts Entmt Grp"
  },
  {
    "ticker": "GMDA",
    "exchange": "NASDAQ",
    "name": "Gamida Cell Ltd."
  },
  {
    "ticker": "GME",
    "exchange": "NYSE",
    "name": "GameStop Corp. Class A"
  },
  {
    "ticker": "GMED",
    "exchange": "NYSE",
    "name": "Globus Medical Inc Class A"
  },
  {
    "ticker": "GMF",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Emerging Asia Pacific ETF"
  },
  {
    "ticker": "GMHI",
    "exchange": "NASDAQ",
    "name": "Gores Metropoulos Inc. Class A"
  },
  {
    "ticker": "GMHIU",
    "exchange": "NASDAQ",
    "name": "Gores Metropoulos Inc. Units Cons of 1 Sh -A- + 1/3 Wt 24"
  },
  {
    "ticker": "GMHIW",
    "exchange": "NASDAQ",
    "name": "Gores Metropoulos Inc Warrant 2019-2024 on Gores Metropou"
  },
  {
    "ticker": "GMLP",
    "exchange": "NASDAQ",
    "name": "Golar LNG Partners LP"
  },
  {
    "ticker": "GMLPP",
    "exchange": "NASDAQ",
    "name": "Golar LNG Partners LP 8.75 % Cum Perp Red Pfd Registered Shs Series A"
  },
  {
    "ticker": "GMO",
    "exchange": "NYSE American",
    "name": "General Moly Inc."
  },
  {
    "ticker": "GMOM",
    "exchange": "Cboe BZX",
    "name": "Cambria Global Momentum ETF"
  },
  {
    "ticker": "GMRE",
    "exchange": "NYSE",
    "name": "Global Medical REIT Inc"
  },
  {
    "ticker": "GMRE-A",
    "exchange": "NYSE",
    "name": "Global Medical REIT Inc 7.5 % Cum Conv Red Perp Pfd Registered Shs Series A"
  },
  {
    "ticker": "GMS",
    "exchange": "NYSE",
    "name": "GMS Inc."
  },
  {
    "ticker": "GMTA",
    "exchange": "NYSE",
    "name": "GATX Corp 5 5/8 % Notes 2016-30.05.66"
  },
  {
    "ticker": "GMZ",
    "exchange": "NYSE",
    "name": "Goldman Sachs MLP Income Opportunities Fund"
  },
  {
    "ticker": "GNAF",
    "exchange": "NYSE ARCA",
    "name": "MicroSectors FANG+ Index Inverse ETNS"
  },
  {
    "ticker": "GNCA",
    "exchange": "NASDAQ",
    "name": "Genocea Biosciences Inc."
  },
  {
    "ticker": "GNE",
    "exchange": "NYSE",
    "name": "Genie Energy Ltd. Class B"
  },
  {
    "ticker": "GNE-A",
    "exchange": "NYSE",
    "name": "Genie Energy Ltd Red Pref Shs Series-2012-A"
  },
  {
    "ticker": "GNFT",
    "exchange": "NASDAQ",
    "name": "Genfit SA Sponsored ADR"
  },
  {
    "ticker": "GNK",
    "exchange": "NYSE",
    "name": "Genco Shipping & Trading Ltd"
  },
  {
    "ticker": "GNL",
    "exchange": "NYSE",
    "name": "Global Net LeNYSE American Inc"
  },
  {
    "ticker": "GNL-A",
    "exchange": "NYSE",
    "name": "Global Net LeNYSE American Inc Cum Red Preferred Registered Shs Series A"
  },
  {
    "ticker": "GNL-B",
    "exchange": "NYSE",
    "name": "Global Net LeNYSE American Inc 6.25 % Cum Red Pfd Registered Shs Series B"
  },
  {
    "ticker": "GNLN",
    "exchange": "NASDAQ",
    "name": "Greenlane Holdings Inc. Class A"
  },
  {
    "ticker": "GNMA",
    "exchange": "NASDAQ",
    "name": "iShares GNMA Bond ETF"
  },
  {
    "ticker": "GNMK",
    "exchange": "NASDAQ",
    "name": "GenMark Diagnostics Inc."
  },
  {
    "ticker": "GNOM",
    "exchange": "NASDAQ",
    "name": "Global X Genomics & Biotechnology ETF"
  },
  {
    "ticker": "GNPX",
    "exchange": "NASDAQ",
    "name": "Genprex Inc."
  },
  {
    "ticker": "GNR",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Global Natural Resources ETF"
  },
  {
    "ticker": "GNRC",
    "exchange": "NYSE",
    "name": "Generac Holdings Inc."
  },
  {
    "ticker": "GNRS",
    "exchange": "NASDAQ",
    "name": "Greenrose Acquisition Corp"
  },
  {
    "ticker": "GNRSU",
    "exchange": "NASDAQ",
    "name": "Greenrose Acquisition Corp. Units Cons of 1 Sh + 0.75 Wt 24"
  },
  {
    "ticker": "GNRSW",
    "exchange": "NASDAQ",
    "name": "Greenrose Acquisition Corp Warrant 2020-2024 on Greenrose Acquisition Corp"
  },
  {
    "ticker": "GNSS",
    "exchange": "NASDAQ",
    "name": "GeNASDAQys Inc."
  },
  {
    "ticker": "GNT",
    "exchange": "NYSE",
    "name": "GAMCO Natural Resources. Gold & Income Trust"
  },
  {
    "ticker": "GNT-A",
    "exchange": "NYSE",
    "name": "GAMCO Natural Resources. Gold & Income Trust Cum Perp Red Pfd Series A"
  },
  {
    "ticker": "GNTX",
    "exchange": "NASDAQ",
    "name": "Gentex Corporation"
  },
  {
    "ticker": "GNTY",
    "exchange": "NASDAQ",
    "name": "Guaranty Bancshares Inc."
  },
  {
    "ticker": "GNUS",
    "exchange": "NASDAQ",
    "name": "Genius Brands International Inc."
  },
  {
    "ticker": "GNW",
    "exchange": "NYSE",
    "name": "Genworth Financial Inc. Class A"
  },
  {
    "ticker": "GO",
    "exchange": "NASDAQ",
    "name": "Grocery Outlet Holding Corp."
  },
  {
    "ticker": "GOAC=",
    "exchange": "NYSE",
    "name": "GO Acquisition Corp. Units Cons of 1 Sh A + 1/3 Wt 31.08.27"
  },
  {
    "ticker": "GOAT",
    "exchange": "Cboe BZX",
    "name": "VanEck Vectors Morningstar Global Wide Moat ETF"
  },
  {
    "ticker": "GOAU",
    "exchange": "NYSE ARCA",
    "name": "U.S. Global GO GOLD and Precious Metal Miners ETF"
  },
  {
    "ticker": "GOCO",
    "exchange": "NASDAQ",
    "name": "GoHealth Inc Class A"
  },
  {
    "ticker": "GOED",
    "exchange": "NYSE American",
    "name": "1847 Goedeker Inc"
  },
  {
    "ticker": "GOEX",
    "exchange": "NYSE ARCA",
    "name": "Global X Gold Explorers ETF"
  },
  {
    "ticker": "GOF",
    "exchange": "NYSE",
    "name": "Guggenheim Strategic Opportunities Fund"
  },
  {
    "ticker": "GOGL",
    "exchange": "NASDAQ",
    "name": "Golden Ocean Group Ltd"
  },
  {
    "ticker": "GOGO",
    "exchange": "NASDAQ",
    "name": "Gogo Inc."
  },
  {
    "ticker": "GOL",
    "exchange": "NYSE",
    "name": "GOL Linhas Aereas Inteligentes S.A. Sponsored ADR Pfd"
  },
  {
    "ticker": "GOLD",
    "exchange": "NYSE",
    "name": "Barrick Gold Corporation"
  },
  {
    "ticker": "GOLF",
    "exchange": "NYSE",
    "name": "Acushnet Holdings Corp."
  },
  {
    "ticker": "GOOD",
    "exchange": "NASDAQ",
    "name": "Gladstone Commercial Corporation"
  },
  {
    "ticker": "GOODM",
    "exchange": "NASDAQ",
    "name": "Gladstone Commercial Corp 7 % Cum Red Pfd Registered Series D"
  },
  {
    "ticker": "GOODN",
    "exchange": "NASDAQ",
    "name": "Gladstone Commercial Corp 6.625 % Cum Red Pfd Registered Shs Series E"
  },
  {
    "ticker": "GOOG",
    "exchange": "NASDAQ",
    "name": "Alphabet Inc. Class C"
  },
  {
    "ticker": "GOOGL",
    "exchange": "NASDAQ",
    "name": "Alphabet Inc. Class A"
  },
  {
    "ticker": "GOOS",
    "exchange": "NYSE",
    "name": "Canada Goose Holdings Inc."
  },
  {
    "ticker": "GORO",
    "exchange": "NYSE American",
    "name": "Gold Resource Corporation"
  },
  {
    "ticker": "GOSS",
    "exchange": "NASDAQ",
    "name": "Gossamer Bio Inc."
  },
  {
    "ticker": "GOVT",
    "exchange": "Cboe BZX",
    "name": "iShares U.S. Treasury Bond ETF"
  },
  {
    "ticker": "GPC",
    "exchange": "NYSE",
    "name": "Genuine Parts Company"
  },
  {
    "ticker": "GPI",
    "exchange": "NYSE",
    "name": "Group 1 Automotive Inc."
  },
  {
    "ticker": "GPJA",
    "exchange": "NYSE",
    "name": "Georgia Power Co 5 % Notes 2017-01.10.77 Global Series 2017A"
  },
  {
    "ticker": "GPK",
    "exchange": "NYSE",
    "name": "Graphic Packaging Holding Company"
  },
  {
    "ticker": "GPL",
    "exchange": "NYSE American",
    "name": "Great Panther Mining Limited"
  },
  {
    "ticker": "GPM",
    "exchange": "NYSE",
    "name": "Guggenheim Enhanced Equity Income Fund"
  },
  {
    "ticker": "GPMT",
    "exchange": "NYSE",
    "name": "Granite Point Mortgage Trust Inc."
  },
  {
    "ticker": "GPN",
    "exchange": "NYSE",
    "name": "Global Payments Inc."
  },
  {
    "ticker": "GPOR",
    "exchange": "NASDAQ",
    "name": "Gulfport Energy Corporation"
  },
  {
    "ticker": "GPP",
    "exchange": "NASDAQ",
    "name": "Green Plains Partners LP"
  },
  {
    "ticker": "GPRE",
    "exchange": "NASDAQ",
    "name": "Green Plains Inc."
  },
  {
    "ticker": "GPRK",
    "exchange": "NYSE",
    "name": "GeoPark Ltd"
  },
  {
    "ticker": "GPRO",
    "exchange": "NASDAQ",
    "name": "GoPro Inc. Class A"
  },
  {
    "ticker": "GPS",
    "exchange": "NYSE",
    "name": "Gap Inc."
  },
  {
    "ticker": "GPX",
    "exchange": "NYSE",
    "name": "GP Strategies Corporation"
  },
  {
    "ticker": "GQRE",
    "exchange": "NYSE ARCA",
    "name": "FlexShares Global Quality Real Estate Index Fund"
  },
  {
    "ticker": "GRA",
    "exchange": "NYSE",
    "name": "W R Grace & Co"
  },
  {
    "ticker": "GRAF",
    "exchange": "NYSE",
    "name": "Graf Industrial Corp."
  },
  {
    "ticker": "GRAF=",
    "exchange": "NYSE",
    "name": "Graf Industrial Corp. Units Cons of 1 Sh + 1 Wt"
  },
  {
    "ticker": "GRAF+",
    "exchange": "NYSE",
    "name": "Graf Industrial Corp Warrant 2018-31.12.25 on Graf Industrial Rg"
  },
  {
    "ticker": "GRAM",
    "exchange": "NYSE",
    "name": "Grana y Montero SAA Sponsored ADR"
  },
  {
    "ticker": "GRBK",
    "exchange": "NASDAQ",
    "name": "Green Brick Partners Inc."
  },
  {
    "ticker": "GRC",
    "exchange": "NYSE",
    "name": "Gorman-Rupp Company"
  },
  {
    "ticker": "GRCYU",
    "exchange": "NASDAQ",
    "name": "Greencity Acquisition Corp. Units Cons of 1 Shs + 1 Wt"
  },
  {
    "ticker": "GREK",
    "exchange": "NYSE ARCA",
    "name": "Global X MSCI Greece ETF"
  },
  {
    "ticker": "GRES",
    "exchange": "NYSE ARCA",
    "name": "IQ Global Resources ETF"
  },
  {
    "ticker": "GRF",
    "exchange": "NYSE American",
    "name": "Eagle Capital Growth Fund Inc"
  },
  {
    "ticker": "GRFS",
    "exchange": "NASDAQ",
    "name": "Grifols S.A. Sponsored ADR Class B"
  },
  {
    "ticker": "GRID",
    "exchange": "NASDAQ",
    "name": "First Trust NASDAQdaq Clean Edge Smart GRID Infrastructure Index"
  },
  {
    "ticker": "GRIF",
    "exchange": "NASDAQ",
    "name": "Griffin Industrial Realty Inc. Class A"
  },
  {
    "ticker": "GRIL",
    "exchange": "NASDAQ",
    "name": "Muscle Maker Inc."
  },
  {
    "ticker": "GRIN",
    "exchange": "NASDAQ",
    "name": "Grindrod Shipping Holdings Ltd."
  },
  {
    "ticker": "GRMN",
    "exchange": "NASDAQ",
    "name": "Garmin Ltd."
  },
  {
    "ticker": "GRN",
    "exchange": "NYSE ARCA",
    "name": "iPath Series B Carbon ETN"
  },
  {
    "ticker": "GRNB",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Green Bond ETF"
  },
  {
    "ticker": "GRNQ",
    "exchange": "NASDAQ",
    "name": "Greenpro Capital Corp."
  },
  {
    "ticker": "GRNV",
    "exchange": "NASDAQ",
    "name": "GreenVision Acquisition Corp"
  },
  {
    "ticker": "GRNVR",
    "exchange": "NASDAQ",
    "name": "GreenVision Acquisition Corp Rights 2019-01.06.21 For Shares"
  },
  {
    "ticker": "GRNVU",
    "exchange": "NASDAQ",
    "name": "GreenVision Acquisition Corp Units Cons of 1 Sh + 1 Wt 28.10.24 + 1 Rt"
  },
  {
    "ticker": "GRNVW",
    "exchange": "NASDAQ",
    "name": "GreenVision Acquisition Corp Warrant 2019-28.10.24 on GreenVisio Acqn"
  },
  {
    "ticker": "GROW",
    "exchange": "NASDAQ",
    "name": "U.S. Global Investors Inc. Class A"
  },
  {
    "ticker": "GRP=",
    "exchange": "NYSE",
    "name": "Granite Real Estate Investment Trust Stapled Units - 1 Granite RE Inc + 1 TU Granite REIT"
  },
  {
    "ticker": "GRPN",
    "exchange": "NASDAQ",
    "name": "Groupon Inc."
  },
  {
    "ticker": "GRSVU",
    "exchange": "NASDAQ",
    "name": "Gores Holdings V Inc. Units Cons of 1 Sh -A- + 1/5 Wt 25"
  },
  {
    "ticker": "GRTS",
    "exchange": "NASDAQ",
    "name": "Gritstone Oncology Inc."
  },
  {
    "ticker": "GRTX",
    "exchange": "NASDAQ",
    "name": "Galera Therapeutics Inc."
  },
  {
    "ticker": "GRU",
    "exchange": "NYSE ARCA",
    "name": "ELEMENTS Linked to the ICE BofAML Commodity Index eXtra Grains Total Return"
  },
  {
    "ticker": "GRUB",
    "exchange": "NYSE",
    "name": "Grubhub Inc."
  },
  {
    "ticker": "GRVY",
    "exchange": "NASDAQ",
    "name": "Gravity Co. Ltd. Sponsored ADR"
  },
  {
    "ticker": "GRWG",
    "exchange": "NASDAQ",
    "name": "GrowGeneration Corp."
  },
  {
    "ticker": "GRX",
    "exchange": "NYSE",
    "name": "Gabelli Healthcare & Wellness Trust"
  },
  {
    "ticker": "GRX-B",
    "exchange": "NYSE",
    "name": "Gabelli Healthcare & Wellness Trust Cum Pfd Shs Series B"
  },
  {
    "ticker": "GS",
    "exchange": "NYSE",
    "name": "Goldman Sachs Group Inc."
  },
  {
    "ticker": "GS-A",
    "exchange": "NYSE",
    "name": "Goldman Sachs Group Inc. Deposit Repr 1/1000th Floating Rate Non-Cum Pfd Ser A"
  },
  {
    "ticker": "GS-C",
    "exchange": "NYSE",
    "name": "Goldman Sachs Group Inc. Depositary Repr 1/1000th Flt Rt Non-Cum Pfd Series C"
  },
  {
    "ticker": "GS-D",
    "exchange": "NYSE",
    "name": "Goldman Sachs Group Inc. Depositary Repr 1/1000th Perp Fltg Rate Non Cum Pfd Ser D"
  },
  {
    "ticker": "GS-J",
    "exchange": "NYSE",
    "name": "Goldman Sachs Group Inc. Depositary Repr 1/1000th 5 1/2 % Non-Cum Perp Pfd Shs Series J"
  },
  {
    "ticker": "GS-K",
    "exchange": "NYSE",
    "name": "Goldman Sachs Group Inc. Depositary Repr 1/1000th Non-Cum Pfd Shs Series K"
  },
  {
    "ticker": "GS-N",
    "exchange": "NYSE",
    "name": "Goldman Sachs Group Inc Deposit Shs Repr 1/1000th 6.30 % Non-Cum Pfd Shs Series N"
  },
  {
    "ticker": "GSAH",
    "exchange": "NYSE",
    "name": "GS Acquisition Holdings Corp. II Class A"
  },
  {
    "ticker": "GSAH=",
    "exchange": "NYSE",
    "name": "GS Acquisition Holdings Corp. II Units Cons of 1 Sh A + 1/4 Wt 25"
  },
  {
    "ticker": "GSAH+",
    "exchange": "NYSE",
    "name": "GS Acquisition Holdings Corp II Warrant 2020-30.06.27 on GS Acq Hldg II-A"
  },
  {
    "ticker": "GSAT",
    "exchange": "NYSE American",
    "name": "Globalstar Inc."
  },
  {
    "ticker": "GSB",
    "exchange": "NYSE American",
    "name": "GlobalSCAPE Inc."
  },
  {
    "ticker": "GSBC",
    "exchange": "NASDAQ",
    "name": "Great Southern Bancorp Inc."
  },
  {
    "ticker": "GSBD",
    "exchange": "NYSE",
    "name": "Goldman Sachs BDC Inc"
  },
  {
    "ticker": "GSC",
    "exchange": "NYSE ARCA",
    "name": "GS Connect S&P GSCI Enhanced Commodity TR Strategy ETN"
  },
  {
    "ticker": "GSEE",
    "exchange": "Cboe BZX",
    "name": "Goldman Sachs MarketBeta Emerging Markets Equity ETF"
  },
  {
    "ticker": "GSEU",
    "exchange": "NYSE ARCA",
    "name": "Goldman Sachs ActiveBeta Europe Equity ETF"
  },
  {
    "ticker": "GSEW",
    "exchange": "Cboe BZX",
    "name": "Goldman Sachs Equal Weight U.S. Large Cap Equity ETF"
  },
  {
    "ticker": "GSG",
    "exchange": "NYSE ARCA",
    "name": "iShares S&P GSCI Commodity Indexed Trust"
  },
  {
    "ticker": "GSH",
    "exchange": "NYSE",
    "name": "Guangshen Railway Company Limited Sponsored ADR Class H"
  },
  {
    "ticker": "GSHD",
    "exchange": "NASDAQ",
    "name": "Goosehead Insurance Inc. Class A"
  },
  {
    "ticker": "GSID",
    "exchange": "Cboe BZX",
    "name": "Goldman Sachs MarketBeta International Equity ETF"
  },
  {
    "ticker": "GSIE",
    "exchange": "NYSE ARCA",
    "name": "Goldman Sachs ActiveBeta International Equity ETF"
  },
  {
    "ticker": "GSIG",
    "exchange": "NYSE ARCA",
    "name": "Goldman Sachs Access Investment Grade Corporate 1-5 Year Bond ETF"
  },
  {
    "ticker": "GSIT",
    "exchange": "NASDAQ",
    "name": "GSI Technology Inc."
  },
  {
    "ticker": "GSJY",
    "exchange": "NYSE ARCA",
    "name": "Goldman Sachs ActiveBeta Japan Equity ETF"
  },
  {
    "ticker": "GSK",
    "exchange": "NYSE",
    "name": "GlaxoSmithKline plc Sponsored ADR"
  },
  {
    "ticker": "GSKY",
    "exchange": "NASDAQ",
    "name": "GreenSky Inc. Class A"
  },
  {
    "ticker": "GSL",
    "exchange": "NYSE",
    "name": "Global Ship LeNYSE American Inc. Class A"
  },
  {
    "ticker": "GSL-B",
    "exchange": "NYSE",
    "name": "Global Ship LeNYSE American Inc Deposit Shs Repr 1/100th 8 3/4 % Cum Red Perp Pfd Shs Series B"
  },
  {
    "ticker": "GSLC",
    "exchange": "NYSE ARCA",
    "name": "Goldman Sachs ActiveBeta U.S. Large Cap Equity ETF"
  },
  {
    "ticker": "GSLD",
    "exchange": "NYSE",
    "name": "Global Ship LeNYSE American Inc 8 % Notes 2019-31.12.24 Global"
  },
  {
    "ticker": "GSM",
    "exchange": "NASDAQ",
    "name": "Ferroglobe PLC"
  },
  {
    "ticker": "GSMG",
    "exchange": "NASDAQ",
    "name": "Glory Star New Media Group Holdings Ltd."
  },
  {
    "ticker": "GSMGW",
    "exchange": "NASDAQ",
    "name": "Glory Star New Media Group Holdings Ltd. Warrant -13.02.25 on"
  },
  {
    "ticker": "GSP",
    "exchange": "NYSE ARCA",
    "name": "iPath S&P GSCI Total Return Index ETN"
  },
  {
    "ticker": "GSS",
    "exchange": "NYSE American",
    "name": "Golden Star Resources Ltd."
  },
  {
    "ticker": "GSSC",
    "exchange": "NYSE ARCA",
    "name": "Goldman Sachs Activebeta U.S. Small Cap Equity ETF"
  },
  {
    "ticker": "GSST",
    "exchange": "Cboe BZX",
    "name": "Goldman Sachs Access Ultra Short Bond ETF"
  },
  {
    "ticker": "GSUM",
    "exchange": "NASDAQ",
    "name": "Gridsum Holding Inc. Sponsored ADR Class B"
  },
  {
    "ticker": "GSUS",
    "exchange": "Cboe BZX",
    "name": "Goldman Sachs MarketBeta U.S. Equity ETF"
  },
  {
    "ticker": "GSV",
    "exchange": "NYSE American",
    "name": "Gold Standard Ventures Corp."
  },
  {
    "ticker": "GSX",
    "exchange": "NYSE",
    "name": "GSX Techedu Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "GSY",
    "exchange": "NYSE ARCA",
    "name": "Invesco Ultra Short Duration ETF"
  },
  {
    "ticker": "GT",
    "exchange": "NASDAQ",
    "name": "Goodyear Tire & Rubber Company"
  },
  {
    "ticker": "GTE",
    "exchange": "NYSE American",
    "name": "Gran Tierra Energy Inc."
  },
  {
    "ticker": "GTEC",
    "exchange": "NASDAQ",
    "name": "Greenland Technologies Holding Corporation"
  },
  {
    "ticker": "GTES",
    "exchange": "NYSE",
    "name": "Gates Industrial Corporation plc"
  },
  {
    "ticker": "GTH",
    "exchange": "NASDAQ",
    "name": "Genetron Holdings Ltd Sponsored ADR"
  },
  {
    "ticker": "GTHX",
    "exchange": "NASDAQ",
    "name": "G1 Therapeutics Inc."
  },
  {
    "ticker": "GTIM",
    "exchange": "NASDAQ",
    "name": "Good Times Restaurants Inc."
  },
  {
    "ticker": "GTIP",
    "exchange": "Cboe BZX",
    "name": "Goldman Sachs Access Inflation Protected USD Bond ETF"
  },
  {
    "ticker": "GTLS",
    "exchange": "NASDAQ",
    "name": "Chart Industries Inc."
  },
  {
    "ticker": "GTN",
    "exchange": "NYSE",
    "name": "Gray Television Inc."
  },
  {
    "ticker": "GTN.A",
    "exchange": "NYSE",
    "name": "Gray Television Inc. Class A"
  },
  {
    "ticker": "GTO",
    "exchange": "NYSE ARCA",
    "name": "Invesco Total Return Bond ETF"
  },
  {
    "ticker": "GTS",
    "exchange": "NYSE",
    "name": "Triple-S Management Corporation Class B"
  },
  {
    "ticker": "GTT",
    "exchange": "NYSE",
    "name": "GTT Communications Inc."
  },
  {
    "ticker": "GTX",
    "exchange": "NYSE",
    "name": "Garrett Motion Inc."
  },
  {
    "ticker": "GTY",
    "exchange": "NYSE",
    "name": "Getty Realty Corp."
  },
  {
    "ticker": "GTYH",
    "exchange": "NASDAQ",
    "name": "GTY Technology Holdings Inc."
  },
  {
    "ticker": "GUDB",
    "exchange": "NYSE ARCA",
    "name": "Sage ESG Intermediate Credit ETF"
  },
  {
    "ticker": "GUNR",
    "exchange": "NYSE ARCA",
    "name": "FlexShares Morningstar Global Upstream Natural Resources Index Fund"
  },
  {
    "ticker": "GURE",
    "exchange": "NASDAQ",
    "name": "Gulf Resources Inc."
  },
  {
    "ticker": "GURU",
    "exchange": "NYSE ARCA",
    "name": "Global X Guru Index ETF"
  },
  {
    "ticker": "GUSH",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily S&P Oil & Gas Exp. & Prod. Bull 2X Shares"
  },
  {
    "ticker": "GUT",
    "exchange": "NYSE",
    "name": "Gabelli Utility Trust"
  },
  {
    "ticker": "GUT-A",
    "exchange": "NYSE",
    "name": "Gabelli Utility Trust 5 5/8 % Cum Pfd Shs Series A"
  },
  {
    "ticker": "GUT-C",
    "exchange": "NYSE",
    "name": "Gabelli Utility Trust Cum Pfd Shs Series C"
  },
  {
    "ticker": "GV",
    "exchange": "NYSE American",
    "name": "Goldfield Corporation"
  },
  {
    "ticker": "GVA",
    "exchange": "NYSE",
    "name": "Granite Construction Incorporated"
  },
  {
    "ticker": "GVAL",
    "exchange": "Cboe BZX",
    "name": "Cambria Global Value ETF"
  },
  {
    "ticker": "GVI",
    "exchange": "Cboe BZX",
    "name": "iShares Intermediate Government/Credit Bond ETF"
  },
  {
    "ticker": "GVIP",
    "exchange": "NYSE ARCA",
    "name": "Goldman Sachs Hedge Industry VIP ETF"
  },
  {
    "ticker": "GVP",
    "exchange": "NASDAQ",
    "name": "GSE Systems Inc."
  },
  {
    "ticker": "GWB",
    "exchange": "NYSE",
    "name": "Great Western Bancorp Inc."
  },
  {
    "ticker": "GWGH",
    "exchange": "NASDAQ",
    "name": "GWG Holdings Inc."
  },
  {
    "ticker": "GWPH",
    "exchange": "NASDAQ",
    "name": "GW Pharmaceuticals PLC Sponsored ADR"
  },
  {
    "ticker": "GWRE",
    "exchange": "NYSE",
    "name": "Guidewire Software Inc."
  },
  {
    "ticker": "GWRS",
    "exchange": "NASDAQ",
    "name": "Global Water Resources Inc."
  },
  {
    "ticker": "GWW",
    "exchange": "NYSE",
    "name": "W.W. Grainger Inc."
  },
  {
    "ticker": "GWX",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P International Small Cap ETF"
  },
  {
    "ticker": "GXC",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P China ETF"
  },
  {
    "ticker": "GXF",
    "exchange": "NYSE ARCA",
    "name": "Global X FTSE Nordic Region ETF"
  },
  {
    "ticker": "GXG",
    "exchange": "NYSE ARCA",
    "name": "Global X MSCI Colombia ETF"
  },
  {
    "ticker": "GXGX",
    "exchange": "NASDAQ",
    "name": "GX Acquisition Corp. Class A"
  },
  {
    "ticker": "GXGXU",
    "exchange": "NASDAQ",
    "name": "GX Acquisition Corp. Units Cons of 1 Sh -A- + 1/2 Wt 01.12.25"
  },
  {
    "ticker": "GXGXW",
    "exchange": "NASDAQ",
    "name": "GX Acquisition Corp Warrant - 01.12.25 on GX Acquisition"
  },
  {
    "ticker": "GXTG",
    "exchange": "NASDAQ",
    "name": "Global X Thematic Growth ETF"
  },
  {
    "ticker": "GYC",
    "exchange": "NYSE",
    "name": "CABCO Trust No. 2004-102 Collared Floating Rate Callable Certfs 2004-15.6.34 Ser 2004-102"
  },
  {
    "ticker": "GYLD",
    "exchange": "NYSE ARCA",
    "name": "Arrow Dow Jones Global Yield ETF"
  },
  {
    "ticker": "GYRO",
    "exchange": "NASDAQ",
    "name": "Gyrodyne LLC"
  },
  {
    "ticker": "H",
    "exchange": "NYSE",
    "name": "Hyatt Hotels Corporation Class A"
  },
  {
    "ticker": "HA",
    "exchange": "NASDAQ",
    "name": "Hawaiian Holdings Inc."
  },
  {
    "ticker": "HACK",
    "exchange": "NYSE ARCA",
    "name": "ETFMG Prime Cyber Security ETF"
  },
  {
    "ticker": "HAE",
    "exchange": "NYSE",
    "name": "Haemonetics Corporation"
  },
  {
    "ticker": "HAFC",
    "exchange": "NASDAQ",
    "name": "Hanmi Financial Corporation"
  },
  {
    "ticker": "HAIL",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Kensho Smart Mobility ETF"
  },
  {
    "ticker": "HAIN",
    "exchange": "NASDAQ",
    "name": "Hain Celestial Group Inc."
  },
  {
    "ticker": "HAL",
    "exchange": "NYSE",
    "name": "Halliburton Company"
  },
  {
    "ticker": "HALL",
    "exchange": "NASDAQ",
    "name": "Hallmark Financial Services Inc."
  },
  {
    "ticker": "HALO",
    "exchange": "NASDAQ",
    "name": "Halozyme Therapeutics Inc."
  },
  {
    "ticker": "HAP",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Natural Resources ETF"
  },
  {
    "ticker": "HAPP",
    "exchange": "NASDAQ",
    "name": "Happiness Biotech Group Ltd"
  },
  {
    "ticker": "HARP",
    "exchange": "NASDAQ",
    "name": "Harpoon Therapeutics Inc."
  },
  {
    "ticker": "HAS",
    "exchange": "NASDAQ",
    "name": "Hasbro Inc."
  },
  {
    "ticker": "HASI",
    "exchange": "NYSE",
    "name": "Hannon Armstrong Sustainable Infrastructure Capital Inc."
  },
  {
    "ticker": "HAUZ",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers International Real Estate ETF"
  },
  {
    "ticker": "HAWX",
    "exchange": "NYSE ARCA",
    "name": "iShares Currency Hedged MSCI ACWI ex U.S. ETF"
  },
  {
    "ticker": "HAYN",
    "exchange": "NASDAQ",
    "name": "Haynes International Inc."
  },
  {
    "ticker": "HBAN",
    "exchange": "NASDAQ",
    "name": "Huntington Bancshares Incorporated"
  },
  {
    "ticker": "HBANN",
    "exchange": "NASDAQ",
    "name": "Huntington Bancshares Inc Deposit Shs Repr 1/40th Non-Cum Perp Pfd Shs Series C"
  },
  {
    "ticker": "HBANO",
    "exchange": "NASDAQ",
    "name": "Huntington Bancshares Incorporated Deposit Repr 1/40th Non-Cum Perp Pfd Series D"
  },
  {
    "ticker": "HBB",
    "exchange": "NYSE",
    "name": "Hamilton Beach Brands Holding Co. Class A"
  },
  {
    "ticker": "HBCP",
    "exchange": "NASDAQ",
    "name": "Home Bancorp Inc."
  },
  {
    "ticker": "HBI",
    "exchange": "NYSE",
    "name": "Hanesbrands Inc."
  },
  {
    "ticker": "HBIO",
    "exchange": "NASDAQ",
    "name": "Harvard Bioscience Inc."
  },
  {
    "ticker": "HBM",
    "exchange": "NYSE",
    "name": "Hudbay Minerals Inc"
  },
  {
    "ticker": "HBMD",
    "exchange": "NASDAQ",
    "name": "Howard Bancorp Inc."
  },
  {
    "ticker": "HBNC",
    "exchange": "NASDAQ",
    "name": "Horizon Bancorp Inc."
  },
  {
    "ticker": "HBP",
    "exchange": "NASDAQ",
    "name": "Huttig Building Products Inc."
  },
  {
    "ticker": "HBT",
    "exchange": "NASDAQ",
    "name": "HBT Financial Inc."
  },
  {
    "ticker": "HCA",
    "exchange": "NYSE",
    "name": "HCA Healthcare Inc"
  },
  {
    "ticker": "HCAC",
    "exchange": "NASDAQ",
    "name": "Hennessy Capital Acquisition Corp. IV Class A"
  },
  {
    "ticker": "HCACU",
    "exchange": "NASDAQ",
    "name": "Hennessy Capital Acquisition Corp. IV Units Cons of 1 Shs -A- + 3/4 Wts 01.10.25"
  },
  {
    "ticker": "HCACW",
    "exchange": "NASDAQ",
    "name": "Hennessy Capital Acquisition Corp IV Warrant 2020-01.10.25 on Hennss Cap Acqn A"
  },
  {
    "ticker": "HCAP",
    "exchange": "NASDAQ",
    "name": "Harvest Capital Credit Corp."
  },
  {
    "ticker": "HCAPZ",
    "exchange": "NASDAQ",
    "name": "Harvest Capital Credit Corp 6.125 % Notes 2017-15.09.22 Pay In Kind"
  },
  {
    "ticker": "HCAT",
    "exchange": "NASDAQ",
    "name": "Health Catalyst Inc."
  },
  {
    "ticker": "HCC",
    "exchange": "NYSE",
    "name": "Warrior Met Coal Inc."
  },
  {
    "ticker": "HCCH",
    "exchange": "NASDAQ",
    "name": "HL Acquisitions Corp."
  },
  {
    "ticker": "HCCHR",
    "exchange": "NASDAQ",
    "name": "HL Acquisitions Corp. Rights"
  },
  {
    "ticker": "HCCHU",
    "exchange": "NASDAQ",
    "name": "HL Acquisitions Corp. Units Cons of 1 ordinary Shs + 1 Wt + 1 Rts"
  },
  {
    "ticker": "HCCHW",
    "exchange": "NASDAQ",
    "name": "HL Acquisitions Corp Warrant"
  },
  {
    "ticker": "HCCI",
    "exchange": "NASDAQ",
    "name": "Heritage-Crystal Clean Inc."
  },
  {
    "ticker": "HCCO",
    "exchange": "NASDAQ",
    "name": "Healthcare Merger Corp Class A"
  },
  {
    "ticker": "HCCOU",
    "exchange": "NASDAQ",
    "name": "Healthcare Merger Corp Units Cons of 1 Sh A + 1/2 Wt 30.11.26"
  },
  {
    "ticker": "HCCOW",
    "exchange": "NASDAQ",
    "name": "Healthcare Merger Corp Warrant 2019-17.12.26 On Hlthc Merger A"
  },
  {
    "ticker": "HCFT",
    "exchange": "NYSE",
    "name": "Hunt Companies Finance Trust Inc."
  },
  {
    "ticker": "HCHC",
    "exchange": "NYSE",
    "name": "HC2 Holdings Inc."
  },
  {
    "ticker": "HCI",
    "exchange": "NYSE",
    "name": "HCI Group Inc."
  },
  {
    "ticker": "HCKT",
    "exchange": "NASDAQ",
    "name": "Hackett Group Inc."
  },
  {
    "ticker": "HCM",
    "exchange": "NASDAQ",
    "name": "Hutchison China Meditech Ltd Sponsored ADR"
  },
  {
    "ticker": "HCRB",
    "exchange": "Cboe BZX",
    "name": "Hartford Core Bond ETF"
  },
  {
    "ticker": "HCSG",
    "exchange": "NASDAQ",
    "name": "Healthcare Services Group Inc."
  },
  {
    "ticker": "HCXY",
    "exchange": "NYSE",
    "name": "Hercules Capital Inc 6.25 % Notes 2018-30.10.33 Global"
  },
  {
    "ticker": "HCXZ",
    "exchange": "NYSE",
    "name": "Hercules Capital Inc 5.25 % Notes 2018-30.04.25"
  },
  {
    "ticker": "HD",
    "exchange": "NYSE",
    "name": "Home Depot Inc."
  },
  {
    "ticker": "HDAW",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers MSCI All World ex US High Dividend Yield Equity ETF"
  },
  {
    "ticker": "HDB",
    "exchange": "NYSE",
    "name": "HDFC Bank Limited Sponsored ADR"
  },
  {
    "ticker": "HDEF",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers MSCI EAFE High Dividend Yield Equity ETF"
  },
  {
    "ticker": "HDG",
    "exchange": "NYSE ARCA",
    "name": "ProShares Hedge Replication ETF"
  },
  {
    "ticker": "HDGE",
    "exchange": "NYSE ARCA",
    "name": "AdvisorShares Ranger Equity Bear ETF"
  },
  {
    "ticker": "HDIV",
    "exchange": "NYSE ARCA",
    "name": "QRAFT AI-Enhanced U.S. High Dividend ETF"
  },
  {
    "ticker": "HDLB",
    "exchange": "NYSE ARCA",
    "name": "ETRACS Monthly Pay 2xLeveraged US High Dividend Low Volatility ETN Series B"
  },
  {
    "ticker": "HDMV",
    "exchange": "NYSE ARCA",
    "name": "First Trust Horizon Managed Volatility Developed Intl ETF"
  },
  {
    "ticker": "HDS",
    "exchange": "NASDAQ",
    "name": "HD Supply Holdings Inc."
  },
  {
    "ticker": "HDSN",
    "exchange": "NASDAQ",
    "name": "Hudson Technologies Inc."
  },
  {
    "ticker": "HDV",
    "exchange": "NYSE ARCA",
    "name": "iShares Core High Dividend ETF"
  },
  {
    "ticker": "HE",
    "exchange": "NYSE",
    "name": "Hawaiian Electric Industries Inc."
  },
  {
    "ticker": "HEAR",
    "exchange": "NASDAQ",
    "name": "Turtle Beach Corporation"
  },
  {
    "ticker": "HEBT",
    "exchange": "NASDAQ",
    "name": "Hebron Technology Co. Ltd. Class A"
  },
  {
    "ticker": "HEC",
    "exchange": "NASDAQ",
    "name": "Hudson Executive Investment Corp Class A"
  },
  {
    "ticker": "HECCU",
    "exchange": "NASDAQ",
    "name": "Hudson Executive Investment Corp Units Cons of 1 Sh A + 1/2 Wt 21.06.25"
  },
  {
    "ticker": "HECCW",
    "exchange": "NASDAQ",
    "name": "Hudson Executive Investment Corp Warrant 2020-21.06.25 on Huds Exec Inv-A"
  },
  {
    "ticker": "HEDJ",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Europe Hedged Equity Fund"
  },
  {
    "ticker": "HEEM",
    "exchange": "Cboe BZX",
    "name": "iShares Currency Hedged MSCI Emerging Markets ETF"
  },
  {
    "ticker": "HEES",
    "exchange": "NASDAQ",
    "name": "H&E Equipment Services Inc."
  },
  {
    "ticker": "HEFA",
    "exchange": "Cboe BZX",
    "name": "iShares Currency Hedged MSCI EAFE ETF"
  },
  {
    "ticker": "HEI",
    "exchange": "NYSE",
    "name": "HEICO Corporation"
  },
  {
    "ticker": "HEI.A",
    "exchange": "NYSE",
    "name": "HEICO Corporation Class A"
  },
  {
    "ticker": "HELE",
    "exchange": "NASDAQ",
    "name": "Helen of Troy Limited"
  },
  {
    "ticker": "HELX",
    "exchange": "Cboe BZX",
    "name": "Franklin Genomic Advancements ETF"
  },
  {
    "ticker": "HEP",
    "exchange": "NYSE",
    "name": "Holly Energy Partners L.P."
  },
  {
    "ticker": "HEPA",
    "exchange": "NASDAQ",
    "name": "Hepion Pharmaceuticals Inc."
  },
  {
    "ticker": "HEQ",
    "exchange": "NYSE",
    "name": "John Hancock Hedged Equity & Income Fund"
  },
  {
    "ticker": "HERD",
    "exchange": "NASDAQ",
    "name": "Pacer Cash Cows Fund of Funds ETF"
  },
  {
    "ticker": "HERO",
    "exchange": "NASDAQ",
    "name": "Global X Video Games & Esports ETF"
  },
  {
    "ticker": "HES",
    "exchange": "NYSE",
    "name": "Hess Corporation"
  },
  {
    "ticker": "HESM",
    "exchange": "NYSE",
    "name": "Hess Midstream LP Class A"
  },
  {
    "ticker": "HEWC",
    "exchange": "NYSE ARCA",
    "name": "iShares Currency Hedged MSCI Canada ETF"
  },
  {
    "ticker": "HEWG",
    "exchange": "NASDAQ",
    "name": "iShares Currency Hedged MSCI Germany ETF"
  },
  {
    "ticker": "HEWJ",
    "exchange": "NYSE ARCA",
    "name": "iShares Currency Hedged MSCI Japan ETF"
  },
  {
    "ticker": "HEWU",
    "exchange": "NYSE ARCA",
    "name": "iShares Currency Hedged MSCI United Kingdom ETF"
  },
  {
    "ticker": "HEWW",
    "exchange": "NYSE ARCA",
    "name": "iShares Currency Hedged MSCI Mexico ETF"
  },
  {
    "ticker": "HEXO",
    "exchange": "NYSE",
    "name": "HEXO Corp."
  },
  {
    "ticker": "HEZU",
    "exchange": "NYSE ARCA",
    "name": "iShares Currency Hedged MSCI Eurozone ETF"
  },
  {
    "ticker": "HFBL",
    "exchange": "NASDAQ",
    "name": "Home Federal Bancorp Inc. of Louisiana"
  },
  {
    "ticker": "HFC",
    "exchange": "NYSE",
    "name": "HollyFrontier Corporation"
  },
  {
    "ticker": "HFFG",
    "exchange": "NASDAQ",
    "name": "HF Foods Group Inc."
  },
  {
    "ticker": "HFRO",
    "exchange": "NYSE",
    "name": "Highland Income Fund"
  },
  {
    "ticker": "HFRO-A",
    "exchange": "NYSE",
    "name": "Highland Income Fund 5.375 % Cum Red Pfd Registered Shs Series A"
  },
  {
    "ticker": "HFWA",
    "exchange": "NASDAQ",
    "name": "Heritage Financial Corporation"
  },
  {
    "ticker": "HFXI",
    "exchange": "NYSE ARCA",
    "name": "IQ 50 Percent Hedged FTSE International ETF"
  },
  {
    "ticker": "HGH",
    "exchange": "NYSE",
    "name": "Hartford Financial Services Group Inc Debentures 2012-15.4.42 Jr Subord Fltg Rt"
  },
  {
    "ticker": "HGLB",
    "exchange": "NYSE",
    "name": "Highland Global Allocation Fund"
  },
  {
    "ticker": "HGSH",
    "exchange": "NASDAQ",
    "name": "China HGS Real Estate Inc."
  },
  {
    "ticker": "HGV",
    "exchange": "NYSE",
    "name": "Hilton Grand Vacations Inc."
  },
  {
    "ticker": "HHC",
    "exchange": "NYSE",
    "name": "Howard Hughes Corporation"
  },
  {
    "ticker": "HHR",
    "exchange": "NASDAQ",
    "name": "Headhunter Group Plc Sponsored ADR"
  },
  {
    "ticker": "HHT",
    "exchange": "NASDAQ",
    "name": "Color Star Technology Co. Ltd."
  },
  {
    "ticker": "HI",
    "exchange": "NYSE",
    "name": "Hillenbrand Inc."
  },
  {
    "ticker": "HIBB",
    "exchange": "NASDAQ",
    "name": "Hibbett Sports Inc."
  },
  {
    "ticker": "HIBL",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily S&P 500 High Beta Bull 3X Shares"
  },
  {
    "ticker": "HIBS",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily S&P 500 High Beta Bear 3X Shares"
  },
  {
    "ticker": "HIE",
    "exchange": "NYSE",
    "name": "Miller/Howard High Income Equity Fund"
  },
  {
    "ticker": "HIFS",
    "exchange": "NASDAQ",
    "name": "Hingham Institution for Savings"
  },
  {
    "ticker": "HIG",
    "exchange": "NYSE",
    "name": "Hartford Financial Services Group Inc."
  },
  {
    "ticker": "HIG-G",
    "exchange": "NYSE",
    "name": "Hartford Financial Services Group Inc Depositary Shs Repr 1/1000th 6 % Non-Cum Red Pfd Registered Shs Series G"
  },
  {
    "ticker": "HIHO",
    "exchange": "NASDAQ",
    "name": "Highway Holdings Limited"
  },
  {
    "ticker": "HII",
    "exchange": "NYSE",
    "name": "Huntington Ingalls Industries Inc."
  },
  {
    "ticker": "HIL",
    "exchange": "NYSE",
    "name": "Hill International Inc."
  },
  {
    "ticker": "HIMX",
    "exchange": "NASDAQ",
    "name": "Himax Technologies Inc. Sponsored ADR"
  },
  {
    "ticker": "HIO",
    "exchange": "NYSE",
    "name": "Western Asset High Income Opportunity Fund Inc"
  },
  {
    "ticker": "HIPR",
    "exchange": "NYSE ARCA",
    "name": "Direxion High Growth ETF"
  },
  {
    "ticker": "HIPS",
    "exchange": "NYSE ARCA",
    "name": "GraniteShares HIPS US High Income ETF"
  },
  {
    "ticker": "HIW",
    "exchange": "NYSE",
    "name": "Highwoods Properties Inc."
  },
  {
    "ticker": "HIX",
    "exchange": "NYSE",
    "name": "Western Asset High Income Fund II Inc"
  },
  {
    "ticker": "HJLI",
    "exchange": "NASDAQ",
    "name": "Hancock Jaffe Laboratories Inc."
  },
  {
    "ticker": "HJLIW",
    "exchange": "NASDAQ",
    "name": "Hancock Jaffe Laboratories Inc Warrant 2018-30.05.23 on Hancock Jaffe Laboratories"
  },
  {
    "ticker": "HJPX",
    "exchange": "NYSE ARCA",
    "name": "iShares Currency Hedged JPX-Nikkei 400 ETF"
  },
  {
    "ticker": "HKIB",
    "exchange": "NYSE",
    "name": "AMTD International Inc Sponsored ADR Class A"
  },
  {
    "ticker": "HL",
    "exchange": "NYSE",
    "name": "Hecla Mining Company"
  },
  {
    "ticker": "HL-B",
    "exchange": "NYSE",
    "name": "Hecla Mining Co 7 % Cum Conv Red Pfd Shs Series B"
  },
  {
    "ticker": "HLAL",
    "exchange": "NASDAQ",
    "name": "Wahed FTSE USA Shariah ETF"
  },
  {
    "ticker": "HLF",
    "exchange": "NYSE",
    "name": "Herbalife Nutrition Ltd."
  },
  {
    "ticker": "HLG",
    "exchange": "NASDAQ",
    "name": "Hailiang Education Group Inc. Sponsored ADR"
  },
  {
    "ticker": "HLI",
    "exchange": "NYSE",
    "name": "Houlihan Lokey Inc. Class A"
  },
  {
    "ticker": "HLIO",
    "exchange": "NASDAQ",
    "name": "Helios Technologies Inc."
  },
  {
    "ticker": "HLIT",
    "exchange": "NASDAQ",
    "name": "Harmonic Inc."
  },
  {
    "ticker": "HLM-",
    "exchange": "NYSE American",
    "name": "Hillman Group Capital Trust 11.6 % Trust Pfd Shs 2002-"
  },
  {
    "ticker": "HLNE",
    "exchange": "NASDAQ",
    "name": "Hamilton Lane Incorporated Class A"
  },
  {
    "ticker": "HLT",
    "exchange": "NYSE",
    "name": "Hilton Worldwide Holdings Inc"
  },
  {
    "ticker": "HLX",
    "exchange": "NYSE",
    "name": "Helix Energy Solutions Group Inc."
  },
  {
    "ticker": "HMC",
    "exchange": "NYSE",
    "name": "Honda Motor Co. Ltd. Sponsored ADR"
  },
  {
    "ticker": "HMG",
    "exchange": "NYSE American",
    "name": "HMG/Courtland Properties Inc."
  },
  {
    "ticker": "HMHC",
    "exchange": "NASDAQ",
    "name": "Houghton Mifflin Harcourt Company"
  },
  {
    "ticker": "HMI",
    "exchange": "NYSE",
    "name": "Huami Corporation Sponsored ADR Class A"
  },
  {
    "ticker": "HMLP",
    "exchange": "NYSE",
    "name": "Hoegh LNG Partners LP"
  },
  {
    "ticker": "HMLP-A",
    "exchange": "NYSE",
    "name": "Hoegh LNG Partners LP 8.75 % Cum Perp Red Pfd Registered Shs Series A"
  },
  {
    "ticker": "HMN",
    "exchange": "NYSE",
    "name": "Horace Mann Educators Corporation"
  },
  {
    "ticker": "HMNF",
    "exchange": "NASDAQ",
    "name": "HMN Financial Inc."
  },
  {
    "ticker": "HMOP",
    "exchange": "NYSE ARCA",
    "name": "Hartford Municipal Opportunities ETF"
  },
  {
    "ticker": "HMST",
    "exchange": "NASDAQ",
    "name": "HomeStreet Inc."
  },
  {
    "ticker": "HMSY",
    "exchange": "NASDAQ",
    "name": "HMS Holdings Corp."
  },
  {
    "ticker": "HMTV",
    "exchange": "NASDAQ",
    "name": "Hemisphere Media Group Inc. Class A"
  },
  {
    "ticker": "HMY",
    "exchange": "NYSE",
    "name": "Harmony Gold Mining Co. Ltd. Sponsored ADR"
  },
  {
    "ticker": "HNDL",
    "exchange": "NASDAQ",
    "name": "Strategy Shares NASDAQdaq 7HANDL Index ETF"
  },
  {
    "ticker": "HNGR",
    "exchange": "NYSE",
    "name": "Hanger Inc."
  },
  {
    "ticker": "HNI",
    "exchange": "NYSE",
    "name": "HNI Corporation"
  },
  {
    "ticker": "HNNA",
    "exchange": "NASDAQ",
    "name": "Hennessy Advisors Inc."
  },
  {
    "ticker": "HNP",
    "exchange": "NYSE",
    "name": "Huaneng Power International Inc. Sponsored ADR Class N"
  },
  {
    "ticker": "HNRG",
    "exchange": "NASDAQ",
    "name": "Hallador Energy Co"
  },
  {
    "ticker": "HNW",
    "exchange": "NYSE American",
    "name": "Pioneer Diversified High Income Trust"
  },
  {
    "ticker": "HOFT",
    "exchange": "NASDAQ",
    "name": "Hooker Furniture Corporation"
  },
  {
    "ticker": "HOFV",
    "exchange": "NASDAQ",
    "name": "Hall of Fame Resort & Entertainment Company"
  },
  {
    "ticker": "HOFVW",
    "exchange": "NASDAQ",
    "name": "Hall of Fame Resort & Entertainment Company Warrant 2020-24.01.23 for Hall of Fame Resort & Entmt"
  },
  {
    "ticker": "HOG",
    "exchange": "NYSE",
    "name": "Harley-Davidson Inc."
  },
  {
    "ticker": "HOLD",
    "exchange": "NYSE ARCA",
    "name": "AdvisorShares Sage Core Reserves ETF"
  },
  {
    "ticker": "HOLI",
    "exchange": "NASDAQ",
    "name": "Hollysys Automation Technologies Ltd."
  },
  {
    "ticker": "HOLUU",
    "exchange": "NASDAQ",
    "name": "Holicity Inc. Units Cons of 1 Sh -A- + 1/3 Wt 25"
  },
  {
    "ticker": "HOLX",
    "exchange": "NASDAQ",
    "name": "Hologic Inc."
  },
  {
    "ticker": "HOMB",
    "exchange": "NASDAQ",
    "name": "Home BancShares Inc."
  },
  {
    "ticker": "HOME",
    "exchange": "NYSE",
    "name": "At Home Group Inc."
  },
  {
    "ticker": "HOMZ",
    "exchange": "NYSE ARCA",
    "name": "Hoya Capital Housing ETF"
  },
  {
    "ticker": "HON",
    "exchange": "NYSE",
    "name": "Honeywell International Inc."
  },
  {
    "ticker": "HONE",
    "exchange": "NASDAQ",
    "name": "HarborOne Bancorp Inc"
  },
  {
    "ticker": "HOOK",
    "exchange": "NASDAQ",
    "name": "Hookipa Pharma Inc."
  },
  {
    "ticker": "HOPE",
    "exchange": "NASDAQ",
    "name": "Hope Bancorp Inc."
  },
  {
    "ticker": "HOTH",
    "exchange": "NASDAQ",
    "name": "Hoth Therapeutics Inc."
  },
  {
    "ticker": "HOV",
    "exchange": "NYSE",
    "name": "Hovnanian Enterprises Inc. Class A"
  },
  {
    "ticker": "HOVNP",
    "exchange": "NASDAQ",
    "name": "Hovnanian Enterprises Inc. Pfd Shs Series A"
  },
  {
    "ticker": "HP",
    "exchange": "NYSE",
    "name": "Helmerich & Payne Inc."
  },
  {
    "ticker": "HPE",
    "exchange": "NYSE",
    "name": "Hewlett Packard Enterprise Co."
  },
  {
    "ticker": "HPF",
    "exchange": "NYSE",
    "name": "John Hancock Preferred Income Fund II"
  },
  {
    "ticker": "HPI",
    "exchange": "NYSE",
    "name": "John Hancock Preferred Income Fund"
  },
  {
    "ticker": "HPP",
    "exchange": "NYSE",
    "name": "Hudson Pacific Properties Inc."
  },
  {
    "ticker": "HPQ",
    "exchange": "NYSE",
    "name": "HP Inc."
  },
  {
    "ticker": "HPR",
    "exchange": "NYSE",
    "name": "HighPoint Resources Corp."
  },
  {
    "ticker": "HPS",
    "exchange": "NYSE",
    "name": "John Hancock Preferred Income Fund III"
  },
  {
    "ticker": "HPX=",
    "exchange": "NYSE",
    "name": "HPX Corp. Units Cons of 1 Shs A + 1 Wt"
  },
  {
    "ticker": "HQH",
    "exchange": "NYSE",
    "name": "Tekla Healthcare Investors of Benef Interest"
  },
  {
    "ticker": "HQI",
    "exchange": "NASDAQ",
    "name": "HireQuest Inc."
  },
  {
    "ticker": "HQL",
    "exchange": "NYSE",
    "name": "Tekla Life Sciences Investors of Benef Interest"
  },
  {
    "ticker": "HQY",
    "exchange": "NASDAQ",
    "name": "HealthEquity Inc"
  },
  {
    "ticker": "HR",
    "exchange": "NYSE",
    "name": "Healthcare Realty Trust Incorporated"
  },
  {
    "ticker": "HRB",
    "exchange": "NYSE",
    "name": "H&R Block Inc."
  },
  {
    "ticker": "HRC",
    "exchange": "NYSE",
    "name": "Hill-Rom Holdings Inc."
  },
  {
    "ticker": "HRI",
    "exchange": "NYSE",
    "name": "Herc Holdings Inc."
  },
  {
    "ticker": "HRL",
    "exchange": "NYSE",
    "name": "Hormel Foods Corporation"
  },
  {
    "ticker": "HRMY",
    "exchange": "NASDAQ",
    "name": "Harmony Biosciences Holdings Inc."
  },
  {
    "ticker": "HROW",
    "exchange": "NASDAQ",
    "name": "Harrow Health Inc."
  },
  {
    "ticker": "HRTG",
    "exchange": "NYSE",
    "name": "Heritage Insurance Holdings Inc."
  },
  {
    "ticker": "HRTX",
    "exchange": "NASDAQ",
    "name": "Heron Therapeutics Inc"
  },
  {
    "ticker": "HRZN",
    "exchange": "NASDAQ",
    "name": "Horizon Technology Finance Corporation"
  },
  {
    "ticker": "HSAQ",
    "exchange": "NASDAQ",
    "name": "Health Sciences Acquisitions Corp. 2"
  },
  {
    "ticker": "HSBC",
    "exchange": "NYSE",
    "name": "HSBC Holdings PLC Sponsored ADR"
  },
  {
    "ticker": "HSBC-A",
    "exchange": "NYSE",
    "name": "HSBC Holdings PLC 6.2 % Pfd Shs Sponsored American Deposit Repr 1/40th 6.2 % PfdShs Ser A"
  },
  {
    "ticker": "HSC",
    "exchange": "NYSE",
    "name": "Harsco Corporation"
  },
  {
    "ticker": "HSCZ",
    "exchange": "NYSE ARCA",
    "name": "iShares Currency Hedged MSCI EAFE Small-Cap ETF"
  },
  {
    "ticker": "HSDT",
    "exchange": "NASDAQ",
    "name": "Helius Medical Technologies Inc Class A"
  },
  {
    "ticker": "HSIC",
    "exchange": "NASDAQ",
    "name": "Henry Schein Inc."
  },
  {
    "ticker": "HSII",
    "exchange": "NASDAQ",
    "name": "Heidrick & Struggles International Inc."
  },
  {
    "ticker": "HSKA",
    "exchange": "NASDAQ",
    "name": "Heska Corporation"
  },
  {
    "ticker": "HSMV",
    "exchange": "NYSE ARCA",
    "name": "First Trust Horizon Managed Volatility Small/Mid ETF"
  },
  {
    "ticker": "HSON",
    "exchange": "NASDAQ",
    "name": "Hudson Global Inc."
  },
  {
    "ticker": "HSPX",
    "exchange": "NYSE ARCA",
    "name": "Global X S&P 500 Covered Call ETF"
  },
  {
    "ticker": "HSRT",
    "exchange": "Cboe BZX",
    "name": "Hartford Short Duration ETF"
  },
  {
    "ticker": "HST",
    "exchange": "NYSE",
    "name": "Host Hotels & Resorts Inc."
  },
  {
    "ticker": "HSTM",
    "exchange": "NASDAQ",
    "name": "HealthStream Inc."
  },
  {
    "ticker": "HSTO",
    "exchange": "NASDAQ",
    "name": "Histogen Inc."
  },
  {
    "ticker": "HSY",
    "exchange": "NYSE",
    "name": "Hershey Company"
  },
  {
    "ticker": "HT",
    "exchange": "NYSE",
    "name": "Hersha Hospitality Trust Class A"
  },
  {
    "ticker": "HT-C",
    "exchange": "NYSE",
    "name": "Hersha Hospitality Trust 6 7/8 % Cum Red Pfd Shs Series C"
  },
  {
    "ticker": "HT-D",
    "exchange": "NYSE",
    "name": "Hersha Hospitality Trust 6 1/2 % Cum Red Pfd Shs Series D"
  },
  {
    "ticker": "HT-E",
    "exchange": "NYSE",
    "name": "Hersha Hospitality Trust 6.50% Cum Red Registered Pfd Shs Series E"
  },
  {
    "ticker": "HTA",
    "exchange": "NYSE",
    "name": "Healthcare Trust of America Inc. Class A"
  },
  {
    "ticker": "HTAB",
    "exchange": "NYSE ARCA",
    "name": "Hartford Schroders Tax-Aware Bond ETF"
  },
  {
    "ticker": "HTBI",
    "exchange": "NASDAQ",
    "name": "HomeTrust Bancshares Inc."
  },
  {
    "ticker": "HTBK",
    "exchange": "NASDAQ",
    "name": "Heritage Commerce Corp"
  },
  {
    "ticker": "HTBX",
    "exchange": "NASDAQ",
    "name": "Heat Biologics Inc."
  },
  {
    "ticker": "HTD",
    "exchange": "NYSE",
    "name": "John Hancock Tax-Advantaged Dividend Income Fund"
  },
  {
    "ticker": "HTEC",
    "exchange": "NYSE ARCA",
    "name": "Robo Global Healthcare Technology and Innovation ETF"
  },
  {
    "ticker": "HTFA",
    "exchange": "NYSE",
    "name": "Horizon Technology Finance Corp Notes 2017-15.09.22"
  },
  {
    "ticker": "HTGC",
    "exchange": "NYSE",
    "name": "Hercules Capital Inc."
  },
  {
    "ticker": "HTGM",
    "exchange": "NASDAQ",
    "name": "HTG Molecular Diagnostics Inc."
  },
  {
    "ticker": "HTH",
    "exchange": "NYSE",
    "name": "Hilltop Holdings Inc."
  },
  {
    "ticker": "HTHT",
    "exchange": "NASDAQ",
    "name": "Huazhu Group Ltd. Sponsored ADR"
  },
  {
    "ticker": "HTIA",
    "exchange": "NASDAQ",
    "name": "Healthcare Trust Inc 7.375 % Cum Conv Red Perp Pfd Registered Shs Series A"
  },
  {
    "ticker": "HTLD",
    "exchange": "NASDAQ",
    "name": "Heartland Express Inc."
  },
  {
    "ticker": "HTLF",
    "exchange": "NASDAQ",
    "name": "Heartland Financial USA Inc."
  },
  {
    "ticker": "HTLFP",
    "exchange": "NASDAQ",
    "name": "Heartland Financial USA Inc Depositary Shares Repr 1/400th Non-Cum Red Perp Pfd Registered Shs Series E"
  },
  {
    "ticker": "HTRB",
    "exchange": "NYSE ARCA",
    "name": "Hartford Total Return Bond ETF"
  },
  {
    "ticker": "HTUS",
    "exchange": "NYSE ARCA",
    "name": "Hull Tactical US ETF"
  },
  {
    "ticker": "HTY",
    "exchange": "NYSE",
    "name": "John Hancock Tax-Advantaged Global Shareholder Yield Fund"
  },
  {
    "ticker": "HTZ",
    "exchange": "NYSE",
    "name": "Hertz Global Holdings Inc."
  },
  {
    "ticker": "HUBB",
    "exchange": "NYSE",
    "name": "Hubbell Incorporated Class B"
  },
  {
    "ticker": "HUBG",
    "exchange": "NASDAQ",
    "name": "Hub Group Inc. Class A"
  },
  {
    "ticker": "HUBS",
    "exchange": "NYSE",
    "name": "HubSpot Inc."
  },
  {
    "ticker": "HUD",
    "exchange": "NYSE",
    "name": "Hudson Ltd. Class A"
  },
  {
    "ticker": "HUGE",
    "exchange": "NASDAQ",
    "name": "FSD Pharma Inc. Class B"
  },
  {
    "ticker": "HUIZ",
    "exchange": "NASDAQ",
    "name": "Huize Holding Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "HUM",
    "exchange": "NYSE",
    "name": "Humana Inc."
  },
  {
    "ticker": "HUN",
    "exchange": "NYSE",
    "name": "Huntsman Corporation"
  },
  {
    "ticker": "HURC",
    "exchange": "NASDAQ",
    "name": "Hurco Companies Inc."
  },
  {
    "ticker": "HURN",
    "exchange": "NASDAQ",
    "name": "Huron Consulting Group Inc."
  },
  {
    "ticker": "HUSA",
    "exchange": "NYSE American",
    "name": "Houston American Energy Corp."
  },
  {
    "ticker": "HUSN",
    "exchange": "NASDAQ",
    "name": "Hudson Capital Inc."
  },
  {
    "ticker": "HUSV",
    "exchange": "NYSE ARCA",
    "name": "First Trust Horizon Managed Volatility Domestic ETF"
  },
  {
    "ticker": "HUYA",
    "exchange": "NYSE",
    "name": "HUYA Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "HVBC",
    "exchange": "NASDAQ",
    "name": "HV Bancorp Inc."
  },
  {
    "ticker": "HVT",
    "exchange": "NYSE",
    "name": "Haverty Furniture Companies Inc."
  },
  {
    "ticker": "HVT.A",
    "exchange": "NYSE",
    "name": "Haverty Furniture Companies Inc. Class A"
  },
  {
    "ticker": "HWBK",
    "exchange": "NASDAQ",
    "name": "Hawthorn Bancshares Inc."
  },
  {
    "ticker": "HWC",
    "exchange": "NASDAQ",
    "name": "Hancock Whitney Corporation"
  },
  {
    "ticker": "HWCC",
    "exchange": "NASDAQ",
    "name": "Houston Wire & Cable Company"
  },
  {
    "ticker": "HWCPL",
    "exchange": "NASDAQ",
    "name": "Hancock Whitney Corporation 5.95 % Notes 2015-15.6.45 Subord"
  },
  {
    "ticker": "HWCPZ",
    "exchange": "NASDAQ",
    "name": "Hancock Whitney Corporation 6.25 % Notes 2020-15.06.60 Global"
  },
  {
    "ticker": "HWKN",
    "exchange": "NASDAQ",
    "name": "Hawkins Inc."
  },
  {
    "ticker": "HWM",
    "exchange": "NYSE",
    "name": "Howmet Aerospace Inc."
  },
  {
    "ticker": "HWM-",
    "exchange": "NYSE American",
    "name": "Howmet Aerospace Inc. 3.75 % Cum Red Pfd Registered Shs Series A"
  },
  {
    "ticker": "HX",
    "exchange": "NASDAQ",
    "name": "Hexindai Inc Sponsored ADR"
  },
  {
    "ticker": "HXL",
    "exchange": "NYSE",
    "name": "Hexcel Corporation"
  },
  {
    "ticker": "HY",
    "exchange": "NYSE",
    "name": "Hyster-Yale Materials Handling Inc. Class A"
  },
  {
    "ticker": "HYAC",
    "exchange": "NASDAQ",
    "name": "Haymaker Acquisition Corp II Class A"
  },
  {
    "ticker": "HYACU",
    "exchange": "NASDAQ",
    "name": "Haymaker Acquisition Corp II Units Cons of 1 Sh -A- + 1/3 Wt 31.10.26"
  },
  {
    "ticker": "HYACW",
    "exchange": "NASDAQ",
    "name": "Haymaker Acquisition Corp II Warrant 2019-31.10.26 on Haymak Acqn II Rg-A"
  },
  {
    "ticker": "HYB",
    "exchange": "NYSE",
    "name": "New American High Income Fund Inc"
  },
  {
    "ticker": "HYD",
    "exchange": "Cboe BZX",
    "name": "VanEck Vectors High-Yield Municipal Index ETF"
  },
  {
    "ticker": "HYDB",
    "exchange": "Cboe BZX",
    "name": "iShares High Yield Bond Factor ETF"
  },
  {
    "ticker": "HYDW",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers Low Beta High Yield Bond ETF"
  },
  {
    "ticker": "HYEM",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Emerging Markets High Yield Bond ETF"
  },
  {
    "ticker": "HYG",
    "exchange": "NYSE ARCA",
    "name": "iShares iBoxx $ High Yield Corporate Bond ETF"
  },
  {
    "ticker": "HYGH",
    "exchange": "NYSE ARCA",
    "name": "iShares Interest Rate Hedged High Yield Bond ETF"
  },
  {
    "ticker": "HYGV",
    "exchange": "NYSE ARCA",
    "name": "FlexShares High Yield Value-Scored US Bond Index Fund"
  },
  {
    "ticker": "HYHG",
    "exchange": "Cboe BZX",
    "name": "ProShares High Yield-Interest Rate Hedged ETF"
  },
  {
    "ticker": "HYI",
    "exchange": "NYSE",
    "name": "Western Asset High Yield Defined Opportunity Fund Inc"
  },
  {
    "ticker": "HYLB",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers USD High Yield Corporate Bond ETF"
  },
  {
    "ticker": "HYLD",
    "exchange": "NYSE ARCA",
    "name": "High Yield ETF"
  },
  {
    "ticker": "HYLS",
    "exchange": "NASDAQ",
    "name": "First Trust Tactical High Yield ETF"
  },
  {
    "ticker": "HYLV",
    "exchange": "NYSE ARCA",
    "name": "IQ S&P High Yield Low Volatility Bond ETF"
  },
  {
    "ticker": "HYMB",
    "exchange": "NYSE ARCA",
    "name": "SPDR Nuveen Bloomberg Barclays High Yield Municipal Bond ETF"
  },
  {
    "ticker": "HYMC",
    "exchange": "NASDAQ",
    "name": "Hycroft Mining Holding Corporation Class A"
  },
  {
    "ticker": "HYMCW",
    "exchange": "NASDAQ",
    "name": "Hycroft Mining Holding Corporation Warrant 2020-12.02.25 on Hycr Mng Hldg-A"
  },
  {
    "ticker": "HYRE",
    "exchange": "NASDAQ",
    "name": "HyreCar Inc."
  },
  {
    "ticker": "HYS",
    "exchange": "NYSE ARCA",
    "name": "PIMCO 0-5 Year High Yield Corporate Bond Index ETF"
  },
  {
    "ticker": "HYT",
    "exchange": "NYSE",
    "name": "BlackRock Corporate High Yield Fund Inc"
  },
  {
    "ticker": "HYTR",
    "exchange": "NYSE ARCA",
    "name": "CP High Yield Trend ETF"
  },
  {
    "ticker": "HYUP",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers High Beta High Yield Bond ETF"
  },
  {
    "ticker": "HYXE",
    "exchange": "NASDAQ",
    "name": "iShares iBoxx $ High Yield ex Oil & Gas Corporate Bond ETF"
  },
  {
    "ticker": "HYXU",
    "exchange": "Cboe BZX",
    "name": "iShares International High Yield Bond ETF"
  },
  {
    "ticker": "HYZD",
    "exchange": "NASDAQ",
    "name": "WisdomTree Interest Rate Hedged High Yield Bond Fund"
  },
  {
    "ticker": "HZAC=",
    "exchange": "NYSE",
    "name": "Horizon Acquisition Corp. Units Cons of 1 Shs -A- + 1/3 Wt"
  },
  {
    "ticker": "HZN",
    "exchange": "NYSE",
    "name": "Horizon Global Corp."
  },
  {
    "ticker": "HZNP",
    "exchange": "NASDAQ",
    "name": "Horizon Therapeutics Public Limited Company"
  },
  {
    "ticker": "HZO",
    "exchange": "NYSE",
    "name": "MarineMax Inc."
  },
  {
    "ticker": "IAA",
    "exchange": "NYSE",
    "name": "IAA Inc."
  },
  {
    "ticker": "IAC",
    "exchange": "NASDAQ",
    "name": "IAC/InteractiveCorp."
  },
  {
    "ticker": "IAE",
    "exchange": "NYSE",
    "name": "Voya Asia Pacific High Dividend Equity Income Fund"
  },
  {
    "ticker": "IAF",
    "exchange": "NYSE American",
    "name": "Aberdeen Australia Equity Fund Inc"
  },
  {
    "ticker": "IAG",
    "exchange": "NYSE",
    "name": "IAMGOLD Corporation"
  },
  {
    "ticker": "IAGG",
    "exchange": "Cboe BZX",
    "name": "iShares Core International Aggregate Bond ETF"
  },
  {
    "ticker": "IAI",
    "exchange": "NYSE ARCA",
    "name": "iShares U.S. Broker-Dealers & Securities Exchanges ETF"
  },
  {
    "ticker": "IAK",
    "exchange": "NYSE ARCA",
    "name": "iShares U.S. Insurance ETF"
  },
  {
    "ticker": "IART",
    "exchange": "NASDAQ",
    "name": "Integra LifeSciences Holdings Corporation"
  },
  {
    "ticker": "IAT",
    "exchange": "NYSE ARCA",
    "name": "iShares U.S. Regional Banks ETF"
  },
  {
    "ticker": "IAU",
    "exchange": "NYSE ARCA",
    "name": "iShares Gold Trust"
  },
  {
    "ticker": "IAUF",
    "exchange": "Cboe BZX",
    "name": "iShares Gold Strategy ETF"
  },
  {
    "ticker": "IBA",
    "exchange": "NYSE",
    "name": "Industrias Bachoco SAB de CV Sponsored ADR Class B"
  },
  {
    "ticker": "IBB",
    "exchange": "NASDAQ",
    "name": "iShares NASDAQDAQ Biotechnology ETF"
  },
  {
    "ticker": "IBBJ",
    "exchange": "NASDAQ",
    "name": "Defiance NASDAQdaq Junior Biotechnology ETF"
  },
  {
    "ticker": "IBCE",
    "exchange": "NYSE ARCA",
    "name": "iShares iBonds Mar 2023 Term Corporate ex-Financials ETF"
  },
  {
    "ticker": "IBCP",
    "exchange": "NASDAQ",
    "name": "Independent Bank Corporation"
  },
  {
    "ticker": "IBD",
    "exchange": "NYSE ARCA",
    "name": "Inspire Corporate Bond Impact ETF"
  },
  {
    "ticker": "IBDD",
    "exchange": "NYSE ARCA",
    "name": "iShares iBonds Mar 2023 Term Corporate ETF"
  },
  {
    "ticker": "IBDL",
    "exchange": "NYSE ARCA",
    "name": "iShares iBonds Dec 2020 Term Corporate ETF"
  },
  {
    "ticker": "IBDM",
    "exchange": "NYSE ARCA",
    "name": "iShares iBonds Dec 2021 Term Corporate ETF"
  },
  {
    "ticker": "IBDN",
    "exchange": "NYSE ARCA",
    "name": "iShares iBonds Dec 2022 Term Corporate ETF"
  },
  {
    "ticker": "IBDO",
    "exchange": "NYSE ARCA",
    "name": "iShares iBonds Dec 2023 Term Corporate ETF"
  },
  {
    "ticker": "IBDP",
    "exchange": "NYSE ARCA",
    "name": "iShares iBonds Dec 2024 Term Corporate ETF"
  },
  {
    "ticker": "IBDQ",
    "exchange": "NYSE ARCA",
    "name": "iShares iBonds Dec 2025 Term Corporate ETF"
  },
  {
    "ticker": "IBDR",
    "exchange": "NYSE ARCA",
    "name": "iShares iBonds Dec 2026 Term Corporate ETF"
  },
  {
    "ticker": "IBDS",
    "exchange": "NYSE ARCA",
    "name": "iShares iBonds Dec 2027 Term Corporate ETF"
  },
  {
    "ticker": "IBDT",
    "exchange": "NYSE ARCA",
    "name": "iShares iBonds Dec 2028 Term Corporate ETF"
  },
  {
    "ticker": "IBDU",
    "exchange": "NYSE ARCA",
    "name": "iShares iBonds Dec 2029 Term Corporate ETF"
  },
  {
    "ticker": "IBDV",
    "exchange": "NYSE ARCA",
    "name": "iShares iBonds Dec 2030 Term Corporate ETF"
  },
  {
    "ticker": "IBEX",
    "exchange": "NASDAQ",
    "name": "IBEX Ltd"
  },
  {
    "ticker": "IBHA",
    "exchange": "Cboe BZX",
    "name": "iShares iBonds 2021 Term High Yield & Income ETF"
  },
  {
    "ticker": "IBHB",
    "exchange": "Cboe BZX",
    "name": "iShares iBonds 2022 Term High Yield & Income ETF"
  },
  {
    "ticker": "IBHC",
    "exchange": "Cboe BZX",
    "name": "iShares iBonds 2023 Term High Yield & Income ETF"
  },
  {
    "ticker": "IBHD",
    "exchange": "Cboe BZX",
    "name": "iShares iBonds 2024 Term High Yield & Income ETF"
  },
  {
    "ticker": "IBHE",
    "exchange": "Cboe BZX",
    "name": "iShares iBonds 2025 Term High Yield & Income ETF"
  },
  {
    "ticker": "IBIO",
    "exchange": "NYSE American",
    "name": "iBio Inc."
  },
  {
    "ticker": "IBKR",
    "exchange": "NASDAQ",
    "name": "Interactive Brokers Group Inc. Class A"
  },
  {
    "ticker": "IBM",
    "exchange": "NYSE",
    "name": "International Business Machines Corporation"
  },
  {
    "ticker": "IBMI",
    "exchange": "NYSE ARCA",
    "name": "iShares iBonds Sep 2020 Term Muni Bond ETF"
  },
  {
    "ticker": "IBMJ",
    "exchange": "NYSE ARCA",
    "name": "iShares iBonds Dec 2021 Term Muni Bond ETF"
  },
  {
    "ticker": "IBMK",
    "exchange": "NYSE ARCA",
    "name": "iShares iBonds Dec 2022 Term Muni Bond ETF"
  },
  {
    "ticker": "IBML",
    "exchange": "Cboe BZX",
    "name": "iShares iBonds Dec 2023 Term Muni Bond ETF"
  },
  {
    "ticker": "IBMM",
    "exchange": "Cboe BZX",
    "name": "iShares iBonds Dec 2024 Term Muni Bond ETF"
  },
  {
    "ticker": "IBMN",
    "exchange": "Cboe BZX",
    "name": "iShares iBonds Dec 2025 Term Muni Bond ETF"
  },
  {
    "ticker": "IBMO",
    "exchange": "Cboe BZX",
    "name": "iShares iBonds Dec 2026 Term Muni Bond ETF"
  },
  {
    "ticker": "IBMP",
    "exchange": "Cboe BZX",
    "name": "iShares iBonds Dec 2027 Term Muni Bond ETF"
  },
  {
    "ticker": "IBMQ",
    "exchange": "Cboe BZX",
    "name": "iShares iBonds Dec 2028 Term Muni Bond ETF"
  },
  {
    "ticker": "IBN",
    "exchange": "NYSE",
    "name": "ICICI Bank Limited Sponsored ADR"
  },
  {
    "ticker": "IBND",
    "exchange": "NYSE ARCA",
    "name": "SPDR Bloomberg Barclays International Corporate Bond ETF"
  },
  {
    "ticker": "IBOC",
    "exchange": "NASDAQ",
    "name": "International Bancshares Corporation"
  },
  {
    "ticker": "IBP",
    "exchange": "NYSE",
    "name": "Installed Building Products Inc."
  },
  {
    "ticker": "IBTA",
    "exchange": "NASDAQ",
    "name": "iShares iBonds Dec 2021 Term Treasury ETF"
  },
  {
    "ticker": "IBTB",
    "exchange": "NASDAQ",
    "name": "iShares iBonds Dec 2022 Term Treasury ETF"
  },
  {
    "ticker": "IBTD",
    "exchange": "NASDAQ",
    "name": "iShares iBonds Dec 2023 Term Treasury ETF"
  },
  {
    "ticker": "IBTE",
    "exchange": "NASDAQ",
    "name": "iShares iBonds Dec 2024 Term Treasury ETF"
  },
  {
    "ticker": "IBTF",
    "exchange": "NASDAQ",
    "name": "iShares iBonds Dec 2025 Term Treasury ETF"
  },
  {
    "ticker": "IBTG",
    "exchange": "NASDAQ",
    "name": "iShares iBonds Dec 2026 Term Treasury ETF"
  },
  {
    "ticker": "IBTH",
    "exchange": "NASDAQ",
    "name": "iShares iBonds Dec 2027 Term Treasury ETF"
  },
  {
    "ticker": "IBTI",
    "exchange": "NASDAQ",
    "name": "iShares iBonds Dec 2028 Term Treasury ETF"
  },
  {
    "ticker": "IBTJ",
    "exchange": "NASDAQ",
    "name": "iShares iBonds Dec 2029 Term Treasury ETF"
  },
  {
    "ticker": "IBTK",
    "exchange": "NASDAQ",
    "name": "iShares iBonds Dec 2030 Term Treasury ETF"
  },
  {
    "ticker": "IBTX",
    "exchange": "NASDAQ",
    "name": "Independent Bank Group Inc."
  },
  {
    "ticker": "IBUY",
    "exchange": "NASDAQ",
    "name": "Amplify Online Retail ETF"
  },
  {
    "ticker": "ICAD",
    "exchange": "NASDAQ",
    "name": "iCAD Inc."
  },
  {
    "ticker": "ICBK",
    "exchange": "NASDAQ",
    "name": "County Bancorp Inc."
  },
  {
    "ticker": "ICCC",
    "exchange": "NASDAQ",
    "name": "ImmuCell Corporation"
  },
  {
    "ticker": "ICCH",
    "exchange": "NASDAQ",
    "name": "ICC Holdings Inc."
  },
  {
    "ticker": "ICD",
    "exchange": "NYSE",
    "name": "Independence Contract Drilling Inc."
  },
  {
    "ticker": "ICE",
    "exchange": "NYSE",
    "name": "Intercontinental Exchange Inc."
  },
  {
    "ticker": "ICF",
    "exchange": "Cboe BZX",
    "name": "iShares Cohen & Steers REIT ETF"
  },
  {
    "ticker": "ICFI",
    "exchange": "NASDAQ",
    "name": "ICF International Inc."
  },
  {
    "ticker": "ICHR",
    "exchange": "NASDAQ",
    "name": "Ichor Holdings Ltd."
  },
  {
    "ticker": "ICL",
    "exchange": "NYSE",
    "name": "ICL Group Ltd."
  },
  {
    "ticker": "ICLK",
    "exchange": "NASDAQ",
    "name": "iClick Interactive Asia Group Ltd. Sponsored ADR"
  },
  {
    "ticker": "ICLN",
    "exchange": "NASDAQ",
    "name": "iShares Global Clean Energy ETF"
  },
  {
    "ticker": "ICLR",
    "exchange": "NASDAQ",
    "name": "ICON Plc"
  },
  {
    "ticker": "ICMB",
    "exchange": "NASDAQ",
    "name": "Investcorp Credit Management BDC Inc. Registered"
  },
  {
    "ticker": "ICOL",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Colombia ETF"
  },
  {
    "ticker": "ICON",
    "exchange": "NASDAQ",
    "name": "Iconix Brand Group Inc."
  },
  {
    "ticker": "ICOW",
    "exchange": "Cboe BZX",
    "name": "Pacer Developed Markets International Cash Cows 100 ETF"
  },
  {
    "ticker": "ICPT",
    "exchange": "NASDAQ",
    "name": "Intercept Pharmaceuticals Inc."
  },
  {
    "ticker": "ICSH",
    "exchange": "Cboe BZX",
    "name": "iShares Ultra Short-Term Bond ETF"
  },
  {
    "ticker": "ICUI",
    "exchange": "NASDAQ",
    "name": "ICU Medical Inc."
  },
  {
    "ticker": "ICVT",
    "exchange": "Cboe BZX",
    "name": "iShares Convertible Bond ETF"
  },
  {
    "ticker": "IDA",
    "exchange": "NYSE",
    "name": "IDACORP Inc."
  },
  {
    "ticker": "IDCC",
    "exchange": "NASDAQ",
    "name": "InterDigital Inc."
  },
  {
    "ticker": "IDE",
    "exchange": "NYSE",
    "name": "Voya Infrastructure. Industrials and Materials Fund"
  },
  {
    "ticker": "IDEV",
    "exchange": "NYSE ARCA",
    "name": "iShares Core MSCI International Developed Markets ETF"
  },
  {
    "ticker": "IDEX",
    "exchange": "NASDAQ",
    "name": "Ideanomics Inc."
  },
  {
    "ticker": "IDHD",
    "exchange": "Cboe BZX",
    "name": "Invesco S&P Intl Developed High Dividend Low Volatility ETF"
  },
  {
    "ticker": "IDHQ",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P International Developed High Quality ETF"
  },
  {
    "ticker": "IDIV",
    "exchange": "NYSE ARCA",
    "name": "U.S. Equity Cumulative Dividends FundSeries 2027"
  },
  {
    "ticker": "IDLB",
    "exchange": "NASDAQ",
    "name": "Invesco FTSE International Low Beta Equal Weight ETF"
  },
  {
    "ticker": "IDLV",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P International Developed Low Volatility ETF"
  },
  {
    "ticker": "IDMO",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P International Developed Momentum ETF"
  },
  {
    "ticker": "IDN",
    "exchange": "NASDAQ",
    "name": "Intellicheck Inc"
  },
  {
    "ticker": "IDNA",
    "exchange": "NYSE ARCA",
    "name": "iShares Genomics Immunology and Healthcare ETF Genomics Immunology and Healthcare Fund"
  },
  {
    "ticker": "IDOG",
    "exchange": "NYSE ARCA",
    "name": "ALPS International Sector Dividend Dogs ETF"
  },
  {
    "ticker": "IDRA",
    "exchange": "NASDAQ",
    "name": "Idera Pharmaceuticals Inc."
  },
  {
    "ticker": "IDRV",
    "exchange": "NYSE ARCA",
    "name": "iShares Self-driving EV & Tech ETF"
  },
  {
    "ticker": "IDT",
    "exchange": "NYSE",
    "name": "IDT Corporation Class B"
  },
  {
    "ticker": "IDU",
    "exchange": "NYSE ARCA",
    "name": "iShares U.S. Utilities ETF"
  },
  {
    "ticker": "IDV",
    "exchange": "Cboe BZX",
    "name": "iShares International Select Dividend ETF"
  },
  {
    "ticker": "IDX",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Indonesia Index ETF"
  },
  {
    "ticker": "IDXG",
    "exchange": "NASDAQ",
    "name": "Interpace Biosciences Inc."
  },
  {
    "ticker": "IDXX",
    "exchange": "NASDAQ",
    "name": "IDEXX Laboratories Inc."
  },
  {
    "ticker": "IDY",
    "exchange": "NYSE ARCA",
    "name": "Pacific Global International Equity Income ETF"
  },
  {
    "ticker": "IDYA",
    "exchange": "NASDAQ",
    "name": "IDEAYA Biosciences Inc."
  },
  {
    "ticker": "IEA",
    "exchange": "NASDAQ",
    "name": "Infrastructure & Energy Alternatives Inc."
  },
  {
    "ticker": "IEAWW",
    "exchange": "NASDAQ",
    "name": "Infrastructure & Energy Alternatives Inc Warrant 2018-16.04.23 on Infra&Ener Alt"
  },
  {
    "ticker": "IEC",
    "exchange": "NASDAQ",
    "name": "IEC Electronics Corp."
  },
  {
    "ticker": "IECS",
    "exchange": "Cboe BZX",
    "name": "iShares Evolved U.S. Consumer Staples ETF"
  },
  {
    "ticker": "IEDI",
    "exchange": "Cboe BZX",
    "name": "iShares Evolved U.S. Discretionary Spending ETF"
  },
  {
    "ticker": "IEF",
    "exchange": "NASDAQ",
    "name": "iShares 7-10 Year Treasury Bond ETF"
  },
  {
    "ticker": "IEFA",
    "exchange": "Cboe BZX",
    "name": "iShares Core MSCI EAFE ETF"
  },
  {
    "ticker": "IEFN",
    "exchange": "Cboe BZX",
    "name": "iShares Evolved U.S. Financials ETF"
  },
  {
    "ticker": "IEHS",
    "exchange": "Cboe BZX",
    "name": "iShares Evolved U.S. Healthcare Staples ETF"
  },
  {
    "ticker": "IEI",
    "exchange": "NASDAQ",
    "name": "iShares 3-7 Year Treasury Bond ETF"
  },
  {
    "ticker": "IEIH",
    "exchange": "Cboe BZX",
    "name": "iShares Evolved U.S. Innovative Healthcare ETF"
  },
  {
    "ticker": "IEME",
    "exchange": "Cboe BZX",
    "name": "iShares Evolved U.S. Media & Entertainment ETF"
  },
  {
    "ticker": "IEMG",
    "exchange": "NYSE ARCA",
    "name": "iShares Core MSCI Emerging Markets ETF"
  },
  {
    "ticker": "IEO",
    "exchange": "Cboe BZX",
    "name": "iShares U.S. Oil & Gas Exploration & Production ETF"
  },
  {
    "ticker": "IEP",
    "exchange": "NASDAQ",
    "name": "Icahn Enterprises L.P."
  },
  {
    "ticker": "IESC",
    "exchange": "NASDAQ",
    "name": "IES Holdings Inc."
  },
  {
    "ticker": "IETC",
    "exchange": "Cboe BZX",
    "name": "iShares Evolved U.S. Technology ETF"
  },
  {
    "ticker": "IEUR",
    "exchange": "NYSE ARCA",
    "name": "iShares Core MSCI Europe ETF"
  },
  {
    "ticker": "IEUS",
    "exchange": "NASDAQ",
    "name": "iShares MSCI Europe Small-Cap ETF"
  },
  {
    "ticker": "IEV",
    "exchange": "NYSE ARCA",
    "name": "iShares Europe ETF"
  },
  {
    "ticker": "IEX",
    "exchange": "NYSE",
    "name": "IDEX Corporation"
  },
  {
    "ticker": "IEZ",
    "exchange": "NYSE ARCA",
    "name": "iShares U.S. Oil Equipment & Services ETF"
  },
  {
    "ticker": "IFF",
    "exchange": "NYSE",
    "name": "International Flavors & Fragrances Inc."
  },
  {
    "ticker": "IFFT",
    "exchange": "NYSE",
    "name": "International Flavors & Fragrances Inc Tangible Equity Units Cons of 1 PC + Notes"
  },
  {
    "ticker": "IFGL",
    "exchange": "NASDAQ",
    "name": "iShares International Developed Real Estate ETF"
  },
  {
    "ticker": "IFMK",
    "exchange": "NASDAQ",
    "name": "iFresh Inc."
  },
  {
    "ticker": "IFN",
    "exchange": "NYSE",
    "name": "India Fund Inc"
  },
  {
    "ticker": "IFRA",
    "exchange": "Cboe BZX",
    "name": "iShares U.S. Infrastructure ETF"
  },
  {
    "ticker": "IFRX",
    "exchange": "NASDAQ",
    "name": "InflaRx N.V."
  },
  {
    "ticker": "IFS",
    "exchange": "NYSE",
    "name": "Intercorp Financial Services Inc."
  },
  {
    "ticker": "IFV",
    "exchange": "NASDAQ",
    "name": "First Trust Dorsey Wright International Focus 5 ETF"
  },
  {
    "ticker": "IG",
    "exchange": "NYSE ARCA",
    "name": "Principal Investment Grade Corporate Active ETF"
  },
  {
    "ticker": "IGA",
    "exchange": "NYSE",
    "name": "Voya Global Advantage and Premium Opportunity Fund"
  },
  {
    "ticker": "IGBH",
    "exchange": "NYSE ARCA",
    "name": "iShares Interest Rate Hedged Long-Term Corporate Bond ETF"
  },
  {
    "ticker": "IGC",
    "exchange": "NYSE American",
    "name": "India Globalization Capital Inc."
  },
  {
    "ticker": "IGD",
    "exchange": "NYSE",
    "name": "Voya Global Equity Dividend and Premium Opportunity Fund"
  },
  {
    "ticker": "IGE",
    "exchange": "Cboe BZX",
    "name": "iShares North American Natural Resources ETF"
  },
  {
    "ticker": "IGEB",
    "exchange": "Cboe BZX",
    "name": "iShares Investment Grade Bond Factor ETF"
  },
  {
    "ticker": "IGF",
    "exchange": "NASDAQ",
    "name": "iShares Global Infrastructure ETF"
  },
  {
    "ticker": "IGHG",
    "exchange": "Cboe BZX",
    "name": "ProShares Investment Grade-Interest Rate Hedged"
  },
  {
    "ticker": "IGI",
    "exchange": "NYSE",
    "name": "Western Asset Investment Grade Defined Opportunity Trust Inc"
  },
  {
    "ticker": "IGIB",
    "exchange": "NASDAQ",
    "name": "iShares Intermediate-Term Corporate Bond ETF"
  },
  {
    "ticker": "IGIC",
    "exchange": "NASDAQ",
    "name": "International General Insurance Holdings Ltd."
  },
  {
    "ticker": "IGICW",
    "exchange": "NASDAQ",
    "name": "International General Insurance Holdings Ltd Warrant 2020-17.03.2025 on International General Insurance"
  },
  {
    "ticker": "IGLB",
    "exchange": "NYSE ARCA",
    "name": "iShares Long-Term Corporate Bond ETF"
  },
  {
    "ticker": "IGM",
    "exchange": "NYSE ARCA",
    "name": "iShares Expanded Tech Sector ETF"
  },
  {
    "ticker": "IGMS",
    "exchange": "NASDAQ",
    "name": "IGM Biosciences Inc."
  },
  {
    "ticker": "IGN",
    "exchange": "NYSE ARCA",
    "name": "iShares North American Tech-Multimedia Networking ETF"
  },
  {
    "ticker": "IGOV",
    "exchange": "NASDAQ",
    "name": "iShares International Treasury Bond ETF"
  },
  {
    "ticker": "IGR",
    "exchange": "NYSE",
    "name": "CBRE Clarion Global Real Estate Income Fund"
  },
  {
    "ticker": "IGRO",
    "exchange": "Cboe BZX",
    "name": "iShares International Dividend Growth ETF"
  },
  {
    "ticker": "IGSB",
    "exchange": "NASDAQ",
    "name": "iShares Short-Term Corporate Bond ETF"
  },
  {
    "ticker": "IGT",
    "exchange": "NYSE",
    "name": "International Game Technology PLC"
  },
  {
    "ticker": "IGV",
    "exchange": "Cboe BZX",
    "name": "iShares Expanded Tech-Software Sector ETF"
  },
  {
    "ticker": "IHAK",
    "exchange": "NYSE ARCA",
    "name": "iShares Cybersecurity & Tech ETF"
  },
  {
    "ticker": "IHC",
    "exchange": "NYSE",
    "name": "Independence Holding Company"
  },
  {
    "ticker": "IHD",
    "exchange": "NYSE",
    "name": "Voya Emerging Markets High Income Dividend Equity Fund"
  },
  {
    "ticker": "IHDG",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree International Hedged Quality Dividend Growth Fund"
  },
  {
    "ticker": "IHE",
    "exchange": "NYSE ARCA",
    "name": "iShares U.S. Pharmaceuticals ETF"
  },
  {
    "ticker": "IHF",
    "exchange": "NYSE ARCA",
    "name": "iShares U.S. Healthcare Providers ETF"
  },
  {
    "ticker": "IHG",
    "exchange": "NYSE",
    "name": "InterContinental Hotels Group PLC Sponsored ADR"
  },
  {
    "ticker": "IHI",
    "exchange": "NYSE ARCA",
    "name": "iShares U.S. Medical Devices ETF"
  },
  {
    "ticker": "IHIT",
    "exchange": "NYSE",
    "name": "Invesco High Income 2023 Target Term Fund of Benef Interest"
  },
  {
    "ticker": "IHRT",
    "exchange": "NASDAQ",
    "name": "iHeartMedia Inc. Class A"
  },
  {
    "ticker": "IHT",
    "exchange": "NYSE American",
    "name": "InnSuites Hospitality Trust"
  },
  {
    "ticker": "IHTA",
    "exchange": "NYSE",
    "name": "Invesco High Income 2024 Target Term Fund"
  },
  {
    "ticker": "IHY",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors International High Yield Bond ETF"
  },
  {
    "ticker": "IID",
    "exchange": "NYSE",
    "name": "Voya International High Dividend Equity Income Fund"
  },
  {
    "ticker": "IIF",
    "exchange": "NYSE",
    "name": "Morgan Stanley India Investment Fund Inc"
  },
  {
    "ticker": "IIGD",
    "exchange": "NYSE ARCA",
    "name": "Invesco Investment Grade Defensive ETF"
  },
  {
    "ticker": "IIGV",
    "exchange": "NYSE ARCA",
    "name": "Invesco Investment Grade Value ETF"
  },
  {
    "ticker": "III",
    "exchange": "NASDAQ",
    "name": "Information Services Group Inc."
  },
  {
    "ticker": "IIIN",
    "exchange": "NASDAQ",
    "name": "Insteel Industries Inc."
  },
  {
    "ticker": "IIIV",
    "exchange": "NASDAQ",
    "name": "i3 Verticals Inc. Class A"
  },
  {
    "ticker": "IIM",
    "exchange": "NYSE",
    "name": "Invesco Value Municipal Income Trust of Benef Interest Invesco Insured Municipal Income Trust"
  },
  {
    "ticker": "IIN",
    "exchange": "NASDAQ",
    "name": "IntriCon Corporation"
  },
  {
    "ticker": "IIPR",
    "exchange": "NYSE",
    "name": "Innovative Industrial Properties Inc"
  },
  {
    "ticker": "IIPR-A",
    "exchange": "NYSE",
    "name": "Innovative Industrial Properties Inc 9 % Cum Conv Red Pfd Registered Shs Series A"
  },
  {
    "ticker": "IIVI",
    "exchange": "NASDAQ",
    "name": "II-VI Incorporated"
  },
  {
    "ticker": "IIVIP",
    "exchange": "NASDAQ",
    "name": "II-VI Incorporated 6 % Conv Cum Pfd Registered Shs 2020 - 01.07.23"
  },
  {
    "ticker": "IJAN",
    "exchange": "NYSE ARCA",
    "name": "Innovator MSCI EAFE Power Buffer ETF - January"
  },
  {
    "ticker": "IJH",
    "exchange": "NYSE ARCA",
    "name": "iShares Core S&P Mid-Cap ETF"
  },
  {
    "ticker": "IJJ",
    "exchange": "NYSE ARCA",
    "name": "iShares S&P Mid-Cap 400 Value ETF"
  },
  {
    "ticker": "IJK",
    "exchange": "NYSE ARCA",
    "name": "iShares S&P Mid-Cap 400 Growth ETF"
  },
  {
    "ticker": "IJR",
    "exchange": "NYSE ARCA",
    "name": "iShares Core S&P Small Cap ETF"
  },
  {
    "ticker": "IJS",
    "exchange": "NYSE ARCA",
    "name": "iShares S&P Small-Cap 600 Value ETF"
  },
  {
    "ticker": "IJT",
    "exchange": "NASDAQ",
    "name": "iShares S&P Small-Cap 600 Growth ETF"
  },
  {
    "ticker": "IJUL",
    "exchange": "NYSE ARCA",
    "name": "Innovator MSCI EAFE Power Buffer ETF - July of Benef Interest"
  },
  {
    "ticker": "IKNX",
    "exchange": "NASDAQ",
    "name": "IKONICS Corporation"
  },
  {
    "ticker": "ILF",
    "exchange": "NYSE ARCA",
    "name": "iShares Latin America 40 ETF"
  },
  {
    "ticker": "ILMN",
    "exchange": "NASDAQ",
    "name": "Illumina Inc."
  },
  {
    "ticker": "ILPT",
    "exchange": "NASDAQ",
    "name": "Industrial Logistics Properties Trust"
  },
  {
    "ticker": "ILTB",
    "exchange": "NYSE ARCA",
    "name": "iShares Core 10+ Year USD Bond ETF"
  },
  {
    "ticker": "IMAB",
    "exchange": "NASDAQ",
    "name": "I-MAB Sponsored ADR"
  },
  {
    "ticker": "IMAC",
    "exchange": "NASDAQ",
    "name": "IMAC Holdings Inc."
  },
  {
    "ticker": "IMACW",
    "exchange": "NASDAQ",
    "name": "IMAC Holdings Inc Warrant 2019-12.02.24 on IMAC Holdings"
  },
  {
    "ticker": "IMAX",
    "exchange": "NYSE",
    "name": "IMAX Corporation"
  },
  {
    "ticker": "IMBI",
    "exchange": "NASDAQ",
    "name": "iMedia Brands Inc. Class A"
  },
  {
    "ticker": "IMGN",
    "exchange": "NASDAQ",
    "name": "ImmunoGen Inc."
  },
  {
    "ticker": "IMH",
    "exchange": "NYSE American",
    "name": "Impac Mortgage Holdings Inc."
  },
  {
    "ticker": "IMKTA",
    "exchange": "NASDAQ",
    "name": "Ingles Markets Incorporated Class A"
  },
  {
    "ticker": "IMLP",
    "exchange": "Cboe BZX",
    "name": "iPath S&P MLP ETN"
  },
  {
    "ticker": "IMMP",
    "exchange": "NASDAQ",
    "name": "Immutep Ltd Sponsored ADR"
  },
  {
    "ticker": "IMMR",
    "exchange": "NASDAQ",
    "name": "Immersion Corporation"
  },
  {
    "ticker": "IMMU",
    "exchange": "NASDAQ",
    "name": "Immunomedics Inc."
  },
  {
    "ticker": "IMO",
    "exchange": "NYSE American",
    "name": "Imperial Oil Limited"
  },
  {
    "ticker": "IMOM",
    "exchange": "Cboe BZX",
    "name": "Alpha Architect International Quantitative Momentum ETF"
  },
  {
    "ticker": "IMOS",
    "exchange": "NASDAQ",
    "name": "ChipMOS TECHNOLOGIES INC Sponsored ADR"
  },
  {
    "ticker": "IMRA",
    "exchange": "NASDAQ",
    "name": "IMARA Inc."
  },
  {
    "ticker": "IMRN",
    "exchange": "NASDAQ",
    "name": "Immuron Limited Sponsored ADR"
  },
  {
    "ticker": "IMRNW",
    "exchange": "NASDAQ",
    "name": "Immuron Ltd Warrant 2017-12.05.22 on Immuron Sp ADR"
  },
  {
    "ticker": "IMTB",
    "exchange": "NYSE ARCA",
    "name": "ishares Core 5-10 Year USD Bond ETF"
  },
  {
    "ticker": "IMTE",
    "exchange": "NASDAQ",
    "name": "Integrated Media Technology Limited"
  },
  {
    "ticker": "IMTM",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Intl Momentum Factor ETF"
  },
  {
    "ticker": "IMTX",
    "exchange": "NASDAQ",
    "name": "Immatics N.V."
  },
  {
    "ticker": "IMTXW",
    "exchange": "NASDAQ",
    "name": "Immatics N.V. Warrant 2020-01.07.25 on Immatics"
  },
  {
    "ticker": "IMUX",
    "exchange": "NASDAQ",
    "name": "Immunic Inc."
  },
  {
    "ticker": "IMV",
    "exchange": "NASDAQ",
    "name": "IMV Inc."
  },
  {
    "ticker": "IMVT",
    "exchange": "NASDAQ",
    "name": "Immunovant Inc"
  },
  {
    "ticker": "IMXI",
    "exchange": "NASDAQ",
    "name": "International Money Express Inc."
  },
  {
    "ticker": "INBK",
    "exchange": "NASDAQ",
    "name": "First Internet Bancorp"
  },
  {
    "ticker": "INBKL",
    "exchange": "NASDAQ",
    "name": "First Internet Bancorp Notes 2016-30.09.26 Fixed/Floating Rate"
  },
  {
    "ticker": "INBKZ",
    "exchange": "NASDAQ",
    "name": "First Internet Bancorp Notes 2019-30.06.29 Global Fixed/Floating Rate"
  },
  {
    "ticker": "INBX",
    "exchange": "NASDAQ",
    "name": "Inhibrx Inc"
  },
  {
    "ticker": "INCO",
    "exchange": "NYSE ARCA",
    "name": "Columbia India Consumer ETF"
  },
  {
    "ticker": "INCY",
    "exchange": "NASDAQ",
    "name": "Incyte Corporation"
  },
  {
    "ticker": "INDA",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI India ETF"
  },
  {
    "ticker": "INDB",
    "exchange": "NASDAQ",
    "name": "Independent Bank Corp."
  },
  {
    "ticker": "INDL",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily MSCI India Bull 3X Shares"
  },
  {
    "ticker": "INDO",
    "exchange": "NYSE American",
    "name": "Indonesia Energy Corporation Limited"
  },
  {
    "ticker": "INDS",
    "exchange": "NYSE ARCA",
    "name": "Pacer Benchmark Industrial Real Estate SCTR ETF"
  },
  {
    "ticker": "INDY",
    "exchange": "NASDAQ",
    "name": "iShares India 50 ETF"
  },
  {
    "ticker": "INFI",
    "exchange": "NASDAQ",
    "name": "Infinity Pharmaceuticals Inc."
  },
  {
    "ticker": "INFN",
    "exchange": "NASDAQ",
    "name": "Infinera Corporation"
  },
  {
    "ticker": "INFO",
    "exchange": "NYSE",
    "name": "IHS Markit Ltd."
  },
  {
    "ticker": "INFR",
    "exchange": "NASDAQ",
    "name": "Legg Mason Global Infrastructure ETF"
  },
  {
    "ticker": "INFU",
    "exchange": "NYSE American",
    "name": "InfuSystem Holdings Inc."
  },
  {
    "ticker": "INFY",
    "exchange": "NYSE",
    "name": "Infosys Limited Sponsored ADR"
  },
  {
    "ticker": "ING",
    "exchange": "NYSE",
    "name": "ING Groep NV Sponsored ADR"
  },
  {
    "ticker": "INGN",
    "exchange": "NASDAQ",
    "name": "Inogen Inc."
  },
  {
    "ticker": "INGR",
    "exchange": "NYSE",
    "name": "Ingredion Incorporated"
  },
  {
    "ticker": "INKM",
    "exchange": "NYSE ARCA",
    "name": "SPDR SSgA Income Allocation ETF"
  },
  {
    "ticker": "INMB",
    "exchange": "NASDAQ",
    "name": "INmune Bio Inc."
  },
  {
    "ticker": "INMD",
    "exchange": "NASDAQ",
    "name": "InMode Ltd."
  },
  {
    "ticker": "INN",
    "exchange": "NYSE",
    "name": "Summit Hotel Properties Inc."
  },
  {
    "ticker": "INN-D",
    "exchange": "NYSE",
    "name": "Summit Hotel Properties Inc. Cum Red Pfd Shs Series D"
  },
  {
    "ticker": "INN-E",
    "exchange": "NYSE",
    "name": "Summit Hotel Properties Inc. Cum Conv Red Pfd Registered Shs Series E"
  },
  {
    "ticker": "INO",
    "exchange": "NASDAQ",
    "name": "Inovio Pharmaceuticals Inc."
  },
  {
    "ticker": "INOD",
    "exchange": "NASDAQ",
    "name": "Innodata Inc."
  },
  {
    "ticker": "INOV",
    "exchange": "NASDAQ",
    "name": "Inovalon Holdings Inc. Class A"
  },
  {
    "ticker": "INPX",
    "exchange": "NASDAQ",
    "name": "Inpixon"
  },
  {
    "ticker": "INS",
    "exchange": "NYSE American",
    "name": "Intelligent Systems Corporation"
  },
  {
    "ticker": "INSE",
    "exchange": "NASDAQ",
    "name": "Inspired Entertainment Inc."
  },
  {
    "ticker": "INSG",
    "exchange": "NASDAQ",
    "name": "Inseego Corp."
  },
  {
    "ticker": "INSI",
    "exchange": "NYSE",
    "name": "Insight Select Income Fund"
  },
  {
    "ticker": "INSM",
    "exchange": "NASDAQ",
    "name": "Insmed Incorporated"
  },
  {
    "ticker": "INSP",
    "exchange": "NYSE",
    "name": "Inspire Medical Systems Inc."
  },
  {
    "ticker": "INSU",
    "exchange": "NASDAQ",
    "name": "Insurance Acquisition Corp. Class A"
  },
  {
    "ticker": "INSUU",
    "exchange": "NASDAQ",
    "name": "Insurance Acquisition Corp. Units Cons of 1 Sh -A- + 0.5 Wt 31.03.24"
  },
  {
    "ticker": "INSUW",
    "exchange": "NASDAQ",
    "name": "Insurance Acquisition Corp Warrant 2019-31.03.24 on Insurance Acqn-A"
  },
  {
    "ticker": "INSW",
    "exchange": "NYSE",
    "name": "International Seaways Inc."
  },
  {
    "ticker": "INSW-A",
    "exchange": "NYSE",
    "name": "International Seaways Inc. 8.5 % Notes 2018-30.06.23 Global"
  },
  {
    "ticker": "INT",
    "exchange": "NYSE",
    "name": "World Fuel Services Corporation"
  },
  {
    "ticker": "INTC",
    "exchange": "NASDAQ",
    "name": "Intel Corporation"
  },
  {
    "ticker": "INTF",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Intl Multifactor ETF"
  },
  {
    "ticker": "INTG",
    "exchange": "NASDAQ",
    "name": "InterGroup Corporation"
  },
  {
    "ticker": "INTT",
    "exchange": "NYSE American",
    "name": "inTEST Corporation"
  },
  {
    "ticker": "INTU",
    "exchange": "NASDAQ",
    "name": "Intuit Inc."
  },
  {
    "ticker": "INUV",
    "exchange": "NYSE American",
    "name": "Inuvo Inc."
  },
  {
    "ticker": "INVA",
    "exchange": "NASDAQ",
    "name": "Innoviva Inc."
  },
  {
    "ticker": "INVE",
    "exchange": "NASDAQ",
    "name": "Identiv Inc."
  },
  {
    "ticker": "INVH",
    "exchange": "NYSE",
    "name": "Invitation Homes Inc."
  },
  {
    "ticker": "INWK",
    "exchange": "NASDAQ",
    "name": "InnerWorkings Inc."
  },
  {
    "ticker": "INZY",
    "exchange": "NASDAQ",
    "name": "Inozyme Pharma Inc."
  },
  {
    "ticker": "IO",
    "exchange": "NYSE",
    "name": "ION Geophysical Corporation"
  },
  {
    "ticker": "IONS",
    "exchange": "NASDAQ",
    "name": "Ionis Pharmaceuticals Inc."
  },
  {
    "ticker": "IOO",
    "exchange": "NYSE ARCA",
    "name": "iShares Global 100 ETF"
  },
  {
    "ticker": "IOR",
    "exchange": "NYSE American",
    "name": "Income Opportunity Realty Investors Inc."
  },
  {
    "ticker": "IOSP",
    "exchange": "NASDAQ",
    "name": "Innospec Inc."
  },
  {
    "ticker": "IOVA",
    "exchange": "NASDAQ",
    "name": "Iovance Biotherapeutics Inc"
  },
  {
    "ticker": "IP",
    "exchange": "NYSE",
    "name": "International Paper Company"
  },
  {
    "ticker": "IPAC",
    "exchange": "NYSE ARCA",
    "name": "iShares Core MSCI Pacific ETF"
  },
  {
    "ticker": "IPAR",
    "exchange": "NASDAQ",
    "name": "Inter Parfums Inc."
  },
  {
    "ticker": "IPAY",
    "exchange": "NYSE ARCA",
    "name": "ETFMG Prime Mobile Payments ETF"
  },
  {
    "ticker": "IPB",
    "exchange": "NYSE American",
    "name": "Merrill Lynch Depositor Inc. 6.0518% Index Plus Trust Series 2003-1"
  },
  {
    "ticker": "IPDN",
    "exchange": "NASDAQ",
    "name": "Professional Diversity Network Inc."
  },
  {
    "ticker": "IPFF",
    "exchange": "Cboe BZX",
    "name": "iShares International Preferred Stock ETF"
  },
  {
    "ticker": "IPG",
    "exchange": "NYSE",
    "name": "Interpublic Group of Companies Inc."
  },
  {
    "ticker": "IPGP",
    "exchange": "NASDAQ",
    "name": "IPG Photonics Corporation"
  },
  {
    "ticker": "IPHA",
    "exchange": "NASDAQ",
    "name": "Innate Pharma SA Sponsored ADR"
  },
  {
    "ticker": "IPHI",
    "exchange": "NYSE",
    "name": "Inphi Corporation"
  },
  {
    "ticker": "IPI",
    "exchange": "NYSE",
    "name": "Intrepid Potash Inc."
  },
  {
    "ticker": "IPKW",
    "exchange": "NASDAQ",
    "name": "Invesco International BuyBack Achievers ETF"
  },
  {
    "ticker": "IPLDP",
    "exchange": "NASDAQ",
    "name": "Interstate Power & Light Co 5 1/10 % Cum Perp Pfd Shs Series D"
  },
  {
    "ticker": "IPO",
    "exchange": "NYSE ARCA",
    "name": "Renaissance IPO ETF"
  },
  {
    "ticker": "IPOB",
    "exchange": "NYSE",
    "name": "Social Capital Hedosophia Holdings Corp. II Class A"
  },
  {
    "ticker": "IPOB=",
    "exchange": "NYSE",
    "name": "Social Capital Hedosophia Holdings Corp. II Units Cons of 1 Sh + 1/4 Wt"
  },
  {
    "ticker": "IPOB+",
    "exchange": "NYSE",
    "name": "Social Capital Hedosophia Holdings Corp. II Warrant - on Social Cap"
  },
  {
    "ticker": "IPOC",
    "exchange": "NYSE",
    "name": "Social Capital Hedosophia Holdings Corp. III Class A"
  },
  {
    "ticker": "IPOC=",
    "exchange": "NYSE",
    "name": "Social Capital Hedosophia Holdings Corp. III Units Cons of 1 Sh + 1/4 Wt"
  },
  {
    "ticker": "IPOC+",
    "exchange": "NYSE",
    "name": "Social Capital Hedosophia Holdings Corp. III Warrant - Social Cap"
  },
  {
    "ticker": "IPOS",
    "exchange": "NYSE ARCA",
    "name": "Renaissance International IPO ETF"
  },
  {
    "ticker": "IPV",
    "exchange": "NYSE",
    "name": "InterPrivate Acquisition Corp"
  },
  {
    "ticker": "IPV=",
    "exchange": "NYSE",
    "name": "InterPrivate Acquisition Corp. Units Cons of 1 Sh + 0.5 Wt 29.10.24"
  },
  {
    "ticker": "IPV+",
    "exchange": "NYSE",
    "name": "InterPrivate Acquisition Corp Warrant 2020-29.10.24 on InterPrivate Acquisition"
  },
  {
    "ticker": "IPWR",
    "exchange": "NASDAQ",
    "name": "Ideal Power Inc."
  },
  {
    "ticker": "IQ",
    "exchange": "NASDAQ",
    "name": "iQIYI Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "IQDE",
    "exchange": "NYSE ARCA",
    "name": "FlexShares International Quality Dividend Defensive Index ETF"
  },
  {
    "ticker": "IQDF",
    "exchange": "NYSE ARCA",
    "name": "FlexShares International Quality Dividend Index Fund"
  },
  {
    "ticker": "IQDG",
    "exchange": "Cboe BZX",
    "name": "WisdomTree International Quality Dividend Growth Fund"
  },
  {
    "ticker": "IQDY",
    "exchange": "NYSE ARCA",
    "name": "FlexShares International Quality Dividend Dynamic Index Fund"
  },
  {
    "ticker": "IQI",
    "exchange": "NYSE",
    "name": "Invesco Quality Municipal Income Trust of Benef Interest Invesco Quality Municipal Income Trust"
  },
  {
    "ticker": "IQIN",
    "exchange": "NYSE ARCA",
    "name": "IQ 500 International ETF"
  },
  {
    "ticker": "IQLT",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Intl Quality Factor ETF"
  },
  {
    "ticker": "IQM",
    "exchange": "Cboe BZX",
    "name": "Franklin Intelligent Machines ETF"
  },
  {
    "ticker": "IQSI",
    "exchange": "NYSE ARCA",
    "name": "IQ Candriam ESG International Equity ETF"
  },
  {
    "ticker": "IQSU",
    "exchange": "NYSE ARCA",
    "name": "IQ Candriam ESG US Equity ETF"
  },
  {
    "ticker": "IQV",
    "exchange": "NYSE",
    "name": "IQVIA Holdings Inc"
  },
  {
    "ticker": "IR",
    "exchange": "NYSE",
    "name": "Ingersoll Rand Inc."
  },
  {
    "ticker": "IRBO",
    "exchange": "NYSE ARCA",
    "name": "iShares Robotics and Artificial Intelligence Multisector ETF"
  },
  {
    "ticker": "IRBT",
    "exchange": "NASDAQ",
    "name": "iRobot Corporation"
  },
  {
    "ticker": "IRCP",
    "exchange": "NASDAQ",
    "name": "IRSA Propiedades Comerciales S.A. Sponsored ADR"
  },
  {
    "ticker": "IRDM",
    "exchange": "NASDAQ",
    "name": "Iridium Communications Inc."
  },
  {
    "ticker": "IRET",
    "exchange": "NYSE",
    "name": "Investors Real Estate Trust"
  },
  {
    "ticker": "IRET-C",
    "exchange": "NYSE",
    "name": "Investors Real Estate Trust 6.625 % Cum Red Perp Pfd Registered Shs Series C"
  },
  {
    "ticker": "IRIX",
    "exchange": "NASDAQ",
    "name": "IRIDEX Corporation"
  },
  {
    "ticker": "IRL",
    "exchange": "NYSE",
    "name": "New Ireland Fund Inc"
  },
  {
    "ticker": "IRM",
    "exchange": "NYSE",
    "name": "Iron Mountain Inc."
  },
  {
    "ticker": "IRMD",
    "exchange": "NASDAQ",
    "name": "iRadimed Corp"
  },
  {
    "ticker": "IROQ",
    "exchange": "NASDAQ",
    "name": "IF Bancorp Inc."
  },
  {
    "ticker": "IRR",
    "exchange": "NYSE",
    "name": "Voya Natural Resources Equity Income Fund"
  },
  {
    "ticker": "IRS",
    "exchange": "NYSE",
    "name": "IRSA Inversiones y Representaciones SA Sponsored ADR"
  },
  {
    "ticker": "IRT",
    "exchange": "NYSE",
    "name": "Independence Realty Trust Inc."
  },
  {
    "ticker": "IRTC",
    "exchange": "NASDAQ",
    "name": "iRhythm Technologies Inc."
  },
  {
    "ticker": "IRWD",
    "exchange": "NASDAQ",
    "name": "Ironwood Pharmaceuticals Inc. Class A"
  },
  {
    "ticker": "ISBC",
    "exchange": "NASDAQ",
    "name": "Investors Bancorp Inc"
  },
  {
    "ticker": "ISCF",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Intl Small-Cap Multifactor ETF"
  },
  {
    "ticker": "ISD",
    "exchange": "NYSE",
    "name": "PGIM High Yield Bond Fund Inc."
  },
  {
    "ticker": "ISDR",
    "exchange": "NYSE American",
    "name": "Issuer Direct Corporation"
  },
  {
    "ticker": "ISDX",
    "exchange": "NASDAQ",
    "name": "Invesco RAFI Strategic Developed ex-US ETF"
  },
  {
    "ticker": "ISEE",
    "exchange": "NASDAQ",
    "name": "IVERIC bio Inc."
  },
  {
    "ticker": "ISEM",
    "exchange": "NASDAQ",
    "name": "Invesco RAFI Strategic Emerging Markets ETF"
  },
  {
    "ticker": "ISHG",
    "exchange": "NASDAQ",
    "name": "iShares 1-3 Year International Treasury Bond ETF"
  },
  {
    "ticker": "ISIG",
    "exchange": "NASDAQ",
    "name": "Insignia Systems Inc."
  },
  {
    "ticker": "ISMD",
    "exchange": "NYSE ARCA",
    "name": "Inspire Small/Mid Cap Impact ETF"
  },
  {
    "ticker": "ISNS",
    "exchange": "NASDAQ",
    "name": "Image Sensing Systems Inc."
  },
  {
    "ticker": "ISR",
    "exchange": "NYSE American",
    "name": "IsoRay Inc."
  },
  {
    "ticker": "ISRA",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Israel ETF"
  },
  {
    "ticker": "ISRG",
    "exchange": "NASDAQ",
    "name": "Intuitive Surgical Inc."
  },
  {
    "ticker": "ISSC",
    "exchange": "NASDAQ",
    "name": "Innovative Solutions and Support Inc."
  },
  {
    "ticker": "ISTB",
    "exchange": "NASDAQ",
    "name": "iShares Core 1-5 Year USD Bond ETF"
  },
  {
    "ticker": "ISTR",
    "exchange": "NASDAQ",
    "name": "Investar Holding Corp"
  },
  {
    "ticker": "ISZE",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Intl Size Factor ETF"
  },
  {
    "ticker": "IT",
    "exchange": "NYSE",
    "name": "Gartner Inc."
  },
  {
    "ticker": "ITA",
    "exchange": "Cboe BZX",
    "name": "iShares U.S. Aerospace & Defense ETF"
  },
  {
    "ticker": "ITB",
    "exchange": "Cboe BZX",
    "name": "iShares U.S. Home Construction ETF"
  },
  {
    "ticker": "ITCB",
    "exchange": "NYSE",
    "name": "Itau Corpbanca Sponsored ADR"
  },
  {
    "ticker": "ITCI",
    "exchange": "NASDAQ",
    "name": "Intra-Cellular Therapies Inc."
  },
  {
    "ticker": "ITEQ",
    "exchange": "NYSE ARCA",
    "name": "BlueStar Israel Technology ETF"
  },
  {
    "ticker": "ITGR",
    "exchange": "NYSE",
    "name": "Integer Holdings Corporation"
  },
  {
    "ticker": "ITI",
    "exchange": "NASDAQ",
    "name": "Iteris Inc."
  },
  {
    "ticker": "ITIC",
    "exchange": "NASDAQ",
    "name": "Investors Title Company"
  },
  {
    "ticker": "ITM",
    "exchange": "Cboe BZX",
    "name": "VanEck Vectors AMT-Free Intermediate Municipal Index ETF"
  },
  {
    "ticker": "ITMR",
    "exchange": "NASDAQ",
    "name": "Itamar Medical Ltd Sponsored ADR"
  },
  {
    "ticker": "ITOS",
    "exchange": "NASDAQ",
    "name": "iTeos Therapeutics Inc."
  },
  {
    "ticker": "ITOT",
    "exchange": "NYSE ARCA",
    "name": "iShares Core S&P Total U.S. Stock Market ETF"
  },
  {
    "ticker": "ITP",
    "exchange": "NYSE American",
    "name": "IT Tech Packaging Inc."
  },
  {
    "ticker": "ITRG",
    "exchange": "NYSE American",
    "name": "Integra Resources Corp"
  },
  {
    "ticker": "ITRI",
    "exchange": "NASDAQ",
    "name": "Itron Inc."
  },
  {
    "ticker": "ITRM",
    "exchange": "NASDAQ",
    "name": "Iterum Therapeutics Plc"
  },
  {
    "ticker": "ITRN",
    "exchange": "NASDAQ",
    "name": "Ituran Location and Control Ltd."
  },
  {
    "ticker": "ITT",
    "exchange": "NYSE",
    "name": "ITT Inc."
  },
  {
    "ticker": "ITUB",
    "exchange": "NYSE",
    "name": "Itau Unibanco Holding S.A. Sponsored ADR Pfd"
  },
  {
    "ticker": "ITW",
    "exchange": "NYSE",
    "name": "Illinois Tool Works Inc."
  },
  {
    "ticker": "IUS",
    "exchange": "NASDAQ",
    "name": "Invesco RAFI Strategic US ETF"
  },
  {
    "ticker": "IUSB",
    "exchange": "NASDAQ",
    "name": "iShares Core Total USD Bond Market ETF"
  },
  {
    "ticker": "IUSG",
    "exchange": "NASDAQ",
    "name": "iShares Core S&P U.S. Growth ETF"
  },
  {
    "ticker": "IUSS",
    "exchange": "NASDAQ",
    "name": "Invesco RAFI Strategic US Small Company ETF"
  },
  {
    "ticker": "IUSV",
    "exchange": "NASDAQ",
    "name": "iShares Core S&P US Value ETF"
  },
  {
    "ticker": "IVA",
    "exchange": "NASDAQ",
    "name": "Inventiva SA ADR"
  },
  {
    "ticker": "IVAC",
    "exchange": "NASDAQ",
    "name": "Intevac Inc."
  },
  {
    "ticker": "IVAL",
    "exchange": "Cboe BZX",
    "name": "Alpha Architect International Quantitative Value ETF"
  },
  {
    "ticker": "IVC",
    "exchange": "NYSE",
    "name": "Invacare Corporation"
  },
  {
    "ticker": "IVE",
    "exchange": "NYSE ARCA",
    "name": "iShares S&P 500 Value ETF"
  },
  {
    "ticker": "IVES",
    "exchange": "NYSE ARCA",
    "name": "Wedbush ETFMG Global Cloud Technology ETF"
  },
  {
    "ticker": "IVH",
    "exchange": "NYSE",
    "name": "Ivy High Income Opportunities Fund"
  },
  {
    "ticker": "IVLU",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Intl Value Factor ETF"
  },
  {
    "ticker": "IVOG",
    "exchange": "NYSE ARCA",
    "name": "Vanguard S&P Mid-Cap 400 Growth ETF"
  },
  {
    "ticker": "IVOL",
    "exchange": "NYSE ARCA",
    "name": "Quadratic Interest Rate Volatility & Inflation Hedge ETF"
  },
  {
    "ticker": "IVOO",
    "exchange": "NYSE ARCA",
    "name": "Vanguard S&P Mid-Cap 400 ETF"
  },
  {
    "ticker": "IVOV",
    "exchange": "NYSE ARCA",
    "name": "Vanguard S&P Mid-Cap 400 Value ETF"
  },
  {
    "ticker": "IVR",
    "exchange": "NYSE",
    "name": "Invesco Mortgage Capital Inc."
  },
  {
    "ticker": "IVR-A",
    "exchange": "NYSE",
    "name": "Invesco Mortgage Capital Inc Cum Red Pfd Shs Series A"
  },
  {
    "ticker": "IVR-B",
    "exchange": "NYSE",
    "name": "Invesco Mortgage Capital Inc Cum Red Pfd Shs Series B"
  },
  {
    "ticker": "IVR-C",
    "exchange": "NYSE",
    "name": "Invesco Mortgage Capital Inc Cum Red Pfd Registered Shs Series C"
  },
  {
    "ticker": "IVV",
    "exchange": "NYSE ARCA",
    "name": "iShares Core S&P 500 ETF"
  },
  {
    "ticker": "IVW",
    "exchange": "NYSE ARCA",
    "name": "iShares S&P 500 Growth ETF"
  },
  {
    "ticker": "IVZ",
    "exchange": "NYSE",
    "name": "Invesco Ltd."
  },
  {
    "ticker": "IWB",
    "exchange": "NYSE ARCA",
    "name": "iShares Russell 1000 ETF"
  },
  {
    "ticker": "IWC",
    "exchange": "NYSE ARCA",
    "name": "iShares Micro-Cap ETF"
  },
  {
    "ticker": "IWD",
    "exchange": "NYSE ARCA",
    "name": "iShares Russell 1000 Value ETF"
  },
  {
    "ticker": "IWF",
    "exchange": "NYSE ARCA",
    "name": "iShares Russell 1000 Growth ETF"
  },
  {
    "ticker": "IWL",
    "exchange": "NYSE ARCA",
    "name": "iShares Russell Top 200 ETF"
  },
  {
    "ticker": "IWM",
    "exchange": "NYSE ARCA",
    "name": "iShares Russell 2000 ETF"
  },
  {
    "ticker": "IWN",
    "exchange": "NYSE ARCA",
    "name": "iShares Russell 2000 Value ETF"
  },
  {
    "ticker": "IWO",
    "exchange": "NYSE ARCA",
    "name": "iShares Russell 2000 Growth ETF"
  },
  {
    "ticker": "IWP",
    "exchange": "NYSE ARCA",
    "name": "iShares Russell Mid-Cap Growth ETF"
  },
  {
    "ticker": "IWR",
    "exchange": "NYSE ARCA",
    "name": "iShares Russell Midcap ETF"
  },
  {
    "ticker": "IWS",
    "exchange": "NYSE ARCA",
    "name": "iShares Russell Mid-Cap Value ETF"
  },
  {
    "ticker": "IWV",
    "exchange": "NYSE ARCA",
    "name": "iShares Russell 3000 ETF"
  },
  {
    "ticker": "IWX",
    "exchange": "NYSE ARCA",
    "name": "iShares Russell Top 200 Value ETF"
  },
  {
    "ticker": "IWY",
    "exchange": "NYSE ARCA",
    "name": "iShares Russell Top 200 Growth ETF"
  },
  {
    "ticker": "IX",
    "exchange": "NYSE",
    "name": "ORIX Corporation Sponsored ADR"
  },
  {
    "ticker": "IXC",
    "exchange": "NYSE ARCA",
    "name": "iShares Global Energy ETF"
  },
  {
    "ticker": "IXG",
    "exchange": "NYSE ARCA",
    "name": "iShares Global Financials ETF"
  },
  {
    "ticker": "IXJ",
    "exchange": "NYSE ARCA",
    "name": "iShares Global Healthcare ETF"
  },
  {
    "ticker": "IXN",
    "exchange": "NYSE ARCA",
    "name": "iShares Global Tech ETF"
  },
  {
    "ticker": "IXP",
    "exchange": "NYSE ARCA",
    "name": "iShares Global Comm Services ETF"
  },
  {
    "ticker": "IXSE",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree India Ex-State-Owned Enterprises Fund"
  },
  {
    "ticker": "IXUS",
    "exchange": "NASDAQ",
    "name": "iShares Core MSCI Total International Stock ETF"
  },
  {
    "ticker": "IYC",
    "exchange": "NYSE ARCA",
    "name": "iShares U.S. Consumer Services ETF"
  },
  {
    "ticker": "IYE",
    "exchange": "NYSE ARCA",
    "name": "iShares U.S. Energy ETF"
  },
  {
    "ticker": "IYF",
    "exchange": "NYSE ARCA",
    "name": "iShares U.S. Financials ETF"
  },
  {
    "ticker": "IYG",
    "exchange": "NYSE ARCA",
    "name": "iShares US Financial Services ETF"
  },
  {
    "ticker": "IYH",
    "exchange": "NYSE ARCA",
    "name": "iShares U.S. Healthcare ETF"
  },
  {
    "ticker": "IYJ",
    "exchange": "Cboe BZX",
    "name": "iShares U.S. Industrials ETF"
  },
  {
    "ticker": "IYK",
    "exchange": "NYSE ARCA",
    "name": "iShares U.S. Consumer Goods ETF"
  },
  {
    "ticker": "IYLD",
    "exchange": "Cboe BZX",
    "name": "iShares Morningstar Multi-Asset Income ETF"
  },
  {
    "ticker": "IYM",
    "exchange": "NYSE ARCA",
    "name": "iShares U.S. Basic Materials ETF"
  },
  {
    "ticker": "IYR",
    "exchange": "NYSE ARCA",
    "name": "iShares U.S. Real Estate ETF"
  },
  {
    "ticker": "IYT",
    "exchange": "Cboe BZX",
    "name": "iShares Transportation Average ETF"
  },
  {
    "ticker": "IYW",
    "exchange": "NYSE ARCA",
    "name": "iShares U.S. Technology ETF"
  },
  {
    "ticker": "IYY",
    "exchange": "NYSE ARCA",
    "name": "iShares Dow Jones U.S. ETF"
  },
  {
    "ticker": "IYZ",
    "exchange": "Cboe BZX",
    "name": "iShares U.S. Telecommunications ETF"
  },
  {
    "ticker": "IZEA",
    "exchange": "NASDAQ",
    "name": "IZEA Worldwide Inc."
  },
  {
    "ticker": "IZRL",
    "exchange": "Cboe BZX",
    "name": "ARK Israel Innovative Technology ETF"
  },
  {
    "ticker": "J",
    "exchange": "NYSE",
    "name": "Jacobs Engineering Group Inc."
  },
  {
    "ticker": "JACK",
    "exchange": "NASDAQ",
    "name": "Jack in the Box Inc."
  },
  {
    "ticker": "JAGG",
    "exchange": "NYSE ARCA",
    "name": "J.P. Morgan Exchange-Traded Fund Trust"
  },
  {
    "ticker": "JAGX",
    "exchange": "NASDAQ",
    "name": "Jaguar Health Inc."
  },
  {
    "ticker": "JAKK",
    "exchange": "NASDAQ",
    "name": "JAKKS Pacific Inc."
  },
  {
    "ticker": "JAMF",
    "exchange": "NASDAQ",
    "name": "Jamf Holding Corp"
  },
  {
    "ticker": "JAN",
    "exchange": "NASDAQ",
    "name": "JanOne Inc."
  },
  {
    "ticker": "JAX",
    "exchange": "NYSE",
    "name": "J. Alexander's Holdings Inc. Class A"
  },
  {
    "ticker": "JAZZ",
    "exchange": "NASDAQ",
    "name": "Jazz Pharmaceuticals Plc"
  },
  {
    "ticker": "JBGS",
    "exchange": "NYSE",
    "name": "JBG SMITH Properties"
  },
  {
    "ticker": "JBHT",
    "exchange": "NASDAQ",
    "name": "J.B. Hunt Transport Services Inc."
  },
  {
    "ticker": "JBK",
    "exchange": "NYSE",
    "name": "Corporate Backed Tr Ctfs 3 1/2 %  2004-15.2.34 Ser 2004-6 BNYSE Americand on 6.345% Cap Secs34 GoldSach"
  },
  {
    "ticker": "JBL",
    "exchange": "NYSE",
    "name": "Jabil Inc."
  },
  {
    "ticker": "JBLU",
    "exchange": "NASDAQ",
    "name": "JetBlue Airways Corporation"
  },
  {
    "ticker": "JBSS",
    "exchange": "NASDAQ",
    "name": "John B. Sanfilippo & Son Inc."
  },
  {
    "ticker": "JBT",
    "exchange": "NYSE",
    "name": "John Bean Technologies Corporation"
  },
  {
    "ticker": "JCAP",
    "exchange": "NYSE",
    "name": "Jernigan Capital Inc."
  },
  {
    "ticker": "JCAP-B",
    "exchange": "NYSE",
    "name": "Jernigan Capital Inc 7 % Cum Conv Perp Red Pfd Registered Shs Series B"
  },
  {
    "ticker": "JCE",
    "exchange": "NYSE",
    "name": "Nuveen Core Equity Alpha Fund"
  },
  {
    "ticker": "JCI",
    "exchange": "NYSE",
    "name": "Johnson Controls International plc"
  },
  {
    "ticker": "JCO",
    "exchange": "NYSE",
    "name": "Nuveen Credit Opportunities 2022 Target Term Fund"
  },
  {
    "ticker": "JCOM",
    "exchange": "NASDAQ",
    "name": "J2 Global Inc."
  },
  {
    "ticker": "JCPB",
    "exchange": "Cboe BZX",
    "name": "JPMorgan Core Plus Bond ETF"
  },
  {
    "ticker": "JCS",
    "exchange": "NASDAQ",
    "name": "Communications Systems Inc."
  },
  {
    "ticker": "JCTCF",
    "exchange": "NASDAQ",
    "name": "Jewett-Cameron Trading Company Ltd."
  },
  {
    "ticker": "JD",
    "exchange": "NASDAQ",
    "name": "JD.com Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "JDD",
    "exchange": "NYSE",
    "name": "Nuveen Diversified Dividend And Income Fund"
  },
  {
    "ticker": "JDIV",
    "exchange": "NYSE ARCA",
    "name": "JPMorgan U.S. Dividend ETF"
  },
  {
    "ticker": "JDST",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Junior Gold Miners Index Bear 2X Shares"
  },
  {
    "ticker": "JE",
    "exchange": "NYSE",
    "name": "Just Energy Group Inc."
  },
  {
    "ticker": "JE-A",
    "exchange": "NYSE",
    "name": "Just Energy Group Inc. Cum Pfd Registered Shs Series A"
  },
  {
    "ticker": "JEF",
    "exchange": "NYSE",
    "name": "Jefferies Financial Group Inc."
  },
  {
    "ticker": "JELD",
    "exchange": "NYSE",
    "name": "JELD-WEN Holding Inc."
  },
  {
    "ticker": "JEMD",
    "exchange": "NYSE",
    "name": "Nuveen Emerging Markets Debt 2022 Target Term Fund"
  },
  {
    "ticker": "JEPI",
    "exchange": "NYSE ARCA",
    "name": "JPMorgan Equity Premium Income ETF"
  },
  {
    "ticker": "JEQ",
    "exchange": "NYSE",
    "name": "Aberdeen Japan Equity Fund Inc"
  },
  {
    "ticker": "JETS",
    "exchange": "NYSE ARCA",
    "name": "U.S. Global Jets ETF"
  },
  {
    "ticker": "JFIN",
    "exchange": "NASDAQ",
    "name": "Jiayin Group Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "JFK",
    "exchange": "NASDAQ",
    "name": "8i Enterprises Acquisition Corp"
  },
  {
    "ticker": "JFKKR",
    "exchange": "NASDAQ",
    "name": "8i Enterprises Acquisition Corp Rights For Shares"
  },
  {
    "ticker": "JFKKU",
    "exchange": "NASDAQ",
    "name": "8i Enterprises Acquisition Corp Units Cons of 1 Sh + 1 Rt + 1 Wt"
  },
  {
    "ticker": "JFKKW",
    "exchange": "NASDAQ",
    "name": "8i Enterprises Acquisition Corp Warrant - on 8i Entps Acqn"
  },
  {
    "ticker": "JFR",
    "exchange": "NYSE",
    "name": "Nuveen Floating Rate Income Fund"
  },
  {
    "ticker": "JFU",
    "exchange": "NASDAQ",
    "name": "9F Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "JG",
    "exchange": "NASDAQ",
    "name": "Aurora Mobile Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "JGH",
    "exchange": "NYSE",
    "name": "Nuveen Global High Income Fund"
  },
  {
    "ticker": "JHAA",
    "exchange": "NYSE",
    "name": "Nuveen High Income 2023 Target Term Fund Shs of Benef Interest"
  },
  {
    "ticker": "JHB",
    "exchange": "NYSE",
    "name": "Nuveen High Income November 2021 Target Term Fund"
  },
  {
    "ticker": "JHCS",
    "exchange": "NYSE ARCA",
    "name": "John Hancock Multifactor Media & Communications ETF"
  },
  {
    "ticker": "JHEM",
    "exchange": "NYSE ARCA",
    "name": "John Hancock Multifactor Emerging Markets ETF"
  },
  {
    "ticker": "JHG",
    "exchange": "NYSE",
    "name": "Janus Henderson Group PLC"
  },
  {
    "ticker": "JHI",
    "exchange": "NYSE",
    "name": "John Hancock Investors Trust"
  },
  {
    "ticker": "JHMA",
    "exchange": "NYSE ARCA",
    "name": "John Hancock Multifactor Materials ETF"
  },
  {
    "ticker": "JHMC",
    "exchange": "NYSE ARCA",
    "name": "John Hancock Multifactor Consumer Discretionary ETF"
  },
  {
    "ticker": "JHMD",
    "exchange": "NYSE ARCA",
    "name": "John Hancock Multifactor Developed International ETF"
  },
  {
    "ticker": "JHME",
    "exchange": "NYSE ARCA",
    "name": "John Hancock Multifactor Energy ETF"
  },
  {
    "ticker": "JHMF",
    "exchange": "NYSE ARCA",
    "name": "John Hancock Multifactor Financials ETF"
  },
  {
    "ticker": "JHMH",
    "exchange": "NYSE ARCA",
    "name": "John Hancock Multifactor Healthcare ETF"
  },
  {
    "ticker": "JHMI",
    "exchange": "NYSE ARCA",
    "name": "John Hancock Multifactor Industrials ETF"
  },
  {
    "ticker": "JHML",
    "exchange": "NYSE ARCA",
    "name": "John Hancock Multifactor Large Cap ETF"
  },
  {
    "ticker": "JHMM",
    "exchange": "NYSE ARCA",
    "name": "John Hancock Multifactor Mid Cap ETF"
  },
  {
    "ticker": "JHMS",
    "exchange": "NYSE ARCA",
    "name": "John Hancock Multifactor Consumer Staples ETF"
  },
  {
    "ticker": "JHMT",
    "exchange": "NYSE ARCA",
    "name": "John Hancock Multifactor Technology ETF"
  },
  {
    "ticker": "JHMU",
    "exchange": "NYSE ARCA",
    "name": "John Hancock Multifactor Utilities ETF"
  },
  {
    "ticker": "JHS",
    "exchange": "NYSE",
    "name": "John Hancock Income Securities Trust"
  },
  {
    "ticker": "JHSC",
    "exchange": "NYSE ARCA",
    "name": "John Hancock Multifactor Small Cap ETF"
  },
  {
    "ticker": "JHX",
    "exchange": "NYSE",
    "name": "James Hardie Industries PLC Sponsored ADR"
  },
  {
    "ticker": "JHY",
    "exchange": "NYSE",
    "name": "Nuveen High Income 2020 Target Term Fund"
  },
  {
    "ticker": "JIG",
    "exchange": "NYSE ARCA",
    "name": "JPMorgan International Growth ETF"
  },
  {
    "ticker": "JIGB",
    "exchange": "NYSE ARCA",
    "name": "JPMorgan Corporate Bond Research Enhanced ETF"
  },
  {
    "ticker": "JIH",
    "exchange": "NYSE",
    "name": "Juniper Industrial Holdings Inc Class A"
  },
  {
    "ticker": "JIH=",
    "exchange": "NYSE",
    "name": "Juniper Industrial Holdings Inc Units Cons od 1 Sh + 1/2 Wt 24"
  },
  {
    "ticker": "JIH+",
    "exchange": "NYSE",
    "name": "Juniper Industrial Holdings Inc Warrant 2019-2024 on Juni Indl Hldg Rg-A"
  },
  {
    "ticker": "JILL",
    "exchange": "NYSE",
    "name": "J.Jill Inc."
  },
  {
    "ticker": "JJA",
    "exchange": "NYSE ARCA",
    "name": "iPath Series B Bloomberg Agriculture Subindex Total Return ETN"
  },
  {
    "ticker": "JJC",
    "exchange": "NYSE ARCA",
    "name": "iPath Series B Bloomberg Copper Subindex Total Return ETN"
  },
  {
    "ticker": "JJE",
    "exchange": "NYSE ARCA",
    "name": "iPath Series B Bloomberg Energy Subindex Total Return ETN"
  },
  {
    "ticker": "JJG",
    "exchange": "NYSE ARCA",
    "name": "iPath Series B Bloomberg Grains Subindex Total Return ETN"
  },
  {
    "ticker": "JJM",
    "exchange": "NYSE ARCA",
    "name": "iPath Series B Bloomberg Industrial Metals Subindex Total Return ETN"
  },
  {
    "ticker": "JJN",
    "exchange": "NYSE ARCA",
    "name": "iPath Series B Bloomberg Nickel Subindex Total Return ETN"
  },
  {
    "ticker": "JJP",
    "exchange": "NYSE ARCA",
    "name": "iPath Series B Bloomberg Precious Metals Subindex Total Return ETN"
  },
  {
    "ticker": "JJS",
    "exchange": "NYSE ARCA",
    "name": "iPath Series B Bloomberg Softs Subindex Total Return ETN"
  },
  {
    "ticker": "JJSF",
    "exchange": "NASDAQ",
    "name": "J & J Snack Foods Corp."
  },
  {
    "ticker": "JJT",
    "exchange": "NYSE ARCA",
    "name": "iPath Series B Bloomberg Tin Subindex Total Return ETN"
  },
  {
    "ticker": "JJU",
    "exchange": "NYSE ARCA",
    "name": "iPath Series B Bloomberg Aluminum Subindex Total Return ETN"
  },
  {
    "ticker": "JKD",
    "exchange": "NYSE ARCA",
    "name": "iShares Morningstar Large-Cap ETF"
  },
  {
    "ticker": "JKE",
    "exchange": "NYSE ARCA",
    "name": "iShares Morningstar Large-Cap Growth ETF"
  },
  {
    "ticker": "JKF",
    "exchange": "NYSE ARCA",
    "name": "iShares Morningstar Large Cap Value ETF"
  },
  {
    "ticker": "JKG",
    "exchange": "NYSE ARCA",
    "name": "iShares Morningstar Mid-Cap ETF"
  },
  {
    "ticker": "JKH",
    "exchange": "NYSE ARCA",
    "name": "iShares Morningstar Mid-Cap Growth ETF"
  },
  {
    "ticker": "JKHY",
    "exchange": "NASDAQ",
    "name": "Jack Henry & Associates Inc."
  },
  {
    "ticker": "JKI",
    "exchange": "NASDAQ",
    "name": "iShares Morningstar Mid-Cap Value ETF"
  },
  {
    "ticker": "JKJ",
    "exchange": "NYSE ARCA",
    "name": "iShares Morningstar Small-Cap ETF"
  },
  {
    "ticker": "JKK",
    "exchange": "NYSE ARCA",
    "name": "iShares Morningstar Small-Cap Growth ETF"
  },
  {
    "ticker": "JKL",
    "exchange": "NYSE ARCA",
    "name": "iShares Morningstar Small Cap Value ETF"
  },
  {
    "ticker": "JKS",
    "exchange": "NYSE",
    "name": "JinkoSolar Holding Co. Ltd. Sponsored ADR"
  },
  {
    "ticker": "JLL",
    "exchange": "NYSE",
    "name": "Jones Lang LaSalle Incorporated"
  },
  {
    "ticker": "JLS",
    "exchange": "NYSE",
    "name": "Nuveen Mortgage and Income Fund"
  },
  {
    "ticker": "JMBS",
    "exchange": "NYSE ARCA",
    "name": "Janus Henderson Mortgage-Backed Securities ETF"
  },
  {
    "ticker": "JMIA",
    "exchange": "NYSE",
    "name": "Jumia Technologies AG Sponsored ADR"
  },
  {
    "ticker": "JMIN",
    "exchange": "NYSE ARCA",
    "name": "JPMorgan U.S. Minimum Volatility ETF"
  },
  {
    "ticker": "JMM",
    "exchange": "NYSE",
    "name": "Nuveen Multi-Market Income Fund"
  },
  {
    "ticker": "JMOM",
    "exchange": "NYSE ARCA",
    "name": "JPMorgan U.S. Momentum Factor ETF"
  },
  {
    "ticker": "JMP",
    "exchange": "NYSE",
    "name": "JMP Group LLC"
  },
  {
    "ticker": "JMPNL",
    "exchange": "NASDAQ",
    "name": "JMP Group LLC 7.25 % Notes 2017-15.11.27 Gtd Global"
  },
  {
    "ticker": "JMPNZ",
    "exchange": "NASDAQ",
    "name": "JMP Group LLC 6.875 % Notes 2019-30.09.29 Global"
  },
  {
    "ticker": "JMST",
    "exchange": "Cboe BZX",
    "name": "JPMorgan Ultra-Short Municipal Income ETF"
  },
  {
    "ticker": "JMUB",
    "exchange": "Cboe BZX",
    "name": "JPMorgan Municipal ETF"
  },
  {
    "ticker": "JNCE",
    "exchange": "NASDAQ",
    "name": "Jounce Therapeutics Inc."
  },
  {
    "ticker": "JNJ",
    "exchange": "NYSE",
    "name": "Johnson & Johnson"
  },
  {
    "ticker": "JNK",
    "exchange": "NYSE ARCA",
    "name": "SPDR Bloomberg Barclays High Yield Bond ETF"
  },
  {
    "ticker": "JNPR",
    "exchange": "NYSE",
    "name": "Juniper Networks Inc."
  },
  {
    "ticker": "JNUG",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Junior Gold Miners Index Bull 2X Shares"
  },
  {
    "ticker": "JO",
    "exchange": "NYSE ARCA",
    "name": "iPath Series B Bloomberg Coffee Subindex Total Return ETN"
  },
  {
    "ticker": "JOB",
    "exchange": "NYSE American",
    "name": "GEE Group Inc."
  },
  {
    "ticker": "JOBS",
    "exchange": "NASDAQ",
    "name": "51job Inc Sponsored ADR"
  },
  {
    "ticker": "JOE",
    "exchange": "NYSE",
    "name": "St. Joe Company"
  },
  {
    "ticker": "JOF",
    "exchange": "NYSE",
    "name": "Japan Smaller Capitalization Fund Inc Smaller Capitalization Fund"
  },
  {
    "ticker": "JOUT",
    "exchange": "NASDAQ",
    "name": "Johnson Outdoors Inc. Class A"
  },
  {
    "ticker": "JOYY",
    "exchange": "NYSE ARCA",
    "name": "Infusive Compounding Global Equities ETF"
  },
  {
    "ticker": "JP",
    "exchange": "NYSE",
    "name": "Jupai Holdings Ltd. Sponsored ADR"
  },
  {
    "ticker": "JPC",
    "exchange": "NYSE",
    "name": "Nuveen Preferred & Income Opportunities Fund of Benef Interest"
  },
  {
    "ticker": "JPEM",
    "exchange": "NYSE ARCA",
    "name": "J.P. Morgan Diversified Return Emerging Markets Equity ETF"
  },
  {
    "ticker": "JPGB",
    "exchange": "Cboe BZX",
    "name": "JPMorgan Global Bond Opportunities ETF"
  },
  {
    "ticker": "JPHY",
    "exchange": "Cboe BZX",
    "name": "JPMORGAN HIGH YIELD RESEARCH ENHANCED ETF"
  },
  {
    "ticker": "JPI",
    "exchange": "NYSE",
    "name": "Nuveen Preferred & Income Term Fund"
  },
  {
    "ticker": "JPIN",
    "exchange": "NYSE ARCA",
    "name": "J.P. Morgan Diversified Return International Equity ETF"
  },
  {
    "ticker": "JPM",
    "exchange": "NYSE",
    "name": "JPMorgan ChNYSE American & Co."
  },
  {
    "ticker": "JPM-C",
    "exchange": "NYSE",
    "name": "JPMorgan ChNYSE American & Co Depositary Shs Repr 1/400th Non-Cum Perp Red Pfd Registered ShsSeries -EE-"
  },
  {
    "ticker": "JPM-D",
    "exchange": "NYSE",
    "name": "JPMorgan ChNYSE American & Co Depositary Shs Repr 1/400th Non-Cum Red Pfd Registered Shs Series -DD-"
  },
  {
    "ticker": "JPM-G",
    "exchange": "NYSE",
    "name": "JPMorgan ChNYSE American & Co Deposit Shs Repr 1/400th 6 1/10 % Non-Cum Pfd Shs Series -AA-"
  },
  {
    "ticker": "JPM-H",
    "exchange": "NYSE",
    "name": "JPMorgan ChNYSE American & Co Deposit Shs Repr 1/40th 6.15 % Non-Cum Pfd Shs Series -BB-"
  },
  {
    "ticker": "JPM-J",
    "exchange": "NYSE",
    "name": "JPMorgan ChNYSE American & Co. Depositary Shs Repr 1/400th 4.75 Non-Cum Red Perp Pfd Rg Shs Series GG"
  },
  {
    "ticker": "JPMB",
    "exchange": "NYSE ARCA",
    "name": "JPMorgan USD Emerging Markets Sovereign Bond ETF"
  },
  {
    "ticker": "JPME",
    "exchange": "NYSE ARCA",
    "name": "JPMorgan Diversified Return U.S. Mid Cap Equity ETF"
  },
  {
    "ticker": "JPN",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers Japan JPX-Nikkei 400 Equity ETF"
  },
  {
    "ticker": "JPNL",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily MSCI Japan Bull 3X Shares"
  },
  {
    "ticker": "JPS",
    "exchange": "NYSE",
    "name": "Nuveen Preferred & Income Securities Fund of Benef.Interest"
  },
  {
    "ticker": "JNYSE ARCA",
    "exchange": "NYSE ARCA",
    "name": "JPMorgan Diversified Return U.S. Small Cap Equity ETF"
  },
  {
    "ticker": "JPST",
    "exchange": "Cboe BZX",
    "name": "JPMorgan Ultra-Short Income ETF"
  },
  {
    "ticker": "JPT",
    "exchange": "NYSE",
    "name": "Nuveen Preferred & Income 2022 Term Fund"
  },
  {
    "ticker": "JPUS",
    "exchange": "NYSE ARCA",
    "name": "JPMorgan Diversified Return U.S. Equity ETF"
  },
  {
    "ticker": "JPXN",
    "exchange": "NYSE ARCA",
    "name": "iShares JPX-Nikkei 400 ETF"
  },
  {
    "ticker": "JQC",
    "exchange": "NYSE",
    "name": "Nuveen Credit Strategies Income Fund"
  },
  {
    "ticker": "JQUA",
    "exchange": "NYSE ARCA",
    "name": "JPMorgan U.S. Quality Factor ETF"
  },
  {
    "ticker": "JRI",
    "exchange": "NYSE",
    "name": "Nuveen Real Asset Income & Growth Fund"
  },
  {
    "ticker": "JRJC",
    "exchange": "NASDAQ",
    "name": "China Finance Online Co. Ltd. Sponsored ADR"
  },
  {
    "ticker": "JRO",
    "exchange": "NYSE",
    "name": "Nuveen Floating Rate Income Opportunity Fund ETF"
  },
  {
    "ticker": "JRS",
    "exchange": "NYSE",
    "name": "Nuveen Real Estate Income Fund Real Estate Income Fund"
  },
  {
    "ticker": "JRSH",
    "exchange": "NASDAQ",
    "name": "Jerash Holdings (US) Inc."
  },
  {
    "ticker": "JRVR",
    "exchange": "NASDAQ",
    "name": "James River Group Holdings Ltd"
  },
  {
    "ticker": "JSD",
    "exchange": "NYSE",
    "name": "Nuveen Short Duration Credit Opportunities Fund"
  },
  {
    "ticker": "JSM",
    "exchange": "NASDAQ",
    "name": "Navient Corporation 6% Senior Notes due December 15 2043"
  },
  {
    "ticker": "JSMD",
    "exchange": "NASDAQ",
    "name": "Janus Henderson Small/Mid Cap Growth Alpha ETF"
  },
  {
    "ticker": "JSML",
    "exchange": "NASDAQ",
    "name": "Janus Henderson Small Cap Growth Alpha ETF"
  },
  {
    "ticker": "JT",
    "exchange": "NYSE",
    "name": "Jianpu Technology Inc ADR Class A"
  },
  {
    "ticker": "JTA",
    "exchange": "NYSE",
    "name": "Nuveen Tax-Advantaged Total Return Strategy Fund"
  },
  {
    "ticker": "JTD",
    "exchange": "NYSE",
    "name": "Nuveen Tax-Advantaged Dividend Growth Fund"
  },
  {
    "ticker": "JULZ",
    "exchange": "Cboe BZX",
    "name": "TrueShares Structured Outcome (July) ETF"
  },
  {
    "ticker": "JUST",
    "exchange": "NYSE ARCA",
    "name": "Goldman Sachs JUST U.S. Large Cap Equity ETF"
  },
  {
    "ticker": "JVA",
    "exchange": "NASDAQ",
    "name": "Coffee Holding Co. Inc."
  },
  {
    "ticker": "JVAL",
    "exchange": "NYSE ARCA",
    "name": "JPMorgan U.S. Value Factor ETF"
  },
  {
    "ticker": "JW.A",
    "exchange": "NYSE",
    "name": "John Wiley & Sons Inc. Class A"
  },
  {
    "ticker": "JW.B",
    "exchange": "NYSE",
    "name": "John Wiley & Sons Inc. Class B"
  },
  {
    "ticker": "JWN",
    "exchange": "NYSE",
    "name": "Nordstrom Inc."
  },
  {
    "ticker": "JWS",
    "exchange": "NYSE",
    "name": "Jaws Acquisition Corp. Class A"
  },
  {
    "ticker": "JWS=",
    "exchange": "NYSE",
    "name": "Jaws Acquisition Corp. Units Cons of 1 Sh + 1/3 Wt"
  },
  {
    "ticker": "JWS+",
    "exchange": "NYSE",
    "name": "Jaws Acquisition Corp. Warrant - on Jaws"
  },
  {
    "ticker": "JXI",
    "exchange": "NYSE ARCA",
    "name": "iShares Global Utilities ETF"
  },
  {
    "ticker": "JYNT",
    "exchange": "NASDAQ",
    "name": "Joint Corp"
  },
  {
    "ticker": "K",
    "exchange": "NYSE",
    "name": "Kellogg Company"
  },
  {
    "ticker": "KAI",
    "exchange": "NYSE",
    "name": "Kadant Inc."
  },
  {
    "ticker": "KALA",
    "exchange": "NASDAQ",
    "name": "Kala Pharmaceuticals Inc."
  },
  {
    "ticker": "KALL",
    "exchange": "NYSE ARCA",
    "name": "KraneShares MSCI All China Index ETF"
  },
  {
    "ticker": "KALU",
    "exchange": "NASDAQ",
    "name": "Kaiser Aluminum Corporation"
  },
  {
    "ticker": "KALV",
    "exchange": "NASDAQ",
    "name": "KalVista Pharmaceuticals Inc."
  },
  {
    "ticker": "KAMN",
    "exchange": "NYSE",
    "name": "Kaman Corporation Class A"
  },
  {
    "ticker": "KAPR",
    "exchange": "Cboe BZX",
    "name": "Innovator Russell 2000 Power Buffer ETF - April"
  },
  {
    "ticker": "KAR",
    "exchange": "NYSE",
    "name": "KAR Auction Services Inc."
  },
  {
    "ticker": "KARS",
    "exchange": "NYSE ARCA",
    "name": "KraneShares Electric Vehicles & Future Mobility Index ETF"
  },
  {
    "ticker": "KB",
    "exchange": "NYSE",
    "name": "KB Financial Group Inc. Sponsored ADR"
  },
  {
    "ticker": "KBA",
    "exchange": "NYSE ARCA",
    "name": "KraneShares Bosera MSCI China A Share ETF"
  },
  {
    "ticker": "KBAL",
    "exchange": "NASDAQ",
    "name": "Kimball International Inc. Class B"
  },
  {
    "ticker": "KBE",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Bank ETF"
  },
  {
    "ticker": "KBH",
    "exchange": "NYSE",
    "name": "KB Home"
  },
  {
    "ticker": "KBLM",
    "exchange": "NASDAQ",
    "name": "KBL Merger Corp. IV"
  },
  {
    "ticker": "KBLMR",
    "exchange": "NASDAQ",
    "name": "KBL Merger Corp. IV Rights 2019-09.04.20 For Shares Ext Until 09.11.20"
  },
  {
    "ticker": "KBLMU",
    "exchange": "NASDAQ",
    "name": "KBL Merger Corp. IV Units 2017-15.01.2024 Cons of 1 Sh + 1 Wt 01.24"
  },
  {
    "ticker": "KBLMW",
    "exchange": "NASDAQ",
    "name": "KBL Merger Corp IV Warrant 2017-15.01.24 on KBL Merger IV"
  },
  {
    "ticker": "KBNT",
    "exchange": "NASDAQ",
    "name": "Kubient Inc"
  },
  {
    "ticker": "KBNTW",
    "exchange": "NASDAQ",
    "name": "Kubient Inc Warrants 2020-09.07.25 on Kubient Inc"
  },
  {
    "ticker": "KBR",
    "exchange": "NYSE",
    "name": "KBR Inc."
  },
  {
    "ticker": "KBSF",
    "exchange": "NASDAQ",
    "name": "KBS Fashion Group Ltd."
  },
  {
    "ticker": "KBWB",
    "exchange": "NASDAQ",
    "name": "Invesco KBW Bank ETF"
  },
  {
    "ticker": "KBWD",
    "exchange": "NASDAQ",
    "name": "Invesco KBW High Dividend Yield Financial ETF"
  },
  {
    "ticker": "KBWP",
    "exchange": "NASDAQ",
    "name": "Invesco KBW Property & Casualty Insurance ETF"
  },
  {
    "ticker": "KBWR",
    "exchange": "NASDAQ",
    "name": "Invesco KBW Regional Banking ETF"
  },
  {
    "ticker": "KBWY",
    "exchange": "NASDAQ",
    "name": "Invesco KBW Premium Yield Equity REIT ETF"
  },
  {
    "ticker": "KC",
    "exchange": "NASDAQ",
    "name": "Kingsoft Cloud Holdings Ltd Sponsored ADR"
  },
  {
    "ticker": "KCAC",
    "exchange": "NYSE",
    "name": "Kensington Capital Acquisition Corp. Class A"
  },
  {
    "ticker": "KCAC=",
    "exchange": "NYSE",
    "name": "Kensington Capital Acquisition Corp Units Cons of 1 Sh A + 0.5 Wt 01.07.27"
  },
  {
    "ticker": "KCAC+",
    "exchange": "NYSE",
    "name": "Kensington Capital Acquisition Corp Warrant 2020-01.07.27 on Kensington Capital Acquisition Corp"
  },
  {
    "ticker": "KCAPL",
    "exchange": "NASDAQ",
    "name": "Portman Ridge Finance Corporation 6.125 % Notes 2017-30.09.22"
  },
  {
    "ticker": "KCCB",
    "exchange": "NYSE ARCA",
    "name": "KraneShares CCBS China Corporate High Yield Bond USD ETF"
  },
  {
    "ticker": "KCE",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Capital Markets ETF"
  },
  {
    "ticker": "KCNY",
    "exchange": "NYSE ARCA",
    "name": "KraneShares E Fund China Commercial Paper ETF"
  },
  {
    "ticker": "KDFI",
    "exchange": "NYSE ARCA",
    "name": "KFA Dynamic Fixed Income ETF"
  },
  {
    "ticker": "KDMN",
    "exchange": "NYSE",
    "name": "Kadmon Holdings Inc."
  },
  {
    "ticker": "KDP",
    "exchange": "NYSE",
    "name": "Keurig Dr Pepper Inc."
  },
  {
    "ticker": "KE",
    "exchange": "NASDAQ",
    "name": "Kimball Electronics Inc."
  },
  {
    "ticker": "KELYA",
    "exchange": "NASDAQ",
    "name": "Kelly Services Inc. Class A"
  },
  {
    "ticker": "KELYB",
    "exchange": "NASDAQ",
    "name": "Kelly Services Inc. Class B"
  },
  {
    "ticker": "KEMQ",
    "exchange": "NYSE ARCA",
    "name": "KraneShares Emerging Markets Consumer Technology Index ETF"
  },
  {
    "ticker": "KEMX",
    "exchange": "NYSE ARCA",
    "name": "KraneShares MSCI Emerging Markets EX China Index ETF"
  },
  {
    "ticker": "KEN",
    "exchange": "NYSE",
    "name": "Kenon Holdings Ltd."
  },
  {
    "ticker": "KEP",
    "exchange": "NYSE",
    "name": "Korea Electric Power Corporation Sponsored ADR"
  },
  {
    "ticker": "KEQU",
    "exchange": "NASDAQ",
    "name": "Kewaunee Scientific Corporation"
  },
  {
    "ticker": "KERN",
    "exchange": "NASDAQ",
    "name": "Akerna Corp."
  },
  {
    "ticker": "KERNW",
    "exchange": "NASDAQ",
    "name": "Akerna Corp Warrant 2019-31.01.21 On Akerna Rg-A"
  },
  {
    "ticker": "KESG",
    "exchange": "NYSE ARCA",
    "name": "KraneShares MSCI China ESG Leaders Index ETF"
  },
  {
    "ticker": "KEX",
    "exchange": "NYSE",
    "name": "Kirby Corporation"
  },
  {
    "ticker": "KEY",
    "exchange": "NYSE",
    "name": "KeyCorp"
  },
  {
    "ticker": "KEY-I",
    "exchange": "NYSE",
    "name": "KeyCorp Deposit Shs Repr 1/40th Non-Cum Perp Pfd Registered Shs Series E"
  },
  {
    "ticker": "KEY-J",
    "exchange": "NYSE",
    "name": "KeyCorp Depositary Shares Repr 1/40th Non-Cum Perp Pfd Registered Shs Series F"
  },
  {
    "ticker": "KEY-K",
    "exchange": "NYSE",
    "name": "KeyCorp Depositary Shs Repr 1/40th Non-Cum Perp Red Pfd Registered Shs Series G"
  },
  {
    "ticker": "KEYS",
    "exchange": "NYSE",
    "name": "Keysight Technologies Inc"
  },
  {
    "ticker": "KF",
    "exchange": "NYSE",
    "name": "Korea Fund Inc"
  },
  {
    "ticker": "KFFB",
    "exchange": "NASDAQ",
    "name": "Kentucky First Federal Bancorp"
  },
  {
    "ticker": "KFRC",
    "exchange": "NASDAQ",
    "name": "Kforce Inc."
  },
  {
    "ticker": "KFS",
    "exchange": "NYSE",
    "name": "Kingsway Financial Services Inc"
  },
  {
    "ticker": "KFY",
    "exchange": "NYSE",
    "name": "Korn Ferry"
  },
  {
    "ticker": "KFYP",
    "exchange": "NYSE ARCA",
    "name": "KraneShares CICC China Leaders 100 Index ETF"
  },
  {
    "ticker": "KGC",
    "exchange": "NYSE",
    "name": "Kinross Gold Corporation"
  },
  {
    "ticker": "KGJI",
    "exchange": "NASDAQ",
    "name": "Kingold Jewelry Inc."
  },
  {
    "ticker": "KGRN",
    "exchange": "NYSE ARCA",
    "name": "KraneShares MSCI China Environment Index ETF"
  },
  {
    "ticker": "KHC",
    "exchange": "NASDAQ",
    "name": "Kraft Heinz Company"
  },
  {
    "ticker": "KIDS",
    "exchange": "NASDAQ",
    "name": "OrthoPediatrics Corp."
  },
  {
    "ticker": "KIE",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Insurance ETF"
  },
  {
    "ticker": "KIM",
    "exchange": "NYSE",
    "name": "Kimco Realty Corporation"
  },
  {
    "ticker": "KIM-L",
    "exchange": "NYSE",
    "name": "Kimco Realty Corp Deposit Shs Repr 1/1000th 5.125 % Cum Red Pfd Registered Shs Ser L"
  },
  {
    "ticker": "KIM-M",
    "exchange": "NYSE",
    "name": "Kimco Realty Corp Deposit Shs Repr 1/1000th 5.25% Cum Red Pfd Registered Shs M"
  },
  {
    "ticker": "KIN",
    "exchange": "NASDAQ",
    "name": "Kindred Biosciences Inc."
  },
  {
    "ticker": "KINS",
    "exchange": "NASDAQ",
    "name": "Kingstone Companies Inc."
  },
  {
    "ticker": "KIO",
    "exchange": "NYSE",
    "name": "KKR Income Opportunities Fund"
  },
  {
    "ticker": "KIQ",
    "exchange": "NYSE American",
    "name": "Kelso Technologies Inc."
  },
  {
    "ticker": "KIRK",
    "exchange": "NASDAQ",
    "name": "Kirkland's Inc."
  },
  {
    "ticker": "KJAN",
    "exchange": "Cboe BZX",
    "name": "Innovator Russell 2000 Power Buffer ETF January"
  },
  {
    "ticker": "KJUL",
    "exchange": "Cboe BZX",
    "name": "Innovator Russell 2000 Power Buffer ETF - July"
  },
  {
    "ticker": "KKR",
    "exchange": "NYSE",
    "name": "KKR & Co. Inc."
  },
  {
    "ticker": "KKR-A",
    "exchange": "NYSE",
    "name": "KKR & Co. Inc. 6.75 % Cum Red Perp Pfd Registered Shs Series A"
  },
  {
    "ticker": "KKR-B",
    "exchange": "NYSE",
    "name": "KKR & Co. Inc. 6.5 % Cum Red Perp Pfd Registered Shs Series B"
  },
  {
    "ticker": "KL",
    "exchange": "NYSE",
    "name": "Kirkland Lake Gold Ltd."
  },
  {
    "ticker": "KLAC",
    "exchange": "NASDAQ",
    "name": "KLA Corporation"
  },
  {
    "ticker": "KLCD",
    "exchange": "NYSE ARCA",
    "name": "KFA Large Cap Quality Dividend Index ETF"
  },
  {
    "ticker": "KLDO",
    "exchange": "NASDAQ",
    "name": "Kaleido Biosciences Inc."
  },
  {
    "ticker": "KLDW",
    "exchange": "NYSE ARCA",
    "name": "Knowledge Leaders Developed World ETF"
  },
  {
    "ticker": "KLIC",
    "exchange": "NASDAQ",
    "name": "Kulicke & Soffa Industries Inc."
  },
  {
    "ticker": "KLR",
    "exchange": "NYSE American",
    "name": "Kaleyra Inc"
  },
  {
    "ticker": "KLR+",
    "exchange": "NYSE American",
    "name": "Kaleyra Inc Warrant 2019-12.12.24 on Kaleyra"
  },
  {
    "ticker": "KLXE",
    "exchange": "NASDAQ",
    "name": "KLX Energy Services Holdings Inc."
  },
  {
    "ticker": "KMB",
    "exchange": "NYSE",
    "name": "Kimberly-Clark Corporation"
  },
  {
    "ticker": "KMDA",
    "exchange": "NASDAQ",
    "name": "Kamada Ltd"
  },
  {
    "ticker": "KMED",
    "exchange": "NYSE ARCA",
    "name": "KraneShares Emerging Markets Healthcare Index ETF"
  },
  {
    "ticker": "KMF",
    "exchange": "NYSE",
    "name": "Kayne Anderson Midstream/Energy Fund Inc."
  },
  {
    "ticker": "KMI",
    "exchange": "NYSE",
    "name": "Kinder Morgan Inc Class P"
  },
  {
    "ticker": "KMPR",
    "exchange": "NYSE",
    "name": "Kemper Corporation"
  },
  {
    "ticker": "KMT",
    "exchange": "NYSE",
    "name": "Kennametal Inc."
  },
  {
    "ticker": "KMX",
    "exchange": "NYSE",
    "name": "CarMax Inc."
  },
  {
    "ticker": "KN",
    "exchange": "NYSE",
    "name": "Knowles Corp."
  },
  {
    "ticker": "KNAB",
    "exchange": "NYSE ARCA",
    "name": "MicroSectors U.S. Big Banks Index Inverse ETNs"
  },
  {
    "ticker": "KNDI",
    "exchange": "NASDAQ",
    "name": "Kandi Technologies Group Inc."
  },
  {
    "ticker": "KNG",
    "exchange": "Cboe BZX",
    "name": "Cboe Vest S&P 500 Dividend Aristocrats Target Income ETF"
  },
  {
    "ticker": "KNL",
    "exchange": "NYSE",
    "name": "Knoll Inc."
  },
  {
    "ticker": "KNOP",
    "exchange": "NYSE",
    "name": "KNOT Offshore Partners LP"
  },
  {
    "ticker": "KNOW",
    "exchange": "NYSE ARCA",
    "name": "Direxion All Cap Insider Sentiment Shares"
  },
  {
    "ticker": "KNSA",
    "exchange": "NASDAQ",
    "name": "Kiniksa Pharmaceuticals Ltd. Class A"
  },
  {
    "ticker": "KNSL",
    "exchange": "NASDAQ",
    "name": "Kinsale Capital Group Inc."
  },
  {
    "ticker": "KNX",
    "exchange": "NYSE",
    "name": "Knight-Swift Transportation Holdings Inc. Class A"
  },
  {
    "ticker": "KO",
    "exchange": "NYSE",
    "name": "Coca-Cola Company"
  },
  {
    "ticker": "KOCT",
    "exchange": "Cboe BZX",
    "name": "Innovator Russell 2000 Power Buffer ETF - October"
  },
  {
    "ticker": "KOD",
    "exchange": "NASDAQ",
    "name": "Kodiak Sciences Inc."
  },
  {
    "ticker": "KODK",
    "exchange": "NYSE",
    "name": "Eastman Kodak Company"
  },
  {
    "ticker": "KOF",
    "exchange": "NYSE",
    "name": "Coca-Cola FEMSA SAB de CV Sponsored ADR Class L"
  },
  {
    "ticker": "KOIN",
    "exchange": "NYSE ARCA",
    "name": "Innovation Shares NextGen Protocol ETF"
  },
  {
    "ticker": "KOKU",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers MSCI Kokusai Equity ETF"
  },
  {
    "ticker": "KOL",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Coal ETF"
  },
  {
    "ticker": "KOLD",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort Bloomberg Natural Gas"
  },
  {
    "ticker": "KOMP",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Kensho New Economies Composite ETF"
  },
  {
    "ticker": "KOP",
    "exchange": "NYSE",
    "name": "Koppers Holdings Inc."
  },
  {
    "ticker": "KOPN",
    "exchange": "NASDAQ",
    "name": "Kopin Corporation"
  },
  {
    "ticker": "KOR",
    "exchange": "NASDAQ",
    "name": "Corvus Gold Inc."
  },
  {
    "ticker": "KORP",
    "exchange": "NYSE ARCA",
    "name": "American Century Diversified Corporate Bond ETF"
  },
  {
    "ticker": "KORU",
    "exchange": "NYSE ARCA",
    "name": "Direxion MSCI Daily South Korea Bull 3X Shares"
  },
  {
    "ticker": "KOS",
    "exchange": "NYSE",
    "name": "Kosmos Energy Ltd."
  },
  {
    "ticker": "KOSS",
    "exchange": "NASDAQ",
    "name": "Koss Corporation"
  },
  {
    "ticker": "KPTI",
    "exchange": "NASDAQ",
    "name": "Karyopharm Therapeutics Inc."
  },
  {
    "ticker": "KR",
    "exchange": "NYSE",
    "name": "Kroger Co."
  },
  {
    "ticker": "KRA",
    "exchange": "NYSE",
    "name": "Kraton Corporation"
  },
  {
    "ticker": "KRBN",
    "exchange": "NYSE ARCA",
    "name": "KFA Global Carbon ETF"
  },
  {
    "ticker": "KRC",
    "exchange": "NYSE",
    "name": "Kilroy Realty Corporation"
  },
  {
    "ticker": "KRE",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Regional Banking ETF"
  },
  {
    "ticker": "KREF",
    "exchange": "NYSE",
    "name": "KKR Real Estate Finance Trust Inc."
  },
  {
    "ticker": "KRG",
    "exchange": "NYSE",
    "name": "Kite Realty Group Trust"
  },
  {
    "ticker": "KRKR",
    "exchange": "NASDAQ",
    "name": "36Kr Holdings Inc ADR Class A"
  },
  {
    "ticker": "KRMA",
    "exchange": "NASDAQ",
    "name": "Global X Conscious Companies ETF"
  },
  {
    "ticker": "KRMD",
    "exchange": "NASDAQ",
    "name": "Repro Med Systems Inc."
  },
  {
    "ticker": "KRNT",
    "exchange": "NASDAQ",
    "name": "Kornit Digital Ltd."
  },
  {
    "ticker": "KRNY",
    "exchange": "NASDAQ",
    "name": "Kearny Financial Corp."
  },
  {
    "ticker": "KRO",
    "exchange": "NYSE",
    "name": "Kronos Worldwide Inc."
  },
  {
    "ticker": "KROS",
    "exchange": "NASDAQ",
    "name": "Keros Therapeutics Inc."
  },
  {
    "ticker": "KRP",
    "exchange": "NYSE",
    "name": "Kimbell Royalty Partners LP"
  },
  {
    "ticker": "KRTX",
    "exchange": "NASDAQ",
    "name": "Karuna Therapeutics Inc."
  },
  {
    "ticker": "KRUS",
    "exchange": "NASDAQ",
    "name": "Kura Sushi USA Inc Class A"
  },
  {
    "ticker": "KRYS",
    "exchange": "NASDAQ",
    "name": "Krystal Biotech Inc."
  },
  {
    "ticker": "KSA",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Saudi Arabia ETF"
  },
  {
    "ticker": "KSCD",
    "exchange": "NYSE ARCA",
    "name": "KFA Small Cap Quality Dividend Index ETF"
  },
  {
    "ticker": "KSM",
    "exchange": "NYSE",
    "name": "DWS Strategic Municipal Income Trust of Benef Interest"
  },
  {
    "ticker": "KSMTU",
    "exchange": "NASDAQ",
    "name": "Kismet Acquisition One Corp. Units Cons of 1 Shs A + 1/2 Wt"
  },
  {
    "ticker": "KSS",
    "exchange": "NYSE",
    "name": "Kohl's Corporation"
  },
  {
    "ticker": "KSU",
    "exchange": "NYSE",
    "name": "Kansas City Southern"
  },
  {
    "ticker": "KSU-",
    "exchange": "NYSE",
    "name": "Kansas City Southern 4 % Pfd Shs"
  },
  {
    "ticker": "KT",
    "exchange": "NYSE",
    "name": "KT Corporation Sponsored ADR"
  },
  {
    "ticker": "KTB",
    "exchange": "NYSE",
    "name": "Kontoor Brands Inc."
  },
  {
    "ticker": "KTCC",
    "exchange": "NASDAQ",
    "name": "Key Tronic Corporation"
  },
  {
    "ticker": "KTF",
    "exchange": "NYSE",
    "name": "DWS Municipal Income Trust"
  },
  {
    "ticker": "KTH",
    "exchange": "NYSE",
    "name": "Corts Trust Peco Energy Capital Trust III 8 % Corporate Backed Trust Secs 2001-6.4.28"
  },
  {
    "ticker": "KTN",
    "exchange": "NYSE",
    "name": "Credit-Enhanced A 8.205% 2001-01.01.2027"
  },
  {
    "ticker": "KTOS",
    "exchange": "NASDAQ",
    "name": "Kratos Defense & Security Solutions Inc."
  },
  {
    "ticker": "KTOV",
    "exchange": "NASDAQ",
    "name": "Kitov Pharma Ltd. Sponsored ADR"
  },
  {
    "ticker": "KTOVW",
    "exchange": "NASDAQ",
    "name": "Kitov Pharma Ltd. Warrants 2015-20.11.20 On Kitov Pharm Sp ADR"
  },
  {
    "ticker": "KTRA",
    "exchange": "NASDAQ",
    "name": "Kintara Therapeutics Inc"
  },
  {
    "ticker": "KURA",
    "exchange": "NASDAQ",
    "name": "Kura Oncology Inc."
  },
  {
    "ticker": "KURE",
    "exchange": "NYSE ARCA",
    "name": "KraneShares MSCI All China Health Care Index ETF"
  },
  {
    "ticker": "KVHI",
    "exchange": "NASDAQ",
    "name": "KVH Industries Inc."
  },
  {
    "ticker": "KW",
    "exchange": "NYSE",
    "name": "Kennedy-Wilson Holdings Inc."
  },
  {
    "ticker": "KWEB",
    "exchange": "NYSE ARCA",
    "name": "KraneShares CSI China Internet ETF"
  },
  {
    "ticker": "KWR",
    "exchange": "NYSE",
    "name": "Quaker Chemical Corporation"
  },
  {
    "ticker": "KXI",
    "exchange": "NYSE ARCA",
    "name": "iShares Global Consumer Staples ETF"
  },
  {
    "ticker": "KXIN",
    "exchange": "NASDAQ",
    "name": "Kaixin Auto Holdings"
  },
  {
    "ticker": "KYN",
    "exchange": "NYSE",
    "name": "Kayne Anderson MLP/Midstream Investment Company"
  },
  {
    "ticker": "KZIA",
    "exchange": "NASDAQ",
    "name": "Kazia Therapeutics Ltd Sponsored ADR"
  },
  {
    "ticker": "KZR",
    "exchange": "NASDAQ",
    "name": "Kezar Life Sciences Inc"
  },
  {
    "ticker": "L",
    "exchange": "NYSE",
    "name": "Loews Corporation"
  },
  {
    "ticker": "LABD",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily S&P Biotech Bear 3X Shares"
  },
  {
    "ticker": "LABU",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily S&P Biotech Bull 3X Shares"
  },
  {
    "ticker": "LAC",
    "exchange": "NYSE",
    "name": "Lithium Americas Corp."
  },
  {
    "ticker": "LACK",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Consumer Staples Bear 3x Shares"
  },
  {
    "ticker": "LACQ",
    "exchange": "NASDAQ",
    "name": "Leisure Acquisition Corp."
  },
  {
    "ticker": "LACQU",
    "exchange": "NASDAQ",
    "name": "Leisure Acquisition Corp. Units Cons of 1 Sh + 0.5 Wt 18"
  },
  {
    "ticker": "LACQW",
    "exchange": "NASDAQ",
    "name": "Leisure Acquisition Corp Warrant 2017- On Leisure Acquisition"
  },
  {
    "ticker": "LAD",
    "exchange": "NYSE",
    "name": "Lithia Motors Inc. Class A"
  },
  {
    "ticker": "LADR",
    "exchange": "NYSE",
    "name": "Ladder Capital Corp. Class A"
  },
  {
    "ticker": "LAIX",
    "exchange": "NYSE",
    "name": "LAIX Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "LAKE",
    "exchange": "NASDAQ",
    "name": "Lakeland Industries Inc."
  },
  {
    "ticker": "LAMR",
    "exchange": "NASDAQ",
    "name": "Lamar Advertising Company Class A"
  },
  {
    "ticker": "LANC",
    "exchange": "NASDAQ",
    "name": "Lancaster Colony Corporation"
  },
  {
    "ticker": "LAND",
    "exchange": "NASDAQ",
    "name": "Gladstone Land Corp."
  },
  {
    "ticker": "LANDP",
    "exchange": "NASDAQ",
    "name": "Gladstone Land Corp 6 3/8% Cum Trm Pfd Series A"
  },
  {
    "ticker": "LARK",
    "exchange": "NASDAQ",
    "name": "Landmark Bancorp Inc."
  },
  {
    "ticker": "LASR",
    "exchange": "NASDAQ",
    "name": "nLIGHT Inc."
  },
  {
    "ticker": "LATN",
    "exchange": "NASDAQ",
    "name": "Union Acquisition Corp. II"
  },
  {
    "ticker": "LATNU",
    "exchange": "NASDAQ",
    "name": "Union Acquisition Corp. II Units Cons of 1 Sh + 1 Wt"
  },
  {
    "ticker": "LATNW",
    "exchange": "NASDAQ",
    "name": "Union Acquisition Corp II Warrant - on Un Acquisition"
  },
  {
    "ticker": "LAUR",
    "exchange": "NASDAQ",
    "name": "Laureate Education Inc. Class A"
  },
  {
    "ticker": "LAWS",
    "exchange": "NASDAQ",
    "name": "Lawson Products Inc."
  },
  {
    "ticker": "LAZ",
    "exchange": "NYSE",
    "name": "Lazard Ltd Class A"
  },
  {
    "ticker": "LAZY",
    "exchange": "NASDAQ",
    "name": "Lazydays Holdings Inc."
  },
  {
    "ticker": "LB",
    "exchange": "NYSE",
    "name": "L Brands Inc."
  },
  {
    "ticker": "LBAI",
    "exchange": "NASDAQ",
    "name": "Lakeland Bancorp Inc."
  },
  {
    "ticker": "LBC",
    "exchange": "NASDAQ",
    "name": "Luther Burbank Corporation"
  },
  {
    "ticker": "LBJ",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Latin America Bull 3X Shares"
  },
  {
    "ticker": "LBRDA",
    "exchange": "NASDAQ",
    "name": "Liberty Broadband Corp. Class A"
  },
  {
    "ticker": "LBRDK",
    "exchange": "NASDAQ",
    "name": "Liberty Broadband Corp. Class C"
  },
  {
    "ticker": "LBRT",
    "exchange": "NYSE",
    "name": "Liberty Oilfield Services Inc. Class A"
  },
  {
    "ticker": "LBTYA",
    "exchange": "NASDAQ",
    "name": "Liberty Global Plc Class A"
  },
  {
    "ticker": "LBTYB",
    "exchange": "NASDAQ",
    "name": "Liberty Global Plc Class B"
  },
  {
    "ticker": "LBTYK",
    "exchange": "NASDAQ",
    "name": "Liberty Global Plc Class C"
  },
  {
    "ticker": "LC",
    "exchange": "NYSE",
    "name": "LendingClub Corp"
  },
  {
    "ticker": "LCA",
    "exchange": "NASDAQ",
    "name": "Landcadia Holdings II Inc. Class A"
  },
  {
    "ticker": "LCAHU",
    "exchange": "NASDAQ",
    "name": "Landcadia Holdings II Inc. Units Cons of 1 Sh -A- + 1/3 Wt"
  },
  {
    "ticker": "LCAHW",
    "exchange": "NASDAQ",
    "name": "Landcadia Holdings II Inc Warrant 2019- on Landcadia Hldg Rg-A"
  },
  {
    "ticker": "LCAPU",
    "exchange": "NASDAQ",
    "name": "Lionheart Acquisition Corp. II Units Cons of 1 Sh + 1/2 Wt 26"
  },
  {
    "ticker": "LCI",
    "exchange": "NYSE",
    "name": "Lannett Company Inc."
  },
  {
    "ticker": "LCII",
    "exchange": "NYSE",
    "name": "LCI Industries"
  },
  {
    "ticker": "LCNB",
    "exchange": "NASDAQ",
    "name": "LCNB Corp."
  },
  {
    "ticker": "LCR",
    "exchange": "NYSE ARCA",
    "name": "Leuthold Core ETF"
  },
  {
    "ticker": "LCTX",
    "exchange": "NYSE American",
    "name": "Lineage Cell Therapeutics Inc."
  },
  {
    "ticker": "LCUT",
    "exchange": "NASDAQ",
    "name": "Lifetime Brands Inc."
  },
  {
    "ticker": "LD",
    "exchange": "NYSE ARCA",
    "name": "iPath Bloomberg Lead Subindex Total Return ETN"
  },
  {
    "ticker": "LDEM",
    "exchange": "NASDAQ",
    "name": "iShares ESG MSCI EM Leaders ETF"
  },
  {
    "ticker": "LDL",
    "exchange": "NYSE",
    "name": "Lydall Inc."
  },
  {
    "ticker": "LDOS",
    "exchange": "NYSE",
    "name": "Leidos Holdings Inc."
  },
  {
    "ticker": "LDP",
    "exchange": "NYSE",
    "name": "Cohen & Steers Ltd. Duration Preferred & Income Fund Inc."
  },
  {
    "ticker": "LDRS",
    "exchange": "NYSE ARCA",
    "name": "Innovator IBD ETF Leaders ETF"
  },
  {
    "ticker": "LDSF",
    "exchange": "NASDAQ",
    "name": "First Trust Low Duration Strategic Focus ETF"
  },
  {
    "ticker": "LDUR",
    "exchange": "NYSE ARCA",
    "name": "PIMCO Enhanced Low Duration Active ETF"
  },
  {
    "ticker": "LE",
    "exchange": "NASDAQ",
    "name": "Lands' End Inc."
  },
  {
    "ticker": "LEA",
    "exchange": "NYSE",
    "name": "Lear Corporation"
  },
  {
    "ticker": "LEAD",
    "exchange": "Cboe BZX",
    "name": "Reality Shares DIVCON Leaders Dividend ETF"
  },
  {
    "ticker": "LEAF",
    "exchange": "NYSE",
    "name": "Leaf Group Ltd."
  },
  {
    "ticker": "LECO",
    "exchange": "NASDAQ",
    "name": "Lincoln Electric Holdings Inc."
  },
  {
    "ticker": "LEDS",
    "exchange": "NASDAQ",
    "name": "SemiLEDs Corporation"
  },
  {
    "ticker": "LEE",
    "exchange": "NYSE",
    "name": "Lee Enterprises Incorporated"
  },
  {
    "ticker": "LEG",
    "exchange": "NYSE",
    "name": "Leggett & Platt Incorporated"
  },
  {
    "ticker": "LEGH",
    "exchange": "NASDAQ",
    "name": "Legacy Housing Corporation"
  },
  {
    "ticker": "LEGN",
    "exchange": "NASDAQ",
    "name": "Legend Biotech Corporation Sponsored ADR"
  },
  {
    "ticker": "LEGR",
    "exchange": "NASDAQ",
    "name": "First Trust Indxx Innovative Transaction & Process ETF"
  },
  {
    "ticker": "LEJU",
    "exchange": "NYSE",
    "name": "Leju Holdings Ltd. Sponsored ADR"
  },
  {
    "ticker": "LEMB",
    "exchange": "NYSE ARCA",
    "name": "iShares J.P. Morgan EM Local Currency Bond ETF"
  },
  {
    "ticker": "LEN",
    "exchange": "NYSE",
    "name": "Lennar Corporation Class A"
  },
  {
    "ticker": "LEN.B",
    "exchange": "NYSE",
    "name": "Lennar Corporation Class B"
  },
  {
    "ticker": "LEND",
    "exchange": "NYSE ARCA",
    "name": "Amplify CrowdBureau Peer to Peer Lending & Crowdfunding ETF"
  },
  {
    "ticker": "LEO",
    "exchange": "NYSE",
    "name": "BNY Mellon Strategic Municipals Inc."
  },
  {
    "ticker": "LEU",
    "exchange": "NYSE American",
    "name": "Centrus Energy Corp. Class A"
  },
  {
    "ticker": "LEVI",
    "exchange": "NYSE",
    "name": "Levi Strauss & Co. Class A"
  },
  {
    "ticker": "LEVL",
    "exchange": "NASDAQ",
    "name": "Level One Bancorp Inc."
  },
  {
    "ticker": "LEVLP",
    "exchange": "NASDAQ",
    "name": "Level One Bancorp Inc. Depositary Shs Repr 1/100th 7.5% Non-Cum Red Perp Pfd Rg Series B"
  },
  {
    "ticker": "LFAC",
    "exchange": "NASDAQ",
    "name": "LF Capital Acquisition Corp. Class A"
  },
  {
    "ticker": "LFACU",
    "exchange": "NASDAQ",
    "name": "LF Capital Acquisition Corp. Units Cons of 1 Sh + 1 Wt"
  },
  {
    "ticker": "LFACW",
    "exchange": "NASDAQ",
    "name": "LF Capital Acquisition Corp Warrant 2018-2023 on Shs"
  },
  {
    "ticker": "LFC",
    "exchange": "NYSE",
    "name": "China Life Insurance Co. Ltd. Sponsored ADR Class H"
  },
  {
    "ticker": "LFEQ",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Long/Flat Trend ETF"
  },
  {
    "ticker": "LFUS",
    "exchange": "NASDAQ",
    "name": "Littelfuse Inc."
  },
  {
    "ticker": "LFVN",
    "exchange": "NASDAQ",
    "name": "LifeVantage Corporation"
  },
  {
    "ticker": "LGC",
    "exchange": "NYSE",
    "name": "Legacy Acquisition Corp. Class A"
  },
  {
    "ticker": "LGC=",
    "exchange": "NYSE",
    "name": "Legacy Acquisition Corp. Units Cons of 1 Sh -A- + 1 Wt 22"
  },
  {
    "ticker": "LGC+",
    "exchange": "NYSE",
    "name": "Legacy Acquisition Corp Warrant 2017-2022 on Legacy Acqstn"
  },
  {
    "ticker": "LGF.A",
    "exchange": "NYSE",
    "name": "Lions Gate Entertainment Corp Class A"
  },
  {
    "ticker": "LGF.B",
    "exchange": "NYSE",
    "name": "Lions Gate Entertainment Corp Class B"
  },
  {
    "ticker": "LGH",
    "exchange": "NYSE ARCA",
    "name": "HCM Defender 500 Index ETF"
  },
  {
    "ticker": "LGHL",
    "exchange": "NASDAQ",
    "name": "Lion Group Holding Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "LGHLW",
    "exchange": "NASDAQ",
    "name": "Lion Group Holding Ltd. Warrant 2020-16.06.25 on Lion Group Holding"
  },
  {
    "ticker": "LGI",
    "exchange": "NYSE",
    "name": "Lazard Global Total Return & Income Fund Inc"
  },
  {
    "ticker": "LGIH",
    "exchange": "NASDAQ",
    "name": "LGI Homes Inc."
  },
  {
    "ticker": "LGL",
    "exchange": "NYSE American",
    "name": "LGL Group Inc."
  },
  {
    "ticker": "LGLV",
    "exchange": "NYSE ARCA",
    "name": "SPDR SSGA US Large Cap Low Volatility Index ETF"
  },
  {
    "ticker": "LGND",
    "exchange": "NASDAQ",
    "name": "Ligand Pharmaceuticals Incorporated"
  },
  {
    "ticker": "LGOV",
    "exchange": "NYSE ARCA",
    "name": "First Trust Long Duration Opportunities ETF"
  },
  {
    "ticker": "LGVW",
    "exchange": "NYSE",
    "name": "Longview Acquisition Corp. Class A"
  },
  {
    "ticker": "LGVW=",
    "exchange": "NYSE",
    "name": "Longview Acquisition Corp. Units Cons of 1 Shs A + 1/3 Wt 25"
  },
  {
    "ticker": "LGVW+",
    "exchange": "NYSE",
    "name": "Longview Acquisition Corp. Warrants 2020-27.05.25 on Longview Acqn A"
  },
  {
    "ticker": "LH",
    "exchange": "NYSE",
    "name": "Laboratory Corporation of America Holdings"
  },
  {
    "ticker": "LHCG",
    "exchange": "NASDAQ",
    "name": "LHC Group Inc."
  },
  {
    "ticker": "LHX",
    "exchange": "NYSE",
    "name": "L3Harris Technologies Inc"
  },
  {
    "ticker": "LI",
    "exchange": "NASDAQ",
    "name": "Li Auto Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "LIFE",
    "exchange": "NASDAQ",
    "name": "aTyr Pharma Inc."
  },
  {
    "ticker": "LII",
    "exchange": "NYSE",
    "name": "Lennox International Inc."
  },
  {
    "ticker": "LILA",
    "exchange": "NASDAQ",
    "name": "Liberty Latin America Ltd. Class A"
  },
  {
    "ticker": "LILAK",
    "exchange": "NASDAQ",
    "name": "Liberty Latin America Ltd. Class C"
  },
  {
    "ticker": "LIN",
    "exchange": "NYSE",
    "name": "Linde plc"
  },
  {
    "ticker": "LINC",
    "exchange": "NASDAQ",
    "name": "Lincoln Educational Services Corporation"
  },
  {
    "ticker": "LIND",
    "exchange": "NASDAQ",
    "name": "Lindblad Expeditions Holdings Inc"
  },
  {
    "ticker": "LINX",
    "exchange": "NYSE",
    "name": "Linx SA ADR"
  },
  {
    "ticker": "LIQT",
    "exchange": "NASDAQ",
    "name": "LiqTech International Inc."
  },
  {
    "ticker": "LIT",
    "exchange": "NYSE ARCA",
    "name": "Global X Lithium & Battery Tech ETF"
  },
  {
    "ticker": "LITB",
    "exchange": "NYSE",
    "name": "LightInTheBox Holding Co. Ltd. Sponsored ADR"
  },
  {
    "ticker": "LITE",
    "exchange": "NASDAQ",
    "name": "Lumentum Holdings Inc."
  },
  {
    "ticker": "LIVE",
    "exchange": "NASDAQ",
    "name": "Live Ventures Inc"
  },
  {
    "ticker": "LIVK",
    "exchange": "NASDAQ",
    "name": "LIV Capital Acquisition Corp Class A"
  },
  {
    "ticker": "LIVKU",
    "exchange": "NASDAQ",
    "name": "LIV Capital Acquisition Corp Units Cons of 1 Sh + 1 Wt"
  },
  {
    "ticker": "LIVKW",
    "exchange": "NASDAQ",
    "name": "LIV Capital Acquisition Corp Warrant - on LIV Cap"
  },
  {
    "ticker": "LIVN",
    "exchange": "NASDAQ",
    "name": "LivaNova Plc"
  },
  {
    "ticker": "LIVX",
    "exchange": "NASDAQ",
    "name": "LiveXLive Media Inc"
  },
  {
    "ticker": "LIZI",
    "exchange": "NASDAQ",
    "name": "Lizhi Inc ADR Class A"
  },
  {
    "ticker": "LJPC",
    "exchange": "NASDAQ",
    "name": "La Jolla Pharmaceutical Company"
  },
  {
    "ticker": "LKCO",
    "exchange": "NASDAQ",
    "name": "Luokung Technology Corp."
  },
  {
    "ticker": "LKFN",
    "exchange": "NASDAQ",
    "name": "Lakeland Financial Corporation"
  },
  {
    "ticker": "LKOR",
    "exchange": "Cboe BZX",
    "name": "FlexShares Credit-Scored US Long Corporate Bond Index Fund"
  },
  {
    "ticker": "LKQ",
    "exchange": "NASDAQ",
    "name": "LKQ Corporation"
  },
  {
    "ticker": "LL",
    "exchange": "NYSE",
    "name": "Lumber Liquidators Holdings Inc."
  },
  {
    "ticker": "LLIT",
    "exchange": "NASDAQ",
    "name": "Lianluo Smart Ltd. Class A"
  },
  {
    "ticker": "LLNW",
    "exchange": "NASDAQ",
    "name": "Limelight Networks Inc."
  },
  {
    "ticker": "LLY",
    "exchange": "NYSE",
    "name": "Eli Lilly and Company"
  },
  {
    "ticker": "LMAT",
    "exchange": "NASDAQ",
    "name": "LeMaitre Vascular Inc."
  },
  {
    "ticker": "LMB",
    "exchange": "NASDAQ",
    "name": "Limbach Holdings Inc."
  },
  {
    "ticker": "LMBS",
    "exchange": "NASDAQ",
    "name": "First Trust Low Duration Opportunities ETF"
  },
  {
    "ticker": "LMFA",
    "exchange": "NASDAQ",
    "name": "LM Funding America Inc"
  },
  {
    "ticker": "LMFAW",
    "exchange": "NASDAQ",
    "name": "LM Funding America Inc Warrants 2015-22.10.20 on Shs"
  },
  {
    "ticker": "LMHA",
    "exchange": "NYSE",
    "name": "Legg Mason Inc. 6.375 % Notes 2016-15.3.56"
  },
  {
    "ticker": "LMHB",
    "exchange": "NYSE",
    "name": "Legg Mason Inc 5.45 % Notes 2016-15.09.56"
  },
  {
    "ticker": "LMLB",
    "exchange": "NYSE ARCA",
    "name": "ETRACS Monthly Pay 2xLeveraged Wells Fargo MLP Ex-Energy ETN Series B"
  },
  {
    "ticker": "LMND",
    "exchange": "NYSE",
    "name": "Lemonade Inc"
  },
  {
    "ticker": "LMNL",
    "exchange": "NASDAQ",
    "name": "Liminal BioSciences Inc."
  },
  {
    "ticker": "LMNR",
    "exchange": "NASDAQ",
    "name": "Limoneira Company"
  },
  {
    "ticker": "LMNX",
    "exchange": "NASDAQ",
    "name": "Luminex Corp"
  },
  {
    "ticker": "LMPX",
    "exchange": "NASDAQ",
    "name": "LMP Automotive Holdings Inc."
  },
  {
    "ticker": "LMRK",
    "exchange": "NASDAQ",
    "name": "Landmark Infrastructure Partners LP"
  },
  {
    "ticker": "LMRKN",
    "exchange": "NASDAQ",
    "name": "Landmark Infrastructure Partners LP Cum Conv Red Perp Pfd Units Series C"
  },
  {
    "ticker": "LMRKO",
    "exchange": "NASDAQ",
    "name": "Landmark Infrastructure Partners LP 7.9 % Cum Red Perp Pfd Uts Series B"
  },
  {
    "ticker": "LMRKP",
    "exchange": "NASDAQ",
    "name": "Landmark Infrastructure Partners LP 8 % Cum Red Perp Pfd Uts Series A"
  },
  {
    "ticker": "LMST",
    "exchange": "NASDAQ",
    "name": "Limestone Bancorp Inc."
  },
  {
    "ticker": "LMT",
    "exchange": "NYSE",
    "name": "Lockheed Martin Corporation"
  },
  {
    "ticker": "LN",
    "exchange": "NYSE",
    "name": "LINE Corp. Sponsored ADR"
  },
  {
    "ticker": "LNC",
    "exchange": "NYSE",
    "name": "Lincoln National Corporation"
  },
  {
    "ticker": "LND",
    "exchange": "NYSE",
    "name": "BrasilAgro Cia Brasileira de Propriedades Agricolas Sponsored ADR"
  },
  {
    "ticker": "LNDC",
    "exchange": "NASDAQ",
    "name": "Landec Corporation"
  },
  {
    "ticker": "LNG",
    "exchange": "NYSE American",
    "name": "Cheniere Energy Inc."
  },
  {
    "ticker": "LNGR",
    "exchange": "NASDAQ",
    "name": "Global X Longevity Thematic ETF"
  },
  {
    "ticker": "LNN",
    "exchange": "NYSE",
    "name": "Lindsay Corporation"
  },
  {
    "ticker": "LNT",
    "exchange": "NASDAQ",
    "name": "Alliant Energy Corp"
  },
  {
    "ticker": "LNTH",
    "exchange": "NASDAQ",
    "name": "Lantheus Holdings Inc"
  },
  {
    "ticker": "LOAC",
    "exchange": "NASDAQ",
    "name": "Longevity Acquisition Corp."
  },
  {
    "ticker": "LOACR",
    "exchange": "NASDAQ",
    "name": "Longevity Acquisition Corp Rights For Shares"
  },
  {
    "ticker": "LOACU",
    "exchange": "NASDAQ",
    "name": "Longevity Acquisition Corp. Units Cons of 1 Ord Shs + 1 Rts + 1 Wts"
  },
  {
    "ticker": "LOACW",
    "exchange": "NASDAQ",
    "name": "Longevity Acquisition Corp Warrant -31.07.25 on Longevity Acquisition"
  },
  {
    "ticker": "LOAK",
    "exchange": "NYSE",
    "name": "Live Oak Acquisition Corp Class A"
  },
  {
    "ticker": "LOAK=",
    "exchange": "NYSE",
    "name": "Live Oak Acquisition Corp. Units Cons of 1 Sh A + 1/2 Wt 01.04.27"
  },
  {
    "ticker": "LOAK+",
    "exchange": "NYSE",
    "name": "Live Oak Acquisition Corp Warrant 2020-01.04.27 on Live Oak Acqn"
  },
  {
    "ticker": "LOAN",
    "exchange": "NASDAQ",
    "name": "Manhattan Bridge Capital Inc."
  },
  {
    "ticker": "LOB",
    "exchange": "NASDAQ",
    "name": "Live Oak Bancshares Inc."
  },
  {
    "ticker": "LOCO",
    "exchange": "NASDAQ",
    "name": "El Pollo Loco Holdings Inc"
  },
  {
    "ticker": "LODE",
    "exchange": "NYSE American",
    "name": "Comstock Mining Inc."
  },
  {
    "ticker": "LOGC",
    "exchange": "NASDAQ",
    "name": "LogicBio Therapeutics Inc."
  },
  {
    "ticker": "LOGI",
    "exchange": "NASDAQ",
    "name": "Logitech International S.A."
  },
  {
    "ticker": "LOGM",
    "exchange": "NASDAQ",
    "name": "LogMeIn Inc."
  },
  {
    "ticker": "LOMA",
    "exchange": "NYSE",
    "name": "Loma Negra Compania Industrial Argentina SA Sponsored ADR"
  },
  {
    "ticker": "LONE",
    "exchange": "NASDAQ",
    "name": "Lonestar Resources US Inc. Class A"
  },
  {
    "ticker": "LOOP",
    "exchange": "NASDAQ",
    "name": "Loop Industries Inc."
  },
  {
    "ticker": "LOPE",
    "exchange": "NASDAQ",
    "name": "Grand Canyon Education Inc."
  },
  {
    "ticker": "LORL",
    "exchange": "NASDAQ",
    "name": "Loral Space & Communications Inc."
  },
  {
    "ticker": "LOUP",
    "exchange": "NYSE ARCA",
    "name": "Innovator Loup Frontier Tech ETF"
  },
  {
    "ticker": "LOV",
    "exchange": "NYSE American",
    "name": "Spark Networks SE Sponsored ADR"
  },
  {
    "ticker": "LOVE",
    "exchange": "NASDAQ",
    "name": "Lovesac Company"
  },
  {
    "ticker": "LOW",
    "exchange": "NYSE",
    "name": "Lowe's Companies Inc."
  },
  {
    "ticker": "LOWC",
    "exchange": "NYSE ARCA",
    "name": "SPDR MSCI ACWI Low Carbon Target ETF"
  },
  {
    "ticker": "LPCN",
    "exchange": "NASDAQ",
    "name": "Lipocine Inc"
  },
  {
    "ticker": "LPG",
    "exchange": "NYSE",
    "name": "Dorian LPG Ltd."
  },
  {
    "ticker": "LPI",
    "exchange": "NYSE",
    "name": "Laredo Petroleum Inc."
  },
  {
    "ticker": "LPL",
    "exchange": "NYSE",
    "name": "LG Display Co. Ltd Sponsored ADR"
  },
  {
    "ticker": "LPLA",
    "exchange": "NASDAQ",
    "name": "LPL Financial Holdings Inc."
  },
  {
    "ticker": "LPRO",
    "exchange": "NASDAQ",
    "name": "Open Lending Corporation Class A"
  },
  {
    "ticker": "LPSN",
    "exchange": "NASDAQ",
    "name": "LivePerson Inc."
  },
  {
    "ticker": "LPTH",
    "exchange": "NASDAQ",
    "name": "LightPath Technologies Inc. Class A"
  },
  {
    "ticker": "LPTX",
    "exchange": "NASDAQ",
    "name": "Leap Therapeutics Inc."
  },
  {
    "ticker": "LPX",
    "exchange": "NYSE",
    "name": "Louisiana-Pacific Corporation"
  },
  {
    "ticker": "LQD",
    "exchange": "NYSE ARCA",
    "name": "iShares iBoxx $ Investment Grade Corporate Bond ETF"
  },
  {
    "ticker": "LQDA",
    "exchange": "NASDAQ",
    "name": "Liquidia Technologies Inc."
  },
  {
    "ticker": "LQDH",
    "exchange": "NYSE ARCA",
    "name": "iShares Interest Rate Hedged Corporate Bond ETF"
  },
  {
    "ticker": "LQDI",
    "exchange": "Cboe BZX",
    "name": "iShares Inflation Hedged Corporate Bond ETF"
  },
  {
    "ticker": "LQDT",
    "exchange": "NASDAQ",
    "name": "Liquidity Services Inc."
  },
  {
    "ticker": "LRCX",
    "exchange": "NASDAQ",
    "name": "Lam Research Corporation"
  },
  {
    "ticker": "LRGE",
    "exchange": "NASDAQ",
    "name": "ClearBridge Large Cap Growth ESG ETF"
  },
  {
    "ticker": "LRGF",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI USA Multifactor ETF"
  },
  {
    "ticker": "LRMR",
    "exchange": "NASDAQ",
    "name": "Larimar Therapeutics Inc."
  },
  {
    "ticker": "LRN",
    "exchange": "NYSE",
    "name": "K12 Inc."
  },
  {
    "ticker": "LRNZ",
    "exchange": "NYSE ARCA",
    "name": "TrueShares Technology AI & Deep Learning ETF"
  },
  {
    "ticker": "LSAC",
    "exchange": "NASDAQ",
    "name": "LifeSci Acquisition Corp."
  },
  {
    "ticker": "LSACU",
    "exchange": "NASDAQ",
    "name": "LifeSci Acquisition Corp. Units Cons of 1 Sh + 1 Wt"
  },
  {
    "ticker": "LSACW",
    "exchange": "NASDAQ",
    "name": "LifeSci Acquisition Corp Warrant 2020- on LifeSci Acqn"
  },
  {
    "ticker": "LSAF",
    "exchange": "NYSE ARCA",
    "name": "LeaderShares AlphaFactor US Core Equity ETF"
  },
  {
    "ticker": "LSBK",
    "exchange": "NASDAQ",
    "name": "Lake Shore Bancorp Inc."
  },
  {
    "ticker": "LSCC",
    "exchange": "NASDAQ",
    "name": "Lattice Semiconductor Corporation"
  },
  {
    "ticker": "LSI",
    "exchange": "NYSE",
    "name": "Life Storage Inc."
  },
  {
    "ticker": "LSLT",
    "exchange": "Cboe BZX",
    "name": "Salt Low truBeta US Market ETF"
  },
  {
    "ticker": "LSST",
    "exchange": "NYSE ARCA",
    "name": "Natixis ETF Trust"
  },
  {
    "ticker": "LSTR",
    "exchange": "NASDAQ",
    "name": "Landstar System Inc."
  },
  {
    "ticker": "LSXMA",
    "exchange": "NASDAQ",
    "name": "Liberty Media Corp. Series A Liberty SiriusXM"
  },
  {
    "ticker": "LSXMB",
    "exchange": "NASDAQ",
    "name": "Liberty Media Corp. Series B Liberty SiriusXM"
  },
  {
    "ticker": "LSXMK",
    "exchange": "NASDAQ",
    "name": "Liberty Media Corp. Series C Liberty SiriusXM"
  },
  {
    "ticker": "LTBR",
    "exchange": "NASDAQ",
    "name": "Lightbridge Corporation"
  },
  {
    "ticker": "LTC",
    "exchange": "NYSE",
    "name": "LTC Properties Inc."
  },
  {
    "ticker": "LTHM",
    "exchange": "NYSE",
    "name": "Livent Corporation"
  },
  {
    "ticker": "LTL",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra Telecommunications"
  },
  {
    "ticker": "LTPZ",
    "exchange": "NYSE ARCA",
    "name": "PIMCO 15+ Year US TIPS Index ETF"
  },
  {
    "ticker": "LTRN",
    "exchange": "NASDAQ",
    "name": "Lantern Pharma Inc."
  },
  {
    "ticker": "LTRPA",
    "exchange": "NASDAQ",
    "name": "Liberty TripAdvisor Holdings Inc Class A"
  },
  {
    "ticker": "LTRPB",
    "exchange": "NASDAQ",
    "name": "Liberty TripAdvisor Holdings Inc TEMP Class B"
  },
  {
    "ticker": "LTRX",
    "exchange": "NASDAQ",
    "name": "Lantronix Inc."
  },
  {
    "ticker": "LUB",
    "exchange": "NYSE",
    "name": "Luby's Inc."
  },
  {
    "ticker": "LULU",
    "exchange": "NASDAQ",
    "name": "Lululemon Athletica Inc"
  },
  {
    "ticker": "LUMO",
    "exchange": "NASDAQ",
    "name": "Lumos Pharma Inc."
  },
  {
    "ticker": "LUNA",
    "exchange": "NASDAQ",
    "name": "Luna Innovations Incorporated"
  },
  {
    "ticker": "LUV",
    "exchange": "NYSE",
    "name": "Southwest Airlines Co."
  },
  {
    "ticker": "LVGO",
    "exchange": "NASDAQ",
    "name": "Livongo Health Inc."
  },
  {
    "ticker": "LVHD",
    "exchange": "NASDAQ",
    "name": "Legg Mason Low Volatility High Dividend ETF"
  },
  {
    "ticker": "LVHI",
    "exchange": "Cboe BZX",
    "name": "Legg Mason International Low Volatility High Dividend ETF"
  },
  {
    "ticker": "LVS",
    "exchange": "NYSE",
    "name": "Las Vegas Sands Corp."
  },
  {
    "ticker": "LW",
    "exchange": "NYSE",
    "name": "Lamb Weston Holdings Inc."
  },
  {
    "ticker": "LWAY",
    "exchange": "NASDAQ",
    "name": "Lifeway Foods Inc."
  },
  {
    "ticker": "LX",
    "exchange": "NASDAQ",
    "name": "Lexinfintech Holdings Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "LXFR",
    "exchange": "NYSE",
    "name": "Luxfer Holdings PLC"
  },
  {
    "ticker": "LXP",
    "exchange": "NYSE",
    "name": "Lexington Realty Trust"
  },
  {
    "ticker": "LXP-C",
    "exchange": "NYSE",
    "name": "Lexington Realty Trust 6 1/2 % Cum Conv Pfd Shs Series C"
  },
  {
    "ticker": "LXRX",
    "exchange": "NASDAQ",
    "name": "Lexicon Pharmaceuticals Inc."
  },
  {
    "ticker": "LXU",
    "exchange": "NYSE",
    "name": "LSB Industries Inc."
  },
  {
    "ticker": "LYB",
    "exchange": "NYSE",
    "name": "LyondellBNYSE Americanll Industries NV"
  },
  {
    "ticker": "LYFT",
    "exchange": "NASDAQ",
    "name": "Lyft Inc Class A"
  },
  {
    "ticker": "LYG",
    "exchange": "NYSE",
    "name": "Lloyds Banking Group plc Sponsored ADR"
  },
  {
    "ticker": "LYL",
    "exchange": "NASDAQ",
    "name": "Dragon Victory International Limited"
  },
  {
    "ticker": "LYRA",
    "exchange": "NASDAQ",
    "name": "Lyra Therapeutics Inc."
  },
  {
    "ticker": "LYTS",
    "exchange": "NASDAQ",
    "name": "LSI Industries Inc."
  },
  {
    "ticker": "LYV",
    "exchange": "NYSE",
    "name": "Live Nation Entertainment Inc."
  },
  {
    "ticker": "LZB",
    "exchange": "NYSE",
    "name": "LaZBoy Incorporated"
  },
  {
    "ticker": "M",
    "exchange": "NYSE",
    "name": "Macy's Inc"
  },
  {
    "ticker": "MA",
    "exchange": "NYSE",
    "name": "Mastercard Incorporated Class A"
  },
  {
    "ticker": "MAA",
    "exchange": "NYSE",
    "name": "Mid-America Apartment Communities Inc."
  },
  {
    "ticker": "MAA-I",
    "exchange": "NYSE",
    "name": "Mid-America Apartment Communities Inc. 8.5% Cum Red Pfd Registered Series I"
  },
  {
    "ticker": "MAAX",
    "exchange": "Cboe BZX",
    "name": "VanEck Vectors Municipal Allocation ETF"
  },
  {
    "ticker": "MAC",
    "exchange": "NYSE",
    "name": "Macerich Company"
  },
  {
    "ticker": "MACK",
    "exchange": "NASDAQ",
    "name": "Merrimack Pharmaceuticals Inc."
  },
  {
    "ticker": "MAG",
    "exchange": "NYSE American",
    "name": "MAG Silver Corp."
  },
  {
    "ticker": "MAGA",
    "exchange": "Cboe BZX",
    "name": "Point Bridge GOP Stock Tracker ETF"
  },
  {
    "ticker": "MAGS",
    "exchange": "NASDAQ",
    "name": "Magal Security Systems Ltd."
  },
  {
    "ticker": "MAIN",
    "exchange": "NYSE",
    "name": "Main Street Capital Corporation"
  },
  {
    "ticker": "MAN",
    "exchange": "NYSE",
    "name": "ManpowerGroup Inc."
  },
  {
    "ticker": "MANH",
    "exchange": "NASDAQ",
    "name": "Manhattan Associates Inc."
  },
  {
    "ticker": "MANT",
    "exchange": "NASDAQ",
    "name": "ManTech International Corporation Class A"
  },
  {
    "ticker": "MANU",
    "exchange": "NYSE",
    "name": "Manchester United Plc Class A"
  },
  {
    "ticker": "MAR",
    "exchange": "NASDAQ",
    "name": "Marriott International Inc. Class A"
  },
  {
    "ticker": "MARA",
    "exchange": "NASDAQ",
    "name": "Marathon Patent Group Inc."
  },
  {
    "ticker": "MARB",
    "exchange": "NYSE ARCA",
    "name": "First Trust Merger Arbitrage ETF"
  },
  {
    "ticker": "MARK",
    "exchange": "NASDAQ",
    "name": "Remark Holdings Inc."
  },
  {
    "ticker": "MARPS",
    "exchange": "NASDAQ",
    "name": "Marine Petroleum Trust"
  },
  {
    "ticker": "MAS",
    "exchange": "NYSE",
    "name": "Masco Corporation"
  },
  {
    "ticker": "MASI",
    "exchange": "NASDAQ",
    "name": "Masimo Corporation"
  },
  {
    "ticker": "MAT",
    "exchange": "NASDAQ",
    "name": "Mattel Inc."
  },
  {
    "ticker": "MATW",
    "exchange": "NASDAQ",
    "name": "Matthews International Corporation Class A"
  },
  {
    "ticker": "MATX",
    "exchange": "NYSE",
    "name": "Matson Inc."
  },
  {
    "ticker": "MAV",
    "exchange": "NYSE",
    "name": "Pioneer Municipal High Income Advantage Trust"
  },
  {
    "ticker": "MAXNV",
    "exchange": "NASDAQ",
    "name": "Maxeon Solar Technologies Ltd."
  },
  {
    "ticker": "MAXR",
    "exchange": "NYSE",
    "name": "Maxar Technologies Inc."
  },
  {
    "ticker": "MAYS",
    "exchange": "NASDAQ",
    "name": "J.W. Mays Inc."
  },
  {
    "ticker": "MBB",
    "exchange": "NASDAQ",
    "name": "iShares MBS ETF"
  },
  {
    "ticker": "MBCN",
    "exchange": "NASDAQ",
    "name": "Middlefield Banc Corp."
  },
  {
    "ticker": "MBI",
    "exchange": "NYSE",
    "name": "MBIA Inc."
  },
  {
    "ticker": "MBII",
    "exchange": "NASDAQ",
    "name": "Marrone Bio Innovations Inc."
  },
  {
    "ticker": "MBIN",
    "exchange": "NASDAQ",
    "name": "Merchants Bancorp"
  },
  {
    "ticker": "MBINO",
    "exchange": "NASDAQ",
    "name": "Merchants Bancorp Inc (IN) Depositary Shs Repr 1/40th 6% Non-Cum Perp Red Pfd Rg Shs Series B"
  },
  {
    "ticker": "MBINP",
    "exchange": "NASDAQ",
    "name": "Merchants Bancorp Inc (IN) Non-Cum Perp Red Pfd Registered Shs Series A"
  },
  {
    "ticker": "MBIO",
    "exchange": "NASDAQ",
    "name": "Mustang Bio Inc."
  },
  {
    "ticker": "MBNKP",
    "exchange": "NASDAQ",
    "name": "Medallion Bank Non-Cum Perp Pfd Registered Shs Series F"
  },
  {
    "ticker": "MBOT",
    "exchange": "NASDAQ",
    "name": "Microbot Medical Inc"
  },
  {
    "ticker": "MBRX",
    "exchange": "NASDAQ",
    "name": "Moleculin Biotech Inc."
  },
  {
    "ticker": "MBSD",
    "exchange": "NASDAQ",
    "name": "FlexShares Disciplined Duration MBS Index Fund"
  },
  {
    "ticker": "MBT",
    "exchange": "NYSE",
    "name": "Mobile TeleSystems PJSC Sponsored ADR"
  },
  {
    "ticker": "MBUU",
    "exchange": "NASDAQ",
    "name": "Malibu Boats Inc Class A"
  },
  {
    "ticker": "MBWM",
    "exchange": "NASDAQ",
    "name": "Mercantile Bank Corporation"
  },
  {
    "ticker": "MC",
    "exchange": "NYSE",
    "name": "Moelis & Co. Class A"
  },
  {
    "ticker": "MCA",
    "exchange": "NYSE",
    "name": "BlackRock MuniYield California Quality Fund Inc"
  },
  {
    "ticker": "MCACU",
    "exchange": "NASDAQ",
    "name": "Mountain Crest Acquisition Corp Units Cons of 1 Sh + 1 Rt 19.03.2025"
  },
  {
    "ticker": "MCB",
    "exchange": "NYSE",
    "name": "Metropolitan Bank Holding Corp."
  },
  {
    "ticker": "MCBC",
    "exchange": "NASDAQ",
    "name": "Macatawa Bank Corporation"
  },
  {
    "ticker": "MCBS",
    "exchange": "NASDAQ",
    "name": "MetroCity Bankshares Inc."
  },
  {
    "ticker": "MCC",
    "exchange": "NYSE",
    "name": "Medley Capital Corporation"
  },
  {
    "ticker": "MCD",
    "exchange": "NYSE",
    "name": "McDonald's Corporation"
  },
  {
    "ticker": "MCEF",
    "exchange": "NASDAQ",
    "name": "First Trust Municipal CEF Income Opportunity ETF"
  },
  {
    "ticker": "MCEP",
    "exchange": "NASDAQ",
    "name": "Mid-Con Energy Partners LP"
  },
  {
    "ticker": "MCF",
    "exchange": "NYSE American",
    "name": "Contango Oil & Gas Company"
  },
  {
    "ticker": "MCFT",
    "exchange": "NASDAQ",
    "name": "Mastercraft Boat Holdings Inc."
  },
  {
    "ticker": "MCHI",
    "exchange": "NASDAQ",
    "name": "iShares MSCI China ETF"
  },
  {
    "ticker": "MCHP",
    "exchange": "NASDAQ",
    "name": "Microchip Technology Incorporated"
  },
  {
    "ticker": "MCHX",
    "exchange": "NASDAQ",
    "name": "Marchex Inc. Class B"
  },
  {
    "ticker": "MCI",
    "exchange": "NYSE",
    "name": "Barings Corporate Investors"
  },
  {
    "ticker": "MCK",
    "exchange": "NYSE",
    "name": "McKesson Corporation"
  },
  {
    "ticker": "MCMJ",
    "exchange": "NASDAQ",
    "name": "Merida Merger Corp I"
  },
  {
    "ticker": "MCMJW",
    "exchange": "NASDAQ",
    "name": "Merida Merger Corp I Warrant 2019-07.11.26 on Merida Merger I"
  },
  {
    "ticker": "MCN",
    "exchange": "NYSE",
    "name": "Madison Covered Call & Equity Strategy Fund"
  },
  {
    "ticker": "MCO",
    "exchange": "NYSE",
    "name": "Moody's Corporation"
  },
  {
    "ticker": "MCR",
    "exchange": "NYSE",
    "name": "MFS Charter Income Trust"
  },
  {
    "ticker": "MCRB",
    "exchange": "NASDAQ",
    "name": "Seres Therapeutics Inc"
  },
  {
    "ticker": "MCRI",
    "exchange": "NASDAQ",
    "name": "Monarch Casino & Resort Inc."
  },
  {
    "ticker": "MCRO",
    "exchange": "NYSE ARCA",
    "name": "IQ Hedge Macro Tracker ETF"
  },
  {
    "ticker": "MCS",
    "exchange": "NYSE",
    "name": "Marcus Corporation"
  },
  {
    "ticker": "MCV",
    "exchange": "NYSE",
    "name": "Medley Capital Corp 6 1/8 % Notes 2013-30.3.23 Sr"
  },
  {
    "ticker": "MCX",
    "exchange": "NYSE",
    "name": "Medley Capital Corp 6 1/2 % Notes 2015-30.1.21"
  },
  {
    "ticker": "MCY",
    "exchange": "NYSE",
    "name": "Mercury General Corporation"
  },
  {
    "ticker": "MD",
    "exchange": "NYSE",
    "name": "MEDNAX Inc."
  },
  {
    "ticker": "MDB",
    "exchange": "NASDAQ",
    "name": "MongoDB Inc. Class A"
  },
  {
    "ticker": "MDC",
    "exchange": "NYSE",
    "name": "M.D.C. Holdings Inc."
  },
  {
    "ticker": "MDCA",
    "exchange": "NASDAQ",
    "name": "MDC Partners Inc. Class A"
  },
  {
    "ticker": "MDGL",
    "exchange": "NASDAQ",
    "name": "Madrigal Pharmaceuticals Inc."
  },
  {
    "ticker": "MDGS",
    "exchange": "NASDAQ",
    "name": "Medigus Ltd Sponsored ADR"
  },
  {
    "ticker": "MDGSW",
    "exchange": "NASDAQ",
    "name": "Medigus Ltd Warrant 2018-23.07.23 on Medigus Sp ADR Series C"
  },
  {
    "ticker": "MDIA",
    "exchange": "NASDAQ",
    "name": "Mediaco Holding Inc Class A"
  },
  {
    "ticker": "MDIV",
    "exchange": "NASDAQ",
    "name": "First Trust Multi-Asset Diversified Income Index Fund"
  },
  {
    "ticker": "MDJH",
    "exchange": "NASDAQ",
    "name": "MDJM Ltd"
  },
  {
    "ticker": "MDLA",
    "exchange": "NYSE",
    "name": "Medallia Inc."
  },
  {
    "ticker": "MDLQ",
    "exchange": "NYSE",
    "name": "Medley LLC 7.25 % Notes 2017-30.01.24 Global"
  },
  {
    "ticker": "MDLX",
    "exchange": "NYSE",
    "name": "Medley LLC 6 7/8 % Notes 2016-15.08.26"
  },
  {
    "ticker": "MDLY",
    "exchange": "NYSE",
    "name": "Medley Management Inc. Class A"
  },
  {
    "ticker": "MDLZ",
    "exchange": "NASDAQ",
    "name": "Mondelez International Inc. Class A"
  },
  {
    "ticker": "MDP",
    "exchange": "NYSE",
    "name": "Meredith Corporation"
  },
  {
    "ticker": "MDRR",
    "exchange": "NASDAQ",
    "name": "Medalist Diversified REIT Inc."
  },
  {
    "ticker": "MDRRP",
    "exchange": "NASDAQ",
    "name": "Medalist Diversified REIT Inc 8 % Cum Red Pfd Registered Shs 2020-19.02.25 Series A"
  },
  {
    "ticker": "MDRX",
    "exchange": "NASDAQ",
    "name": "Allscripts Healthcare Solutions Inc."
  },
  {
    "ticker": "MDT",
    "exchange": "NYSE",
    "name": "Medtronic Plc"
  },
  {
    "ticker": "MDU",
    "exchange": "NYSE",
    "name": "MDU Resources Group Inc"
  },
  {
    "ticker": "MDWD",
    "exchange": "NASDAQ",
    "name": "MediWound Ltd."
  },
  {
    "ticker": "MDY",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Midcap 400 ETF Trust"
  },
  {
    "ticker": "MDYG",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P 400 Mid Cap Growth ETF"
  },
  {
    "ticker": "MDYV",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P 400 Mid Cap Value ETF"
  },
  {
    "ticker": "MEAR",
    "exchange": "Cboe BZX",
    "name": "iShares Short Maturity Municipal Bond ETF"
  },
  {
    "ticker": "MEC",
    "exchange": "NYSE",
    "name": "Mayville Engineering Company Inc."
  },
  {
    "ticker": "MED",
    "exchange": "NYSE",
    "name": "Medifast Inc."
  },
  {
    "ticker": "MEDP",
    "exchange": "NASDAQ",
    "name": "Medpace Holdings Inc."
  },
  {
    "ticker": "MEDS",
    "exchange": "NASDAQ",
    "name": "Trxade Group Inc."
  },
  {
    "ticker": "MEET",
    "exchange": "NASDAQ",
    "name": "Meet Group Inc"
  },
  {
    "ticker": "MEG",
    "exchange": "NYSE",
    "name": "Montrose Environmental Group Inc"
  },
  {
    "ticker": "MEI",
    "exchange": "NYSE",
    "name": "Methode Electronics Inc."
  },
  {
    "ticker": "MEIP",
    "exchange": "NASDAQ",
    "name": "MEI Pharma Inc."
  },
  {
    "ticker": "MELI",
    "exchange": "NASDAQ",
    "name": "MercadoLibre Inc."
  },
  {
    "ticker": "MEN",
    "exchange": "NYSE",
    "name": "BlackRock MuniEnhanced Fund Inc"
  },
  {
    "ticker": "MEOH",
    "exchange": "NASDAQ",
    "name": "Methanex Corporation"
  },
  {
    "ticker": "MER-K",
    "exchange": "NYSE",
    "name": "Bank of America Corp 6.45 % Notes 2018-15.12.66 Income Capital Obligations"
  },
  {
    "ticker": "MERC",
    "exchange": "NASDAQ",
    "name": "Mercer International Inc."
  },
  {
    "ticker": "MESA",
    "exchange": "NASDAQ",
    "name": "Mesa Air Group Inc"
  },
  {
    "ticker": "MESO",
    "exchange": "NASDAQ",
    "name": "Mesoblast Limited Sponsored ADR"
  },
  {
    "ticker": "MET",
    "exchange": "NYSE",
    "name": "MetLife Inc."
  },
  {
    "ticker": "MET-A",
    "exchange": "NYSE",
    "name": "MetLife Inc. Floating Rate Non Cum Pfd Shs Series A"
  },
  {
    "ticker": "MET-E",
    "exchange": "NYSE",
    "name": "MetLife Inc. Deposit Shs Repr 1/1000th 5.625 % Non-Cum Perp Red Pfd Shs Series E"
  },
  {
    "ticker": "MET-F",
    "exchange": "NYSE",
    "name": "Metlife Inc Depositary Shs Repr 1/1000th 4.75 % Non-Cum Perp Red Pfd Shs Series F"
  },
  {
    "ticker": "METC",
    "exchange": "NASDAQ",
    "name": "Ramaco Resources Inc."
  },
  {
    "ticker": "METX",
    "exchange": "NASDAQ",
    "name": "Meten EdtechX Education Group Ltd"
  },
  {
    "ticker": "METXW",
    "exchange": "NASDAQ",
    "name": "Meten EdtechX Education Group Ltd Warrant 2020-31.03.25 on Meten EdtechX"
  },
  {
    "ticker": "MEXX",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily MSCI Mexico Bull 3X Shares"
  },
  {
    "ticker": "MFA",
    "exchange": "NYSE",
    "name": "MFA Financial Inc."
  },
  {
    "ticker": "MFA-B",
    "exchange": "NYSE",
    "name": "MFA Financial Inc. 7 1/2 % Cum Red Pfd Shs Series B"
  },
  {
    "ticker": "MFA-C",
    "exchange": "NYSE",
    "name": "MFA Financial Inc. Cum Conv Red Perp Pfd Registered Shs Series C"
  },
  {
    "ticker": "MFAC",
    "exchange": "NYSE",
    "name": "Megalith Financial Acquisition Corp. Class A"
  },
  {
    "ticker": "MFAC=",
    "exchange": "NYSE",
    "name": "Megalith Financial Acquisition Corp. Units Cons of 1 Sh + 1 Wt 09.25"
  },
  {
    "ticker": "MFAC+",
    "exchange": "NYSE",
    "name": "Megalith Financial Acquisition Corp Warrant 2018-30.09.25 on Megalith Finl"
  },
  {
    "ticker": "MFC",
    "exchange": "NYSE",
    "name": "Manulife Financial Corporation"
  },
  {
    "ticker": "MFD",
    "exchange": "NYSE",
    "name": "Macquarie/ First Trust Global Infrastructure/ Utilities Dividend & Income Fund"
  },
  {
    "ticker": "MFDX",
    "exchange": "NYSE ARCA",
    "name": "PIMCO RAFI Dynamic Multi-Factor International Equity ETF"
  },
  {
    "ticker": "MFEM",
    "exchange": "NYSE ARCA",
    "name": "PIMCO RAFI Dynamic Multi-Factor Emerging Markets Equity ETF"
  },
  {
    "ticker": "MFG",
    "exchange": "NYSE",
    "name": "Mizuho Financial Group Inc. Sponsored ADR"
  },
  {
    "ticker": "MFGP",
    "exchange": "NYSE",
    "name": "Micro Focus International plc Sponsored ADR"
  },
  {
    "ticker": "MFH",
    "exchange": "NASDAQ",
    "name": "Mercurity Fintech Holding Inc. Sponsored ADR"
  },
  {
    "ticker": "MFIN",
    "exchange": "NASDAQ",
    "name": "Medallion Financial Corp."
  },
  {
    "ticker": "MFINL",
    "exchange": "NASDAQ",
    "name": "Medallion Financial 9 % Notes 2016-15.04.21"
  },
  {
    "ticker": "MFL",
    "exchange": "NYSE",
    "name": "BlackRock MuniHoldings Investment Quality Fund"
  },
  {
    "ticker": "MFM",
    "exchange": "NYSE",
    "name": "MFS Municipal Income Trust"
  },
  {
    "ticker": "MFMS",
    "exchange": "Cboe BZX",
    "name": "Motley Fool Small-Cap Growth ETF"
  },
  {
    "ticker": "MFNC",
    "exchange": "NASDAQ",
    "name": "Mackinac Financial Corporation"
  },
  {
    "ticker": "MFO",
    "exchange": "NYSE",
    "name": "MFA Financial Inc. 8 % Notes 2012-15.4.42 Sr"
  },
  {
    "ticker": "MFT",
    "exchange": "NYSE",
    "name": "BlackRock MuniYield Investment Quality Fund"
  },
  {
    "ticker": "MFUS",
    "exchange": "NYSE ARCA",
    "name": "PIMCO RAFI Dynamic Multi-Factor U.S. Equity ETF"
  },
  {
    "ticker": "MFV",
    "exchange": "NYSE",
    "name": "MFS Special Value Trust"
  },
  {
    "ticker": "MG",
    "exchange": "NYSE",
    "name": "Mistras Group Inc."
  },
  {
    "ticker": "MGA",
    "exchange": "NYSE",
    "name": "Magna International Inc."
  },
  {
    "ticker": "MGC",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Mega Cap ETF"
  },
  {
    "ticker": "MGEE",
    "exchange": "NASDAQ",
    "name": "MGE Energy Inc."
  },
  {
    "ticker": "MGEN",
    "exchange": "NASDAQ",
    "name": "Miragen Therapeutics Inc."
  },
  {
    "ticker": "MGF",
    "exchange": "NYSE",
    "name": "MFS Government Markets Income Trust"
  },
  {
    "ticker": "MGI",
    "exchange": "NASDAQ",
    "name": "MoneyGram International Inc."
  },
  {
    "ticker": "MGIC",
    "exchange": "NASDAQ",
    "name": "Magic Software Enterprises Ltd."
  },
  {
    "ticker": "MGK",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Mega Cap Growth ETF"
  },
  {
    "ticker": "MGLN",
    "exchange": "NASDAQ",
    "name": "Magellan Health Inc."
  },
  {
    "ticker": "MGM",
    "exchange": "NYSE",
    "name": "MGM Resorts International"
  },
  {
    "ticker": "MGNI",
    "exchange": "NASDAQ",
    "name": "Magnite Inc."
  },
  {
    "ticker": "MGNX",
    "exchange": "NASDAQ",
    "name": "MacroGenics Inc."
  },
  {
    "ticker": "MGP",
    "exchange": "NYSE",
    "name": "MGM Growth Properties LLC Class A"
  },
  {
    "ticker": "MGPI",
    "exchange": "NASDAQ",
    "name": "MGP Ingredients Inc."
  },
  {
    "ticker": "MGR",
    "exchange": "NYSE",
    "name": "Affiliated Managers Group Inc 5.875 % Notes 2019-30.03.59 Global"
  },
  {
    "ticker": "MGRC",
    "exchange": "NASDAQ",
    "name": "McGrath RentCorp"
  },
  {
    "ticker": "MGTA",
    "exchange": "NASDAQ",
    "name": "Magenta Therapeutics Inc"
  },
  {
    "ticker": "MGTX",
    "exchange": "NASDAQ",
    "name": "MeiraGTx Holdings Plc"
  },
  {
    "ticker": "MGU",
    "exchange": "NYSE",
    "name": "Macquarie Global Infrastructure Total Return Fund Inc"
  },
  {
    "ticker": "MGV",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Mega Cap Value ETF"
  },
  {
    "ticker": "MGY",
    "exchange": "NYSE",
    "name": "Magnolia Oil & Gas Corp. Class A"
  },
  {
    "ticker": "MGYR",
    "exchange": "NASDAQ",
    "name": "Magyar Bancorp Inc."
  },
  {
    "ticker": "MH-A",
    "exchange": "NYSE",
    "name": "Maiden Holdings Ltd 8 1/4 % Non-Cum Pfd Shs Series A"
  },
  {
    "ticker": "MH-C",
    "exchange": "NYSE",
    "name": "Maiden Holdings Ltd 7 1/8 % Non-Cum Pfd Series C"
  },
  {
    "ticker": "MH-D",
    "exchange": "NYSE",
    "name": "Maiden Holdings Ltd 6.7% Red Pfd Registered Shs Series D"
  },
  {
    "ticker": "MHD",
    "exchange": "NYSE",
    "name": "BlackRock MuniHoldings Fund Inc"
  },
  {
    "ticker": "MHE",
    "exchange": "NYSE",
    "name": "BlackRock Massachusetts Tax-Exempt Trust"
  },
  {
    "ticker": "MHF",
    "exchange": "NYSE",
    "name": "Western Asset Municipal High Income Fund"
  },
  {
    "ticker": "MHH",
    "exchange": "NYSE American",
    "name": "Mastech Digital Inc."
  },
  {
    "ticker": "MHI",
    "exchange": "NYSE",
    "name": "Pioneer Municipal High Income Trust"
  },
  {
    "ticker": "MHK",
    "exchange": "NYSE",
    "name": "Mohawk Industries Inc."
  },
  {
    "ticker": "MHLA",
    "exchange": "NYSE",
    "name": "Maiden Holdings Ltd 6 5/8 % Notes 2016-14.06.46"
  },
  {
    "ticker": "MHLD",
    "exchange": "NASDAQ",
    "name": "Maiden Holdings Ltd."
  },
  {
    "ticker": "MHN",
    "exchange": "NYSE",
    "name": "BlackRock MuniHoldings New York Quality Fund Inc"
  },
  {
    "ticker": "MHNC",
    "exchange": "NYSE",
    "name": "Maiden Holdings North America Ltd. 7 3/4 % Notes 2013-1.12.43 Gtd Sr"
  },
  {
    "ticker": "MHO",
    "exchange": "NYSE",
    "name": "M/I Homes Inc."
  },
  {
    "ticker": "MIC",
    "exchange": "NYSE",
    "name": "Macquarie Infrastructure Corporation"
  },
  {
    "ticker": "MICT",
    "exchange": "NASDAQ",
    "name": "MICT Inc."
  },
  {
    "ticker": "MIDD",
    "exchange": "NASDAQ",
    "name": "Middleby Corporation"
  },
  {
    "ticker": "MIDF",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI USA Mid-Cap Multifactor ETF"
  },
  {
    "ticker": "MIDU",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Mid Cap Bull 3x Shares"
  },
  {
    "ticker": "MIE",
    "exchange": "NYSE",
    "name": "Cohen & Steers MLP Income & Energy Opportunity Fund Inc"
  },
  {
    "ticker": "MIK",
    "exchange": "NASDAQ",
    "name": "Michaels Companies Inc"
  },
  {
    "ticker": "MILN",
    "exchange": "NASDAQ",
    "name": "Global X Millennials Thematic ETF"
  },
  {
    "ticker": "MIME",
    "exchange": "NASDAQ",
    "name": "Mimecast Limited"
  },
  {
    "ticker": "MIN",
    "exchange": "NYSE",
    "name": "MFS Intermediate Income Trust"
  },
  {
    "ticker": "MINC",
    "exchange": "NYSE ARCA",
    "name": "AdvisorShares Newfleet Multi-Sector Income ETF"
  },
  {
    "ticker": "MIND",
    "exchange": "NASDAQ",
    "name": "MIND Technology Inc"
  },
  {
    "ticker": "MINDP",
    "exchange": "NASDAQ",
    "name": "MIND Technology Inc 9% Cum Pfd Shs Series A"
  },
  {
    "ticker": "MINT",
    "exchange": "NYSE ARCA",
    "name": "PIMCO Enhanced Short Maturity Active ETF"
  },
  {
    "ticker": "MIRM",
    "exchange": "NASDAQ",
    "name": "Mirum Pharmaceuticals Inc."
  },
  {
    "ticker": "MIST",
    "exchange": "NASDAQ",
    "name": "Milestone Pharmaceuticals Inc."
  },
  {
    "ticker": "MITK",
    "exchange": "NASDAQ",
    "name": "Mitek Systems Inc."
  },
  {
    "ticker": "MITO",
    "exchange": "NASDAQ",
    "name": "Stealth Biotherapeutics Corp Sponsored ADR"
  },
  {
    "ticker": "MITT",
    "exchange": "NYSE",
    "name": "AG Mortgage Investment Trust Inc."
  },
  {
    "ticker": "MITT-A",
    "exchange": "NYSE",
    "name": "AG Mortgage Investment Trust Inc 8 1/4 % Cum Red Pfd Shs Series A"
  },
  {
    "ticker": "MITT-B",
    "exchange": "NYSE",
    "name": "AG Mortgage Investment Trust Inc 8 % Cum Red Pfd Shs Series B"
  },
  {
    "ticker": "MITT-C",
    "exchange": "NYSE",
    "name": "AG Mortgage Investment Trust Inc Cum Conv Perp Red Pfd Registered Shs C Series C"
  },
  {
    "ticker": "MIXT",
    "exchange": "NYSE",
    "name": "MiX Telematics Limited Sponsored ADR"
  },
  {
    "ticker": "MIY",
    "exchange": "NYSE",
    "name": "BlackRock MuniYield Michigan Quality Fund Inc"
  },
  {
    "ticker": "MJ",
    "exchange": "NYSE ARCA",
    "name": "ETFMG Alternative Harvest ETF"
  },
  {
    "ticker": "MJCO",
    "exchange": "NASDAQ",
    "name": "Majesco"
  },
  {
    "ticker": "MJJ",
    "exchange": "NYSE ARCA",
    "name": "Microsectors Cannabis ETN"
  },
  {
    "ticker": "MJO",
    "exchange": "NYSE ARCA",
    "name": "MicroSectors Cannabis 2X Leveraged ETN"
  },
  {
    "ticker": "MKC",
    "exchange": "NYSE",
    "name": "McCormick & Company Incorporated"
  },
  {
    "ticker": "MKC.V",
    "exchange": "NYSE",
    "name": "McCormick & Company Incorporated"
  },
  {
    "ticker": "MKD",
    "exchange": "NASDAQ",
    "name": "Molecular Data Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "MKGI",
    "exchange": "NASDAQ",
    "name": "Monaker Group Inc."
  },
  {
    "ticker": "MKL",
    "exchange": "NYSE",
    "name": "Markel Corporation"
  },
  {
    "ticker": "MKSI",
    "exchange": "NASDAQ",
    "name": "MKS Instruments Inc."
  },
  {
    "ticker": "MKTX",
    "exchange": "NASDAQ",
    "name": "MarketAxess Holdings Inc."
  },
  {
    "ticker": "MLAB",
    "exchange": "NASDAQ",
    "name": "Mesa Laboratories Inc."
  },
  {
    "ticker": "MLAC",
    "exchange": "NASDAQ",
    "name": "Malacca Straits Acquisition Co. Ltd. Class A"
  },
  {
    "ticker": "MLACU",
    "exchange": "NASDAQ",
    "name": "Malacca Straits Acquisition Co. Ltd. Units Cons of 1 Sh A + 1/2 Wt"
  },
  {
    "ticker": "MLACW",
    "exchange": "NASDAQ",
    "name": "Malacca Straits Acquisition Company Ltd Warrant 2020-30.06.27 on Malacca Straits Acquisition"
  },
  {
    "ticker": "MLCO",
    "exchange": "NASDAQ",
    "name": "Melco Resorts & Entertainment Limited Sponsored ADR"
  },
  {
    "ticker": "MLHR",
    "exchange": "NASDAQ",
    "name": "Herman Miller Inc."
  },
  {
    "ticker": "MLI",
    "exchange": "NYSE",
    "name": "Mueller Industries Inc."
  },
  {
    "ticker": "MLM",
    "exchange": "NYSE",
    "name": "Martin Marietta Materials Inc."
  },
  {
    "ticker": "MLN",
    "exchange": "Cboe BZX",
    "name": "VanEck Vectors AMT-Free Long Municipal Index ETF"
  },
  {
    "ticker": "MLND",
    "exchange": "NASDAQ",
    "name": "Millendo Therapeutics Inc."
  },
  {
    "ticker": "MLP",
    "exchange": "NYSE",
    "name": "Maui Land & Pineapple Company Inc."
  },
  {
    "ticker": "MLPA",
    "exchange": "NYSE ARCA",
    "name": "Global X MLP ETF"
  },
  {
    "ticker": "MLPB",
    "exchange": "NYSE ARCA",
    "name": "ETRACS Alerian MLP Infrastructure Index ETN Series B"
  },
  {
    "ticker": "MLPC",
    "exchange": "NYSE ARCA",
    "name": "C-Tracks Miller/Howard MLP Fundamental Index ETN"
  },
  {
    "ticker": "MLPE",
    "exchange": "NYSE ARCA",
    "name": "C-Tracks ETN Miller/Howard MLP Fundamental Index Series B"
  },
  {
    "ticker": "MLPG",
    "exchange": "NYSE ARCA",
    "name": "ETRACS Alerian Natural Gas MLP ETN"
  },
  {
    "ticker": "MLPI",
    "exchange": "NYSE ARCA",
    "name": "ETRACS Alerian MLP Infrastructure Index ETN"
  },
  {
    "ticker": "MLPO",
    "exchange": "NYSE ARCA",
    "name": "Credit Suisse S&P MLP Index ETN"
  },
  {
    "ticker": "MLPR",
    "exchange": "NYSE ARCA",
    "name": "ETRACS Quarterly Pay 1.5X Leveraged Alerian MLP Index ETN"
  },
  {
    "ticker": "MLPX",
    "exchange": "NYSE ARCA",
    "name": "Global X MLP & Energy Infrastructure ETF"
  },
  {
    "ticker": "MLPY",
    "exchange": "NYSE ARCA",
    "name": "Morgan Stanley Cushing MLP High Income Index ETN"
  },
  {
    "ticker": "MLR",
    "exchange": "NYSE",
    "name": "Miller Industries Inc."
  },
  {
    "ticker": "MLSS",
    "exchange": "NYSE American",
    "name": "Milestone Scientific Inc."
  },
  {
    "ticker": "MLVF",
    "exchange": "NASDAQ",
    "name": "Malvern Bancorp Inc."
  },
  {
    "ticker": "MMAC",
    "exchange": "NASDAQ",
    "name": "MMA Capital Holdings Inc."
  },
  {
    "ticker": "MMC",
    "exchange": "NYSE",
    "name": "Marsh & McLennan Companies Inc."
  },
  {
    "ticker": "MMD",
    "exchange": "NYSE",
    "name": "MainStay MacKay DefinedTerm Municipal Opportunities Fund of Beneficial Interest"
  },
  {
    "ticker": "MMI",
    "exchange": "NYSE",
    "name": "Marcus & Millichap Inc."
  },
  {
    "ticker": "MMIN",
    "exchange": "NYSE ARCA",
    "name": "IQ MacKay Municipal Insured ETF"
  },
  {
    "ticker": "MMIT",
    "exchange": "NYSE ARCA",
    "name": "IQ MacKay Municipal Intermediate ETF"
  },
  {
    "ticker": "MMLG",
    "exchange": "NYSE ARCA",
    "name": "First Trust Multi-Manager Large Growth ETF"
  },
  {
    "ticker": "MMLP",
    "exchange": "NASDAQ",
    "name": "Martin Midstream Partners L.P."
  },
  {
    "ticker": "MMM",
    "exchange": "NYSE",
    "name": "3M Company"
  },
  {
    "ticker": "MMP",
    "exchange": "NYSE",
    "name": "Magellan Midstream Partners L.P."
  },
  {
    "ticker": "MMS",
    "exchange": "NYSE",
    "name": "MAXIMUS Inc."
  },
  {
    "ticker": "MMSI",
    "exchange": "NASDAQ",
    "name": "Merit Medical Systems Inc."
  },
  {
    "ticker": "MMT",
    "exchange": "NYSE",
    "name": "MFS Multimarket Income Trust"
  },
  {
    "ticker": "MMTM",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P 1500 Momentum Tilt ETF"
  },
  {
    "ticker": "MMU",
    "exchange": "NYSE",
    "name": "Western Asset Managed Municipals Fund"
  },
  {
    "ticker": "MMX",
    "exchange": "NYSE American",
    "name": "Maverix Metals Inc"
  },
  {
    "ticker": "MMYT",
    "exchange": "NASDAQ",
    "name": "MakeMyTrip Ltd."
  },
  {
    "ticker": "MN",
    "exchange": "NYSE",
    "name": "Manning & Napier Inc. Class A"
  },
  {
    "ticker": "MNA",
    "exchange": "NYSE ARCA",
    "name": "IQ Merger Arbitrage ETF"
  },
  {
    "ticker": "MNCL",
    "exchange": "NASDAQ",
    "name": "Monocle Acquisition Corp."
  },
  {
    "ticker": "MNCLU",
    "exchange": "NASDAQ",
    "name": "Monocle Acquisition Corp. Units Cons of 1 Sh + 1 Wt 06.12.24"
  },
  {
    "ticker": "MNCLW",
    "exchange": "NASDAQ",
    "name": "Monocle Acquisition Corporation Warrant 2019-06.12.24 on Monocle Acqn"
  },
  {
    "ticker": "MNDO",
    "exchange": "NASDAQ",
    "name": "MIND C.T.I. Ltd."
  },
  {
    "ticker": "MNK",
    "exchange": "NYSE",
    "name": "Mallinckrodt Plc"
  },
  {
    "ticker": "MNKD",
    "exchange": "NASDAQ",
    "name": "MannKind Corporation"
  },
  {
    "ticker": "MNLO",
    "exchange": "NASDAQ",
    "name": "Menlo Therapeutics Inc."
  },
  {
    "ticker": "MNOV",
    "exchange": "NASDAQ",
    "name": "MediciNova Inc."
  },
  {
    "ticker": "MNP",
    "exchange": "NYSE",
    "name": "Western Asset Municipal Partners Fund Inc"
  },
  {
    "ticker": "MNPR",
    "exchange": "NASDAQ",
    "name": "Monopar Therapeutics Inc"
  },
  {
    "ticker": "MNR",
    "exchange": "NYSE",
    "name": "Monmouth Real Estate Investment Corporation Class A"
  },
  {
    "ticker": "MNR-C",
    "exchange": "NYSE",
    "name": "Monmouth Real Estate Investment Corp 6.125% Cum Red Pfd Registered Series C"
  },
  {
    "ticker": "MNRL",
    "exchange": "NYSE",
    "name": "Brigham Minerals Inc. Class A"
  },
  {
    "ticker": "MNRO",
    "exchange": "NASDAQ",
    "name": "Monro Inc"
  },
  {
    "ticker": "MNSB",
    "exchange": "NASDAQ",
    "name": "MainStreet Bancshares Inc."
  },
  {
    "ticker": "MNST",
    "exchange": "NASDAQ",
    "name": "Monster Beverage Corporation"
  },
  {
    "ticker": "MNTA",
    "exchange": "NASDAQ",
    "name": "Momenta Pharmaceuticals Inc."
  },
  {
    "ticker": "MNTX",
    "exchange": "NASDAQ",
    "name": "Manitex International Inc."
  },
  {
    "ticker": "MO",
    "exchange": "NYSE",
    "name": "Altria Group Inc"
  },
  {
    "ticker": "MOAT",
    "exchange": "Cboe BZX",
    "name": "VanEck Vectors Morningstar Wide Moat ETF"
  },
  {
    "ticker": "MOBL",
    "exchange": "NASDAQ",
    "name": "MobileIron Inc."
  },
  {
    "ticker": "MOD",
    "exchange": "NYSE",
    "name": "Modine Manufacturing Company"
  },
  {
    "ticker": "MODN",
    "exchange": "NYSE",
    "name": "Model N Inc."
  },
  {
    "ticker": "MOFG",
    "exchange": "NASDAQ",
    "name": "MidWestOne Financial Group Inc."
  },
  {
    "ticker": "MOG.A",
    "exchange": "NYSE",
    "name": "Moog Inc. Class A"
  },
  {
    "ticker": "MOG.B",
    "exchange": "NYSE",
    "name": "Moog Inc. Class B"
  },
  {
    "ticker": "MOGO",
    "exchange": "NASDAQ",
    "name": "Mogo Inc"
  },
  {
    "ticker": "MOGU",
    "exchange": "NYSE",
    "name": "Mogu Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "MOH",
    "exchange": "NYSE",
    "name": "Molina Healthcare Inc."
  },
  {
    "ticker": "MOHO",
    "exchange": "NASDAQ",
    "name": "ECMOHO Ltd Sponsored ADR Class A"
  },
  {
    "ticker": "MOM",
    "exchange": "NYSE ARCA",
    "name": "AGFiQ U.S. Market Neutral Momentum Fund"
  },
  {
    "ticker": "MOMO",
    "exchange": "NASDAQ",
    "name": "Momo Inc Sponsored ADR Class A"
  },
  {
    "ticker": "MOO",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Agribusiness ETF"
  },
  {
    "ticker": "MOR",
    "exchange": "NASDAQ",
    "name": "MorphoSys AG Sponsored ADR"
  },
  {
    "ticker": "MORF",
    "exchange": "NASDAQ",
    "name": "Morphic Holding Inc."
  },
  {
    "ticker": "MORN",
    "exchange": "NASDAQ",
    "name": "Morningstar Inc."
  },
  {
    "ticker": "MORT",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Mortgage REIT Income ETF"
  },
  {
    "ticker": "MOS",
    "exchange": "NYSE",
    "name": "Mosaic Company"
  },
  {
    "ticker": "MOSY",
    "exchange": "NASDAQ",
    "name": "MoSys Inc."
  },
  {
    "ticker": "MOTI",
    "exchange": "Cboe BZX",
    "name": "VanEck Vectors Morningstar International Moat ETF"
  },
  {
    "ticker": "MOTO",
    "exchange": "NYSE ARCA",
    "name": "SmartETFs Smart Transportation & Technology ETF"
  },
  {
    "ticker": "MOTS",
    "exchange": "NASDAQ",
    "name": "Motus GI Holdings Inc."
  },
  {
    "ticker": "MOV",
    "exchange": "NYSE",
    "name": "Movado Group Inc."
  },
  {
    "ticker": "MOXC",
    "exchange": "NASDAQ",
    "name": "Moxian Inc."
  },
  {
    "ticker": "MPA",
    "exchange": "NYSE",
    "name": "BlackRock MuniYield Pennsylvania Quality Fund"
  },
  {
    "ticker": "MPAA",
    "exchange": "NASDAQ",
    "name": "Motorcar Parts of America Inc."
  },
  {
    "ticker": "MPB",
    "exchange": "NASDAQ",
    "name": "Mid Penn Bancorp Inc."
  },
  {
    "ticker": "MPC",
    "exchange": "NYSE",
    "name": "Marathon Petroleum Corporation"
  },
  {
    "ticker": "MPLX",
    "exchange": "NYSE",
    "name": "MPLX LP"
  },
  {
    "ticker": "MPV",
    "exchange": "NYSE",
    "name": "Barings Participation Investors of Benef Interest"
  },
  {
    "ticker": "MPW",
    "exchange": "NYSE",
    "name": "Medical Properties Trust Inc."
  },
  {
    "ticker": "MPWR",
    "exchange": "NASDAQ",
    "name": "Monolithic Power Systems Inc."
  },
  {
    "ticker": "MPX",
    "exchange": "NYSE",
    "name": "Marine Products Corporation"
  },
  {
    "ticker": "MQT",
    "exchange": "NYSE",
    "name": "BlackRock MuniYield Quality Fund II Inc"
  },
  {
    "ticker": "MQY",
    "exchange": "NYSE",
    "name": "BlackRock MuniYield Quality Fund Inc"
  },
  {
    "ticker": "MR",
    "exchange": "NYSE",
    "name": "Montage Resources Corp."
  },
  {
    "ticker": "MRAM",
    "exchange": "NASDAQ",
    "name": "Everspin Technologies Inc."
  },
  {
    "ticker": "MRBK",
    "exchange": "NASDAQ",
    "name": "Meridian Corporation"
  },
  {
    "ticker": "MRC",
    "exchange": "NYSE",
    "name": "MRC Global Inc."
  },
  {
    "ticker": "MRCC",
    "exchange": "NASDAQ",
    "name": "Monroe Capital Corp."
  },
  {
    "ticker": "MRCCL",
    "exchange": "NASDAQ",
    "name": "Monroe Capital Corp. 5.75 % Notes 2018-31.10.23"
  },
  {
    "ticker": "MRCY",
    "exchange": "NASDAQ",
    "name": "Mercury Systems Inc."
  },
  {
    "ticker": "MREO",
    "exchange": "NASDAQ",
    "name": "Mereo BioPharma Group plc Sponsored ADR"
  },
  {
    "ticker": "MRGR",
    "exchange": "Cboe BZX",
    "name": "ProShares Merger ETF"
  },
  {
    "ticker": "MRIN",
    "exchange": "NASDAQ",
    "name": "Marin Software Inc."
  },
  {
    "ticker": "MRK",
    "exchange": "NYSE",
    "name": "Merck & Co. Inc."
  },
  {
    "ticker": "MRKR",
    "exchange": "NASDAQ",
    "name": "Marker Therapeutics Inc."
  },
  {
    "ticker": "MRLN",
    "exchange": "NASDAQ",
    "name": "Marlin Business Services Corp."
  },
  {
    "ticker": "MRNA",
    "exchange": "NASDAQ",
    "name": "Moderna Inc."
  },
  {
    "ticker": "MRNS",
    "exchange": "NASDAQ",
    "name": "Marinus Pharmaceuticals Inc"
  },
  {
    "ticker": "MRO",
    "exchange": "NYSE",
    "name": "Marathon Oil Corporation"
  },
  {
    "ticker": "MRSK",
    "exchange": "Cboe BZX",
    "name": "Agility Shares Managed Risk ETF"
  },
  {
    "ticker": "MRSN",
    "exchange": "NASDAQ",
    "name": "Mersana Therapeutics Inc."
  },
  {
    "ticker": "MRTN",
    "exchange": "NASDAQ",
    "name": "Marten Transport Ltd."
  },
  {
    "ticker": "MRTX",
    "exchange": "NASDAQ",
    "name": "Mirati Therapeutics Inc."
  },
  {
    "ticker": "MRUS",
    "exchange": "NASDAQ",
    "name": "Merus N.V."
  },
  {
    "ticker": "MRVL",
    "exchange": "NASDAQ",
    "name": "Marvell Technology Group Ltd."
  },
  {
    "ticker": "MS",
    "exchange": "NYSE",
    "name": "Morgan Stanley"
  },
  {
    "ticker": "MS-A",
    "exchange": "NYSE",
    "name": "Morgan Stanley Deposit Shs Repr 1/1000th Flt Rate Non Cum Pfd Shs Series - A-"
  },
  {
    "ticker": "MS-E",
    "exchange": "NYSE",
    "name": "Morgan Stanley Deposit Shs Repr 1/1000th Non-Cum Pfd Shs Series E"
  },
  {
    "ticker": "MS-F",
    "exchange": "NYSE",
    "name": "Morgan Stanley Deposit Shs Repr 1/1000th Non-Cum Pfd Shs Series F"
  },
  {
    "ticker": "MS-I",
    "exchange": "NYSE",
    "name": "Morgan Stanley Deposit Shs Repr 1/1000th Non-Cum Pfd Shs Series I"
  },
  {
    "ticker": "MS-K",
    "exchange": "NYSE",
    "name": "Morgan Stanley Deposit Shs Repr 1/1000th Non-Cum Pfd Registered Shs Series K"
  },
  {
    "ticker": "MS-L",
    "exchange": "NYSE",
    "name": "Morgan Stanley Depositary Shs Repr 1/1000th Non-Cum Perp Pfd Registered Shs Series L"
  },
  {
    "ticker": "MSA",
    "exchange": "NYSE",
    "name": "MSA Safety Inc."
  },
  {
    "ticker": "MSB",
    "exchange": "NYSE",
    "name": "Mesabi Trust"
  },
  {
    "ticker": "MSBI",
    "exchange": "NASDAQ",
    "name": "Midland States Bancorp Inc."
  },
  {
    "ticker": "MSC",
    "exchange": "NYSE",
    "name": "Studio City International Holdings Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "MSCI",
    "exchange": "NYSE",
    "name": "MSCI Inc. Class A"
  },
  {
    "ticker": "MSD",
    "exchange": "NYSE",
    "name": "Morgan Stanley Emerging Markets Debt Fund Inc (ex: Morgan Stanley Dean Witter Emerging MarketsDebt Fund Inc)"
  },
  {
    "ticker": "MSEX",
    "exchange": "NASDAQ",
    "name": "Middlesex Water Company"
  },
  {
    "ticker": "MSFT",
    "exchange": "NASDAQ",
    "name": "Microsoft Corporation"
  },
  {
    "ticker": "MSGE",
    "exchange": "NYSE",
    "name": "Madison Square Garden Entertainment Corp Class A"
  },
  {
    "ticker": "MSGN",
    "exchange": "NYSE",
    "name": "MSG Networks Inc. Class A"
  },
  {
    "ticker": "MSGS",
    "exchange": "NYSE",
    "name": "Madison Square Garden Sports Corp. Class A"
  },
  {
    "ticker": "MSI",
    "exchange": "NYSE",
    "name": "Motorola Solutions Inc."
  },
  {
    "ticker": "MSM",
    "exchange": "NYSE",
    "name": "MSC Industrial Direct Co. Inc. Class A"
  },
  {
    "ticker": "MSN",
    "exchange": "NYSE American",
    "name": "Emerson Radio Corp."
  },
  {
    "ticker": "MSON",
    "exchange": "NASDAQ",
    "name": "Misonix Inc"
  },
  {
    "ticker": "MSTR",
    "exchange": "NASDAQ",
    "name": "MicroStrategy Incorporated Class A"
  },
  {
    "ticker": "MSVB",
    "exchange": "NASDAQ",
    "name": "Mid-Southern Bancorp Inc."
  },
  {
    "ticker": "MSVX",
    "exchange": "Cboe BZX",
    "name": "LHA Market State Alpha Seeker ETF"
  },
  {
    "ticker": "MT",
    "exchange": "NYSE",
    "name": "ArcelorMittal SA ADR"
  },
  {
    "ticker": "MTA",
    "exchange": "NYSE American",
    "name": "Metalla Royalty & Streaming Ltd."
  },
  {
    "ticker": "MTB",
    "exchange": "NYSE",
    "name": "M&T Bank Corporation"
  },
  {
    "ticker": "MTBC",
    "exchange": "NASDAQ",
    "name": "MTBC Inc."
  },
  {
    "ticker": "MTBCP",
    "exchange": "NASDAQ",
    "name": "MTBC Inc. 11 % Cum Red Perp Pfd Registered Shs A"
  },
  {
    "ticker": "MTC",
    "exchange": "NASDAQ",
    "name": "MMTec Inc."
  },
  {
    "ticker": "MTCH",
    "exchange": "NASDAQ",
    "name": "Match Group Inc."
  },
  {
    "ticker": "MTCN",
    "exchange": "NYSE",
    "name": "ArcelorMittal Luxembourg S.A. 5.5 % Mandatory Convertible Notes 2020-18.05.23"
  },
  {
    "ticker": "MTD",
    "exchange": "NYSE",
    "name": "Mettler-Toledo International Inc."
  },
  {
    "ticker": "MTDR",
    "exchange": "NYSE",
    "name": "Matador Resources Company"
  },
  {
    "ticker": "MTEM",
    "exchange": "NASDAQ",
    "name": "Molecular Templates Inc."
  },
  {
    "ticker": "MTEX",
    "exchange": "NASDAQ",
    "name": "Mannatech Incorporated"
  },
  {
    "ticker": "MTG",
    "exchange": "NYSE",
    "name": "MGIC Investment Corporation"
  },
  {
    "ticker": "MTGP",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Mortgage Plus Bond Fund"
  },
  {
    "ticker": "MTH",
    "exchange": "NYSE",
    "name": "Meritage Homes Corporation"
  },
  {
    "ticker": "MTL",
    "exchange": "NYSE",
    "name": "Mechel PAO Sponsored ADR"
  },
  {
    "ticker": "MTL-",
    "exchange": "NYSE",
    "name": "Mechel PAO Sponsored ADR Pfd"
  },
  {
    "ticker": "MTLS",
    "exchange": "NASDAQ",
    "name": "Materialise NV Sponsored ADR"
  },
  {
    "ticker": "MTN",
    "exchange": "NYSE",
    "name": "Vail Resorts Inc."
  },
  {
    "ticker": "MTNB",
    "exchange": "NYSE American",
    "name": "MatiNASDAQ BioPharma Holdings Inc."
  },
  {
    "ticker": "MTOR",
    "exchange": "NYSE",
    "name": "Meritor Inc."
  },
  {
    "ticker": "MTP",
    "exchange": "NASDAQ",
    "name": "Midatech Pharma Plc Sponsored ADR"
  },
  {
    "ticker": "MTR",
    "exchange": "NYSE",
    "name": "Mesa Royalty Trust"
  },
  {
    "ticker": "MTRN",
    "exchange": "NYSE",
    "name": "Materion Corporation"
  },
  {
    "ticker": "MTRX",
    "exchange": "NASDAQ",
    "name": "Matrix Service Company"
  },
  {
    "ticker": "MTSC",
    "exchange": "NASDAQ",
    "name": "MTS Systems Corporation"
  },
  {
    "ticker": "MTSI",
    "exchange": "NASDAQ",
    "name": "MACOM Technology Solutions Holdings Inc."
  },
  {
    "ticker": "MTSL",
    "exchange": "NASDAQ",
    "name": "Mer Telemanagement Solutions Ltd."
  },
  {
    "ticker": "MTT",
    "exchange": "NYSE",
    "name": "Western Asset Municipal Defined Opportunity Trust Inc"
  },
  {
    "ticker": "MTUM",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI USA Momentum Factor ETF"
  },
  {
    "ticker": "MTW",
    "exchange": "NYSE",
    "name": "Manitowoc Company Inc."
  },
  {
    "ticker": "MTX",
    "exchange": "NYSE",
    "name": "Minerals Technologies Inc."
  },
  {
    "ticker": "MTZ",
    "exchange": "NYSE",
    "name": "MasTec Inc."
  },
  {
    "ticker": "MU",
    "exchange": "NASDAQ",
    "name": "Micron Technology Inc."
  },
  {
    "ticker": "MUA",
    "exchange": "NYSE",
    "name": "BlackRock MuniAssets Fund Inc"
  },
  {
    "ticker": "MUB",
    "exchange": "NYSE ARCA",
    "name": "iShares National Muni Bond ETF"
  },
  {
    "ticker": "MUC",
    "exchange": "NYSE",
    "name": "BlackRock MuniHoldings California Quality Fund Inc"
  },
  {
    "ticker": "MUE",
    "exchange": "NYSE",
    "name": "BlackRock MuniHoldings Quality Fund II Inc"
  },
  {
    "ticker": "MUFG",
    "exchange": "NYSE",
    "name": "Mitsubishi UFJ Financial Group Inc. Sponsored ADR"
  },
  {
    "ticker": "MUH",
    "exchange": "NYSE",
    "name": "BlackRock MuniHoldings Fund II Inc"
  },
  {
    "ticker": "MUI",
    "exchange": "NYSE",
    "name": "BlackRock Muni Intermediate Duration Fund Inc"
  },
  {
    "ticker": "MUJ",
    "exchange": "NYSE",
    "name": "BlackRock MuniHoldings New Jersey Quality Fund Inc"
  },
  {
    "ticker": "MUNI",
    "exchange": "NYSE ARCA",
    "name": "PIMCO Intermediate Municipal Bond Active ETF"
  },
  {
    "ticker": "MUR",
    "exchange": "NYSE",
    "name": "Murphy Oil Corporation"
  },
  {
    "ticker": "MUS",
    "exchange": "NYSE",
    "name": "BlackRock MuniHoldings Quality Fund Inc"
  },
  {
    "ticker": "MUSA",
    "exchange": "NYSE",
    "name": "Murphy USA Inc."
  },
  {
    "ticker": "MUST",
    "exchange": "NYSE ARCA",
    "name": "Columbia Multi-Sector Municipal Income ETF"
  },
  {
    "ticker": "MUTE",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Communication Services Index Bear 3X Shares"
  },
  {
    "ticker": "MUX",
    "exchange": "NYSE",
    "name": "McEwen Mining Inc."
  },
  {
    "ticker": "MVBF",
    "exchange": "NASDAQ",
    "name": "MVB Financial Corp."
  },
  {
    "ticker": "MVC",
    "exchange": "NYSE",
    "name": "MVC Capital Inc."
  },
  {
    "ticker": "MVCD",
    "exchange": "NYSE",
    "name": "MVC Capital Inc. 6.25 % Notes 2017-30.11.22"
  },
  {
    "ticker": "MVF",
    "exchange": "NYSE",
    "name": "BlackRock MuniVest Fund Inc"
  },
  {
    "ticker": "MVIN",
    "exchange": "NYSE ARCA",
    "name": "Natixis Seeyond International Minimum Volatility ETF"
  },
  {
    "ticker": "MVIS",
    "exchange": "NASDAQ",
    "name": "MicroVision Inc."
  },
  {
    "ticker": "MVO",
    "exchange": "NYSE",
    "name": "MV Oil Trust Units"
  },
  {
    "ticker": "MVRL",
    "exchange": "NYSE ARCA",
    "name": "ETRACS Monthly Pay 1.5x Leveraged Mortgage REIT ETN"
  },
  {
    "ticker": "MVT",
    "exchange": "NYSE",
    "name": "BlackRock MuniVest Fund II Inc"
  },
  {
    "ticker": "MVV",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra MidCap400"
  },
  {
    "ticker": "MWA",
    "exchange": "NYSE",
    "name": "Mueller Water Products Inc. Class A"
  },
  {
    "ticker": "MWK",
    "exchange": "NASDAQ",
    "name": "Mohawk Group Holdings Inc."
  },
  {
    "ticker": "MX",
    "exchange": "NYSE",
    "name": "MagnaChip Semiconductor Corporation"
  },
  {
    "ticker": "MXC",
    "exchange": "NYSE American",
    "name": "Mexco Energy Corporation"
  },
  {
    "ticker": "MXDE",
    "exchange": "NYSE ARCA",
    "name": "Nationwide Maximum Diversification Emerging Mkts Core Eq"
  },
  {
    "ticker": "MXDU",
    "exchange": "NYSE ARCA",
    "name": "Nationwide Maximum Diversification US Core Equity ETF"
  },
  {
    "ticker": "MXE",
    "exchange": "NYSE",
    "name": "Mexico Equity & Income Fund Inc"
  },
  {
    "ticker": "MXF",
    "exchange": "NYSE",
    "name": "Mexico Fund Inc"
  },
  {
    "ticker": "MXI",
    "exchange": "NYSE ARCA",
    "name": "iShares Global Materials ETF"
  },
  {
    "ticker": "MXIM",
    "exchange": "NASDAQ",
    "name": "Maxim Integrated Products Inc."
  },
  {
    "ticker": "MXL",
    "exchange": "NYSE",
    "name": "MaxLinear inc"
  },
  {
    "ticker": "MYC",
    "exchange": "NYSE",
    "name": "BlackRock MuniYield California Fund Inc"
  },
  {
    "ticker": "MYD",
    "exchange": "NYSE",
    "name": "BlackRock MuniYield Fund Inc"
  },
  {
    "ticker": "MYE",
    "exchange": "NYSE",
    "name": "Myers Industries Inc."
  },
  {
    "ticker": "MYF",
    "exchange": "NYSE",
    "name": "BlackRock MuniYield Investment Fund"
  },
  {
    "ticker": "MYFW",
    "exchange": "NASDAQ",
    "name": "First Western Financial Inc."
  },
  {
    "ticker": "MYGN",
    "exchange": "NASDAQ",
    "name": "Myriad Genetics Inc."
  },
  {
    "ticker": "MYI",
    "exchange": "NYSE",
    "name": "BlackRock MuniYield Quality Fund III Inc"
  },
  {
    "ticker": "MYJ",
    "exchange": "NYSE",
    "name": "BlackRock MuniYield New Jersey Fund Inc"
  },
  {
    "ticker": "MYL",
    "exchange": "NASDAQ",
    "name": "Mylan N.V."
  },
  {
    "ticker": "MYN",
    "exchange": "NYSE",
    "name": "BlackRock MuniYield New York Quality Fund Inc"
  },
  {
    "ticker": "MYO",
    "exchange": "NYSE American",
    "name": "Myomo Inc."
  },
  {
    "ticker": "MYOK",
    "exchange": "NASDAQ",
    "name": "MyoKardia Inc."
  },
  {
    "ticker": "MYOS",
    "exchange": "NASDAQ",
    "name": "MYOS RENS Technology Inc."
  },
  {
    "ticker": "MYOV",
    "exchange": "NYSE",
    "name": "Myovant Sciences Ltd."
  },
  {
    "ticker": "MYRG",
    "exchange": "NASDAQ",
    "name": "MYR Group Inc."
  },
  {
    "ticker": "MYSZ",
    "exchange": "NASDAQ",
    "name": "My Size Inc"
  },
  {
    "ticker": "MYT",
    "exchange": "NASDAQ",
    "name": "Urban Tea Inc."
  },
  {
    "ticker": "MYY",
    "exchange": "NYSE ARCA",
    "name": "ProShares Short S&P Mid Cap400"
  },
  {
    "ticker": "MZA",
    "exchange": "NYSE",
    "name": "BlackRock MuniYield Arizona Fund Inc"
  },
  {
    "ticker": "MZZ",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort MidCap400"
  },
  {
    "ticker": "NAC",
    "exchange": "NYSE",
    "name": "Nuveen California Quality Municipal Income Fund"
  },
  {
    "ticker": "NACP",
    "exchange": "NYSE ARCA",
    "name": "Impact Shares NAACP Minority Empowerment ETF"
  },
  {
    "ticker": "NAD",
    "exchange": "NYSE",
    "name": "Nuveen Quality Municipal Income Fund of Benef.Interest"
  },
  {
    "ticker": "NAII",
    "exchange": "NASDAQ",
    "name": "Natural Alternatives International Inc."
  },
  {
    "ticker": "NAIL",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Homebuilders & Supplies Bull 3X Shares"
  },
  {
    "ticker": "NAK",
    "exchange": "NYSE American",
    "name": "Northern DyNASDAQty Minerals Ltd."
  },
  {
    "ticker": "NAKD",
    "exchange": "NASDAQ",
    "name": "Naked Brand Group Limited"
  },
  {
    "ticker": "NAN",
    "exchange": "NYSE",
    "name": "Nuveen New York Quality Municipal Income Fund of Benef Interest"
  },
  {
    "ticker": "NANR",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P North American Natural Resources ETF"
  },
  {
    "ticker": "NAOV",
    "exchange": "NASDAQ",
    "name": "NanoVibronix Inc."
  },
  {
    "ticker": "NAPR",
    "exchange": "Cboe BZX",
    "name": "Innovator NASDAQdaq-100 Power Buffer ETF - April"
  },
  {
    "ticker": "NARI",
    "exchange": "NASDAQ",
    "name": "Inari Medical Inc."
  },
  {
    "ticker": "NAT",
    "exchange": "NYSE",
    "name": "Nordic American Tankers Limited"
  },
  {
    "ticker": "NATH",
    "exchange": "NASDAQ",
    "name": "Nathan's Famous Inc."
  },
  {
    "ticker": "NATI",
    "exchange": "NASDAQ",
    "name": "National Instruments Corporation"
  },
  {
    "ticker": "NATR",
    "exchange": "NASDAQ",
    "name": "Nature's Sunshine Products Inc."
  },
  {
    "ticker": "NAV",
    "exchange": "NYSE",
    "name": "Navistar International Corporation"
  },
  {
    "ticker": "NAV-D",
    "exchange": "NYSE",
    "name": "Navistar International Corp Conv.Jr Pref.Shs Series D"
  },
  {
    "ticker": "NAVB",
    "exchange": "NYSE American",
    "name": "Navidea Biopharmaceuticals Inc."
  },
  {
    "ticker": "NAVI",
    "exchange": "NASDAQ",
    "name": "Navient Corp"
  },
  {
    "ticker": "NAZ",
    "exchange": "NYSE",
    "name": "Nuveen Arizona Quality Municipal Income Fund"
  },
  {
    "ticker": "NBAC",
    "exchange": "NASDAQ",
    "name": "Newborn Acquisition Corp."
  },
  {
    "ticker": "NBACR",
    "exchange": "NASDAQ",
    "name": "Newborn Aquisition Corporation Rights -for Shares"
  },
  {
    "ticker": "NBACU",
    "exchange": "NASDAQ",
    "name": "Newborn Acquisition Corp. Units Cons of 1 Shs + 1 Wt + Rts"
  },
  {
    "ticker": "NBACW",
    "exchange": "NASDAQ",
    "name": "Newborn Acquisition Corp Warrant - on Newborn"
  },
  {
    "ticker": "NBB",
    "exchange": "NYSE",
    "name": "Nuveen Taxable Municipal Income Fund"
  },
  {
    "ticker": "NBEV",
    "exchange": "NASDAQ",
    "name": "NewAge Inc"
  },
  {
    "ticker": "NBH",
    "exchange": "NYSE American",
    "name": "Neuberger Berman Municipal Fund Inc"
  },
  {
    "ticker": "NBHC",
    "exchange": "NYSE",
    "name": "National Bank Holdings Corporation Class A"
  },
  {
    "ticker": "NBIX",
    "exchange": "NASDAQ",
    "name": "Neurocrine Biosciences Inc."
  },
  {
    "ticker": "NBL",
    "exchange": "NASDAQ",
    "name": "Noble Energy Inc."
  },
  {
    "ticker": "NBLX",
    "exchange": "NASDAQ",
    "name": "Noble Midstream Partners LP"
  },
  {
    "ticker": "NBN",
    "exchange": "NASDAQ",
    "name": "Northeast Bank"
  },
  {
    "ticker": "NBO",
    "exchange": "NYSE American",
    "name": "Neuberger Berman New York Municipal Fund Inc"
  },
  {
    "ticker": "NBR",
    "exchange": "NYSE",
    "name": "Nabors Industries Ltd."
  },
  {
    "ticker": "NBR-A",
    "exchange": "NYSE",
    "name": "Nabors Industries Ltd 6 % Cum Conv Perp Pfd Registered Shs Series A"
  },
  {
    "ticker": "NBRV",
    "exchange": "NASDAQ",
    "name": "Nabriva Therapeutics Plc"
  },
  {
    "ticker": "NBSE",
    "exchange": "NASDAQ",
    "name": "NeuBNYSE American Therapeutics Inc"
  },
  {
    "ticker": "NBTB",
    "exchange": "NASDAQ",
    "name": "NBT Bancorp Inc."
  },
  {
    "ticker": "NBW",
    "exchange": "NYSE American",
    "name": "Neuberger Berman California Municipal Fund Inc"
  },
  {
    "ticker": "NBY",
    "exchange": "NYSE American",
    "name": "NovaBay Pharmaceuticals Inc."
  },
  {
    "ticker": "NC",
    "exchange": "NYSE",
    "name": "NACCO Industries Inc. Class A"
  },
  {
    "ticker": "NCA",
    "exchange": "NYSE",
    "name": "Nuveen California Municipal Value Fund"
  },
  {
    "ticker": "NCB",
    "exchange": "NYSE",
    "name": "Nuveen California Municipal Value Fund 2"
  },
  {
    "ticker": "NCBS",
    "exchange": "NASDAQ",
    "name": "Nicolet Bankshares Inc."
  },
  {
    "ticker": "NCLH",
    "exchange": "NYSE",
    "name": "Norwegian Cruise Line Holdings Ltd."
  },
  {
    "ticker": "NCMI",
    "exchange": "NASDAQ",
    "name": "National CineMedia Inc."
  },
  {
    "ticker": "NCNA",
    "exchange": "NASDAQ",
    "name": "NuCana plc Sponsored ADR"
  },
  {
    "ticker": "NCNO",
    "exchange": "NASDAQ",
    "name": "nCino Inc."
  },
  {
    "ticker": "NCR",
    "exchange": "NYSE",
    "name": "NCR Corporation"
  },
  {
    "ticker": "NCSM",
    "exchange": "NASDAQ",
    "name": "NCS Multistage Holdings Inc."
  },
  {
    "ticker": "NCTY",
    "exchange": "NASDAQ",
    "name": "The9 Ltd. Sponsored ADR"
  },
  {
    "ticker": "NCV",
    "exchange": "NYSE",
    "name": "AllianzGI Convertible & Income Fund"
  },
  {
    "ticker": "NCV-A",
    "exchange": "NYSE",
    "name": "AllianzGI Convertible & Income Fund 5.625 % Cum Red Perp Pfd Registered Shs Series A"
  },
  {
    "ticker": "NCZ",
    "exchange": "NYSE",
    "name": "AllianzGI Convertible & Income Fund II"
  },
  {
    "ticker": "NCZ-A",
    "exchange": "NYSE",
    "name": "AllianzGI Convertible & Income Fund II 5.5 % Cum Pfd Registered Shs Series A"
  },
  {
    "ticker": "NDAQ",
    "exchange": "NASDAQ",
    "name": "NASDAQdaq Inc."
  },
  {
    "ticker": "NDLS",
    "exchange": "NASDAQ",
    "name": "Noodles & Co. Class A"
  },
  {
    "ticker": "NDP",
    "exchange": "NYSE",
    "name": "Tortoise Energy Independence Fund Inc."
  },
  {
    "ticker": "NDRA",
    "exchange": "NASDAQ",
    "name": "ENDRA Life Sciences Inc."
  },
  {
    "ticker": "NDRAW",
    "exchange": "NASDAQ",
    "name": "ENDRA Life Sciences Inc Warrant 2017-2021 on ENDRA Life Scncs"
  },
  {
    "ticker": "NDSN",
    "exchange": "NASDAQ",
    "name": "Nordson Corporation"
  },
  {
    "ticker": "NEA",
    "exchange": "NYSE",
    "name": "Nuveen AMT-Free Quality Municipal Income Fund of Benef Interest"
  },
  {
    "ticker": "NEAR",
    "exchange": "Cboe BZX",
    "name": "iShares Short Maturity Bond ETF"
  },
  {
    "ticker": "NEE",
    "exchange": "NYSE",
    "name": "NextEra Energy Inc."
  },
  {
    "ticker": "NEE-I",
    "exchange": "NYSE",
    "name": "NextEra Energy Capital Holdings Inc 5.125 % Debentures 2012-15.11.72 Jr Subord Series 1"
  },
  {
    "ticker": "NEE-J",
    "exchange": "NYSE",
    "name": "NextEra Energy Capital Holdings Inc 5 % Debentures 2013-15.1.73 Gtd Jr Subord Series J"
  },
  {
    "ticker": "NEE-K",
    "exchange": "NYSE",
    "name": "NextEra Energy Capital Holdings Inc 5.25 % Debentures 2016-01.06.76 Gtd Series K"
  },
  {
    "ticker": "NEE-N",
    "exchange": "NYSE",
    "name": "NextEra Energy Capital Holdings Inc 5.65 % Debentures 2019-01.03.79 Global Gtd Series N"
  },
  {
    "ticker": "NEE-O",
    "exchange": "NYSE",
    "name": "NextEra Energy Inc. Corporate Units Cons of Debenture 01.09.24 + 1 PC 01.09.22"
  },
  {
    "ticker": "NEE-P",
    "exchange": "NYSE",
    "name": "NextEra Energy Inc. Corporate Units Cons of Debenture 01.03.25 + 1 PC 01.03.23"
  },
  {
    "ticker": "NEED",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Consumer Staples Bull 3x Shares"
  },
  {
    "ticker": "NEM",
    "exchange": "NYSE",
    "name": "Newmont Corporation"
  },
  {
    "ticker": "NEN",
    "exchange": "NYSE American",
    "name": "New England Realty Associates Limited Partnership Depositary Receipts"
  },
  {
    "ticker": "NEO",
    "exchange": "NASDAQ",
    "name": "NeoGenomics Inc."
  },
  {
    "ticker": "NEOG",
    "exchange": "NASDAQ",
    "name": "Neogen Corporation"
  },
  {
    "ticker": "NEON",
    "exchange": "NASDAQ",
    "name": "Neonode Inc."
  },
  {
    "ticker": "NEOS",
    "exchange": "NASDAQ",
    "name": "Neos Therapeutics Inc."
  },
  {
    "ticker": "NEP",
    "exchange": "NYSE",
    "name": "NextEra Energy Partners LP"
  },
  {
    "ticker": "NEPH",
    "exchange": "NASDAQ",
    "name": "Nephros Inc."
  },
  {
    "ticker": "NEPT",
    "exchange": "NASDAQ",
    "name": "Neptune Wellness Solutions Inc."
  },
  {
    "ticker": "NERD",
    "exchange": "NYSE ARCA",
    "name": "Roundhill BITKRAFT Esports & Digital Entertainment ETF"
  },
  {
    "ticker": "NERV",
    "exchange": "NASDAQ",
    "name": "Minerva Neurosciences Inc"
  },
  {
    "ticker": "NES",
    "exchange": "NYSE American",
    "name": "Nuverra Environmental Solutions Inc."
  },
  {
    "ticker": "NESR",
    "exchange": "NASDAQ",
    "name": "National Energy Services Reunited Corp."
  },
  {
    "ticker": "NESRW",
    "exchange": "NASDAQ",
    "name": "National Energy Services Reunited Corp. Warrant -17.05.24 on Natl Energy Svc"
  },
  {
    "ticker": "NET",
    "exchange": "NYSE",
    "name": "Cloudflare Inc Class A"
  },
  {
    "ticker": "NETE",
    "exchange": "NASDAQ",
    "name": "Net Element Inc."
  },
  {
    "ticker": "NETL",
    "exchange": "NYSE ARCA",
    "name": "NETLeNYSE American Corporate Real Estate ETF"
  },
  {
    "ticker": "NEU",
    "exchange": "NYSE",
    "name": "NewMarket Corporation"
  },
  {
    "ticker": "NEV",
    "exchange": "NYSE",
    "name": "Nuveen Enhanced Municipal Value Fund"
  },
  {
    "ticker": "NEW",
    "exchange": "NYSE",
    "name": "Puxin Ltd. Sponsored ADR"
  },
  {
    "ticker": "NEWA",
    "exchange": "NASDAQ",
    "name": "Newater Technology Inc."
  },
  {
    "ticker": "NEWR",
    "exchange": "NYSE",
    "name": "New Relic Inc."
  },
  {
    "ticker": "NEWT",
    "exchange": "NASDAQ",
    "name": "Newtek Business Services Corp."
  },
  {
    "ticker": "NEWTI",
    "exchange": "NASDAQ",
    "name": "Newtek Business Services Corp 6.25 % Notes 2018-01.03.23"
  },
  {
    "ticker": "NEWTL",
    "exchange": "NASDAQ",
    "name": "Newtek Business Services Corp 5.75 % Notes 2019-01.08.24 Global"
  },
  {
    "ticker": "NEX",
    "exchange": "NYSE",
    "name": "NexTier Oilfield Solutions Inc."
  },
  {
    "ticker": "NEXA",
    "exchange": "NYSE",
    "name": "Nexa Resources S.A."
  },
  {
    "ticker": "NEXT",
    "exchange": "NASDAQ",
    "name": "NextDecade Corp."
  },
  {
    "ticker": "NFBK",
    "exchange": "NASDAQ",
    "name": "Northfield Bancorp Inc."
  },
  {
    "ticker": "NFE",
    "exchange": "NASDAQ",
    "name": "New Fortress Energy Inc. Class A"
  },
  {
    "ticker": "NFG",
    "exchange": "NYSE",
    "name": "National Fuel Gas Company"
  },
  {
    "ticker": "NFH",
    "exchange": "NYSE",
    "name": "New Frontier Health Corp."
  },
  {
    "ticker": "NFH+",
    "exchange": "NYSE",
    "name": "New Frontier Health Corp Warrant -30.11.24 on New Frontier"
  },
  {
    "ticker": "NFIN",
    "exchange": "NASDAQ",
    "name": "Netfin Acquisition Corp. Class A"
  },
  {
    "ticker": "NFINU",
    "exchange": "NASDAQ",
    "name": "Netfin Acquisition Corp Units Cons of 1 Sh A + 1 Wt 01.08.24"
  },
  {
    "ticker": "NFINW",
    "exchange": "NASDAQ",
    "name": "Netfin Acqusition Corp Warrant -01.08.24 on Netfin"
  },
  {
    "ticker": "NFJ",
    "exchange": "NYSE",
    "name": "AllianzGI Dividend. Interest & Premium Strategy Fund of Beneficial Interest"
  },
  {
    "ticker": "NFLT",
    "exchange": "NYSE ARCA",
    "name": "Virtus Newfleet Multi-Sector Bond ETF"
  },
  {
    "ticker": "NFLX",
    "exchange": "NASDAQ",
    "name": "Netflix Inc."
  },
  {
    "ticker": "NFRA",
    "exchange": "NYSE ARCA",
    "name": "FlexShares STOXX Global Broad Infrastructure Index Fund"
  },
  {
    "ticker": "NFTY",
    "exchange": "NASDAQ",
    "name": "First Trust India NIFTY 50 Equal Weight ETF"
  },
  {
    "ticker": "NG",
    "exchange": "NYSE American",
    "name": "Novagold Resources Inc"
  },
  {
    "ticker": "NGA=",
    "exchange": "NYSE",
    "name": "Northern Genesis Acquisition Corp. Units Cons of 1 Sh + 1/2 Wt 31.07.27"
  },
  {
    "ticker": "NGD",
    "exchange": "NYSE American",
    "name": "New Gold Inc."
  },
  {
    "ticker": "NGE",
    "exchange": "NYSE ARCA",
    "name": "Global X MSCI Nigeria ETF"
  },
  {
    "ticker": "NGG",
    "exchange": "NYSE",
    "name": "National Grid plc Sponsored ADR"
  },
  {
    "ticker": "NGHC",
    "exchange": "NASDAQ",
    "name": "National General Holdings Corp."
  },
  {
    "ticker": "NGHCN",
    "exchange": "NASDAQ",
    "name": "National General Holdings Corp 7 1/2 % Deposit Shs Repr 1/40th Non-Cum Perp Pfd Shs Series C"
  },
  {
    "ticker": "NGHCO",
    "exchange": "NASDAQ",
    "name": "National General Holdings Corp Deposit Shs Repr 1/40th Non-Cum Perp Pfd Shs Series B"
  },
  {
    "ticker": "NGHCP",
    "exchange": "NASDAQ",
    "name": "National General Holdings Corp 7 1/2 % Non-Cum Pfd Shs Series A"
  },
  {
    "ticker": "NGHCZ",
    "exchange": "NASDAQ",
    "name": "National General Holdings Corp 7 5/8 % Notes 2015-15.9.55"
  },
  {
    "ticker": "NGL",
    "exchange": "NYSE",
    "name": "NGL Energy Partners LP"
  },
  {
    "ticker": "NGL-B",
    "exchange": "NYSE",
    "name": "NGL Energy Partners LP Cum Red Perp Pfd Units B"
  },
  {
    "ticker": "NGL-C",
    "exchange": "NYSE",
    "name": "NGL Energy Partners LP Cum Red Perp Pfd Units C"
  },
  {
    "ticker": "NGLS-A",
    "exchange": "NYSE",
    "name": "Targa Resources Partners LP Cum Red Perp Pfd Unit Series A"
  },
  {
    "ticker": "NGM",
    "exchange": "NASDAQ",
    "name": "NGM Biopharmaceuticals Inc."
  },
  {
    "ticker": "NGS",
    "exchange": "NYSE",
    "name": "Natural Gas Services Group Inc."
  },
  {
    "ticker": "NGVC",
    "exchange": "NYSE",
    "name": "Natural Grocers by Vitamin Cottage Inc."
  },
  {
    "ticker": "NGVT",
    "exchange": "NYSE",
    "name": "Ingevity Corporation"
  },
  {
    "ticker": "NH",
    "exchange": "NASDAQ",
    "name": "NantHealth Inc."
  },
  {
    "ticker": "NHA",
    "exchange": "NYSE",
    "name": "Nuveen Municipal 2021 Target Term Fund"
  },
  {
    "ticker": "NHC",
    "exchange": "NYSE American",
    "name": "National HealthCare Corporation"
  },
  {
    "ticker": "NHF",
    "exchange": "NYSE",
    "name": "NexPoint Strategic Opportunities Fund"
  },
  {
    "ticker": "NHI",
    "exchange": "NYSE",
    "name": "National Health Investors Inc."
  },
  {
    "ticker": "NHICU",
    "exchange": "NASDAQ",
    "name": "NewHold Investment Corp. Units Cons of 1 Sh A + 1/2 Wt 10.03.25"
  },
  {
    "ticker": "NHLD",
    "exchange": "NASDAQ",
    "name": "National Holdings Corporation"
  },
  {
    "ticker": "NHLDW",
    "exchange": "NASDAQ",
    "name": "National Holdings Corp Warrant 2016-18.01.22 on National Holdings"
  },
  {
    "ticker": "NHS",
    "exchange": "NYSE American",
    "name": "Neuberger Berman High Yield Strategies Fund Inc"
  },
  {
    "ticker": "NHTC",
    "exchange": "NASDAQ",
    "name": "Natural Health Trends Corp."
  },
  {
    "ticker": "NI",
    "exchange": "NYSE",
    "name": "NiSource Inc"
  },
  {
    "ticker": "NI-B",
    "exchange": "NYSE",
    "name": "NiSource Inc Inc Depositary Shs Repr 1/1000th Cum Red Perp Pfd Rg Shs Series B"
  },
  {
    "ticker": "NIB",
    "exchange": "NYSE ARCA",
    "name": "iPath Bloomberg Cocoa Subindex Total Return ETN"
  },
  {
    "ticker": "NICE",
    "exchange": "NASDAQ",
    "name": "NICE Ltd Sponsored ADR"
  },
  {
    "ticker": "NICK",
    "exchange": "NASDAQ",
    "name": "Nicholas Financial Inc."
  },
  {
    "ticker": "NID",
    "exchange": "NYSE",
    "name": "Nuveen Intermediate Duration Municipal Term Fund"
  },
  {
    "ticker": "NIE",
    "exchange": "NYSE",
    "name": "AllianzGI Equity & Convertible Income Fund"
  },
  {
    "ticker": "NIFE",
    "exchange": "NYSE ARCA",
    "name": "Direxion Fallen Knives ETF"
  },
  {
    "ticker": "NIM",
    "exchange": "NYSE",
    "name": "Nuveen Select Maturity Municipal Fund"
  },
  {
    "ticker": "NINE",
    "exchange": "NYSE",
    "name": "Nine Energy Service Inc."
  },
  {
    "ticker": "NIO",
    "exchange": "NYSE",
    "name": "NIO Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "NIQ",
    "exchange": "NYSE",
    "name": "Nuveen Intermediate Duration Quality Municipal Term Fund"
  },
  {
    "ticker": "NIU",
    "exchange": "NASDAQ",
    "name": "Niu Technologies Sponsored ADR Class A"
  },
  {
    "ticker": "NJAN",
    "exchange": "Cboe BZX",
    "name": "Innovator NASDAQdaq-100 Power Buffer ETF - January"
  },
  {
    "ticker": "NJR",
    "exchange": "NYSE",
    "name": "New Jersey Resources Corporation"
  },
  {
    "ticker": "NJUL",
    "exchange": "Cboe BZX",
    "name": "Innovator NASDAQdaq-100 Power Buffer ETF - July"
  },
  {
    "ticker": "NJV",
    "exchange": "NYSE",
    "name": "Nuveen New Jersey Municipal Value Fund"
  },
  {
    "ticker": "NK",
    "exchange": "NASDAQ",
    "name": "NantKwest Inc."
  },
  {
    "ticker": "NKE",
    "exchange": "NYSE",
    "name": "NIKE Inc. Class B"
  },
  {
    "ticker": "NKG",
    "exchange": "NYSE",
    "name": "Nuveen Georgia Quality Municipal Income Fund of Benef Interest"
  },
  {
    "ticker": "NKLA",
    "exchange": "NASDAQ",
    "name": "Nikola Corporation"
  },
  {
    "ticker": "NKLAW",
    "exchange": "NASDAQ",
    "name": "Nikola Corporation Warrant 2020-15.06.25 on Nikola"
  },
  {
    "ticker": "NKSH",
    "exchange": "NASDAQ",
    "name": "National Bankshares Inc."
  },
  {
    "ticker": "NKTR",
    "exchange": "NASDAQ",
    "name": "Nektar Therapeutics"
  },
  {
    "ticker": "NKTX",
    "exchange": "NASDAQ",
    "name": "Nkarta Inc."
  },
  {
    "ticker": "NKX",
    "exchange": "NYSE",
    "name": "Nuveen California AMT-Free Quality Municipal Income Fund of Benef Interest"
  },
  {
    "ticker": "NL",
    "exchange": "NYSE",
    "name": "NL Industries Inc"
  },
  {
    "ticker": "NLOK",
    "exchange": "NASDAQ",
    "name": "NortonLifeLock Inc."
  },
  {
    "ticker": "NLR",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Uranium+Nuclear Energy ETF"
  },
  {
    "ticker": "NLS",
    "exchange": "NYSE",
    "name": "Nautilus Inc"
  },
  {
    "ticker": "NLSN",
    "exchange": "NYSE",
    "name": "Nielsen Holdings Plc"
  },
  {
    "ticker": "NLTX",
    "exchange": "NASDAQ",
    "name": "Neoleukin Therapeutics Inc"
  },
  {
    "ticker": "NLY",
    "exchange": "NYSE",
    "name": "Annaly Capital Management Inc."
  },
  {
    "ticker": "NLY-D",
    "exchange": "NYSE",
    "name": "Annaly Capital Management Inc. 7.50% Cum Red Pfd Shs Series D"
  },
  {
    "ticker": "NLY-F",
    "exchange": "NYSE",
    "name": "Annaly Capital Management Inc. Cum Conv Red Pfd Registered Shs Series F"
  },
  {
    "ticker": "NLY-G",
    "exchange": "NYSE",
    "name": "Annaly Capital Management Inc. Cum Conv Red Perp Registered Pfd Shs Series G"
  },
  {
    "ticker": "NLY-I",
    "exchange": "NYSE",
    "name": "Annaly Capital Management Inc Cum Conv Red Pfd Registered Shs Series I"
  },
  {
    "ticker": "NM",
    "exchange": "NYSE",
    "name": "Navios Maritime Holdings Inc."
  },
  {
    "ticker": "NM-G",
    "exchange": "NYSE",
    "name": "Navios Maritime Holdings Inc Perp Pfd Shs Sp Amer Dep Recpt Level 3 Repr 1/100th Perp Pfd Shs Ser G"
  },
  {
    "ticker": "NM-H",
    "exchange": "NYSE",
    "name": "Navios Maritime Holdings Inc 8 5/8 % Cum Red Perp Pfd Shs Sponsored American Deposit Receipt Repr 1/100th 8 5/8%CRPP-H"
  },
  {
    "ticker": "NMCI",
    "exchange": "NASDAQ",
    "name": "Navios Maritime Containers LP"
  },
  {
    "ticker": "NMCO",
    "exchange": "NYSE",
    "name": "Nuveen Municipal Credit Opportunities Fund"
  },
  {
    "ticker": "NMFC",
    "exchange": "NYSE",
    "name": "New Mountain Finance Corporation"
  },
  {
    "ticker": "NMFX",
    "exchange": "NYSE",
    "name": "New Mountain Finance Corp 5.75 % Notes 2018-01.10.23 Secd 1st Lien"
  },
  {
    "ticker": "NMI",
    "exchange": "NYSE",
    "name": "Nuveen Municipal Income Fund Inc"
  },
  {
    "ticker": "NMIH",
    "exchange": "NASDAQ",
    "name": "NMI Holdings Inc. Class A"
  },
  {
    "ticker": "NMK-B",
    "exchange": "NYSE",
    "name": "Niagara Mohawk Power Corp 3.60 % Cum.Pfd.Shs"
  },
  {
    "ticker": "NMK-C",
    "exchange": "NYSE",
    "name": "Niagara Mohawk Power Corp 3.90 % Cum.Pfd.Shs"
  },
  {
    "ticker": "NML",
    "exchange": "NYSE American",
    "name": "Neuberger Berman MLP and Energy Income Fund Inc."
  },
  {
    "ticker": "NMM",
    "exchange": "NYSE",
    "name": "Navios Maritime Partners LP"
  },
  {
    "ticker": "NMR",
    "exchange": "NYSE",
    "name": "Nomura Holdings Inc. Sponsored ADR"
  },
  {
    "ticker": "NMRD",
    "exchange": "NASDAQ",
    "name": "Nemaura Medical Inc."
  },
  {
    "ticker": "NMRK",
    "exchange": "NASDAQ",
    "name": "Newmark Group Inc. Class A"
  },
  {
    "ticker": "NMS",
    "exchange": "NYSE",
    "name": "Nuveen Minnesota Quality Municipal Income Fund of Benef Interest"
  },
  {
    "ticker": "NMT",
    "exchange": "NYSE",
    "name": "Nuveen Massachusetts Quality Municipal Income Fund of Benef Interest"
  },
  {
    "ticker": "NMTR",
    "exchange": "NASDAQ",
    "name": "9 Meters Biopharma Inc."
  },
  {
    "ticker": "NMY",
    "exchange": "NYSE",
    "name": "Nuveen Maryland Quality Municipal Income Fund of Benef.Int."
  },
  {
    "ticker": "NMZ",
    "exchange": "NYSE",
    "name": "Nuveen Municipal High Income Opportunity Fund"
  },
  {
    "ticker": "NNA",
    "exchange": "NYSE",
    "name": "Navios Maritime Acquisition Corporation"
  },
  {
    "ticker": "NNBR",
    "exchange": "NASDAQ",
    "name": "NN Inc."
  },
  {
    "ticker": "NNDM",
    "exchange": "NASDAQ",
    "name": "Nano Dimension Ltd Sponsored ADR"
  },
  {
    "ticker": "NNI",
    "exchange": "NYSE",
    "name": "Nelnet Inc. Class A"
  },
  {
    "ticker": "NNN",
    "exchange": "NYSE",
    "name": "National Retail Properties Inc."
  },
  {
    "ticker": "NNN-F",
    "exchange": "NYSE",
    "name": "National Retail Properties Inc Deposit Shs Repr 1/100th 5.20 % Cum Red Pfd Registered Shs Series F"
  },
  {
    "ticker": "NNVC",
    "exchange": "NYSE American",
    "name": "NanoViricides Inc."
  },
  {
    "ticker": "NNY",
    "exchange": "NYSE",
    "name": "Nuveen New York Municipal Value Fund"
  },
  {
    "ticker": "NOA",
    "exchange": "NYSE",
    "name": "North American Construction Group Ltd."
  },
  {
    "ticker": "NOAH",
    "exchange": "NYSE",
    "name": "Noah Holdings Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "NOBL",
    "exchange": "Cboe BZX",
    "name": "ProShares S&P 500 Dividend Aristocrats ETF"
  },
  {
    "ticker": "NOC",
    "exchange": "NYSE",
    "name": "Northrop Grumman Corporation"
  },
  {
    "ticker": "NOCT",
    "exchange": "Cboe BZX",
    "name": "Innovator NASDAQdaq-100 Power Buffer ETF- October"
  },
  {
    "ticker": "NODK",
    "exchange": "NASDAQ",
    "name": "NI Holdings Inc."
  },
  {
    "ticker": "NOG",
    "exchange": "NYSE American",
    "name": "Northern Oil and Gas Inc."
  },
  {
    "ticker": "NOK",
    "exchange": "NYSE",
    "name": "Nokia Oyj Sponsored ADR"
  },
  {
    "ticker": "NOM",
    "exchange": "NYSE",
    "name": "Nuveen Missouri Quality Municipal Income Fund of Benef Interest"
  },
  {
    "ticker": "NOMD",
    "exchange": "NYSE",
    "name": "Nomad Foods Ltd."
  },
  {
    "ticker": "NORW",
    "exchange": "NYSE ARCA",
    "name": "Global X MSCI Norway ETF"
  },
  {
    "ticker": "NOV",
    "exchange": "NYSE",
    "name": "National Oilwell Varco Inc."
  },
  {
    "ticker": "NOVA",
    "exchange": "NYSE",
    "name": "Sunnova Energy International Inc"
  },
  {
    "ticker": "NOVN",
    "exchange": "NASDAQ",
    "name": "Novan Inc."
  },
  {
    "ticker": "NOVS",
    "exchange": "NASDAQ",
    "name": "Novus Capital Corp."
  },
  {
    "ticker": "NOVSU",
    "exchange": "NASDAQ",
    "name": "Novus Capital Corp. Units Cons of 1 Sh + 3/4 Wt 06.27"
  },
  {
    "ticker": "NOVSW",
    "exchange": "NASDAQ",
    "name": "Novus Capital Corp Warrant 2020-30.06.27 on Novus Capital"
  },
  {
    "ticker": "NOVT",
    "exchange": "NASDAQ",
    "name": "Novanta Inc"
  },
  {
    "ticker": "NOW",
    "exchange": "NYSE",
    "name": "ServiceNow Inc."
  },
  {
    "ticker": "NP",
    "exchange": "NYSE",
    "name": "Neenah Inc"
  },
  {
    "ticker": "NPA",
    "exchange": "NASDAQ",
    "name": "New Providence Acquisition Corp Class A"
  },
  {
    "ticker": "NPAUU",
    "exchange": "NASDAQ",
    "name": "New Providence Acquisition Corp. Units Cons of 1 Sh -A- + 1/2 Wt"
  },
  {
    "ticker": "NPAWW",
    "exchange": "NASDAQ",
    "name": "New Providence Acquisition Corp Warrant 2019-01.09.24 on New Providence-A"
  },
  {
    "ticker": "NPK",
    "exchange": "NYSE",
    "name": "National Presto Industries Inc."
  },
  {
    "ticker": "NPN",
    "exchange": "NYSE",
    "name": "Nuveen Pennsylvania Municipal Value Fund"
  },
  {
    "ticker": "NPO",
    "exchange": "NYSE",
    "name": "EnPro Industries Inc."
  },
  {
    "ticker": "NPTN",
    "exchange": "NYSE",
    "name": "NeoPhotonics Corporation"
  },
  {
    "ticker": "NPV",
    "exchange": "NYSE",
    "name": "Nuveen Virginia Quality Municipal Income Fund of Benef Interest"
  },
  {
    "ticker": "NQP",
    "exchange": "NYSE",
    "name": "Nuveen Pennsylvania Quality Municipal Income Fund"
  },
  {
    "ticker": "NR",
    "exchange": "NYSE",
    "name": "Newpark Resources Inc."
  },
  {
    "ticker": "NRBO",
    "exchange": "NASDAQ",
    "name": "NeuroBo Pharmaceuticals Inc."
  },
  {
    "ticker": "NRC",
    "exchange": "NASDAQ",
    "name": "National Research Corporation"
  },
  {
    "ticker": "NREF",
    "exchange": "NYSE",
    "name": "NexPoint Real Estate Finance Inc"
  },
  {
    "ticker": "NREF-A",
    "exchange": "NYSE",
    "name": "NexPoint Real Estate Finance Inc 8.5 % Cum Conv Red Perp Pfd Registered Shs Series A"
  },
  {
    "ticker": "NRG",
    "exchange": "NYSE",
    "name": "NRG Energy Inc."
  },
  {
    "ticker": "NRGD",
    "exchange": "NYSE ARCA",
    "name": "MicroSectors U.S. Big Oil Index -3X Inverse Leveraged ETN"
  },
  {
    "ticker": "NRGO",
    "exchange": "NYSE ARCA",
    "name": "MicroSectors U.S. Big Oil Index 2X Leveraged ETN"
  },
  {
    "ticker": "NRGU",
    "exchange": "NYSE ARCA",
    "name": "MicroSectors U.S. Big Oil Index 3X Leveraged ETN"
  },
  {
    "ticker": "NRGX",
    "exchange": "NYSE",
    "name": "PIMCO Energy & Tactical Credit Opportunities Fund"
  },
  {
    "ticker": "NRGZ",
    "exchange": "NYSE ARCA",
    "name": "MicroSectors U.S. Big Oil Index -2X Inverse Leveraged ETN"
  },
  {
    "ticker": "NRIM",
    "exchange": "NASDAQ",
    "name": "Northrim BanCorp Inc."
  },
  {
    "ticker": "NRIX",
    "exchange": "NASDAQ",
    "name": "Nurix Therapeutics Inc."
  },
  {
    "ticker": "NRK",
    "exchange": "NYSE",
    "name": "Nuveen New York AMT-Free Quality Municipal Income Fund of Benef Interest"
  },
  {
    "ticker": "NRO",
    "exchange": "NYSE American",
    "name": "Neuberger Berman Real Estate Securities Income Fund Inc"
  },
  {
    "ticker": "NRP",
    "exchange": "NYSE",
    "name": "Natural Resource Partners L.P."
  },
  {
    "ticker": "NRT",
    "exchange": "NYSE",
    "name": "North European Oil Royalty Trust"
  },
  {
    "ticker": "NRUC",
    "exchange": "NYSE",
    "name": "National Rural Utilities Cooperative Finance Corp 5.5 % Notes 2019-15.05.64 Gtd Global"
  },
  {
    "ticker": "NRZ",
    "exchange": "NYSE",
    "name": "New Residential Investment Corp."
  },
  {
    "ticker": "NRZ-A",
    "exchange": "NYSE",
    "name": "New Residential Investment Corp Cum Conv Red Perp Pfd Registered Shs Series A"
  },
  {
    "ticker": "NRZ-B",
    "exchange": "NYSE",
    "name": "New Residential Investment Corp Cum Conv Red Perp Pfd Registered Shs Series B"
  },
  {
    "ticker": "NRZ-C",
    "exchange": "NYSE",
    "name": "New Residential Investment Corp. Cum Conv Red Perp Pfd Registered Shs Series C"
  },
  {
    "ticker": "NS",
    "exchange": "NYSE",
    "name": "NuStar Energy L.P."
  },
  {
    "ticker": "NS-A",
    "exchange": "NYSE",
    "name": "NuStar Energy LP Cum Red Perp Pfd Units Series A"
  },
  {
    "ticker": "NS-B",
    "exchange": "NYSE",
    "name": "NuStar Energy LP Cum Red Perp Pfd Units Series B"
  },
  {
    "ticker": "NS-C",
    "exchange": "NYSE",
    "name": "NuStar Energy LP Cum Conv Perp Red Pfd Registered Shs Series C"
  },
  {
    "ticker": "NSA",
    "exchange": "NYSE",
    "name": "National Storage Affiliates Trust"
  },
  {
    "ticker": "NSA-A",
    "exchange": "NYSE",
    "name": "National Storage Affiliates Trust 6 % Cum Conv Perp Red Pfd Registered Shs Series A"
  },
  {
    "ticker": "NSC",
    "exchange": "NYSE",
    "name": "Norfolk Southern Corporation"
  },
  {
    "ticker": "NSCO",
    "exchange": "NYSE",
    "name": "Nesco Holdings Inc"
  },
  {
    "ticker": "NSCO+",
    "exchange": "NYSE",
    "name": "Nesco Holdings Inc Warrant 2019-01.01.25 on Nesco Holdings Rg-A"
  },
  {
    "ticker": "NSEC",
    "exchange": "NASDAQ",
    "name": "National Security Group Inc"
  },
  {
    "ticker": "NSIT",
    "exchange": "NASDAQ",
    "name": "Insight Enterprises Inc."
  },
  {
    "ticker": "NSL",
    "exchange": "NYSE",
    "name": "Nuveen Senior Income Fund"
  },
  {
    "ticker": "NSP",
    "exchange": "NYSE",
    "name": "Insperity Inc."
  },
  {
    "ticker": "NSPR",
    "exchange": "NYSE American",
    "name": "InspireMD Inc."
  },
  {
    "ticker": "NSPR+",
    "exchange": "NYSE American",
    "name": "InspireMD Inc Warrant 2016-07.07.2021 on Shs InspireMD"
  },
  {
    "ticker": "NSPR+B",
    "exchange": "NYSE American",
    "name": "InspireMD Inc Warrant 2017-14.03.2022 on InspireMD Series B"
  },
  {
    "ticker": "NSS",
    "exchange": "NYSE",
    "name": "Nustar Logistics LP Notes 2013-15.1.43 Gtd Subord Fltg Rt"
  },
  {
    "ticker": "NSSC",
    "exchange": "NASDAQ",
    "name": "NAPCO Security Technologies Inc."
  },
  {
    "ticker": "NSTG",
    "exchange": "NASDAQ",
    "name": "NanoString Technologies Inc."
  },
  {
    "ticker": "NSYS",
    "exchange": "NASDAQ",
    "name": "Nortech Systems Incorporated"
  },
  {
    "ticker": "NTAP",
    "exchange": "NASDAQ",
    "name": "NetApp Inc."
  },
  {
    "ticker": "NTB",
    "exchange": "NYSE",
    "name": "Bank of N.T. Butterfield & Son Limited (The)"
  },
  {
    "ticker": "NTCO",
    "exchange": "NYSE",
    "name": "Natura & Co Holding SA Unsponsored ADR"
  },
  {
    "ticker": "NTCT",
    "exchange": "NASDAQ",
    "name": "NetScout Systems Inc."
  },
  {
    "ticker": "NTEC",
    "exchange": "NASDAQ",
    "name": "Intec Pharma Ltd"
  },
  {
    "ticker": "NTES",
    "exchange": "NASDAQ",
    "name": "NetENYSE American Inc. Sponsored ADR"
  },
  {
    "ticker": "NTG",
    "exchange": "NYSE",
    "name": "Tortoise Midstream Energy Fund Inc"
  },
  {
    "ticker": "NTGR",
    "exchange": "NASDAQ",
    "name": "NETGEAR Inc."
  },
  {
    "ticker": "NTIC",
    "exchange": "NASDAQ",
    "name": "Northern Technologies International Corporation"
  },
  {
    "ticker": "NTIP",
    "exchange": "NYSE American",
    "name": "Network-1 Technologies Inc."
  },
  {
    "ticker": "NTLA",
    "exchange": "NASDAQ",
    "name": "Intellia Therapeutics Inc."
  },
  {
    "ticker": "NTN",
    "exchange": "NYSE American",
    "name": "NTN Buzztime Inc."
  },
  {
    "ticker": "NTNX",
    "exchange": "NASDAQ",
    "name": "Nutanix Inc. Class A"
  },
  {
    "ticker": "NTP",
    "exchange": "NYSE",
    "name": "Nam Tai Property Inc."
  },
  {
    "ticker": "NTR",
    "exchange": "NYSE",
    "name": "Nutrien Ltd."
  },
  {
    "ticker": "NTRA",
    "exchange": "NASDAQ",
    "name": "Natera Inc."
  },
  {
    "ticker": "NTRP",
    "exchange": "NASDAQ",
    "name": "Neurotrope Inc"
  },
  {
    "ticker": "NTRS",
    "exchange": "NASDAQ",
    "name": "Northern Trust Corporation"
  },
  {
    "ticker": "NTRSO",
    "exchange": "NASDAQ",
    "name": "Northern Trust Corporation Depositary Shs Repr 1/1000 Non-Cum Red Perp Pfd Registered Shs Ser E"
  },
  {
    "ticker": "NTST",
    "exchange": "NYSE",
    "name": "NETSTREIT Corp."
  },
  {
    "ticker": "NTSX",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree 90/60 U.S. Balanced Fund"
  },
  {
    "ticker": "NTUS",
    "exchange": "NASDAQ",
    "name": "Natus Medical Incorporated"
  },
  {
    "ticker": "NTWK",
    "exchange": "NASDAQ",
    "name": "NetSol Technologies Inc."
  },
  {
    "ticker": "NTZ",
    "exchange": "NYSE",
    "name": "Natuzzi S.p.A. Sponsored ADR"
  },
  {
    "ticker": "NUAG",
    "exchange": "NYSE ARCA",
    "name": "Nuveen Enhanced Yield U.S. Aggregate Bond ETF"
  },
  {
    "ticker": "NUAN",
    "exchange": "NASDAQ",
    "name": "Nuance Communications Inc."
  },
  {
    "ticker": "NUBD",
    "exchange": "NYSE ARCA",
    "name": "Nuveen ESG U.S. Aggregate Bond ETF"
  },
  {
    "ticker": "NUDM",
    "exchange": "Cboe BZX",
    "name": "Nuveen ESG International Developed Markets Equity ETF"
  },
  {
    "ticker": "NUE",
    "exchange": "NYSE",
    "name": "Nucor Corporation"
  },
  {
    "ticker": "NUEM",
    "exchange": "Cboe BZX",
    "name": "Nuveen ESG Emerging Markets Equity ETF"
  },
  {
    "ticker": "NUGT",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Gold Miners Index Bull 2x Shares"
  },
  {
    "ticker": "NUHY",
    "exchange": "NYSE ARCA",
    "name": "Nuveen ESG High Yield Corporate Bond ETF"
  },
  {
    "ticker": "NULC",
    "exchange": "Cboe BZX",
    "name": "Nuveen ESG Large-Cap ETF"
  },
  {
    "ticker": "NULG",
    "exchange": "Cboe BZX",
    "name": "Nuveen ESG Large-Cap Growth ETF"
  },
  {
    "ticker": "NULV",
    "exchange": "Cboe BZX",
    "name": "Nuveen ESG Large-Cap Value ETF"
  },
  {
    "ticker": "NUM",
    "exchange": "NYSE",
    "name": "Nuveen Michigan Quality Municipal Income Fund"
  },
  {
    "ticker": "NUMG",
    "exchange": "Cboe BZX",
    "name": "Nuveen ESG Mid-Cap Growth ETF"
  },
  {
    "ticker": "NUMV",
    "exchange": "Cboe BZX",
    "name": "Nuveen ESG Mid-Cap Value ETF"
  },
  {
    "ticker": "NUO",
    "exchange": "NYSE",
    "name": "Nuveen Ohio Quality Municipal Income Fund"
  },
  {
    "ticker": "NURE",
    "exchange": "Cboe BZX",
    "name": "Nuveen Short-Term REIT ETF"
  },
  {
    "ticker": "NURO",
    "exchange": "NASDAQ",
    "name": "NeuroMetrix Inc."
  },
  {
    "ticker": "NUS",
    "exchange": "NYSE",
    "name": "Nu Skin Enterprises Inc. Class A"
  },
  {
    "ticker": "NUSA",
    "exchange": "NYSE ARCA",
    "name": "Nuveen Enhanced Yield 1-5 Year U.S. Aggregate Bond ETF"
  },
  {
    "ticker": "NUSC",
    "exchange": "Cboe BZX",
    "name": "Nuveen ESG Small-Cap ETF"
  },
  {
    "ticker": "NUSI",
    "exchange": "NYSE ARCA",
    "name": "Nationwide Risk-Managed Income ETF"
  },
  {
    "ticker": "NUV",
    "exchange": "NYSE",
    "name": "Nuveen Municipal Value Fund Inc"
  },
  {
    "ticker": "NUVA",
    "exchange": "NASDAQ",
    "name": "NuVasive Inc."
  },
  {
    "ticker": "NUW",
    "exchange": "NYSE",
    "name": "Nuveen AMT-Free Municipal Value Fund"
  },
  {
    "ticker": "NUZE",
    "exchange": "NASDAQ",
    "name": "Nuzee Inc"
  },
  {
    "ticker": "NVAX",
    "exchange": "NASDAQ",
    "name": "Novavax Inc."
  },
  {
    "ticker": "NVCN",
    "exchange": "NASDAQ",
    "name": "Neovasc Inc."
  },
  {
    "ticker": "NVCR",
    "exchange": "NASDAQ",
    "name": "NovoCure Ltd."
  },
  {
    "ticker": "NVDA",
    "exchange": "NASDAQ",
    "name": "NVIDIA Corporation"
  },
  {
    "ticker": "NVEC",
    "exchange": "NASDAQ",
    "name": "NVE Corporation"
  },
  {
    "ticker": "NVEE",
    "exchange": "NASDAQ",
    "name": "NV5 Global Inc"
  },
  {
    "ticker": "NVFY",
    "exchange": "NASDAQ",
    "name": "Nova Lifestyle Inc."
  },
  {
    "ticker": "NVG",
    "exchange": "NYSE",
    "name": "Nuveen AMT-Free Municipal Credit Income Fund of Benef Interest"
  },
  {
    "ticker": "NVGS",
    "exchange": "NYSE",
    "name": "Navigator Holdings Ltd."
  },
  {
    "ticker": "NVIV",
    "exchange": "NASDAQ",
    "name": "InVivo Therapeutics Holdings Corporation"
  },
  {
    "ticker": "NVMI",
    "exchange": "NASDAQ",
    "name": "Nova Measuring Instruments Ltd"
  },
  {
    "ticker": "NVO",
    "exchange": "NYSE",
    "name": "Novo Nordisk A/S Sponsored ADR Class B"
  },
  {
    "ticker": "NVR",
    "exchange": "NYSE",
    "name": "NVR Inc."
  },
  {
    "ticker": "NVRO",
    "exchange": "NYSE",
    "name": "Nevro Corp."
  },
  {
    "ticker": "NVS",
    "exchange": "NYSE",
    "name": "Novartis AG Sponsored ADR"
  },
  {
    "ticker": "NVST",
    "exchange": "NYSE",
    "name": "Envista Holdings Corp."
  },
  {
    "ticker": "NVT",
    "exchange": "NYSE",
    "name": "nVent Electric plc"
  },
  {
    "ticker": "NVTA",
    "exchange": "NYSE",
    "name": "Invitae Corp."
  },
  {
    "ticker": "NVUS",
    "exchange": "NASDAQ",
    "name": "Novus Therapeutics Inc."
  },
  {
    "ticker": "NWBI",
    "exchange": "NASDAQ",
    "name": "Northwest Bancshares Inc."
  },
  {
    "ticker": "NWE",
    "exchange": "NYSE",
    "name": "NorthWestern Corporation"
  },
  {
    "ticker": "NWFL",
    "exchange": "NASDAQ",
    "name": "Norwood Financial Corp."
  },
  {
    "ticker": "NWG",
    "exchange": "NYSE",
    "name": "NatWest Group Plc Sponsored ADR"
  },
  {
    "ticker": "NWGI",
    "exchange": "NASDAQ",
    "name": "Newgioco Group Inc"
  },
  {
    "ticker": "NWHM",
    "exchange": "NYSE",
    "name": "New Home Co. Inc."
  },
  {
    "ticker": "NWL",
    "exchange": "NASDAQ",
    "name": "Newell Brands Inc"
  },
  {
    "ticker": "NWLI",
    "exchange": "NASDAQ",
    "name": "National Western Life Group Inc. Class A"
  },
  {
    "ticker": "NWN",
    "exchange": "NYSE",
    "name": "Northwest Natural Holding Co."
  },
  {
    "ticker": "NWPX",
    "exchange": "NASDAQ",
    "name": "Northwest Pipe Company"
  },
  {
    "ticker": "NWS",
    "exchange": "NASDAQ",
    "name": "News Corporation Class B"
  },
  {
    "ticker": "NWSA",
    "exchange": "NASDAQ",
    "name": "News Corporation Class A"
  },
  {
    "ticker": "NX",
    "exchange": "NYSE",
    "name": "Quanex Building Products Corporation"
  },
  {
    "ticker": "NXC",
    "exchange": "NYSE",
    "name": "Nuveen California Select Tax-Free Income Portfolio"
  },
  {
    "ticker": "NXE",
    "exchange": "NYSE American",
    "name": "NexGen Energy Ltd."
  },
  {
    "ticker": "NXGN",
    "exchange": "NASDAQ",
    "name": "NextGen Healthcare Inc."
  },
  {
    "ticker": "NXJ",
    "exchange": "NYSE",
    "name": "Nuveen New Jersey Quality Municipal Income Fund of Benef.Interest"
  },
  {
    "ticker": "NXN",
    "exchange": "NYSE",
    "name": "Nuveen New York Select Tax-Free Income Portfolio"
  },
  {
    "ticker": "NXP",
    "exchange": "NYSE",
    "name": "Nuveen Select Tax-Free Income Portfolio"
  },
  {
    "ticker": "NXPI",
    "exchange": "NASDAQ",
    "name": "NXP Semiconductors NV"
  },
  {
    "ticker": "NXQ",
    "exchange": "NYSE",
    "name": "Nuveen Select Tax Free Income Portfolio 2"
  },
  {
    "ticker": "NXR",
    "exchange": "NYSE",
    "name": "Nuveen Select Tax-Free Income Portfolio 3"
  },
  {
    "ticker": "NXRT",
    "exchange": "NYSE",
    "name": "NexPoint Residential Trust Inc"
  },
  {
    "ticker": "NXST",
    "exchange": "NASDAQ",
    "name": "Nexstar Media Group Inc. Class A"
  },
  {
    "ticker": "NXTC",
    "exchange": "NASDAQ",
    "name": "NextCure Inc."
  },
  {
    "ticker": "NXTD",
    "exchange": "NASDAQ",
    "name": "Nxt-ID Inc."
  },
  {
    "ticker": "NXTG",
    "exchange": "NASDAQ",
    "name": "First Trust Indxx NextG ETF"
  },
  {
    "ticker": "NYC",
    "exchange": "NYSE",
    "name": "New York City REIT Inc. Class A"
  },
  {
    "ticker": "NYCB",
    "exchange": "NYSE",
    "name": "New York Community Bancorp Inc."
  },
  {
    "ticker": "NYCB-A",
    "exchange": "NYSE",
    "name": "New York Community Bancorp Inc. Deposit Shs Repr 1/40th Non Cum Perp Pfd Registered  Series A"
  },
  {
    "ticker": "NYCB-U",
    "exchange": "NYSE",
    "name": "New York Community Capital Trust V 6 % Bifurcated Option Note Unit Secs Cons of 1 6% Trust Pfd Sec 1.11.51 + 1 Wt 7.5.51"
  },
  {
    "ticker": "NYF",
    "exchange": "NYSE ARCA",
    "name": "iShares New York Muni Bond ETF"
  },
  {
    "ticker": "NYMT",
    "exchange": "NASDAQ",
    "name": "New York Mortgage Trust Inc."
  },
  {
    "ticker": "NYMTM",
    "exchange": "NASDAQ",
    "name": "New York Mortgage Trust Inc. Cum Conv Red Pfd Registered Shs Series E"
  },
  {
    "ticker": "NYMTN",
    "exchange": "NASDAQ",
    "name": "New York Mortgage Trust Inc. Cum Conv Perp Red Pfd Registered Shs Series D"
  },
  {
    "ticker": "NYMTO",
    "exchange": "NASDAQ",
    "name": "New York Mortgage Trust Inc 7 7/8 % Cum Red Pfd Shs Series C"
  },
  {
    "ticker": "NYMTP",
    "exchange": "NASDAQ",
    "name": "New York Mortgage Trust Inc 7 3/4 % Cum Red Pfd Shs Series B"
  },
  {
    "ticker": "NYMX",
    "exchange": "NASDAQ",
    "name": "Nymox Pharmaceutical Corp"
  },
  {
    "ticker": "NYT",
    "exchange": "NYSE",
    "name": "New York Times Company Class A"
  },
  {
    "ticker": "NYV",
    "exchange": "NYSE",
    "name": "Nuveen New York Municipal Value Fund 2"
  },
  {
    "ticker": "NZF",
    "exchange": "NYSE",
    "name": "Nuveen Municipal Credit Income Fund of Benef Interest"
  },
  {
    "ticker": "O",
    "exchange": "NYSE",
    "name": "Realty Income Corporation"
  },
  {
    "ticker": "OAC",
    "exchange": "NYSE",
    "name": "Oaktree Acquisition Corp. Class A"
  },
  {
    "ticker": "OAC=",
    "exchange": "NYSE",
    "name": "Oaktree Acquisition Corp Units Cons of 1 Sh + 1/3 Wt"
  },
  {
    "ticker": "OAC+",
    "exchange": "NYSE",
    "name": "Oaktree Acquisition Corp Warrant - on Oaktree Acq"
  },
  {
    "ticker": "OAK-A",
    "exchange": "NYSE",
    "name": "Oaktree Capital Group LLC Non Cum Red Perp Pfd Registered Units Series A"
  },
  {
    "ticker": "OAK-B",
    "exchange": "NYSE",
    "name": "Oaktree Capital Group LLC 6.550 % Non-Cum Red Pfd Units Series B"
  },
  {
    "ticker": "OAS",
    "exchange": "NASDAQ",
    "name": "Oasis Petroleum Inc."
  },
  {
    "ticker": "OBAS",
    "exchange": "NASDAQ",
    "name": "OptibNYSE American Ltd."
  },
  {
    "ticker": "OBCI",
    "exchange": "NASDAQ",
    "name": "Ocean Bio-Chem Inc."
  },
  {
    "ticker": "OBLG",
    "exchange": "NYSE American",
    "name": "Oblong Inc."
  },
  {
    "ticker": "OBLN",
    "exchange": "NASDAQ",
    "name": "Obalon Therapeutics Inc."
  },
  {
    "ticker": "OBNK",
    "exchange": "NASDAQ",
    "name": "Origin Bancorp Inc."
  },
  {
    "ticker": "OBOR",
    "exchange": "NYSE ARCA",
    "name": "KraneShares MSCI One Belt One Road Index ETF"
  },
  {
    "ticker": "OBSV",
    "exchange": "NASDAQ",
    "name": "ObsEva SA"
  },
  {
    "ticker": "OC",
    "exchange": "NYSE",
    "name": "Owens Corning"
  },
  {
    "ticker": "OCC",
    "exchange": "NASDAQ",
    "name": "Optical Cable Corporation"
  },
  {
    "ticker": "OCCI",
    "exchange": "NASDAQ",
    "name": "OFS Credit Company Inc"
  },
  {
    "ticker": "OCCIP",
    "exchange": "NASDAQ",
    "name": "OFS Credit Company Inc 6.875% Cum Red Pfd Registered Shs Series A 2019-31.03.24"
  },
  {
    "ticker": "OCFC",
    "exchange": "NASDAQ",
    "name": "OceanFirst Financial Corp."
  },
  {
    "ticker": "OCFCP",
    "exchange": "NASDAQ",
    "name": "OceanFirst Financial Corp. Depositary Shs Repr 1/40th 7 % Non-Cum Perp Red Pfd Shs Series A"
  },
  {
    "ticker": "OCFT",
    "exchange": "NYSE",
    "name": "OneConnect Financial Technology Co Ltd Sponsored ADR"
  },
  {
    "ticker": "OCGN",
    "exchange": "NASDAQ",
    "name": "Ocugen Inc"
  },
  {
    "ticker": "OCIO",
    "exchange": "NYSE ARCA",
    "name": "ClearShares OCIO ETF"
  },
  {
    "ticker": "OCN",
    "exchange": "NYSE",
    "name": "Ocwen Financial Corporation"
  },
  {
    "ticker": "OCSI",
    "exchange": "NASDAQ",
    "name": "Oaktree Strategic Income Corporation"
  },
  {
    "ticker": "OCSL",
    "exchange": "NASDAQ",
    "name": "Oaktree Specialty Lending Corporation"
  },
  {
    "ticker": "OCUL",
    "exchange": "NASDAQ",
    "name": "Ocular Therapeutix Inc"
  },
  {
    "ticker": "OCX",
    "exchange": "NYSE American",
    "name": "OncoCyte Corp."
  },
  {
    "ticker": "ODC",
    "exchange": "NYSE",
    "name": "Oil-Dri Corporation of America"
  },
  {
    "ticker": "ODFL",
    "exchange": "NASDAQ",
    "name": "Old Dominion Freight Line Inc."
  },
  {
    "ticker": "ODP",
    "exchange": "NASDAQ",
    "name": "ODP Corporation"
  },
  {
    "ticker": "ODT",
    "exchange": "NASDAQ",
    "name": "Odonate Therapeutics Inc."
  },
  {
    "ticker": "OEC",
    "exchange": "NYSE",
    "name": "Orion Engineered Carbons SA"
  },
  {
    "ticker": "OEF",
    "exchange": "NYSE ARCA",
    "name": "iShares S&P 100 ETF"
  },
  {
    "ticker": "OEG",
    "exchange": "NASDAQ",
    "name": "Orbital Energy Group Inc."
  },
  {
    "ticker": "OESX",
    "exchange": "NASDAQ",
    "name": "Orion Energy Systems Inc."
  },
  {
    "ticker": "OEUR",
    "exchange": "NYSE ARCA",
    "name": "OShares Europe Quality Dividend ETF"
  },
  {
    "ticker": "OFC",
    "exchange": "NYSE",
    "name": "Corporate Office Properties Trust"
  },
  {
    "ticker": "OFED",
    "exchange": "NASDAQ",
    "name": "Oconee Federal Financial Corp."
  },
  {
    "ticker": "OFG",
    "exchange": "NYSE",
    "name": "OFG Bancorp"
  },
  {
    "ticker": "OFG-A",
    "exchange": "NYSE",
    "name": "OFG Bancorp 7 1/8% Non-Cum Monthly Income Pfd Shs Series A"
  },
  {
    "ticker": "OFG-B",
    "exchange": "NYSE",
    "name": "OFG Bancorp 7 % Non-Cum Monthly Income Pfd Shs Series B"
  },
  {
    "ticker": "OFG-D",
    "exchange": "NYSE",
    "name": "OFG Bancorp 7 1/8 % Non-Cum Perp Pfd Shs Series D"
  },
  {
    "ticker": "OFIX",
    "exchange": "NASDAQ",
    "name": "Orthofix Medical Inc."
  },
  {
    "ticker": "OFLX",
    "exchange": "NASDAQ",
    "name": "Omega Flex Inc."
  },
  {
    "ticker": "OFS",
    "exchange": "NASDAQ",
    "name": "OFS Capital Corp."
  },
  {
    "ticker": "OFSSI",
    "exchange": "NASDAQ",
    "name": "OFS Capital Corp 5.95 % Notes 2019-31.10.26"
  },
  {
    "ticker": "OFSSL",
    "exchange": "NASDAQ",
    "name": "OFS Capital Corp. 6.375 % Notes 2018-30.04.25 Global"
  },
  {
    "ticker": "OFSSZ",
    "exchange": "NASDAQ",
    "name": "OFS Capital Corp. 6.5 % Notes 2018-31.10.25"
  },
  {
    "ticker": "OGCP",
    "exchange": "NYSE ARCA",
    "name": "Empire State Realty OP LP Series 60"
  },
  {
    "ticker": "OGE",
    "exchange": "NYSE",
    "name": "OGE Energy Corp."
  },
  {
    "ticker": "OGEN",
    "exchange": "NYSE American",
    "name": "Oragenics Inc."
  },
  {
    "ticker": "OGI",
    "exchange": "NASDAQ",
    "name": "OrganiGram Holdings Inc"
  },
  {
    "ticker": "OGIG",
    "exchange": "NYSE ARCA",
    "name": "O'Shares Global Internet Giants ETF"
  },
  {
    "ticker": "OGS",
    "exchange": "NYSE",
    "name": "ONE Gas Inc."
  },
  {
    "ticker": "OHI",
    "exchange": "NYSE",
    "name": "Omega Healthcare Investors Inc."
  },
  {
    "ticker": "OI",
    "exchange": "NYSE",
    "name": "O-I Glass Inc"
  },
  {
    "ticker": "OIA",
    "exchange": "NYSE",
    "name": "Invesco Municipal Income Opportunities Trust of Benef Interest Invesco Municipal Income Opportunities Trust"
  },
  {
    "ticker": "OIBR.C",
    "exchange": "NYSE",
    "name": "OI S.A. Sponsored ADR"
  },
  {
    "ticker": "OIH",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Oil Services ETF"
  },
  {
    "ticker": "OII",
    "exchange": "NYSE",
    "name": "Oceaneering International Inc."
  },
  {
    "ticker": "OIIM",
    "exchange": "NASDAQ",
    "name": "O2Micro International Limited Sponsored ADR"
  },
  {
    "ticker": "OIL",
    "exchange": "NYSE ARCA",
    "name": "iPath Pure Beta Crude Oil ETN"
  },
  {
    "ticker": "OILK",
    "exchange": "Cboe BZX",
    "name": "ProShares K-1 Free Crude Oil Strategy ETF"
  },
  {
    "ticker": "OIS",
    "exchange": "NYSE",
    "name": "Oil States International Inc."
  },
  {
    "ticker": "OKE",
    "exchange": "NYSE",
    "name": "ONEOK Inc."
  },
  {
    "ticker": "OKTA",
    "exchange": "NASDAQ",
    "name": "Okta Inc. Class A"
  },
  {
    "ticker": "OLB",
    "exchange": "NASDAQ",
    "name": "OLB Group Inc."
  },
  {
    "ticker": "OLD",
    "exchange": "NASDAQ",
    "name": "Janus Henderson Long-Term Care ETF"
  },
  {
    "ticker": "OLED",
    "exchange": "NASDAQ",
    "name": "Universal Display Corporation"
  },
  {
    "ticker": "OLLI",
    "exchange": "NASDAQ",
    "name": "Ollie's Bargain Outlet Holdings Inc"
  },
  {
    "ticker": "OLN",
    "exchange": "NYSE",
    "name": "Olin Corporation"
  },
  {
    "ticker": "OLP",
    "exchange": "NYSE",
    "name": "One Liberty Properties Inc."
  },
  {
    "ticker": "OMAB",
    "exchange": "NASDAQ",
    "name": "Grupo Aeroportuario del Centro Norte SAB de CV Sponsored ADR Class B"
  },
  {
    "ticker": "OMC",
    "exchange": "NYSE",
    "name": "Omnicom Group Inc"
  },
  {
    "ticker": "OMCL",
    "exchange": "NASDAQ",
    "name": "Omnicell Inc."
  },
  {
    "ticker": "OMER",
    "exchange": "NASDAQ",
    "name": "Omeros Corporation"
  },
  {
    "ticker": "OMEX",
    "exchange": "NASDAQ",
    "name": "Odyssey Marine Exploration Inc."
  },
  {
    "ticker": "OMF",
    "exchange": "NYSE",
    "name": "OneMain Holdings Inc."
  },
  {
    "ticker": "OMFL",
    "exchange": "Cboe BZX",
    "name": "Invesco Russell 1000 Dynamic Multifactor ETF"
  },
  {
    "ticker": "OMFS",
    "exchange": "Cboe BZX",
    "name": "Invesco Russell 2000 Dynamic Multifactor ETF"
  },
  {
    "ticker": "OMI",
    "exchange": "NYSE",
    "name": "Owens & Minor Inc."
  },
  {
    "ticker": "OMP",
    "exchange": "NASDAQ",
    "name": "Oasis Midstream Partners LP"
  },
  {
    "ticker": "ON",
    "exchange": "NASDAQ",
    "name": "ON Semiconductor Corporation"
  },
  {
    "ticker": "ONB",
    "exchange": "NASDAQ",
    "name": "Old National Bancorp"
  },
  {
    "ticker": "ONCS",
    "exchange": "NASDAQ",
    "name": "OncoSec Medical Incorporated"
  },
  {
    "ticker": "ONCT",
    "exchange": "NASDAQ",
    "name": "Oncternal Therapeutics Inc."
  },
  {
    "ticker": "ONCY",
    "exchange": "NASDAQ",
    "name": "Oncolytics Biotech Inc."
  },
  {
    "ticker": "ONDK",
    "exchange": "NYSE",
    "name": "On Deck Capital Inc."
  },
  {
    "ticker": "ONE",
    "exchange": "NYSE",
    "name": "OneSmart International Education Group Ltd Sponsored ADR Class A"
  },
  {
    "ticker": "ONEM",
    "exchange": "NASDAQ",
    "name": "1Life Healthcare Inc."
  },
  {
    "ticker": "ONEO",
    "exchange": "NYSE ARCA",
    "name": "SPDR Russell 1000 Momentum Focus ETF"
  },
  {
    "ticker": "ONEQ",
    "exchange": "NASDAQ",
    "name": "Fidelity NASDAQdaq Composite Index Tracking Stock"
  },
  {
    "ticker": "ONEV",
    "exchange": "NYSE ARCA",
    "name": "SPDR Russell 1000 Low Volatility Focus ETF"
  },
  {
    "ticker": "ONEW",
    "exchange": "NASDAQ",
    "name": "OneWater Marine Inc Class A"
  },
  {
    "ticker": "ONEY",
    "exchange": "NYSE ARCA",
    "name": "SPDR Russell 1000 Yield Focus ETF"
  },
  {
    "ticker": "ONLN",
    "exchange": "NYSE ARCA",
    "name": "ProShares Online Retail ETF"
  },
  {
    "ticker": "ONTO",
    "exchange": "NYSE",
    "name": "Onto Innovation Inc."
  },
  {
    "ticker": "ONTX",
    "exchange": "NASDAQ",
    "name": "Onconova Therapeutics Inc."
  },
  {
    "ticker": "ONTXW",
    "exchange": "NASDAQ",
    "name": "Onconova Therapeutics Inc Warrant 2016-07.07.2021 on Shs Onconova Therapeutics"
  },
  {
    "ticker": "ONVO",
    "exchange": "NASDAQ",
    "name": "Organovo Holdings Inc."
  },
  {
    "ticker": "OOMA",
    "exchange": "NYSE",
    "name": "Ooma Inc"
  },
  {
    "ticker": "OPBK",
    "exchange": "NASDAQ",
    "name": "OP Bancorp"
  },
  {
    "ticker": "OPCH",
    "exchange": "NASDAQ",
    "name": "Option Care Health Inc"
  },
  {
    "ticker": "OPER",
    "exchange": "NYSE ARCA",
    "name": "ClearShares Ultra-Short Maturity ETF"
  },
  {
    "ticker": "OPES",
    "exchange": "NASDAQ",
    "name": "Opes Acquisition Corp."
  },
  {
    "ticker": "OPESU",
    "exchange": "NASDAQ",
    "name": "Opes Acquisition Corp. Units"
  },
  {
    "ticker": "OPESW",
    "exchange": "NASDAQ",
    "name": "Opes Acquisition Corp Warrant 2018-15.01.23 on Opes Acqn"
  },
  {
    "ticker": "OPGN",
    "exchange": "NASDAQ",
    "name": "OpGen Inc."
  },
  {
    "ticker": "OPHC",
    "exchange": "NASDAQ",
    "name": "OptimumBank Holdings Inc."
  },
  {
    "ticker": "OPI",
    "exchange": "NASDAQ",
    "name": "Office Properties Income Trust"
  },
  {
    "ticker": "OPINI",
    "exchange": "NASDAQ",
    "name": "Office Properties Income Trust 5.875 % Notes 2016-01.05.46"
  },
  {
    "ticker": "OPINL",
    "exchange": "NASDAQ",
    "name": "Office Properties Income Trust 6.375 % Notes 2020-23.06.50 Global"
  },
  {
    "ticker": "OPK",
    "exchange": "NASDAQ",
    "name": "OPKO Health Inc."
  },
  {
    "ticker": "OPNT",
    "exchange": "NASDAQ",
    "name": "Opiant Pharmaceuticals Inc."
  },
  {
    "ticker": "OPOF",
    "exchange": "NASDAQ",
    "name": "Old Point Financial Corporation"
  },
  {
    "ticker": "OPP",
    "exchange": "NYSE",
    "name": "RiverNorth/DoubleLine Strategic Opportunity Fund Inc."
  },
  {
    "ticker": "OPRA",
    "exchange": "NASDAQ",
    "name": "Opera Ltd. Sponsored ADR"
  },
  {
    "ticker": "OPRT",
    "exchange": "NASDAQ",
    "name": "Oportun Financial Corp."
  },
  {
    "ticker": "OPRX",
    "exchange": "NASDAQ",
    "name": "OptimizeRx Corporation"
  },
  {
    "ticker": "OPTN",
    "exchange": "NASDAQ",
    "name": "OptiNose Inc."
  },
  {
    "ticker": "OPTT",
    "exchange": "NASDAQ",
    "name": "Ocean Power Technologies Inc."
  },
  {
    "ticker": "OPY",
    "exchange": "NYSE",
    "name": "Oppenheimer Holdings Inc. Class A"
  },
  {
    "ticker": "OR",
    "exchange": "NYSE",
    "name": "Osisko Gold Royalties Ltd"
  },
  {
    "ticker": "ORA",
    "exchange": "NYSE",
    "name": "Ormat Technologies Inc."
  },
  {
    "ticker": "ORAN",
    "exchange": "NYSE",
    "name": "Orange SA Sponsored ADR"
  },
  {
    "ticker": "ORBC",
    "exchange": "NASDAQ",
    "name": "ORBCOMM Inc."
  },
  {
    "ticker": "ORC",
    "exchange": "NYSE",
    "name": "Orchid Island Capital Inc."
  },
  {
    "ticker": "ORCC",
    "exchange": "NYSE",
    "name": "Owl Rock Capital Corp."
  },
  {
    "ticker": "ORCL",
    "exchange": "NYSE",
    "name": "Oracle Corporation"
  },
  {
    "ticker": "ORGO",
    "exchange": "NASDAQ",
    "name": "Organogenesis Holdings Inc. Class A"
  },
  {
    "ticker": "ORGS",
    "exchange": "NASDAQ",
    "name": "Orgenesis Inc."
  },
  {
    "ticker": "ORI",
    "exchange": "NYSE",
    "name": "Old Republic International Corporation"
  },
  {
    "ticker": "ORIC",
    "exchange": "NASDAQ",
    "name": "ORIC Pharmaceuticals Inc"
  },
  {
    "ticker": "ORLY",
    "exchange": "NASDAQ",
    "name": "O'Reilly Automotive Inc."
  },
  {
    "ticker": "ORMP",
    "exchange": "NASDAQ",
    "name": "Oramed Pharmaceuticals Inc."
  },
  {
    "ticker": "ORN",
    "exchange": "NYSE",
    "name": "Orion Group Holdings Inc."
  },
  {
    "ticker": "ORRF",
    "exchange": "NASDAQ",
    "name": "Orrstown Financial Services Inc."
  },
  {
    "ticker": "ORSN",
    "exchange": "NASDAQ",
    "name": "Orisun Acquisition Corp"
  },
  {
    "ticker": "ORSNR",
    "exchange": "NASDAQ",
    "name": "Orisun Acquisition Corp Rights 2019-05.05.21 For Shares"
  },
  {
    "ticker": "ORSNU",
    "exchange": "NASDAQ",
    "name": "Orisun Acquisition Corp Units Cons of 1 Sh + 1 Wt 31.05.24 + 1 Rt"
  },
  {
    "ticker": "ORSNW",
    "exchange": "NASDAQ",
    "name": "Orisun Acquisition Corp Warrant 2019-31.05.24 on Orisun Acqn Rg"
  },
  {
    "ticker": "ORTX",
    "exchange": "NASDAQ",
    "name": "Orchard Therapeutics Plc Sponsored ADR"
  },
  {
    "ticker": "OSB",
    "exchange": "NYSE",
    "name": "Norbord Inc."
  },
  {
    "ticker": "OSBC",
    "exchange": "NASDAQ",
    "name": "Old Second Bancorp Inc."
  },
  {
    "ticker": "OSCV",
    "exchange": "Cboe BZX",
    "name": "Opus Small Cap Value ETF"
  },
  {
    "ticker": "OSG",
    "exchange": "NYSE",
    "name": "Overseas Shipholding Group Inc. Class A"
  },
  {
    "ticker": "OSH",
    "exchange": "NYSE",
    "name": "Oak Street Health Inc."
  },
  {
    "ticker": "OSIS",
    "exchange": "NASDAQ",
    "name": "OSI Systems Inc."
  },
  {
    "ticker": "OSK",
    "exchange": "NYSE",
    "name": "Oshkosh Corp"
  },
  {
    "ticker": "OSMT",
    "exchange": "NASDAQ",
    "name": "Osmotica Pharmaceuticals Plc"
  },
  {
    "ticker": "OSN",
    "exchange": "NASDAQ",
    "name": "Ossen Innovation Co. Ltd. Sponsored ADR"
  },
  {
    "ticker": "OSPN",
    "exchange": "NASDAQ",
    "name": "OneSpan Inc."
  },
  {
    "ticker": "OSS",
    "exchange": "NASDAQ",
    "name": "One Stop Systems Inc."
  },
  {
    "ticker": "OSTK",
    "exchange": "NASDAQ",
    "name": "Overstock.com Inc."
  },
  {
    "ticker": "OSUR",
    "exchange": "NASDAQ",
    "name": "OraSure Technologies Inc."
  },
  {
    "ticker": "OSW",
    "exchange": "NASDAQ",
    "name": "OneSpaWorld Holdings Ltd."
  },
  {
    "ticker": "OTEL",
    "exchange": "NASDAQ",
    "name": "Otelco Inc. Class A"
  },
  {
    "ticker": "OTEX",
    "exchange": "NASDAQ",
    "name": "Open Text Corporation"
  },
  {
    "ticker": "OTIC",
    "exchange": "NASDAQ",
    "name": "Otonomy Inc."
  },
  {
    "ticker": "OTIS",
    "exchange": "NYSE",
    "name": "Otis Worldwide Corporation"
  },
  {
    "ticker": "OTLK",
    "exchange": "NASDAQ",
    "name": "Outlook Therapeutics Inc."
  },
  {
    "ticker": "OTLKW",
    "exchange": "NASDAQ",
    "name": "Outlook Therapeutics Inc. Warrant 2018-18.02.19 Ext to 18.02.22 on Outlook Therptcs"
  },
  {
    "ticker": "OTRK",
    "exchange": "NASDAQ",
    "name": "Ontrak Inc."
  },
  {
    "ticker": "OTTR",
    "exchange": "NASDAQ",
    "name": "Otter Tail Corporation"
  },
  {
    "ticker": "OUNZ",
    "exchange": "NYSE ARCA",
    "name": "VanEck Merk Gold Trust"
  },
  {
    "ticker": "OUSA",
    "exchange": "NYSE ARCA",
    "name": "OShares U.S. Quality Dividend ETF"
  },
  {
    "ticker": "OUSM",
    "exchange": "NYSE ARCA",
    "name": "OShares U.S. Small-Cap Quality Dividend ETF"
  },
  {
    "ticker": "OUT",
    "exchange": "NYSE",
    "name": "OUTFRONT Media Inc."
  },
  {
    "ticker": "OVB",
    "exchange": "NYSE ARCA",
    "name": "Overlay Shares Core Bond ETF"
  },
  {
    "ticker": "OVBC",
    "exchange": "NASDAQ",
    "name": "Ohio Valley Banc Corp."
  },
  {
    "ticker": "OVF",
    "exchange": "NYSE ARCA",
    "name": "Overlay Shares Foreign Equity ETF"
  },
  {
    "ticker": "OVID",
    "exchange": "NASDAQ",
    "name": "Ovid Therapeutics Inc."
  },
  {
    "ticker": "OVL",
    "exchange": "NYSE ARCA",
    "name": "Overlay Shares Large Cap Equity ETF"
  },
  {
    "ticker": "OVLY",
    "exchange": "NASDAQ",
    "name": "Oak Valley Bancorp"
  },
  {
    "ticker": "OVM",
    "exchange": "NYSE ARCA",
    "name": "Overlay Shares Municipal Bond ETF"
  },
  {
    "ticker": "OVS",
    "exchange": "NYSE ARCA",
    "name": "Overlay Shares Small Cap Equity ETF"
  },
  {
    "ticker": "OVV",
    "exchange": "NYSE",
    "name": "Ovintiv Inc"
  },
  {
    "ticker": "OXBR",
    "exchange": "NASDAQ",
    "name": "Oxbridge Re Holdings Limited"
  },
  {
    "ticker": "OXBRW",
    "exchange": "NASDAQ",
    "name": "Oxbridge Re Holdings Limited Warrants 2014-26.3.24 on Shs"
  },
  {
    "ticker": "OXFD",
    "exchange": "NASDAQ",
    "name": "Oxford Immunotec Global PLC"
  },
  {
    "ticker": "OXLC",
    "exchange": "NASDAQ",
    "name": "Oxford Lane Capital Corp."
  },
  {
    "ticker": "OXLCM",
    "exchange": "NASDAQ",
    "name": "Oxford Lane Capital Corp 6.75 % Cum Red Pfd Shs Series -2024-"
  },
  {
    "ticker": "OXLCO",
    "exchange": "NASDAQ",
    "name": "Oxford Lane Capital Corp 7 1/2 % Term Cum Pfd Shs Series -2023-"
  },
  {
    "ticker": "OXLCP",
    "exchange": "NASDAQ",
    "name": "Oxford Lane Capital Corp 6.25 % Red Pfd Registered Shs Series -2027-"
  },
  {
    "ticker": "OXM",
    "exchange": "NYSE",
    "name": "Oxford Industries Inc."
  },
  {
    "ticker": "OXSQ",
    "exchange": "NASDAQ",
    "name": "Oxford Square Capital Corp."
  },
  {
    "ticker": "OXSQL",
    "exchange": "NASDAQ",
    "name": "Oxford Square Capital Corp. 6.5 % Bonds 2018-30.03.24"
  },
  {
    "ticker": "OXSQZ",
    "exchange": "NASDAQ",
    "name": "Oxford Square Capital Corp 6.25 % Notes 2019-30.04.26"
  },
  {
    "ticker": "OXY",
    "exchange": "NYSE",
    "name": "Occidental Petroleum Corporation"
  },
  {
    "ticker": "OXY+",
    "exchange": "NYSE",
    "name": "Occidental Petroleum Corporation Warrant 2020-03.08.27 on Occidental Pete"
  },
  {
    "ticker": "OYST",
    "exchange": "NASDAQ",
    "name": "Oyster Point Pharma Inc"
  },
  {
    "ticker": "OZK",
    "exchange": "NASDAQ",
    "name": "Bank OZK"
  },
  {
    "ticker": "PAA",
    "exchange": "NYSE",
    "name": "Plains All American Pipeline L.P."
  },
  {
    "ticker": "PAAS",
    "exchange": "NASDAQ",
    "name": "Pan American Silver Corp."
  },
  {
    "ticker": "PAC",
    "exchange": "NYSE",
    "name": "Grupo Aeroportuario del Pacifico SAB de CV Sponsored ADR Class B"
  },
  {
    "ticker": "PACB",
    "exchange": "NASDAQ",
    "name": "Pacific Biosciences of California Inc."
  },
  {
    "ticker": "PACD",
    "exchange": "NYSE",
    "name": "Pacific Drilling S.A."
  },
  {
    "ticker": "PACK",
    "exchange": "NYSE",
    "name": "Ranpak Holdings Corp. Class A"
  },
  {
    "ticker": "PACK+",
    "exchange": "NYSE",
    "name": "Ranpak Holdings Corp Warrant 2019-03.06.24 on Ranpak Holdings A"
  },
  {
    "ticker": "PACQ",
    "exchange": "NASDAQ",
    "name": "Pure Acquisition Corp. Class A"
  },
  {
    "ticker": "PACQU",
    "exchange": "NASDAQ",
    "name": "Pure Acquisition Corp. Units Cons of 1 Sh-A + 1/2 Wt"
  },
  {
    "ticker": "PACQW",
    "exchange": "NASDAQ",
    "name": "Pure Acquisition Corp Warrant 2018-2023 on Pure Acqn-A"
  },
  {
    "ticker": "PACW",
    "exchange": "NASDAQ",
    "name": "PacWest Bancorp"
  },
  {
    "ticker": "PAE",
    "exchange": "NASDAQ",
    "name": "PAE Incorporated Class A"
  },
  {
    "ticker": "PAEWW",
    "exchange": "NASDAQ",
    "name": "PAE Incorporated Warrant 2020-10.02.25 on PAE"
  },
  {
    "ticker": "PAG",
    "exchange": "NYSE",
    "name": "Penske Automotive Group Inc."
  },
  {
    "ticker": "PAGP",
    "exchange": "NYSE",
    "name": "Plains GP Holdings LP Class A"
  },
  {
    "ticker": "PAGS",
    "exchange": "NYSE",
    "name": "PagSeguro Digital Ltd. Class A"
  },
  {
    "ticker": "PAHC",
    "exchange": "NASDAQ",
    "name": "Phibro Animal Health Corporation Class A"
  },
  {
    "ticker": "PAI",
    "exchange": "NYSE",
    "name": "Western Asset Investment Grade Income Fund Inc"
  },
  {
    "ticker": "PAK",
    "exchange": "NYSE ARCA",
    "name": "Global X MSCI Pakistan ETF"
  },
  {
    "ticker": "PALC",
    "exchange": "NYSE ARCA",
    "name": "Pacer Lunt Large Cap Multi-Factor Alternator ETF"
  },
  {
    "ticker": "PALL",
    "exchange": "NYSE ARCA",
    "name": "Aberdeen Standard Physical Palladium Shares ETF"
  },
  {
    "ticker": "PAM",
    "exchange": "NYSE",
    "name": "Pampa Energia SA Sponsored ADR"
  },
  {
    "ticker": "PAMC",
    "exchange": "NYSE ARCA",
    "name": "Pacer Lunt MidCap Multi-Factor Alternator ETF"
  },
  {
    "ticker": "PANA=",
    "exchange": "NYSE",
    "name": "Panacea Acquisition Corp. Units Cons of 1 Sh A + 1 Wt 07.27"
  },
  {
    "ticker": "PAND",
    "exchange": "NASDAQ",
    "name": "Pandion Therapeutics Inc."
  },
  {
    "ticker": "PANL",
    "exchange": "NASDAQ",
    "name": "Pangaea Logistics Solutions Ltd."
  },
  {
    "ticker": "PANW",
    "exchange": "NYSE",
    "name": "Palo Alto Networks Inc."
  },
  {
    "ticker": "PAPR",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Power Buffer ETF April"
  },
  {
    "ticker": "PAR",
    "exchange": "NYSE",
    "name": "PAR Technology Corporation"
  },
  {
    "ticker": "PARR",
    "exchange": "NYSE",
    "name": "Par Pacific Holdings Inc"
  },
  {
    "ticker": "PASG",
    "exchange": "NASDAQ",
    "name": "Passage Bio Inc."
  },
  {
    "ticker": "PASS",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Consumer Discretionary Bear 3X Shares"
  },
  {
    "ticker": "PATI",
    "exchange": "NASDAQ",
    "name": "Patriot Transportation Holding Inc."
  },
  {
    "ticker": "PATK",
    "exchange": "NASDAQ",
    "name": "Patrick Industries Inc."
  },
  {
    "ticker": "PAUG",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Power Buffer ETF - August"
  },
  {
    "ticker": "PAVE",
    "exchange": "Cboe BZX",
    "name": "Global X U.S. Infrastructure Development ETF"
  },
  {
    "ticker": "PAVM",
    "exchange": "NASDAQ",
    "name": "PAVmed Inc."
  },
  {
    "ticker": "PAVMW",
    "exchange": "NASDAQ",
    "name": "PAVmed Inc. Warrants 2015-1.5.22 On Shs"
  },
  {
    "ticker": "PAVMZ",
    "exchange": "NASDAQ",
    "name": "PAVmed Inc Warrant 2018-30.04.24 on PAVmed Series Z"
  },
  {
    "ticker": "PAWZ",
    "exchange": "Cboe BZX",
    "name": "ProShares Pet Care ETF"
  },
  {
    "ticker": "PAYC",
    "exchange": "NYSE",
    "name": "Paycom Software Inc."
  },
  {
    "ticker": "PAYS",
    "exchange": "NASDAQ",
    "name": "PaySign Inc. Class B"
  },
  {
    "ticker": "PAYX",
    "exchange": "NASDAQ",
    "name": "Paychex Inc."
  },
  {
    "ticker": "PB",
    "exchange": "NYSE",
    "name": "Prosperity Bancshares Inc.(R)"
  },
  {
    "ticker": "PBA",
    "exchange": "NYSE",
    "name": "Pembina Pipeline Corporation"
  },
  {
    "ticker": "PBB",
    "exchange": "NYSE",
    "name": "Prospect Capital Corporation 6.25 % Notes 2015-15.6.24"
  },
  {
    "ticker": "PBC",
    "exchange": "NYSE",
    "name": "Prospect Capital Corp Notes 2018-15.06.29 Lkd to Rating Changes"
  },
  {
    "ticker": "PBCT",
    "exchange": "NASDAQ",
    "name": "People's United Financial Inc."
  },
  {
    "ticker": "PBCTP",
    "exchange": "NASDAQ",
    "name": "People's United Financial Inc. Non Cum Perp Pfd Registered Shs Series A"
  },
  {
    "ticker": "PBD",
    "exchange": "NYSE ARCA",
    "name": "Invesco Global Clean Energy ETF"
  },
  {
    "ticker": "PBDM",
    "exchange": "Cboe BZX",
    "name": "Invesco PureBeta FTSE Developed ex-North America ETF"
  },
  {
    "ticker": "PBE",
    "exchange": "NYSE ARCA",
    "name": "Invesco Dynamic Biotechnology & Genome ETF"
  },
  {
    "ticker": "PBEE",
    "exchange": "Cboe BZX",
    "name": "Invesco PureBeta FTSE Emerging Markets ETF"
  },
  {
    "ticker": "PBF",
    "exchange": "NYSE",
    "name": "PBF Energy Inc. Class A"
  },
  {
    "ticker": "PBFS",
    "exchange": "NASDAQ",
    "name": "Pioneer Bancorp Inc."
  },
  {
    "ticker": "PBFX",
    "exchange": "NYSE",
    "name": "PBF Logistics LP"
  },
  {
    "ticker": "PBH",
    "exchange": "NYSE",
    "name": "Prestige Consumer Healthcare Inc"
  },
  {
    "ticker": "PBHC",
    "exchange": "NASDAQ",
    "name": "Pathfinder Bancorp Inc"
  },
  {
    "ticker": "PBI",
    "exchange": "NYSE",
    "name": "Pitney Bowes Inc."
  },
  {
    "ticker": "PBI-B",
    "exchange": "NYSE",
    "name": "Pitney Bowes Inc. 6.7 % Notes 2013-7.3.43 Sr"
  },
  {
    "ticker": "PBIP",
    "exchange": "NASDAQ",
    "name": "Prudential Bancorp Inc."
  },
  {
    "ticker": "PBJ",
    "exchange": "NYSE ARCA",
    "name": "Invesco Dynamic Food & Beverage ETF"
  },
  {
    "ticker": "PBND",
    "exchange": "Cboe BZX",
    "name": "Invesco PureBeta US Aggregate Bond ETF"
  },
  {
    "ticker": "PBP",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 BuyWrite ETF"
  },
  {
    "ticker": "PBPB",
    "exchange": "NASDAQ",
    "name": "Potbelly Corp."
  },
  {
    "ticker": "PBR",
    "exchange": "NYSE",
    "name": "Petroleo Brasileiro SA Sponsored ADR"
  },
  {
    "ticker": "PBR.A",
    "exchange": "NYSE",
    "name": "Petroleo Brasileiro SA Sponsored ADR Pfd"
  },
  {
    "ticker": "PBS",
    "exchange": "NYSE ARCA",
    "name": "Invesco Dynamic Media ETF"
  },
  {
    "ticker": "PBSM",
    "exchange": "Cboe BZX",
    "name": "Invesco PureBeta MSCI USA Small Cap ETF"
  },
  {
    "ticker": "PBT",
    "exchange": "NYSE",
    "name": "Permian Basin Royalty Trust"
  },
  {
    "ticker": "PBTP",
    "exchange": "Cboe BZX",
    "name": "Invesco PureBeta 0-5 Yr US TIPS ETF"
  },
  {
    "ticker": "PBTS",
    "exchange": "NASDAQ",
    "name": "Powerbridge Technologies Co. Ltd."
  },
  {
    "ticker": "PBUS",
    "exchange": "Cboe BZX",
    "name": "Invesco PureBeta MSCI USA ETF"
  },
  {
    "ticker": "PBW",
    "exchange": "NYSE ARCA",
    "name": "Invesco WilderHill Clean Energy ETF"
  },
  {
    "ticker": "PBY",
    "exchange": "NYSE",
    "name": "Prospect Capital Corporation 6.25 % Notes 2018-15.06.28"
  },
  {
    "ticker": "PBYI",
    "exchange": "NASDAQ",
    "name": "Puma Biotechnology Inc."
  },
  {
    "ticker": "PCAR",
    "exchange": "NASDAQ",
    "name": "PACCAR Inc"
  },
  {
    "ticker": "PCB",
    "exchange": "NASDAQ",
    "name": "PCB Bancorp"
  },
  {
    "ticker": "PCEF",
    "exchange": "NYSE ARCA",
    "name": "Invesco CEF Income Composite ETF"
  },
  {
    "ticker": "PCF",
    "exchange": "NYSE",
    "name": "High Income Securities Fund of Benef Interest"
  },
  {
    "ticker": "PCG",
    "exchange": "NYSE",
    "name": "PG&E Corporation"
  },
  {
    "ticker": "PCG-A",
    "exchange": "NYSE American",
    "name": "Pacific Gas & Electric Co 6 % Cum.1st Pfd Shs Voting"
  },
  {
    "ticker": "PCG-B",
    "exchange": "NYSE American",
    "name": "Pacific Gas & Electric Co 5 1/2 % Cum.1st Pfd Shs Voting"
  },
  {
    "ticker": "PCG-C",
    "exchange": "NYSE American",
    "name": "Pacific Gas & Electric Co 5 % Cum.1st Pfd Shs Voting"
  },
  {
    "ticker": "PCG-D",
    "exchange": "NYSE American",
    "name": "Pacific Gas & Electric Co 5 % Cum.Red.1st.Pfd Shs Voting"
  },
  {
    "ticker": "PCG-E",
    "exchange": "NYSE American",
    "name": "Pacific Gas & Electric Co 5 % Cum.Red.1st Pfd Shs A Voting"
  },
  {
    "ticker": "PCG-G",
    "exchange": "NYSE American",
    "name": "Pacific Gas & Electric Co 4.80 % Cum.Red.1st Pfd Shs Voting"
  },
  {
    "ticker": "PCG-H",
    "exchange": "NYSE American",
    "name": "Pacific Gas & Electric Co 4.50 % Cum.Red.1st.Pref.Shs"
  },
  {
    "ticker": "PCG-I",
    "exchange": "NYSE American",
    "name": "Pacific Gas & Electric Co 4.36 % Cum.Red.1st Pfd Shs Voting"
  },
  {
    "ticker": "PCGU",
    "exchange": "NYSE",
    "name": "PG&E Corporation Corporate Units Cons of 0 US Tr STRIP + 1 PC 16.08.23"
  },
  {
    "ticker": "PCH",
    "exchange": "NASDAQ",
    "name": "PotlatchDeltic Corporation"
  },
  {
    "ticker": "PCI",
    "exchange": "NYSE",
    "name": "PIMCO Dynamic Credit and Mortgage Income Fund"
  },
  {
    "ticker": "PCK",
    "exchange": "NYSE",
    "name": "Pimco California Municipal Income Fund II"
  },
  {
    "ticker": "PCM",
    "exchange": "NYSE",
    "name": "PCM Fund Inc"
  },
  {
    "ticker": "PCN",
    "exchange": "NYSE",
    "name": "Pimco Corporate Income Fund PIMCO Corporate & Income Strategy Fund"
  },
  {
    "ticker": "PCOM",
    "exchange": "NASDAQ",
    "name": "Points International Ltd."
  },
  {
    "ticker": "PCPL",
    "exchange": "NYSE",
    "name": "CC Neuberger Principal Holdings I Class A"
  },
  {
    "ticker": "PCPL=",
    "exchange": "NYSE",
    "name": "CC Neuberger Principal Holdings I Units Cons of 1 Shs + 1/4 Wt"
  },
  {
    "ticker": "PCPL+",
    "exchange": "NYSE",
    "name": "CC Neuberger Principal Holdings I Warrant -on CC Neub Rg"
  },
  {
    "ticker": "PCQ",
    "exchange": "NYSE",
    "name": "Pimco California Municipal Income Fund"
  },
  {
    "ticker": "PCRX",
    "exchange": "NASDAQ",
    "name": "Pacira Biosciences Inc."
  },
  {
    "ticker": "PCSB",
    "exchange": "NASDAQ",
    "name": "PCSB Financial Corporation"
  },
  {
    "ticker": "PCTI",
    "exchange": "NASDAQ",
    "name": "PCTEL Inc"
  },
  {
    "ticker": "PCTY",
    "exchange": "NASDAQ",
    "name": "Paylocity Holding Corp."
  },
  {
    "ticker": "PCVX",
    "exchange": "NASDAQ",
    "name": "Vaxcyte Inc."
  },
  {
    "ticker": "PCY",
    "exchange": "NYSE ARCA",
    "name": "Invesco Emerging Markets Sovereign Debt ETF"
  },
  {
    "ticker": "PCYG",
    "exchange": "NASDAQ",
    "name": "Park City Group Inc."
  },
  {
    "ticker": "PCYO",
    "exchange": "NASDAQ",
    "name": "Pure Cycle Corporation"
  },
  {
    "ticker": "PD",
    "exchange": "NYSE",
    "name": "PagerDuty Inc."
  },
  {
    "ticker": "PDBC",
    "exchange": "NASDAQ",
    "name": "Invesco Optimum Yield Diversified Commodity Strategy No K-1 ETF"
  },
  {
    "ticker": "PDCE",
    "exchange": "NASDAQ",
    "name": "PDC Energy Inc."
  },
  {
    "ticker": "PDCO",
    "exchange": "NASDAQ",
    "name": "Patterson Companies Inc."
  },
  {
    "ticker": "PDD",
    "exchange": "NASDAQ",
    "name": "Pinduoduo Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "PDEC",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Power Buffer ETF - December"
  },
  {
    "ticker": "PDEV",
    "exchange": "NASDAQ",
    "name": "Principal International Multi-Factor Core Index ETF"
  },
  {
    "ticker": "PDEX",
    "exchange": "NASDAQ",
    "name": "Pro-Dex Inc."
  },
  {
    "ticker": "PDFS",
    "exchange": "NASDAQ",
    "name": "PDF Solutions Inc."
  },
  {
    "ticker": "PDI",
    "exchange": "NYSE",
    "name": "PIMCO Dynamic Income Fund"
  },
  {
    "ticker": "PDLB",
    "exchange": "NASDAQ",
    "name": "PDL Community Bancorp"
  },
  {
    "ticker": "PDLI",
    "exchange": "NASDAQ",
    "name": "PDL BioPharma Inc."
  },
  {
    "ticker": "PDM",
    "exchange": "NYSE",
    "name": "Piedmont Office Realty Trust Inc. Class A"
  },
  {
    "ticker": "PDN",
    "exchange": "NYSE ARCA",
    "name": "Invesco FTSE RAFI Developed Markets ex-US Small-Mid ETF"
  },
  {
    "ticker": "PDP",
    "exchange": "NASDAQ",
    "name": "Invesco DWA Momentum ETF"
  },
  {
    "ticker": "PDS",
    "exchange": "NYSE",
    "name": "Precision Drilling Corporation"
  },
  {
    "ticker": "PDSB",
    "exchange": "NASDAQ",
    "name": "PDS Biotechnology Corp."
  },
  {
    "ticker": "PDT",
    "exchange": "NYSE",
    "name": "John Hancock Premium Dividend Fund"
  },
  {
    "ticker": "PE",
    "exchange": "NYSE",
    "name": "Parsley Energy Inc. Class A"
  },
  {
    "ticker": "PEAK",
    "exchange": "NYSE",
    "name": "Healthpeak Properties Inc."
  },
  {
    "ticker": "PEB",
    "exchange": "NYSE",
    "name": "Pebblebrook Hotel Trust"
  },
  {
    "ticker": "PEB-C",
    "exchange": "NYSE",
    "name": "Pebblebrook Hotel Trust 6.5 % of Benef Interest Series C"
  },
  {
    "ticker": "PEB-D",
    "exchange": "NYSE",
    "name": "Pebblebrook Hotel Trust 6.375 % of Benef Interest Series D"
  },
  {
    "ticker": "PEB-E",
    "exchange": "NYSE",
    "name": "Pebblebrook Hotel Trust 6.375 % Cum Red Pfd Registered Shs of Benef Interest Series E"
  },
  {
    "ticker": "PEB-F",
    "exchange": "NYSE",
    "name": "Pebblebrook Hotel Trust 6.3 % Cum Red Pfd Registered Shs of Benef Interest Series F"
  },
  {
    "ticker": "PEBK",
    "exchange": "NASDAQ",
    "name": "Peoples Bancorp of North Carolina Inc."
  },
  {
    "ticker": "PEBO",
    "exchange": "NASDAQ",
    "name": "Peoples Bancorp Inc."
  },
  {
    "ticker": "PECK",
    "exchange": "NASDAQ",
    "name": "Peck Company Holdings Inc."
  },
  {
    "ticker": "PED",
    "exchange": "NYSE American",
    "name": "PEDEVCO Corp."
  },
  {
    "ticker": "PEG",
    "exchange": "NYSE",
    "name": "Public Service Enterprise Group Inc"
  },
  {
    "ticker": "PEGA",
    "exchange": "NASDAQ",
    "name": "Pegasystems Inc."
  },
  {
    "ticker": "PEI",
    "exchange": "NYSE",
    "name": "Pennsylvania Real Estate Investment Trust"
  },
  {
    "ticker": "PEI-B",
    "exchange": "NYSE",
    "name": "Pennsylvania Real Estate Investment Trust 7 3/8 % Cum Red Perp Pfd Shs Series B"
  },
  {
    "ticker": "PEI-C",
    "exchange": "NYSE",
    "name": "Pennsylvania Real Estate Investment Trust 7.20% Cum Red Perp Registered Pfd Shs Series C"
  },
  {
    "ticker": "PEI-D",
    "exchange": "NYSE",
    "name": "Pennsylvania Real Estate Investment Trust 6.875% Cum Red Perp Registered Pfd Shs Series D"
  },
  {
    "ticker": "PEIX",
    "exchange": "NASDAQ",
    "name": "Pacific Ethanol Inc."
  },
  {
    "ticker": "PEJ",
    "exchange": "NYSE ARCA",
    "name": "Invesco Dynamic Leisure & Entertainment ETF"
  },
  {
    "ticker": "PEN",
    "exchange": "NYSE",
    "name": "Penumbra Inc."
  },
  {
    "ticker": "PENN",
    "exchange": "NASDAQ",
    "name": "Penn National Gaming Inc."
  },
  {
    "ticker": "PEO",
    "exchange": "NYSE",
    "name": "Adams Natural Resources Fund Inc"
  },
  {
    "ticker": "PEP",
    "exchange": "NASDAQ",
    "name": "PepsiCo Inc."
  },
  {
    "ticker": "PER",
    "exchange": "NYSE",
    "name": "Sandridge Permian Trust"
  },
  {
    "ticker": "PERI",
    "exchange": "NASDAQ",
    "name": "Perion Network Ltd"
  },
  {
    "ticker": "PESI",
    "exchange": "NASDAQ",
    "name": "Perma-Fix Environmental Services Inc."
  },
  {
    "ticker": "PETQ",
    "exchange": "NASDAQ",
    "name": "PetIQ Inc. Class A"
  },
  {
    "ticker": "PETS",
    "exchange": "NASDAQ",
    "name": "PetMed Express Inc."
  },
  {
    "ticker": "PETZ",
    "exchange": "NASDAQ",
    "name": "TDH Holdings Inc."
  },
  {
    "ticker": "PEX",
    "exchange": "Cboe BZX",
    "name": "ProShares Global Listed Private Equity ETF"
  },
  {
    "ticker": "PEXL",
    "exchange": "NYSE ARCA",
    "name": "Pacer US Export Leaders ETF"
  },
  {
    "ticker": "PEY",
    "exchange": "NASDAQ",
    "name": "Invesco High Yield Equity Dividend Achievers ETF"
  },
  {
    "ticker": "PEZ",
    "exchange": "NASDAQ",
    "name": "Invesco DWA Consumer Cyclicals Momentum ETF"
  },
  {
    "ticker": "PFBC",
    "exchange": "NASDAQ",
    "name": "Preferred Bank"
  },
  {
    "ticker": "PFBI",
    "exchange": "NASDAQ",
    "name": "Premier Financial Bancorp Inc."
  },
  {
    "ticker": "PFC",
    "exchange": "NASDAQ",
    "name": "Premier Financial Corp."
  },
  {
    "ticker": "PFD",
    "exchange": "NYSE",
    "name": "Flaherty & Crumrine Preferred and Income Fund Inc"
  },
  {
    "ticker": "PFE",
    "exchange": "NYSE",
    "name": "Pfizer Inc."
  },
  {
    "ticker": "PFEB",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Power Buffer ETF - February"
  },
  {
    "ticker": "PFF",
    "exchange": "NASDAQ",
    "name": "iShares Preferred & Income Securities ETF"
  },
  {
    "ticker": "PFFA",
    "exchange": "NYSE ARCA",
    "name": "Virtus InfraCap U.S. Preferred Stock ETF"
  },
  {
    "ticker": "PFFD",
    "exchange": "NYSE ARCA",
    "name": "Global X U.S. Preferred ETF"
  },
  {
    "ticker": "PFFL",
    "exchange": "NYSE ARCA",
    "name": "ETRACS 2xMonthly Pay Leveraged Preferred Stock Index ETN"
  },
  {
    "ticker": "PFFR",
    "exchange": "NYSE ARCA",
    "name": "InfraCap REIT Preferred ETF"
  },
  {
    "ticker": "PFFV",
    "exchange": "NYSE ARCA",
    "name": "Global X Variable Rate Preferred ETF"
  },
  {
    "ticker": "PFG",
    "exchange": "NASDAQ",
    "name": "Principal Financial Group Inc."
  },
  {
    "ticker": "PFGC",
    "exchange": "NYSE",
    "name": "Performance Food Group Company"
  },
  {
    "ticker": "PFHD",
    "exchange": "NASDAQ",
    "name": "Professional Holding Corp Class A"
  },
  {
    "ticker": "PFI",
    "exchange": "NASDAQ",
    "name": "Invesco DWA Financial Momentum ETF"
  },
  {
    "ticker": "PFIE",
    "exchange": "NASDAQ",
    "name": "Profire Energy Inc."
  },
  {
    "ticker": "PFIG",
    "exchange": "NYSE ARCA",
    "name": "Invesco Fundamental Investment Grade Corporate Bond ETF"
  },
  {
    "ticker": "PFIN",
    "exchange": "NASDAQ",
    "name": "P&F Industries Inc. Class A"
  },
  {
    "ticker": "PFIS",
    "exchange": "NASDAQ",
    "name": "Peoples Financial Services Corp."
  },
  {
    "ticker": "PFL",
    "exchange": "NYSE",
    "name": "PIMCO Income Strategy Fund"
  },
  {
    "ticker": "PFLD",
    "exchange": "NYSE ARCA",
    "name": "AAM Low Duration Preferred and Income Securities ETF 144A"
  },
  {
    "ticker": "PFLT",
    "exchange": "NASDAQ",
    "name": "PennantPark Floating Rate Capital Ltd."
  },
  {
    "ticker": "PFM",
    "exchange": "NASDAQ",
    "name": "Invesco Dividend Achievers ETF"
  },
  {
    "ticker": "PFMT",
    "exchange": "NASDAQ",
    "name": "Performant Financial Corporation"
  },
  {
    "ticker": "PFN",
    "exchange": "NYSE",
    "name": "PIMCO Income Strategy Fund II"
  },
  {
    "ticker": "PFNX",
    "exchange": "NYSE American",
    "name": "Pfenex Inc."
  },
  {
    "ticker": "PFO",
    "exchange": "NYSE",
    "name": "Flaherty & Crumrine Preferred and Income Opportunity Fund Incorporated"
  },
  {
    "ticker": "PFPT",
    "exchange": "NASDAQ",
    "name": "Proofpoint Inc."
  },
  {
    "ticker": "PFS",
    "exchange": "NYSE",
    "name": "Provident Financial Services Inc."
  },
  {
    "ticker": "PFSI",
    "exchange": "NYSE",
    "name": "PennyMac Financial Services Inc."
  },
  {
    "ticker": "PFSW",
    "exchange": "NASDAQ",
    "name": "PFSweb Inc."
  },
  {
    "ticker": "PFXF",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Preferred Securities ex Financials ETF"
  },
  {
    "ticker": "PG",
    "exchange": "NYSE",
    "name": "Procter & Gamble Company"
  },
  {
    "ticker": "PGAL",
    "exchange": "NYSE ARCA",
    "name": "Global X MSCI Portugal ETF"
  },
  {
    "ticker": "PGC",
    "exchange": "NASDAQ",
    "name": "Peapack-Gladstone Financial Corporation"
  },
  {
    "ticker": "PGEN",
    "exchange": "NASDAQ",
    "name": "Precigen Inc"
  },
  {
    "ticker": "PGF",
    "exchange": "NYSE ARCA",
    "name": "Invesco Financial Preferred ETF"
  },
  {
    "ticker": "PGHY",
    "exchange": "NYSE ARCA",
    "name": "Invesco Global Short Term High Yield Bond ETF"
  },
  {
    "ticker": "PGJ",
    "exchange": "NASDAQ",
    "name": "Invesco Golden Dragon China ETF"
  },
  {
    "ticker": "PGM",
    "exchange": "NYSE ARCA",
    "name": "iPath Series B Bloomberg Platinum Subindex Total Return ETN"
  },
  {
    "ticker": "PGNY",
    "exchange": "NASDAQ",
    "name": "Progyny Inc."
  },
  {
    "ticker": "PGP",
    "exchange": "NYSE",
    "name": "Pimco Global Stockplus & Income Fund"
  },
  {
    "ticker": "PGR",
    "exchange": "NYSE",
    "name": "Progressive Corporation"
  },
  {
    "ticker": "PGRE",
    "exchange": "NYSE",
    "name": "Paramount Group Inc."
  },
  {
    "ticker": "PGTI",
    "exchange": "NYSE",
    "name": "PGT Innovations Inc."
  },
  {
    "ticker": "PGX",
    "exchange": "NYSE ARCA",
    "name": "Invesco Preferred ETF"
  },
  {
    "ticker": "PGZ",
    "exchange": "NYSE",
    "name": "Principal Real Estate Income Fund"
  },
  {
    "ticker": "PH",
    "exchange": "NYSE",
    "name": "Parker-Hannifin Corporation"
  },
  {
    "ticker": "PHAS",
    "exchange": "NASDAQ",
    "name": "PhNYSE AmericanBio Pharmaceuticals Inc."
  },
  {
    "ticker": "PHAT",
    "exchange": "NASDAQ",
    "name": "Phathom Pharmaceuticals Inc."
  },
  {
    "ticker": "PHB",
    "exchange": "NYSE ARCA",
    "name": "Invesco Fundamental High Yield Corporate Bond ETF"
  },
  {
    "ticker": "PHCF",
    "exchange": "NASDAQ",
    "name": "Puhui Wealth Investment Management Co. Ltd."
  },
  {
    "ticker": "PHD",
    "exchange": "NYSE",
    "name": "Pioneer Floating Rate Trust"
  },
  {
    "ticker": "PHDG",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Downside Hedged ETF"
  },
  {
    "ticker": "PHG",
    "exchange": "NYSE",
    "name": "Koninklijke Philips N.V. Sponsored ADR"
  },
  {
    "ticker": "PHGE",
    "exchange": "NYSE American",
    "name": "BiomX Inc."
  },
  {
    "ticker": "PHGE=",
    "exchange": "NYSE American",
    "name": "BiomX Inc. Units Cons of 1 Sh + 1 Wt 10.24"
  },
  {
    "ticker": "PHGE+",
    "exchange": "NYSE American",
    "name": "BiomX Inc Warrant 2019-16.10.24 on BiomX"
  },
  {
    "ticker": "PHI",
    "exchange": "NYSE",
    "name": "PLDT Inc. Sponsored ADR"
  },
  {
    "ticker": "PHIO",
    "exchange": "NASDAQ",
    "name": "Phio Pharmaceuticals Corp."
  },
  {
    "ticker": "PHIOW",
    "exchange": "NASDAQ",
    "name": "Phio Pharmaceuticals Corp. Warrant 2018-21.12.21 on Phio Pharmaceuticals"
  },
  {
    "ticker": "PHK",
    "exchange": "NYSE",
    "name": "Pimco High Income Fund"
  },
  {
    "ticker": "PHM",
    "exchange": "NYSE",
    "name": "PulteGroup Inc."
  },
  {
    "ticker": "PHO",
    "exchange": "NASDAQ",
    "name": "Invesco Water Resources ETF"
  },
  {
    "ticker": "PHR",
    "exchange": "NYSE",
    "name": "Phreesia Inc."
  },
  {
    "ticker": "PHT",
    "exchange": "NYSE",
    "name": "Pioneer High Income Trust"
  },
  {
    "ticker": "PHUN",
    "exchange": "NASDAQ",
    "name": "Phunware Inc."
  },
  {
    "ticker": "PHUNW",
    "exchange": "NASDAQ",
    "name": "Phunware Inc. Warrant 2018-26.12.23 on Phunware"
  },
  {
    "ticker": "PHX",
    "exchange": "NYSE",
    "name": "Panhandle Oil and Gas Inc. Class A"
  },
  {
    "ticker": "PHYL",
    "exchange": "NYSE ARCA",
    "name": "PGIM Active High Yield Bond ETF"
  },
  {
    "ticker": "PHYS",
    "exchange": "NYSE ARCA",
    "name": "Sprott Physical Gold Trust Units"
  },
  {
    "ticker": "PI",
    "exchange": "NASDAQ",
    "name": "Impinj Inc."
  },
  {
    "ticker": "PIC",
    "exchange": "NYSE",
    "name": "Pivotal Investment Corporation II Class A"
  },
  {
    "ticker": "PIC=",
    "exchange": "NYSE",
    "name": "Pivotal Investment Corporation II Units Cons of 1 Sh A + 1/3 Wt 01.06.25"
  },
  {
    "ticker": "PIC+",
    "exchange": "NYSE",
    "name": "Pivotal Investment Corporation II Warrant 2020-01.06.2025 on Pivotal Invt Rg-A"
  },
  {
    "ticker": "PICB",
    "exchange": "NYSE ARCA",
    "name": "Invesco International Corporate Bond ETF"
  },
  {
    "ticker": "PICK",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI Global Metals & Mining Producers ETF"
  },
  {
    "ticker": "PICO",
    "exchange": "NASDAQ",
    "name": "PICO Holdings Inc."
  },
  {
    "ticker": "PID",
    "exchange": "NASDAQ",
    "name": "Invesco International Dividend Achievers ETF"
  },
  {
    "ticker": "PIE",
    "exchange": "NASDAQ",
    "name": "Invesco DWA Emerging Markets Momentum ETF"
  },
  {
    "ticker": "PIH",
    "exchange": "NASDAQ",
    "name": "1347 Property Insurance Holdings Inc."
  },
  {
    "ticker": "PIHPP",
    "exchange": "NASDAQ",
    "name": "1347 Property Insurance Holdings Inc 8 % Cum Perp Red Pfd Registered Series A"
  },
  {
    "ticker": "PII",
    "exchange": "NYSE",
    "name": "Polaris Inc."
  },
  {
    "ticker": "PILL",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Pharmaceutical & Medical Bull 3X Shares"
  },
  {
    "ticker": "PIM",
    "exchange": "NYSE",
    "name": "Putnam Master Intermediate Income Trust"
  },
  {
    "ticker": "PIN",
    "exchange": "NYSE ARCA",
    "name": "Invesco India ETF"
  },
  {
    "ticker": "PINC",
    "exchange": "NASDAQ",
    "name": "Premier Inc. Class A"
  },
  {
    "ticker": "PINE",
    "exchange": "NYSE",
    "name": "Alpine Income Property Trust Inc."
  },
  {
    "ticker": "PING",
    "exchange": "NYSE",
    "name": "Ping Identity Holding Corp."
  },
  {
    "ticker": "PINS",
    "exchange": "NYSE",
    "name": "Pinterest Inc. Class A"
  },
  {
    "ticker": "PIO",
    "exchange": "NASDAQ",
    "name": "Invesco Global Water ETF"
  },
  {
    "ticker": "PIPR",
    "exchange": "NYSE",
    "name": "Piper Sandler Companies"
  },
  {
    "ticker": "PIRS",
    "exchange": "NASDAQ",
    "name": "Pieris Pharmaceuticals Inc."
  },
  {
    "ticker": "PIXY",
    "exchange": "NASDAQ",
    "name": "ShiftPixy Inc."
  },
  {
    "ticker": "PIZ",
    "exchange": "NASDAQ",
    "name": "Invesco DWA Developed Markets Momentum ETF"
  },
  {
    "ticker": "PJAN",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Power Buffer ETF - January"
  },
  {
    "ticker": "PJH",
    "exchange": "NYSE",
    "name": "Prudential Financial Inc. 5.75 % Notes 2012-15.12.52 Jr Subord"
  },
  {
    "ticker": "PJP",
    "exchange": "NYSE ARCA",
    "name": "Invesco Dynamic Pharmaceuticals ETF"
  },
  {
    "ticker": "PJT",
    "exchange": "NYSE",
    "name": "PJT Partners Inc. Class A"
  },
  {
    "ticker": "PJUL",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Power Buffer ETF - July"
  },
  {
    "ticker": "PJUN",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Power Buffer ETF - June"
  },
  {
    "ticker": "PK",
    "exchange": "NYSE",
    "name": "Park Hotels & Resorts Inc."
  },
  {
    "ticker": "PKB",
    "exchange": "NYSE ARCA",
    "name": "Invesco Dynamic Building & Construction ETF"
  },
  {
    "ticker": "PKBK",
    "exchange": "NASDAQ",
    "name": "Parke Bancorp Inc."
  },
  {
    "ticker": "PKE",
    "exchange": "NYSE",
    "name": "Park Aerospace Corp."
  },
  {
    "ticker": "PKG",
    "exchange": "NYSE",
    "name": "Packaging Corporation of America"
  },
  {
    "ticker": "PKI",
    "exchange": "NYSE",
    "name": "PerkinElmer Inc."
  },
  {
    "ticker": "PKO",
    "exchange": "NYSE",
    "name": "Pimco Income Opportunity Fund"
  },
  {
    "ticker": "PKOH",
    "exchange": "NASDAQ",
    "name": "Park-Ohio Holdings Corp."
  },
  {
    "ticker": "PKW",
    "exchange": "NASDAQ",
    "name": "Invesco Buyback Achievers ETF"
  },
  {
    "ticker": "PKX",
    "exchange": "NYSE",
    "name": "POSCO Sponsored ADR"
  },
  {
    "ticker": "PLAB",
    "exchange": "NASDAQ",
    "name": "Photronics Inc."
  },
  {
    "ticker": "PLAG",
    "exchange": "NYSE American",
    "name": "Planet Green Holdings Corp."
  },
  {
    "ticker": "PLAN",
    "exchange": "NYSE",
    "name": "Anaplan Inc."
  },
  {
    "ticker": "PLAT",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Growth Leaders Fund"
  },
  {
    "ticker": "PLAY",
    "exchange": "NASDAQ",
    "name": "Dave & Buster's Entertainment Inc."
  },
  {
    "ticker": "PLBC",
    "exchange": "NASDAQ",
    "name": "Plumas Bancorp"
  },
  {
    "ticker": "PLC",
    "exchange": "NASDAQ",
    "name": "Principal U.S. Large-Cap Multi-Factor Core Index ETF"
  },
  {
    "ticker": "PLCE",
    "exchange": "NASDAQ",
    "name": "Children's Place Inc."
  },
  {
    "ticker": "PLCY",
    "exchange": "Cboe BZX",
    "name": "EventShares U.S. Legislative Opportunities ETF"
  },
  {
    "ticker": "PLD",
    "exchange": "NYSE",
    "name": "Prologis Inc."
  },
  {
    "ticker": "PLG",
    "exchange": "NYSE American",
    "name": "Platinum Group Metals Ltd."
  },
  {
    "ticker": "PLIN",
    "exchange": "NASDAQ",
    "name": "China Xiangtai Food Co. Ltd."
  },
  {
    "ticker": "PLL",
    "exchange": "NASDAQ",
    "name": "Piedmont Lithium Ltd Sponsored ADR"
  },
  {
    "ticker": "PLM",
    "exchange": "NYSE American",
    "name": "PolyMet Mining Corp."
  },
  {
    "ticker": "PLMR",
    "exchange": "NASDAQ",
    "name": "Palomar Holdings Inc."
  },
  {
    "ticker": "PLNT",
    "exchange": "NYSE",
    "name": "Planet Fitness Inc. Class A"
  },
  {
    "ticker": "PLOW",
    "exchange": "NYSE",
    "name": "Douglas Dynamics Inc."
  },
  {
    "ticker": "PLPC",
    "exchange": "NASDAQ",
    "name": "Preformed Line Products Company"
  },
  {
    "ticker": "PLRX",
    "exchange": "NASDAQ",
    "name": "Pliant Therapeutics Inc."
  },
  {
    "ticker": "PLSE",
    "exchange": "NASDAQ",
    "name": "Pulse Biosciences Inc."
  },
  {
    "ticker": "PLT",
    "exchange": "NYSE",
    "name": "Plantronics Inc."
  },
  {
    "ticker": "PLTM",
    "exchange": "NYSE ARCA",
    "name": "GraniteShares Platinum Trust"
  },
  {
    "ticker": "PLUG",
    "exchange": "NASDAQ",
    "name": "Plug Power Inc."
  },
  {
    "ticker": "PLUS",
    "exchange": "NASDAQ",
    "name": "ePlus inc."
  },
  {
    "ticker": "PLW",
    "exchange": "NASDAQ",
    "name": "Invesco 1-30 Laddered Treasury ETF"
  },
  {
    "ticker": "PLX",
    "exchange": "NYSE American",
    "name": "Protalix Biotherapeutics Inc."
  },
  {
    "ticker": "PLXP",
    "exchange": "NASDAQ",
    "name": "PLx Pharma Inc."
  },
  {
    "ticker": "PLXS",
    "exchange": "NASDAQ",
    "name": "Plexus Corp."
  },
  {
    "ticker": "PLYA",
    "exchange": "NASDAQ",
    "name": "Playa Hotels & Resorts N.V."
  },
  {
    "ticker": "PLYM",
    "exchange": "NYSE",
    "name": "Plymouth Industrial REIT Inc."
  },
  {
    "ticker": "PLYM-A",
    "exchange": "NYSE American",
    "name": "Plymouth Industrial REIT Inc. 7.50 % Cum Red Perp Pfd Registered Shs Series A"
  },
  {
    "ticker": "PM",
    "exchange": "NYSE",
    "name": "Philip Morris International Inc."
  },
  {
    "ticker": "PMAR",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Power Buffer ETF - March"
  },
  {
    "ticker": "PMAY",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Power Buffer ETF - May"
  },
  {
    "ticker": "PMBC",
    "exchange": "NASDAQ",
    "name": "Pacific Mercantile Bancorp"
  },
  {
    "ticker": "PMD",
    "exchange": "NASDAQ",
    "name": "Psychemedics Corporation"
  },
  {
    "ticker": "PME",
    "exchange": "NASDAQ",
    "name": "Pingtan Marine Enterprise Ltd."
  },
  {
    "ticker": "PMF",
    "exchange": "NYSE",
    "name": "Pimco Municipal Income Fund"
  },
  {
    "ticker": "PML",
    "exchange": "NYSE",
    "name": "Pimco Municipal Income Fund II"
  },
  {
    "ticker": "PMM",
    "exchange": "NYSE",
    "name": "Putnam Managed Municipal Income Trust"
  },
  {
    "ticker": "PMO",
    "exchange": "NYSE",
    "name": "Putnam Municipal Opportunities Trust"
  },
  {
    "ticker": "PMT",
    "exchange": "NYSE",
    "name": "PennyMac Mortgage Investment Trust"
  },
  {
    "ticker": "PMT-A",
    "exchange": "NYSE",
    "name": "PennyMac Mortgage Investment Trust Cum Red Pfd Registered Shs of Beneficial Interest Series A"
  },
  {
    "ticker": "PMT-B",
    "exchange": "NYSE",
    "name": "PennyMac Mortgage Investment Trust Cum Conv Red Perp Pfd Series B"
  },
  {
    "ticker": "PMX",
    "exchange": "NYSE",
    "name": "Pimco Municipal Income Fund III"
  },
  {
    "ticker": "PNBK",
    "exchange": "NASDAQ",
    "name": "Patriot National Bancorp Inc."
  },
  {
    "ticker": "PNC",
    "exchange": "NYSE",
    "name": "PNC Financial Services Group Inc."
  },
  {
    "ticker": "PNC-P",
    "exchange": "NYSE",
    "name": "PNC Financial Services Group Inc. Deposit Shs Repr 1/4000th Non-Cum Perp Pfd Shs Series P"
  },
  {
    "ticker": "PNC-Q",
    "exchange": "NYSE",
    "name": "PNC Financial Services Group Inc. Deposit Shs Repr 1/4000th Non-Cum Perp Pfd Shs Series Q"
  },
  {
    "ticker": "PNF",
    "exchange": "NYSE",
    "name": "Pimco New York Municipal Income Fund"
  },
  {
    "ticker": "PNFP",
    "exchange": "NASDAQ",
    "name": "Pinnacle Financial Partners Inc."
  },
  {
    "ticker": "PNFPP",
    "exchange": "NASDAQ",
    "name": "Pinnacle Financial Partners Inc Depositary Shs Repr 1/40 6.75 % Non-Cum Red Perp Pfd Rg Sh Series B"
  },
  {
    "ticker": "PNI",
    "exchange": "NYSE",
    "name": "Pimco New York Municipal Income Fund II"
  },
  {
    "ticker": "PNM",
    "exchange": "NYSE",
    "name": "PNM Resources Inc."
  },
  {
    "ticker": "PNNT",
    "exchange": "NASDAQ",
    "name": "PennantPark Investment Corporation"
  },
  {
    "ticker": "PNNTG",
    "exchange": "NASDAQ",
    "name": "PennantPark Investment Corp 5.5 % Notes 2019-15.10.24"
  },
  {
    "ticker": "PNOV",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Power Buffer ETF - November"
  },
  {
    "ticker": "PNQI",
    "exchange": "NASDAQ",
    "name": "Invesco NASDAQDAQ Internet ETF"
  },
  {
    "ticker": "PNR",
    "exchange": "NYSE",
    "name": "Pentair plc"
  },
  {
    "ticker": "PNRG",
    "exchange": "NASDAQ",
    "name": "PrimeEnergy Resources Corporation"
  },
  {
    "ticker": "PNTG",
    "exchange": "NASDAQ",
    "name": "Pennant Group Inc"
  },
  {
    "ticker": "PNW",
    "exchange": "NYSE",
    "name": "Pinnacle West Capital Corporation"
  },
  {
    "ticker": "POAI",
    "exchange": "NASDAQ",
    "name": "Predictive Oncology Inc"
  },
  {
    "ticker": "POCT",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Power Buffer ETF - October"
  },
  {
    "ticker": "PODD",
    "exchange": "NASDAQ",
    "name": "Insulet Corporation"
  },
  {
    "ticker": "POLA",
    "exchange": "NASDAQ",
    "name": "Polar Power Inc."
  },
  {
    "ticker": "POOL",
    "exchange": "NASDAQ",
    "name": "Pool Corporation"
  },
  {
    "ticker": "POR",
    "exchange": "NYSE",
    "name": "Portland General Electric Company"
  },
  {
    "ticker": "POST",
    "exchange": "NYSE",
    "name": "Post Holdings Inc."
  },
  {
    "ticker": "POTX",
    "exchange": "NASDAQ",
    "name": "Global X Cannabis ETF"
  },
  {
    "ticker": "POWI",
    "exchange": "NASDAQ",
    "name": "Power Integrations Inc."
  },
  {
    "ticker": "POWL",
    "exchange": "NASDAQ",
    "name": "Powell Industries Inc."
  },
  {
    "ticker": "PPA",
    "exchange": "NYSE ARCA",
    "name": "Invesco Aerospace & Defense ETF"
  },
  {
    "ticker": "PPBI",
    "exchange": "NASDAQ",
    "name": "Pacific Premier Bancorp Inc."
  },
  {
    "ticker": "PPC",
    "exchange": "NASDAQ",
    "name": "Pilgrim's Pride Corporation"
  },
  {
    "ticker": "PPD",
    "exchange": "NASDAQ",
    "name": "PPD Inc."
  },
  {
    "ticker": "PPDM",
    "exchange": "NYSE ARCA",
    "name": "PortfolioPlus Developed Markets ETF"
  },
  {
    "ticker": "PPEM",
    "exchange": "NYSE ARCA",
    "name": "PortfolioPlus Emerging Markets ETF"
  },
  {
    "ticker": "PPG",
    "exchange": "NYSE",
    "name": "PPG Industries Inc."
  },
  {
    "ticker": "PPH",
    "exchange": "NASDAQ",
    "name": "VanEck Vectors Pharmaceutical ETF"
  },
  {
    "ticker": "PPIH",
    "exchange": "NASDAQ",
    "name": "Perma-Pipe International Holdings Inc"
  },
  {
    "ticker": "PPL",
    "exchange": "NYSE",
    "name": "PPL Corporation"
  },
  {
    "ticker": "PPLC",
    "exchange": "NYSE ARCA",
    "name": "PortfolioPlus S&P 500 ETF"
  },
  {
    "ticker": "PPLT",
    "exchange": "NYSE ARCA",
    "name": "Aberdeen Standard Physical Platinum Shares ETF"
  },
  {
    "ticker": "PPMC",
    "exchange": "NYSE ARCA",
    "name": "PortfolioPlus S&P Mid Cap ETF"
  },
  {
    "ticker": "PPR",
    "exchange": "NYSE",
    "name": "Voya Prime Rate Trust"
  },
  {
    "ticker": "PPSC",
    "exchange": "NYSE ARCA",
    "name": "PortfolioPlus S&P Small Cap ETF"
  },
  {
    "ticker": "PPSI",
    "exchange": "NASDAQ",
    "name": "Pioneer Power Solutions Inc."
  },
  {
    "ticker": "PPT",
    "exchange": "NYSE",
    "name": "Putnam Premier Income Trust"
  },
  {
    "ticker": "PPTY",
    "exchange": "NYSE ARCA",
    "name": "PPTY-U.S. Diversified Real Estate ETF"
  },
  {
    "ticker": "PPX",
    "exchange": "NYSE",
    "name": "PPL Capital Funding Inc 5.9 % Notes 2013-30.4.73 Gtd Jr Subord Ser B"
  },
  {
    "ticker": "PQDI",
    "exchange": "NYSE ARCA",
    "name": "Principal Spectrum Tax-Advantaged Dividend Active ETF"
  },
  {
    "ticker": "PQG",
    "exchange": "NYSE",
    "name": "PQ Group Holdings Inc."
  },
  {
    "ticker": "PQIN",
    "exchange": "NYSE ARCA",
    "name": "PGIM QMA Strategic Alpha International Equity ETF"
  },
  {
    "ticker": "PQLC",
    "exchange": "NYSE ARCA",
    "name": "PGIM QMA Strategic Alpha Large-Cap Core ETF"
  },
  {
    "ticker": "PQSG",
    "exchange": "NYSE ARCA",
    "name": "PGIM QMA Strategic Alpha Small-Cap Growth ETF"
  },
  {
    "ticker": "PQSV",
    "exchange": "NYSE ARCA",
    "name": "PGIM QMA Strategic Alpha Small-Cap Value ETF"
  },
  {
    "ticker": "PRA",
    "exchange": "NYSE",
    "name": "ProAssurance Corporation"
  },
  {
    "ticker": "PRAA",
    "exchange": "NASDAQ",
    "name": "PRA Group Inc"
  },
  {
    "ticker": "PRAH",
    "exchange": "NASDAQ",
    "name": "PRA Health Sciences Inc."
  },
  {
    "ticker": "PRCP",
    "exchange": "NASDAQ",
    "name": "Perceptron Inc."
  },
  {
    "ticker": "PRDO",
    "exchange": "NASDAQ",
    "name": "Perdoceo Education Corporation"
  },
  {
    "ticker": "PRE-F",
    "exchange": "NYSE",
    "name": "PartnerRe Ltd 5 7/8 % Non-Cum Red Pfd Shs Series F"
  },
  {
    "ticker": "PRE-G",
    "exchange": "NYSE",
    "name": "PartnerRe Ltd 6 1/2 % Cum Red Pfd Shs Series G"
  },
  {
    "ticker": "PRE-H",
    "exchange": "NYSE",
    "name": "PartnerRe Ltd 7 1/4 % Cum Red Pfd Shs Series H"
  },
  {
    "ticker": "PRE-I",
    "exchange": "NYSE",
    "name": "PartnerRe Ltd 5 7/8 % Non-Cum Red Pfd Shs Series I"
  },
  {
    "ticker": "PREF",
    "exchange": "NYSE ARCA",
    "name": "Principal Spectrum Preferred Secs Active ETF"
  },
  {
    "ticker": "PRF",
    "exchange": "NYSE ARCA",
    "name": "Invesco FTSE RAFI US 1000 ETF"
  },
  {
    "ticker": "PRFT",
    "exchange": "NASDAQ",
    "name": "Perficient Inc."
  },
  {
    "ticker": "PRFZ",
    "exchange": "NASDAQ",
    "name": "Invesco FTSE RAFI US 1500 Small-Mid ETF"
  },
  {
    "ticker": "PRGO",
    "exchange": "NYSE",
    "name": "Perrigo Co. Plc"
  },
  {
    "ticker": "PRGS",
    "exchange": "NASDAQ",
    "name": "Progress Software Corporation"
  },
  {
    "ticker": "PRGX",
    "exchange": "NASDAQ",
    "name": "PRGX Global Inc."
  },
  {
    "ticker": "PRH",
    "exchange": "NYSE",
    "name": "Prudential Financial Inc. 5.7 % Subordinated Notes 2013-15.3.53 Jr Subord"
  },
  {
    "ticker": "PRI",
    "exchange": "NYSE",
    "name": "Primerica Inc."
  },
  {
    "ticker": "PRIF-A",
    "exchange": "NYSE",
    "name": "Priority Income Fund Inc 6.375 % Cum Red Pfd Registered Shs 2018-30.06.25 Series A"
  },
  {
    "ticker": "PRIF-B",
    "exchange": "NYSE",
    "name": "Priority Income Fund Inc 6.25 % Cum Red Pfd Registered Shs 2018-31.12.23 Series B"
  },
  {
    "ticker": "PRIF-C",
    "exchange": "NYSE",
    "name": "Priority Income Fund Inc 6.625 % Cum Red Pfd Registered Shs 2019-30.06.2024 Series C"
  },
  {
    "ticker": "PRIF-D",
    "exchange": "NYSE",
    "name": "Priority Income Fund Inc 7.00 % Cum Red Pfd Registered Shs 2019-30.06.29 Series D"
  },
  {
    "ticker": "PRIF-E",
    "exchange": "NYSE",
    "name": "Priority Income Fund Inc 6.375 % Cum Red Pfd Registered Shs 2019-31.12.24 Series E"
  },
  {
    "ticker": "PRIF-F",
    "exchange": "NYSE",
    "name": "Priority Income Fund Inc 6.625 % Cum Red Pfd Registered Shs 2020-30.06.27 Series F"
  },
  {
    "ticker": "PRIM",
    "exchange": "NASDAQ",
    "name": "Primoris Services Corporation"
  },
  {
    "ticker": "PRK",
    "exchange": "NYSE American",
    "name": "Park National Corporation"
  },
  {
    "ticker": "PRLB",
    "exchange": "NYSE",
    "name": "Proto Labs Inc."
  },
  {
    "ticker": "PRMW",
    "exchange": "NYSE",
    "name": "Primo Water Corporation"
  },
  {
    "ticker": "PRN",
    "exchange": "NASDAQ",
    "name": "Invesco DWA Industrials Momentum ETF"
  },
  {
    "ticker": "PRNB",
    "exchange": "NASDAQ",
    "name": "Principia Biopharma Inc."
  },
  {
    "ticker": "PRNT",
    "exchange": "Cboe BZX",
    "name": "3D Printing ETF"
  },
  {
    "ticker": "PRO",
    "exchange": "NYSE",
    "name": "PROS Holdings Inc."
  },
  {
    "ticker": "PROF",
    "exchange": "NASDAQ",
    "name": "Profound Medical Corp"
  },
  {
    "ticker": "PROG",
    "exchange": "NASDAQ",
    "name": "Progenity Inc"
  },
  {
    "ticker": "PROS",
    "exchange": "NYSE",
    "name": "ProSight Global Inc."
  },
  {
    "ticker": "PROV",
    "exchange": "NASDAQ",
    "name": "Provident Financial Holdings Inc."
  },
  {
    "ticker": "PRPB=",
    "exchange": "NYSE",
    "name": "CC Neuberger Principal Holdings II Units Cons of 1 Shs A + 1/4 Wt"
  },
  {
    "ticker": "PRPH",
    "exchange": "NASDAQ",
    "name": "ProPhNYSE American Labs Inc."
  },
  {
    "ticker": "PRPL",
    "exchange": "NASDAQ",
    "name": "Purple Innovation Inc."
  },
  {
    "ticker": "PRPLW",
    "exchange": "NASDAQ",
    "name": "Purple Innovation Inc Warrant 2018-02.02.23 on Purple Innovatin"
  },
  {
    "ticker": "PRPO",
    "exchange": "NASDAQ",
    "name": "Precipio Inc."
  },
  {
    "ticker": "PRQR",
    "exchange": "NASDAQ",
    "name": "ProQR Therapeutics N.V."
  },
  {
    "ticker": "PRS",
    "exchange": "NYSE",
    "name": "Prudential Financial Inc 5.625 % Bonds 2018-15.08.58"
  },
  {
    "ticker": "PRSC",
    "exchange": "NASDAQ",
    "name": "Providence Service Corporation"
  },
  {
    "ticker": "PRSP",
    "exchange": "NYSE",
    "name": "Perspecta Inc."
  },
  {
    "ticker": "PRT",
    "exchange": "NYSE",
    "name": "PermRock Royalty Trust"
  },
  {
    "ticker": "PRTA",
    "exchange": "NASDAQ",
    "name": "Prothena Corp. Plc"
  },
  {
    "ticker": "PRTH",
    "exchange": "NASDAQ",
    "name": "Priority Technology Holdings Inc."
  },
  {
    "ticker": "PRTK",
    "exchange": "NASDAQ",
    "name": "Paratek Pharmaceuticals Inc"
  },
  {
    "ticker": "PRTS",
    "exchange": "NASDAQ",
    "name": "CarParts.com Inc"
  },
  {
    "ticker": "PRTY",
    "exchange": "NYSE",
    "name": "Party City Holdco Inc."
  },
  {
    "ticker": "PRU",
    "exchange": "NYSE",
    "name": "Prudential Financial Inc."
  },
  {
    "ticker": "PRVB",
    "exchange": "NASDAQ",
    "name": "Provention Bio Inc."
  },
  {
    "ticker": "PRVL",
    "exchange": "NASDAQ",
    "name": "Prevail Therapeutics Inc."
  },
  {
    "ticker": "PS",
    "exchange": "NASDAQ",
    "name": "Pluralsight Inc. Class A"
  },
  {
    "ticker": "PSA",
    "exchange": "NYSE",
    "name": "Public Storage"
  },
  {
    "ticker": "PSA-B",
    "exchange": "NYSE",
    "name": "Public Storage Deposit Shs Repr 1/1000th 5.4 % Cum Pfd Shs Series B"
  },
  {
    "ticker": "PSA-C",
    "exchange": "NYSE",
    "name": "Public Storage Deposit Shs Repr 1/1000th 5 1/8% Cum Pfd Shs Series C"
  },
  {
    "ticker": "PSA-D",
    "exchange": "NYSE",
    "name": "Public Storage Deposit Shs Repr 1/1000th 4.95 % Cum Pfd Shs of Benef Int Series D"
  },
  {
    "ticker": "PSA-E",
    "exchange": "NYSE",
    "name": "Public Storage Deposit Shs Repr 1/1000th % Cum Pfd Registered Shs of Benef Intst Sr E"
  },
  {
    "ticker": "PSA-F",
    "exchange": "NYSE",
    "name": "Public Storage Deposit Shs Repr 1/1000th 5.15 % Cum Pfd Shs of Benef Int Series F"
  },
  {
    "ticker": "PSA-G",
    "exchange": "NYSE",
    "name": "Public Storage Deposit Shs Repr 1/1000th 5.05 % Cum Red Pfd Shs Series G"
  },
  {
    "ticker": "PSA-H",
    "exchange": "NYSE",
    "name": "Public Storage Depositary Shs Repr 1/1000th Cum Red Pfd Registered Shs Series H"
  },
  {
    "ticker": "PSA-I",
    "exchange": "NYSE",
    "name": "Public Storage Depositary Shs of Benef Interest Repr 1/1000th 4.875% Cum Red Pfd Shs of Benef Int. Ser I"
  },
  {
    "ticker": "PSA-J",
    "exchange": "NYSE",
    "name": "Public Storage Depositary Shs of Benef Interest Repr 1/1000th 4.7% Cum Red Pfd Shs of Benef Int. Series J"
  },
  {
    "ticker": "PSA-K",
    "exchange": "NYSE",
    "name": "Public Storage Depositary Shs of Benef Interest Repr 1/1000th 4.75% Cum Red Pfd Shs of Benef Int. Ser K"
  },
  {
    "ticker": "PSA-L",
    "exchange": "NYSE",
    "name": "Public Storage Depositary Shs of Benef Interest Repr 1/1000th 4.625% Cum Red Pfd Rg Shs of Benef Int Ser L"
  },
  {
    "ticker": "PSA-M",
    "exchange": "NYSE",
    "name": "Public Storage Depositary Shs of Benef Interest Repr 1/1000th 4.125% Cum Red Pfd Rg Shs of Benef Int Series M"
  },
  {
    "ticker": "PSA-W",
    "exchange": "NYSE",
    "name": "Public Storage Depositary Shs Repr 1/1000th 5 1/5 % Cum Pfd Shs Series W"
  },
  {
    "ticker": "PSA-X",
    "exchange": "NYSE",
    "name": "Public Storage Deposit Shs Repr 1/1000th 5 1/5 % Cum Pfd Shs of Benef Int Series X"
  },
  {
    "ticker": "PSACU",
    "exchange": "NASDAQ",
    "name": "Property Solutions Acquisition Corp. Units Cons of 1 Sh + 1 Wt 30.03.27"
  },
  {
    "ticker": "PSB",
    "exchange": "NYSE",
    "name": "PS Business Parks Inc."
  },
  {
    "ticker": "PSB-W",
    "exchange": "NYSE",
    "name": "PS Business Parks Inc. Deposit Shs Repr 1/1000 5.20% Cum Registered Pfd Series W"
  },
  {
    "ticker": "PSB-X",
    "exchange": "NYSE",
    "name": "PS Business Parks Inc. Deposit Shs Repr 1/1000 5.25% Cum Registered Pfd Shs Series X"
  },
  {
    "ticker": "PSB-Y",
    "exchange": "NYSE",
    "name": "PS Business Parks Inc Deposit Shs Repr 1/1000th Cum Perp Red Pfd Registered Shs Series Y"
  },
  {
    "ticker": "PSB-Z",
    "exchange": "NYSE",
    "name": "PS Business Parks Inc. Depositary Shs Repr 1/1000th 4.875% Cum Perp Red Pfd Rg Shs Series Z"
  },
  {
    "ticker": "PSC",
    "exchange": "NASDAQ",
    "name": "Principal U.S. Small-Cap Multi-Factor Index ETF"
  },
  {
    "ticker": "PSCC",
    "exchange": "NASDAQ",
    "name": "Invesco S&P SmallCap Consumer Staples ETF"
  },
  {
    "ticker": "PSCD",
    "exchange": "NASDAQ",
    "name": "Invesco S&P SmallCap Consumer Discretionary ETF"
  },
  {
    "ticker": "PSCE",
    "exchange": "NASDAQ",
    "name": "Invesco S&P SmallCap Energy ETF"
  },
  {
    "ticker": "PSCF",
    "exchange": "NASDAQ",
    "name": "Invesco S&P SmallCap Financials ETF"
  },
  {
    "ticker": "PSCH",
    "exchange": "NASDAQ",
    "name": "Invesco S&P SmallCap Health Care ETF"
  },
  {
    "ticker": "PSCI",
    "exchange": "NASDAQ",
    "name": "Invesco S&P SmallCap Industrials ETF"
  },
  {
    "ticker": "PSCM",
    "exchange": "NASDAQ",
    "name": "Invesco S&P SmallCap Materials ETF"
  },
  {
    "ticker": "PSCT",
    "exchange": "NASDAQ",
    "name": "Invesco S&P SmallCap Information Technology ETF"
  },
  {
    "ticker": "PSCU",
    "exchange": "NASDAQ",
    "name": "Invesco S&P SmallCap Utilities & Communication Services ETF"
  },
  {
    "ticker": "NYSE ARCAC",
    "exchange": "NASDAQ",
    "name": "Prospect Capital Corporation"
  },
  {
    "ticker": "NYSE ARCAP",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Power Buffer ETF - September"
  },
  {
    "ticker": "NYSE ARCAT",
    "exchange": "NASDAQ",
    "name": "Principal Price Setters Index ETF"
  },
  {
    "ticker": "PSF",
    "exchange": "NYSE",
    "name": "Cohen & Steers Select Preferred and Income Fund Inc"
  },
  {
    "ticker": "PSHG",
    "exchange": "NASDAQ",
    "name": "Performance Shipping Inc."
  },
  {
    "ticker": "PSI",
    "exchange": "NYSE ARCA",
    "name": "Invesco Dynamic Semiconductors ETF"
  },
  {
    "ticker": "PSJ",
    "exchange": "NYSE ARCA",
    "name": "Invesco Dynamic Software ETF"
  },
  {
    "ticker": "PSK",
    "exchange": "NYSE ARCA",
    "name": "SPDR Wells Fargo Preferred Stock ETF"
  },
  {
    "ticker": "PSL",
    "exchange": "NASDAQ",
    "name": "Invesco DWA Consumer Staples Momentum ETF"
  },
  {
    "ticker": "PSLV",
    "exchange": "NYSE ARCA",
    "name": "Sprott Physical Silver Trust"
  },
  {
    "ticker": "PSM",
    "exchange": "NASDAQ",
    "name": "Principal U.S. Small-MidCap Multi-Factor Core Index ETF"
  },
  {
    "ticker": "PSMB",
    "exchange": "Cboe BZX",
    "name": "Invesco Balanced Multi-Asset Allocation ETF"
  },
  {
    "ticker": "PSMC",
    "exchange": "Cboe BZX",
    "name": "Invesco Conservative Multi-Asset Allocation ETF"
  },
  {
    "ticker": "PSMG",
    "exchange": "Cboe BZX",
    "name": "Invesco Growth Multi-Asset Allocation ETF"
  },
  {
    "ticker": "PSMM",
    "exchange": "Cboe BZX",
    "name": "Invesco Moderately Conservative Multi-Asset Allocation ETF"
  },
  {
    "ticker": "PSMT",
    "exchange": "NASDAQ",
    "name": "PriceSmart Inc."
  },
  {
    "ticker": "PSN",
    "exchange": "NYSE",
    "name": "Parsons Corporation"
  },
  {
    "ticker": "PSNL",
    "exchange": "NASDAQ",
    "name": "Personalis Inc."
  },
  {
    "ticker": "PSO",
    "exchange": "NYSE",
    "name": "Pearson PLC Sponsored ADR"
  },
  {
    "ticker": "PSP",
    "exchange": "NYSE ARCA",
    "name": "Invesco Global Listed Private Equity ETF"
  },
  {
    "ticker": "PSQ",
    "exchange": "NYSE ARCA",
    "name": "ProShares Short QQQ"
  },
  {
    "ticker": "PSR",
    "exchange": "NYSE ARCA",
    "name": "Invesco Active U.S. Real Estate Fund"
  },
  {
    "ticker": "PST",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort 7-10 Year Treasury"
  },
  {
    "ticker": "PSTG",
    "exchange": "NYSE",
    "name": "Pure Storage Inc. Class A"
  },
  {
    "ticker": "PSTH=",
    "exchange": "NYSE",
    "name": "Pershing Square Tontine Holdings Ltd. Units Cons of 1 Sh A + 1/9 Wt"
  },
  {
    "ticker": "PSTI",
    "exchange": "NASDAQ",
    "name": "Pluristem Therapeutics Inc."
  },
  {
    "ticker": "PSTL",
    "exchange": "NYSE",
    "name": "Postal Realty Trust Inc. Class A"
  },
  {
    "ticker": "PSTV",
    "exchange": "NASDAQ",
    "name": "Plus Therapeutics Inc."
  },
  {
    "ticker": "PSTX",
    "exchange": "NASDAQ",
    "name": "Poseida Therapeutics Inc."
  },
  {
    "ticker": "PSV",
    "exchange": "NYSE",
    "name": "Hermitage Offshore Services Ltd."
  },
  {
    "ticker": "PSX",
    "exchange": "NYSE",
    "name": "Phillips 66"
  },
  {
    "ticker": "PSXP",
    "exchange": "NYSE",
    "name": "Phillips 66 Partners LP"
  },
  {
    "ticker": "PT",
    "exchange": "NASDAQ",
    "name": "Pintec Technology Holdings Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "PTAC",
    "exchange": "NASDAQ",
    "name": "PropTech Acquisition Corporation Class A"
  },
  {
    "ticker": "PTACU",
    "exchange": "NASDAQ",
    "name": "PropTech Acquisition Corporation Units Cons of 1 Sh A + 1/2 Wt01.10.26"
  },
  {
    "ticker": "PTACW",
    "exchange": "NASDAQ",
    "name": "PropTech Acquisition Corporation Warrant 2019-01.10.26 on PropTech Acqn"
  },
  {
    "ticker": "PTBD",
    "exchange": "NYSE ARCA",
    "name": "Pacer Trendpilot US Bond ETF"
  },
  {
    "ticker": "PTC",
    "exchange": "NASDAQ",
    "name": "PTC Inc."
  },
  {
    "ticker": "PTCT",
    "exchange": "NASDAQ",
    "name": "PTC Therapeutics Inc."
  },
  {
    "ticker": "PTE",
    "exchange": "NASDAQ",
    "name": "PolarityTE Inc."
  },
  {
    "ticker": "PTEN",
    "exchange": "NASDAQ",
    "name": "Patterson-UTI Energy Inc."
  },
  {
    "ticker": "PTEU",
    "exchange": "Cboe BZX",
    "name": "Pacer Trendpilot European Index ETF"
  },
  {
    "ticker": "PTF",
    "exchange": "NASDAQ",
    "name": "Invesco DWA Technology Momentum ETF"
  },
  {
    "ticker": "PTGX",
    "exchange": "NASDAQ",
    "name": "Protagonist Therapeutics Inc."
  },
  {
    "ticker": "PTH",
    "exchange": "NASDAQ",
    "name": "Invesco DWA Healthcare Momentum ETF"
  },
  {
    "ticker": "PTI",
    "exchange": "NASDAQ",
    "name": "Proteostasis Therapeutics Inc."
  },
  {
    "ticker": "PTIN",
    "exchange": "NYSE ARCA",
    "name": "Pacer Trendpilot International ETF"
  },
  {
    "ticker": "PTK=",
    "exchange": "NYSE American",
    "name": "PTK Acquisition Corp. Units Cons of 1 Sh + 1 Wt"
  },
  {
    "ticker": "PTLC",
    "exchange": "Cboe BZX",
    "name": "Pacer Trendpilot US Large Cap ETF"
  },
  {
    "ticker": "PTMC",
    "exchange": "Cboe BZX",
    "name": "Pacer Trendpilot US Mid Cap ETF"
  },
  {
    "ticker": "PTMN",
    "exchange": "NASDAQ",
    "name": "Portman Ridge Finance Corporation"
  },
  {
    "ticker": "PTN",
    "exchange": "NYSE American",
    "name": "Palatin Technologies Inc."
  },
  {
    "ticker": "PTNQ",
    "exchange": "Cboe BZX",
    "name": "Pacer Trendpilot 100 ETF"
  },
  {
    "ticker": "PTNR",
    "exchange": "NASDAQ",
    "name": "Partner Communications Co. Ltd. Sponsored ADR"
  },
  {
    "ticker": "PTON",
    "exchange": "NASDAQ",
    "name": "Peloton Interactive Inc. Class A"
  },
  {
    "ticker": "PTR",
    "exchange": "NYSE",
    "name": "PetroChina Company Limited Sponsored ADR"
  },
  {
    "ticker": "PTRS",
    "exchange": "NASDAQ",
    "name": "Partners Bancorp"
  },
  {
    "ticker": "PTSI",
    "exchange": "NASDAQ",
    "name": "P.A.M. Transportation Services Inc."
  },
  {
    "ticker": "PTVCA",
    "exchange": "NASDAQ",
    "name": "Protective Insurance Corporation Class A"
  },
  {
    "ticker": "PTVCB",
    "exchange": "NASDAQ",
    "name": "Protective Insurance Corporation Class B"
  },
  {
    "ticker": "PTY",
    "exchange": "NYSE",
    "name": "Pimco Corporate Opportunity Fund PIMCO Corporate & Income Opportunity Fund"
  },
  {
    "ticker": "PUI",
    "exchange": "NASDAQ",
    "name": "Invesco DWA Utilities Momentum ETF"
  },
  {
    "ticker": "PUK",
    "exchange": "NYSE",
    "name": "Prudential plc Sponsored ADR"
  },
  {
    "ticker": "PUK-",
    "exchange": "NYSE",
    "name": "Prudential PLC 6 3/4 % Cap Secs 2004-Without Fixed Maturity"
  },
  {
    "ticker": "PUK-A",
    "exchange": "NYSE",
    "name": "Prudential PLC 6 1/2 % Exchg Perp Subordinated Cap Secs 2005-Without Fixed Maturity"
  },
  {
    "ticker": "PULM",
    "exchange": "NASDAQ",
    "name": "Pulmatrix Inc"
  },
  {
    "ticker": "PULS",
    "exchange": "NYSE ARCA",
    "name": "PGIM Ultra Short Bond ETF"
  },
  {
    "ticker": "PUMP",
    "exchange": "NYSE",
    "name": "ProPetro Holding Corp."
  },
  {
    "ticker": "PUTW",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree CBOE S&P 500 PutWrite Strategy Fund"
  },
  {
    "ticker": "PUYI",
    "exchange": "NASDAQ",
    "name": "Puyi Inc. Sponsored ADR"
  },
  {
    "ticker": "PVAC",
    "exchange": "NASDAQ",
    "name": "Penn Virginia Corporation"
  },
  {
    "ticker": "PVBC",
    "exchange": "NASDAQ",
    "name": "Provident Bancorp Inc"
  },
  {
    "ticker": "PVG",
    "exchange": "NYSE",
    "name": "Pretium Resources Inc."
  },
  {
    "ticker": "PVH",
    "exchange": "NYSE",
    "name": "PVH Corp."
  },
  {
    "ticker": "PVI",
    "exchange": "NYSE ARCA",
    "name": "Invesco VRDO Tax-Free Weekly ETF"
  },
  {
    "ticker": "PVL",
    "exchange": "NYSE",
    "name": "Permianville Royalty Trust"
  },
  {
    "ticker": "PW",
    "exchange": "NYSE American",
    "name": "Power REIT"
  },
  {
    "ticker": "PW-A",
    "exchange": "NYSE American",
    "name": "Power REIT 7 3/4 % Cum Red Perp Pfd Shs Series A"
  },
  {
    "ticker": "PWB",
    "exchange": "NYSE ARCA",
    "name": "Invesco Dynamic Large Cap Growth ETF"
  },
  {
    "ticker": "PWC",
    "exchange": "NYSE ARCA",
    "name": "Invesco Dynamic Market ETF"
  },
  {
    "ticker": "PWFL",
    "exchange": "NASDAQ",
    "name": "PowerFleet Inc."
  },
  {
    "ticker": "PWOD",
    "exchange": "NASDAQ",
    "name": "Penns Woods Bancorp Inc."
  },
  {
    "ticker": "PWR",
    "exchange": "NYSE",
    "name": "Quanta Services Inc."
  },
  {
    "ticker": "PWS",
    "exchange": "Cboe BZX",
    "name": "Pacer WealthShield ETF"
  },
  {
    "ticker": "PWV",
    "exchange": "NYSE ARCA",
    "name": "Invesco Dynamic Large Cap Value ETF"
  },
  {
    "ticker": "PWZ",
    "exchange": "NYSE ARCA",
    "name": "Invesco California AMT-Free Municipal Bond ETF"
  },
  {
    "ticker": "PXD",
    "exchange": "NYSE",
    "name": "Pioneer Natural Resources Company"
  },
  {
    "ticker": "PXE",
    "exchange": "NYSE ARCA",
    "name": "Invesco Dynamic Energy Exploration & Production ETF"
  },
  {
    "ticker": "PXF",
    "exchange": "NYSE ARCA",
    "name": "Invesco FTSE RAFI Developed Markets ex-U.S. ETF"
  },
  {
    "ticker": "PXH",
    "exchange": "NYSE ARCA",
    "name": "Invesco FTSE RAFI Emerging Markets ETF"
  },
  {
    "ticker": "PXI",
    "exchange": "NASDAQ",
    "name": "Invesco DWA Energy Momentum ETF"
  },
  {
    "ticker": "PXJ",
    "exchange": "NYSE ARCA",
    "name": "Invesco Dynamic Oil & Gas Services ETF"
  },
  {
    "ticker": "PXLW",
    "exchange": "NASDAQ",
    "name": "Pixelworks Inc."
  },
  {
    "ticker": "PXQ",
    "exchange": "NYSE ARCA",
    "name": "Invesco Dynamic Networking ETF"
  },
  {
    "ticker": "PXS",
    "exchange": "NASDAQ",
    "name": "Pyxis Tankers Inc."
  },
  {
    "ticker": "PY",
    "exchange": "NASDAQ",
    "name": "Principal Shareholder Yield Index ETF"
  },
  {
    "ticker": "PYN",
    "exchange": "NYSE",
    "name": "Pimco New York Municipal Income Fund III"
  },
  {
    "ticker": "PYPD",
    "exchange": "NASDAQ",
    "name": "PolyPid Ltd."
  },
  {
    "ticker": "PYPE",
    "exchange": "NYSE ARCA",
    "name": "ETRACS NYSEE Pickens Core Midstream Index ETN"
  },
  {
    "ticker": "PYPL",
    "exchange": "NASDAQ",
    "name": "PayPal Holdings Inc"
  },
  {
    "ticker": "PYS",
    "exchange": "NYSE",
    "name": "Merrill Lynch Depositor Inc 6.3 % Trust Ctfs A  2006-15.4.29 Ser RRD 1 Bsd On 6 5/8 Deb 29 RR Donnelley"
  },
  {
    "ticker": "PYT",
    "exchange": "NYSE",
    "name": "PPLUS Trust Floating Rate Trust Ctfs 2004-15.2.34 Series GSC-2 BNYSE Americand On 6.345% Cap Sec Gldmn Sach"
  },
  {
    "ticker": "PYZ",
    "exchange": "NASDAQ",
    "name": "Invesco DWA Basic Materials Momentum ETF"
  },
  {
    "ticker": "PZA",
    "exchange": "NYSE ARCA",
    "name": "Invesco National AMT-Free Municipal Bond ETF"
  },
  {
    "ticker": "PZC",
    "exchange": "NYSE",
    "name": "Pimco California Municipal Income Fund III"
  },
  {
    "ticker": "PZD",
    "exchange": "NYSE ARCA",
    "name": "Invesco Cleantech ETF"
  },
  {
    "ticker": "PZG",
    "exchange": "NYSE American",
    "name": "Paramount Gold Nevada Corp"
  },
  {
    "ticker": "PZN",
    "exchange": "NYSE",
    "name": "Pzena Investment Management Inc. Class A"
  },
  {
    "ticker": "PZT",
    "exchange": "NYSE ARCA",
    "name": "Invesco New York AMT-Free Municipal Bond ETF"
  },
  {
    "ticker": "PZZA",
    "exchange": "NASDAQ",
    "name": "Papa John's International Inc."
  },
  {
    "ticker": "QABA",
    "exchange": "NASDAQ",
    "name": "First Trust NASDAQDAQ ABA Community Bank Index Fund"
  },
  {
    "ticker": "QADA",
    "exchange": "NASDAQ",
    "name": "QAD Inc. Class A"
  },
  {
    "ticker": "QADB",
    "exchange": "NASDAQ",
    "name": "QAD Inc. Class B"
  },
  {
    "ticker": "QAI",
    "exchange": "NYSE ARCA",
    "name": "IQ Hedge Multi-Strategy Tracker ETF"
  },
  {
    "ticker": "QARP",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers Russell 1000 US Quality at a Reasonable Price ETF"
  },
  {
    "ticker": "QAT",
    "exchange": "NASDAQ",
    "name": "iShares MSCI Qatar ETF"
  },
  {
    "ticker": "QCLN",
    "exchange": "NASDAQ",
    "name": "First Trust NASDAQdaq Clean Edge Green Energy Index Fund"
  },
  {
    "ticker": "QCOM",
    "exchange": "NASDAQ",
    "name": "QUALCOMM Incorporated"
  },
  {
    "ticker": "QCRH",
    "exchange": "NASDAQ",
    "name": "QCR Holdings Inc."
  },
  {
    "ticker": "QD",
    "exchange": "NYSE",
    "name": "Qudian Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "QDEF",
    "exchange": "NYSE ARCA",
    "name": "FlexShares Quality Dividend Defensive Index Fund"
  },
  {
    "ticker": "QDEL",
    "exchange": "NASDAQ",
    "name": "Quidel Corporation"
  },
  {
    "ticker": "QDF",
    "exchange": "NYSE ARCA",
    "name": "FlexShares Quality Dividend Index Fund"
  },
  {
    "ticker": "QDIV",
    "exchange": "NYSE ARCA",
    "name": "Global X S&P 500 Quality Dividend ETF"
  },
  {
    "ticker": "QDYN",
    "exchange": "NYSE ARCA",
    "name": "FlexShares Quality Dividend Dynamic Index Fund"
  },
  {
    "ticker": "QED",
    "exchange": "NYSE ARCA",
    "name": "IQ Hedge Event-Driven Tracker ETF"
  },
  {
    "ticker": "QEFA",
    "exchange": "NYSE ARCA",
    "name": "SPDR MSCI EAFE StrategicFactors ETF"
  },
  {
    "ticker": "QEMM",
    "exchange": "NYSE ARCA",
    "name": "SPDR MSCI Emerging Markets StrategicFactors ETF"
  },
  {
    "ticker": "QEP",
    "exchange": "NYSE",
    "name": "QEP Resources Inc."
  },
  {
    "ticker": "QFIN",
    "exchange": "NASDAQ",
    "name": "360 Finance Inc. ADR Class A"
  },
  {
    "ticker": "QGEN",
    "exchange": "NYSE",
    "name": "QIAGEN NV"
  },
  {
    "ticker": "QGRO",
    "exchange": "NYSE ARCA",
    "name": "American Century STOXX U.S. Quality Growth ETF"
  },
  {
    "ticker": "QH",
    "exchange": "NASDAQ",
    "name": "Quhuo Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "QID",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort QQQ"
  },
  {
    "ticker": "QINT",
    "exchange": "NYSE ARCA",
    "name": "American Century Quality Diversified International ETF"
  },
  {
    "ticker": "QIWI",
    "exchange": "NASDAQ",
    "name": "Qiwi Plc Sponsored ADR Class B"
  },
  {
    "ticker": "QK",
    "exchange": "NASDAQ",
    "name": "Q&K International Group Ltd Sponsored ADR Class A"
  },
  {
    "ticker": "QLC",
    "exchange": "Cboe BZX",
    "name": "FlexShares US Quality Large Cap Index Fund"
  },
  {
    "ticker": "QLD",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra QQQ"
  },
  {
    "ticker": "QLGN",
    "exchange": "NASDAQ",
    "name": "Qualigen Therapeutics Inc."
  },
  {
    "ticker": "QLS",
    "exchange": "NYSE ARCA",
    "name": "IQ Hedge Long/Short Tracker ETF"
  },
  {
    "ticker": "QLTA",
    "exchange": "NYSE ARCA",
    "name": "iShares Aaa-A Rated Corporate Bond ETF"
  },
  {
    "ticker": "QLV",
    "exchange": "NYSE ARCA",
    "name": "FlexShares US Quality Low Volatility Index Fund"
  },
  {
    "ticker": "QLVD",
    "exchange": "NYSE ARCA",
    "name": "FlexShares Developed Markets ex-US Quality Low Volatility Index Fund"
  },
  {
    "ticker": "QLVE",
    "exchange": "NYSE ARCA",
    "name": "FlexShares Emerging Markets Quality Low Volatility Index Fund"
  },
  {
    "ticker": "QLYS",
    "exchange": "NASDAQ",
    "name": "Qualys Inc."
  },
  {
    "ticker": "QMCO",
    "exchange": "NASDAQ",
    "name": "Quantum Corporation"
  },
  {
    "ticker": "QMJ",
    "exchange": "NYSE ARCA",
    "name": "Direxion S&P 500 High minus Low Quality ETF"
  },
  {
    "ticker": "QMN",
    "exchange": "NYSE ARCA",
    "name": "IQ Hedge Market Neutral Tracker ETF"
  },
  {
    "ticker": "QMOM",
    "exchange": "Cboe BZX",
    "name": "Alpha Architect U.S. Quantitative Momentum ETF"
  },
  {
    "ticker": "QNST",
    "exchange": "NASDAQ",
    "name": "QuinStreet Inc."
  },
  {
    "ticker": "QQEW",
    "exchange": "NASDAQ",
    "name": "First Trust NASDAQdaq-100 Equal Weighted Index Fund"
  },
  {
    "ticker": "QQH",
    "exchange": "NYSE ARCA",
    "name": "HCM Defender 100 Index ETF"
  },
  {
    "ticker": "QQQ",
    "exchange": "NASDAQ",
    "name": "Invesco QQQ Trust"
  },
  {
    "ticker": "QQQE",
    "exchange": "NYSE ARCA",
    "name": "Direxion NASDAQDAQ-100 Equal Weighted Index Shares"
  },
  {
    "ticker": "QQQX",
    "exchange": "NASDAQ",
    "name": "Nuveen NASDAQDAQ 100 Dynamic Overwrite Fund"
  },
  {
    "ticker": "QQXT",
    "exchange": "NASDAQ",
    "name": "First Trust NASDAQdaq-100 Ex-Technology Sector Index Fund"
  },
  {
    "ticker": "QRFT",
    "exchange": "NYSE ARCA",
    "name": "Qraft Ai-Enhanced U.S. Large Cap ETF"
  },
  {
    "ticker": "QRHC",
    "exchange": "NASDAQ",
    "name": "Quest Resource Holding Corp."
  },
  {
    "ticker": "QRTEA",
    "exchange": "NASDAQ",
    "name": "Qurate Retail Inc. Class A"
  },
  {
    "ticker": "QRTEB",
    "exchange": "NASDAQ",
    "name": "Qurate Retail Inc. Class B"
  },
  {
    "ticker": "QRVO",
    "exchange": "NASDAQ",
    "name": "Qorvo Inc."
  },
  {
    "ticker": "QSR",
    "exchange": "NYSE",
    "name": "Restaurant Brands International Inc"
  },
  {
    "ticker": "QSY",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree U.S. Quality Shareholder Yield Fund"
  },
  {
    "ticker": "QTEC",
    "exchange": "NASDAQ",
    "name": "First Trust NASDAQDAQ-100 Technology Sector Index Fund"
  },
  {
    "ticker": "QTNT",
    "exchange": "NASDAQ",
    "name": "Quotient Ltd."
  },
  {
    "ticker": "QTRX",
    "exchange": "NASDAQ",
    "name": "Quanterix Corporation"
  },
  {
    "ticker": "QTS",
    "exchange": "NYSE",
    "name": "QTS Realty Trust Inc. Class A"
  },
  {
    "ticker": "QTS-A",
    "exchange": "NYSE",
    "name": "QTS Realty Trust Inc. 7.125 % Cum Conv Perp Red Pfd Series A"
  },
  {
    "ticker": "QTS-B",
    "exchange": "NYSE",
    "name": "QTS Realty Trust Inc. 6.5 % Cum Conv Perp Pfd 2018-20.07.23 Series B"
  },
  {
    "ticker": "QTT",
    "exchange": "NASDAQ",
    "name": "Qutoutiao Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "QTUM",
    "exchange": "NYSE ARCA",
    "name": "Defiance Quantum ETF"
  },
  {
    "ticker": "QTWO",
    "exchange": "NYSE",
    "name": "Q2 Holdings Inc."
  },
  {
    "ticker": "QUAD",
    "exchange": "NYSE",
    "name": "Quad/Graphics Inc. Class A"
  },
  {
    "ticker": "QUAL",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI USA Quality Factor ETF"
  },
  {
    "ticker": "QUIK",
    "exchange": "NASDAQ",
    "name": "QuickLogic Corporation"
  },
  {
    "ticker": "QUMU",
    "exchange": "NASDAQ",
    "name": "Qumu Corporation"
  },
  {
    "ticker": "QUOT",
    "exchange": "NYSE",
    "name": "Quotient Technology Incorporated"
  },
  {
    "ticker": "QURE",
    "exchange": "NASDAQ",
    "name": "uniQure N.V."
  },
  {
    "ticker": "QUS",
    "exchange": "NYSE ARCA",
    "name": "SPDR MSCI USA StrategicFactors ETF"
  },
  {
    "ticker": "QVAL",
    "exchange": "Cboe BZX",
    "name": "Alpha Architect U.S. Quantitative Value ETF"
  },
  {
    "ticker": "QVCC",
    "exchange": "NYSE",
    "name": "QVC Inc 6.25 % Notes 2019-26.11.68 Gtd Global"
  },
  {
    "ticker": "QVCD",
    "exchange": "NYSE",
    "name": "QVC Inc 6.375 % Notes 2018-13.09.67 Gtd Global"
  },
  {
    "ticker": "QVM",
    "exchange": "NYSE ARCA",
    "name": "Arrow QVM Equity Factor ETF"
  },
  {
    "ticker": "QWLD",
    "exchange": "NYSE ARCA",
    "name": "SPDR MSCI World StrategicFactors ETF"
  },
  {
    "ticker": "QYLD",
    "exchange": "NASDAQ",
    "name": "Global X NASDAQDAQ 100 Covered Call ETF"
  },
  {
    "ticker": "R",
    "exchange": "NYSE",
    "name": "Ryder System Inc."
  },
  {
    "ticker": "RA",
    "exchange": "NYSE",
    "name": "Brookfield Real Assets Income Fund Inc of Benef. Interest"
  },
  {
    "ticker": "RAAX",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Real Asset Allocation ETF"
  },
  {
    "ticker": "RACA",
    "exchange": "NASDAQ",
    "name": "Therapeutics Acquisition Corp. Class A"
  },
  {
    "ticker": "RACE",
    "exchange": "NYSE",
    "name": "Ferrari NV"
  },
  {
    "ticker": "RAD",
    "exchange": "NYSE",
    "name": "Rite Aid Corporation"
  },
  {
    "ticker": "RADA",
    "exchange": "NASDAQ",
    "name": "Rada Electronic Industries Ltd."
  },
  {
    "ticker": "RAFE",
    "exchange": "NYSE ARCA",
    "name": "PIMCO RAFI ESG U.S. ETF"
  },
  {
    "ticker": "RAIL",
    "exchange": "NASDAQ",
    "name": "FreightCar America Inc."
  },
  {
    "ticker": "RALS",
    "exchange": "NYSE ARCA",
    "name": "ProShares RAFI Long/Short ETF"
  },
  {
    "ticker": "RAMP",
    "exchange": "NYSE",
    "name": "LiveRamp Holdings Inc."
  },
  {
    "ticker": "RAND",
    "exchange": "NASDAQ",
    "name": "Rand Capital Corporation"
  },
  {
    "ticker": "RAPT",
    "exchange": "NASDAQ",
    "name": "RAPT Therapeutics Inc."
  },
  {
    "ticker": "RARE",
    "exchange": "NASDAQ",
    "name": "Ultragenyx Pharmaceutical Inc."
  },
  {
    "ticker": "RAVE",
    "exchange": "NASDAQ",
    "name": "Rave Restaurant Group Inc."
  },
  {
    "ticker": "RAVI",
    "exchange": "NYSE ARCA",
    "name": "FlexShares Ready Access Variable Income Fund"
  },
  {
    "ticker": "RAVN",
    "exchange": "NASDAQ",
    "name": "Raven Industries Inc."
  },
  {
    "ticker": "RBA",
    "exchange": "NYSE",
    "name": "Ritchie Bros. Auctioneers Incorporated"
  },
  {
    "ticker": "RBAC=",
    "exchange": "NYSE",
    "name": "RedBall Acquisition Corp. Units Cons of 1 Shs A + 1/3 Wt"
  },
  {
    "ticker": "RBB",
    "exchange": "NASDAQ",
    "name": "RBB Bancorp"
  },
  {
    "ticker": "RBBN",
    "exchange": "NASDAQ",
    "name": "Ribbon Communications Inc."
  },
  {
    "ticker": "RBC",
    "exchange": "NYSE",
    "name": "Regal Beloit Corp"
  },
  {
    "ticker": "RBCAA",
    "exchange": "NASDAQ",
    "name": "Republic Bancorp Inc. Class A"
  },
  {
    "ticker": "RBCN",
    "exchange": "NASDAQ",
    "name": "Rubicon Technology Inc."
  },
  {
    "ticker": "RBIN",
    "exchange": "NYSE ARCA",
    "name": "Nationwide Risk-BNYSE Americand International Equity ETF"
  },
  {
    "ticker": "RBKB",
    "exchange": "NASDAQ",
    "name": "Rhinebeck Bancorp Inc."
  },
  {
    "ticker": "RBNC",
    "exchange": "NASDAQ",
    "name": "Reliant Bancorp Inc"
  },
  {
    "ticker": "RBUS",
    "exchange": "NYSE ARCA",
    "name": "Nationwide Risk-BNYSE Americand U.S. Equity ETF"
  },
  {
    "ticker": "RC",
    "exchange": "NYSE",
    "name": "Ready Capital Corporation"
  },
  {
    "ticker": "RCA",
    "exchange": "NYSE",
    "name": "Ready Capital Corporation 7 % Convertible Notes -15.08.23"
  },
  {
    "ticker": "RCB",
    "exchange": "NYSE",
    "name": "Ready Capital Corporation 6.2 % Notes 2019-30.07.26"
  },
  {
    "ticker": "RCD",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Equal Weight Consumer Discretionary ETF"
  },
  {
    "ticker": "RCEL",
    "exchange": "NASDAQ",
    "name": "AVITA Therapeutics Inc."
  },
  {
    "ticker": "RCG",
    "exchange": "NYSE American",
    "name": "RENN Fund Inc"
  },
  {
    "ticker": "RCI",
    "exchange": "NYSE",
    "name": "Rogers Communications Inc. Class B"
  },
  {
    "ticker": "RCII",
    "exchange": "NASDAQ",
    "name": "Rent-A-Center Inc"
  },
  {
    "ticker": "RCKT",
    "exchange": "NASDAQ",
    "name": "Rocket Pharmaceuticals Inc."
  },
  {
    "ticker": "RCKY",
    "exchange": "NASDAQ",
    "name": "Rocky Brands Inc."
  },
  {
    "ticker": "RCL",
    "exchange": "NYSE",
    "name": "Royal Caribbean Group"
  },
  {
    "ticker": "RCM",
    "exchange": "NASDAQ",
    "name": "R1 RCM Inc"
  },
  {
    "ticker": "RCMT",
    "exchange": "NASDAQ",
    "name": "RCM Technologies Inc."
  },
  {
    "ticker": "RCON",
    "exchange": "NASDAQ",
    "name": "Recon Technology Ltd."
  },
  {
    "ticker": "RCP",
    "exchange": "NYSE",
    "name": "Ready Capital Corporation 6.5 % Notes -30.04.21"
  },
  {
    "ticker": "RCS",
    "exchange": "NYSE",
    "name": "PIMCO Strategic Income Fund Inc"
  },
  {
    "ticker": "RCUS",
    "exchange": "NYSE",
    "name": "Arcus Biosciences Inc."
  },
  {
    "ticker": "RDCM",
    "exchange": "NASDAQ",
    "name": "RADCOM Ltd."
  },
  {
    "ticker": "RDFN",
    "exchange": "NASDAQ",
    "name": "Redfin Corporation"
  },
  {
    "ticker": "RDHL",
    "exchange": "NASDAQ",
    "name": "RedHill Biopharma Ltd. Sponsored ADR"
  },
  {
    "ticker": "RDI",
    "exchange": "NASDAQ",
    "name": "Reading International Inc. Class A"
  },
  {
    "ticker": "RDIB",
    "exchange": "NASDAQ",
    "name": "Reading International Inc. Class B"
  },
  {
    "ticker": "RDIV",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P Ultra Dividend Revenue ETF"
  },
  {
    "ticker": "RDN",
    "exchange": "NYSE",
    "name": "Radian Group Inc."
  },
  {
    "ticker": "RDNT",
    "exchange": "NASDAQ",
    "name": "RadNet Inc."
  },
  {
    "ticker": "RDOG",
    "exchange": "NYSE ARCA",
    "name": "ALPS REIT Dividend Dogs ETF"
  },
  {
    "ticker": "RDS.A",
    "exchange": "NYSE",
    "name": "Royal Dutch Shell Plc Sponsored ADR Class A"
  },
  {
    "ticker": "RDS.B",
    "exchange": "NYSE",
    "name": "Royal Dutch Shell Plc Sponsored ADR Class B"
  },
  {
    "ticker": "RDUS",
    "exchange": "NASDAQ",
    "name": "Radius Health Inc"
  },
  {
    "ticker": "RDVT",
    "exchange": "NASDAQ",
    "name": "Red Violet Inc."
  },
  {
    "ticker": "RDVY",
    "exchange": "NASDAQ",
    "name": "First Trust Rising Dividend Achievers ETF"
  },
  {
    "ticker": "RDWR",
    "exchange": "NASDAQ",
    "name": "Radware Ltd."
  },
  {
    "ticker": "RDY",
    "exchange": "NYSE",
    "name": "Dr. Reddy's Laboratories Ltd. Sponsored ADR"
  },
  {
    "ticker": "RE",
    "exchange": "NYSE",
    "name": "Everest Re Group Ltd."
  },
  {
    "ticker": "REAL",
    "exchange": "NASDAQ",
    "name": "RealReal Inc."
  },
  {
    "ticker": "RECS",
    "exchange": "NYSE ARCA",
    "name": "Columbia Research Enhanced Core ETF"
  },
  {
    "ticker": "REDU",
    "exchange": "NASDAQ",
    "name": "RISE Education Cayman Ltd. Sponsored ADR"
  },
  {
    "ticker": "REED",
    "exchange": "NASDAQ",
    "name": "Reed's Inc."
  },
  {
    "ticker": "REET",
    "exchange": "NYSE ARCA",
    "name": "iShares Global REIT ETF"
  },
  {
    "ticker": "REFR",
    "exchange": "NASDAQ",
    "name": "Research Frontiers Incorporated"
  },
  {
    "ticker": "REG",
    "exchange": "NASDAQ",
    "name": "Regency Centers Corporation"
  },
  {
    "ticker": "REGI",
    "exchange": "NASDAQ",
    "name": "Renewable Energy Group Inc."
  },
  {
    "ticker": "REGL",
    "exchange": "Cboe BZX",
    "name": "ProShares S&P MidCap 400 Dividend Aristocrats ETF"
  },
  {
    "ticker": "REGN",
    "exchange": "NASDAQ",
    "name": "Regeneron Pharmaceuticals Inc."
  },
  {
    "ticker": "REI",
    "exchange": "NYSE American",
    "name": "Ring Energy Inc."
  },
  {
    "ticker": "REK",
    "exchange": "NYSE ARCA",
    "name": "ProShares Short Real Estate"
  },
  {
    "ticker": "REKR",
    "exchange": "NASDAQ",
    "name": "Rekor Systems Inc. Class B"
  },
  {
    "ticker": "RELL",
    "exchange": "NASDAQ",
    "name": "Richardson Electronics Ltd."
  },
  {
    "ticker": "RELV",
    "exchange": "NASDAQ",
    "name": "Reliv' International Inc."
  },
  {
    "ticker": "RELX",
    "exchange": "NYSE",
    "name": "RELX PLC Sponsored ADR"
  },
  {
    "ticker": "REM",
    "exchange": "Cboe BZX",
    "name": "iShares Mortgage Real Estate ETF"
  },
  {
    "ticker": "REML",
    "exchange": "NYSE ARCA",
    "name": "Credit Suisse X-Links Monthly Pay 2xLeveraged Mortgage REIT ETN"
  },
  {
    "ticker": "REMX",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Rare Earth/Strategic Metals ETF"
  },
  {
    "ticker": "RENN",
    "exchange": "NYSE",
    "name": "Renren Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "REPH",
    "exchange": "NASDAQ",
    "name": "Recro Pharma Inc."
  },
  {
    "ticker": "REPL",
    "exchange": "NASDAQ",
    "name": "Replimune Group Inc."
  },
  {
    "ticker": "RES",
    "exchange": "NYSE",
    "name": "RPC Inc."
  },
  {
    "ticker": "RESD",
    "exchange": "Cboe BZX",
    "name": "WisdomTree International ESG Fund"
  },
  {
    "ticker": "RESE",
    "exchange": "Cboe BZX",
    "name": "WisdomTree Emerging Markets ESG Fund"
  },
  {
    "ticker": "RESI",
    "exchange": "NYSE",
    "name": "Front Yard Residential Corp. Class B"
  },
  {
    "ticker": "RESN",
    "exchange": "NASDAQ",
    "name": "Resonant Inc."
  },
  {
    "ticker": "RESP",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree US ESG Fund of Benef Interest"
  },
  {
    "ticker": "RETA",
    "exchange": "NASDAQ",
    "name": "Reata Pharmaceuticals Inc. Class A"
  },
  {
    "ticker": "RETL",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Retail Bull 3x Shares"
  },
  {
    "ticker": "RETO",
    "exchange": "NASDAQ",
    "name": "ReTo Eco-Solutions Inc."
  },
  {
    "ticker": "REV",
    "exchange": "NYSE",
    "name": "Revlon Inc. Class A"
  },
  {
    "ticker": "REVG",
    "exchange": "NYSE",
    "name": "REV Group Inc."
  },
  {
    "ticker": "REVS",
    "exchange": "NYSE ARCA",
    "name": "Columbia Research Enhanced Value ETF"
  },
  {
    "ticker": "REW",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort Technology"
  },
  {
    "ticker": "REX",
    "exchange": "NYSE",
    "name": "REX American Resources Corporation"
  },
  {
    "ticker": "REXN",
    "exchange": "NASDAQ",
    "name": "Rexahn Pharmaceuticals Inc."
  },
  {
    "ticker": "REXR",
    "exchange": "NYSE",
    "name": "Rexford Industrial Realty Inc."
  },
  {
    "ticker": "REXR-A",
    "exchange": "NYSE",
    "name": "Rexford Industrial Realty Inc. Cum Red Pfd Registered Shs Series A"
  },
  {
    "ticker": "REXR-B",
    "exchange": "NYSE",
    "name": "Rexford Industrial Realty Inc. 5.875 % Cum Conv Perp Red Pfd Registered Shs Series B"
  },
  {
    "ticker": "REXR-C",
    "exchange": "NYSE",
    "name": "Rexford Industrial Realty Inc 5.625 % Cum Conv Red Perp Pfd Registered Shs Series C"
  },
  {
    "ticker": "REYN",
    "exchange": "NASDAQ",
    "name": "Reynolds Consumer Products Inc"
  },
  {
    "ticker": "REZ",
    "exchange": "NYSE ARCA",
    "name": "iShares Residential Real Estate ETF"
  },
  {
    "ticker": "REZI",
    "exchange": "NYSE",
    "name": "Resideo Technologies Inc."
  },
  {
    "ticker": "RF",
    "exchange": "NYSE",
    "name": "Regions Financial Corporation"
  },
  {
    "ticker": "RF-A",
    "exchange": "NYSE",
    "name": "Regions Financial Corp Deposit Shs Repr 1/40th 6 3/8 % Non Cum Perp Pfd Ser A"
  },
  {
    "ticker": "RF-B",
    "exchange": "NYSE",
    "name": "Regions Financial Corp Deposit Shs Repr 1/40th Non-Cum Perp Pfd Shs Series B"
  },
  {
    "ticker": "RF-C",
    "exchange": "NYSE",
    "name": "Regions Financial Corp Depositary Shs Repr 1/40th Non-Cum Red Perp Pfd Ser C"
  },
  {
    "ticker": "RFAP",
    "exchange": "NASDAQ",
    "name": "First Trust Riverfront Dynamic Asia Pacific ETF"
  },
  {
    "ticker": "RFCI",
    "exchange": "NYSE ARCA",
    "name": "Riverfront Dynamic Core Income ETF"
  },
  {
    "ticker": "RFDA",
    "exchange": "NYSE ARCA",
    "name": "RiverFront Dynamic US Dividend Advantage ETF"
  },
  {
    "ticker": "RFDI",
    "exchange": "NASDAQ",
    "name": "First Trust Riverfront Dynamic Developed International ETF"
  },
  {
    "ticker": "RFEM",
    "exchange": "NASDAQ",
    "name": "First Trust Riverfront Dynamic Emerging Markets ETF"
  },
  {
    "ticker": "RFEU",
    "exchange": "NASDAQ",
    "name": "First Trust Riverfront Dynamic Europe ETF"
  },
  {
    "ticker": "RFFC",
    "exchange": "NYSE ARCA",
    "name": "RiverFront Dynamic US Flex-Cap ETF"
  },
  {
    "ticker": "RFG",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P Midcap 400 Pure Growth ETF"
  },
  {
    "ticker": "RFI",
    "exchange": "NYSE",
    "name": "Cohen And Steers Total Return Realty Fund"
  },
  {
    "ticker": "RFIL",
    "exchange": "NASDAQ",
    "name": "RF Industries Ltd."
  },
  {
    "ticker": "RFL",
    "exchange": "NYSE",
    "name": "Rafael Holdings Inc. Class B"
  },
  {
    "ticker": "RFM",
    "exchange": "NYSE",
    "name": "RiverNorth Flexible Municipal Income Fund Inc."
  },
  {
    "ticker": "RFP",
    "exchange": "NYSE",
    "name": "Resolute Forest Products Inc."
  },
  {
    "ticker": "RFUN",
    "exchange": "NYSE ARCA",
    "name": "RiverFront Dynamic Unconstrained Income ETF"
  },
  {
    "ticker": "RFV",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P Midcap 400 Pure Value ETF"
  },
  {
    "ticker": "RGA",
    "exchange": "NYSE",
    "name": "Reinsurance Group of America Incorporated"
  },
  {
    "ticker": "RGCO",
    "exchange": "NASDAQ",
    "name": "RGC Resources Inc."
  },
  {
    "ticker": "RGEN",
    "exchange": "NASDAQ",
    "name": "Repligen Corporation"
  },
  {
    "ticker": "RGI",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Equal Weight Industrials ETF"
  },
  {
    "ticker": "RGLD",
    "exchange": "NASDAQ",
    "name": "Royal Gold Inc."
  },
  {
    "ticker": "RGLS",
    "exchange": "NASDAQ",
    "name": "Regulus Therapeutics Inc."
  },
  {
    "ticker": "RGNX",
    "exchange": "NASDAQ",
    "name": "REGENXBIO Inc."
  },
  {
    "ticker": "RGP",
    "exchange": "NASDAQ",
    "name": "Resources Connection Inc."
  },
  {
    "ticker": "RGR",
    "exchange": "NYSE",
    "name": "Sturm Ruger & Company Inc."
  },
  {
    "ticker": "RGS",
    "exchange": "NYSE",
    "name": "Regis Corporation"
  },
  {
    "ticker": "RGT",
    "exchange": "NYSE",
    "name": "Royce Global Value Trust Inc."
  },
  {
    "ticker": "RH",
    "exchange": "NYSE",
    "name": "RH"
  },
  {
    "ticker": "RHE",
    "exchange": "NYSE American",
    "name": "Regional Health Properties Inc."
  },
  {
    "ticker": "RHE-A",
    "exchange": "NYSE American",
    "name": "Regional Health Properties Inc.10.875 % Cum Red Perp Pfd Registered Shs Series A"
  },
  {
    "ticker": "RHI",
    "exchange": "NYSE",
    "name": "Robert Half International Inc."
  },
  {
    "ticker": "RHP",
    "exchange": "NYSE",
    "name": "Ryman Hospitality Properties Inc."
  },
  {
    "ticker": "RHS",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Equal Weight Consumer Staples ETF"
  },
  {
    "ticker": "RIBT",
    "exchange": "NASDAQ",
    "name": "RiceBran Technologies"
  },
  {
    "ticker": "RICK",
    "exchange": "NASDAQ",
    "name": "RCI Hospitality Holdings Inc."
  },
  {
    "ticker": "RIG",
    "exchange": "NYSE",
    "name": "Transocean Ltd."
  },
  {
    "ticker": "RIGL",
    "exchange": "NASDAQ",
    "name": "Rigel Pharmaceuticals Inc."
  },
  {
    "ticker": "RIGS",
    "exchange": "NYSE ARCA",
    "name": "RiverFront Strategic Income Fund"
  },
  {
    "ticker": "RILY",
    "exchange": "NASDAQ",
    "name": "B. Riley Financial Inc."
  },
  {
    "ticker": "RILYG",
    "exchange": "NASDAQ",
    "name": "B. Riley Financial Inc. 7.25 % Notes 2017-31.12.27"
  },
  {
    "ticker": "RILYH",
    "exchange": "NASDAQ",
    "name": "B. Riley Financial Inc. 7.375 % Notes 2018-31.05.23"
  },
  {
    "ticker": "RILYI",
    "exchange": "NASDAQ",
    "name": "B. Riley Financial Inc. 6.875 % Notes 2018-30.09.23"
  },
  {
    "ticker": "RILYM",
    "exchange": "NASDAQ",
    "name": "B. Riley Financial Inc 6.375 % Notes 2020-28.02.25 Global"
  },
  {
    "ticker": "RILYN",
    "exchange": "NASDAQ",
    "name": "B. Riley Financial Inc 6.5 % Notes 2019-30.09.26"
  },
  {
    "ticker": "RILYO",
    "exchange": "NASDAQ",
    "name": "B. Riley Financial Inc. 6.75 % Notes 2019-31.05.24 Global"
  },
  {
    "ticker": "RILYP",
    "exchange": "NASDAQ",
    "name": "B. Riley Financial Inc Depositary Shs Repr 1/1000th 6.875% Cum Conv Red Perp Pfd Rg Shs Ser A"
  },
  {
    "ticker": "RILYZ",
    "exchange": "NASDAQ",
    "name": "B. Riley Financial Inc 7.5 % Notes 2017-31.05.27"
  },
  {
    "ticker": "RINF",
    "exchange": "NYSE ARCA",
    "name": "ProShares Inflation Expectations ETF"
  },
  {
    "ticker": "RING",
    "exchange": "NASDAQ",
    "name": "iShares MSCI Global Gold Miners ETF"
  },
  {
    "ticker": "RIO",
    "exchange": "NYSE",
    "name": "Rio Tinto plc Sponsored ADR"
  },
  {
    "ticker": "RIOT",
    "exchange": "NASDAQ",
    "name": "Riot Blockchain Inc"
  },
  {
    "ticker": "RISE",
    "exchange": "NYSE ARCA",
    "name": "Sit Rising Rate ETF"
  },
  {
    "ticker": "RISN",
    "exchange": "NYSE ARCA",
    "name": "Inspire Tactical Balanced ESG ETF"
  },
  {
    "ticker": "RIV",
    "exchange": "NYSE",
    "name": "RiverNorth Opportunities Fund Inc."
  },
  {
    "ticker": "RIVE",
    "exchange": "NASDAQ",
    "name": "Riverview Financial Corp."
  },
  {
    "ticker": "RJA",
    "exchange": "NYSE ARCA",
    "name": "Elements Rogers International Commodity Index-Agriculture Total Return ETN"
  },
  {
    "ticker": "RJF",
    "exchange": "NYSE",
    "name": "Raymond James Financial Inc."
  },
  {
    "ticker": "RJI",
    "exchange": "NYSE ARCA",
    "name": "Elements Rogers International Commodity Index-Total Return ETN"
  },
  {
    "ticker": "RJN",
    "exchange": "NYSE ARCA",
    "name": "Elements Rogers International Commodity Index-Energy Total Return ETN"
  },
  {
    "ticker": "RJZ",
    "exchange": "NYSE ARCA",
    "name": "Elements Rogers International Commodity Index-Metals Total Return ETN"
  },
  {
    "ticker": "RKDA",
    "exchange": "NASDAQ",
    "name": "Arcadia Biosciences Inc."
  },
  {
    "ticker": "RKT",
    "exchange": "NYSE",
    "name": "Rocket Companies Inc Class A"
  },
  {
    "ticker": "RL",
    "exchange": "NYSE",
    "name": "Ralph Lauren Corporation Class A"
  },
  {
    "ticker": "RLAY",
    "exchange": "NASDAQ",
    "name": "Relay Therapeutics Inc."
  },
  {
    "ticker": "RLGT",
    "exchange": "NYSE American",
    "name": "Radiant Logistics Inc."
  },
  {
    "ticker": "RLGY",
    "exchange": "NYSE",
    "name": "Realogy Holdings Corp."
  },
  {
    "ticker": "RLH",
    "exchange": "NYSE",
    "name": "Red Lion Hotels Corporation"
  },
  {
    "ticker": "RLI",
    "exchange": "NYSE",
    "name": "RLI Corp."
  },
  {
    "ticker": "RLJ",
    "exchange": "NYSE",
    "name": "RLJ Lodging Trust"
  },
  {
    "ticker": "RLJ-A",
    "exchange": "NYSE",
    "name": "RLJ Lodging Trust USD 1.95 Cum Conv Pfd Registered Shs Series A"
  },
  {
    "ticker": "RLMD",
    "exchange": "NASDAQ",
    "name": "Relmada Therapeutics Inc"
  },
  {
    "ticker": "RLY",
    "exchange": "NYSE ARCA",
    "name": "SPDR SSgA Multi-Asset Real Return ETF"
  },
  {
    "ticker": "RM",
    "exchange": "NYSE",
    "name": "Regional Management Corp."
  },
  {
    "ticker": "RMAX",
    "exchange": "NYSE",
    "name": "RE/MAX Holdings Inc."
  },
  {
    "ticker": "RMBI",
    "exchange": "NASDAQ",
    "name": "Richmond Mutual Bancorporation Inc."
  },
  {
    "ticker": "RMBL",
    "exchange": "NASDAQ",
    "name": "RumbleOn Inc. Class B"
  },
  {
    "ticker": "RMBS",
    "exchange": "NASDAQ",
    "name": "Rambus Inc."
  },
  {
    "ticker": "RMCF",
    "exchange": "NASDAQ",
    "name": "Rocky Mountain Chocolate Factory Inc."
  },
  {
    "ticker": "RMD",
    "exchange": "NYSE",
    "name": "ResMed Inc."
  },
  {
    "ticker": "RMED",
    "exchange": "NYSE",
    "name": "Ra Medical Systems Inc."
  },
  {
    "ticker": "RMG",
    "exchange": "NYSE",
    "name": "RMG Acquisition Corp. Class A"
  },
  {
    "ticker": "RMG=",
    "exchange": "NYSE",
    "name": "RMG Acquisition Corp. Units Cons of 1 Sh -A- + 1/3 Wt"
  },
  {
    "ticker": "RMG+",
    "exchange": "NYSE",
    "name": "RMG Acquisition Corp Warrant 2018- on RMG Acqn Rg-A"
  },
  {
    "ticker": "RMI",
    "exchange": "NYSE",
    "name": "RiverNorth Opportunistic Municipal Income Fund Inc."
  },
  {
    "ticker": "RMM",
    "exchange": "NYSE",
    "name": "RiverNorth Managed Duration Municipal Income Fund Inc"
  },
  {
    "ticker": "RMNI",
    "exchange": "NASDAQ",
    "name": "Rimini Street Inc Class A"
  },
  {
    "ticker": "RMPL-",
    "exchange": "NYSE",
    "name": "RiverNorth Specialty Finance Corporation 5.875 % Cum Red Pfd 2017-31.10.24 Series A"
  },
  {
    "ticker": "RMR",
    "exchange": "NASDAQ",
    "name": "RMR Group Inc. Class A"
  },
  {
    "ticker": "RMRM",
    "exchange": "NASDAQ",
    "name": "RMR Mortgage Trust"
  },
  {
    "ticker": "RMT",
    "exchange": "NYSE",
    "name": "Royce Micro-Cap Trust Inc"
  },
  {
    "ticker": "RMTI",
    "exchange": "NASDAQ",
    "name": "Rockwell Medical Inc."
  },
  {
    "ticker": "RNA",
    "exchange": "NASDAQ",
    "name": "Avidity Biosciences Inc"
  },
  {
    "ticker": "RNDB",
    "exchange": "NASDAQ",
    "name": "Randolph Bancorp Inc."
  },
  {
    "ticker": "RNDM",
    "exchange": "NASDAQ",
    "name": "First Trust Developed International Equity Select ETF"
  },
  {
    "ticker": "RNDV",
    "exchange": "NASDAQ",
    "name": "US Equity Dividend Select ETF"
  },
  {
    "ticker": "RNEM",
    "exchange": "NASDAQ",
    "name": "First Trust Emerging Markets Equity Select ETF"
  },
  {
    "ticker": "RNET",
    "exchange": "NASDAQ",
    "name": "RigNet Inc."
  },
  {
    "ticker": "RNG",
    "exchange": "NYSE",
    "name": "RingCentral Inc. Class A"
  },
  {
    "ticker": "RNGR",
    "exchange": "NYSE",
    "name": "Ranger Energy Services Inc. Class A"
  },
  {
    "ticker": "RNLC",
    "exchange": "NASDAQ",
    "name": "First Trust Large Cap US Equity Select ETF"
  },
  {
    "ticker": "RNLX",
    "exchange": "NASDAQ",
    "name": "Renalytix AI Plc ADR"
  },
  {
    "ticker": "RNMC",
    "exchange": "NASDAQ",
    "name": "First Trust Mid Cap US Equity Select ETF"
  },
  {
    "ticker": "RNP",
    "exchange": "NYSE",
    "name": "Cohen & Steers REIT and Preferred and Income Fund Inc"
  },
  {
    "ticker": "RNR",
    "exchange": "NYSE",
    "name": "RenaissanceRe Holdings Ltd."
  },
  {
    "ticker": "RNR-E",
    "exchange": "NYSE",
    "name": "RenaissanceRe Holdings Ltd. 5.375 % Pref Series E"
  },
  {
    "ticker": "RNR-F",
    "exchange": "NYSE",
    "name": "RenaissanceRe Holdings Ltd. Deposit Shs Repr 1/1000th Non-Cum Red Perp Pfd Shs Series F"
  },
  {
    "ticker": "RNSC",
    "exchange": "NASDAQ",
    "name": "Furst Trust Small Cap US Equity Select ETF"
  },
  {
    "ticker": "RNST",
    "exchange": "NASDAQ",
    "name": "ReNASDAQant Corporation"
  },
  {
    "ticker": "RNWK",
    "exchange": "NASDAQ",
    "name": "RealNetworks Inc."
  },
  {
    "ticker": "ROAD",
    "exchange": "NASDAQ",
    "name": "Construction Partners Inc. Class A"
  },
  {
    "ticker": "ROAM",
    "exchange": "NYSE ARCA",
    "name": "Hartford Multifactor Emerging Markets ETF"
  },
  {
    "ticker": "ROBO",
    "exchange": "NYSE ARCA",
    "name": "ROBO Global Robotics & Automation Index ETF"
  },
  {
    "ticker": "ROBT",
    "exchange": "NASDAQ",
    "name": "First Trust NASDAQdaq Artificial Intelligence & Robotics ETF"
  },
  {
    "ticker": "ROCH",
    "exchange": "NASDAQ",
    "name": "Roth CH Acquisition I Co"
  },
  {
    "ticker": "ROCHU",
    "exchange": "NASDAQ",
    "name": "Roth CH Acquisition I Co Units Cons of 1 Sh + 3/4 Wt 28.01.25"
  },
  {
    "ticker": "ROCHW",
    "exchange": "NASDAQ",
    "name": "Roth CH Acquisition I Co Warrant 2020-28.01.25 on Roth CH Acqn"
  },
  {
    "ticker": "ROCK",
    "exchange": "NASDAQ",
    "name": "Gibraltar Industries Inc."
  },
  {
    "ticker": "RODE",
    "exchange": "Cboe BZX",
    "name": "Hartford Multifactor Diversified International ETF"
  },
  {
    "ticker": "RODI",
    "exchange": "Cboe BZX",
    "name": "Barclays Return On Disability ETN"
  },
  {
    "ticker": "RODM",
    "exchange": "NYSE ARCA",
    "name": "Hartford Multifactor Developed Markets (ex-US) ETF"
  },
  {
    "ticker": "ROG",
    "exchange": "NYSE",
    "name": "Rogers Corporation"
  },
  {
    "ticker": "ROIC",
    "exchange": "NASDAQ",
    "name": "Retail Opportunity Investments Corp."
  },
  {
    "ticker": "ROK",
    "exchange": "NYSE",
    "name": "Rockwell Automation Inc."
  },
  {
    "ticker": "ROKT",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Kensho Final Frontiers ETF"
  },
  {
    "ticker": "ROKU",
    "exchange": "NASDAQ",
    "name": "Roku Inc. Class A"
  },
  {
    "ticker": "ROL",
    "exchange": "NYSE",
    "name": "Rollins Inc."
  },
  {
    "ticker": "ROLL",
    "exchange": "NASDAQ",
    "name": "RBC Bearings Incorporated"
  },
  {
    "ticker": "ROM",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra Technology"
  },
  {
    "ticker": "ROMO",
    "exchange": "Cboe BZX",
    "name": "Strategy Shares Newfound/ReSolve Robust Momentum ETF"
  },
  {
    "ticker": "ROOF",
    "exchange": "NYSE ARCA",
    "name": "IQ US Real Estate Small Cap ETF"
  },
  {
    "ticker": "ROP",
    "exchange": "NYSE",
    "name": "Roper Technologies Inc."
  },
  {
    "ticker": "ROSC",
    "exchange": "NYSE ARCA",
    "name": "Hartford Multifactor Small Cap ETF"
  },
  {
    "ticker": "ROST",
    "exchange": "NASDAQ",
    "name": "Ross Stores Inc."
  },
  {
    "ticker": "ROUS",
    "exchange": "NYSE ARCA",
    "name": "Hartford Multifactor US Equity ETF"
  },
  {
    "ticker": "RP",
    "exchange": "NASDAQ",
    "name": "RealPage Inc."
  },
  {
    "ticker": "RPAI",
    "exchange": "NYSE",
    "name": "Retail Properties of America Inc. Class A"
  },
  {
    "ticker": "RPAR",
    "exchange": "NYSE ARCA",
    "name": "RPAR Risk Parity ETF"
  },
  {
    "ticker": "RPAY",
    "exchange": "NASDAQ",
    "name": "Repay Holdings Corp. Class A"
  },
  {
    "ticker": "RPD",
    "exchange": "NASDAQ",
    "name": "Rapid7 Inc."
  },
  {
    "ticker": "RPG",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Pure Growth ETF"
  },
  {
    "ticker": "RPLA",
    "exchange": "NYSE",
    "name": "Replay Acquisition Corp."
  },
  {
    "ticker": "RPLA=",
    "exchange": "NYSE",
    "name": "Replay Acquisition Corp. Units Cons of 1 Shs + 1/2 Wt"
  },
  {
    "ticker": "RPLA+",
    "exchange": "NYSE",
    "name": "Replay Acquisition Corp Warrant - on Replay Rg"
  },
  {
    "ticker": "RPM",
    "exchange": "NYSE",
    "name": "RPM International Inc."
  },
  {
    "ticker": "RPRX",
    "exchange": "NASDAQ",
    "name": "Royalty Pharma Plc Class A"
  },
  {
    "ticker": "RPT",
    "exchange": "NYSE",
    "name": "RPT Realty"
  },
  {
    "ticker": "RPT-D",
    "exchange": "NYSE",
    "name": "RPT Realty 7.25 % Cum Conv Perp Pfd Registered Shs of BenefInterest Series D"
  },
  {
    "ticker": "RPTX",
    "exchange": "NASDAQ",
    "name": "Repare Therapeutics Inc."
  },
  {
    "ticker": "RPV",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Pure Value ETF"
  },
  {
    "ticker": "RQI",
    "exchange": "NYSE",
    "name": "Cohen & Steers Quality Income Realty Fund Inc Quality Income Realty Fund"
  },
  {
    "ticker": "RRBI",
    "exchange": "NASDAQ",
    "name": "Red River Bancshares Inc."
  },
  {
    "ticker": "RRC",
    "exchange": "NYSE",
    "name": "Range Resources Corporation"
  },
  {
    "ticker": "RRD",
    "exchange": "NYSE",
    "name": "R.R. Donnelley & Sons Company"
  },
  {
    "ticker": "RRGB",
    "exchange": "NASDAQ",
    "name": "Red Robin Gourmet Burgers Inc."
  },
  {
    "ticker": "RRR",
    "exchange": "NASDAQ",
    "name": "Red Rock Resorts Inc. Class A"
  },
  {
    "ticker": "RS",
    "exchange": "NYSE",
    "name": "Reliance Steel & Aluminum Co."
  },
  {
    "ticker": "RSF",
    "exchange": "NYSE",
    "name": "RiverNorth Specialty Finance Corporation"
  },
  {
    "ticker": "RSG",
    "exchange": "NYSE",
    "name": "Republic Services Inc."
  },
  {
    "ticker": "RSP",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Equal Weight ETF"
  },
  {
    "ticker": "RSSS",
    "exchange": "NASDAQ",
    "name": "Research Solutions Inc."
  },
  {
    "ticker": "RST",
    "exchange": "NYSE",
    "name": "Rosetta Stone Inc."
  },
  {
    "ticker": "RSX",
    "exchange": "Cboe BZX",
    "name": "VanEck Vectors Russia ETF"
  },
  {
    "ticker": "RSXJ",
    "exchange": "Cboe BZX",
    "name": "VanEck Vectors Russia Small-Cap ETF"
  },
  {
    "ticker": "RTH",
    "exchange": "NASDAQ",
    "name": "VanEck Vectors Retail ETF"
  },
  {
    "ticker": "RTLR",
    "exchange": "NASDAQ",
    "name": "Rattler Midstream LP"
  },
  {
    "ticker": "RTM",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Equal Weight Materials ETF"
  },
  {
    "ticker": "RTRX",
    "exchange": "NASDAQ",
    "name": "Retrophin Inc."
  },
  {
    "ticker": "RTX",
    "exchange": "NYSE",
    "name": "Raytheon Technologies Corporation"
  },
  {
    "ticker": "RUBY",
    "exchange": "NASDAQ",
    "name": "Rubius Therapeutics Inc."
  },
  {
    "ticker": "RUHN",
    "exchange": "NASDAQ",
    "name": "Ruhnn Holding Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "RUN",
    "exchange": "NASDAQ",
    "name": "Sunrun Inc."
  },
  {
    "ticker": "RUSHA",
    "exchange": "NASDAQ",
    "name": "Rush Enterprises Inc. Class A"
  },
  {
    "ticker": "RUSHB",
    "exchange": "NASDAQ",
    "name": "Rush Enterprises Inc. Class B"
  },
  {
    "ticker": "RUSL",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Russia Bull 2x Shares"
  },
  {
    "ticker": "RUTH",
    "exchange": "NASDAQ",
    "name": "Ruth's Hospitality Group Inc."
  },
  {
    "ticker": "RVI",
    "exchange": "NYSE",
    "name": "Retail Value Inc."
  },
  {
    "ticker": "RVLV",
    "exchange": "NYSE",
    "name": "Revolve Group Inc Class A"
  },
  {
    "ticker": "RVMD",
    "exchange": "NASDAQ",
    "name": "Revolution Medicines Inc."
  },
  {
    "ticker": "RVNC",
    "exchange": "NASDAQ",
    "name": "Revance Therapeutics Inc."
  },
  {
    "ticker": "RVNU",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers Municipal Infrastructure Revenue Bond ETF"
  },
  {
    "ticker": "RVP",
    "exchange": "NYSE American",
    "name": "Retractable Technologies Inc."
  },
  {
    "ticker": "RVRS",
    "exchange": "Cboe BZX",
    "name": "Reverse Cap Weighted U.S. Large Cap ETF"
  },
  {
    "ticker": "RVSB",
    "exchange": "NASDAQ",
    "name": "Riverview Bancorp Inc."
  },
  {
    "ticker": "RVT",
    "exchange": "NYSE",
    "name": "Royce Value Trust Inc"
  },
  {
    "ticker": "RWCD",
    "exchange": "NYSE ARCA",
    "name": "Direxion MSCI Cyclicals Over Defensives ETF"
  },
  {
    "ticker": "RWDC",
    "exchange": "NYSE ARCA",
    "name": "Direxion MSCI Defensives Over Cyclicals ETF"
  },
  {
    "ticker": "RWDE",
    "exchange": "NYSE ARCA",
    "name": "Direxion MSCI Developed Over Emerging Markets ETF"
  },
  {
    "ticker": "RWED",
    "exchange": "NYSE ARCA",
    "name": "Direxion MSCI Emerging Over Developed Markets ETF"
  },
  {
    "ticker": "RWGV",
    "exchange": "NYSE ARCA",
    "name": "Direxion Russell 1000 Growth Over Value ETF"
  },
  {
    "ticker": "RWIU",
    "exchange": "NYSE ARCA",
    "name": "Direxion FTSE Russell International Over US ETF"
  },
  {
    "ticker": "RWJ",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P SmallCap 600 Revenue ETF"
  },
  {
    "ticker": "RWK",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P MidCap 400 Revenue ETF"
  },
  {
    "ticker": "RWL",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Revenue ETF"
  },
  {
    "ticker": "RWLK",
    "exchange": "NASDAQ",
    "name": "ReWalk Robotics Ltd."
  },
  {
    "ticker": "RWLS",
    "exchange": "NYSE ARCA",
    "name": "Direxion Russell Large Over Small Cap ETF"
  },
  {
    "ticker": "RWM",
    "exchange": "NYSE ARCA",
    "name": "ProShares Short Russell2000"
  },
  {
    "ticker": "RWO",
    "exchange": "NYSE ARCA",
    "name": "SPDR Dow Jones Global Real Estate ETF"
  },
  {
    "ticker": "RWR",
    "exchange": "NYSE ARCA",
    "name": "SPDR Dow Jones REIT ETF"
  },
  {
    "ticker": "RWSL",
    "exchange": "NYSE ARCA",
    "name": "Direxion Russell Small Over Large Cap ETF"
  },
  {
    "ticker": "RWT",
    "exchange": "NYSE",
    "name": "Redwood Trust Inc."
  },
  {
    "ticker": "RWUI",
    "exchange": "NYSE ARCA",
    "name": "Direxion FTSE Russell US Over International ETF"
  },
  {
    "ticker": "RWVG",
    "exchange": "NYSE ARCA",
    "name": "Direxion Russell 1000 Value Over Growth ETF"
  },
  {
    "ticker": "RWX",
    "exchange": "NYSE ARCA",
    "name": "SPDR Dow Jones International Real Estate ETF"
  },
  {
    "ticker": "RXD",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort Health Care"
  },
  {
    "ticker": "RXI",
    "exchange": "NYSE ARCA",
    "name": "iShares Global Consumer Discretionary ETF"
  },
  {
    "ticker": "RXL",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra Health Care"
  },
  {
    "ticker": "RXN",
    "exchange": "NYSE",
    "name": "Rexnord Corporation"
  },
  {
    "ticker": "RXT",
    "exchange": "NASDAQ",
    "name": "Rackspace Technology Inc."
  },
  {
    "ticker": "RY",
    "exchange": "NYSE",
    "name": "Royal Bank of Canada"
  },
  {
    "ticker": "RY-T",
    "exchange": "NYSE",
    "name": "Royal Bank of Canada Deposit Shs Repr 1/40th 6.75 % Non-Cum Pfd Shs Series C2- Fltg Rt"
  },
  {
    "ticker": "RYAAY",
    "exchange": "NASDAQ",
    "name": "Ryanair Holdings Plc Sponsored ADR"
  },
  {
    "ticker": "RYAM",
    "exchange": "NYSE",
    "name": "Rayonier Advanced Materials Inc"
  },
  {
    "ticker": "RYB",
    "exchange": "NYSE",
    "name": "RYB Education Inc ADR Class A"
  },
  {
    "ticker": "RYE",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Equal Weight Energy ETF"
  },
  {
    "ticker": "RYF",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Equal Weight Financials ETF"
  },
  {
    "ticker": "RYH",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Equal Weight Health Care ETF"
  },
  {
    "ticker": "RYI",
    "exchange": "NYSE",
    "name": "Ryerson Holding Corporation"
  },
  {
    "ticker": "RYJ",
    "exchange": "NYSE ARCA",
    "name": "Invesco Raymond James SB-1 Equity ETF"
  },
  {
    "ticker": "RYLD",
    "exchange": "Cboe BZX",
    "name": "Global X Russell 2000 Covered Call ETF"
  },
  {
    "ticker": "RYN",
    "exchange": "NYSE",
    "name": "Rayonier Inc."
  },
  {
    "ticker": "RYT",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Equal Weight Technology ETF"
  },
  {
    "ticker": "RYTM",
    "exchange": "NASDAQ",
    "name": "Rhythm Pharmaceuticals Inc."
  },
  {
    "ticker": "RYU",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Equal Weight Utilities ETF"
  },
  {
    "ticker": "RZA",
    "exchange": "NYSE",
    "name": "Reinsurance Group of America Incorporated Debentures 2012-15.9.42 Sub Fltg Rt"
  },
  {
    "ticker": "RZB",
    "exchange": "NYSE",
    "name": "Reinsurance Group of America Incorporated Debentures 2016-15.06.56 Fixed/Floating Rate"
  },
  {
    "ticker": "RZG",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P Smallcap 600 Pure Growth ETF"
  },
  {
    "ticker": "RZV",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P Smallcap 600 Pure Value ETF"
  },
  {
    "ticker": "SA",
    "exchange": "NYSE",
    "name": "Seabridge Gold Inc"
  },
  {
    "ticker": "SAA",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra SmallCap600"
  },
  {
    "ticker": "SABR",
    "exchange": "NASDAQ",
    "name": "Sabre Corp."
  },
  {
    "ticker": "SACC",
    "exchange": "NYSE American",
    "name": "Sachem Capital Corp 6.875 % Notes 2019-30.12.24 Global"
  },
  {
    "ticker": "SACH",
    "exchange": "NYSE American",
    "name": "Sachem Capital Corp."
  },
  {
    "ticker": "SAF",
    "exchange": "NYSE",
    "name": "Saratoga Investment Corp. 6.25 % Notes 2018-31.08.25"
  },
  {
    "ticker": "SAFE",
    "exchange": "NYSE",
    "name": "Safehold Inc."
  },
  {
    "ticker": "SAFM",
    "exchange": "NASDAQ",
    "name": "Sanderson Farms Inc."
  },
  {
    "ticker": "SAFT",
    "exchange": "NASDAQ",
    "name": "Safety Insurance Group Inc."
  },
  {
    "ticker": "SAGE",
    "exchange": "NASDAQ",
    "name": "SAGE Therapeutics Inc."
  },
  {
    "ticker": "SAH",
    "exchange": "NYSE",
    "name": "Sonic Automotive Inc. Class A"
  },
  {
    "ticker": "SAIA",
    "exchange": "NASDAQ",
    "name": "Saia Inc."
  },
  {
    "ticker": "SAIC",
    "exchange": "NYSE",
    "name": "Science Applications International Corp."
  },
  {
    "ticker": "SAIL",
    "exchange": "NYSE",
    "name": "SailPoint Technologies Holdings Inc."
  },
  {
    "ticker": "SAK",
    "exchange": "NYSE",
    "name": "Saratoga Investment Corp. 7.25 % Notes 2020-30.06.25"
  },
  {
    "ticker": "SAL",
    "exchange": "NASDAQ",
    "name": "Salisbury Bancorp Inc."
  },
  {
    "ticker": "SALM",
    "exchange": "NASDAQ",
    "name": "Salem Media Group Inc. Class A"
  },
  {
    "ticker": "SALT",
    "exchange": "NYSE",
    "name": "Scorpio Bulkers Inc."
  },
  {
    "ticker": "SAM",
    "exchange": "NYSE",
    "name": "Boston Beer Company Inc. Class A"
  },
  {
    "ticker": "SAMA",
    "exchange": "NASDAQ",
    "name": "Schultze Special Purpose Acquisition Corp."
  },
  {
    "ticker": "SAMAU",
    "exchange": "NASDAQ",
    "name": "Schultze Special Purpose Acquisition Corp. Units Cons of 1 Sh + 1 Wt 31.12.23"
  },
  {
    "ticker": "SAMAW",
    "exchange": "NASDAQ",
    "name": "Schultze Special Purpose Acquisition Corp Warrant 2018-31.12.23 on Schultze Special Purpose Acquisition"
  },
  {
    "ticker": "SAMG",
    "exchange": "NASDAQ",
    "name": "Silvercrest Asset Management Group Inc. Class A"
  },
  {
    "ticker": "SAN",
    "exchange": "NYSE",
    "name": "Banco Santander S.A. Sponsored ADR"
  },
  {
    "ticker": "SAN-B",
    "exchange": "NYSE",
    "name": "Banco Santander SA Perp Pfd Series 6"
  },
  {
    "ticker": "SAND",
    "exchange": "NYSE",
    "name": "Sandstorm Gold Ltd."
  },
  {
    "ticker": "SANM",
    "exchange": "NASDAQ",
    "name": "Sanmina-SCI Corporation"
  },
  {
    "ticker": "SANW",
    "exchange": "NASDAQ",
    "name": "S&W Seed Company"
  },
  {
    "ticker": "SAP",
    "exchange": "NYSE",
    "name": "SAP SE Sponsored ADR"
  },
  {
    "ticker": "SAQN",
    "exchange": "NASDAQ",
    "name": "Software Acquisition Group Inc Class A"
  },
  {
    "ticker": "SAQNU",
    "exchange": "NASDAQ",
    "name": "Software Acquisition Group Inc Units Cons of 1 Sh A + 1/2 Wt 01.10.2026"
  },
  {
    "ticker": "SAQNW",
    "exchange": "NASDAQ",
    "name": "Software Acquisition Group Inc Warrant 2019-01.10.2026 on Sftw Acqn Grp-A"
  },
  {
    "ticker": "SAR",
    "exchange": "NYSE",
    "name": "Saratoga Investment Corp."
  },
  {
    "ticker": "SASR",
    "exchange": "NASDAQ",
    "name": "Sandy Spring Bancorp Inc."
  },
  {
    "ticker": "SATS",
    "exchange": "NASDAQ",
    "name": "EchoStar Corporation Class A"
  },
  {
    "ticker": "SAVA",
    "exchange": "NASDAQ",
    "name": "Cassava Sciences Inc."
  },
  {
    "ticker": "SAVE",
    "exchange": "NYSE",
    "name": "Spirit Airlines Inc."
  },
  {
    "ticker": "SB",
    "exchange": "NYSE",
    "name": "Safe Bulkers Inc."
  },
  {
    "ticker": "SB-C",
    "exchange": "NYSE",
    "name": "Safe Bulkers Inc 8 % Cum Red Perp Pfd Shs Series C"
  },
  {
    "ticker": "SB-D",
    "exchange": "NYSE",
    "name": "Safe Bulkers Inc 8 % Cum Red Perp Pfd Shs Series D"
  },
  {
    "ticker": "SBAC",
    "exchange": "NASDAQ",
    "name": "SBA Communications Corp. Class A"
  },
  {
    "ticker": "SBB",
    "exchange": "NYSE ARCA",
    "name": "ProShares Short SmallCap600"
  },
  {
    "ticker": "SBBA",
    "exchange": "NYSE",
    "name": "Scorpio Tankers Inc 7 % Notes 2020-30.06.25 Global"
  },
  {
    "ticker": "SBBP",
    "exchange": "NASDAQ",
    "name": "Strongbridge Biopharma plc"
  },
  {
    "ticker": "SBCF",
    "exchange": "NASDAQ",
    "name": "Seacoast Banking Corporation of Florida"
  },
  {
    "ticker": "SBE",
    "exchange": "NYSE",
    "name": "Switchback Energy Acquisition Corporation Class A"
  },
  {
    "ticker": "SBE=",
    "exchange": "NYSE",
    "name": "Switchback Energy Acquisition Corporation Units Cons of 1 Sh A + 1/3 Wt"
  },
  {
    "ticker": "SBE+",
    "exchange": "NYSE",
    "name": "Switchback Energy Acquisition Corporation Warrant 2019-2024 on Swit Ener Acqn Rg-A"
  },
  {
    "ticker": "SBFG",
    "exchange": "NASDAQ",
    "name": "SB Financial Group Inc"
  },
  {
    "ticker": "SBGI",
    "exchange": "NASDAQ",
    "name": "Sinclair Broadcast Group Inc. Class A"
  },
  {
    "ticker": "SBH",
    "exchange": "NYSE",
    "name": "Sally Beauty Holdings Inc."
  },
  {
    "ticker": "SBI",
    "exchange": "NYSE",
    "name": "Western Asset Intermediate Muni Fund Inc"
  },
  {
    "ticker": "SBIO",
    "exchange": "NYSE ARCA",
    "name": "ALPS Medical Breakthroughs ETF"
  },
  {
    "ticker": "SBLK",
    "exchange": "NASDAQ",
    "name": "Star Bulk Carriers Corp."
  },
  {
    "ticker": "SBLKZ",
    "exchange": "NASDAQ",
    "name": "Star Bulk Carriers Corp. 8.3 % Notes 2017-15.11.22 Global"
  },
  {
    "ticker": "SBM",
    "exchange": "NYSE ARCA",
    "name": "ProShares Short Basic Materials"
  },
  {
    "ticker": "SBNY",
    "exchange": "NASDAQ",
    "name": "Signature Bank"
  },
  {
    "ticker": "SBOW",
    "exchange": "NYSE",
    "name": "SilverBow Resources Inc"
  },
  {
    "ticker": "SBPH",
    "exchange": "NASDAQ",
    "name": "Spring Bank Pharmaceuticals Inc."
  },
  {
    "ticker": "SBR",
    "exchange": "NYSE",
    "name": "Sabine Royalty Trust"
  },
  {
    "ticker": "SBRA",
    "exchange": "NASDAQ",
    "name": "Sabra Health Care REIT Inc."
  },
  {
    "ticker": "SBS",
    "exchange": "NYSE",
    "name": "Companhia de Saneamento Basico do Estado de Sao Paulo SABESP Sponsored ADR"
  },
  {
    "ticker": "SBSI",
    "exchange": "NASDAQ",
    "name": "Southside Bancshares Inc."
  },
  {
    "ticker": "SBSW",
    "exchange": "NYSE",
    "name": "Sibanye Stillwater Limited Sponsored ADR"
  },
  {
    "ticker": "SBT",
    "exchange": "NASDAQ",
    "name": "Sterling Bancorp Inc."
  },
  {
    "ticker": "SBUG",
    "exchange": "NYSE ARCA",
    "name": "iPath Silver Exchange-Traded Notes"
  },
  {
    "ticker": "SBUX",
    "exchange": "NASDAQ",
    "name": "Starbucks Corporation"
  },
  {
    "ticker": "SC",
    "exchange": "NYSE",
    "name": "Santander Consumer USA Holdings Inc."
  },
  {
    "ticker": "SCA",
    "exchange": "NYSE",
    "name": "Stellus Capital Investment Corp 5.75 % Notes 2017-15.09.22"
  },
  {
    "ticker": "SCC",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort Consumer Services"
  },
  {
    "ticker": "SCCB",
    "exchange": "NYSE American",
    "name": "Sachem Capital Corp 7.125 % Notes 2019-30.06.24"
  },
  {
    "ticker": "SCCO",
    "exchange": "NYSE",
    "name": "Southern Copper Corporation"
  },
  {
    "ticker": "SCD",
    "exchange": "NYSE",
    "name": "LMP Capital and Income Fund Inc"
  },
  {
    "ticker": "SCE-B",
    "exchange": "NYSE American",
    "name": "Southern California Edison Co 4.08 % Cum Pfd Registered Shs Voting"
  },
  {
    "ticker": "SCE-C",
    "exchange": "NYSE American",
    "name": "Southern California Edison Co 4.24 % Pref.Shs"
  },
  {
    "ticker": "SCE-D",
    "exchange": "NYSE American",
    "name": "Southern California Edison Co 4.32 % Cum Pfd Registered Voting"
  },
  {
    "ticker": "SCE-E",
    "exchange": "NYSE American",
    "name": "Southern California Edison Co 4.78 % Cum Pfd Registered Voting"
  },
  {
    "ticker": "SCE-G",
    "exchange": "NYSE",
    "name": "SCE Trust II 5 1/10 % Cum Trust Pfd Secs"
  },
  {
    "ticker": "SCE-H",
    "exchange": "NYSE",
    "name": "SCE Trust III Trust Preference Security 2014-Without fixed maturity Gtd on Pref Shs Ser H Fltg Rt"
  },
  {
    "ticker": "SCE-J",
    "exchange": "NYSE",
    "name": "SCE Trust IV Cum Trust Preferred Secs Series J"
  },
  {
    "ticker": "SCE-K",
    "exchange": "NYSE",
    "name": "SCE Trust V Cum Trust Preferred Secs Series K"
  },
  {
    "ticker": "SCE-L",
    "exchange": "NYSE",
    "name": "SCE Trust VI 5% Cum Red Pfd Secs Series L"
  },
  {
    "ticker": "SCHA",
    "exchange": "NYSE ARCA",
    "name": "Schwab U.S. Small-Cap ETF"
  },
  {
    "ticker": "SCHB",
    "exchange": "NYSE ARCA",
    "name": "Schwab U.S. Broad Market ETF"
  },
  {
    "ticker": "SCHC",
    "exchange": "NYSE ARCA",
    "name": "Schwab International Small-Cap Equity ETF"
  },
  {
    "ticker": "SCHD",
    "exchange": "NYSE ARCA",
    "name": "Schwab US Dividend Equity ETF"
  },
  {
    "ticker": "SCHE",
    "exchange": "NYSE ARCA",
    "name": "Schwab Emerging Markets Equity ETF"
  },
  {
    "ticker": "SCHF",
    "exchange": "NYSE ARCA",
    "name": "Schwab International Equity ETF"
  },
  {
    "ticker": "SCHG",
    "exchange": "NYSE ARCA",
    "name": "Schwab U.S. Large-Cap Growth ETF"
  },
  {
    "ticker": "SCHH",
    "exchange": "NYSE ARCA",
    "name": "Schwab U.S. REIT ETF"
  },
  {
    "ticker": "SCHI",
    "exchange": "NYSE ARCA",
    "name": "Schwab 5-10 Year Corporate Bond ETF"
  },
  {
    "ticker": "SCHJ",
    "exchange": "NYSE ARCA",
    "name": "Schwab 1-5 Year Corporate Bond ETF"
  },
  {
    "ticker": "SCHK",
    "exchange": "NYSE ARCA",
    "name": "Schwab 1000 Index ETF"
  },
  {
    "ticker": "SCHL",
    "exchange": "NASDAQ",
    "name": "Scholastic Corporation"
  },
  {
    "ticker": "SCHM",
    "exchange": "NYSE ARCA",
    "name": "Schwab U.S. Mid-Cap ETF"
  },
  {
    "ticker": "SCHN",
    "exchange": "NASDAQ",
    "name": "Schnitzer Steel Industries Inc. Class A"
  },
  {
    "ticker": "SCHO",
    "exchange": "NYSE ARCA",
    "name": "Schwab Short-Term US Treasury ETF"
  },
  {
    "ticker": "SCHP",
    "exchange": "NYSE ARCA",
    "name": "Schwab US TIPS ETF"
  },
  {
    "ticker": "SCHQ",
    "exchange": "NYSE ARCA",
    "name": "Schwab Long-Term U.S. Treasury ETF"
  },
  {
    "ticker": "SCHR",
    "exchange": "NYSE ARCA",
    "name": "Schwab Intermediate-Term US Treasury ETF"
  },
  {
    "ticker": "SCHV",
    "exchange": "NYSE ARCA",
    "name": "Schwab U.S. Large-Cap Value ETF"
  },
  {
    "ticker": "SCHW",
    "exchange": "NYSE",
    "name": "Charles Schwab Corporation"
  },
  {
    "ticker": "SCHW-C",
    "exchange": "NYSE",
    "name": "Charles Schwab Corp Deposit Shs Repr 1/40th 6 % Non-Cum Pfd Shs Series C"
  },
  {
    "ticker": "SCHW-D",
    "exchange": "NYSE",
    "name": "Charles Schwab Corp Deposit Shs Repr 1/40th % Non-Cum Pfd Shs Series D"
  },
  {
    "ticker": "SCHX",
    "exchange": "NYSE ARCA",
    "name": "Schwab U.S. Large-Cap ETF"
  },
  {
    "ticker": "SCHZ",
    "exchange": "NYSE ARCA",
    "name": "Schwab US Aggregate Bond ETF"
  },
  {
    "ticker": "SCI",
    "exchange": "NYSE",
    "name": "Service Corporation International"
  },
  {
    "ticker": "SCID",
    "exchange": "NYSE ARCA",
    "name": "Global X Scientific Beta Europe ETF"
  },
  {
    "ticker": "SCIJ",
    "exchange": "NYSE ARCA",
    "name": "Global X Scientific Beta Japan ETF"
  },
  {
    "ticker": "SCIU",
    "exchange": "NYSE ARCA",
    "name": "Global X Scientific Beta US ETF"
  },
  {
    "ticker": "SCIX",
    "exchange": "NYSE ARCA",
    "name": "Global X Scientific Beta Asia ex-Japan ETF"
  },
  {
    "ticker": "SCJ",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Japan Small-Cap ETF"
  },
  {
    "ticker": "SCKT",
    "exchange": "NASDAQ",
    "name": "Socket Mobile Inc."
  },
  {
    "ticker": "SCL",
    "exchange": "NYSE",
    "name": "Stepan Company"
  },
  {
    "ticker": "SCM",
    "exchange": "NYSE",
    "name": "Stellus Capital Investment Corp."
  },
  {
    "ticker": "SCO",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort Bloomberg Crude Oil"
  },
  {
    "ticker": "SCON",
    "exchange": "NASDAQ",
    "name": "Superconductor Technologies Inc."
  },
  {
    "ticker": "SCOR",
    "exchange": "NASDAQ",
    "name": "comScore Inc."
  },
  {
    "ticker": "SCPE",
    "exchange": "NYSE",
    "name": "SC Health Corp Class A"
  },
  {
    "ticker": "SCPE=",
    "exchange": "NYSE",
    "name": "SC Health Corp Units Cons of 1 Sh A + 1/2 Wt"
  },
  {
    "ticker": "SCPE+",
    "exchange": "NYSE",
    "name": "SC Health Corp Warrant -on SC Hlth"
  },
  {
    "ticker": "SCPH",
    "exchange": "NASDAQ",
    "name": "scPharmaceuticals Inc."
  },
  {
    "ticker": "SCPL",
    "exchange": "NASDAQ",
    "name": "SciPlay Corp. Class A"
  },
  {
    "ticker": "SCS",
    "exchange": "NYSE",
    "name": "SteelcNYSE American Inc. Class A"
  },
  {
    "ticker": "SCSC",
    "exchange": "NASDAQ",
    "name": "ScanSource Inc."
  },
  {
    "ticker": "SCU",
    "exchange": "NYSE",
    "name": "Sculptor Capital Management Inc. Class A"
  },
  {
    "ticker": "SCVL",
    "exchange": "NASDAQ",
    "name": "Shoe Carnival Inc."
  },
  {
    "ticker": "SCVX",
    "exchange": "NYSE",
    "name": "SCVX Corp. Class A"
  },
  {
    "ticker": "SCVX=",
    "exchange": "NYSE",
    "name": "SCVX Corp. Units Cons of 1 Shs + 1 Wt"
  },
  {
    "ticker": "SCVX+",
    "exchange": "NYSE",
    "name": "SCVX Corp. Warrant -24.01.25 on SCVX Corp"
  },
  {
    "ticker": "SCWX",
    "exchange": "NASDAQ",
    "name": "SecureWorks Corp. Class A"
  },
  {
    "ticker": "SCX",
    "exchange": "NYSE",
    "name": "L.S. Starrett Company Class A"
  },
  {
    "ticker": "SCYX",
    "exchange": "NASDAQ",
    "name": "SCYNEXIS Inc."
  },
  {
    "ticker": "SCZ",
    "exchange": "NASDAQ",
    "name": "iShares MSCI EAFE Small-Cap ETF"
  },
  {
    "ticker": "SD",
    "exchange": "NYSE",
    "name": "SandRidge Energy Inc."
  },
  {
    "ticker": "SDC",
    "exchange": "NASDAQ",
    "name": "SmileDirectClub Inc Class A"
  },
  {
    "ticker": "SDCI",
    "exchange": "NYSE ARCA",
    "name": "USCF SummerHaven Dynamic Commodity Strategy No K-1 Fund"
  },
  {
    "ticker": "SDD",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort SmallCap600"
  },
  {
    "ticker": "SDEM",
    "exchange": "NYSE ARCA",
    "name": "Global X MSCI SuperDividend Emerging Markets ETF"
  },
  {
    "ticker": "SDG",
    "exchange": "NASDAQ",
    "name": "iShares MSCI Global Impact ETF"
  },
  {
    "ticker": "SDGA",
    "exchange": "NYSE ARCA",
    "name": "Impact Shares Sustainable Development Goals Global ETF"
  },
  {
    "ticker": "SDGR",
    "exchange": "NASDAQ",
    "name": "Schrodinger Inc."
  },
  {
    "ticker": "SDIV",
    "exchange": "NYSE ARCA",
    "name": "Global X Superdividend ETF"
  },
  {
    "ticker": "SDOG",
    "exchange": "NYSE ARCA",
    "name": "ALPS Sector Dividend Dogs ETF"
  },
  {
    "ticker": "SDOW",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraPro Short Dow30"
  },
  {
    "ticker": "SDP",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort Utilities"
  },
  {
    "ticker": "SDPI",
    "exchange": "NYSE American",
    "name": "Superior Drilling Products Inc."
  },
  {
    "ticker": "SDS",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort S&P500"
  },
  {
    "ticker": "SDVY",
    "exchange": "NASDAQ",
    "name": "First Trust SMID Cap Rising Dividend Achievers ETF"
  },
  {
    "ticker": "SDY",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Dividend ETF"
  },
  {
    "ticker": "SDYL",
    "exchange": "NYSE ARCA",
    "name": "ETRACS Monthly Pay 2xLeveraged S&P Dividend ETN"
  },
  {
    "ticker": "SE",
    "exchange": "NYSE",
    "name": "Sea Ltd. (Singapore) Sponsored ADR Class A"
  },
  {
    "ticker": "SEAC",
    "exchange": "NASDAQ",
    "name": "SeaChange International Inc."
  },
  {
    "ticker": "SEAS",
    "exchange": "NYSE",
    "name": "SeaWorld Entertainment Inc."
  },
  {
    "ticker": "SEB",
    "exchange": "NYSE American",
    "name": "Seaboard Corporation"
  },
  {
    "ticker": "SECO",
    "exchange": "NASDAQ",
    "name": "Secoo Holding Limited Sponsored ADR Class A"
  },
  {
    "ticker": "SECT",
    "exchange": "Cboe BZX",
    "name": "Main Sector Rotation ETF"
  },
  {
    "ticker": "SEDG",
    "exchange": "NASDAQ",
    "name": "SolarEdge Technologies Inc."
  },
  {
    "ticker": "SEE",
    "exchange": "NYSE",
    "name": "Sealed Air Corporation"
  },
  {
    "ticker": "SEED",
    "exchange": "NASDAQ",
    "name": "Origin Agritech Ltd."
  },
  {
    "ticker": "SEEL",
    "exchange": "NASDAQ",
    "name": "Seelos Therapeutics Inc."
  },
  {
    "ticker": "SEF",
    "exchange": "NYSE ARCA",
    "name": "ProShares Short Financials"
  },
  {
    "ticker": "SEIC",
    "exchange": "NASDAQ",
    "name": "SEI Investments Company"
  },
  {
    "ticker": "SEIX",
    "exchange": "NYSE ARCA",
    "name": "Virtus Seix Senior Loan ETF"
  },
  {
    "ticker": "SELB",
    "exchange": "NASDAQ",
    "name": "Selecta Biosciences Inc."
  },
  {
    "ticker": "SELF",
    "exchange": "NASDAQ",
    "name": "Global Self Storage Inc."
  },
  {
    "ticker": "SEM",
    "exchange": "NYSE",
    "name": "Select Medical Holdings Corporation"
  },
  {
    "ticker": "SENEA",
    "exchange": "NASDAQ",
    "name": "Seneca Foods Corporation Class A"
  },
  {
    "ticker": "SENEB",
    "exchange": "NASDAQ",
    "name": "Seneca Foods Corporation Class B"
  },
  {
    "ticker": "SENS",
    "exchange": "NYSE American",
    "name": "Senseonics Holdings Inc."
  },
  {
    "ticker": "SERV",
    "exchange": "NYSE",
    "name": "ServiceMaster Global Holdings Inc."
  },
  {
    "ticker": "SESN",
    "exchange": "NASDAQ",
    "name": "Sesen Bio Inc."
  },
  {
    "ticker": "SF",
    "exchange": "NYSE",
    "name": "Stifel Financial Corp."
  },
  {
    "ticker": "SF-A",
    "exchange": "NYSE",
    "name": "Stifel Financial Corp Deposit Shs Repr 1/1000th Non-Cum Pfd Shs Series A"
  },
  {
    "ticker": "SF-B",
    "exchange": "NYSE",
    "name": "Stifel Financial Corp. Depositary Shs Repr 1/1000th 6.25 % Non Cum Pfd Registered Shs Series B"
  },
  {
    "ticker": "SF-C",
    "exchange": "NYSE",
    "name": "Stifel Financial Corp Depositary Shs Repr 1/1000th Non Cum Red Perp Pfd Registered Shs C"
  },
  {
    "ticker": "SFB",
    "exchange": "NYSE",
    "name": "Stifel Financial Corp 5.2 % Notes 2017-15.10.47 Global"
  },
  {
    "ticker": "SFBC",
    "exchange": "NASDAQ",
    "name": "Sound Financial Bancorp Inc."
  },
  {
    "ticker": "SFBS",
    "exchange": "NASDAQ",
    "name": "ServisFirst Bancshares Inc"
  },
  {
    "ticker": "SFE",
    "exchange": "NYSE",
    "name": "Safeguard Scientifics Inc."
  },
  {
    "ticker": "SFET",
    "exchange": "NASDAQ",
    "name": "Safe-T Group Ltd Sponsored ADR"
  },
  {
    "ticker": "SFHY",
    "exchange": "Cboe BZX",
    "name": "WisdomTree U.S. Short Term High Yield Corporate Bond Fund"
  },
  {
    "ticker": "SFIG",
    "exchange": "Cboe BZX",
    "name": "WisdomTree U.S. Short Term Corporate Bond Fund"
  },
  {
    "ticker": "SFIX",
    "exchange": "NASDAQ",
    "name": "Stitch Fix Inc. Class A"
  },
  {
    "ticker": "SFL",
    "exchange": "NYSE",
    "name": "SFL Corporation Limited"
  },
  {
    "ticker": "SFM",
    "exchange": "NASDAQ",
    "name": "Sprouts Farmers Markets Inc."
  },
  {
    "ticker": "SFNC",
    "exchange": "NASDAQ",
    "name": "Simmons First National Corporation Class A"
  },
  {
    "ticker": "SFST",
    "exchange": "NASDAQ",
    "name": "Southern First Bancshares Inc."
  },
  {
    "ticker": "SFTW",
    "exchange": "NYSE",
    "name": "Osprey Technology Acquisition Corp Class A"
  },
  {
    "ticker": "SFTW=",
    "exchange": "NYSE",
    "name": "Osprey Technology Acquisition Corp Units Cons of 1 Sh A + 1/2 Wt 01.01.24"
  },
  {
    "ticker": "SFTW+",
    "exchange": "NYSE",
    "name": "Osprey Technology Acquisition Corp Warrant 2019-30.10.24 on Ospr Tech Acqn-A"
  },
  {
    "ticker": "SFUN",
    "exchange": "NYSE",
    "name": "Fang Holdings Limited Sponsored ADR Class A"
  },
  {
    "ticker": "SFY",
    "exchange": "NYSE ARCA",
    "name": "SoFi Select 500 ETF"
  },
  {
    "ticker": "SFYF",
    "exchange": "NYSE ARCA",
    "name": "SoFi 50 ETF"
  },
  {
    "ticker": "SFYX",
    "exchange": "NYSE ARCA",
    "name": "SoFi Next 500 ETF"
  },
  {
    "ticker": "SG",
    "exchange": "NASDAQ",
    "name": "Sirius International Insurance Group Ltd."
  },
  {
    "ticker": "SGA",
    "exchange": "NASDAQ",
    "name": "Saga Communications Inc. Class A"
  },
  {
    "ticker": "SGBX",
    "exchange": "NASDAQ",
    "name": "SG Blocks Inc."
  },
  {
    "ticker": "SGC",
    "exchange": "NASDAQ",
    "name": "Superior Group of Companies Inc."
  },
  {
    "ticker": "SGDJ",
    "exchange": "NYSE ARCA",
    "name": "Sprott Junior Gold Miners ETF"
  },
  {
    "ticker": "SGDM",
    "exchange": "NYSE ARCA",
    "name": "Sprott Gold Miners ETF"
  },
  {
    "ticker": "SGEN",
    "exchange": "NASDAQ",
    "name": "Seattle Genetics Inc."
  },
  {
    "ticker": "SGG",
    "exchange": "NYSE ARCA",
    "name": "iPath Series B Bloomberg Sugar Subindex Total Return ETN"
  },
  {
    "ticker": "SGH",
    "exchange": "NASDAQ",
    "name": "SMART Global Holdings Inc."
  },
  {
    "ticker": "SGLB",
    "exchange": "NASDAQ",
    "name": "Sigma Labs Inc."
  },
  {
    "ticker": "SGLBW",
    "exchange": "NASDAQ",
    "name": "Sigma Labs Inc Warrant 2017-2022 on Sigma Labs"
  },
  {
    "ticker": "SGMA",
    "exchange": "NASDAQ",
    "name": "SigmaTron International Inc."
  },
  {
    "ticker": "SGMO",
    "exchange": "NASDAQ",
    "name": "Sangamo Therapeutics Inc."
  },
  {
    "ticker": "SGMS",
    "exchange": "NASDAQ",
    "name": "Scientific Games Corporation"
  },
  {
    "ticker": "SGOC",
    "exchange": "NASDAQ",
    "name": "SGOCO Group Ltd."
  },
  {
    "ticker": "SGOL",
    "exchange": "NYSE ARCA",
    "name": "Aberdeen Standard Physical Gold Shares ETF"
  },
  {
    "ticker": "SGOV",
    "exchange": "NYSE ARCA",
    "name": "iShares 0-3 Month Treasury Bond ETF"
  },
  {
    "ticker": "SGRP",
    "exchange": "NASDAQ",
    "name": "SPAR Group Inc."
  },
  {
    "ticker": "SGRY",
    "exchange": "NASDAQ",
    "name": "Surgery Partners Inc."
  },
  {
    "ticker": "SGU",
    "exchange": "NYSE",
    "name": "Star Group LP"
  },
  {
    "ticker": "SH",
    "exchange": "NYSE ARCA",
    "name": "ProShares Short S&P500"
  },
  {
    "ticker": "SHAG",
    "exchange": "Cboe BZX",
    "name": "WisdomTree Yield Enhanced U.S. Short-Term Aggregate Bond Fund"
  },
  {
    "ticker": "SHAK",
    "exchange": "NYSE",
    "name": "Shake Shack Inc. Class A"
  },
  {
    "ticker": "SHBI",
    "exchange": "NASDAQ",
    "name": "Shore Bancshares Inc."
  },
  {
    "ticker": "SHE",
    "exchange": "NYSE ARCA",
    "name": "SPDR SSGA Gender Diversity Index ETF"
  },
  {
    "ticker": "SHEN",
    "exchange": "NASDAQ",
    "name": "Shenandoah Telecommunications Company"
  },
  {
    "ticker": "SHG",
    "exchange": "NYSE",
    "name": "Shinhan Financial Group Co. Ltd. Sponsored ADR"
  },
  {
    "ticker": "SHI",
    "exchange": "NYSE",
    "name": "Sinopec Shanghai Petrochemical Co. Ltd. Sponsored ADR Class H"
  },
  {
    "ticker": "SHIP",
    "exchange": "NASDAQ",
    "name": "Seanergy Maritime Holdings Corp."
  },
  {
    "ticker": "SHIPW",
    "exchange": "NASDAQ",
    "name": "Seanergy Maritime Holdings Corp Warrant A 2016-10.11.21 on Seanergy Maritime Holdings"
  },
  {
    "ticker": "SHIPZ",
    "exchange": "NASDAQ",
    "name": "Seanergy Maritime Holdings Corp Warrant 2019-13.05.22 on Seanergy Maritime Holdings Class B"
  },
  {
    "ticker": "SHLL",
    "exchange": "NYSE",
    "name": "Tortoise Acquisition Corp. Class A"
  },
  {
    "ticker": "SHLL=",
    "exchange": "NYSE",
    "name": "Tortoise Acquisition Corp. Units Cons of 1 Sh -A- + 0.5 Wt"
  },
  {
    "ticker": "SHLL+",
    "exchange": "NYSE",
    "name": "Tortoise Acquisition Corp Warrant 2019-04.03.24 on Tortoise Acqn-A"
  },
  {
    "ticker": "SHLO",
    "exchange": "NASDAQ",
    "name": "Shiloh Industries Inc."
  },
  {
    "ticker": "SHLX",
    "exchange": "NYSE",
    "name": "Shell Midstream Partners LP"
  },
  {
    "ticker": "SHM",
    "exchange": "NYSE ARCA",
    "name": "SPDR Nuveen Bloomberg Barclays Short Term Municipal Bond ETF"
  },
  {
    "ticker": "SHO",
    "exchange": "NYSE",
    "name": "Sunstone Hotel Investors Inc."
  },
  {
    "ticker": "SHO-E",
    "exchange": "NYSE",
    "name": "Sunstone Hotel Investors Inc. % Cum Red Pfd Shs Series E"
  },
  {
    "ticker": "SHO-F",
    "exchange": "NYSE",
    "name": "Sunstone Hotel Investors Inc. % Cum Red Pfd Shs Series F"
  },
  {
    "ticker": "SHOO",
    "exchange": "NASDAQ",
    "name": "Steven Madden Ltd."
  },
  {
    "ticker": "SHOP",
    "exchange": "NYSE",
    "name": "Shopify Inc. Class A"
  },
  {
    "ticker": "SHSP",
    "exchange": "NASDAQ",
    "name": "SharpSpring Inc."
  },
  {
    "ticker": "SHV",
    "exchange": "NASDAQ",
    "name": "iShares Short Treasury Bond ETF"
  },
  {
    "ticker": "SHW",
    "exchange": "NYSE",
    "name": "Sherwin-Williams Company"
  },
  {
    "ticker": "SHY",
    "exchange": "NASDAQ",
    "name": "iShares 1-3 Year Treasury Bond ETF"
  },
  {
    "ticker": "SHYD",
    "exchange": "Cboe BZX",
    "name": "VanEck Vectors Short High-Yield Municipal Index ETF"
  },
  {
    "ticker": "SHYF",
    "exchange": "NASDAQ",
    "name": "Shyft Group Inc."
  },
  {
    "ticker": "SHYG",
    "exchange": "NYSE ARCA",
    "name": "iShares 0-5 Year High Yield Corporate Bond ETF"
  },
  {
    "ticker": "SHYL",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers Short Duration High Yield Bond ETF"
  },
  {
    "ticker": "SI",
    "exchange": "NYSE",
    "name": "Silvergate Capital Corp. Class A"
  },
  {
    "ticker": "SIBN",
    "exchange": "NASDAQ",
    "name": "SI-BONE Inc."
  },
  {
    "ticker": "SIC",
    "exchange": "NASDAQ",
    "name": "Select Interior Concepts Inc. Class A"
  },
  {
    "ticker": "SID",
    "exchange": "NYSE",
    "name": "Companhia Siderurgica Nacional Sponsored ADR"
  },
  {
    "ticker": "SIEB",
    "exchange": "NASDAQ",
    "name": "Siebert Financial Corp."
  },
  {
    "ticker": "SIEN",
    "exchange": "NASDAQ",
    "name": "Sientra Inc."
  },
  {
    "ticker": "SIF",
    "exchange": "NYSE American",
    "name": "SIFCO Industries Inc."
  },
  {
    "ticker": "SIFY",
    "exchange": "NASDAQ",
    "name": "Sify Technologies Limited Sponsored ADR"
  },
  {
    "ticker": "SIG",
    "exchange": "NYSE",
    "name": "Signet Jewelers Limited"
  },
  {
    "ticker": "SIGA",
    "exchange": "NASDAQ",
    "name": "SIGA Technologies Inc"
  },
  {
    "ticker": "SIGI",
    "exchange": "NASDAQ",
    "name": "Selective Insurance Group Inc."
  },
  {
    "ticker": "SII",
    "exchange": "NYSE",
    "name": "Sprott Inc."
  },
  {
    "ticker": "SIJ",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort Industrials"
  },
  {
    "ticker": "SIL",
    "exchange": "NYSE ARCA",
    "name": "Global X Silver Miners ETF"
  },
  {
    "ticker": "SILC",
    "exchange": "NASDAQ",
    "name": "Silicom Ltd."
  },
  {
    "ticker": "SILJ",
    "exchange": "NYSE ARCA",
    "name": "ETFMG Prime Junior Silver Miners ETF"
  },
  {
    "ticker": "SILK",
    "exchange": "NASDAQ",
    "name": "Silk Road Medical Inc."
  },
  {
    "ticker": "SILV",
    "exchange": "NYSE American",
    "name": "SilverCrest Metals Inc."
  },
  {
    "ticker": "SIM",
    "exchange": "NYSE American",
    "name": "Grupo SIMEC SAB de CV Unsponsored ADR Class B"
  },
  {
    "ticker": "SIMO",
    "exchange": "NASDAQ",
    "name": "Silicon Motion Technology Corporation Sponsored ADR"
  },
  {
    "ticker": "SIMS",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Kensho Intelligent Structures ETF"
  },
  {
    "ticker": "SINA",
    "exchange": "NASDAQ",
    "name": "SINA Corp."
  },
  {
    "ticker": "SINO",
    "exchange": "NASDAQ",
    "name": "Sino-Global Shipping America Ltd."
  },
  {
    "ticker": "SINT",
    "exchange": "NASDAQ",
    "name": "SINTX Technologies Inc."
  },
  {
    "ticker": "SIRI",
    "exchange": "NASDAQ",
    "name": "Sirius XM Holdings Inc."
  },
  {
    "ticker": "SITC",
    "exchange": "NYSE",
    "name": "SITE Centers Corp."
  },
  {
    "ticker": "SITC-A",
    "exchange": "NYSE",
    "name": "SITE Centers Corp. Depositary Shs Repr 1/20th 6.375 % Cum Conv Red Pfd Registered Shs A"
  },
  {
    "ticker": "SITC-K",
    "exchange": "NYSE",
    "name": "SITE Centers Corp. Depositary Shs Repr 1/20th 6.25 % Cum Conv Red Pfd Shs K"
  },
  {
    "ticker": "SITE",
    "exchange": "NYSE",
    "name": "SiteOne Landscape Supply Inc."
  },
  {
    "ticker": "SITM",
    "exchange": "NASDAQ",
    "name": "SiTime Corporation"
  },
  {
    "ticker": "SIVB",
    "exchange": "NASDAQ",
    "name": "SVB Financial Group"
  },
  {
    "ticker": "SIVBP",
    "exchange": "NASDAQ",
    "name": "SVB Financial Group Depositary Shs Repr 1/40th 5.25 % Non-Cum Red Perp Pfd Rg Shs Ser -A-"
  },
  {
    "ticker": "SIVR",
    "exchange": "NYSE ARCA",
    "name": "Aberdeen Standard Physical Silver Shares ETF"
  },
  {
    "ticker": "SIX",
    "exchange": "NYSE",
    "name": "Six Flags Entertainment Corporation"
  },
  {
    "ticker": "SIXA",
    "exchange": "NYSE ARCA",
    "name": "6 Meridian Mega Cap Equity ETF"
  },
  {
    "ticker": "SIXH",
    "exchange": "NYSE ARCA",
    "name": "6 Meridian Hedged Equity-Index Option Strategy ETF"
  },
  {
    "ticker": "SIXL",
    "exchange": "NYSE ARCA",
    "name": "6 Meridian Low Beta Equity Strategy ETF"
  },
  {
    "ticker": "SIXS",
    "exchange": "NYSE ARCA",
    "name": "6 Meridian Small Cap Equity ETF"
  },
  {
    "ticker": "SIZE",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI USA Size Factor ETF"
  },
  {
    "ticker": "SJ",
    "exchange": "NASDAQ",
    "name": "Scienjoy Holding Corporation"
  },
  {
    "ticker": "SJB",
    "exchange": "NYSE ARCA",
    "name": "ProShares Short High Yield"
  },
  {
    "ticker": "SJI",
    "exchange": "NYSE",
    "name": "South Jersey Industries Inc."
  },
  {
    "ticker": "SJIJ",
    "exchange": "NYSE",
    "name": "South Jersey Industries Inc 5.625 % Notes 2019-16.09.79 Global"
  },
  {
    "ticker": "SJIU",
    "exchange": "NYSE",
    "name": "South Jersey Industries Inc. Equity Units Cons of 1/20 Nts 15.04.31 + 1 PC 15.04.21"
  },
  {
    "ticker": "SJM",
    "exchange": "NYSE",
    "name": "J.M. Smucker Company"
  },
  {
    "ticker": "SJNK",
    "exchange": "NYSE ARCA",
    "name": "SPDR Bloomberg Barclays Short Term High Yield Bond ETF"
  },
  {
    "ticker": "SJR",
    "exchange": "NYSE",
    "name": "Shaw Communications Inc. Class B"
  },
  {
    "ticker": "SJT",
    "exchange": "NYSE",
    "name": "San Juan Basin Royalty Trust"
  },
  {
    "ticker": "SJW",
    "exchange": "NYSE",
    "name": "SJW Group"
  },
  {
    "ticker": "SKF",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort Financials"
  },
  {
    "ticker": "SKM",
    "exchange": "NYSE",
    "name": "SK Telecom Co. Ltd. Sponsored ADR"
  },
  {
    "ticker": "SKOR",
    "exchange": "NASDAQ",
    "name": "FlexShares Credit-Scored US Corporate Bond Index Fund"
  },
  {
    "ticker": "SKT",
    "exchange": "NYSE",
    "name": "Tanger Factory Outlet Centers Inc."
  },
  {
    "ticker": "SKX",
    "exchange": "NYSE",
    "name": "Skechers U.S.A. Inc. Class A"
  },
  {
    "ticker": "SKY",
    "exchange": "NYSE",
    "name": "Skyline Champion Corp."
  },
  {
    "ticker": "SKYS",
    "exchange": "NASDAQ",
    "name": "Sky Solar Holdings Ltd. Sponsored ADR"
  },
  {
    "ticker": "SKYW",
    "exchange": "NASDAQ",
    "name": "SkyWest Inc"
  },
  {
    "ticker": "SKYY",
    "exchange": "NASDAQ",
    "name": "First Trust Cloud Computing ETF"
  },
  {
    "ticker": "SLAB",
    "exchange": "NASDAQ",
    "name": "Silicon Laboratories Inc."
  },
  {
    "ticker": "SLB",
    "exchange": "NYSE",
    "name": "Schlumberger NV"
  },
  {
    "ticker": "SLCA",
    "exchange": "NYSE",
    "name": "U.S. Silica Holdings Inc."
  },
  {
    "ticker": "SLCT",
    "exchange": "NASDAQ",
    "name": "Select Bancorp Inc"
  },
  {
    "ticker": "SLDB",
    "exchange": "NASDAQ",
    "name": "Solid Biosciences Inc."
  },
  {
    "ticker": "SLF",
    "exchange": "NYSE",
    "name": "Sun Life Financial Inc."
  },
  {
    "ticker": "SLG",
    "exchange": "NYSE",
    "name": "SL Green Realty Corp."
  },
  {
    "ticker": "SLG-I",
    "exchange": "NYSE",
    "name": "SL Green Realty Corporation 6 1/2 % Cum Red Pfd Shs Series I"
  },
  {
    "ticker": "SLGG",
    "exchange": "NASDAQ",
    "name": "Super League Gaming Inc."
  },
  {
    "ticker": "SLGL",
    "exchange": "NASDAQ",
    "name": "Sol-Gel Technologies Ltd."
  },
  {
    "ticker": "SLGN",
    "exchange": "NASDAQ",
    "name": "Silgan Holdings Inc."
  },
  {
    "ticker": "SLM",
    "exchange": "NASDAQ",
    "name": "SLM Corp"
  },
  {
    "ticker": "SLMBP",
    "exchange": "NASDAQ",
    "name": "SLM Corp Floating-Rate Non-Cum Pfd Shs Series B"
  },
  {
    "ticker": "SLNO",
    "exchange": "NASDAQ",
    "name": "Soleno Therapeutics Inc"
  },
  {
    "ticker": "SLP",
    "exchange": "NASDAQ",
    "name": "Simulations Plus Inc."
  },
  {
    "ticker": "SLQD",
    "exchange": "NASDAQ",
    "name": "iShares 0-5 Year Investment Grade Corporate Bond ETF"
  },
  {
    "ticker": "SLQT",
    "exchange": "NYSE",
    "name": "SelectQuote Inc"
  },
  {
    "ticker": "SLRC",
    "exchange": "NASDAQ",
    "name": "Solar Capital Ltd."
  },
  {
    "ticker": "SLRX",
    "exchange": "NASDAQ",
    "name": "Salarius Pharmaceuticals Inc."
  },
  {
    "ticker": "SLS",
    "exchange": "NASDAQ",
    "name": "SELLAS Life Sciences Group Inc."
  },
  {
    "ticker": "SLT",
    "exchange": "Cboe BZX",
    "name": "Salt TruBeta High Exposure ETF"
  },
  {
    "ticker": "SLV",
    "exchange": "NYSE ARCA",
    "name": "iShares Silver Trust"
  },
  {
    "ticker": "SLVO",
    "exchange": "NASDAQ",
    "name": "Credit Suisse X-Links Silver Shares Covered Call ETN"
  },
  {
    "ticker": "SLVP",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI Global Silver Miners ETF"
  },
  {
    "ticker": "SLX",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Steel ETF"
  },
  {
    "ticker": "SLY",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P 600 Small Cap ETF"
  },
  {
    "ticker": "SLYG",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P 600 Small Cap Growth ETF"
  },
  {
    "ticker": "SLYV",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P 600 Small Cap Value ETF"
  },
  {
    "ticker": "SM",
    "exchange": "NYSE",
    "name": "SM Energy Company"
  },
  {
    "ticker": "SMAR",
    "exchange": "NYSE",
    "name": "Smartsheet Inc. Class A"
  },
  {
    "ticker": "SMB",
    "exchange": "Cboe BZX",
    "name": "VanEck Vectors AMT-Free Short Municipal Index ETF"
  },
  {
    "ticker": "SMBC",
    "exchange": "NASDAQ",
    "name": "Southern Missouri Bancorp Inc."
  },
  {
    "ticker": "SMBK",
    "exchange": "NASDAQ",
    "name": "SmartFinancial Inc."
  },
  {
    "ticker": "SMCI",
    "exchange": "NASDAQ",
    "name": "Super Micro Computer Inc."
  },
  {
    "ticker": "SMCP",
    "exchange": "NASDAQ",
    "name": "AlphaMark Actively Managed Small Cap ETF"
  },
  {
    "ticker": "SMDD",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraPro Short MidCap400"
  },
  {
    "ticker": "SMDV",
    "exchange": "Cboe BZX",
    "name": "ProShares Russell 2000 Dividend Growers ETF"
  },
  {
    "ticker": "SMDY",
    "exchange": "NYSE ARCA",
    "name": "Syntax Stratified MidCap ETF"
  },
  {
    "ticker": "SMED",
    "exchange": "NASDAQ",
    "name": "Sharps Compliance Corp."
  },
  {
    "ticker": "SMEZ",
    "exchange": "NYSE ARCA",
    "name": "SPDR EURO STOXX Small Cap ETF"
  },
  {
    "ticker": "SMFG",
    "exchange": "NYSE",
    "name": "Sumitomo Mitsui Financial Group Inc. Sponsored ADR"
  },
  {
    "ticker": "SMG",
    "exchange": "NYSE",
    "name": "Scotts Miracle-Gro Company Class A"
  },
  {
    "ticker": "SMH",
    "exchange": "NASDAQ",
    "name": "VanEck Vectors Semiconductor ETF"
  },
  {
    "ticker": "SMHB",
    "exchange": "NYSE ARCA",
    "name": "ETRACS 2xMonthly Pay Leveraged US Small Cap High Dividend ETN Series B"
  },
  {
    "ticker": "SMHI",
    "exchange": "NYSE",
    "name": "SEACOR Marine Holdings Inc"
  },
  {
    "ticker": "SMIN",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI India Small Cap ETF"
  },
  {
    "ticker": "SMIT",
    "exchange": "NASDAQ",
    "name": "Schmitt Industries Inc."
  },
  {
    "ticker": "SMLF",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI USA Small-Cap Multifactor ETF"
  },
  {
    "ticker": "SMLL",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Small Cap Bull 2X Shares ETF"
  },
  {
    "ticker": "SMLP",
    "exchange": "NYSE",
    "name": "Summit Midstream Partners LP"
  },
  {
    "ticker": "SMLV",
    "exchange": "NYSE ARCA",
    "name": "SPDR SSGA US Small Cap Low Volatility Index ETF"
  },
  {
    "ticker": "SMM",
    "exchange": "NYSE",
    "name": "Salient Midstream & MLP Fund"
  },
  {
    "ticker": "SMMC",
    "exchange": "NASDAQ",
    "name": "South Mountain Merger Corp Class A"
  },
  {
    "ticker": "SMMCU",
    "exchange": "NASDAQ",
    "name": "South Mountain Merger Corp Units Cons of 1 Sh + 1/2 Wt"
  },
  {
    "ticker": "SMMCW",
    "exchange": "NASDAQ",
    "name": "South Mountain Merger Corp Warrant 2019-20.06.24 On South Mountain Rg-A"
  },
  {
    "ticker": "SMMD",
    "exchange": "Cboe BZX",
    "name": "iShares Russell 2500 ETF"
  },
  {
    "ticker": "SMMF",
    "exchange": "NASDAQ",
    "name": "Summit Financial Group Inc."
  },
  {
    "ticker": "SMMT",
    "exchange": "NASDAQ",
    "name": "Summit Therapeutics PLC Sponsored ADR"
  },
  {
    "ticker": "SMMU",
    "exchange": "NYSE ARCA",
    "name": "PIMCO Short Term Municipal Bond Active ETF"
  },
  {
    "ticker": "SMMV",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI USA Small-Cap Min Vol Factor ETF"
  },
  {
    "ticker": "SMN",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort Basic Materials"
  },
  {
    "ticker": "SMOG",
    "exchange": "NYSE ARCA",
    "name": "VanEck Vectors Low Carbon Energy ETF"
  },
  {
    "ticker": "SMP",
    "exchange": "NYSE",
    "name": "Standard Motor Products Inc."
  },
  {
    "ticker": "SMPL",
    "exchange": "NASDAQ",
    "name": "Simply Good Foods Co"
  },
  {
    "ticker": "SMRT",
    "exchange": "NASDAQ",
    "name": "Stein Mart Inc."
  },
  {
    "ticker": "SMSI",
    "exchange": "NASDAQ",
    "name": "Smith Micro Software Inc."
  },
  {
    "ticker": "SMTC",
    "exchange": "NASDAQ",
    "name": "Semtech Corporation"
  },
  {
    "ticker": "SMTS",
    "exchange": "NYSE American",
    "name": "Sierra Metals Inc."
  },
  {
    "ticker": "SMTX",
    "exchange": "NASDAQ",
    "name": "SMTC Corporation"
  },
  {
    "ticker": "SNA",
    "exchange": "NYSE",
    "name": "Snap-on Incorporated"
  },
  {
    "ticker": "SNAP",
    "exchange": "NYSE",
    "name": "Snap Inc. Class A"
  },
  {
    "ticker": "SNBR",
    "exchange": "NASDAQ",
    "name": "Sleep Number Corporation"
  },
  {
    "ticker": "SNCA",
    "exchange": "NASDAQ",
    "name": "Seneca Biopharma Inc."
  },
  {
    "ticker": "SNCR",
    "exchange": "NASDAQ",
    "name": "Synchronoss Technologies Inc."
  },
  {
    "ticker": "SND",
    "exchange": "NASDAQ",
    "name": "Smart Sand Inc."
  },
  {
    "ticker": "SNDE",
    "exchange": "NASDAQ",
    "name": "Sundance Energy Inc."
  },
  {
    "ticker": "SNDL",
    "exchange": "NASDAQ",
    "name": "Sundial Growers Inc."
  },
  {
    "ticker": "SNDR",
    "exchange": "NYSE",
    "name": "Schneider National Inc. Class B"
  },
  {
    "ticker": "SNDX",
    "exchange": "NASDAQ",
    "name": "Syndax Pharmaceuticals Inc"
  },
  {
    "ticker": "SNE",
    "exchange": "NYSE",
    "name": "Sony Corporation Sponsored ADR"
  },
  {
    "ticker": "SNES",
    "exchange": "NASDAQ",
    "name": "SenesTech Inc."
  },
  {
    "ticker": "SNEX",
    "exchange": "NASDAQ",
    "name": "StoneX Group Inc."
  },
  {
    "ticker": "SNFCA",
    "exchange": "NASDAQ",
    "name": "Security National Financial Corporation Class A"
  },
  {
    "ticker": "SNGX",
    "exchange": "NASDAQ",
    "name": "Soligenix Inc."
  },
  {
    "ticker": "SNGXW",
    "exchange": "NASDAQ",
    "name": "Soligenix Inc Warrant 2016-14.11.21 on Soligenix"
  },
  {
    "ticker": "SNLN",
    "exchange": "NASDAQ",
    "name": "Highland iBoxx Senior Loan ETF"
  },
  {
    "ticker": "SNMP",
    "exchange": "NYSE American",
    "name": "Sanchez Midstream Partners LP"
  },
  {
    "ticker": "SNN",
    "exchange": "NYSE",
    "name": "Smith & Nephew PLC Sponsored ADR"
  },
  {
    "ticker": "SNOA",
    "exchange": "NASDAQ",
    "name": "Sonoma Pharmaceuticals Inc."
  },
  {
    "ticker": "SNP",
    "exchange": "NYSE",
    "name": "China Petroleum & Chemical Corporation Sponsored ADR Class H"
  },
  {
    "ticker": "SNPE",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers S&P 500 ESG ETF"
  },
  {
    "ticker": "SNPS",
    "exchange": "NASDAQ",
    "name": "Synopsys Inc."
  },
  {
    "ticker": "SNR",
    "exchange": "NYSE",
    "name": "New Senior Investment Group Inc"
  },
  {
    "ticker": "SNSR",
    "exchange": "NASDAQ",
    "name": "Global X Internet of Things ETF"
  },
  {
    "ticker": "SNSS",
    "exchange": "NASDAQ",
    "name": "Sunesis Pharmaceuticals Inc."
  },
  {
    "ticker": "SNUG",
    "exchange": "NASDAQ",
    "name": "Alpha Architect ETF Trust Merlyn AI Tactical Growth & Income Fund"
  },
  {
    "ticker": "SNV",
    "exchange": "NYSE",
    "name": "Synovus Financial Corp."
  },
  {
    "ticker": "SNV-D",
    "exchange": "NYSE",
    "name": "Synovus Financial Corp Non-Cum Red Perp Pfd Registered Shs Series D"
  },
  {
    "ticker": "SNV-E",
    "exchange": "NYSE",
    "name": "Synovus Financial Corp Non-Cum Red Perp Pfd Registered Shs Series E"
  },
  {
    "ticker": "SNX",
    "exchange": "NYSE",
    "name": "SYNNEX Corporation"
  },
  {
    "ticker": "SNY",
    "exchange": "NASDAQ",
    "name": "Sanofi Sponsored ADR"
  },
  {
    "ticker": "SO",
    "exchange": "NYSE",
    "name": "Southern Company"
  },
  {
    "ticker": "SOAC",
    "exchange": "NYSE",
    "name": "Sustainable Opportunities Acquisition Corporation Class A"
  },
  {
    "ticker": "SOAC=",
    "exchange": "NYSE",
    "name": "Sustainable Opportunities Acquisition Corp. Units Cons of 1 Shs + 1/2 Wt"
  },
  {
    "ticker": "SOAC+",
    "exchange": "NYSE",
    "name": "Sustainable Opportunities Acquisition Corporation Warrant - on Sustainable Opportunities"
  },
  {
    "ticker": "SOCL",
    "exchange": "NASDAQ",
    "name": "Global X Social Media ETF"
  },
  {
    "ticker": "SOGO",
    "exchange": "NYSE",
    "name": "Sogou Inc. Sponsored ADR"
  },
  {
    "ticker": "SOHO",
    "exchange": "NASDAQ",
    "name": "Sotherly Hotels Inc."
  },
  {
    "ticker": "SOHOB",
    "exchange": "NASDAQ",
    "name": "Sotherly Hotels Inc 8% Cum Red Pfd Series B"
  },
  {
    "ticker": "SOHON",
    "exchange": "NASDAQ",
    "name": "Sotherly Hotels Inc 8.25 % Cum Conv Perp Red Pfd Registered Shs Series D"
  },
  {
    "ticker": "SOHOO",
    "exchange": "NASDAQ",
    "name": "Sotherly Hotels Inc 7.875 % Cum Conv Perp Red Pfd Registered Shs Series C"
  },
  {
    "ticker": "SOHU",
    "exchange": "NASDAQ",
    "name": "Sohu.com Limited Sponsored ADR"
  },
  {
    "ticker": "SOI",
    "exchange": "NYSE",
    "name": "Solaris Oilfield Infrastructure Inc. Class A"
  },
  {
    "ticker": "SOIL",
    "exchange": "NYSE ARCA",
    "name": "Global X Fertilizers/Potash ETF"
  },
  {
    "ticker": "SOJA",
    "exchange": "NYSE",
    "name": "Southern Company 6 1/4 % Notes 2015-15.10.75 Series 2015A"
  },
  {
    "ticker": "SOJB",
    "exchange": "NYSE",
    "name": "Southern Company 5.25 % Notes 2016-01.10.76 Series 2016A"
  },
  {
    "ticker": "SOJC",
    "exchange": "NYSE",
    "name": "Southern Company 5.25 % Notes 2017-01.12.77 Global Series 2017B"
  },
  {
    "ticker": "SOJD",
    "exchange": "NYSE",
    "name": "Southern Co 4.95 % Notes 2020-30.01.80 Global Series 2020A"
  },
  {
    "ticker": "SOL",
    "exchange": "NYSE",
    "name": "ReneSola Ltd. Sponsored ADR"
  },
  {
    "ticker": "SOLN",
    "exchange": "NYSE",
    "name": "Southern Co Corporate Unit Cons of 1/40 Nts 01.08.24 + 1/40 Nts 01.08.27 + 1 PC"
  },
  {
    "ticker": "SOLO",
    "exchange": "NASDAQ",
    "name": "ElectraMeccanica Vehicles Corp."
  },
  {
    "ticker": "SOLOW",
    "exchange": "NASDAQ",
    "name": "Electrameccanica Vehicles Corp Warrant 2018-26.07.23 on Electramec Vehc"
  },
  {
    "ticker": "SOLY",
    "exchange": "NASDAQ",
    "name": "Soliton Inc."
  },
  {
    "ticker": "SON",
    "exchange": "NYSE",
    "name": "Sonoco Products Company"
  },
  {
    "ticker": "SONA",
    "exchange": "NASDAQ",
    "name": "Southern National Bancorp of Virginia Inc."
  },
  {
    "ticker": "SONM",
    "exchange": "NASDAQ",
    "name": "Sonim Technologies Inc."
  },
  {
    "ticker": "SONN",
    "exchange": "NASDAQ",
    "name": "Sonnet BioTherapeutics Holdings Inc."
  },
  {
    "ticker": "SONO",
    "exchange": "NASDAQ",
    "name": "Sonos Inc."
  },
  {
    "ticker": "SOR",
    "exchange": "NYSE",
    "name": "Source Capital Inc."
  },
  {
    "ticker": "SOS",
    "exchange": "NYSE",
    "name": "SOS Limited Sponsored ADR Class A"
  },
  {
    "ticker": "SOVB",
    "exchange": "Cboe BZX",
    "name": "Cambria Sovereign High Yield Bond ETF"
  },
  {
    "ticker": "SOXL",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Semiconductor Bull 3x Shares"
  },
  {
    "ticker": "SOXS",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Semiconductor Bear 3x Shares"
  },
  {
    "ticker": "SOXX",
    "exchange": "NASDAQ",
    "name": "iShares PHLX Semiconductor ETF"
  },
  {
    "ticker": "SOYB",
    "exchange": "NYSE ARCA",
    "name": "Teucrium Soybean Fund"
  },
  {
    "ticker": "SP",
    "exchange": "NASDAQ",
    "name": "SP Plus Corporation"
  },
  {
    "ticker": "SPAB",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio Aggregate Bond ETF"
  },
  {
    "ticker": "SPAQ",
    "exchange": "NYSE",
    "name": "Spartan Energy Acquisition Corp. Class A"
  },
  {
    "ticker": "SPAQ=",
    "exchange": "NYSE",
    "name": "Spartan Energy Acquisition Corp. Units Cons of 1 Sh + 1/3 Wt"
  },
  {
    "ticker": "SPAQ+",
    "exchange": "NYSE",
    "name": "Spartan Energy Acquisition Corp Warrant 2018- on Spartan En Acqn A"
  },
  {
    "ticker": "SPB",
    "exchange": "NYSE",
    "name": "Spectrum Brands Holdings Inc."
  },
  {
    "ticker": "SPBO",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio Corporate Bond ETF"
  },
  {
    "ticker": "SPCB",
    "exchange": "NASDAQ",
    "name": "SuperCom Ltd."
  },
  {
    "ticker": "SPCE",
    "exchange": "NYSE",
    "name": "Virgin Galactic Holdings Inc"
  },
  {
    "ticker": "SPDN",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily S&P 500 Bear 1X Shares"
  },
  {
    "ticker": "SPDV",
    "exchange": "NYSE ARCA",
    "name": "AAM S&P 500 High Dividend Value ETF"
  },
  {
    "ticker": "SPDW",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio Developed World ex-US ETF"
  },
  {
    "ticker": "SPE",
    "exchange": "NYSE",
    "name": "Special Opportunities Fund Inc"
  },
  {
    "ticker": "SPE-B",
    "exchange": "NYSE",
    "name": "Special Opportunities Fund Inc 3 1/2 % Conv Pfd Shs Series B"
  },
  {
    "ticker": "SPEM",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio Emerging Markets ETF"
  },
  {
    "ticker": "SPEU",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio Europe ETF"
  },
  {
    "ticker": "SPFF",
    "exchange": "NYSE ARCA",
    "name": "Global X SuperIncome Preferred ETF"
  },
  {
    "ticker": "SPFI",
    "exchange": "NASDAQ",
    "name": "South Plains Financial Inc"
  },
  {
    "ticker": "SPG",
    "exchange": "NYSE",
    "name": "Simon Property Group Inc."
  },
  {
    "ticker": "SPG-J",
    "exchange": "NYSE",
    "name": "Simon Property Group Inc 8 3/8 % Cum Red Pfd Shs Series J"
  },
  {
    "ticker": "SPGI",
    "exchange": "NYSE",
    "name": "S&P Global Inc."
  },
  {
    "ticker": "SPGM",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio MSCI Global Stock Market ETF"
  },
  {
    "ticker": "SPGP",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 GARP ETF"
  },
  {
    "ticker": "SPH",
    "exchange": "NYSE",
    "name": "Suburban Propane Partners L.P."
  },
  {
    "ticker": "SPHB",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 High Beta ETF"
  },
  {
    "ticker": "SPHD",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 High Dividend Low Volatility ETF"
  },
  {
    "ticker": "SPHQ",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Quality ETF"
  },
  {
    "ticker": "SPHY",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio High Yield Bond ETF"
  },
  {
    "ticker": "SPI",
    "exchange": "NASDAQ",
    "name": "SPI Energy Co Ltd"
  },
  {
    "ticker": "SPIB",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio Intermediate Term Corporate Bond ETF"
  },
  {
    "ticker": "SPIP",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio TIPS ETF"
  },
  {
    "ticker": "SPKE",
    "exchange": "NASDAQ",
    "name": "Spark Energy Inc. Class A"
  },
  {
    "ticker": "SPKEP",
    "exchange": "NASDAQ",
    "name": "Spark Energy Inc Cum Red Perp Pfd Registered Shs Series A"
  },
  {
    "ticker": "SPLB",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio Long Term Corporate Bond ETF"
  },
  {
    "ticker": "SPLG",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio S&P 500 ETF"
  },
  {
    "ticker": "SPLK",
    "exchange": "NASDAQ",
    "name": "Splunk Inc."
  },
  {
    "ticker": "SPLP",
    "exchange": "NYSE",
    "name": "Steel Partners Holdings LP"
  },
  {
    "ticker": "SPLP-A",
    "exchange": "NYSE",
    "name": "Steel Partners Holdings LP 6 % Pfd Partnership Unit Series A"
  },
  {
    "ticker": "SPLV",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Low Volatility ETF"
  },
  {
    "ticker": "SPMB",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio Mortgage Backed Bond ETF"
  },
  {
    "ticker": "SPMD",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio S&P 400 Mid Cap ETF"
  },
  {
    "ticker": "SPMO",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Momentum ETF"
  },
  {
    "ticker": "SPMV",
    "exchange": "Cboe BZX",
    "name": "Invesco S&P 500 Minimum Variance ETF"
  },
  {
    "ticker": "SPN",
    "exchange": "NYSE",
    "name": "Superior Energy Services Inc."
  },
  {
    "ticker": "SPNE",
    "exchange": "NASDAQ",
    "name": "SeaSpine Holdings Corp."
  },
  {
    "ticker": "SPNS",
    "exchange": "NASDAQ",
    "name": "Sapiens International Corporation NV"
  },
  {
    "ticker": "SPOK",
    "exchange": "NASDAQ",
    "name": "Spok Holdings Inc."
  },
  {
    "ticker": "SPOT",
    "exchange": "NYSE",
    "name": "Spotify Technology SA"
  },
  {
    "ticker": "SPPI",
    "exchange": "NASDAQ",
    "name": "Spectrum Pharmaceuticals Inc."
  },
  {
    "ticker": "SPPP",
    "exchange": "NYSE ARCA",
    "name": "Sprott Physical Platinum and Palladium Trust Units"
  },
  {
    "ticker": "SPQQ",
    "exchange": "NASDAQ",
    "name": "Siren Large Cap Blend Index ETF"
  },
  {
    "ticker": "SPR",
    "exchange": "NYSE",
    "name": "Spirit AeroSystems Holdings Inc. Class A"
  },
  {
    "ticker": "SPRO",
    "exchange": "NASDAQ",
    "name": "Spero Therapeutics Inc."
  },
  {
    "ticker": "SPRT",
    "exchange": "NASDAQ",
    "name": "Support.com Inc."
  },
  {
    "ticker": "SPSB",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio Short Term Corporate Bond ETF"
  },
  {
    "ticker": "SPSC",
    "exchange": "NASDAQ",
    "name": "SPS Commerce Inc."
  },
  {
    "ticker": "SPSK",
    "exchange": "NYSE ARCA",
    "name": "SP Funds Dow Jones Global Sukuk ETF"
  },
  {
    "ticker": "SPSM",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio S&P 600 Small Cap ETF"
  },
  {
    "ticker": "SPT",
    "exchange": "NASDAQ",
    "name": "Sprout Social Inc Class A"
  },
  {
    "ticker": "SPTI",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio Intermediate Term Treasury ETF"
  },
  {
    "ticker": "SPTL",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio Long Term Treasury ETF"
  },
  {
    "ticker": "SPTM",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio S&P 1500 Composite Stock Market ETF"
  },
  {
    "ticker": "SPTN",
    "exchange": "NASDAQ",
    "name": "SpartanNASDAQh Company"
  },
  {
    "ticker": "SPTS",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio Short Term Treasury ETF"
  },
  {
    "ticker": "SPUS",
    "exchange": "NYSE ARCA",
    "name": "SP Funds S&P 500 Sharia Industry Exclusions ETF"
  },
  {
    "ticker": "SPUU",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily S&P 500 Bull 2x Shares"
  },
  {
    "ticker": "SPVM",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Value with Momentum ETF"
  },
  {
    "ticker": "SPVU",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Enhanced Value ETF"
  },
  {
    "ticker": "SPWH",
    "exchange": "NASDAQ",
    "name": "Sportsman's Warehouse Holdings Inc."
  },
  {
    "ticker": "SPWR",
    "exchange": "NASDAQ",
    "name": "SunPower Corporation"
  },
  {
    "ticker": "SPWRV",
    "exchange": "NASDAQ",
    "name": "SunPower Corp TEMP"
  },
  {
    "ticker": "SPXB",
    "exchange": "NYSE ARCA",
    "name": "ProShares S&P 500 Bond ETF"
  },
  {
    "ticker": "SPXC",
    "exchange": "NYSE",
    "name": "SPX Corporation"
  },
  {
    "ticker": "SPXE",
    "exchange": "NYSE ARCA",
    "name": "ProShares S&P 500 Ex-Energy ETF"
  },
  {
    "ticker": "SPXL",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily S&P 500 Bull 3x Shares"
  },
  {
    "ticker": "SPXN",
    "exchange": "NYSE ARCA",
    "name": "ProShares S&P 500 Ex-Financials ETF"
  },
  {
    "ticker": "SPXS",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily S&P 500 Bear 3x Shares"
  },
  {
    "ticker": "SPXT",
    "exchange": "NYSE ARCA",
    "name": "ProShares S&P 500 Ex-Technology ETF"
  },
  {
    "ticker": "SPXU",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraPro Short S&P500"
  },
  {
    "ticker": "SPXV",
    "exchange": "NYSE ARCA",
    "name": "ProShares S&P 500 Ex-Health Care ETF"
  },
  {
    "ticker": "SPXX",
    "exchange": "NYSE",
    "name": "Nuveen S&P 500 Dynamic Overwrite Fund of Benef Interest"
  },
  {
    "ticker": "SPY",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P 500 ETF Trust"
  },
  {
    "ticker": "SPYD",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio S&P 500 High Dividend ETF"
  },
  {
    "ticker": "SPYG",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio S&P 500 Growth ETF"
  },
  {
    "ticker": "SPYV",
    "exchange": "NYSE ARCA",
    "name": "SPDR Portfolio S&P 500 Value ETF"
  },
  {
    "ticker": "SPYX",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P 500 Fossil Fuel Reserves Free ETF"
  },
  {
    "ticker": "SQ",
    "exchange": "NYSE",
    "name": "Square Inc. Class A"
  },
  {
    "ticker": "SQBG",
    "exchange": "NASDAQ",
    "name": "Sequential Brands Group Inc."
  },
  {
    "ticker": "SQEW",
    "exchange": "NYSE ARCA",
    "name": "LeaderShares Equity Skew ETF"
  },
  {
    "ticker": "SQLV",
    "exchange": "NASDAQ",
    "name": "Legg Mason Small-Cap Quality Value ETF"
  },
  {
    "ticker": "SQM",
    "exchange": "NYSE",
    "name": "Sociedad Quimica Y Minera De Chile S.A. Sponsored ADR Pfd Class B"
  },
  {
    "ticker": "SQNS",
    "exchange": "NYSE",
    "name": "Sequans Communications SA Sponsored ADR"
  },
  {
    "ticker": "SQQQ",
    "exchange": "NASDAQ",
    "name": "ProShares UltraPro Short QQQ"
  },
  {
    "ticker": "SR",
    "exchange": "NYSE",
    "name": "Spire Inc."
  },
  {
    "ticker": "SR-A",
    "exchange": "NYSE",
    "name": "Spire Inc. Depositary Shs Repr 1/1000th Cum Red Perp Pfd Registered Sh Series A"
  },
  {
    "ticker": "SRAC",
    "exchange": "NASDAQ",
    "name": "Stable Road Acquisition Corp Class A"
  },
  {
    "ticker": "SRACU",
    "exchange": "NASDAQ",
    "name": "Stable Road Acquisition Corp Units Cons of 1 Sh + 1/2 Wt 24"
  },
  {
    "ticker": "SRACW",
    "exchange": "NASDAQ",
    "name": "Stable Road Acquisition Corp Warrant 2019-15.05.26 for Stable Rd Acqn-A"
  },
  {
    "ticker": "SRAX",
    "exchange": "NASDAQ",
    "name": "SRAX Inc. Class A"
  },
  {
    "ticker": "SRC",
    "exchange": "NYSE",
    "name": "Spirit Realty Capital Inc."
  },
  {
    "ticker": "SRC-A",
    "exchange": "NYSE",
    "name": "Spirit Realty Capital Inc. 6 % Cum Conv Perp Red Pfd Series A"
  },
  {
    "ticker": "SRCE",
    "exchange": "NASDAQ",
    "name": "1st Source Corporation"
  },
  {
    "ticker": "SRCL",
    "exchange": "NASDAQ",
    "name": "Stericycle Inc."
  },
  {
    "ticker": "SRDX",
    "exchange": "NASDAQ",
    "name": "Surmodics Inc"
  },
  {
    "ticker": "SRE",
    "exchange": "NYSE",
    "name": "Sempra Energy"
  },
  {
    "ticker": "SRE-A",
    "exchange": "NYSE",
    "name": "Sempra Energy 6 % Cum Conv Red Pfd Registered Shs 2017-15.01.21 Series A"
  },
  {
    "ticker": "SRE-B",
    "exchange": "NYSE",
    "name": "Sempra Energy 6.75 % Cum Conv Pfd Registered Shs 2018-15.07.2021 Series B"
  },
  {
    "ticker": "SREA",
    "exchange": "NYSE",
    "name": "Sempra Energy 5.75 % Notes 2019-01.07.79 Global"
  },
  {
    "ticker": "SRET",
    "exchange": "NASDAQ",
    "name": "Global X SuperDividend REIT ETF"
  },
  {
    "ticker": "SREV",
    "exchange": "NASDAQ",
    "name": "ServiceSource International Inc."
  },
  {
    "ticker": "SRG",
    "exchange": "NYSE",
    "name": "Seritage Growth Properties Class A"
  },
  {
    "ticker": "SRG-A",
    "exchange": "NYSE",
    "name": "Seritage Growth Properties 7 % Cum Conv Perp Red Pfd Registered Series A"
  },
  {
    "ticker": "SRGA",
    "exchange": "NASDAQ",
    "name": "Surgalign Holdings Inc."
  },
  {
    "ticker": "SRI",
    "exchange": "NYSE",
    "name": "Stoneridge Inc."
  },
  {
    "ticker": "SRL",
    "exchange": "NYSE",
    "name": "Scully Royalty Ltd."
  },
  {
    "ticker": "SRLN",
    "exchange": "NYSE ARCA",
    "name": "SPDR Blackstone / GSO Senior Loan ETF"
  },
  {
    "ticker": "SRLP",
    "exchange": "NYSE",
    "name": "Sprague Resources LP"
  },
  {
    "ticker": "SRNE",
    "exchange": "NASDAQ",
    "name": "Sorrento Therapeutics Inc."
  },
  {
    "ticker": "SRPT",
    "exchange": "NASDAQ",
    "name": "Sarepta Therapeutics Inc."
  },
  {
    "ticker": "SRRA",
    "exchange": "NASDAQ",
    "name": "Sierra Oncology Inc."
  },
  {
    "ticker": "SRRK",
    "exchange": "NASDAQ",
    "name": "Scholar Rock Holding Corp."
  },
  {
    "ticker": "SRS",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort Real Estate"
  },
  {
    "ticker": "SRT",
    "exchange": "NYSE",
    "name": "StarTek Inc."
  },
  {
    "ticker": "SRTS",
    "exchange": "NASDAQ",
    "name": "Sensus Healthcare Inc."
  },
  {
    "ticker": "SRTY",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraPro Short Russell2000"
  },
  {
    "ticker": "SRV",
    "exchange": "NYSE",
    "name": "Cushing MLP & Infrastructure Total Return Fund of Benef Interest"
  },
  {
    "ticker": "SRVR",
    "exchange": "NYSE ARCA",
    "name": "Pacer Benchmark Data & Infrastructure Real Estate SCTR ETF"
  },
  {
    "ticker": "SSB",
    "exchange": "NASDAQ",
    "name": "South State Corporation"
  },
  {
    "ticker": "SSBI",
    "exchange": "NASDAQ",
    "name": "Summit State Bank"
  },
  {
    "ticker": "SSD",
    "exchange": "NYSE",
    "name": "Simpson Manufacturing Co. Inc."
  },
  {
    "ticker": "SSG",
    "exchange": "NYSE ARCA",
    "name": "Proshares Ultrashort Semiconductors"
  },
  {
    "ticker": "SSKN",
    "exchange": "NASDAQ",
    "name": "STRATA Skin Sciences Inc."
  },
  {
    "ticker": "SSL",
    "exchange": "NYSE",
    "name": "Sasol Limited Sponsored ADR"
  },
  {
    "ticker": "SSLY",
    "exchange": "NYSE ARCA",
    "name": "Syntax Stratified SmallCap ETF"
  },
  {
    "ticker": "SSNC",
    "exchange": "NASDAQ",
    "name": "SS&C Technologies Holdings Inc."
  },
  {
    "ticker": "SSNT",
    "exchange": "NASDAQ",
    "name": "SilverSun Technologies Inc."
  },
  {
    "ticker": "SSO",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra S&P 500"
  },
  {
    "ticker": "SSP",
    "exchange": "NASDAQ",
    "name": "E. W. Scripps Company Class A"
  },
  {
    "ticker": "SSPK",
    "exchange": "NASDAQ",
    "name": "Silver Spike Acquisition Corp Class A"
  },
  {
    "ticker": "SSPKU",
    "exchange": "NASDAQ",
    "name": "Silver Spike Acquisition Corp Units Cons of 1 Class A ordinary Shs + 1/2 redeemable Wt"
  },
  {
    "ticker": "SSPKW",
    "exchange": "NASDAQ",
    "name": "Silver Spike Acquisition Corp Warrant on SSAC -144A-"
  },
  {
    "ticker": "SSPY",
    "exchange": "NYSE ARCA",
    "name": "Syntax Stratified LargeCap ETF"
  },
  {
    "ticker": "SSRM",
    "exchange": "NASDAQ",
    "name": "SSR Mining Inc"
  },
  {
    "ticker": "SSSS",
    "exchange": "NASDAQ",
    "name": "SuRo Capital Corp."
  },
  {
    "ticker": "SSTI",
    "exchange": "NASDAQ",
    "name": "ShotSpotter Inc."
  },
  {
    "ticker": "SSTK",
    "exchange": "NYSE",
    "name": "Shutterstock Inc."
  },
  {
    "ticker": "SSUS",
    "exchange": "NYSE ARCA",
    "name": "Day Hagan/Ned Davis Research Smart Sector ETF"
  },
  {
    "ticker": "SSY",
    "exchange": "NYSE American",
    "name": "SunLink Health Systems Inc."
  },
  {
    "ticker": "SSYS",
    "exchange": "NASDAQ",
    "name": "Stratasys Ltd."
  },
  {
    "ticker": "ST",
    "exchange": "NYSE",
    "name": "Sensata Technologies Holding PLC"
  },
  {
    "ticker": "STAA",
    "exchange": "NASDAQ",
    "name": "STAAR Surgical Company"
  },
  {
    "ticker": "STAF",
    "exchange": "NASDAQ",
    "name": "Staffing 360 Solutions Inc."
  },
  {
    "ticker": "STAG",
    "exchange": "NYSE",
    "name": "STAG Industrial Inc."
  },
  {
    "ticker": "STAG-C",
    "exchange": "NYSE",
    "name": "Stag Industrial Inc 6 7/8 % Cum Red Pfd Shs Series C"
  },
  {
    "ticker": "STAR",
    "exchange": "NYSE",
    "name": "iStar Inc."
  },
  {
    "ticker": "STAR-D",
    "exchange": "NYSE",
    "name": "iStar Financial Inc Cum Red Pfd Shs Series D"
  },
  {
    "ticker": "STAR-G",
    "exchange": "NYSE",
    "name": "iStar Financial Inc 7.65 % Cum Red Pfd Shs Series G"
  },
  {
    "ticker": "STAR-I",
    "exchange": "NYSE",
    "name": "iStar Financial Inc 7 1/2 % Cum Red Pfd Shs Series I"
  },
  {
    "ticker": "STAY",
    "exchange": "NASDAQ",
    "name": "Extended Stay America Inc."
  },
  {
    "ticker": "STBA",
    "exchange": "NASDAQ",
    "name": "S&T Bancorp Inc."
  },
  {
    "ticker": "STC",
    "exchange": "NYSE",
    "name": "Stewart Information Services Corporation"
  },
  {
    "ticker": "STCN",
    "exchange": "NASDAQ",
    "name": "Steel Connect Inc."
  },
  {
    "ticker": "STE",
    "exchange": "NYSE",
    "name": "STERIS Plc"
  },
  {
    "ticker": "STFC",
    "exchange": "NASDAQ",
    "name": "State Auto Financial Corporation"
  },
  {
    "ticker": "STG",
    "exchange": "NYSE",
    "name": "Sunlands Technology Group Sponsored ADR Class A"
  },
  {
    "ticker": "STIM",
    "exchange": "NASDAQ",
    "name": "Neuronetics Inc."
  },
  {
    "ticker": "STIP",
    "exchange": "NYSE ARCA",
    "name": "iShares 0-5 Year TIPS Bond ETF"
  },
  {
    "ticker": "STK",
    "exchange": "NYSE",
    "name": "Columbia Seligman Premium Technology Growth Func Inc"
  },
  {
    "ticker": "STKL",
    "exchange": "NASDAQ",
    "name": "SunOpta Inc."
  },
  {
    "ticker": "STKS",
    "exchange": "NASDAQ",
    "name": "ONE Group Hospitality Inc."
  },
  {
    "ticker": "STL",
    "exchange": "NYSE",
    "name": "Sterling Bancorp"
  },
  {
    "ticker": "STL-A",
    "exchange": "NYSE",
    "name": "Sterling Bancorp Deposit Repr 1/40th 6 1/2 % Non-Cum Perp Pfd Series A"
  },
  {
    "ticker": "STLC",
    "exchange": "Cboe BZX",
    "name": "iShares Factors US Blend Style ETF"
  },
  {
    "ticker": "STLD",
    "exchange": "NASDAQ",
    "name": "Steel Dynamics Inc."
  },
  {
    "ticker": "STLG",
    "exchange": "Cboe BZX",
    "name": "iShares Factors US Growth Style ETF"
  },
  {
    "ticker": "STLV",
    "exchange": "Cboe BZX",
    "name": "iShares Factors US Value Style ETF"
  },
  {
    "ticker": "STM",
    "exchange": "NYSE",
    "name": "STMicroelectronics NV ADR RegS"
  },
  {
    "ticker": "STMB",
    "exchange": "Cboe BZX",
    "name": "iShares Factors US Mid Blend Style ETF"
  },
  {
    "ticker": "STMP",
    "exchange": "NASDAQ",
    "name": "Stamps.com Inc."
  },
  {
    "ticker": "STN",
    "exchange": "NYSE",
    "name": "Stantec Inc"
  },
  {
    "ticker": "STND",
    "exchange": "NASDAQ",
    "name": "Standard AVB Financial Corp"
  },
  {
    "ticker": "STNE",
    "exchange": "NASDAQ",
    "name": "StoneCo Ltd. Class A"
  },
  {
    "ticker": "STNG",
    "exchange": "NYSE",
    "name": "Scorpio Tankers Inc."
  },
  {
    "ticker": "STOK",
    "exchange": "NASDAQ",
    "name": "Stoke Therapeutics Inc."
  },
  {
    "ticker": "STON",
    "exchange": "NYSE",
    "name": "StoneMor Inc."
  },
  {
    "ticker": "STOR",
    "exchange": "NYSE",
    "name": "STORE Capital Corporation"
  },
  {
    "ticker": "STOT",
    "exchange": "Cboe BZX",
    "name": "SPDR DoubleLine Short Duration Total Return Tactical ETF"
  },
  {
    "ticker": "STPK=",
    "exchange": "NYSE",
    "name": "Star Peak Energy Transition Corp. Units Cons of 1 Sh + 1/3 Wt 11.05.25"
  },
  {
    "ticker": "STPZ",
    "exchange": "NYSE ARCA",
    "name": "PIMCO 1-5 Year US TIPS Index ETF"
  },
  {
    "ticker": "STRA",
    "exchange": "NASDAQ",
    "name": "Strategic Education Inc."
  },
  {
    "ticker": "STRL",
    "exchange": "NASDAQ",
    "name": "Sterling Construction Company Inc."
  },
  {
    "ticker": "STRM",
    "exchange": "NASDAQ",
    "name": "Streamline Health Solutions Inc."
  },
  {
    "ticker": "STRO",
    "exchange": "NASDAQ",
    "name": "Sutro Biopharma Inc."
  },
  {
    "ticker": "STRS",
    "exchange": "NASDAQ",
    "name": "Stratus Properties Inc."
  },
  {
    "ticker": "STRT",
    "exchange": "NASDAQ",
    "name": "STRATTEC SECURITY CORPORATION"
  },
  {
    "ticker": "STSA",
    "exchange": "NASDAQ",
    "name": "Satsuma Pharmaceuticals Inc."
  },
  {
    "ticker": "STSB",
    "exchange": "Cboe BZX",
    "name": "iShares Factors US Small Blend Style ETF"
  },
  {
    "ticker": "STT",
    "exchange": "NYSE",
    "name": "State Street Corporation"
  },
  {
    "ticker": "STT-D",
    "exchange": "NYSE",
    "name": "State Street Corp Deposit Shs Repr 1/4000th Non-Cum Perp Pfd Shs Series D"
  },
  {
    "ticker": "STT-G",
    "exchange": "NYSE",
    "name": "State Street Corp Deposit Shs Repr 1/4000th Non Cum Perp Pfd Shs Series G"
  },
  {
    "ticker": "STWD",
    "exchange": "NYSE",
    "name": "Starwood Property Trust Inc."
  },
  {
    "ticker": "STX",
    "exchange": "NASDAQ",
    "name": "Seagate Technology PLC"
  },
  {
    "ticker": "STXB",
    "exchange": "NASDAQ",
    "name": "Spirit of Texas Bancshares Inc."
  },
  {
    "ticker": "STXS",
    "exchange": "NYSE American",
    "name": "Stereotaxis Inc."
  },
  {
    "ticker": "STZ",
    "exchange": "NYSE",
    "name": "Constellation Brands Inc. Class A"
  },
  {
    "ticker": "STZ.B",
    "exchange": "NYSE",
    "name": "Constellation Brands Inc. Class B"
  },
  {
    "ticker": "SU",
    "exchange": "NYSE",
    "name": "Suncor Energy Inc."
  },
  {
    "ticker": "SUB",
    "exchange": "NYSE ARCA",
    "name": "iShares Short-Term National Muni Bond ETF"
  },
  {
    "ticker": "SUI",
    "exchange": "NYSE",
    "name": "Sun Communities Inc."
  },
  {
    "ticker": "SUM",
    "exchange": "NYSE",
    "name": "Summit Materials Inc. Class A"
  },
  {
    "ticker": "SUMR",
    "exchange": "NASDAQ",
    "name": "Summer Infant Inc."
  },
  {
    "ticker": "SUN",
    "exchange": "NYSE",
    "name": "Sunoco LP"
  },
  {
    "ticker": "SUNS",
    "exchange": "NASDAQ",
    "name": "Solar Senior Capital Ltd"
  },
  {
    "ticker": "SUNW",
    "exchange": "NASDAQ",
    "name": "Sunworks Inc."
  },
  {
    "ticker": "SUP",
    "exchange": "NYSE",
    "name": "Superior Industries International Inc."
  },
  {
    "ticker": "SUPN",
    "exchange": "NASDAQ",
    "name": "Supernus Pharmaceuticals Inc."
  },
  {
    "ticker": "SUPV",
    "exchange": "NYSE",
    "name": "Grupo Supervielle SA Sponsored ADR Class B"
  },
  {
    "ticker": "SURF",
    "exchange": "NASDAQ",
    "name": "Surface Oncology Inc."
  },
  {
    "ticker": "SUSA",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI USA ESG Select ETF"
  },
  {
    "ticker": "SUSB",
    "exchange": "NASDAQ",
    "name": "iShares ESG Aware 1-5 Year USD Corporate Bond ETF"
  },
  {
    "ticker": "SUSC",
    "exchange": "NASDAQ",
    "name": "iShares ESG Aware USD Corporate Bond ETF"
  },
  {
    "ticker": "SUSL",
    "exchange": "NASDAQ",
    "name": "iShares ESG MSCI USA Leaders ETF"
  },
  {
    "ticker": "SUZ",
    "exchange": "NYSE",
    "name": "Suzano SA Sponsored ADR"
  },
  {
    "ticker": "SVA",
    "exchange": "NASDAQ",
    "name": "Sinovac Biotech Ltd."
  },
  {
    "ticker": "SVBI",
    "exchange": "NASDAQ",
    "name": "Severn Bancorp Inc."
  },
  {
    "ticker": "SVC",
    "exchange": "NASDAQ",
    "name": "Service Properties Trust"
  },
  {
    "ticker": "SVM",
    "exchange": "NYSE American",
    "name": "Silvercorp Metals Inc."
  },
  {
    "ticker": "SVMK",
    "exchange": "NASDAQ",
    "name": "SVMK Inc."
  },
  {
    "ticker": "SVRA",
    "exchange": "NASDAQ",
    "name": "Savara Inc."
  },
  {
    "ticker": "SVT",
    "exchange": "NYSE American",
    "name": "Servotronics Inc."
  },
  {
    "ticker": "SVVC",
    "exchange": "NASDAQ",
    "name": "Firsthand Technology Value Fund Inc"
  },
  {
    "ticker": "SVXY",
    "exchange": "NYSE ARCA",
    "name": "ProShares Short VIX Short-Term Futures ETF"
  },
  {
    "ticker": "SWAN",
    "exchange": "NYSE ARCA",
    "name": "Amplify BlackSwan Growth & Treasury Core ETF"
  },
  {
    "ticker": "SWAV",
    "exchange": "NASDAQ",
    "name": "Shockwave Medical Inc."
  },
  {
    "ticker": "SWBI",
    "exchange": "NASDAQ",
    "name": "Smith & Wesson Brands Inc."
  },
  {
    "ticker": "SWBIV",
    "exchange": "NASDAQ",
    "name": "Smith & Wesson Brands Inc TEMP"
  },
  {
    "ticker": "SWCH",
    "exchange": "NYSE",
    "name": "Switch Inc. Class A"
  },
  {
    "ticker": "SWI",
    "exchange": "NYSE",
    "name": "SolarWinds Corp."
  },
  {
    "ticker": "SWIR",
    "exchange": "NASDAQ",
    "name": "Sierra Wireless Inc."
  },
  {
    "ticker": "SWK",
    "exchange": "NYSE",
    "name": "Stanley Black & Decker Inc."
  },
  {
    "ticker": "SWKH",
    "exchange": "NASDAQ",
    "name": "SWK Holdings Corporation"
  },
  {
    "ticker": "SWKS",
    "exchange": "NASDAQ",
    "name": "Skyworks Solutions Inc."
  },
  {
    "ticker": "SWM",
    "exchange": "NYSE",
    "name": "Schweitzer-Mauduit International Inc."
  },
  {
    "ticker": "SWN",
    "exchange": "NYSE",
    "name": "Southwestern Energy Company"
  },
  {
    "ticker": "SWT",
    "exchange": "NYSE",
    "name": "Stanley Black & Decker Inc Units Cons of 1 PC + 1/10 0% CCRPP Rg-D"
  },
  {
    "ticker": "SWTX",
    "exchange": "NASDAQ",
    "name": "Springworks Therapeutics Inc."
  },
  {
    "ticker": "SWX",
    "exchange": "NYSE",
    "name": "Southwest Gas Holdings Inc."
  },
  {
    "ticker": "SWZ",
    "exchange": "NYSE",
    "name": "Swiss Helvetia Fund Inc"
  },
  {
    "ticker": "SXC",
    "exchange": "NYSE",
    "name": "SunCoke Energy Inc."
  },
  {
    "ticker": "SXI",
    "exchange": "NYSE",
    "name": "Standex International Corporation"
  },
  {
    "ticker": "SXT",
    "exchange": "NYSE",
    "name": "Sensient Technologies Corporation"
  },
  {
    "ticker": "SXTC",
    "exchange": "NASDAQ",
    "name": "China Sxt Pharmaceuticals Inc."
  },
  {
    "ticker": "SY",
    "exchange": "NASDAQ",
    "name": "So-Young International Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "SYBT",
    "exchange": "NASDAQ",
    "name": "Stock Yards Bancorp Inc."
  },
  {
    "ticker": "SYBX",
    "exchange": "NASDAQ",
    "name": "Synlogic Inc"
  },
  {
    "ticker": "SYE",
    "exchange": "NYSE ARCA",
    "name": "SPDR MFS Systematic Core Equity ETF"
  },
  {
    "ticker": "SYF",
    "exchange": "NYSE",
    "name": "Synchrony Financial"
  },
  {
    "ticker": "SYF-A",
    "exchange": "NYSE",
    "name": "Synchrony Financial Depositary Shs Repr 1/40th Non-Cum Perp Red Shs Ser A"
  },
  {
    "ticker": "SYG",
    "exchange": "NYSE ARCA",
    "name": "SPDR MFS Systematic Growth Equity ETF"
  },
  {
    "ticker": "SYK",
    "exchange": "NYSE",
    "name": "Stryker Corporation"
  },
  {
    "ticker": "SYKE",
    "exchange": "NASDAQ",
    "name": "Sykes Enterprises Incorporated"
  },
  {
    "ticker": "SYLD",
    "exchange": "Cboe BZX",
    "name": "Cambria Shareholder Yield ETF"
  },
  {
    "ticker": "SYN",
    "exchange": "NYSE American",
    "name": "Synthetic Biologics Inc."
  },
  {
    "ticker": "SYNA",
    "exchange": "NASDAQ",
    "name": "Synaptics Incorporated"
  },
  {
    "ticker": "SYNC",
    "exchange": "NASDAQ",
    "name": "Synacor Inc."
  },
  {
    "ticker": "SYNH",
    "exchange": "NASDAQ",
    "name": "Syneos Health Inc. Class A"
  },
  {
    "ticker": "SYNL",
    "exchange": "NASDAQ",
    "name": "Synalloy Corporation"
  },
  {
    "ticker": "SYPR",
    "exchange": "NASDAQ",
    "name": "Sypris Solutions Inc."
  },
  {
    "ticker": "SYRS",
    "exchange": "NASDAQ",
    "name": "Syros Pharmaceuticals Inc."
  },
  {
    "ticker": "SYV",
    "exchange": "NYSE ARCA",
    "name": "SPDR MFS Systematic Value Equity ETF"
  },
  {
    "ticker": "SYX",
    "exchange": "NYSE",
    "name": "Systemax Inc."
  },
  {
    "ticker": "SYY",
    "exchange": "NYSE",
    "name": "Sysco Corporation"
  },
  {
    "ticker": "SZC",
    "exchange": "NYSE",
    "name": "Cushing NextGen Infrastructure Income Fund"
  },
  {
    "ticker": "SZK",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort Consumer Goods"
  },
  {
    "ticker": "SZNE",
    "exchange": "NYSE ARCA",
    "name": "Pacer CFRA-Stovall Equal Weight Seasonal Rotation ETF"
  },
  {
    "ticker": "T",
    "exchange": "NYSE",
    "name": "AT&T Inc."
  },
  {
    "ticker": "T-A",
    "exchange": "NYSE",
    "name": "AT&T Inc Depositary Shs Repr 1/1000th 5 % Cum Red Perp Pfd Shs Series A"
  },
  {
    "ticker": "T-C",
    "exchange": "NYSE",
    "name": "AT&T Inc Depositary Shs Repr 1/1000th 4.75 % Red Perp Pfd Shs Series C"
  },
  {
    "ticker": "TA",
    "exchange": "NASDAQ",
    "name": "TravelCenters of America Inc."
  },
  {
    "ticker": "TAAG",
    "exchange": "NYSE ARCA",
    "name": "Trend Aggregation Aggressive Growth ETF"
  },
  {
    "ticker": "TAC",
    "exchange": "NYSE",
    "name": "TransAlta Corporation"
  },
  {
    "ticker": "TACO",
    "exchange": "NASDAQ",
    "name": "Del Taco Restaurants Inc."
  },
  {
    "ticker": "TACT",
    "exchange": "NASDAQ",
    "name": "TransAct Technologies Incorporated"
  },
  {
    "ticker": "TADS",
    "exchange": "NYSE ARCA",
    "name": "Trend Aggregation Dividend Stock ETF"
  },
  {
    "ticker": "TAEQ",
    "exchange": "Cboe BZX",
    "name": "Collaborative Investment Series Trust Trend Aggregation US Fund"
  },
  {
    "ticker": "TAGS",
    "exchange": "NYSE ARCA",
    "name": "Teucrium Agricultural Fund"
  },
  {
    "ticker": "TAIL",
    "exchange": "Cboe BZX",
    "name": "Cambria Tail Risk ETF"
  },
  {
    "ticker": "TAIT",
    "exchange": "NASDAQ",
    "name": "Taitron Components Incorporated Class A"
  },
  {
    "ticker": "TAK",
    "exchange": "NYSE",
    "name": "Takeda Pharmaceutical Co. Ltd. Sponsored ADR"
  },
  {
    "ticker": "TAL",
    "exchange": "NYSE",
    "name": "TAL Education Group Sponsored ADR Class A"
  },
  {
    "ticker": "TALO",
    "exchange": "NYSE",
    "name": "Talos Energy Inc."
  },
  {
    "ticker": "TALO+",
    "exchange": "NYSE American",
    "name": "Talos Energy Inc. Warrant 2018-28.02.21"
  },
  {
    "ticker": "TAN",
    "exchange": "NYSE ARCA",
    "name": "Invesco Solar ETF"
  },
  {
    "ticker": "TANH",
    "exchange": "NASDAQ",
    "name": "Tantech Holdings Ltd."
  },
  {
    "ticker": "TANNI",
    "exchange": "NASDAQ",
    "name": "TravelCenters of America Inc. 8.25 % Notes 2013-15.1.28 Sr"
  },
  {
    "ticker": "TANNL",
    "exchange": "NASDAQ",
    "name": "TravelCenters of America Inc. 8 % Notes 2014-15.12.29 Sr"
  },
  {
    "ticker": "TANNZ",
    "exchange": "NASDAQ",
    "name": "TravelCenters of America Inc. 8 % Notes 2015-15.10.30"
  },
  {
    "ticker": "TAOP",
    "exchange": "NASDAQ",
    "name": "Taoping Inc."
  },
  {
    "ticker": "TAP",
    "exchange": "NYSE",
    "name": "Molson Coors Beverage Company Class B"
  },
  {
    "ticker": "TAP.A",
    "exchange": "NYSE",
    "name": "Molson Coors Beverage Company Class A"
  },
  {
    "ticker": "TAPR",
    "exchange": "Cboe BZX",
    "name": "Barclays Inverse US Treasury Composite ETN"
  },
  {
    "ticker": "TARA",
    "exchange": "NASDAQ",
    "name": "Protara Therapeutics Inc."
  },
  {
    "ticker": "TARO",
    "exchange": "NYSE",
    "name": "Taro Pharmaceutical Industries Ltd."
  },
  {
    "ticker": "TAST",
    "exchange": "NASDAQ",
    "name": "Carrols Restaurant Group Inc"
  },
  {
    "ticker": "TAT",
    "exchange": "NYSE American",
    "name": "TransAtlantic Petroleum Ltd."
  },
  {
    "ticker": "TATT",
    "exchange": "NASDAQ",
    "name": "TAT Technologies Ltd."
  },
  {
    "ticker": "TAWK",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Communication Services Index Bull 3X Shares"
  },
  {
    "ticker": "TAXF",
    "exchange": "NYSE ARCA",
    "name": "American Century Diversified Municipal Bond ETF"
  },
  {
    "ticker": "TAYD",
    "exchange": "NASDAQ",
    "name": "Taylor Devices Inc."
  },
  {
    "ticker": "TBB",
    "exchange": "NYSE",
    "name": "AT&T Inc 5.35 % Notes 2017-01.11.66 Global"
  },
  {
    "ticker": "TBBK",
    "exchange": "NASDAQ",
    "name": "Bancorp Inc"
  },
  {
    "ticker": "TBC",
    "exchange": "NYSE",
    "name": "AT&T Inc 5.625 % Notes 2018-01.08.67 Global"
  },
  {
    "ticker": "TBF",
    "exchange": "NYSE ARCA",
    "name": "Proshares Short 20+ Year Treasury"
  },
  {
    "ticker": "TBI",
    "exchange": "NYSE",
    "name": "TrueBlue Inc."
  },
  {
    "ticker": "TBIO",
    "exchange": "NASDAQ",
    "name": "Translate Bio Inc."
  },
  {
    "ticker": "TBJL",
    "exchange": "Cboe BZX",
    "name": "Innovator 20+ Year Treasury Bond 9 Buffer ETF - July"
  },
  {
    "ticker": "TBK",
    "exchange": "NASDAQ",
    "name": "Triumph Bancorp Inc."
  },
  {
    "ticker": "TBKCP",
    "exchange": "NASDAQ",
    "name": "Triumph Bancorp Inc Depositary Shs Repr 1/40 7.125 % Non-Cum Perp Red Pfd Rg Shs Series C"
  },
  {
    "ticker": "TBLT",
    "exchange": "NASDAQ",
    "name": "Toughbuilt Industries Inc."
  },
  {
    "ticker": "TBLTW",
    "exchange": "NASDAQ",
    "name": "ToughBuilt Industries Inc Warrant 2018-15.05.23 on ToughBuilt Ind Series A"
  },
  {
    "ticker": "TBLU",
    "exchange": "Cboe BZX",
    "name": "Tortoise Water Fund"
  },
  {
    "ticker": "TBND",
    "exchange": "NYSE ARCA",
    "name": "Collaborative Investment Series Trust Tactical Income Fund"
  },
  {
    "ticker": "TBNK",
    "exchange": "NASDAQ",
    "name": "Territorial Bancorp Inc."
  },
  {
    "ticker": "TBPH",
    "exchange": "NASDAQ",
    "name": "Theravance Biopharma Inc"
  },
  {
    "ticker": "TBT",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort 20+ Year Treasury"
  },
  {
    "ticker": "TBX",
    "exchange": "NYSE ARCA",
    "name": "ProShares Short 7-10 Year Treasury"
  },
  {
    "ticker": "TC",
    "exchange": "NASDAQ",
    "name": "TuanChe Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "TCBI",
    "exchange": "NASDAQ",
    "name": "Texas Capital Bancshares Inc."
  },
  {
    "ticker": "TCBIL",
    "exchange": "NASDAQ",
    "name": "Texas Capital Bancshares Inc 6.5 % Notes 2012-21.9.42 Subord"
  },
  {
    "ticker": "TCBIP",
    "exchange": "NASDAQ",
    "name": "Texas Capital Bancshares Inc 6.5 % Non Cum Perp Pfd Shs Series A"
  },
  {
    "ticker": "TCBK",
    "exchange": "NASDAQ",
    "name": "TriCo Bancshares"
  },
  {
    "ticker": "TCCO",
    "exchange": "NASDAQ",
    "name": "Technical Communications Corporation"
  },
  {
    "ticker": "TCDA",
    "exchange": "NASDAQ",
    "name": "Tricida Inc"
  },
  {
    "ticker": "TCF",
    "exchange": "NASDAQ",
    "name": "TCF Financial Corporation"
  },
  {
    "ticker": "TCFC",
    "exchange": "NASDAQ",
    "name": "Community Financial Corporation"
  },
  {
    "ticker": "TCFCP",
    "exchange": "NASDAQ",
    "name": "TCF Financial Corporation Depositary Shs Repr 1/1000th Non-Cum Red Pfd Shs Series C"
  },
  {
    "ticker": "TCHP",
    "exchange": "NYSE ARCA",
    "name": "T. Rowe Price Blue Chip Growth ETF"
  },
  {
    "ticker": "TCI",
    "exchange": "NYSE",
    "name": "Transcontinental Realty Investors Inc."
  },
  {
    "ticker": "TCMD",
    "exchange": "NASDAQ",
    "name": "Tactile Systems Technology Inc."
  },
  {
    "ticker": "TCO",
    "exchange": "NYSE",
    "name": "Taubman Centers Inc."
  },
  {
    "ticker": "TCO-J",
    "exchange": "NYSE",
    "name": "Taubman Centers Inc 6 1/2 % Cum Red Pfd Shs Series J"
  },
  {
    "ticker": "TCO-K",
    "exchange": "NYSE",
    "name": "Taubman Centers Inc 6 1/4 % Cum Red Pfd Shs Series K"
  },
  {
    "ticker": "TCOM",
    "exchange": "NASDAQ",
    "name": "Trip.com Group Ltd. Sponsored ADR"
  },
  {
    "ticker": "TCON",
    "exchange": "NASDAQ",
    "name": "TRACON Pharmaceuticals Inc."
  },
  {
    "ticker": "TCP",
    "exchange": "NYSE",
    "name": "TC PipeLines LP"
  },
  {
    "ticker": "TCPC",
    "exchange": "NASDAQ",
    "name": "BlackRock TCP Capital Corp."
  },
  {
    "ticker": "TCRR",
    "exchange": "NASDAQ",
    "name": "TCR2 Therapeutics Inc."
  },
  {
    "ticker": "TCS",
    "exchange": "NYSE",
    "name": "The Container Store Group Inc."
  },
  {
    "ticker": "TCTL",
    "exchange": "Cboe BZX",
    "name": "Premise Capital Diversified Tactical ETF"
  },
  {
    "ticker": "TCX",
    "exchange": "NASDAQ",
    "name": "Tucows Inc."
  },
  {
    "ticker": "TD",
    "exchange": "NYSE",
    "name": "Toronto-Dominion Bank"
  },
  {
    "ticker": "TDA",
    "exchange": "NYSE",
    "name": "Telephone And Data Systems Inc 5 7/8 % Notes 2012-1.12.61 Sr"
  },
  {
    "ticker": "TDAC",
    "exchange": "NASDAQ",
    "name": "Trident Acquisitions Corp."
  },
  {
    "ticker": "TDACU",
    "exchange": "NASDAQ",
    "name": "Trident Acquisitions Corp. Units Cons of 1 Sh + 1 Wt 21"
  },
  {
    "ticker": "TDACW",
    "exchange": "NASDAQ",
    "name": "Trident Acquisitions Corp Warrant 2016-2021 on Trident Acqn"
  },
  {
    "ticker": "TDC",
    "exchange": "NYSE",
    "name": "Teradata Corporation"
  },
  {
    "ticker": "TDE",
    "exchange": "NYSE",
    "name": "Telephone And Data Systems Inc 6 7/8 % Notes 2010-15.11.59 Sr"
  },
  {
    "ticker": "TDF",
    "exchange": "NYSE",
    "name": "Templeton Dragon Fund Inc"
  },
  {
    "ticker": "TDG",
    "exchange": "NYSE",
    "name": "TransDigm Group Incorporated"
  },
  {
    "ticker": "TDI",
    "exchange": "NYSE",
    "name": "Telephone And Data Systems Inc 6 5/8 % Notes 2005-31.3.45 Sr"
  },
  {
    "ticker": "TDIV",
    "exchange": "NASDAQ",
    "name": "First Trust NASDAQDAQ Technology Dividend Index Fund"
  },
  {
    "ticker": "TDJ",
    "exchange": "NYSE",
    "name": "Telephone And Data Systems Inc 7 % Notes 2011-15.3.60 Sr"
  },
  {
    "ticker": "TDOC",
    "exchange": "NYSE",
    "name": "Teladoc Health Inc."
  },
  {
    "ticker": "TDS",
    "exchange": "NYSE",
    "name": "Telephone and Data Systems Inc."
  },
  {
    "ticker": "TDTF",
    "exchange": "NYSE ARCA",
    "name": "FlexShares iBoxx 5 Year Target Duration TIPS Index Fund"
  },
  {
    "ticker": "TDTT",
    "exchange": "NYSE ARCA",
    "name": "FlexShares iBoxx 3 Year Target Duration TIPS Index Fund"
  },
  {
    "ticker": "TDV",
    "exchange": "Cboe BZX",
    "name": "ProShares S&P Technology Dividend Aristocrats ETF"
  },
  {
    "ticker": "TDVG",
    "exchange": "NYSE ARCA",
    "name": "T. Rowe Price Dividend Growth ETF"
  },
  {
    "ticker": "TDW",
    "exchange": "NYSE",
    "name": "Tidewater Inc"
  },
  {
    "ticker": "TDW+",
    "exchange": "NYSE American",
    "name": "Tidewater Inc Warrant 2018-24.11.24 on Tidewater"
  },
  {
    "ticker": "TDW+A",
    "exchange": "NYSE",
    "name": "Tidewater Inc Warrant 2017-31.07.23 on Tidewater Series A"
  },
  {
    "ticker": "TDW+B",
    "exchange": "NYSE",
    "name": "Tidewater Inc Warrant 2017-31.07.23 on Tidewater Series B"
  },
  {
    "ticker": "TDY",
    "exchange": "NYSE",
    "name": "Teledyne Technologies Incorporated"
  },
  {
    "ticker": "TEAF",
    "exchange": "NYSE",
    "name": "Tortoise Essential Assets Income Term Fund"
  },
  {
    "ticker": "TEAM",
    "exchange": "NASDAQ",
    "name": "Atlassian Corp. Plc Class A"
  },
  {
    "ticker": "TECB",
    "exchange": "NYSE ARCA",
    "name": "iShares U.S. Tech Breakthrough Multisector ETF"
  },
  {
    "ticker": "TECH",
    "exchange": "NASDAQ",
    "name": "Bio-Techne Corporation"
  },
  {
    "ticker": "TECK",
    "exchange": "NYSE",
    "name": "Teck Resources Limited Class B"
  },
  {
    "ticker": "TECL",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Technology Bull 3x Shares"
  },
  {
    "ticker": "TECS",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Technology Bear 3X Shares"
  },
  {
    "ticker": "TECTP",
    "exchange": "NASDAQ",
    "name": "Tectonic Financial Inc 9.00 % Non-Cum Perp Pfd Registered Shs Series B"
  },
  {
    "ticker": "TEDU",
    "exchange": "NASDAQ",
    "name": "Tarena International Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "TEF",
    "exchange": "NYSE",
    "name": "Telefonica SA Sponsored ADR"
  },
  {
    "ticker": "TEGS",
    "exchange": "Cboe BZX",
    "name": "Collaborative Investment Series Trust Trend Aggregation ESG Fund"
  },
  {
    "ticker": "TEI",
    "exchange": "NYSE",
    "name": "Templeton Emerging Markets Income Fund"
  },
  {
    "ticker": "TEL",
    "exchange": "NYSE",
    "name": "TE Connectivity Ltd."
  },
  {
    "ticker": "TELA",
    "exchange": "NASDAQ",
    "name": "TELA Bio Inc."
  },
  {
    "ticker": "TELL",
    "exchange": "NASDAQ",
    "name": "Tellurian Inc."
  },
  {
    "ticker": "TEN",
    "exchange": "NYSE",
    "name": "Tenneco Inc. Class A"
  },
  {
    "ticker": "TENB",
    "exchange": "NASDAQ",
    "name": "Tenable Holdings Inc."
  },
  {
    "ticker": "TENX",
    "exchange": "NASDAQ",
    "name": "Tenax Therapeutics Inc."
  },
  {
    "ticker": "TEO",
    "exchange": "NYSE",
    "name": "Telecom Argentina SA Sponsored ADR"
  },
  {
    "ticker": "TEQI",
    "exchange": "NYSE ARCA",
    "name": "T. Rowe Price Equity Income ETF"
  },
  {
    "ticker": "TER",
    "exchange": "NASDAQ",
    "name": "Teradyne Inc."
  },
  {
    "ticker": "TERM",
    "exchange": "NYSE ARCA",
    "name": "Equitycompass Tactical Risk Manager ETF"
  },
  {
    "ticker": "TESS",
    "exchange": "NASDAQ",
    "name": "TESSCO Technologies Incorporated"
  },
  {
    "ticker": "TEUM",
    "exchange": "NASDAQ",
    "name": "Pareteum Corporation"
  },
  {
    "ticker": "TEVA",
    "exchange": "NYSE",
    "name": "Teva Pharmaceutical Industries Limited Sponsored ADR"
  },
  {
    "ticker": "TEX",
    "exchange": "NYSE",
    "name": "Terex Corporation"
  },
  {
    "ticker": "TFC",
    "exchange": "NYSE",
    "name": "Truist Financial Corporation"
  },
  {
    "ticker": "TFC-F",
    "exchange": "NYSE",
    "name": "Truist Financial Corporation Depositary Shs Repr 5 1/5 % 1/1000th Non-Cum Perp Pfd Shs Series F"
  },
  {
    "ticker": "TFC-G",
    "exchange": "NYSE",
    "name": "Truist Financial Corp. Depositary Shs Repr 1/1000th 5 1/5 % Non-Cum Perp Pfd ShsSeries G"
  },
  {
    "ticker": "TFC-H",
    "exchange": "NYSE",
    "name": "Truist Financial Corp. Depositary Shs Repr 1/1000th 5 5/8 % Non-Cum Perp Pfd ShsSeries H"
  },
  {
    "ticker": "TFC-I",
    "exchange": "NYSE",
    "name": "Truist Financial Corporation Depositary Shs Repr 1/4000 Perp Pfd Shs Series I"
  },
  {
    "ticker": "TFC-O",
    "exchange": "NYSE",
    "name": "Truist Financial Corporation Depositary Shs Repr 1/1000th 5.25 % Non-Cum Red Perp Pfd Rg Sh Series O"
  },
  {
    "ticker": "TFC-R",
    "exchange": "NYSE",
    "name": "Truist Financial Corporation Depositary Shs Repr 1/1000th Non-Cum Red Perp Pfd Rg Sh Series R"
  },
  {
    "ticker": "TFFP",
    "exchange": "NASDAQ",
    "name": "TFF Pharmaceuticals Inc."
  },
  {
    "ticker": "TFI",
    "exchange": "NYSE ARCA",
    "name": "SPDR Nuveen Bloomberg Barclays Municipal Bond ETF"
  },
  {
    "ticker": "TFII",
    "exchange": "NYSE",
    "name": "TFI International Inc."
  },
  {
    "ticker": "TFIV",
    "exchange": "Cboe BZX",
    "name": "Global X TargetIncome 5 ETF"
  },
  {
    "ticker": "TFJL",
    "exchange": "Cboe BZX",
    "name": "Innovator 20+ Year Treasury Bond 5 Floor ETF - July"
  },
  {
    "ticker": "TFLO",
    "exchange": "NYSE ARCA",
    "name": "iShares Treasury Floating Rate Bond ETF"
  },
  {
    "ticker": "TFLT",
    "exchange": "Cboe BZX",
    "name": "Global X TargetIncome Plus 2 ETF"
  },
  {
    "ticker": "TFSL",
    "exchange": "NASDAQ",
    "name": "TFS Financial Corporation"
  },
  {
    "ticker": "TFX",
    "exchange": "NYSE",
    "name": "Teleflex Incorporated"
  },
  {
    "ticker": "TG",
    "exchange": "NYSE",
    "name": "Tredegar Corporation"
  },
  {
    "ticker": "TGA",
    "exchange": "NASDAQ",
    "name": "TransGlobe Energy Corporation"
  },
  {
    "ticker": "TGB",
    "exchange": "NYSE American",
    "name": "TNYSE Americanko Mines Limited"
  },
  {
    "ticker": "TGC",
    "exchange": "NYSE American",
    "name": "Tengasco Inc."
  },
  {
    "ticker": "TGH",
    "exchange": "NYSE",
    "name": "Textainer Group Holdings Limited"
  },
  {
    "ticker": "TGI",
    "exchange": "NYSE",
    "name": "Triumph Group Inc."
  },
  {
    "ticker": "TGLS",
    "exchange": "NASDAQ",
    "name": "Tecnoglass Inc."
  },
  {
    "ticker": "TGNA",
    "exchange": "NYSE",
    "name": "TEGNA Inc."
  },
  {
    "ticker": "TGP",
    "exchange": "NYSE",
    "name": "Teekay LNG Partners L.P."
  },
  {
    "ticker": "TGP-A",
    "exchange": "NYSE",
    "name": "Teekay LNG Partners L.P. 9% Cum Red Pfd Partnership Units Series A"
  },
  {
    "ticker": "TGP-B",
    "exchange": "NYSE",
    "name": "Teekay LNG Partners L.P. Cum Red Perp Pfd Registered Shs Series B"
  },
  {
    "ticker": "TGRW",
    "exchange": "NYSE ARCA",
    "name": "T. Rowe Price Growth Stock ETF"
  },
  {
    "ticker": "TGS",
    "exchange": "NYSE",
    "name": "Transportadora de Gas del Sur SA Sponsored ADR Class B RegS"
  },
  {
    "ticker": "TGT",
    "exchange": "NYSE",
    "name": "Target Corporation"
  },
  {
    "ticker": "TGTX",
    "exchange": "NASDAQ",
    "name": "TG Therapeutics Inc."
  },
  {
    "ticker": "TH",
    "exchange": "NASDAQ",
    "name": "Target Hospitality Corp."
  },
  {
    "ticker": "THBR",
    "exchange": "NASDAQ",
    "name": "Thunder Bridge Acquisition II Ltd Class A"
  },
  {
    "ticker": "THBRU",
    "exchange": "NASDAQ",
    "name": "Thunder Bridge Acquisition II Ltd. Units Cons of 1 Class A ordinary Shs + 1/2 redeemable Wt"
  },
  {
    "ticker": "THBRW",
    "exchange": "NASDAQ",
    "name": "Thunder Bridge Acquisition II Ltd Warrant -on Thunder"
  },
  {
    "ticker": "THC",
    "exchange": "NYSE",
    "name": "Tenet Healthcare Corporation"
  },
  {
    "ticker": "THCA",
    "exchange": "NASDAQ",
    "name": "Tuscan Holdings Corp. II"
  },
  {
    "ticker": "THCAU",
    "exchange": "NASDAQ",
    "name": "Tuscan Holdings Corp II Units Cons of 1 Sh + 1/2 Wt 01.04.26"
  },
  {
    "ticker": "THCAW",
    "exchange": "NASDAQ",
    "name": "Tuscan Holdings Corp II Warrant -01.04.26 on Tuscan Hldg II Rg"
  },
  {
    "ticker": "THCB",
    "exchange": "NASDAQ",
    "name": "Tuscan Holdings Corp."
  },
  {
    "ticker": "THCBU",
    "exchange": "NASDAQ",
    "name": "Tuscan Holdings Corp. Units Cons of 1 Sh + 1 Wt"
  },
  {
    "ticker": "THCBW",
    "exchange": "NASDAQ",
    "name": "Tuscan Holdings Corp Warrant 2019- on Tuscan Hldgs"
  },
  {
    "ticker": "THCX",
    "exchange": "NYSE ARCA",
    "name": "Cannabis ETF"
  },
  {
    "ticker": "THD",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Thailand ETF"
  },
  {
    "ticker": "THFF",
    "exchange": "NASDAQ",
    "name": "First Financial Corporation"
  },
  {
    "ticker": "THG",
    "exchange": "NYSE",
    "name": "Hanover Insurance Group Inc."
  },
  {
    "ticker": "THGA",
    "exchange": "NYSE",
    "name": "Hanover Insurance Group Inc. 6.35 % Debentures 2013-30.3.53 Subord"
  },
  {
    "ticker": "THM",
    "exchange": "NYSE American",
    "name": "International Tower Hill Mines Ltd."
  },
  {
    "ticker": "THMO",
    "exchange": "NASDAQ",
    "name": "ThermoGenesis Holdings Inc."
  },
  {
    "ticker": "THNQ",
    "exchange": "NYSE ARCA",
    "name": "ROBO Global Artificial Intelligence ETF"
  },
  {
    "ticker": "THO",
    "exchange": "NYSE",
    "name": "Thor Industries Inc."
  },
  {
    "ticker": "THQ",
    "exchange": "NYSE",
    "name": "Tekla Healthcare Opportunities Fund"
  },
  {
    "ticker": "THR",
    "exchange": "NYSE",
    "name": "Thermon Group Holdings Inc."
  },
  {
    "ticker": "THRM",
    "exchange": "NASDAQ",
    "name": "Gentherm Incorporated"
  },
  {
    "ticker": "THS",
    "exchange": "NYSE",
    "name": "TreeHouse Foods Inc."
  },
  {
    "ticker": "THTX",
    "exchange": "NASDAQ",
    "name": "Theratechnologies Inc."
  },
  {
    "ticker": "THW",
    "exchange": "NYSE",
    "name": "Tekla World Healthcare Fund"
  },
  {
    "ticker": "THWWW",
    "exchange": "NASDAQ",
    "name": "Target Hospitality Corp Warrant 2019-15.03.24 on Target Hospitality Corp"
  },
  {
    "ticker": "THY",
    "exchange": "Cboe BZX",
    "name": "Agility Shares Dynamic Tactical Income ETF"
  },
  {
    "ticker": "TIF",
    "exchange": "NYSE",
    "name": "Tiffany & Co."
  },
  {
    "ticker": "TIG",
    "exchange": "NASDAQ",
    "name": "Trean Insurance Group Inc."
  },
  {
    "ticker": "TIGO",
    "exchange": "NASDAQ",
    "name": "Millicom International Cellular SA"
  },
  {
    "ticker": "TIGR",
    "exchange": "NASDAQ",
    "name": "UP Fintech Holding Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "TILE",
    "exchange": "NASDAQ",
    "name": "Interface Inc."
  },
  {
    "ticker": "TILT",
    "exchange": "Cboe BZX",
    "name": "FlexShares Morningstar US Market Factor Tilt Index Fund"
  },
  {
    "ticker": "TIP",
    "exchange": "NYSE ARCA",
    "name": "iShares TIPS Bond ETF"
  },
  {
    "ticker": "TIPT",
    "exchange": "NASDAQ",
    "name": "Tiptree Inc."
  },
  {
    "ticker": "TIPX",
    "exchange": "NYSE ARCA",
    "name": "SPDR Bloomberg Barclays 1-10 Year TIPS ETF"
  },
  {
    "ticker": "TIPZ",
    "exchange": "NYSE ARCA",
    "name": "PIMCO Broad US TIPS Index ETF"
  },
  {
    "ticker": "TISI",
    "exchange": "NYSE",
    "name": "Team Inc."
  },
  {
    "ticker": "TITN",
    "exchange": "NASDAQ",
    "name": "Titan Machinery Inc."
  },
  {
    "ticker": "TJX",
    "exchange": "NYSE",
    "name": "TJX Companies Inc"
  },
  {
    "ticker": "TK",
    "exchange": "NYSE",
    "name": "Teekay Corporation"
  },
  {
    "ticker": "TKAT",
    "exchange": "NYSE American",
    "name": "Takung Art Co Ltd"
  },
  {
    "ticker": "TKC",
    "exchange": "NYSE",
    "name": "Turkcell Iletisim Hizmetleri A.S. Sponsored ADR"
  },
  {
    "ticker": "TKR",
    "exchange": "NYSE",
    "name": "Timken Company"
  },
  {
    "ticker": "TLC",
    "exchange": "NASDAQ",
    "name": "Taiwan Liposome Co Ltd Sponsored ADR"
  },
  {
    "ticker": "TLDH",
    "exchange": "NYSE ARCA",
    "name": "FlexShares Currency Hedged Morningstar DM ex-US Factor Tilt"
  },
  {
    "ticker": "TLEH",
    "exchange": "NYSE ARCA",
    "name": "FlexShares Currency Hedged Morningstar EM Factor Tilt Index Fd"
  },
  {
    "ticker": "TLGT",
    "exchange": "NASDAQ",
    "name": "Teligent Inc."
  },
  {
    "ticker": "TLH",
    "exchange": "NYSE ARCA",
    "name": "iShares 10-20 Year Treasury Bond ETF"
  },
  {
    "ticker": "TLI",
    "exchange": "NYSE",
    "name": "Western Asset Corporate Loan Fund Inc"
  },
  {
    "ticker": "TLK",
    "exchange": "NYSE",
    "name": "PT Telekomunikasi Indonesia (Persero) Tbk. Sponsored ADR Class B"
  },
  {
    "ticker": "TLND",
    "exchange": "NASDAQ",
    "name": "Talend SA Sponsored ADR"
  },
  {
    "ticker": "TLRY",
    "exchange": "NASDAQ",
    "name": "Tilray Inc."
  },
  {
    "ticker": "TLSA",
    "exchange": "NASDAQ",
    "name": "Tiziana Life Sciences PLC Sponsored ADR"
  },
  {
    "ticker": "TLT",
    "exchange": "NASDAQ",
    "name": "iShares 20+ Year Treasury Bond ETF"
  },
  {
    "ticker": "TLTD",
    "exchange": "NYSE ARCA",
    "name": "FlexShares Morningstar Developed Markets ex-US Factor Tilt"
  },
  {
    "ticker": "TLTE",
    "exchange": "NYSE ARCA",
    "name": "FlexShares Morningstar Emerging Markets Factor Tilt Index"
  },
  {
    "ticker": "TLYS",
    "exchange": "NYSE",
    "name": "Tilly's Inc. Class A"
  },
  {
    "ticker": "TM",
    "exchange": "NYSE",
    "name": "Toyota Motor Corp. Sponsored ADR"
  },
  {
    "ticker": "TMBR",
    "exchange": "NYSE American",
    "name": "Timber Pharmaceuticals Inc"
  },
  {
    "ticker": "TMDI",
    "exchange": "NASDAQ",
    "name": "Titan Medical Inc."
  },
  {
    "ticker": "TMDV",
    "exchange": "Cboe BZX",
    "name": "ProShares Russell US Dividend Growers ETF"
  },
  {
    "ticker": "TMDX",
    "exchange": "NASDAQ",
    "name": "TransMedics Group Inc."
  },
  {
    "ticker": "TME",
    "exchange": "NYSE",
    "name": "Tencent Music Entertainment Group Sponsored ADR Class A"
  },
  {
    "ticker": "TMF",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily 20+ Year Treasury Bull 3X Shares"
  },
  {
    "ticker": "TMFC",
    "exchange": "Cboe BZX",
    "name": "Motley Fool 100 Index ETF"
  },
  {
    "ticker": "TMHC",
    "exchange": "NYSE",
    "name": "Taylor Morrison Home Corporation"
  },
  {
    "ticker": "TMO",
    "exchange": "NYSE",
    "name": "Thermo Fisher Scientific Inc."
  },
  {
    "ticker": "TMP",
    "exchange": "NYSE American",
    "name": "Tompkins Financial Corporation"
  },
  {
    "ticker": "TMQ",
    "exchange": "NYSE American",
    "name": "Trilogy Metals Inc."
  },
  {
    "ticker": "TMST",
    "exchange": "NYSE",
    "name": "TimkenSteel Corp"
  },
  {
    "ticker": "TMUS",
    "exchange": "NASDAQ",
    "name": "T-Mobile US Inc."
  },
  {
    "ticker": "TMV",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily 20+ Year Treasury Bear 3x Shares"
  },
  {
    "ticker": "TNA",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Small Cap Bull 3x Shares"
  },
  {
    "ticker": "TNAV",
    "exchange": "NASDAQ",
    "name": "TeleNav Inc."
  },
  {
    "ticker": "TNC",
    "exchange": "NYSE",
    "name": "Tennant Company"
  },
  {
    "ticker": "TNDM",
    "exchange": "NASDAQ",
    "name": "Tandem Diabetes Care Inc."
  },
  {
    "ticker": "TNET",
    "exchange": "NYSE",
    "name": "TriNet Group Inc."
  },
  {
    "ticker": "TNK",
    "exchange": "NYSE",
    "name": "Teekay Tankers Ltd. Class A"
  },
  {
    "ticker": "TNP",
    "exchange": "NYSE",
    "name": "Tsakos Energy Navigation Limited"
  },
  {
    "ticker": "TNP-C",
    "exchange": "NYSE",
    "name": "Tsakos Energy Navigation Limited 8.875 % Cum Red Perp Pfd Series C"
  },
  {
    "ticker": "TNP-D",
    "exchange": "NYSE",
    "name": "Tsakos Energy Navigation Limited 8.75 % Cum Red Perp Pfd Series D"
  },
  {
    "ticker": "TNP-E",
    "exchange": "NYSE",
    "name": "Tsakos Energy Navigation Ltd Cum Red Perp Pfd Registered Shs Series E"
  },
  {
    "ticker": "TNP-F",
    "exchange": "NYSE",
    "name": "Tsakos Energy Navigation Limited Cum Red Perp Pfd Registered Series F"
  },
  {
    "ticker": "TNXP",
    "exchange": "NASDAQ",
    "name": "Tonix Pharmaceuticals Holding Corp."
  },
  {
    "ticker": "TOK",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Kokusai ETF"
  },
  {
    "ticker": "TOKE",
    "exchange": "Cboe BZX",
    "name": "Cambria Cannabis ETF"
  },
  {
    "ticker": "TOL",
    "exchange": "NYSE",
    "name": "Toll Brothers Inc."
  },
  {
    "ticker": "TOLZ",
    "exchange": "NYSE ARCA",
    "name": "ProShares DJ Brookfield Global Infrastructure ETF"
  },
  {
    "ticker": "TOPS",
    "exchange": "NASDAQ",
    "name": "TOP Ships Inc."
  },
  {
    "ticker": "TORC",
    "exchange": "NASDAQ",
    "name": "resTORbio Inc."
  },
  {
    "ticker": "TOT",
    "exchange": "NYSE",
    "name": "Total SE Sponsored ADR Class B"
  },
  {
    "ticker": "TOTA",
    "exchange": "NASDAQ",
    "name": "Tottenham Acquisition I Ltd."
  },
  {
    "ticker": "TOTAR",
    "exchange": "NASDAQ",
    "name": "Tottenham Acquisition I Ltd Rights For Shares"
  },
  {
    "ticker": "TOTAU",
    "exchange": "NASDAQ",
    "name": "Tottenham Acquisition I Ltd. Units Cons of 1 Shs + 1 Rts + 1 Wts"
  },
  {
    "ticker": "TOTAW",
    "exchange": "NASDAQ",
    "name": "Tottenham Acquisition I Ltd Warrant"
  },
  {
    "ticker": "TOTL",
    "exchange": "NYSE ARCA",
    "name": "SPDR DoubleLine Total Return Tactical ETF"
  },
  {
    "ticker": "TOUR",
    "exchange": "NASDAQ",
    "name": "Tuniu Corporation Sponsored ADR Class A"
  },
  {
    "ticker": "TOWN",
    "exchange": "NASDAQ",
    "name": "TowneBank"
  },
  {
    "ticker": "TPAY",
    "exchange": "Cboe BZX",
    "name": "Tortoise Digital Payments Infrastructure Fund"
  },
  {
    "ticker": "TPB",
    "exchange": "NYSE",
    "name": "Turning Point Brands Inc"
  },
  {
    "ticker": "TPC",
    "exchange": "NYSE",
    "name": "Tutor Perini Corporation"
  },
  {
    "ticker": "TPCO",
    "exchange": "NASDAQ",
    "name": "Tribune Publishing Co."
  },
  {
    "ticker": "TPH",
    "exchange": "NYSE",
    "name": "TRI Pointe Group Inc"
  },
  {
    "ticker": "TPHD",
    "exchange": "NYSE ARCA",
    "name": "Timothy Plan High Dividend Stock ETF"
  },
  {
    "ticker": "TPHS",
    "exchange": "NYSE American",
    "name": "Trinity Place Holdings Inc."
  },
  {
    "ticker": "TPIC",
    "exchange": "NASDAQ",
    "name": "TPI Composites Inc."
  },
  {
    "ticker": "TPIF",
    "exchange": "NYSE ARCA",
    "name": "Timothy Plan International ETF"
  },
  {
    "ticker": "TPL",
    "exchange": "NYSE",
    "name": "Texas Pacific Land Trust"
  },
  {
    "ticker": "TPLC",
    "exchange": "NYSE ARCA",
    "name": "Timothy Plan Fund Timothy Plan US Large/Mid Cap Core Fund"
  },
  {
    "ticker": "TPOR",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Transportation Bull 3X Shares"
  },
  {
    "ticker": "TPR",
    "exchange": "NYSE",
    "name": "Tapestry Inc."
  },
  {
    "ticker": "TPRE",
    "exchange": "NYSE",
    "name": "Third Point Reinsurance Ltd."
  },
  {
    "ticker": "TPSC",
    "exchange": "NYSE ARCA",
    "name": "Timothy Plan US Small Cap Core ETF"
  },
  {
    "ticker": "TPTX",
    "exchange": "NASDAQ",
    "name": "Turning Point Therapeutics Inc."
  },
  {
    "ticker": "TPVG",
    "exchange": "NYSE",
    "name": "TriplePoint Venture Growth BDC Corp."
  },
  {
    "ticker": "TPVY",
    "exchange": "NYSE",
    "name": "TriplePoint Venture Growth BDC Corp 5.75 % Notes 2017-15.07.22 Global"
  },
  {
    "ticker": "TPX",
    "exchange": "NYSE",
    "name": "Tempur Sealy International Inc"
  },
  {
    "ticker": "TPYP",
    "exchange": "NYSE ARCA",
    "name": "Tortoise North American Pipeline Fund"
  },
  {
    "ticker": "TPZ",
    "exchange": "NYSE",
    "name": "Tortoise Power and Energy Infrastructure Fund Inc"
  },
  {
    "ticker": "TQQQ",
    "exchange": "NASDAQ",
    "name": "ProShares UltraPro QQQ"
  },
  {
    "ticker": "TR",
    "exchange": "NYSE",
    "name": "Tootsie Roll Industries Inc."
  },
  {
    "ticker": "TRC",
    "exchange": "NYSE",
    "name": "Tejon Ranch Co."
  },
  {
    "ticker": "TRCH",
    "exchange": "NASDAQ",
    "name": "Torchlight Energy Resources Inc."
  },
  {
    "ticker": "TREB",
    "exchange": "NYSE",
    "name": "Trebia Acquisition Corp. Class A"
  },
  {
    "ticker": "TREB=",
    "exchange": "NYSE",
    "name": "Trebia Acquisition Corp. Units Cons of 1 Sh A + 1/3 Wt"
  },
  {
    "ticker": "TREB+",
    "exchange": "NYSE",
    "name": "Trebia Acquisition Corp Warrant - on Trebia Rg"
  },
  {
    "ticker": "TREC",
    "exchange": "NYSE",
    "name": "Trecora Resources"
  },
  {
    "ticker": "TREE",
    "exchange": "NASDAQ",
    "name": "LendingTree Inc."
  },
  {
    "ticker": "TREX",
    "exchange": "NYSE",
    "name": "Trex Company Inc."
  },
  {
    "ticker": "TRGP",
    "exchange": "NYSE",
    "name": "Targa Resources Corp."
  },
  {
    "ticker": "TRHC",
    "exchange": "NASDAQ",
    "name": "Tabula Rasa Healthcare Inc."
  },
  {
    "ticker": "TRI",
    "exchange": "NYSE",
    "name": "Thomson Reuters Corporation"
  },
  {
    "ticker": "TRIB",
    "exchange": "NASDAQ",
    "name": "Trinity Biotech Plc Sponsored ADR Class A"
  },
  {
    "ticker": "TRIL",
    "exchange": "NASDAQ",
    "name": "Trillium Therapeutics Inc."
  },
  {
    "ticker": "TRIP",
    "exchange": "NASDAQ",
    "name": "TripAdvisor Inc."
  },
  {
    "ticker": "TRMB",
    "exchange": "NASDAQ",
    "name": "Trimble Inc."
  },
  {
    "ticker": "TRMD",
    "exchange": "NASDAQ",
    "name": "TORM PLC Class A"
  },
  {
    "ticker": "TRMK",
    "exchange": "NASDAQ",
    "name": "Trustmark Corporation"
  },
  {
    "ticker": "TRMT",
    "exchange": "NASDAQ",
    "name": "Tremont Mortgage Trust"
  },
  {
    "ticker": "TRN",
    "exchange": "NYSE",
    "name": "Trinity Industries Inc."
  },
  {
    "ticker": "TRND",
    "exchange": "NYSE ARCA",
    "name": "Pacer Trendpilot Fund of Funds ETF"
  },
  {
    "ticker": "TRNE",
    "exchange": "NYSE",
    "name": "Trine Acquisition Corp. Class A"
  },
  {
    "ticker": "TRNE=",
    "exchange": "NYSE",
    "name": "Trine Acquisition Corp. Units Cons of 1 Sh -A- + 0.5 Wt 01.12.25"
  },
  {
    "ticker": "TRNE+",
    "exchange": "NYSE",
    "name": "Trine Acquisition Corp Warrant 2019-01.12.25 on Trine Acqn-A"
  },
  {
    "ticker": "TRNO",
    "exchange": "NYSE",
    "name": "Terreno Realty Corporation"
  },
  {
    "ticker": "TRNS",
    "exchange": "NASDAQ",
    "name": "Transcat Inc."
  },
  {
    "ticker": "TROW",
    "exchange": "NASDAQ",
    "name": "T. Rowe Price Group"
  },
  {
    "ticker": "TROX",
    "exchange": "NYSE",
    "name": "Tronox Holdings Plc"
  },
  {
    "ticker": "TRP",
    "exchange": "NYSE",
    "name": "TC Energy Corporation"
  },
  {
    "ticker": "TRQ",
    "exchange": "NYSE",
    "name": "Turquoise Hill Resources Ltd."
  },
  {
    "ticker": "TRS",
    "exchange": "NASDAQ",
    "name": "TriMas Corporation"
  },
  {
    "ticker": "TRST",
    "exchange": "NASDAQ",
    "name": "TrustCo Bank Corp NY"
  },
  {
    "ticker": "TRT",
    "exchange": "NYSE American",
    "name": "Trio-Tech International"
  },
  {
    "ticker": "TRTN",
    "exchange": "NYSE",
    "name": "Triton International Ltd. Class A"
  },
  {
    "ticker": "TRTN-A",
    "exchange": "NYSE",
    "name": "Triton International Ltd. 8.5% Cum Conv Red Perp Pfd Registered Shs Series A"
  },
  {
    "ticker": "TRTN-B",
    "exchange": "NYSE",
    "name": "Triton International Ltd 8% Conv Cum Red Perp Pfd Registered Shs Series B"
  },
  {
    "ticker": "TRTN-C",
    "exchange": "NYSE",
    "name": "Triton International Ltd 7.375 % Cum Conv Red Perp Pfd Registered Shs Series C"
  },
  {
    "ticker": "TRTN-D",
    "exchange": "NYSE",
    "name": "Triton International Ltd 6.875 % Cum Conv Red Perp Pfd Registered Shs Series D"
  },
  {
    "ticker": "TRTX",
    "exchange": "NYSE",
    "name": "TPG RE Finance Trust Inc."
  },
  {
    "ticker": "TRTY",
    "exchange": "Cboe BZX",
    "name": "Cambria Trinity ETF"
  },
  {
    "ticker": "TRU",
    "exchange": "NYSE",
    "name": "TransUnion"
  },
  {
    "ticker": "TRUE",
    "exchange": "NASDAQ",
    "name": "TrueCar Inc."
  },
  {
    "ticker": "TRUP",
    "exchange": "NASDAQ",
    "name": "Trupanion Inc."
  },
  {
    "ticker": "TRV",
    "exchange": "NYSE",
    "name": "Travelers Companies Inc."
  },
  {
    "ticker": "TRVG",
    "exchange": "NASDAQ",
    "name": "trivago N.V. Sponsored ADR Class A"
  },
  {
    "ticker": "TRVI",
    "exchange": "NASDAQ",
    "name": "Trevi Therapeutics Inc."
  },
  {
    "ticker": "TRVN",
    "exchange": "NASDAQ",
    "name": "Trevena Inc."
  },
  {
    "ticker": "TRWH",
    "exchange": "NYSE",
    "name": "Twin River Worldwide Holdings Inc."
  },
  {
    "ticker": "TRX",
    "exchange": "NYSE American",
    "name": "Tanzanian Gold Corporation"
  },
  {
    "ticker": "TRXC",
    "exchange": "NYSE American",
    "name": "TransEnterix Inc."
  },
  {
    "ticker": "TS",
    "exchange": "NYSE",
    "name": "Tenaris S.A. Sponsored ADR"
  },
  {
    "ticker": "TSBK",
    "exchange": "NASDAQ",
    "name": "Timberland Bancorp Inc."
  },
  {
    "ticker": "TSC",
    "exchange": "NASDAQ",
    "name": "TriState Capital Holdings Inc."
  },
  {
    "ticker": "TSCAP",
    "exchange": "NASDAQ",
    "name": "TriState Capital Holdings Inc. Deposit Shs Repr 1/40th 6.75 % Non-Cum Perp Red Pfd Rg Shs Series A"
  },
  {
    "ticker": "TSCBP",
    "exchange": "NASDAQ",
    "name": "TriState Capital Holdings Inc Depositary Shares Repr 1/40th Non-Cum Red Perp Pfd Registered Shs Series B"
  },
  {
    "ticker": "TSCO",
    "exchange": "NASDAQ",
    "name": "Tractor Supply Company"
  },
  {
    "ticker": "TSE",
    "exchange": "NYSE",
    "name": "Trinseo SA"
  },
  {
    "ticker": "TSEM",
    "exchange": "NASDAQ",
    "name": "Tower Semiconductor Ltd"
  },
  {
    "ticker": "TSI",
    "exchange": "NYSE",
    "name": "TCW Strategic Income Fund Inc"
  },
  {
    "ticker": "TSLA",
    "exchange": "NASDAQ",
    "name": "Tesla Inc"
  },
  {
    "ticker": "TSLX",
    "exchange": "NYSE",
    "name": "Sixth Street Specialty Lending Inc."
  },
  {
    "ticker": "TSM",
    "exchange": "NYSE",
    "name": "Taiwan Semiconductor Manufacturing Co. Ltd. Sponsored ADR"
  },
  {
    "ticker": "TSN",
    "exchange": "NYSE",
    "name": "Tyson Foods Inc. Class A"
  },
  {
    "ticker": "TSQ",
    "exchange": "NYSE",
    "name": "Townsquare Media Inc. Class A"
  },
  {
    "ticker": "TSRI",
    "exchange": "NASDAQ",
    "name": "TSR Inc."
  },
  {
    "ticker": "TSU",
    "exchange": "NYSE",
    "name": "TIM Participacoes S.A. Sponsored ADR"
  },
  {
    "ticker": "TT",
    "exchange": "NYSE",
    "name": "Trane Technologies plc"
  },
  {
    "ticker": "TTAC",
    "exchange": "Cboe BZX",
    "name": "TrimTabs All Cap US Free-Cash-Flow ETF"
  },
  {
    "ticker": "TTAI",
    "exchange": "Cboe BZX",
    "name": "TrimTabs All Cap International Free-Cash-Flow ETF"
  },
  {
    "ticker": "TTC",
    "exchange": "NYSE",
    "name": "Toro Company"
  },
  {
    "ticker": "TTD",
    "exchange": "NASDAQ",
    "name": "Trade Desk Inc. Class A"
  },
  {
    "ticker": "TTEC",
    "exchange": "NASDAQ",
    "name": "TTEC Holdings Inc."
  },
  {
    "ticker": "TTEK",
    "exchange": "NASDAQ",
    "name": "Tetra Tech Inc."
  },
  {
    "ticker": "TTGT",
    "exchange": "NASDAQ",
    "name": "TechTarget Inc."
  },
  {
    "ticker": "TTI",
    "exchange": "NYSE",
    "name": "TETRA Technologies Inc."
  },
  {
    "ticker": "TTM",
    "exchange": "NYSE",
    "name": "Tata Motors Limited Sponsored ADR"
  },
  {
    "ticker": "TTMI",
    "exchange": "NASDAQ",
    "name": "TTM Technologies Inc."
  },
  {
    "ticker": "TTNP",
    "exchange": "NASDAQ",
    "name": "Titan Pharmaceuticals Inc."
  },
  {
    "ticker": "TTOO",
    "exchange": "NASDAQ",
    "name": "T2 Biosystems Inc."
  },
  {
    "ticker": "TTP",
    "exchange": "NYSE",
    "name": "Tortoise Pipeline & Energy Fund Inc"
  },
  {
    "ticker": "TTT",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraPro Short 20+ Year Treasury"
  },
  {
    "ticker": "TTTN",
    "exchange": "NASDAQ",
    "name": "TigerShares Trust UP Fintech China-U.S. Internet Titans ETF"
  },
  {
    "ticker": "TTWO",
    "exchange": "NASDAQ",
    "name": "Take-Two Interactive Software Inc."
  },
  {
    "ticker": "TU",
    "exchange": "NYSE",
    "name": "TELUS Corporation"
  },
  {
    "ticker": "TUFN",
    "exchange": "NYSE",
    "name": "Tufin Software Technologies Ltd"
  },
  {
    "ticker": "TUP",
    "exchange": "NYSE",
    "name": "Tupperware Brands Corporation"
  },
  {
    "ticker": "TUR",
    "exchange": "NASDAQ",
    "name": "iShares MSCI Turkey ETF"
  },
  {
    "ticker": "TURN",
    "exchange": "NASDAQ",
    "name": "180 Degree Capital Corp"
  },
  {
    "ticker": "TUSA",
    "exchange": "NASDAQ",
    "name": "First Trust Total US Market AlphaDEX ETF"
  },
  {
    "ticker": "TUSK",
    "exchange": "NASDAQ",
    "name": "Mammoth Energy Services Inc."
  },
  {
    "ticker": "TV",
    "exchange": "NYSE",
    "name": "Grupo Televisa S.A.B. Sponsored ADR"
  },
  {
    "ticker": "TVC",
    "exchange": "NYSE",
    "name": "Tennessee Valley Authority Putable Automatic Rate Reset Secs 1998-1.6.28 Sr Series D Step Down"
  },
  {
    "ticker": "TVE",
    "exchange": "NYSE",
    "name": "Tennessee Valley Authority 6 1/2 % Putable Automatic Rate Reset Secs 1999-1.5.29 Series A"
  },
  {
    "ticker": "TVTY",
    "exchange": "NASDAQ",
    "name": "Tivity Health Inc."
  },
  {
    "ticker": "TW",
    "exchange": "NASDAQ",
    "name": "Tradeweb Markets Inc. Class A"
  },
  {
    "ticker": "TWI",
    "exchange": "NYSE",
    "name": "Titan International Inc."
  },
  {
    "ticker": "TWIN",
    "exchange": "NASDAQ",
    "name": "Twin Disc incorporated"
  },
  {
    "ticker": "TWLO",
    "exchange": "NYSE",
    "name": "Twilio Inc. Class A"
  },
  {
    "ticker": "TWM",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort Russell2000"
  },
  {
    "ticker": "TWMC",
    "exchange": "NASDAQ",
    "name": "Trans World Entertainment Corporation"
  },
  {
    "ticker": "TWN",
    "exchange": "NYSE",
    "name": "Taiwan Fund Inc"
  },
  {
    "ticker": "TWNK",
    "exchange": "NASDAQ",
    "name": "Hostess Brands Inc. Class A"
  },
  {
    "ticker": "TWNKW",
    "exchange": "NASDAQ",
    "name": "Hostess Brands Inc Warrants 2016-11.4.2021 on Hostess Brands"
  },
  {
    "ticker": "TWO",
    "exchange": "NYSE",
    "name": "Two Harbors Investment Corp."
  },
  {
    "ticker": "TWO-A",
    "exchange": "NYSE",
    "name": "Two Harbors Investment Corp. Cum Red Pfd Series A"
  },
  {
    "ticker": "TWO-B",
    "exchange": "NYSE",
    "name": "Two Harbors Investment Corp. Conv Cum Red Pfd Series B"
  },
  {
    "ticker": "TWO-C",
    "exchange": "NYSE",
    "name": "Two Harbors Investment Corp. Cum Conv Perp Red Pfd Series C"
  },
  {
    "ticker": "TWO-D",
    "exchange": "NYSE",
    "name": "Two Harbors Investment Corp 7.75 % Cum Conv Perp Red Pfd Registered Shs Series D"
  },
  {
    "ticker": "TWO-E",
    "exchange": "NYSE",
    "name": "Two Harbors Investment Corp 7.50 % Cum Conv Red Pfd Registered Shs Series E"
  },
  {
    "ticker": "TWOU",
    "exchange": "NASDAQ",
    "name": "2U Inc."
  },
  {
    "ticker": "TWST",
    "exchange": "NASDAQ",
    "name": "Twist Bioscience Corp."
  },
  {
    "ticker": "TWTR",
    "exchange": "NYSE",
    "name": "Twitter Inc."
  },
  {
    "ticker": "TX",
    "exchange": "NYSE",
    "name": "Ternium S.A. Sponsored ADR"
  },
  {
    "ticker": "TXG",
    "exchange": "NASDAQ",
    "name": "10x Genomics Inc Class A"
  },
  {
    "ticker": "TXMD",
    "exchange": "NASDAQ",
    "name": "TherapeuticsMD Inc."
  },
  {
    "ticker": "TXN",
    "exchange": "NASDAQ",
    "name": "Texas Instruments Incorporated"
  },
  {
    "ticker": "TXRH",
    "exchange": "NASDAQ",
    "name": "Texas Roadhouse Inc."
  },
  {
    "ticker": "TXT",
    "exchange": "NYSE",
    "name": "Textron Inc."
  },
  {
    "ticker": "TY",
    "exchange": "NYSE",
    "name": "Tri-Continental Corp"
  },
  {
    "ticker": "TY-",
    "exchange": "NYSE",
    "name": "Tri-Continental Corp Voting USD 2 1/2 Cum.Pref.Shs"
  },
  {
    "ticker": "TYBS",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily 20+ Year Treasury Bear 1X Shares"
  },
  {
    "ticker": "TYD",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily 7-10 Year Treasury Bull 3x Shares"
  },
  {
    "ticker": "TYG",
    "exchange": "NYSE",
    "name": "Tortoise Energy Infrastructure Corp"
  },
  {
    "ticker": "TYHT",
    "exchange": "NASDAQ",
    "name": "Shineco Inc."
  },
  {
    "ticker": "TYL",
    "exchange": "NYSE",
    "name": "Tyler Technologies Inc."
  },
  {
    "ticker": "TYME",
    "exchange": "NASDAQ",
    "name": "Tyme Technologies Inc."
  },
  {
    "ticker": "TYO",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily 7-10 Year Treasury Bear 3x Shares"
  },
  {
    "ticker": "TZA",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Small Cap Bull and Bear 3X Shares"
  },
  {
    "ticker": "TZAC",
    "exchange": "NASDAQ",
    "name": "Tenzing Acquisition Corp."
  },
  {
    "ticker": "TZACU",
    "exchange": "NASDAQ",
    "name": "Tenzing Acquisition Corp. Units Cons of 1 ordinary Shs + 1 Wt"
  },
  {
    "ticker": "TZACW",
    "exchange": "NASDAQ",
    "name": "Tenzing Acquisition Corp Warrant -31.08.25 on Tenzing Acquisition"
  },
  {
    "ticker": "TZOO",
    "exchange": "NASDAQ",
    "name": "Travelzoo"
  },
  {
    "ticker": "UA",
    "exchange": "NYSE",
    "name": "Under Armour Inc. Class C"
  },
  {
    "ticker": "UAA",
    "exchange": "NYSE",
    "name": "Under Armour Inc. Class A"
  },
  {
    "ticker": "UAE",
    "exchange": "NASDAQ",
    "name": "iShares MSCI UAE ETF"
  },
  {
    "ticker": "UAG",
    "exchange": "NYSE ARCA",
    "name": "ETRACS CMCI Agriculture Total Return ETN"
  },
  {
    "ticker": "UAL",
    "exchange": "NASDAQ",
    "name": "United Airlines Holdings Inc."
  },
  {
    "ticker": "UAMY",
    "exchange": "NYSE American",
    "name": "United States Antimony Corporation"
  },
  {
    "ticker": "UAN",
    "exchange": "NYSE",
    "name": "CVR Partners LP"
  },
  {
    "ticker": "UAPR",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Ultra Buffer ETF April"
  },
  {
    "ticker": "UAUD",
    "exchange": "NYSE ARCA",
    "name": "VelocityShares Daily 4x Long AUD vs USD ETN"
  },
  {
    "ticker": "UAUG",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Ultra Buffer ETF - August"
  },
  {
    "ticker": "UAVS",
    "exchange": "NYSE American",
    "name": "AgEagle Aerial Systems Inc."
  },
  {
    "ticker": "UBA",
    "exchange": "NYSE",
    "name": "Urstadt Biddle Properties Inc. Class A"
  },
  {
    "ticker": "UBCP",
    "exchange": "NASDAQ",
    "name": "United Bancorp Inc."
  },
  {
    "ticker": "UBER",
    "exchange": "NYSE",
    "name": "Uber Technologies Inc."
  },
  {
    "ticker": "UBFO",
    "exchange": "NASDAQ",
    "name": "United Security Bancshares"
  },
  {
    "ticker": "UBG",
    "exchange": "NYSE ARCA",
    "name": "ETRACS CMCI Gold Total Return ETN"
  },
  {
    "ticker": "UBOH",
    "exchange": "NASDAQ",
    "name": "United Bancshares Inc."
  },
  {
    "ticker": "UBOT",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Robotics Artificial Intelligence Auto Bull 3X"
  },
  {
    "ticker": "UBP",
    "exchange": "NYSE",
    "name": "Urstadt Biddle Properties Inc."
  },
  {
    "ticker": "UBP-H",
    "exchange": "NYSE",
    "name": "Urstadt Biddle Properties Inc. Cum Conv Red Perp Pfd Registered Shs Series H"
  },
  {
    "ticker": "UBP-K",
    "exchange": "NYSE",
    "name": "Urstadt Biddle Properties Inc Cum Conv Red Perp Pfd Registered Shs Series K"
  },
  {
    "ticker": "UBR",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra MSCI Brazil Capped"
  },
  {
    "ticker": "UBS",
    "exchange": "NYSE",
    "name": "UBS Group AG"
  },
  {
    "ticker": "UBSI",
    "exchange": "NASDAQ",
    "name": "United Bankshares Inc."
  },
  {
    "ticker": "UBT",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra 20+ Year Treasury"
  },
  {
    "ticker": "UBX",
    "exchange": "NASDAQ",
    "name": "Unity Biotechnology Inc."
  },
  {
    "ticker": "UCBI",
    "exchange": "NASDAQ",
    "name": "United Community Banks Inc."
  },
  {
    "ticker": "UCBIO",
    "exchange": "NASDAQ",
    "name": "United Community Banks Inc Depositary Shs Repr 1/1000th 6.875 % Non-Cum Red Perp Pfd Shs I"
  },
  {
    "ticker": "UCC",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra Consumer Services"
  },
  {
    "ticker": "UCHF",
    "exchange": "NYSE ARCA",
    "name": "VelocityShares Daily 4x Long CHF vs USD ETN"
  },
  {
    "ticker": "UCI",
    "exchange": "NYSE ARCA",
    "name": "ETRACS UBS Bloomberg Constant Maturity Commodity Index TR ETN"
  },
  {
    "ticker": "UCIB",
    "exchange": "NYSE ARCA",
    "name": "ETRACS CMCI Total Return ETN Series B"
  },
  {
    "ticker": "UCL",
    "exchange": "NASDAQ",
    "name": "uCloudlink Group Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "UCO",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra Bloomberg Crude Oil"
  },
  {
    "ticker": "UCON",
    "exchange": "NYSE ARCA",
    "name": "First Trust TCW Unconstrained Plus Bond ETF"
  },
  {
    "ticker": "UCTT",
    "exchange": "NASDAQ",
    "name": "Ultra Clean Holdings Inc."
  },
  {
    "ticker": "UDEC",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Ultra Buffer ETF - December"
  },
  {
    "ticker": "UDN",
    "exchange": "NYSE ARCA",
    "name": "Invesco DB US Dollar Index Bearish Fund"
  },
  {
    "ticker": "UDOW",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraPro Dow30"
  },
  {
    "ticker": "UDR",
    "exchange": "NYSE",
    "name": "UDR Inc."
  },
  {
    "ticker": "UE",
    "exchange": "NYSE",
    "name": "Urban Edge Properties"
  },
  {
    "ticker": "UEC",
    "exchange": "NYSE American",
    "name": "Uranium Energy Corp."
  },
  {
    "ticker": "UEIC",
    "exchange": "NASDAQ",
    "name": "Universal Electronics Inc."
  },
  {
    "ticker": "UEPS",
    "exchange": "NASDAQ",
    "name": "Net 1 UEPS Technologies Inc."
  },
  {
    "ticker": "UEUR",
    "exchange": "NYSE ARCA",
    "name": "VelocityShares Daily 4x Long EUR vs USD ETN"
  },
  {
    "ticker": "UEVM",
    "exchange": "NYSE ARCA",
    "name": "VictoryShares USAA MSCI Emerging Markets Value Momentum ETF"
  },
  {
    "ticker": "UFAB",
    "exchange": "NYSE American",
    "name": "Unique Fabricating Inc."
  },
  {
    "ticker": "UFCS",
    "exchange": "NASDAQ",
    "name": "United Fire Group Inc."
  },
  {
    "ticker": "UFEB",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Ultra Buffer ETF - February"
  },
  {
    "ticker": "UFI",
    "exchange": "NYSE",
    "name": "Unifi Inc."
  },
  {
    "ticker": "UFO",
    "exchange": "NASDAQ",
    "name": "Procure Space ETF"
  },
  {
    "ticker": "UFPI",
    "exchange": "NASDAQ",
    "name": "UFP Industries Inc."
  },
  {
    "ticker": "UFPT",
    "exchange": "NASDAQ",
    "name": "UFP Technologies Inc."
  },
  {
    "ticker": "UFS",
    "exchange": "NYSE",
    "name": "Domtar Corporation"
  },
  {
    "ticker": "UG",
    "exchange": "NASDAQ",
    "name": "United-Guardian Inc."
  },
  {
    "ticker": "UGA",
    "exchange": "NYSE ARCA",
    "name": "United States Gasoline Fund LP"
  },
  {
    "ticker": "UGBP",
    "exchange": "NYSE ARCA",
    "name": "VelocityShares Daily 4x Long GBP vs USD ETN"
  },
  {
    "ticker": "UGE",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra Consumer Goods"
  },
  {
    "ticker": "UGI",
    "exchange": "NYSE",
    "name": "UGI Corporation"
  },
  {
    "ticker": "UGL",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra Gold"
  },
  {
    "ticker": "UGP",
    "exchange": "NYSE",
    "name": "Ultrapar Participacoes S.A. Sponsored ADR"
  },
  {
    "ticker": "UHAL",
    "exchange": "NASDAQ",
    "name": "AMERCO"
  },
  {
    "ticker": "UHS",
    "exchange": "NYSE",
    "name": "Universal Health Services Inc. Class B"
  },
  {
    "ticker": "UHT",
    "exchange": "NYSE",
    "name": "Universal Health Realty Income Trust"
  },
  {
    "ticker": "UI",
    "exchange": "NYSE",
    "name": "Ubiquiti Inc."
  },
  {
    "ticker": "UIHC",
    "exchange": "NASDAQ",
    "name": "United Insurance Holdings Corp."
  },
  {
    "ticker": "UIS",
    "exchange": "NYSE",
    "name": "Unisys Corporation"
  },
  {
    "ticker": "UITB",
    "exchange": "NYSE ARCA",
    "name": "VictoryShares USAA Core Intermediate-Term Bond ETF"
  },
  {
    "ticker": "UIVM",
    "exchange": "NYSE ARCA",
    "name": "VictoryShares USAA MSCI International Value Momentum ETF"
  },
  {
    "ticker": "UJAN",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Ultra Buffer ETF - January"
  },
  {
    "ticker": "UJB",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra High Yield"
  },
  {
    "ticker": "UJPY",
    "exchange": "NYSE ARCA",
    "name": "VelocityShares Daily 4x Long JPY vs USD ETN"
  },
  {
    "ticker": "UJUL",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Ultra Buffer ETF - July"
  },
  {
    "ticker": "UJUN",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Ultra Buffer ETF - June"
  },
  {
    "ticker": "UL",
    "exchange": "NYSE",
    "name": "Unilever PLC Sponsored ADR"
  },
  {
    "ticker": "ULBI",
    "exchange": "NASDAQ",
    "name": "Ultralife Corporation"
  },
  {
    "ticker": "ULE",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra Euro"
  },
  {
    "ticker": "ULH",
    "exchange": "NASDAQ",
    "name": "Universal Logistics Holdings Inc."
  },
  {
    "ticker": "ULST",
    "exchange": "NYSE ARCA",
    "name": "SPDR SSgA Ultra Short Term Bond ETF"
  },
  {
    "ticker": "ULTA",
    "exchange": "NASDAQ",
    "name": "Ulta Beauty Inc"
  },
  {
    "ticker": "ULTR",
    "exchange": "NYSE ARCA",
    "name": "IQ Ultra Short Duration ETF"
  },
  {
    "ticker": "ULVM",
    "exchange": "NYSE ARCA",
    "name": "VictoryShares USAA MSCI USA Value Momentum ETF"
  },
  {
    "ticker": "UMAR",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Ultra Buffer ETF - March"
  },
  {
    "ticker": "UMAY",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Ultra Buffer ETF - May"
  },
  {
    "ticker": "UMBF",
    "exchange": "NASDAQ",
    "name": "UMB Financial Corporation"
  },
  {
    "ticker": "UMC",
    "exchange": "NYSE",
    "name": "United Microelectronics Corp. Sponsored ADR"
  },
  {
    "ticker": "UMDD",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraPro MidCap400"
  },
  {
    "ticker": "UMH",
    "exchange": "NYSE",
    "name": "UMH Properties Inc."
  },
  {
    "ticker": "UMH-B",
    "exchange": "NYSE",
    "name": "UMH Properties Inc 8 % Cum Red Pfd Shs Series B"
  },
  {
    "ticker": "UMH-C",
    "exchange": "NYSE",
    "name": "UMH Properties Inc 6.75 % Cum Conv Red Pfd Registered Shs Series C"
  },
  {
    "ticker": "UMH-D",
    "exchange": "NYSE",
    "name": "UMH Properties Inc Cum Conv Red Perp Pfd Registered Shs Series D"
  },
  {
    "ticker": "UMPQ",
    "exchange": "NASDAQ",
    "name": "Umpqua Holdings Corporation"
  },
  {
    "ticker": "UMRX",
    "exchange": "NASDAQ",
    "name": "Unum Therapeutics Inc."
  },
  {
    "ticker": "UN",
    "exchange": "NYSE",
    "name": "Unilever NV ADR"
  },
  {
    "ticker": "UNAM",
    "exchange": "NASDAQ",
    "name": "Unico American Corporation"
  },
  {
    "ticker": "UNB",
    "exchange": "NASDAQ",
    "name": "Union Bankshares Inc."
  },
  {
    "ticker": "UNF",
    "exchange": "NYSE",
    "name": "UniFirst Corporation"
  },
  {
    "ticker": "UNFI",
    "exchange": "NYSE",
    "name": "United Natural Foods Inc."
  },
  {
    "ticker": "UNG",
    "exchange": "NYSE ARCA",
    "name": "United States Natural Gas Fund LP"
  },
  {
    "ticker": "UNH",
    "exchange": "NYSE",
    "name": "UnitedHealth Group Incorporated"
  },
  {
    "ticker": "UNIT",
    "exchange": "NASDAQ",
    "name": "Uniti Group Inc"
  },
  {
    "ticker": "UNL",
    "exchange": "NYSE ARCA",
    "name": "United States 12 Month Natural Gas Fund LP"
  },
  {
    "ticker": "UNM",
    "exchange": "NYSE",
    "name": "Unum Group"
  },
  {
    "ticker": "UNMA",
    "exchange": "NYSE",
    "name": "Unum Group 6.25 % Notes 2018-15.06.58 Global"
  },
  {
    "ticker": "UNOV",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Ultra Buffer ETF - November"
  },
  {
    "ticker": "UNP",
    "exchange": "NYSE",
    "name": "Union Pacific Corporation"
  },
  {
    "ticker": "UNTY",
    "exchange": "NASDAQ",
    "name": "Unity Bancorp Inc."
  },
  {
    "ticker": "UNVR",
    "exchange": "NYSE",
    "name": "Univar Solutions Inc."
  },
  {
    "ticker": "UOCT",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Ultra Buffer ETF - October"
  },
  {
    "ticker": "UONE",
    "exchange": "NASDAQ",
    "name": "Urban One Inc Class A"
  },
  {
    "ticker": "UONEK",
    "exchange": "NASDAQ",
    "name": "Urban One Inc Class D"
  },
  {
    "ticker": "UPLD",
    "exchange": "NASDAQ",
    "name": "Upland Software Inc."
  },
  {
    "ticker": "UPRO",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraPro S&P500"
  },
  {
    "ticker": "UPS",
    "exchange": "NYSE",
    "name": "United Parcel Service Inc. Class B"
  },
  {
    "ticker": "UPV",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra FTSE Europe"
  },
  {
    "ticker": "UPW",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra Utilities"
  },
  {
    "ticker": "UPWK",
    "exchange": "NASDAQ",
    "name": "Upwork Inc."
  },
  {
    "ticker": "URA",
    "exchange": "NYSE ARCA",
    "name": "Global X Uranium ETF"
  },
  {
    "ticker": "URBN",
    "exchange": "NASDAQ",
    "name": "Urban Outfitters Inc."
  },
  {
    "ticker": "URE",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra Real Estate"
  },
  {
    "ticker": "URG",
    "exchange": "NYSE American",
    "name": "Ur-Energy Inc."
  },
  {
    "ticker": "URGN",
    "exchange": "NASDAQ",
    "name": "UroGen Pharma Ltd."
  },
  {
    "ticker": "URI",
    "exchange": "NYSE",
    "name": "United Rentals Inc."
  },
  {
    "ticker": "URNM",
    "exchange": "NYSE ARCA",
    "name": "NorthShore Global Uranium Mining ETF"
  },
  {
    "ticker": "UROV",
    "exchange": "NASDAQ",
    "name": "Urovant Sciences Ltd."
  },
  {
    "ticker": "URTH",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI World ETF"
  },
  {
    "ticker": "URTY",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraPro Russell2000"
  },
  {
    "ticker": "USA",
    "exchange": "NYSE",
    "name": "Liberty All Star Equity Fund"
  },
  {
    "ticker": "USAC",
    "exchange": "NYSE",
    "name": "USA Compression Partners LP"
  },
  {
    "ticker": "USAI",
    "exchange": "NYSE ARCA",
    "name": "Pacer American Energy Independence ETF"
  },
  {
    "ticker": "USAK",
    "exchange": "NASDAQ",
    "name": "USA Truck Inc."
  },
  {
    "ticker": "USAP",
    "exchange": "NASDAQ",
    "name": "Universal Stainless & Alloy Products Inc."
  },
  {
    "ticker": "USAS",
    "exchange": "NYSE American",
    "name": "Americas Gold and Silver Corp."
  },
  {
    "ticker": "USAU",
    "exchange": "NASDAQ",
    "name": "U.S. Gold Corp."
  },
  {
    "ticker": "USB",
    "exchange": "NYSE",
    "name": "U.S. Bancorp"
  },
  {
    "ticker": "USB-A",
    "exchange": "NYSE",
    "name": "U.S. Bancorp Deposit Shs Repr 1/1000th Non-Cum Perp Pfd Sh Series A"
  },
  {
    "ticker": "USB-H",
    "exchange": "NYSE",
    "name": "U.S. Bancorp Deposit Shs Repr 1/1000th Non-Cum Perpetual Pfd Shs Series B"
  },
  {
    "ticker": "USB-M",
    "exchange": "NYSE",
    "name": "U.S. Bancorp Deposit Shs Repr 1/1000th Non Cum Perp Pfd Shs Series-F"
  },
  {
    "ticker": "USB-O",
    "exchange": "NYSE",
    "name": "U.S. Bancorp Deposit Shs Repr 1/1000th 5.15 % Non-Cum Perp Pfd Shs Series H"
  },
  {
    "ticker": "USB-P",
    "exchange": "NYSE",
    "name": "US Bancorp Depositary Shs Repr 1/1000th Non-Cum Perp Pfd Registered Shs Series K"
  },
  {
    "ticker": "USCI",
    "exchange": "NYSE ARCA",
    "name": "United States Commodity Index Fund"
  },
  {
    "ticker": "USCR",
    "exchange": "NASDAQ",
    "name": "U.S. Concrete Inc."
  },
  {
    "ticker": "USD",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra Semiconductors"
  },
  {
    "ticker": "USDP",
    "exchange": "NYSE",
    "name": "USD Partners LP"
  },
  {
    "ticker": "USDU",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Bloomberg US Dollar Bullish Fund"
  },
  {
    "ticker": "USDY",
    "exchange": "NYSE ARCA",
    "name": "Pacific Global US Equity Income ETF"
  },
  {
    "ticker": "USEG",
    "exchange": "NASDAQ",
    "name": "U.S. Energy Corp."
  },
  {
    "ticker": "USEP",
    "exchange": "Cboe BZX",
    "name": "Innovator S&P 500 Ultra Buffer ETF - September"
  },
  {
    "ticker": "USEQ",
    "exchange": "Cboe BZX",
    "name": "Invesco Russell 1000 Enhanced Equal Weight ETF"
  },
  {
    "ticker": "USFD",
    "exchange": "NYSE",
    "name": "US Foods Holding Corp."
  },
  {
    "ticker": "USFR",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Floating Rate Treasury Fund"
  },
  {
    "ticker": "USHG",
    "exchange": "NYSE ARCA",
    "name": "AGFiQ Dynamic Hedged U.S. Equity ETF"
  },
  {
    "ticker": "USHY",
    "exchange": "Cboe BZX",
    "name": "iShares Broad USD High Yield Corporate Bond ETF"
  },
  {
    "ticker": "USI",
    "exchange": "NYSE ARCA",
    "name": "Principal Ultra-Short Active Income ETF"
  },
  {
    "ticker": "USIG",
    "exchange": "NASDAQ",
    "name": "iShares Broad USD Investment Grade Corporate Bond ETF"
  },
  {
    "ticker": "USIO",
    "exchange": "NASDAQ",
    "name": "Usio Inc."
  },
  {
    "ticker": "USL",
    "exchange": "NYSE ARCA",
    "name": "United States 12 Month Oil Fund LP"
  },
  {
    "ticker": "USLB",
    "exchange": "NASDAQ",
    "name": "Invesco Russell 1000 Low Beta Equal Weight ETF"
  },
  {
    "ticker": "USLM",
    "exchange": "NASDAQ",
    "name": "United States Lime & Minerals Inc."
  },
  {
    "ticker": "USM",
    "exchange": "NYSE",
    "name": "United States Cellular Corp"
  },
  {
    "ticker": "USMC",
    "exchange": "NASDAQ",
    "name": "Principal U.S. Mega-Cap Multi-Factor Index ETF"
  },
  {
    "ticker": "USMF",
    "exchange": "Cboe BZX",
    "name": "WisdomTree U.S. Multifactor Fund"
  },
  {
    "ticker": "USMV",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI USA Min Vol Factor ETF"
  },
  {
    "ticker": "USNA",
    "exchange": "NYSE",
    "name": "USANA Health Sciences Inc."
  },
  {
    "ticker": "USO",
    "exchange": "NYSE ARCA",
    "name": "United States Oil Fund LP"
  },
  {
    "ticker": "USOI",
    "exchange": "NASDAQ",
    "name": "Credit Suisse X-Links Crude Oil Shares Covered Call ETN"
  },
  {
    "ticker": "USPH",
    "exchange": "NYSE",
    "name": "U.S. Physical Therapy Inc."
  },
  {
    "ticker": "USRT",
    "exchange": "NYSE ARCA",
    "name": "iShares Core U.S. REIT ETF"
  },
  {
    "ticker": "USSG",
    "exchange": "NYSE ARCA",
    "name": "Xtrackers MSCI USA ESG Leaders Equity ETF"
  },
  {
    "ticker": "UST",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra 7-10 Year Treasury"
  },
  {
    "ticker": "USTB",
    "exchange": "NYSE ARCA",
    "name": "VictoryShares USAA Core Short-Term Bond ETF"
  },
  {
    "ticker": "USV",
    "exchange": "NYSE ARCA",
    "name": "ETRACS CMCI Silver Total Return ETN"
  },
  {
    "ticker": "USVM",
    "exchange": "NYSE ARCA",
    "name": "VictoryShares USAA MSCI USA Small Cap Value Momentum ETF"
  },
  {
    "ticker": "USWS",
    "exchange": "NASDAQ",
    "name": "U.S. Well Services Inc Class A"
  },
  {
    "ticker": "USWSW",
    "exchange": "NASDAQ",
    "name": "U.S. Well Services Inc Warrant 2018-28.05.21 on U.S. Well Svc"
  },
  {
    "ticker": "USX",
    "exchange": "NYSE",
    "name": "US Xpress Enterprises Inc. Class A"
  },
  {
    "ticker": "USXF",
    "exchange": "NASDAQ",
    "name": "iShares ESG Advanced MSCI USA ETF"
  },
  {
    "ticker": "UTES",
    "exchange": "NYSE ARCA",
    "name": "Virtus Reaves Utilities ETF"
  },
  {
    "ticker": "UTF",
    "exchange": "NYSE",
    "name": "Cohen & Steers Infrastructure Fund Inc"
  },
  {
    "ticker": "UTG",
    "exchange": "NYSE American",
    "name": "Reaves Utility Income Fund"
  },
  {
    "ticker": "UTHR",
    "exchange": "NASDAQ",
    "name": "United Therapeutics Corporation"
  },
  {
    "ticker": "UTI",
    "exchange": "NYSE",
    "name": "Universal Technical Institute Inc."
  },
  {
    "ticker": "UTL",
    "exchange": "NYSE",
    "name": "Unitil Corporation"
  },
  {
    "ticker": "UTMD",
    "exchange": "NASDAQ",
    "name": "Utah Medical Products Inc."
  },
  {
    "ticker": "UTRN",
    "exchange": "NYSE ARCA",
    "name": "Vesper U.S. Large Cap Short-Term Reversal Strategy ETF"
  },
  {
    "ticker": "UTSI",
    "exchange": "NASDAQ",
    "name": "UTStarcom Holdings Corp."
  },
  {
    "ticker": "UTSL",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Utilities Bull 3X Shares"
  },
  {
    "ticker": "UUP",
    "exchange": "NYSE ARCA",
    "name": "Invesco DB US Dollar Index Bullish Fund"
  },
  {
    "ticker": "UUU",
    "exchange": "NYSE American",
    "name": "Universal Security Instruments Inc."
  },
  {
    "ticker": "UUUU",
    "exchange": "NYSE American",
    "name": "Energy Fuels Inc."
  },
  {
    "ticker": "UUUU+",
    "exchange": "NYSE American",
    "name": "Energy Fuels Inc Warrant 2016-20.09.2021 on Shs Energy Fuels"
  },
  {
    "ticker": "UVE",
    "exchange": "NYSE",
    "name": "Universal Insurance Holdings Inc."
  },
  {
    "ticker": "UVSP",
    "exchange": "NASDAQ",
    "name": "Univest Financial Corporation"
  },
  {
    "ticker": "UVV",
    "exchange": "NYSE",
    "name": "Universal Corp"
  },
  {
    "ticker": "UVXY",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra VIX Short-Term Futures ETF"
  },
  {
    "ticker": "UWM",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra Russell2000"
  },
  {
    "ticker": "UXI",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra Industrials"
  },
  {
    "ticker": "UXIN",
    "exchange": "NASDAQ",
    "name": "Uxin Ltd. Sponsored ADR"
  },
  {
    "ticker": "UYG",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra Financials"
  },
  {
    "ticker": "UYM",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra Basic Materials"
  },
  {
    "ticker": "UZA",
    "exchange": "NYSE",
    "name": "United States Cellular Corp 6.95 % Notes 2011-17.5.60 Sr"
  },
  {
    "ticker": "UZB",
    "exchange": "NYSE",
    "name": "United States Cellular Corp 7.25 % Notes 2014-1.12.63 Sr"
  },
  {
    "ticker": "UZC",
    "exchange": "NYSE",
    "name": "United States Cellular Corp 7.25 % Notes 2015-1.12.64"
  },
  {
    "ticker": "UZD",
    "exchange": "NYSE",
    "name": "United States Cellular Corp 6.25 % Notes 2020-01.09.69 Global"
  },
  {
    "ticker": "V",
    "exchange": "NYSE",
    "name": "Visa Inc. Class A"
  },
  {
    "ticker": "VAC",
    "exchange": "NYSE",
    "name": "Marriott Vacations Worldwide Corporation"
  },
  {
    "ticker": "VALE",
    "exchange": "NYSE",
    "name": "Vale S.A. Sponsored ADR"
  },
  {
    "ticker": "VALQ",
    "exchange": "NYSE ARCA",
    "name": "American Century STOXX U.S. Quality Value ETF"
  },
  {
    "ticker": "VALT",
    "exchange": "NYSE ARCA",
    "name": "ETFMG Sit Ultra Short ETF"
  },
  {
    "ticker": "VALU",
    "exchange": "NASDAQ",
    "name": "Value Line Inc."
  },
  {
    "ticker": "VAMO",
    "exchange": "Cboe BZX",
    "name": "Cambria Value & Momentum ETF"
  },
  {
    "ticker": "VAPO",
    "exchange": "NYSE",
    "name": "Vapotherm Inc."
  },
  {
    "ticker": "VAR",
    "exchange": "NYSE",
    "name": "Varian Medical Systems Inc."
  },
  {
    "ticker": "VAW",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Materials ETF"
  },
  {
    "ticker": "VB",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Small-Cap ETF"
  },
  {
    "ticker": "VBF",
    "exchange": "NYSE",
    "name": "Invesco Bond Fund"
  },
  {
    "ticker": "VBFC",
    "exchange": "NASDAQ",
    "name": "Village Bank and Trust Financial Corp."
  },
  {
    "ticker": "VBIV",
    "exchange": "NASDAQ",
    "name": "VBI Vaccines Inc."
  },
  {
    "ticker": "VBK",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Small-Cap Growth ETF"
  },
  {
    "ticker": "VBLT",
    "exchange": "NASDAQ",
    "name": "Vascular Biogenics Ltd."
  },
  {
    "ticker": "VBND",
    "exchange": "NYSE ARCA",
    "name": "Vident Core U.S. Bond Strategy ETF"
  },
  {
    "ticker": "VBR",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Small Cap Value ETF"
  },
  {
    "ticker": "VBTX",
    "exchange": "NASDAQ",
    "name": "Veritex Holdings Inc."
  },
  {
    "ticker": "VC",
    "exchange": "NASDAQ",
    "name": "Visteon Corporation"
  },
  {
    "ticker": "VCEL",
    "exchange": "NASDAQ",
    "name": "Vericel Corporation"
  },
  {
    "ticker": "VCF",
    "exchange": "NYSE American",
    "name": "Delaware Investments Colorado Municipal Income Fund Inc"
  },
  {
    "ticker": "VCIF",
    "exchange": "NYSE",
    "name": "Vertical Capital Income Fund A of Beneficial Interest"
  },
  {
    "ticker": "VCIT",
    "exchange": "NASDAQ",
    "name": "Vanguard Intermediate-Term Corporate Bond ETF"
  },
  {
    "ticker": "VCLT",
    "exchange": "NASDAQ",
    "name": "Vanguard Long-Term Corporate Bond ETF"
  },
  {
    "ticker": "VCNX",
    "exchange": "NASDAQ",
    "name": "Vaccinex Inc."
  },
  {
    "ticker": "VCR",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Consumer Discretionary ETF"
  },
  {
    "ticker": "VCRA",
    "exchange": "NYSE",
    "name": "Vocera Communications Inc."
  },
  {
    "ticker": "VCSH",
    "exchange": "NASDAQ",
    "name": "Vanguard Short-Term Corporate Bond ETF"
  },
  {
    "ticker": "VCTR",
    "exchange": "NASDAQ",
    "name": "Victory Capital Holdings Inc. Class A"
  },
  {
    "ticker": "VCV",
    "exchange": "NYSE",
    "name": "Invesco California Value Municipal Income Trust"
  },
  {
    "ticker": "VCYT",
    "exchange": "NASDAQ",
    "name": "Veracyte Inc"
  },
  {
    "ticker": "VDC",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Consumer Staples ETF"
  },
  {
    "ticker": "VDE",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Energy ETF"
  },
  {
    "ticker": "VEA",
    "exchange": "NYSE ARCA",
    "name": "Vanguard FTSE Developed Markets ETF"
  },
  {
    "ticker": "VEC",
    "exchange": "NYSE",
    "name": "Vectrus Inc"
  },
  {
    "ticker": "VECO",
    "exchange": "NASDAQ",
    "name": "Veeco Instruments Inc."
  },
  {
    "ticker": "VEDL",
    "exchange": "NYSE",
    "name": "Vedanta Limited Sponsored ADR"
  },
  {
    "ticker": "VEEV",
    "exchange": "NYSE",
    "name": "Veeva Systems Inc Class A"
  },
  {
    "ticker": "VEGA",
    "exchange": "NYSE ARCA",
    "name": "AdvisorShares STAR Global Buy-Write ETF"
  },
  {
    "ticker": "VEGI",
    "exchange": "NYSE ARCA",
    "name": "iShares MSCI Global Agriculture Producers ETF"
  },
  {
    "ticker": "VEGN",
    "exchange": "NYSE ARCA",
    "name": "US Vegan Climate ETF"
  },
  {
    "ticker": "VEL",
    "exchange": "NYSE",
    "name": "Velocity Financial Inc."
  },
  {
    "ticker": "VEON",
    "exchange": "NASDAQ",
    "name": "VEON Ltd. Sponsored ADR"
  },
  {
    "ticker": "VER",
    "exchange": "NYSE",
    "name": "VEREIT Inc. Class A"
  },
  {
    "ticker": "VER-F",
    "exchange": "NYSE",
    "name": "VEREIT Inc 6 7/10 % Cum Red Pfd Shs Series F"
  },
  {
    "ticker": "VERB",
    "exchange": "NASDAQ",
    "name": "Verb Technology Company Inc."
  },
  {
    "ticker": "VERBW",
    "exchange": "NASDAQ",
    "name": "Verb Technology Company Inc Warrant 2019-13.03.24 on Verb Technology"
  },
  {
    "ticker": "VERI",
    "exchange": "NASDAQ",
    "name": "Veritone Inc."
  },
  {
    "ticker": "VERO",
    "exchange": "NASDAQ",
    "name": "Venus Concept Inc"
  },
  {
    "ticker": "VERT=",
    "exchange": "NYSE",
    "name": "Vertiv Holdings Co. Units Cons of 1 Sh A + 1/3 Wt 12.06.23"
  },
  {
    "ticker": "VERU",
    "exchange": "NASDAQ",
    "name": "Veru Inc"
  },
  {
    "ticker": "VERX",
    "exchange": "NASDAQ",
    "name": "Vertex Inc. Class A"
  },
  {
    "ticker": "VERY",
    "exchange": "NASDAQ",
    "name": "Vericity Inc."
  },
  {
    "ticker": "VET",
    "exchange": "NYSE",
    "name": "Vermilion Energy Inc."
  },
  {
    "ticker": "VETS",
    "exchange": "NASDAQ",
    "name": "Pacer Military Times Best Employers ETF"
  },
  {
    "ticker": "VEU",
    "exchange": "NYSE ARCA",
    "name": "Vanguard FTSE All-World ex-US Index Fund"
  },
  {
    "ticker": "VFC",
    "exchange": "NYSE",
    "name": "V.F. Corporation"
  },
  {
    "ticker": "VFF",
    "exchange": "NASDAQ",
    "name": "Village Farms International Inc."
  },
  {
    "ticker": "VFH",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Financials ETF"
  },
  {
    "ticker": "VFL",
    "exchange": "NYSE American",
    "name": "Delaware Investments National Municipal Income Fund"
  },
  {
    "ticker": "VFLQ",
    "exchange": "Cboe BZX",
    "name": "Vanguard U.S. Liquidity Factor ETF"
  },
  {
    "ticker": "VFMF",
    "exchange": "Cboe BZX",
    "name": "Vanguard U.S. Multifactor ETF"
  },
  {
    "ticker": "VFMO",
    "exchange": "Cboe BZX",
    "name": "Vanguard U.S. Momentum Factor ETF"
  },
  {
    "ticker": "VFMV",
    "exchange": "Cboe BZX",
    "name": "Vanguard U.S. Minimum Volatility ETF"
  },
  {
    "ticker": "VFQY",
    "exchange": "Cboe BZX",
    "name": "Vanguard U.S. Quality Factor ETF"
  },
  {
    "ticker": "VFVA",
    "exchange": "Cboe BZX",
    "name": "Vanguard U.S. Value Factor ETF"
  },
  {
    "ticker": "VG",
    "exchange": "NASDAQ",
    "name": "Vonage Holdings Corp."
  },
  {
    "ticker": "VGI",
    "exchange": "NYSE",
    "name": "Virtus Global Multi-Sector Income Fund"
  },
  {
    "ticker": "VGIT",
    "exchange": "NASDAQ",
    "name": "Vanguard Intermediate-Term Treasury ETF"
  },
  {
    "ticker": "VGK",
    "exchange": "NYSE ARCA",
    "name": "Vanguard FTSE Europe ETF"
  },
  {
    "ticker": "VGLT",
    "exchange": "NASDAQ",
    "name": "Vanguard Long-Term Treasury ETF"
  },
  {
    "ticker": "VGM",
    "exchange": "NYSE",
    "name": "Invesco Trust for Investment Grade Municipals"
  },
  {
    "ticker": "VGR",
    "exchange": "NYSE",
    "name": "Vector Group Ltd."
  },
  {
    "ticker": "VGSH",
    "exchange": "NASDAQ",
    "name": "Vanguard Short-Term Treasury ETF"
  },
  {
    "ticker": "VGT",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Information Technology ETF"
  },
  {
    "ticker": "VGZ",
    "exchange": "NYSE American",
    "name": "Vista Gold Corp."
  },
  {
    "ticker": "VHC",
    "exchange": "NYSE",
    "name": "VirnetX Holding Corporation"
  },
  {
    "ticker": "VHI",
    "exchange": "NYSE",
    "name": "Valhi Inc."
  },
  {
    "ticker": "VHT",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Health Care ETF"
  },
  {
    "ticker": "VIAC",
    "exchange": "NASDAQ",
    "name": "ViacomCBS Inc. Class B"
  },
  {
    "ticker": "VIACA",
    "exchange": "NASDAQ",
    "name": "ViacomCBS Inc. Class A"
  },
  {
    "ticker": "VIAV",
    "exchange": "NASDAQ",
    "name": "Viavi Solutions Inc"
  },
  {
    "ticker": "VICI",
    "exchange": "NYSE",
    "name": "VICI Properties Inc"
  },
  {
    "ticker": "VICR",
    "exchange": "NASDAQ",
    "name": "Vicor Corporation"
  },
  {
    "ticker": "VIDI",
    "exchange": "NYSE ARCA",
    "name": "Vident International Equity Fund"
  },
  {
    "ticker": "VIE",
    "exchange": "NASDAQ",
    "name": "Viela Bio Inc."
  },
  {
    "ticker": "VIG",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Dividend Appreciation ETF"
  },
  {
    "ticker": "VIGI",
    "exchange": "NASDAQ",
    "name": "Vanguard International Dividend Appreciation ETF"
  },
  {
    "ticker": "VIOG",
    "exchange": "NYSE ARCA",
    "name": "Vanguard S&P Small-Cap 600 Growth ETF"
  },
  {
    "ticker": "VIOO",
    "exchange": "NYSE ARCA",
    "name": "Vanguard S&P Small-Cap 600 ETF"
  },
  {
    "ticker": "VIOT",
    "exchange": "NASDAQ",
    "name": "Viomi Technology Co. Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "VIOV",
    "exchange": "NYSE ARCA",
    "name": "Vanguard S&P Small-Cap 600 Value ETF"
  },
  {
    "ticker": "VIPS",
    "exchange": "NYSE",
    "name": "Vipshop Holdings Ltd Sponsored ADR"
  },
  {
    "ticker": "VIR",
    "exchange": "NASDAQ",
    "name": "Vir Biotechnology Inc."
  },
  {
    "ticker": "VIRC",
    "exchange": "NASDAQ",
    "name": "Virco Mfg. Corporation"
  },
  {
    "ticker": "VIRS",
    "exchange": "Cboe BZX",
    "name": "Pacer BioThreat Strategy ETF"
  },
  {
    "ticker": "VIRT",
    "exchange": "NASDAQ",
    "name": "Virtu Financial Inc. Class A"
  },
  {
    "ticker": "VIS",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Industrials ETF"
  },
  {
    "ticker": "VISL",
    "exchange": "NASDAQ",
    "name": "Vislink Technologies Inc."
  },
  {
    "ticker": "VIST",
    "exchange": "NYSE",
    "name": "Vista Oil & Gas S.A.B. de C.V. Sponsored ADR Class A"
  },
  {
    "ticker": "VITL",
    "exchange": "NASDAQ",
    "name": "Vital Farms Inc."
  },
  {
    "ticker": "VIV",
    "exchange": "NYSE",
    "name": "Telefonica Brasil S.A. Sponsored ADR Pfd"
  },
  {
    "ticker": "VIVE",
    "exchange": "NASDAQ",
    "name": "Viveve Medical Inc"
  },
  {
    "ticker": "VIVO",
    "exchange": "NASDAQ",
    "name": "Meridian Bioscience Inc."
  },
  {
    "ticker": "VIXM",
    "exchange": "NYSE ARCA",
    "name": "ProShares VIX Mid-Term Futures ETF"
  },
  {
    "ticker": "VIXY",
    "exchange": "NYSE ARCA",
    "name": "ProShares VIX Short-Term Futures ETF"
  },
  {
    "ticker": "VJET",
    "exchange": "NYSE",
    "name": "voxeljet AG Sponsored ADR"
  },
  {
    "ticker": "VKI",
    "exchange": "NYSE American",
    "name": "Invesco Advantage Municipal Income Trust II"
  },
  {
    "ticker": "VKQ",
    "exchange": "NYSE",
    "name": "Invesco Municipal Trust"
  },
  {
    "ticker": "VKTX",
    "exchange": "NASDAQ",
    "name": "Viking Therapeutics Inc."
  },
  {
    "ticker": "VKTXW",
    "exchange": "NASDAQ",
    "name": "Viking Therapeutics Inc Warrants 2016- On Shs"
  },
  {
    "ticker": "VLGEA",
    "exchange": "NASDAQ",
    "name": "Village Super Market Inc. Class A"
  },
  {
    "ticker": "VLO",
    "exchange": "NYSE",
    "name": "Valero Energy Corporation"
  },
  {
    "ticker": "VLRS",
    "exchange": "NYSE",
    "name": "Controladora Vuela Compania de Aviacion SAB de CV ADR Class A"
  },
  {
    "ticker": "VLT",
    "exchange": "NYSE",
    "name": "Invesco High Income Trust II"
  },
  {
    "ticker": "VLU",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P 1500 Value Tilt ETF"
  },
  {
    "ticker": "VLUE",
    "exchange": "Cboe BZX",
    "name": "iShares MSCI USA Value Factor ETF"
  },
  {
    "ticker": "VLY",
    "exchange": "NASDAQ",
    "name": "Valley National Bancorp"
  },
  {
    "ticker": "VLYPO",
    "exchange": "NASDAQ",
    "name": "Valley National Bancorp Non-Cum Perp Red Pfd Registered Shs Series B"
  },
  {
    "ticker": "VLYPP",
    "exchange": "NASDAQ",
    "name": "Valley National Bancorp Non-Cum Perp Pfd Shs Series A"
  },
  {
    "ticker": "VMACU",
    "exchange": "NASDAQ",
    "name": "Vistas Media Acquisition Co. Inc. Units Cons of 1 Sh -A- + 1 Wt"
  },
  {
    "ticker": "VMBS",
    "exchange": "NASDAQ",
    "name": "Vanguard Mortgage-Backed Securities ETF"
  },
  {
    "ticker": "VMC",
    "exchange": "NYSE",
    "name": "Vulcan Materials Company"
  },
  {
    "ticker": "VMD",
    "exchange": "NASDAQ",
    "name": "Viemed Healthcare Inc"
  },
  {
    "ticker": "VMI",
    "exchange": "NYSE",
    "name": "Valmont Industries Inc."
  },
  {
    "ticker": "VMM",
    "exchange": "NYSE American",
    "name": "Delaware Investments Minnesota Municipal Income Fund II Inc"
  },
  {
    "ticker": "VMO",
    "exchange": "NYSE",
    "name": "Invesco Municipal Opportunity Trust"
  },
  {
    "ticker": "VMOT",
    "exchange": "Cboe BZX",
    "name": "Alpha Architect Value Momentum Trend ETF"
  },
  {
    "ticker": "VMW",
    "exchange": "NYSE",
    "name": "VMware Inc. Class A"
  },
  {
    "ticker": "VNCE",
    "exchange": "NYSE",
    "name": "Vince Holding Corp."
  },
  {
    "ticker": "VNDA",
    "exchange": "NASDAQ",
    "name": "Vanda Pharmaceuticals Inc."
  },
  {
    "ticker": "VNE",
    "exchange": "NYSE",
    "name": "Veoneer Inc."
  },
  {
    "ticker": "VNET",
    "exchange": "NASDAQ",
    "name": "21Vianet Group Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "VNLA",
    "exchange": "NYSE ARCA",
    "name": "Janus Henderson Short Duration Income ETF"
  },
  {
    "ticker": "VNM",
    "exchange": "Cboe BZX",
    "name": "VanEck Vectors Vietnam ETF"
  },
  {
    "ticker": "VNO",
    "exchange": "NYSE",
    "name": "Vornado Realty Trust"
  },
  {
    "ticker": "VNO-K",
    "exchange": "NYSE",
    "name": "Vornado Realty Trust 5.7% Cum Red Pfd Shs Series K"
  },
  {
    "ticker": "VNO-L",
    "exchange": "NYSE",
    "name": "Vornado Realty Trust 5.4 % Cum Red Pfd Series L"
  },
  {
    "ticker": "VNO-M",
    "exchange": "NYSE",
    "name": "Vornado Realty Trust Cum Perp Red Pfd Registered Shs Series M"
  },
  {
    "ticker": "VNOM",
    "exchange": "NASDAQ",
    "name": "Viper Energy Partners LP"
  },
  {
    "ticker": "VNQ",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Real Estate ETF"
  },
  {
    "ticker": "VNQI",
    "exchange": "NASDAQ",
    "name": "Vanguard Global ex-U.S. Real Estate ETF"
  },
  {
    "ticker": "VNRX",
    "exchange": "NYSE American",
    "name": "Volitionrx Limited"
  },
  {
    "ticker": "VNTR",
    "exchange": "NYSE",
    "name": "Venator Materials PLC"
  },
  {
    "ticker": "VO",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Mid-Cap ETF"
  },
  {
    "ticker": "VOC",
    "exchange": "NYSE",
    "name": "VOC Energy Trust"
  },
  {
    "ticker": "VOD",
    "exchange": "NASDAQ",
    "name": "Vodafone Group Plc Sponsored ADR"
  },
  {
    "ticker": "VOE",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Mid-Cap Value ETF"
  },
  {
    "ticker": "VOLT",
    "exchange": "NYSE American",
    "name": "Volt Information Sciences Inc."
  },
  {
    "ticker": "VONE",
    "exchange": "NASDAQ",
    "name": "Vanguard Russell 1000 ETF"
  },
  {
    "ticker": "VONG",
    "exchange": "NASDAQ",
    "name": "Vanguard Russell 1000 Growth ETF"
  },
  {
    "ticker": "VONV",
    "exchange": "NASDAQ",
    "name": "Vanguard Russell 1000 Value ETF"
  },
  {
    "ticker": "VOO",
    "exchange": "NYSE ARCA",
    "name": "Vanguard S&P 500 ETF"
  },
  {
    "ticker": "VOOG",
    "exchange": "NYSE ARCA",
    "name": "Vanguard S&P 500 Growth ETF"
  },
  {
    "ticker": "VOOV",
    "exchange": "NYSE ARCA",
    "name": "Vanguard S&P 500 Value ETF"
  },
  {
    "ticker": "VOT",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Mid-Cap Growth ETF"
  },
  {
    "ticker": "VOX",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Communication Services ETF"
  },
  {
    "ticker": "VOXX",
    "exchange": "NASDAQ",
    "name": "VOXX International Corporation Class A"
  },
  {
    "ticker": "VOYA",
    "exchange": "NYSE",
    "name": "Voya Financial Inc."
  },
  {
    "ticker": "VOYA-B",
    "exchange": "NYSE",
    "name": "Voya Financial Inc Depositary Shs Repr 1/40th Rate Reset Non-Cum Pfd Registered Shs Series B"
  },
  {
    "ticker": "VPC",
    "exchange": "NYSE ARCA",
    "name": "Virtus Private Credit Strategy ETF"
  },
  {
    "ticker": "VPG",
    "exchange": "NYSE",
    "name": "Vishay Precision Group Inc."
  },
  {
    "ticker": "VPL",
    "exchange": "NYSE ARCA",
    "name": "Vanguard FTSE Pacific ETF"
  },
  {
    "ticker": "VPU",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Utilities ETF"
  },
  {
    "ticker": "VPV",
    "exchange": "NYSE",
    "name": "Invesco Pennsylvania Value Municipal Income Trust"
  },
  {
    "ticker": "VQT",
    "exchange": "Cboe BZX",
    "name": "Barclays ETN+ S&P VEQTOR ETN"
  },
  {
    "ticker": "VRA",
    "exchange": "NASDAQ",
    "name": "Vera Bradley Inc."
  },
  {
    "ticker": "VRAI",
    "exchange": "NYSE ARCA",
    "name": "Virtus Real Asset Income ETF"
  },
  {
    "ticker": "VRAY",
    "exchange": "NASDAQ",
    "name": "ViewRay Inc."
  },
  {
    "ticker": "VRCA",
    "exchange": "NASDAQ",
    "name": "Verrica Pharmaceuticals Inc"
  },
  {
    "ticker": "VREX",
    "exchange": "NASDAQ",
    "name": "Varex Imaging Corporation"
  },
  {
    "ticker": "VRIG",
    "exchange": "NASDAQ",
    "name": "Invesco Variable Rate Investment Grade ETF"
  },
  {
    "ticker": "VRM",
    "exchange": "NASDAQ",
    "name": "Vroom Inc."
  },
  {
    "ticker": "VRME",
    "exchange": "NASDAQ",
    "name": "VerifyMe Inc."
  },
  {
    "ticker": "VRMEW",
    "exchange": "NASDAQ",
    "name": "VerifyMe Inc. Warrant 2020-17.06.25 on VerifyMe"
  },
  {
    "ticker": "VRNA",
    "exchange": "NASDAQ",
    "name": "Verona Pharma plc Sponsored ADR"
  },
  {
    "ticker": "VRNS",
    "exchange": "NASDAQ",
    "name": "Varonis Systems Inc."
  },
  {
    "ticker": "VRNT",
    "exchange": "NASDAQ",
    "name": "Verint Systems Inc."
  },
  {
    "ticker": "VRP",
    "exchange": "NYSE ARCA",
    "name": "Invesco Variable Rate Preferred ETF"
  },
  {
    "ticker": "VRRM",
    "exchange": "NASDAQ",
    "name": "Verra Mobility Corp. Class A"
  },
  {
    "ticker": "VRS",
    "exchange": "NYSE",
    "name": "Verso Corp Class A"
  },
  {
    "ticker": "VRSK",
    "exchange": "NASDAQ",
    "name": "Verisk Analytics Inc"
  },
  {
    "ticker": "VRSN",
    "exchange": "NASDAQ",
    "name": "VeriSign Inc."
  },
  {
    "ticker": "VRT",
    "exchange": "NYSE",
    "name": "Vertiv Holdings Co. Class A"
  },
  {
    "ticker": "VRT+",
    "exchange": "NYSE",
    "name": "Vertiv Holdings Co. Warrant 2020-12.06.23 on Vertv Holdings-A"
  },
  {
    "ticker": "VRTS",
    "exchange": "NASDAQ",
    "name": "Virtus Investment Partners Inc."
  },
  {
    "ticker": "VRTU",
    "exchange": "NASDAQ",
    "name": "Virtusa Corporation"
  },
  {
    "ticker": "VRTV",
    "exchange": "NYSE",
    "name": "Veritiv Corp"
  },
  {
    "ticker": "VRTX",
    "exchange": "NASDAQ",
    "name": "Vertex Pharmaceuticals Incorporated"
  },
  {
    "ticker": "VSAT",
    "exchange": "NASDAQ",
    "name": "ViaSat Inc."
  },
  {
    "ticker": "VSDA",
    "exchange": "NASDAQ",
    "name": "VictoryShares Dividend Accelerator ETF"
  },
  {
    "ticker": "VSEC",
    "exchange": "NASDAQ",
    "name": "VSE Corporation"
  },
  {
    "ticker": "VSGX",
    "exchange": "Cboe BZX",
    "name": "Vanguard ESG International Stock ETF"
  },
  {
    "ticker": "VSH",
    "exchange": "NYSE",
    "name": "Vishay Intertechnology Inc."
  },
  {
    "ticker": "VSL",
    "exchange": "NYSE ARCA",
    "name": "Volshares Large Cap ETF"
  },
  {
    "ticker": "VSLR",
    "exchange": "NYSE",
    "name": "Vivint Solar Inc"
  },
  {
    "ticker": "VSMV",
    "exchange": "NASDAQ",
    "name": "VictoryShares US Multi-Factor Minimum Volatility ETF"
  },
  {
    "ticker": "VSS",
    "exchange": "NYSE ARCA",
    "name": "Vanguard FTSE All-World ex-US Small-Cap ETF"
  },
  {
    "ticker": "VST",
    "exchange": "NYSE",
    "name": "Vistra Corp."
  },
  {
    "ticker": "VST+A",
    "exchange": "NYSE",
    "name": "Vistra Corp. Warrant 2018-02.02.24 on Vistra"
  },
  {
    "ticker": "VSTA",
    "exchange": "NASDAQ",
    "name": "Vasta Platform Ltd. Class A"
  },
  {
    "ticker": "VSTM",
    "exchange": "NASDAQ",
    "name": "Verastem Inc."
  },
  {
    "ticker": "VSTO",
    "exchange": "NYSE",
    "name": "Vista Outdoor Inc"
  },
  {
    "ticker": "VT",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Total World Stock ETF"
  },
  {
    "ticker": "VTA",
    "exchange": "NYSE",
    "name": "Invesco Dynamic Credit Opportunities Fund"
  },
  {
    "ticker": "VTC",
    "exchange": "NASDAQ",
    "name": "Vanguard Total Corporate Bond ETF"
  },
  {
    "ticker": "VTEB",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Tax-Exempt Bond ETF"
  },
  {
    "ticker": "VTGN",
    "exchange": "NASDAQ",
    "name": "VistaGen Therapeutics Inc."
  },
  {
    "ticker": "VTHR",
    "exchange": "NASDAQ",
    "name": "Vanguard Russell 3000 ETF"
  },
  {
    "ticker": "VTI",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Total Stock Market ETF"
  },
  {
    "ticker": "VTIP",
    "exchange": "NASDAQ",
    "name": "Vanguard Short-Term Inflation-Protected Securities ETF"
  },
  {
    "ticker": "VTN",
    "exchange": "NYSE",
    "name": "Invesco Trust For Investment Grade New York Municipals"
  },
  {
    "ticker": "VTNR",
    "exchange": "NASDAQ",
    "name": "Vertex Energy Inc."
  },
  {
    "ticker": "VTOL",
    "exchange": "NYSE",
    "name": "Bristow Group Inc"
  },
  {
    "ticker": "VTR",
    "exchange": "NYSE",
    "name": "Ventas Inc."
  },
  {
    "ticker": "VTSI",
    "exchange": "NASDAQ",
    "name": "VirTra Inc."
  },
  {
    "ticker": "VTV",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Value ETF"
  },
  {
    "ticker": "VTVT",
    "exchange": "NASDAQ",
    "name": "vTv Therapeutics Inc. Class A"
  },
  {
    "ticker": "VTWG",
    "exchange": "NASDAQ",
    "name": "Vanguard Russell 2000 Growth ETF"
  },
  {
    "ticker": "VTWO",
    "exchange": "NASDAQ",
    "name": "Vanguard Russell 2000 ETF"
  },
  {
    "ticker": "VTWV",
    "exchange": "NASDAQ",
    "name": "Vanguard Russell 2000 Value ETF"
  },
  {
    "ticker": "VUG",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Growth ETF"
  },
  {
    "ticker": "VUSE",
    "exchange": "NYSE ARCA",
    "name": "Vident Core US Equity Fund"
  },
  {
    "ticker": "VUZI",
    "exchange": "NASDAQ",
    "name": "Vuzix Corporation"
  },
  {
    "ticker": "VV",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Large-Cap ETF"
  },
  {
    "ticker": "VVI",
    "exchange": "NYSE",
    "name": "Viad Corp"
  },
  {
    "ticker": "VVNT",
    "exchange": "NYSE",
    "name": "Vivint Smart Home Inc. Class A"
  },
  {
    "ticker": "VVNT+",
    "exchange": "NYSE",
    "name": "Vivint Smart Home Inc Warrant 2020-15.12.24 on Vivint Smrt Hm-A"
  },
  {
    "ticker": "VVPR",
    "exchange": "NASDAQ",
    "name": "VivoPower International Plc"
  },
  {
    "ticker": "VVR",
    "exchange": "NYSE",
    "name": "Invesco Senior Income Trust"
  },
  {
    "ticker": "VVV",
    "exchange": "NYSE",
    "name": "Valvoline Inc."
  },
  {
    "ticker": "VWID",
    "exchange": "Cboe BZX",
    "name": "Virtus WMC International Dividend ETF"
  },
  {
    "ticker": "VWO",
    "exchange": "NYSE ARCA",
    "name": "Vanguard FTSE Emerging Markets ETF"
  },
  {
    "ticker": "VWOB",
    "exchange": "NASDAQ",
    "name": "Vanguard Emerging Markets Government Bond ETF"
  },
  {
    "ticker": "VXF",
    "exchange": "NYSE ARCA",
    "name": "Vanguard Extended Market ETF"
  },
  {
    "ticker": "VXRT",
    "exchange": "NASDAQ",
    "name": "Vaxart Inc."
  },
  {
    "ticker": "VXUS",
    "exchange": "NASDAQ",
    "name": "Vanguard Total International Stock ETF"
  },
  {
    "ticker": "VXX",
    "exchange": "Cboe BZX",
    "name": "iPath Series B S&P 500 VIX Short-Term Futures ETN"
  },
  {
    "ticker": "VXZ",
    "exchange": "Cboe BZX",
    "name": "iPath Series B S&P 500 VIX Mid-Term Futures ETN"
  },
  {
    "ticker": "VYGR",
    "exchange": "NASDAQ",
    "name": "Voyager Therapeutics Inc."
  },
  {
    "ticker": "VYM",
    "exchange": "NYSE ARCA",
    "name": "Vanguard High Dividend Yield Index ETF"
  },
  {
    "ticker": "VYMI",
    "exchange": "NASDAQ",
    "name": "Vanguard International High Dividend Yield ETF"
  },
  {
    "ticker": "VZ",
    "exchange": "NYSE",
    "name": "Verizon Communications Inc."
  },
  {
    "ticker": "W",
    "exchange": "NYSE",
    "name": "Wayfair Inc. Class A"
  },
  {
    "ticker": "WAB",
    "exchange": "NYSE",
    "name": "Westinghouse Air Brake Technologies Corporation"
  },
  {
    "ticker": "WABC",
    "exchange": "NASDAQ",
    "name": "Westamerica Bancorporation"
  },
  {
    "ticker": "WAFD",
    "exchange": "NASDAQ",
    "name": "Washington Federal Inc."
  },
  {
    "ticker": "WAFU",
    "exchange": "NASDAQ",
    "name": "Wah Fu Education Group Ltd."
  },
  {
    "ticker": "WAL",
    "exchange": "NYSE",
    "name": "Western Alliance Bancorp"
  },
  {
    "ticker": "WALA",
    "exchange": "NYSE",
    "name": "Western Alliance Bancorp 6.25 % Debentures 2016-01.07.56"
  },
  {
    "ticker": "WANT",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Consumer Discretionary Bull 3x Shares"
  },
  {
    "ticker": "WASH",
    "exchange": "NASDAQ",
    "name": "Washington Trust Bancorp Inc."
  },
  {
    "ticker": "WAT",
    "exchange": "NYSE",
    "name": "Waters Corporation"
  },
  {
    "ticker": "WATT",
    "exchange": "NASDAQ",
    "name": "Energous Corp."
  },
  {
    "ticker": "WB",
    "exchange": "NASDAQ",
    "name": "Weibo Corp Sponsored ADR Class A"
  },
  {
    "ticker": "WBA",
    "exchange": "NASDAQ",
    "name": "Walgreens Boots Alliance Inc"
  },
  {
    "ticker": "WBAI",
    "exchange": "NYSE",
    "name": "500.com Limited"
  },
  {
    "ticker": "WBIE",
    "exchange": "NYSE ARCA",
    "name": "WBI BullBear Rising Income 3000 ETF"
  },
  {
    "ticker": "WBIF",
    "exchange": "NYSE ARCA",
    "name": "WBI BullBear Value 3000 ETF"
  },
  {
    "ticker": "WBIG",
    "exchange": "NYSE ARCA",
    "name": "WBI BullBear Yield 3000 ETF"
  },
  {
    "ticker": "WBII",
    "exchange": "NYSE ARCA",
    "name": "WBI BullBear Global Income ETF"
  },
  {
    "ticker": "WBIL",
    "exchange": "NYSE ARCA",
    "name": "WBI BullBear Quality 3000 ETF"
  },
  {
    "ticker": "WBIN",
    "exchange": "NYSE ARCA",
    "name": "WBI BullBear Trend Switch US Total Return ETF"
  },
  {
    "ticker": "WBIT",
    "exchange": "NYSE ARCA",
    "name": "WBI BullBear Trend Switch US 3000 Total Return ETF"
  },
  {
    "ticker": "WBIY",
    "exchange": "NYSE ARCA",
    "name": "WBI Power Factor High Dividend ETF"
  },
  {
    "ticker": "WBK",
    "exchange": "NYSE",
    "name": "Westpac Banking Corp Sponsored ADR"
  },
  {
    "ticker": "WBND",
    "exchange": "NASDAQ",
    "name": "Western Asset Total Return ETF"
  },
  {
    "ticker": "WBS",
    "exchange": "NYSE",
    "name": "Webster Financial Corporation"
  },
  {
    "ticker": "WBS-F",
    "exchange": "NYSE",
    "name": "Webster Financial Corp (Conn) Deposit Shs Repr 1/1000th Non-Cum Perp Red Pfd Registered Shs Ser F"
  },
  {
    "ticker": "WBT",
    "exchange": "NYSE",
    "name": "Welbilt Inc"
  },
  {
    "ticker": "WCC",
    "exchange": "NYSE",
    "name": "WESCO International Inc."
  },
  {
    "ticker": "WCC-A",
    "exchange": "NYSE",
    "name": "WESCO International Inc. Depositary Shs Repr 1/1000th Cum Conv Red Perp Pfd Rg Shs Series A"
  },
  {
    "ticker": "WCLD",
    "exchange": "NASDAQ",
    "name": "WisdomTree Cloud Computing Fund"
  },
  {
    "ticker": "WCN",
    "exchange": "NYSE",
    "name": "Waste Connections Inc."
  },
  {
    "ticker": "WD",
    "exchange": "NYSE",
    "name": "Walker & Dunlop Inc."
  },
  {
    "ticker": "WDAY",
    "exchange": "NASDAQ",
    "name": "Workday Inc. Class A"
  },
  {
    "ticker": "WDC",
    "exchange": "NASDAQ",
    "name": "Western Digital Corporation"
  },
  {
    "ticker": "WDFC",
    "exchange": "NASDAQ",
    "name": "WD-40 Company"
  },
  {
    "ticker": "WDIV",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Global Dividend ETF"
  },
  {
    "ticker": "WDR",
    "exchange": "NYSE",
    "name": "Waddell & Reed Financial Inc. Class A"
  },
  {
    "ticker": "WEA",
    "exchange": "NYSE",
    "name": "Western Asset Premier Bond Fund Premier Bond Fund"
  },
  {
    "ticker": "WEAT",
    "exchange": "NYSE ARCA",
    "name": "Teucrium Wheat Fund"
  },
  {
    "ticker": "WEBL",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Dow Jones Internet Bull 3X Shares"
  },
  {
    "ticker": "WEBS",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily Dow Jones Internet Bear 3X Shares"
  },
  {
    "ticker": "WEC",
    "exchange": "NYSE",
    "name": "WEC Energy Group Inc"
  },
  {
    "ticker": "WEI",
    "exchange": "NYSE",
    "name": "Weidai Ltd. Sponsored ADR Class A"
  },
  {
    "ticker": "WELL",
    "exchange": "NYSE",
    "name": "Welltower Inc."
  },
  {
    "ticker": "WEN",
    "exchange": "NASDAQ",
    "name": "Wendy's Company"
  },
  {
    "ticker": "WERN",
    "exchange": "NASDAQ",
    "name": "Werner Enterprises Inc."
  },
  {
    "ticker": "WES",
    "exchange": "NYSE",
    "name": "Western Midstream Partners LP"
  },
  {
    "ticker": "WETF",
    "exchange": "NASDAQ",
    "name": "WisdomTree Investments Inc."
  },
  {
    "ticker": "WEX",
    "exchange": "NYSE",
    "name": "WEX Inc."
  },
  {
    "ticker": "WEYS",
    "exchange": "NASDAQ",
    "name": "Weyco Group Inc."
  },
  {
    "ticker": "WF",
    "exchange": "NYSE",
    "name": "Woori Financial Group Inc. Sponsored ADR"
  },
  {
    "ticker": "WFC",
    "exchange": "NYSE",
    "name": "Wells Fargo & Company"
  },
  {
    "ticker": "WFC-L",
    "exchange": "NYSE",
    "name": "Wells Fargo & Company 7.5 % Non Cum Perp Conv Pfd Registered Shs A Series L"
  },
  {
    "ticker": "WFC-N",
    "exchange": "NYSE",
    "name": "Wells Fargo & Company Deposit Shs Repr 1/1000th 5 1/5 % Non-Cum Perp Pfd Shs A Series N"
  },
  {
    "ticker": "WFC-O",
    "exchange": "NYSE",
    "name": "Wells Fargo & Company Deposit Shs Repr 1/1000th 5 1/8 % Non-Cum Perp Pfd Shs A Series 0"
  },
  {
    "ticker": "WFC-P",
    "exchange": "NYSE",
    "name": "Wells Fargo & Company Deposit Shs Repr 1/1000th 5 1/4 % Non-Cum Perp Pfd Shs A Series P"
  },
  {
    "ticker": "WFC-Q",
    "exchange": "NYSE",
    "name": "Wells Fargo & Company Deposit Shs Repr 1/1000th 5.85 % Non-Cum Perp Pfd Shs A Series Q"
  },
  {
    "ticker": "WFC-R",
    "exchange": "NYSE",
    "name": "Wells Fargo & Company Deposit Shs Repr 1/1000th 6 5/8 % Non-Cum Perp Pfd Shs A Series R"
  },
  {
    "ticker": "WFC-T",
    "exchange": "NYSE",
    "name": "Wells Fargo & Company Deposit Shs Repr 1/1000th 6 % Non-Cum Perp Pfd Shs A Series T"
  },
  {
    "ticker": "WFC-V",
    "exchange": "NYSE",
    "name": "Wells Fargo & Company Deposit Shs Repr 1/1000th 6 % Non-Cum Perp Pfd Shs A Series V"
  },
  {
    "ticker": "WFC-W",
    "exchange": "NYSE",
    "name": "Wells Fargo & Company Deposit Shs Repr 1/1000th 5 7/10 % Non-Cum Pfd Shs A Series W"
  },
  {
    "ticker": "WFC-X",
    "exchange": "NYSE",
    "name": "Wells Fargo & Company Deposit Shs Repr 1/1000th 5 1/2 % Non-Cum Perp Pfd Shs A Series X"
  },
  {
    "ticker": "WFC-Y",
    "exchange": "NYSE",
    "name": "Wells Fargo & Company Deposit Shs A Repr 1/1000th 5.625% Red Non-Cum Pfd Reg Shs A Ser Y"
  },
  {
    "ticker": "WFC-Z",
    "exchange": "NYSE",
    "name": "Wells Fargo & Co Depositary Shs Repr 1/1000th 4.75% Non-Cum Red Perp Pfd Shs A Series Z"
  },
  {
    "ticker": "WFH",
    "exchange": "NYSE ARCA",
    "name": "Direxion Work From Home ETF"
  },
  {
    "ticker": "WFHY",
    "exchange": "Cboe BZX",
    "name": "WisdomTree U.S. High Yield Corporate Bond Fund"
  },
  {
    "ticker": "WFIG",
    "exchange": "Cboe BZX",
    "name": "WisdomTree U.S. Corporate Bond Fund"
  },
  {
    "ticker": "WGO",
    "exchange": "NYSE",
    "name": "Winnebago Industries Inc."
  },
  {
    "ticker": "WH",
    "exchange": "NYSE",
    "name": "Wyndham Hotels & Resorts Inc."
  },
  {
    "ticker": "WHD",
    "exchange": "NYSE",
    "name": "Cactus Inc. Class A"
  },
  {
    "ticker": "WHF",
    "exchange": "NASDAQ",
    "name": "WhiteHorse Finance Inc."
  },
  {
    "ticker": "WHFBZ",
    "exchange": "NASDAQ",
    "name": "WhiteHorse Finance Inc 6.5 % Notes 2018-30.11.25"
  },
  {
    "ticker": "WHG",
    "exchange": "NYSE",
    "name": "Westwood Holdings Group Inc."
  },
  {
    "ticker": "WHLM",
    "exchange": "NASDAQ",
    "name": "Wilhelmina International Inc."
  },
  {
    "ticker": "WHLR",
    "exchange": "NASDAQ",
    "name": "Wheeler Real Estate Investment Trust Inc."
  },
  {
    "ticker": "WHLRD",
    "exchange": "NASDAQ",
    "name": "Wheeler Real Estate Investment Trust Inc. Cum Conv Pfd Shs Series D"
  },
  {
    "ticker": "WHLRP",
    "exchange": "NASDAQ",
    "name": "Wheeler Real Estate Investment Trust Inc. Cum Conv Pfd Shs Series B"
  },
  {
    "ticker": "WHR",
    "exchange": "NYSE",
    "name": "Whirlpool Corporation"
  },
  {
    "ticker": "WIA",
    "exchange": "NYSE",
    "name": "Western Asset Inflation-Linked Income Fund of Benef Interest"
  },
  {
    "ticker": "WIFI",
    "exchange": "NASDAQ",
    "name": "Boingo Wireless Inc."
  },
  {
    "ticker": "WIL",
    "exchange": "Cboe BZX",
    "name": "Barclays Women in Leadership ETN"
  },
  {
    "ticker": "WILC",
    "exchange": "NASDAQ",
    "name": "G. Willi-Food International Ltd"
  },
  {
    "ticker": "WIMI",
    "exchange": "NASDAQ",
    "name": "WiMi Hologram Cloud Inc ADR Class B"
  },
  {
    "ticker": "WINA",
    "exchange": "NASDAQ",
    "name": "Winmark Corporation"
  },
  {
    "ticker": "WINC",
    "exchange": "NASDAQ",
    "name": "Western Asset Short Duration Income ETF"
  },
  {
    "ticker": "WING",
    "exchange": "NASDAQ",
    "name": "Wingstop Inc."
  },
  {
    "ticker": "WINS",
    "exchange": "NASDAQ",
    "name": "Wins Finance Holdings Inc."
  },
  {
    "ticker": "WINT",
    "exchange": "NASDAQ",
    "name": "Windtree Therapeutics Inc."
  },
  {
    "ticker": "WIP",
    "exchange": "NYSE ARCA",
    "name": "SPDR FTSE International Government Inflation-Protected Bond ETF"
  },
  {
    "ticker": "WIRE",
    "exchange": "NASDAQ",
    "name": "Encore Wire Corporation"
  },
  {
    "ticker": "WISA",
    "exchange": "NASDAQ",
    "name": "Summit Wireless Technologies Inc."
  },
  {
    "ticker": "WIT",
    "exchange": "NYSE",
    "name": "Wipro Limited Sponsored ADR"
  },
  {
    "ticker": "WIW",
    "exchange": "NYSE",
    "name": "Western Asset Inflation-Linked Opportunities & Income Fund of Benef Interest"
  },
  {
    "ticker": "WIX",
    "exchange": "NASDAQ",
    "name": "Wix.com Ltd."
  },
  {
    "ticker": "WIZ",
    "exchange": "NYSE ARCA",
    "name": "Merlyn.AI Bull-Rider Bear-Fighter ETF"
  },
  {
    "ticker": "WK",
    "exchange": "NYSE",
    "name": "Workiva Inc. Class A"
  },
  {
    "ticker": "WKEY",
    "exchange": "NASDAQ",
    "name": "WISeKey International Holding Ltd. Sponsored ADR"
  },
  {
    "ticker": "WKHS",
    "exchange": "NASDAQ",
    "name": "Workhorse Group Inc."
  },
  {
    "ticker": "WLDN",
    "exchange": "NASDAQ",
    "name": "Willdan Group Inc."
  },
  {
    "ticker": "WLDR",
    "exchange": "Cboe BZX",
    "name": "Affinity World Leaders Equity ETF"
  },
  {
    "ticker": "WLFC",
    "exchange": "NASDAQ",
    "name": "Willis LeNYSE American Finance Corporation"
  },
  {
    "ticker": "WLK",
    "exchange": "NYSE",
    "name": "Westlake Chemical Corporation"
  },
  {
    "ticker": "WLKP",
    "exchange": "NYSE",
    "name": "Westlake Chemical Partners LP"
  },
  {
    "ticker": "WLL",
    "exchange": "NYSE",
    "name": "Whiting Petroleum Corporation"
  },
  {
    "ticker": "WLTW",
    "exchange": "NASDAQ",
    "name": "Willis Towers Watson Public Limited Company"
  },
  {
    "ticker": "WM",
    "exchange": "NYSE",
    "name": "Waste Management Inc."
  },
  {
    "ticker": "WMB",
    "exchange": "NYSE",
    "name": "Williams Companies Inc."
  },
  {
    "ticker": "WMC",
    "exchange": "NYSE",
    "name": "Western Asset Mortgage Capital Corporation"
  },
  {
    "ticker": "WMG",
    "exchange": "NASDAQ",
    "name": "Warner Music Group Corp. Class A"
  },
  {
    "ticker": "WMGI",
    "exchange": "NASDAQ",
    "name": "Wright Medical Group NV"
  },
  {
    "ticker": "WMK",
    "exchange": "NYSE",
    "name": "Weis Markets Inc."
  },
  {
    "ticker": "WMS",
    "exchange": "NYSE",
    "name": "Advanced Drainage Systems Inc."
  },
  {
    "ticker": "WMT",
    "exchange": "NYSE",
    "name": "Walmart Inc."
  },
  {
    "ticker": "WNC",
    "exchange": "NYSE",
    "name": "Wabash National Corporation"
  },
  {
    "ticker": "WNEB",
    "exchange": "NASDAQ",
    "name": "Western New England Bancorp Inc."
  },
  {
    "ticker": "WNS",
    "exchange": "NYSE",
    "name": "WNS (Holdings) Limited Sponsored ADR"
  },
  {
    "ticker": "WOMN",
    "exchange": "NYSE ARCA",
    "name": "Impact Shares YWCA Women's Empowerment ETF"
  },
  {
    "ticker": "WOOD",
    "exchange": "NASDAQ",
    "name": "iShares Global Timber & Forestry ETF"
  },
  {
    "ticker": "WOR",
    "exchange": "NYSE",
    "name": "Worthington Industries Inc."
  },
  {
    "ticker": "WORK",
    "exchange": "NYSE",
    "name": "Slack Technologies Inc. Class A"
  },
  {
    "ticker": "WORX",
    "exchange": "NASDAQ",
    "name": "SCWorx Corp."
  },
  {
    "ticker": "WOW",
    "exchange": "NYSE",
    "name": "WideOpenWest Inc."
  },
  {
    "ticker": "WPC",
    "exchange": "NYSE",
    "name": "W. P. Carey Inc."
  },
  {
    "ticker": "WPF",
    "exchange": "NYSE",
    "name": "Foley Trasimene Acquisition Corp. Class A"
  },
  {
    "ticker": "WPF=",
    "exchange": "NYSE",
    "name": "Foley Trasimene Acquisition Corp. Units Cons of 1 Sh + 1/3 Wt 25"
  },
  {
    "ticker": "WPF+",
    "exchange": "NYSE",
    "name": "Foley Trasimene Acquisition Corp. Warrant 2020-26.05.25 on Foley Tras Acqn"
  },
  {
    "ticker": "WPG",
    "exchange": "NYSE",
    "name": "Washington Prime Group Inc."
  },
  {
    "ticker": "WPG-H",
    "exchange": "NYSE",
    "name": "Washington Prime Group Inc 1/2% Cum Red Pfd Series H"
  },
  {
    "ticker": "WPG-I",
    "exchange": "NYSE",
    "name": "Washington Prime Group Inc 6 7/8 % Cum Red Pfd Series I"
  },
  {
    "ticker": "WPM",
    "exchange": "NYSE",
    "name": "Wheaton Precious Metals Corp"
  },
  {
    "ticker": "WPP",
    "exchange": "NYSE",
    "name": "WPP Plc Sponsored ADR"
  },
  {
    "ticker": "WPRT",
    "exchange": "NASDAQ",
    "name": "Westport Fuel Systems Inc."
  },
  {
    "ticker": "WPS",
    "exchange": "NYSE ARCA",
    "name": "iShares International Developed Property ETF"
  },
  {
    "ticker": "WPX",
    "exchange": "NYSE",
    "name": "WPX Energy Inc."
  },
  {
    "ticker": "WRB",
    "exchange": "NYSE",
    "name": "W. R. Berkley Corporation"
  },
  {
    "ticker": "WRB-B",
    "exchange": "NYSE",
    "name": "W. R. Berkley Corporation 5.625 % Debentures 2013-30.4.53 Sub"
  },
  {
    "ticker": "WRB-C",
    "exchange": "NYSE",
    "name": "W. R. Berkley Corporation 5.9 % Debentures 2016-1.3.56"
  },
  {
    "ticker": "WRB-D",
    "exchange": "NYSE",
    "name": "W. R. Berkley Corporation 5.75 % Debentures 2016-01.06.56"
  },
  {
    "ticker": "WRB-E",
    "exchange": "NYSE",
    "name": "W. R. Berkley Corporation 5.7 % Debentures 2018-30.03.58 Global"
  },
  {
    "ticker": "WRB-F",
    "exchange": "NYSE",
    "name": "W. R. Berkley Corporation 5.1 % Debentures 2019-30.12.59 Global"
  },
  {
    "ticker": "WRE",
    "exchange": "NYSE",
    "name": "Washington Real Estate Investment Trust"
  },
  {
    "ticker": "WRI",
    "exchange": "NYSE",
    "name": "Weingarten Realty Investors"
  },
  {
    "ticker": "WRK",
    "exchange": "NYSE",
    "name": "WestRock Company"
  },
  {
    "ticker": "WRLD",
    "exchange": "NASDAQ",
    "name": "World Acceptance Corporation"
  },
  {
    "ticker": "WRN",
    "exchange": "NYSE American",
    "name": "Western Copper and Gold Corporation"
  },
  {
    "ticker": "WRTC",
    "exchange": "NASDAQ",
    "name": "Wrap Technologies Inc."
  },
  {
    "ticker": "WSBC",
    "exchange": "NASDAQ",
    "name": "WesBanco Inc."
  },
  {
    "ticker": "WSBCP",
    "exchange": "NASDAQ",
    "name": "Wesbanco Inc Depositary Shs Repr 1/40th Non-Cum Perp Red Pfd Registered Shs A"
  },
  {
    "ticker": "WSBF",
    "exchange": "NASDAQ",
    "name": "Waterstone Financial Inc."
  },
  {
    "ticker": "WSC",
    "exchange": "NASDAQ",
    "name": "WillScot Mobile Mini Holdings Corp. Class A"
  },
  {
    "ticker": "WSFS",
    "exchange": "NASDAQ",
    "name": "WSFS Financial Corporation"
  },
  {
    "ticker": "WSG",
    "exchange": "NASDAQ",
    "name": "Wanda Sports Group Company Limited Sponsored ADR Class A"
  },
  {
    "ticker": "WSM",
    "exchange": "NYSE",
    "name": "Williams-Sonoma Inc."
  },
  {
    "ticker": "WSO",
    "exchange": "NYSE",
    "name": "Watsco Inc."
  },
  {
    "ticker": "WSO.B",
    "exchange": "NYSE",
    "name": "Watsco Inc. Class B"
  },
  {
    "ticker": "WSR",
    "exchange": "NYSE",
    "name": "Whitestone REIT"
  },
  {
    "ticker": "WST",
    "exchange": "NYSE",
    "name": "West Pharmaceutical Services Inc."
  },
  {
    "ticker": "WSTG",
    "exchange": "NASDAQ",
    "name": "Wayside Technology Group Inc."
  },
  {
    "ticker": "WSTL",
    "exchange": "NASDAQ",
    "name": "Westell Technologies Inc. Class A"
  },
  {
    "ticker": "WTBA",
    "exchange": "NASDAQ",
    "name": "West Bancorporation Inc."
  },
  {
    "ticker": "WTER",
    "exchange": "NASDAQ",
    "name": "Alkaline Water Co. Inc."
  },
  {
    "ticker": "WTFC",
    "exchange": "NASDAQ",
    "name": "Wintrust Financial Corporation"
  },
  {
    "ticker": "WTFCM",
    "exchange": "NASDAQ",
    "name": "Wintrust Financial Corp Non-Cum Perp Pfd Shs Series D"
  },
  {
    "ticker": "WTFCP",
    "exchange": "NASDAQ",
    "name": "Wintrust Financial Corp Depositary Shs Repr 1/1000th Non-Cum Red Perp Pfd Rg Series E"
  },
  {
    "ticker": "WTI",
    "exchange": "NYSE",
    "name": "W&T Offshore Inc."
  },
  {
    "ticker": "WTM",
    "exchange": "NYSE",
    "name": "White Mountains Insurance Group Ltd"
  },
  {
    "ticker": "WTMF",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Managed Futures Strategy Fund"
  },
  {
    "ticker": "WTRE",
    "exchange": "NASDAQ",
    "name": "Watford Holdings Ltd."
  },
  {
    "ticker": "WTREP",
    "exchange": "NASDAQ",
    "name": "Watford Holdings Ltd 8.5 % Cum Red Pfd Registered Shs Accred Inv"
  },
  {
    "ticker": "WTRG",
    "exchange": "NYSE",
    "name": "Essential Utilities Inc."
  },
  {
    "ticker": "WTRH",
    "exchange": "NASDAQ",
    "name": "Waitr Holdings Inc. Class A"
  },
  {
    "ticker": "WTRU",
    "exchange": "NYSE",
    "name": "Essential Utilities Inc. Tangible Equity Units Cons 8.62909 USD of Nom Nts 30.04.22 + 1 PC"
  },
  {
    "ticker": "WTS",
    "exchange": "NYSE",
    "name": "Watts Water Technologies Inc. Class A"
  },
  {
    "ticker": "WTT",
    "exchange": "NYSE American",
    "name": "Wireless Telecom Group Inc."
  },
  {
    "ticker": "WTTR",
    "exchange": "NYSE",
    "name": "Select Energy Services Inc. Class A"
  },
  {
    "ticker": "WU",
    "exchange": "NYSE",
    "name": "Western Union Company"
  },
  {
    "ticker": "WUBA",
    "exchange": "NYSE",
    "name": "58.com Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "WUGI",
    "exchange": "Cboe BZX",
    "name": "Esoterica NextG Economy ETF"
  },
  {
    "ticker": "WVE",
    "exchange": "NASDAQ",
    "name": "Wave Life Sciences Ltd."
  },
  {
    "ticker": "WVFC",
    "exchange": "NASDAQ",
    "name": "WVS Financial Corp."
  },
  {
    "ticker": "WVVI",
    "exchange": "NASDAQ",
    "name": "Willamette Valley Vineyards Inc."
  },
  {
    "ticker": "WVVIP",
    "exchange": "NASDAQ",
    "name": "Willamette Valley Vineyards Inc Red Pfd Shs Series A"
  },
  {
    "ticker": "WW",
    "exchange": "NASDAQ",
    "name": "WW International Inc."
  },
  {
    "ticker": "WWD",
    "exchange": "NASDAQ",
    "name": "Woodward Inc."
  },
  {
    "ticker": "WWE",
    "exchange": "NYSE",
    "name": "World Wrestling Entertainment Inc. Class A"
  },
  {
    "ticker": "WWJD",
    "exchange": "NYSE ARCA",
    "name": "Inspire International ESG ETF"
  },
  {
    "ticker": "WWR",
    "exchange": "NASDAQ",
    "name": "Westwater Resources Inc"
  },
  {
    "ticker": "WWW",
    "exchange": "NYSE",
    "name": "Wolverine World Wide Inc."
  },
  {
    "ticker": "WY",
    "exchange": "NYSE",
    "name": "Weyerhaeuser Company"
  },
  {
    "ticker": "WYND",
    "exchange": "NYSE",
    "name": "Wyndham Destinations Inc."
  },
  {
    "ticker": "WYNN",
    "exchange": "NASDAQ",
    "name": "Wynn Resorts Limited"
  },
  {
    "ticker": "WYY",
    "exchange": "NYSE American",
    "name": "WidePoint Corporation"
  },
  {
    "ticker": "X",
    "exchange": "NYSE",
    "name": "United States Steel Corporation"
  },
  {
    "ticker": "XAIR",
    "exchange": "NASDAQ",
    "name": "Beyond Air Inc"
  },
  {
    "ticker": "XAN",
    "exchange": "NYSE",
    "name": "Exantas Capital Corp."
  },
  {
    "ticker": "XAN-C",
    "exchange": "NYSE",
    "name": "Exantas Capital Corp. Cum Red Perp Pfd Registered Shs Series C"
  },
  {
    "ticker": "XAR",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Aerospace & Defense ETF"
  },
  {
    "ticker": "XBI",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P BIOTECH ETF"
  },
  {
    "ticker": "XBIO",
    "exchange": "NASDAQ",
    "name": "Xenetic Biosciences Inc."
  },
  {
    "ticker": "XBIOW",
    "exchange": "NASDAQ",
    "name": "Xenetic Biosciences Inc Warrant 2019-11.07.24 On Xenetic Bioscien Rg"
  },
  {
    "ticker": "XBIT",
    "exchange": "NASDAQ",
    "name": "XBiotech Inc."
  },
  {
    "ticker": "XBUY",
    "exchange": "NYSE ARCA",
    "name": "Amplify International Online Retail ETF"
  },
  {
    "ticker": "XCEM",
    "exchange": "NYSE ARCA",
    "name": "Columbia EM Core ex-China ETF"
  },
  {
    "ticker": "XCOM",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra Communication Services Select Sector"
  },
  {
    "ticker": "XCUR",
    "exchange": "NASDAQ",
    "name": "Exicure Inc."
  },
  {
    "ticker": "XDIV",
    "exchange": "NYSE ARCA",
    "name": "US Equity Ex-Dividends Fund-Series 2027"
  },
  {
    "ticker": "XEC",
    "exchange": "NYSE",
    "name": "Cimarex Energy Co."
  },
  {
    "ticker": "XEL",
    "exchange": "NASDAQ",
    "name": "Xcel Energy Inc."
  },
  {
    "ticker": "XELA",
    "exchange": "NASDAQ",
    "name": "Exela Technologies Inc."
  },
  {
    "ticker": "XELB",
    "exchange": "NASDAQ",
    "name": "XCel Brands Inc."
  },
  {
    "ticker": "XENE",
    "exchange": "NASDAQ",
    "name": "Xenon Pharmaceuticals Inc."
  },
  {
    "ticker": "XENT",
    "exchange": "NASDAQ",
    "name": "Intersect ENT Inc"
  },
  {
    "ticker": "XERS",
    "exchange": "NASDAQ",
    "name": "Xeris Pharmaceuticals Inc"
  },
  {
    "ticker": "XES",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Oil & Gas Equipment & Services ETF"
  },
  {
    "ticker": "XFLT",
    "exchange": "NYSE",
    "name": "XAI Octagon Floating Rate & Alternative Income Term Trust"
  },
  {
    "ticker": "XFOR",
    "exchange": "NASDAQ",
    "name": "X4 Pharmaceuticals Inc."
  },
  {
    "ticker": "XGN",
    "exchange": "NASDAQ",
    "name": "Exagen Inc."
  },
  {
    "ticker": "XHB",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Homebuilders ETF"
  },
  {
    "ticker": "XHE",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Health Care Equipment ETF"
  },
  {
    "ticker": "XHR",
    "exchange": "NYSE",
    "name": "Xenia Hotels & Resorts Inc."
  },
  {
    "ticker": "XHS",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Health Care Services ETF"
  },
  {
    "ticker": "XIN",
    "exchange": "NYSE",
    "name": "Xinyuan Real Estate Co. Ltd. Sponsored ADR"
  },
  {
    "ticker": "XITK",
    "exchange": "NYSE ARCA",
    "name": "SPDR FactSet Innovative Technology ETF"
  },
  {
    "ticker": "XLB",
    "exchange": "NYSE ARCA",
    "name": "Materials Select Sector SPDR Fund"
  },
  {
    "ticker": "XLC",
    "exchange": "NYSE ARCA",
    "name": "Communication Services Select Sector SPDR Fund"
  },
  {
    "ticker": "XLE",
    "exchange": "NYSE ARCA",
    "name": "Energy Select Sector SPDR Fund"
  },
  {
    "ticker": "XLF",
    "exchange": "NYSE ARCA",
    "name": "Financial Select Sector SPDR Fund"
  },
  {
    "ticker": "XLG",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 Top 50 ETF"
  },
  {
    "ticker": "XLI",
    "exchange": "NYSE ARCA",
    "name": "Industrial Select Sector SPDR Fund"
  },
  {
    "ticker": "XLK",
    "exchange": "NYSE ARCA",
    "name": "Technology Select Sector SPDR Fund"
  },
  {
    "ticker": "XLNX",
    "exchange": "NASDAQ",
    "name": "Xilinx Inc."
  },
  {
    "ticker": "XLP",
    "exchange": "NYSE ARCA",
    "name": "Consumer Staples Select Sector SPDR Fund"
  },
  {
    "ticker": "XLRE",
    "exchange": "NYSE ARCA",
    "name": "Real Estate Select Sector SPDR Fund"
  },
  {
    "ticker": "XLRN",
    "exchange": "NASDAQ",
    "name": "Acceleron Pharma Inc"
  },
  {
    "ticker": "XLSR",
    "exchange": "NYSE ARCA",
    "name": "SPDR SSGA U.S. Sector Rotation ETF"
  },
  {
    "ticker": "XLU",
    "exchange": "NYSE ARCA",
    "name": "Utilities Select Sector SPDR Fund"
  },
  {
    "ticker": "XLV",
    "exchange": "NYSE ARCA",
    "name": "Health Care Select Sector SPDR Fund"
  },
  {
    "ticker": "XLY",
    "exchange": "NYSE ARCA",
    "name": "Consumer Discretionary Select Sector SPDR Fund"
  },
  {
    "ticker": "XME",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Metals & Mining ETF"
  },
  {
    "ticker": "XMHQ",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P MidCap Quality ETF"
  },
  {
    "ticker": "XMLV",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P MidCap Low Volatility ETF"
  },
  {
    "ticker": "XMMO",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P MidCap Momentum ETF"
  },
  {
    "ticker": "XMPT",
    "exchange": "Cboe BZX",
    "name": "VanEck Vectors CEF Municipal Income ETF"
  },
  {
    "ticker": "XMVM",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P MidCap Value with Momentum ETF"
  },
  {
    "ticker": "XNCR",
    "exchange": "NASDAQ",
    "name": "Xencor Inc."
  },
  {
    "ticker": "XNET",
    "exchange": "NASDAQ",
    "name": "Xunlei Ltd. ADR"
  },
  {
    "ticker": "XNTK",
    "exchange": "NYSE ARCA",
    "name": "SPDR NYSEE Technology ETF"
  },
  {
    "ticker": "XOM",
    "exchange": "NYSE",
    "name": "Exxon Mobil Corporation"
  },
  {
    "ticker": "XOMA",
    "exchange": "NASDAQ",
    "name": "XOMA Corporation"
  },
  {
    "ticker": "XONE",
    "exchange": "NASDAQ",
    "name": "ExOne Co."
  },
  {
    "ticker": "XOP",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Oil & Gas Exploration & Production ETF"
  },
  {
    "ticker": "XOUT",
    "exchange": "NYSE ARCA",
    "name": "GraniteShares XOUT US Large Cap ETF"
  },
  {
    "ticker": "XP",
    "exchange": "NASDAQ",
    "name": "XP Inc. Class A"
  },
  {
    "ticker": "XPEL",
    "exchange": "NASDAQ",
    "name": "XPEL Inc."
  },
  {
    "ticker": "XPER",
    "exchange": "NASDAQ",
    "name": "Xperi Holding Corporation"
  },
  {
    "ticker": "XPH",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Pharmaceuticals ETF"
  },
  {
    "ticker": "XPL",
    "exchange": "NYSE American",
    "name": "Solitario Zinc Corp"
  },
  {
    "ticker": "XPO",
    "exchange": "NYSE",
    "name": "XPO Logistics Inc."
  },
  {
    "ticker": "XPP",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra FTSE China 50"
  },
  {
    "ticker": "XRAY",
    "exchange": "NASDAQ",
    "name": "DENTSPLY SIRONA Inc."
  },
  {
    "ticker": "XRLV",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P 500 ex-Rate Sensitive Low Volatility ETF"
  },
  {
    "ticker": "XRT",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Retail ETF"
  },
  {
    "ticker": "XRX",
    "exchange": "NYSE",
    "name": "Xerox Holdings Corporation"
  },
  {
    "ticker": "XSD",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Semiconductor ETF"
  },
  {
    "ticker": "XSHD",
    "exchange": "Cboe BZX",
    "name": "Invesco S&P SmallCap High Dividend Low Volatility ETF"
  },
  {
    "ticker": "XSHQ",
    "exchange": "Cboe BZX",
    "name": "Invesco S&P SmallCap Quality ETF"
  },
  {
    "ticker": "XSLV",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P SmallCap Low Volatility ETF"
  },
  {
    "ticker": "XSMO",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P SmallCap Momentum ETF"
  },
  {
    "ticker": "XSOE",
    "exchange": "NYSE ARCA",
    "name": "WisdomTree Emerging Markets ex-State-Owned Enterprises Fund"
  },
  {
    "ticker": "XSPA",
    "exchange": "NASDAQ",
    "name": "XpresSpa Group Inc."
  },
  {
    "ticker": "XSVM",
    "exchange": "NYSE ARCA",
    "name": "Invesco S&P SmallCap Value with Momentum ETF"
  },
  {
    "ticker": "XSW",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Software & Services ETF"
  },
  {
    "ticker": "XT",
    "exchange": "NASDAQ",
    "name": "iShares Exponential Technologies ETF"
  },
  {
    "ticker": "XTL",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Telecom ETF"
  },
  {
    "ticker": "XTLB",
    "exchange": "NASDAQ",
    "name": "XTL Biopharmaceuticals Ltd. Sponsored ADR"
  },
  {
    "ticker": "XTN",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Transportation ETF"
  },
  {
    "ticker": "XTNT",
    "exchange": "NYSE American",
    "name": "Xtant Medical Holdings Inc."
  },
  {
    "ticker": "XVZ",
    "exchange": "Cboe BZX",
    "name": "iPath S&P 500 Dynamic VIX ETN"
  },
  {
    "ticker": "XWEB",
    "exchange": "NYSE ARCA",
    "name": "SPDR S&P Internet ETF"
  },
  {
    "ticker": "XXII",
    "exchange": "NYSE American",
    "name": "22nd Century Group Inc."
  },
  {
    "ticker": "XYF",
    "exchange": "NYSE",
    "name": "X Financial Sponsored ADR Class A"
  },
  {
    "ticker": "XYL",
    "exchange": "NYSE",
    "name": "Xylem Inc."
  },
  {
    "ticker": "Y",
    "exchange": "NYSE",
    "name": "Alleghany Corporation"
  },
  {
    "ticker": "YAC=",
    "exchange": "NYSE",
    "name": "Yucaipa Acquisition Corp. Units Cons of 1 Shs -A- + 1/3 Wt"
  },
  {
    "ticker": "YANG",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily FTSE China Bear 3X Shares"
  },
  {
    "ticker": "YCBD",
    "exchange": "NYSE American",
    "name": "cbdMD Inc."
  },
  {
    "ticker": "YCBD-A",
    "exchange": "NYSE American",
    "name": "cbdMD Inc. 8 % Cum Conv Red Perp Pfd Registered Shs Series A"
  },
  {
    "ticker": "YCL",
    "exchange": "NYSE ARCA",
    "name": "ProShares Ultra Yen"
  },
  {
    "ticker": "YCOM",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort Communication Services Select Sector"
  },
  {
    "ticker": "YCS",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort Yen"
  },
  {
    "ticker": "YELP",
    "exchange": "NYSE",
    "name": "Yelp Inc"
  },
  {
    "ticker": "YETI",
    "exchange": "NYSE",
    "name": "YETI Holdings Inc."
  },
  {
    "ticker": "YEXT",
    "exchange": "NYSE",
    "name": "Yext Inc."
  },
  {
    "ticker": "YGRN",
    "exchange": "NYSE ARCA",
    "name": "MicroSectors U.S. Big Oil Index Inverse ETN"
  },
  {
    "ticker": "YGYI",
    "exchange": "NASDAQ",
    "name": "Youngevity International Inc."
  },
  {
    "ticker": "YGYIP",
    "exchange": "NASDAQ",
    "name": "Youngevity International Inc 9.75 % Cum Red Perp Pfd Registered Shs Series D"
  },
  {
    "ticker": "YI",
    "exchange": "NASDAQ",
    "name": "111 Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "YIN",
    "exchange": "NASDAQ",
    "name": "Yintech Investment Holdings Ltd. Sponsored ADR"
  },
  {
    "ticker": "YINN",
    "exchange": "NYSE ARCA",
    "name": "Direxion Daily FTSE China Bull 3X Shares"
  },
  {
    "ticker": "YJ",
    "exchange": "NASDAQ",
    "name": "Yunji Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "YLCO",
    "exchange": "NASDAQ",
    "name": "Global X Funds Global X YieldCo & Renewable Energy Income ETF"
  },
  {
    "ticker": "YLD",
    "exchange": "NYSE ARCA",
    "name": "Principal Active Income ETF"
  },
  {
    "ticker": "YLDE",
    "exchange": "NASDAQ",
    "name": "ClearBridge Dividend Strategy ESG ETF"
  },
  {
    "ticker": "YMAB",
    "exchange": "NASDAQ",
    "name": "Y-mAbs Therapeutics Inc."
  },
  {
    "ticker": "YNDX",
    "exchange": "NASDAQ",
    "name": "Yandex NV Class A"
  },
  {
    "ticker": "YOLO",
    "exchange": "NYSE ARCA",
    "name": "AdvisorShares Pure Cannabis ETF"
  },
  {
    "ticker": "YORW",
    "exchange": "NASDAQ",
    "name": "York Water Company"
  },
  {
    "ticker": "YPF",
    "exchange": "NYSE",
    "name": "YPF SA Sponsored ADR Class D"
  },
  {
    "ticker": "YRCW",
    "exchange": "NASDAQ",
    "name": "YRC Worldwide Inc."
  },
  {
    "ticker": "YRD",
    "exchange": "NYSE",
    "name": "Yiren Digital Ltd. Sponsored ADR"
  },
  {
    "ticker": "YTEN",
    "exchange": "NASDAQ",
    "name": "Yield10 Bioscience Inc."
  },
  {
    "ticker": "YTRA",
    "exchange": "NASDAQ",
    "name": "Yatra Online Inc."
  },
  {
    "ticker": "YUM",
    "exchange": "NYSE",
    "name": "Yum! Brands Inc."
  },
  {
    "ticker": "YUMC",
    "exchange": "NYSE",
    "name": "Yum China Holdings Inc."
  },
  {
    "ticker": "YVR",
    "exchange": "NASDAQ",
    "name": "Liquid Media Group Ltd."
  },
  {
    "ticker": "YXI",
    "exchange": "NYSE ARCA",
    "name": "ProShares Short FTSE China 50"
  },
  {
    "ticker": "YY",
    "exchange": "NASDAQ",
    "name": "JOYY Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "YYY",
    "exchange": "NYSE ARCA",
    "name": "Amplify High Income ETF"
  },
  {
    "ticker": "Z",
    "exchange": "NASDAQ",
    "name": "Zillow Group Inc. Class C"
  },
  {
    "ticker": "ZAGG",
    "exchange": "NASDAQ",
    "name": "ZAGG Inc"
  },
  {
    "ticker": "ZBH",
    "exchange": "NYSE",
    "name": "Zimmer Biomet Holdings Inc."
  },
  {
    "ticker": "ZBRA",
    "exchange": "NASDAQ",
    "name": "Zebra Technologies Corporation Class A"
  },
  {
    "ticker": "ZCAN",
    "exchange": "NYSE ARCA",
    "name": "SPDR Solactive Canada ETF"
  },
  {
    "ticker": "ZCMD",
    "exchange": "NASDAQ",
    "name": "Zhongchao Inc Class A"
  },
  {
    "ticker": "ZDEU",
    "exchange": "NYSE ARCA",
    "name": "SPDR Solactive Germany ETF"
  },
  {
    "ticker": "ZDGE",
    "exchange": "NYSE American",
    "name": "Zedge Inc. Class B"
  },
  {
    "ticker": "ZEAL",
    "exchange": "NASDAQ",
    "name": "Zealand Pharma A/S Sponsored ADR"
  },
  {
    "ticker": "ZEN",
    "exchange": "NYSE",
    "name": "Zendesk Inc."
  },
  {
    "ticker": "ZEUS",
    "exchange": "NASDAQ",
    "name": "Olympic Steel Inc."
  },
  {
    "ticker": "ZG",
    "exchange": "NASDAQ",
    "name": "Zillow Group Inc. Class A"
  },
  {
    "ticker": "ZGBR",
    "exchange": "NYSE ARCA",
    "name": "SPDR Solactive United Kingdom ETF"
  },
  {
    "ticker": "ZGNX",
    "exchange": "NASDAQ",
    "name": "Zogenix Inc."
  },
  {
    "ticker": "ZGYH",
    "exchange": "NASDAQ",
    "name": "Yunhong International Class A"
  },
  {
    "ticker": "ZGYHR",
    "exchange": "NASDAQ",
    "name": "Yunhong International Rights For Shares"
  },
  {
    "ticker": "ZGYHU",
    "exchange": "NASDAQ",
    "name": "Yunhong International Units Cons of 1 Sh + 1/2 Wt + 1/10 Rt"
  },
  {
    "ticker": "ZGYHW",
    "exchange": "NASDAQ",
    "name": "Yunhong International Warrant - on Yunhong"
  },
  {
    "ticker": "ZHOK",
    "exchange": "NYSE ARCA",
    "name": "SPDR Solactive Hong Kong ETF"
  },
  {
    "ticker": "ZI",
    "exchange": "NASDAQ",
    "name": "ZoomInfo Technologies Inc. Class A"
  },
  {
    "ticker": "ZIG",
    "exchange": "NYSE ARCA",
    "name": "Acquirers Fund"
  },
  {
    "ticker": "ZION",
    "exchange": "NASDAQ",
    "name": "Zions Bancorporation N.A."
  },
  {
    "ticker": "ZIONL",
    "exchange": "NASDAQ",
    "name": "Zions Bancorporation NA Zions Bancorporation NA"
  },
  {
    "ticker": "ZIONN",
    "exchange": "NASDAQ",
    "name": "Zions Bancorporation NA Depositary Shs Repr 1/40th 5 3/4 % Non-Cum Perp Pfd Shs Series H"
  },
  {
    "ticker": "ZIONO",
    "exchange": "NASDAQ",
    "name": "Zions Bancorporation NA Depositary Shs Repr 1/40th Non Cum Perp Pfd Shs Series G"
  },
  {
    "ticker": "ZIONP",
    "exchange": "NASDAQ",
    "name": "Zions Bancorporation NA Depositary Shs Repr 1/40th Int Ser A Flt Rt Non Cum Perp Pfd Shs"
  },
  {
    "ticker": "ZIOP",
    "exchange": "NASDAQ",
    "name": "ZIOPHARM Oncology Inc."
  },
  {
    "ticker": "ZIXI",
    "exchange": "NASDAQ",
    "name": "Zix Corporation"
  },
  {
    "ticker": "ZJPN",
    "exchange": "NYSE ARCA",
    "name": "SPDR Solactive Japan ETF"
  },
  {
    "ticker": "ZKIN",
    "exchange": "NASDAQ",
    "name": "ZK International Group Co. Ltd."
  },
  {
    "ticker": "ZLAB",
    "exchange": "NASDAQ",
    "name": "Zai Lab Ltd. Sponsored ADR"
  },
  {
    "ticker": "ZM",
    "exchange": "NASDAQ",
    "name": "Zoom Video Communications Inc. Class A"
  },
  {
    "ticker": "ZMLP",
    "exchange": "NYSE ARCA",
    "name": "Direxion Zacks MLP High Income Index Shares"
  },
  {
    "ticker": "ZN",
    "exchange": "NASDAQ",
    "name": "Zion Oil and Gas Inc."
  },
  {
    "ticker": "ZNGA",
    "exchange": "NASDAQ",
    "name": "Zynga Inc. Class A"
  },
  {
    "ticker": "ZNH",
    "exchange": "NYSE",
    "name": "China Southern Airlines Company Limited Sponsored ADR Class H"
  },
  {
    "ticker": "ZNTL",
    "exchange": "NASDAQ",
    "name": "Zentalis Pharmaceuticals Inc."
  },
  {
    "ticker": "ZNWAA",
    "exchange": "NASDAQ",
    "name": "Zion Oil & Gas Inc Warrants 2015-31.01.21 on Shs"
  },
  {
    "ticker": "ZOM",
    "exchange": "NYSE American",
    "name": "Zomedica Pharmaceuticals Corp."
  },
  {
    "ticker": "ZROZ",
    "exchange": "NYSE ARCA",
    "name": "PIMCO 25+ Year Zero Coupon US Treasury Index ETF"
  },
  {
    "ticker": "ZS",
    "exchange": "NASDAQ",
    "name": "Zscaler Inc."
  },
  {
    "ticker": "ZSAN",
    "exchange": "NASDAQ",
    "name": "Zosano Pharma Corp."
  },
  {
    "ticker": "ZSL",
    "exchange": "NYSE ARCA",
    "name": "ProShares UltraShort Silver"
  },
  {
    "ticker": "ZTO",
    "exchange": "NYSE",
    "name": "ZTO Express (Cayman) Inc. Sponsored ADR Class A"
  },
  {
    "ticker": "ZTR",
    "exchange": "NYSE",
    "name": "Virtus Total Return Fund Inc"
  },
  {
    "ticker": "ZTS",
    "exchange": "NYSE",
    "name": "Zoetis Inc. Class A"
  },
  {
    "ticker": "ZUMZ",
    "exchange": "NASDAQ",
    "name": "Zumiez Inc."
  },
  {
    "ticker": "ZUO",
    "exchange": "NYSE",
    "name": "Zuora Inc. Class A"
  },
  {
    "ticker": "ZVO",
    "exchange": "NASDAQ",
    "name": "Zovio Inc."
  },
  {
    "ticker": "ZYME",
    "exchange": "NYSE",
    "name": "Zymeworks Inc."
  },
  {
    "ticker": "ZYNE",
    "exchange": "NASDAQ",
    "name": "Zynerba Pharmaceuticals Inc"
  },
  {
    "ticker": "ZYXI",
    "exchange": "NASDAQ",
    "name": "Zynex Inc."
  }
];

module.exports = stockList;