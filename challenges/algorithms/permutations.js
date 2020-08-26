function permAlone(str) {

  function permString(sArray) {
    if (sArray.length <= 1){
      return [sArray];
    } else {

    var perms = [];

    // Para cada letra, calcula as permutações
    sArray.forEach((el, index, arr) => {

        // faz cópia do array
        var tmpArr = arr.slice();

        // retira caractere atual do array cópia
        tmpArr.splice(index, 1);

        // chama a função para permutar os caracteres restantes
        // retorna array com todas as permutações possíveis
        var tmpPerms = permString(tmpArr);

        // para guardar todas as permutações
        // tmpPerms.forEach(item => perms.push([el, ...item]));

        // para guardar apenas as que não têm repetições
        tmpPerms.forEach(item => {
          if (el !== item[0]) perms.push([el, ...item]);
        });
      })

      // retorna array com todas as permutações
      return perms;
    };
  }

  var allPerms = permString([...str]);
  // console.log(allPerms);
  return allPerms.length;
}

permAlone('aab');