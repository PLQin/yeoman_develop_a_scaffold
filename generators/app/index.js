var path = require('path');
var chalk = require('chalk');
var util = require('util');

var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var path = require('path');


var Reactpackage = yeoman.Base.extend({
    info: function() {
        this.log(chalk.green(
            'I am going to build your app!'
        ));
    },
    generateBasic: function() {
        this.directory('pages', 'pages');
        this.directory('utils', 'utils');
        this.directory('build', 'build');
        this.directory('config', 'config');
        this.copy('.editorconfig', '.editorconfig');
        this.copy('.eslintrc.js', '.eslintrc.js');
        this.copy('app.js', 'app.js');
        this.copy('app.json', 'app.json');
        this.copy('app.wxss', 'app.wxss');
        this.copy('gulpfile.js', 'gulpfile.js');
        this.copy('package.json', 'package.json');
        this.copy('project.config.json', 'project.config.json');
    },
    generateClient: function() {
        this.sourceRoot(path.join(__dirname, 'templates'));
        this.destinationPath('./');
    },
    install: function() {
        this.installDependencies({
            skipInstall: this.options['skip-install']
        });
    },
    end: function() {
        this.log(yosay(
            'Your app has been created successfully!'
        ));
    }
});

module.exports = Reactpackage;





// prompting: function() {
//     var done = this.async();
//     this.log(
//         chalk.green('I am going to build your app!')
//     );
//     var prompts = [
//         {
//             type: 'input',
//             name: 'name',
//             message: 'name of app:',
//             default: 'tempate'
//         },
//         {
//             type: 'input',
//             name: 'description',
//             message: 'description:',
//             default: 'app description'
//         },
//         {
//             type: 'input',
//             name: 'license',
//             message: 'license:',
//             default: 'MIT'
//         },
//         {
//             type: 'input',
//             name: 'author',
//             message: 'author:',
//             default: ''
//         }
//     ];
//     this.prompt(prompts, function (props) {
//         this.appName = props.name;
//         this.description = props.description;
//         this.author = props.author;
//         this.license = props.license;
//         done();  //进入下一个生命周期阶段
//     }.bind(this));
// }
