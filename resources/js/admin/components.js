import Vue from 'vue'
import Layout from './views/Layout'

import Header from './views/partials/Header'
import Navbar from './views/partials/Navbar'
import LeftSideMenu from './views/partials/LeftSideMenu'
import Footer from './views/partials/Footer'

import Customers from './views/customers/Index'
import ViewCustomers from './views/customers/View'

import SliderIndex from './views/slider/Index'
import SliderView from './views/slider/View'
import ItemFavourite from './views/slider/ItemFavourite'
import ItemCart from './views/slider/ItemCart'

import DataTable from './components/metronic/DataTable.vue'
import VAction from './components/metronic/goodtable/VAction.vue'
import VAction2 from './components/metronic/goodtable/VAction2.vue'
import VEmpty from './components/metronic/goodtable/VEmpty.vue'
import VHeader from './components/metronic/goodtable/VHeader.vue'
import VStatus from './components/metronic/goodtable/VStatus.vue'
import VFilter from './components/metronic/goodtable/VFilter.vue'
import VCustomFilter from './components/metronic/goodtable/VCustomFilter.vue'


import CustomerForm from './components/customers/CustomerForm.vue'

import LoginReg from './components/auth/LoginReg.vue'

import UsersIndex from './views/users/Index'
import ViewUsers from './views/users/View'
import UserDetails from './views/users/Details'

import SlotIndex from './views/slot/Index'
import SlotPage from './views/slot/SlotPage'
import SlotChild from './views/slot/SlotChild'

import MBadge from './components/metronic/base/MBadge.vue'
import MProgress from './components/metronic/base/MProgress.vue'

import FormsIndex from './views/forms/Index'
import ValidationForm from './views/forms/ValidationForm'
import DynamicForm from './views/forms/DynamicForm'
import VeeValidate from './views/forms/VeeValidate'



import FormBuilder from './components/formbuilder/FormBuilder.vue'




import EInput from "./components/FormElements/EInput";
import EInputNum from "./components/FormElements/EInputNum";
import ETextarea from "./components/FormElements/ETextarea";
import ECheckbox from "./components/FormElements/ECheckbox";
import ERadio from "./components/FormElements/ERadio";
import EDate from "./components/FormElements/EDate";
import ETime from "./components/FormElements/ETime";
import ESwitch from "./components/FormElements/ESwitch";
import ESelect from "./components/FormElements/ESelect";
import EUpload from "./components/FormElements/EUpload";
import EAddMore from "./components/FormElements/EAddMore";

import Input from "./components/FormElements/Input";
import Checkbox from "./components/FormElements/Checkbox";
import RadioButton from "./components/FormElements/RadioButton";
import ETree from "./components/FormElements/ETree";
import PTree from "./components/FormElements/PTree";


/* USE NGPRIME  Library*/
import PText from 'primevue/inputtext';
import PCheck from 'primevue/checkbox';
import PClrPicker from 'primevue/colorpicker';
import PDropdown from 'primevue/dropdown';
import PInputMask from 'primevue/inputmask';
import PInputSwitch from 'primevue/inputswitch';
import PListBox from 'primevue/listbox';
import PMultiSelect from 'primevue/multiselect';
import PPassword from 'primevue/password';
import PRadio from 'primevue/radiobutton';
import PRating from 'primevue/rating';
import PTabView from 'primevue/tabview';
import PTabPanel from 'primevue/tabpanel';
import PButton from 'primevue/button';
import PCarousel from 'primevue/carousel';
import Tree from 'primevue/tree';
import OverlayPanel from 'primevue/overlaypanel';
import Dialog  from 'primevue/dialog';

import ImagePreview from './views/users/ImagePreview.vue';

Vue.component('ImagePreview', ImagePreview)
Vue.component('Dialog', Dialog)

Vue.component('layout', Layout)

Vue.component('appHeader', Header)
Vue.component('quickNav', Navbar)
Vue.component('lsideMenu', LeftSideMenu)
Vue.component('appFooter', Footer)

Vue.component('Customers', Customers)
Vue.component('ViewCustomers', ViewCustomers)

Vue.component('DT', DataTable)
Vue.component('VAction', VAction)
Vue.component('VAction2', VAction2)
Vue.component('VEmpty', VEmpty)
Vue.component('VHeader', VHeader)
Vue.component('VStatus', VStatus)
Vue.component('VFilter', VFilter)
Vue.component('VCustomFilter', VCustomFilter)

Vue.component('CustomerForm', CustomerForm)

Vue.component('LoginReg', LoginReg)


Vue.component('UsersIndex', UsersIndex)
Vue.component('ViewUsers', ViewUsers)
Vue.component('UserDetails', UserDetails)

Vue.component('SlotIndex', SlotIndex)
Vue.component('SlotPage', SlotPage)
Vue.component('SlotChild', SlotChild)

Vue.component('MBadge', MBadge)
Vue.component('MProgress', MProgress)

Vue.component('FormsIndex', FormsIndex)
Vue.component('ValidationForm', ValidationForm)
Vue.component('DynamicForm', DynamicForm)
Vue.component('VeeValidate', VeeValidate)


Vue.component('FormBuilder', FormBuilder)

Vue.component('SliderIndex', SliderIndex)
Vue.component('SliderView', SliderView)
Vue.component('ItemFavourite', ItemFavourite)
Vue.component('ItemCart', ItemCart)


/* Prime Component */
Vue.component('PText', PText);
Vue.component('PCheck', PCheck);
Vue.component('PClrPicker',PClrPicker)
Vue.component('PDropdown',PDropdown)
Vue.component('PInputMask',PInputMask)
Vue.component('PInputSwitch',PInputSwitch)
Vue.component('PListBox',PListBox)
Vue.component('PMultiSelect',PMultiSelect)
Vue.component('PPassword',PPassword)
Vue.component('PRadio',PRadio)
Vue.component('PRating',PRating)
Vue.component('PTabView',PTabView)
Vue.component('PTabPanel',PTabPanel)
Vue.component('PButton',PButton)
Vue.component('Tree',Tree);
Vue.component('PCarousel',PCarousel);
Vue.component('OverlayPanel',OverlayPanel);


/*  Form Elements */
Vue.component('EInput',EInput)
Vue.component('EInputNum',EInputNum)
Vue.component('ETextarea',ETextarea)
Vue.component('ECheckbox',ECheckbox)
Vue.component('ERadio',ERadio)
Vue.component('EDate',EDate)
Vue.component('ETime',ETime)
Vue.component('ESwitch',ESwitch)
Vue.component('ESelect',ESelect)
Vue.component('EUpload',EUpload)
Vue.component('EAddMore',EAddMore)
Vue.component('ETree',ETree)
Vue.component('PTree',PTree)

Vue.component('Input',Input)
Vue.component('Checkbox',Checkbox)
Vue.component('RadioButton',RadioButton)




