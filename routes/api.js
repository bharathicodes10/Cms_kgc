const express = require("express");
const { catchErrors } = require("../handlers/errorHandlers");

const router = express.Router();

const adminController = require("../controllers/adminController");
const clientController = require("../controllers/clientController");

const leadController = require("../controllers/leadController");
const productController = require("../controllers/productController");
const inventoryController = require("../controllers/inventoryController");
const salaryController = require("../controllers/salaryController");
//const reportController=require("../controllers/reportController");
const Budget=require("../controllers/productController");
const budgetController=require("../controllers/budgetController");
//_______________________________ Admin management_______________________________

router.route("/admin/create").post(catchErrors(adminController.create));
router.route("/admin/read/:id").get(catchErrors(adminController.read));
router.route("/admin/update/:id").patch(catchErrors(adminController.update));
router.route("/admin/delete/:id").delete(catchErrors(adminController.delete));
router.route("/admin/search").get(catchErrors(adminController.search));
router.route("/admin/list").get(catchErrors(adminController.list));

router
  .route("/admin/password-update/:id")
  .patch(catchErrors(adminController.updatePassword));
//list of admins ends here

//_____________________________________ API for clients __________________________
router.route("/client/create").post(catchErrors(clientController.create));
router.route("/client/read/:id").get(catchErrors(clientController.read));
router.route("/client/update/:id").patch(catchErrors(clientController.update));
router.route("/client/delete/:id").delete(catchErrors(clientController.delete));
router.route("/client/search").get(catchErrors(clientController.search));
router.route("/client/list").get(catchErrors(clientController.list));

//_____________________________________ API for leads ___________________________
router.route("/lead/create").post(catchErrors(leadController.create));
router.route("/lead/read/:id").get(catchErrors(leadController.read));
router.route("/lead/update/:id").patch(catchErrors(leadController.update));
router.route("/lead/delete/:id").delete(catchErrors(leadController.delete));
router.route("/lead/search").get(catchErrors(leadController.search));
router.route("/lead/list").get(catchErrors(leadController.list));

//_____________________________________ API for products ___________________________
router.route("/product/create").post(catchErrors(productController.create));
router.route("/product/read/:id").get(catchErrors(productController.read));
router
  .route("/product/update/:id")
  .patch(catchErrors(productController.update));
router
  .route("/product/delete/:id")
  .delete(catchErrors(productController.delete));
router.route("/product/search").get(catchErrors(productController.search));
router.route("/product/list").get(catchErrors(productController.list));
router.route("/orders").get(catchErrors(productController.orders));
//_____________________________________ API for inventory ___________________________
router.route("/inventory/create").post(catchErrors(inventoryController.create));
router.route("/inventory/read/:id").get(catchErrors(inventoryController.read));
router
  .route("/inventory/update/:id")
  .patch(catchErrors(inventoryController.update));
router
  .route("/inventory/delete/:id")
  .delete(catchErrors(inventoryController.delete));
router.route("/inventory/search").get(catchErrors(inventoryController.search));
router.route("/inventory/list").get(catchErrors(inventoryController.list));
//_____________________________________ API for salary ___________________________
router.route("/salary/create").post(catchErrors(salaryController.create));
router.route("/salary/read/:id").get(catchErrors(salaryController.read));
router
  .route("/salary/update/:id")
  .patch(catchErrors(salaryController.update));
router
  .route("/salary/delete/:id")
  .delete(catchErrors(salaryController.delete));
router.route("/salary/search").get(catchErrors(salaryController.search));
router.route("/salary/list").get(catchErrors(salaryController.list));
//_____________________________________ API for budget ___________________________
router.route("/budget/create").post(catchErrors(budgetController.create));
router.route("/budget/read/:id").get(catchErrors(budgetController.read));
router
  .route("/budget/update/:id")
  .patch(catchErrors(budgetController.update));
router
  .route("/budget/delete/:id")
  .delete(catchErrors(budgetController.delete));
router.route("/budget/search").get(catchErrors(budgetController.search));
router.route("/budget/list").get(catchErrors(budgetController.list));
module.exports = router;
