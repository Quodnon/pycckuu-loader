module.exports = function(содержимое) {
  [
    [/увага\s*\(/g, 'alert('],                        // alert
    [/консоль\./g, 'console.'],                          // console
    [/console\.(логувати|лог)\s*\(/g, 'console.log('], // log
    [/стоп(;|\s+)/g, 'break$1'],                         // break
    [/випадок\s+/g, 'case '],                             // case
    [/клас\s+/g, 'class '],                             // class
    [/схопити|щосьнете\s*\(/g, 'catch('],                         // catch
    [/константа\s+/g, 'const '],                         // const
    [/продовжити(;|\s+)/g, 'continue$1'],                // continue
    [/зазамовчуванням\s*:/g, 'default:'],                    // default
    [/видалити\s+/g, 'delete '],                          // delete
    [/зроби(\s*{|\s+)/g, 'do$1'],                       // do
    [/інакше(\s+|\{)/g, 'else$1'],                        // else
    [/експортувати\s+/g, 'export '],                   // export
    [/\s+розширює\s+/g, ' extends '],                   // extends
    [/вкінці(\s+|\{)/g, 'finally$1'],                    // finally
    [/цикл(\s*\()/g, 'for ('],                           // for
    [/функція(\s+|\()/g, 'function$1'],                  // function
    [/якщо\s*\(/g, 'if ('],                              // if
    [/імпортувати\s+/g, 'import '],                    // import
    [/\s+в\s+/g, ' in '],                                // in
    [/\s+екземпляр(\s+|\()/g, ' instanceof$1'],          // instanceo
    [/нехай\s+/g, 'let '],                               // let
    [/новий\s+/g, 'new '],                               // new
    [/\s+з\s+/g, ' of '],                               // of
    [/повернути\s+/g, 'return '],                          // return
    [/супер\s*\(/g, 'super('],                           // super
    [/перебрати\s*\(/g, 'switch ('],                     // switch
    [/тут|цей|осьоце/g, ' this'],                              // this
    [/кинути|шпурнути\s+/g, 'throw '],                           // throw
    [/спробувати|анука(\s+|\s*{)/g, 'try$1'],                 // try
    [/тип(\s+|\s*\()/g, 'typeof$1'],                     // typeof
    [/змін(на)?\s+/g, 'var '],                       // var
    [/пусто\s*\(/g, 'void('],                            // void
    [/поки\s*\(/g, 'while ('],                           // while
    [/з\s*\(/g, 'with ('],                       // with
    [/поступитись\s+/g, 'yield '],                          // yield
    [/\.скоротити\(\)/g, '.pop()'],                      // pop
    [/\.добавити\(/g, '.push('],                         // push
    [/\.зворотний\(\)/g, '.reverse()'],                   // reverse
    [/\.зрушити\(\)/g, '.shift()'],                     // shift
    [/\.сортувати\(/g, '.sort('],                      // sort
    [/\.зєднати\(/g, '.splice('],                      // splice
    [/\.роздвинути\(/g, '.unshift('],                    // unshift
    [/\.звязати\(/g, '.concat('],                        // concat
    [/\.обєднати\(/g, '.join('],                       // join
    [/\.зріз\(/g, '.slice('],                            // slice
    [/\.в(c|С)троку\(\)/g, '.toSrtring()'],              // toString
    [/\.номер(В|в)\(/g, '.indexOf('],                    // indexOf
    [/\.для(К|к)кожного\(/g, '.forEach('],                // forEach
    [/\.кожний\(/g, '.every('],                          // every
    [/\.хочаб(О|о)дин\(/g, '.some('],                     // some
    [/\.фільтр\(/g, '.filter('],                         // filter
    [/\.мапа\(/g, '.map('],                             // map
    [/\.звести\(/g, '.reduce('],                         // reduce
    [/\.прототип(\.|\s+)/g, '.prototype$1'],             // prototype
    [/\.довжина/g, '.length'],                             // length
  ].forEach(function(англ) {
    содержимое = содержимое.replace(англ[0], англ[1]);
  });

  return содержимое;
}
