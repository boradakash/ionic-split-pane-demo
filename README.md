
## Ionic Split Pane

Ionic 2.2.0 was released with one very good feature which is **Split Pane**.

If you ever used **Gmail App** on tablet or **iOS's mail app** on iPad, then Split Pane is quit familiar.

SplitPane is component in ionic that creates multiple view layout like iPad apps.

It is nothing but the UI Elements that will be shown as the viewport increases.

When device screen size is below some certain size,splitpane will collapse.

Now let's create a simple application for splitpane component in ionic

> Note: Ionic version (>2.2.0)

> If you don't have basic setup for ionic app, then take a look at this [article](http://jslovely.blogspot.com).

Then go to the root component file which is app.component.ts

### 1) USAGE
Now Apply the Split Pane component around the root component as below:

```
<ion-split-pane>
<!--  our side menu  -->
  <ion-menu [content]="content">
  <ion-header>
    <ion-toolbar>
      <ion-title>Pages</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">
        {{p.title}}
     </button>
    </ion-list>
  </ion-content>
</ion-menu>

<!--  the main content-->
<ion-nav [root]="rootPage" #content swipeBackEnabled="false" main></ion-nav>
</ion-split-pane>
```
As you can see from highlighted code, there is a main attribute, which tells ionic that make this component as central component on larger screen.

When you run this project using ionic serve, you will get following screen.

As you can see, there are two views
1. Left View (Menu items)
2. Right View (Main Content)

### 2) Breakpoints

You can also control the behavior of split pane, you can display split pane when you wish using when input

```
<ion-split-pane when="(min-width: 500px)">

  <!--  side menu  -->

  <ion-menu [content]="content">

  ....

  </ion-menu>

  <!-- main content -->

  <ion-nav [root]="root" main #content></ion-nav>

</ion-split-pane>
```
Here in the above example, Split Pane will be displayed when the viewport is atleast 500px.

#### Conditional
We can also make it conditional as below:
```
<ion-split-pane [when]="isVisible" >
 ...
</ion-split-pane>

//class file
export class MyClass{
  public isVisible= false;
}
```
### 3) Events

Sometimes you may have situation when you want to listen for the events when SplitPane show or hide.
You can use ionic ionChange event to get track of it.

```
<ion-split-pane (ionChange)="splitPaneChange($event)" >
 ...

</ion-split-pane>

//class file

export class MyClass{

   splitPaneChange(e) {

    console.log("Split Pane Visible:",e._visible);

  }

}
```
Hope that helps
