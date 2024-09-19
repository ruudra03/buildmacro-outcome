import { Inject } from "@angular/core";
import { AngularFirestore, QueryFn } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";

export abstract class FirestoreService<T> {

  protected abstract basePath: string;

  constructor(@Inject(AngularFirestore) protected firestore: AngularFirestore) { }

  collection$(queryFn?: QueryFn): Observable<T[]> {
    return this.firestore.collection<T>(`${this.basePath}`, queryFn).valueChanges().pipe(
      tap(r => {
        if (!environment.production) {
          console.groupCollapsed(`Firestore Streaming [${this.basePath}] [collection$]`)
          console.table(r)
          console.groupEnd()
        }
      }),
    );
  }

  async create(value: T) {
    const id = this.firestore.createId();
    const _ = await this.collection.doc(id).set(Object.assign({}, { id }, value));
    if (!environment.production) {
      console.groupCollapsed(`Firestore Service [${this.basePath}] [create]`);
      console.log('[Id]', id, value);
      console.groupEnd();
    }
  }

  async delete(id: string) {
    const _ = await this.collection.doc(id).delete();
    if (!environment.production) {
      console.groupCollapsed(`Firestore Service [${this.basePath}] [delete]`);
      console.log('[Id]', id);
      console.groupEnd();
    }
  }

  private get collection() {
    return this.firestore.collection(`${this.basePath}`);
  }
}
