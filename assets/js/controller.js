(function(){

	angular
		.module('app')
		.controller('EstacioneAquiCtrl', EstacioneAquiCtrl);

	function EstacioneAquiCtrl() {

		var vm = this;

		vm.vagas = [
			{
				id: 1,
				latitude: -22.966601,
				longitude: -74.2041485,
				ocupada: true
			},
			{
				id: 2,
				latitude: -53.966601,
				longitude: -13.2041485,
				ocupada: false
			},
			{
				id: 3,
				latitude: -71.966601,
				longitude: -41.2041485,
				ocupada: false
			},
			{
				id: 4,
				latitude: -98.966601,
				longitude: -69.2041485,
				ocupada: true
			}
		];

		vm.save = function(form) {
			if (form.$valid) {
				vm.vagas.push(angular.copy(vm.vaga));
				vm.vaga = {};
			}
		};

		vm.remove = function(key) {
			if (confirm('Tem certeza que deseja excluir a vaga?')) {
				vm.vagas.splice(key, 1);
			}
		};

	};

})();