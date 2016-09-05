import { MailgunProvider } from "./App"

export function run() {
  QUnit.test("QU", function(assert) {
    MailgunProvider.send;
    assert.ok(true);
  });
}
