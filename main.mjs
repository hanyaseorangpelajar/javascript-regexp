import { countryCodes } from "./countryCodes.mjs";

function validasiNomorTelepon(phoneNumber) {
  const pattern = new RegExp(
    "^\\+([1-9]{1}[0-9]{0,2})-[2-9]{1}[0-9]{2}-[2-9]{1}[0-9]{2}-[0-9]{4}$"
  );

  const match = phoneNumber.match(pattern);

  if (match) {
    const countryCode = match[1];
    const country = countryCodes.get(countryCode) || "Negara tidak ditemukan";

    console.log(
      "|Valid|",
      "|Kode Negara:",
      countryCode,
      "|",
      "|Negara:",
      country,
      "|"
    );

    return {
      isValid: true,
      countryCode: countryCode,
      country: country,
    };
  } else {
    console.log("Nomor telepon invalid");
    return {
      isValid: false,
      countryCode: null,
      country: null,
    };
  }
}

validasiNomorTelepon("+1-202-555-0123");
validasiNomorTelepon("+62-21-555-0123");
validasiNomorTelepon("+1-416-555-0123");
validasiNomorTelepon("202-555-0123");
validasiNomorTelepon("+1-2025550123");
validasiNomorTelepon("+99-202-555-0123");
validasiNomorTelepon("+1-012-555-0123");
validasiNomorTelepon("+1-202-55-0123");
validasiNomorTelepon("+1-202-555-abc");
validasiNomorTelepon("+44-20-7946-0958");
