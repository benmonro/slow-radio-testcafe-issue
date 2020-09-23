const { Selector } = require("testcafe");

fixture`example of slow radio problem`;


test.page`./custom-styled-radio.html`("is not slow", async (t) => {
    await t.click(Selector("input[type=radio]").nth(0))
});

test.page`./custom-styled-radio2.html`("is slow", async t => {
    await t.click(Selector("input[type=radio]").nth(0))
});

