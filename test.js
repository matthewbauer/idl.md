import idl from "./idl-md"

names.forEach(function (name) {
  describe(name, function () {
    let idlData, mdData
    before(function (done) {
      System.import(`test/${name}.idl`).then(function (data) {
        idlData = data
      }).then(done, done)
    })
    before(function (done) {
      System.import(`spec/${file}.md`).then(function (data) {
        mdData = data
      }).then(done, done)
    })
    it('can parse file', function () {
      let output = idl.parse(idlData)
      expect(output).to.equal(mdData)
    })
  })
})
