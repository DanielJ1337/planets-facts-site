const express = require('express');

const router = express.Router();

router.route('/:id?').get((req, res) => {
    res.locals.strippedId = req.url.slice(-1);
    res.locals.urlString = req.originalUrl;
    res.render('planet');
});

router.route('/:id?/surface').get((req, res) => {
    const URL = req.url;
    res.locals.strippedId = URL.substring(URL.length-9, URL.length-8);
    res.locals.urlString = req.originalUrl;
    console.log(res.locals.urlString);

    res.locals.planetStructures = [
        {
            "id": 0,
            "structure": "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."
        },
        {
            "id": 1,
            "structure": "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate."},
        {
            "id": 2,
            "structure": "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle."
        },
        {
            "id": 3,
            "structure": "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur."},
        {
            "id": 4,
            "structure": "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core."
        },
        {
            "id": 5,
            "structure": "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass."
        },
        {
            "id": 6,
            "structure":"The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses."
        },
        {
            "id": 7,
            "structure": "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions."
        }

    ]
    res.render('planet');
})

// ! TODO: isolate correct planet id to load the right description in div

router.route('/:id?/geology').get((req, res) => {
    res.locals.strippedId = req.url.slice(-1);
    res.locals.urlString = req.originalUrl;

    res.locals.planetStructures = [
        {
            "id": 0,
            "geology":"Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s."
        },
        {
            "id": 1,
            "geology":"Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii."
        },
        {
            "id": 2,
            "geology":"The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors."
        },
        {
            "id": 3,
            "geology":"Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt."
        },
        {
            "id": 4,
            "geology":"The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665."
        },
        {
            "id": 5,
            "geology":"The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust."
        },
        {
            "id": 6,
            "geology": "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere."
        },
        {
            "id": 7,
            "geology": "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum."
        },

    ]
    res.render('planet');
})

router.route('/').get((req, res) => {
    res.redirect('/planets');
});

module.exports = router;
