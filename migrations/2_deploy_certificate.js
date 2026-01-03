const CertificateVerification = artifacts.require("CertificateVerification");

module.exports = function (deployer) {
  deployer.deploy(CertificateVerification, { gas: 6000000 });

};



