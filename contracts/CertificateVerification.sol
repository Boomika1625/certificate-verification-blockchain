pragma solidity ^0.5.16;

contract CertificateVerification {

    struct Certificate {
        string studentName;
        string course;
        string institution;
        uint issueDate;
        bool isValid;
    }

    mapping(string => Certificate) private certificates;

    function issueCertificate(
        string memory _hash,
        string memory _studentName,
        string memory _course,
        string memory _institution
    ) public {
        certificates[_hash] = Certificate(
            _studentName,
            _course,
            _institution,
            block.timestamp,
            true
        );
    }

    function verifyCertificate(string memory _hash)
        public
        view
        returns (
            bool,
            string memory,
            string memory,
            string memory
        )
    {
        Certificate memory cert = certificates[_hash];
        return (
            cert.isValid,
            cert.studentName,
            cert.course,
            cert.institution
        );
    }
}
