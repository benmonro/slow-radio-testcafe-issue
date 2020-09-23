const { Selector } = require("testcafe");

fixture`example of slow radio problem`;


test.page`./fast.html`("is fast", async (t) => {
    await t.click(Selector("input[type=radio]").nth(0))
});

test.page`./slow.html`("is slow", async t => {
    await t.click(Selector("input[type=radio]").nth(0))
});

