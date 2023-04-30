-- AlterTable
CREATE SEQUENCE "public".order_id_seq;
ALTER TABLE "public"."Order" ALTER COLUMN "id" SET DEFAULT nextval('"public".order_id_seq');
ALTER SEQUENCE "public".order_id_seq OWNED BY "public"."Order"."id";

-- AlterTable
CREATE SEQUENCE "public".shipment_id_seq;
ALTER TABLE "public"."Shipment" ALTER COLUMN "id" SET DEFAULT nextval('"public".shipment_id_seq');
ALTER SEQUENCE "public".shipment_id_seq OWNED BY "public"."Shipment"."id";

-- AlterTable
CREATE SEQUENCE "public".user_id_seq;
ALTER TABLE "public"."User" ALTER COLUMN "id" SET DEFAULT nextval('"public".user_id_seq');
ALTER SEQUENCE "public".user_id_seq OWNED BY "public"."User"."id";
