var express = require("express");
var router = express.Router();

const ctrlAbout = require("../controllers/about");

const ctrlBike = require("../controllers/bike");
const ctrlCar = require("../controllers/car"); // import car controller
const ctrlAccessory = require("../controllers/accessory");
const ctrlContact = require("../controllers/contact");

router.get("/", ctrlBike.index);
// GET bike list
router.get("/list", ctrlBike.bikelists);

/* GET about page. */
router.get("/about", ctrlAbout.about);

/* GET particular bike. */
router.get("/bikes/:bikeid", ctrlBike.bikeInfo);

/* Add new bike. */
router.route("/new").get(ctrlBike.addNewBike).post(ctrlBike.doAddNewBike);

/* update bike. */
router
  .route("/update/:bikeid")
  .get(ctrlBike.updateBike)
  .post(ctrlBike.doUpdateNewBike);

/* delete bike. */
router.get("/delete/:bikeid", ctrlBike.deleteBike);

// Car routes
router.get("/cars", ctrlCar.carlists);
router.get("/cars/:carid", ctrlCar.carInfo);
router.route("/cars/new").get(ctrlCar.addNewCar).post(ctrlCar.doAddNewCar);
router
  .route("/cars/update/:carid")
  .get(ctrlCar.updateCar)
  .post(ctrlCar.doUpdateNewCar);
router.get("/cars/delete/:carid", ctrlCar.deleteCar);

// Accessory routes
router.get("/accessories", ctrlAccessory.accessorylists);
router.get("/accessories/:accessoryid", ctrlAccessory.accessoryInfo);
router
  .route("/accessories/new")
  .get(ctrlAccessory.addNewAccessory)
  .post(ctrlAccessory.doAddNewAccessory);
router
  .route("/accessories/update/:accessoryid")
  .get(ctrlAccessory.updateAccessory)
  .post(ctrlAccessory.doUpdateNewAccessory);
router.get("/accessories/delete/:accessoryid", ctrlAccessory.deleteAccessory);

//Contact us
router.get("/contactus", ctrlContact.showContactPage);
router.post("/contactus", ctrlContact.submitContactForm);

module.exports = router;
