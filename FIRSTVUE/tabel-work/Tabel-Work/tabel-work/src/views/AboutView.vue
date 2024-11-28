<!-- <template>
  <div class="parent">
    <h1>Периодическая таблица элементов</h1>
    <table>
      <tr>
        <th>№</th>
        <th>Элемент</th>
        <th>Молярная масса(г/моль)</th>
        <th>Период</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Водород</td>
        <td>1.01</td>
        <td>1</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Гелий</td>
        <td>4.00</td>
        <td>1</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Литий</td>
        <td>6.94</td>
        <td>2</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Бериллий</td>
        <td>9.01</td>
        <td>2</td>
      </tr>
    </table>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

table
{
  width: 100%; 
  border-collapse: collapse; 
}
td, th
{
  padding: 3px; 
  border: 1px solid #000; 
}
th 
{
  background: green; 
  color: black;  
}
</style> -->

<!-- <template>
  <div>
      <h1>Периодическая таблица элементов</h1>
  
          <div>
              <tr v-for="(Element, index) in Elements" :key="index">
                <td>{{ Element.name }}</td>
                <td>{{ Element.number }}</td>
              </tr>
           </div>
          
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent(
  {
      name: "Tabel",
     data(){
      return {

        Elements :
          [
              {name:"Элемент",number:12},
              {name:"Водород",number:12},
              {name:"Гелий",number:12},
              {name:"Литий",number:12},
              {name:"Бериллий",number:12},
          ]
      };
     }
       
       
  }
  );
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

table
{
  width: 100%; 
  border-collapse: collapse; 
}
td, th
{
  padding: 3px; 
  border: 1px solid #000; 
}
th 
{
  background: green; 
  color: black;  
}
</style>  -->


