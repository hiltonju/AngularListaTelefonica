angular.module('MyApp',[]);
		angular.module('MyApp').controller('Myctrl', function($scope){
		$scope.idCont = 3;
		$scope.adicionar = true;
		$scope.editId = 0;
		$scope.editNome = "";
		$scope.editTel = "";
		$scope.editSexo = "";
		$scope.listas = [
		{	
			id: 1,
			nome: "will",
			telefone: 666,
			sexo: "desconhecido"
		},
		{	
			id: 2,
			nome: "Jax",
			telefone: 777,
			sexo: "alguma Coisa"
		}];

		$scope.inserir = function(lista) {
			lista.id = $scope.idCont;
			$scope.idCont++;
			$scope.listas.push(angular.copy(lista));
			delete $scope.lista;			
 
		};

		$scope.excluir = function(id) {
			$scope.listas = $scope.listas.filter(function(lista){
				if(lista.id != id){
					return lista;
				}
			});
		};

		$scope.editar = function(id) {
			$scope.adicionar = false;
			var dados = $scope.listas.filter(function(lista){
				if(lista.id == id){
					return lista;
				}
			})

			$scope.editId = dados[0].id;
			$scope.editNome = dados[0].nome;
			$scope.editTel = dados[0].telefone;
			$scope.editSexo = dados[0].sexo;
		};

		$scope.isAdd = function() {
			return $scope.adicionar;
		};

		$scope.salvar = function(){
			$scope.listas = $scope.listas.filter(function(lista){
			if(lista.id == $scope.editId){
				lista.id = $scope.editId;
				lista.nome = $scope.editNome;
				lista.telefone = $scope.editTel;
				lista.sexo = $scope.editSexo;
				return lista;
			}else{
				return lista;
			}
			
			})
			$scope.adicionar = true;
		};
	});