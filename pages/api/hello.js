// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const premoderation = true;

export default (req, res) => {
    console.log("Cookie was accepted");
    res.status(200).json({ name: "John Doe" });
};
