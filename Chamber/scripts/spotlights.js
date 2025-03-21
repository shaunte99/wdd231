document.addEventListener("DOMContentLoaded", () => {
    const businesses = [
        {
            "name": "Study247",
            "industry": "Education & Childcare",
            "description": "Providing top-quality educational services for young learners.",
            "image": "images/logo.webp"
        },
        {
            "name": "Infinity Pageants",
            "industry": "Fashion & Events",
            "description": "Promoting confidence and elegance through pageantry.",
            "image": "images/infinity.jpg"
        },
        {
            "name": "Tech Solutions SA",
            "industry": "IT & Software",
            "description": "Delivering innovative tech solutions to South African businesses.",
            "image": "images/itcompany.jfif"
        }
    ];

    const spotlightContainer = document.querySelector(".spotlight-container");

    businesses.forEach(business => {
        const spotlightDiv = document.createElement("div");
        spotlightDiv.classList.add("spotlight");

        const businessImage = document.createElement("img");
        businessImage.src = business.image;
        businessImage.alt = business.name;

        const businessDetails = document.createElement("div");
        businessDetails.classList.add("spotlight-details");

        const businessName = document.createElement("h3");
        businessName.textContent = business.name;

        const businessIndustry = document.createElement("p");
        businessIndustry.textContent = `Industry: ${business.industry}`;

        const businessDescription = document.createElement("p");
        businessDescription.textContent = business.description;

        businessDetails.appendChild(businessName);
        businessDetails.appendChild(businessIndustry);
        businessDetails.appendChild(businessDescription);

        spotlightDiv.appendChild(businessImage);
        spotlightDiv.appendChild(businessDetails);

        spotlightContainer.appendChild(spotlightDiv);
    });
});
